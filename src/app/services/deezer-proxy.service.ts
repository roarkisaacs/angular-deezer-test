import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, Observable, of } from "rxjs";
import { DeezerData } from "../models/deezer-data.model";
import { Editorial } from "../models/editorial.model";
import { Artist } from "../models/artist.model";
import { Album } from "../models/album.model";
import { Track } from "../models/track.model";
import { ArtistView } from "../models/artist-view.model";

@Injectable({
    providedIn: 'root'
})
export class DeezerProxyService {
    private editorialCache: Editorial | undefined;
    
    constructor(private httpClient: HttpClient) {}

    public querySearchTermByArtistName(searchValue: string): Observable<DeezerData<Artist[]>> {
        return this.httpClient.get<DeezerData<Artist[]>>(`https://api.deezer.com/search/artist?q=${searchValue}&strict=on`)
    }

    public continueSearchByIndex(url: string): Observable<DeezerData<Artist[]>> {
        return this.httpClient.get<DeezerData<Artist[]>>(`${url}`)
    }

    public getEditorialList(): Observable<Editorial> {
        if (this.editorialCache) {
            return of(this.editorialCache)
        }
        return this.httpClient.get<Editorial>(`https://api.deezer.com/editorial/0/charts`)
            .pipe(
                map((response: Editorial) => {
                    this.editorialCache = { ...response };
                    return this.editorialCache
                })
            )
    }

    private queryArtistInfoByID(id: string): Observable<Artist> {
        return this.httpClient.get<Artist>(`https://api.deezer.com/artist/${id}`)
    }
    private queryArtistAlbumsByID(id: string): Observable<DeezerData<Album[]>> {
        return this.httpClient.get<DeezerData<Album[]>>(`https://api.deezer.com/artist/${id}/albums`);
    }
    private queryArtistTracksByID(id: string): Observable<DeezerData<Track[]>> {
        return this.httpClient.get<DeezerData<Track[]>> (`https://api.deezer.com/artist/${id}/top`);
    }

    public getArtistView(id: string): Observable<ArtistView> {
        const combinedObservables = [];
        combinedObservables.push(this.queryArtistInfoByID(id));
        combinedObservables.push(this.queryArtistAlbumsByID(id));
        combinedObservables.push(this.queryArtistTracksByID(id));
        return forkJoin(combinedObservables).pipe(
            map((response: (Artist | DeezerData<Album[]> | DeezerData<Track[]>)[]) => {
                const artist = response[0] as Artist; 
                const deezerAlbums = response[1] as DeezerData<Album[]>; 
                const deezerTracks = response[2] as DeezerData<Track[]>; 
                return { 
                    artist: artist,
                    albums: deezerAlbums.data,
                    tracks: deezerTracks.data
                 }
            })
        )
    }
}