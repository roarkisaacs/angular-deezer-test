import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { DeezerData } from "../models/deezer-data.model";
import { Editorial } from "../models/editorial.model";
import { Artist } from "../models/artist.model";

@Injectable({
    providedIn: 'root'
})
export class DeezerProxyService {
    private editorialCache: Editorial | undefined;
    
    constructor(private httpClient: HttpClient) {}

    public querySearchTermByArtistName(searchValue: string): Observable<DeezerData<Artist[]>> {
        return this.httpClient.get<DeezerData<Artist[]>>(`https://api.deezer.com/search/artist?q=${searchValue}&strict=on`)
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

    public queryArtist(artistName: string) {
        return this.httpClient.get(`https://api.deezer.com/search?q=artist:"${artistName}`)
    }
}