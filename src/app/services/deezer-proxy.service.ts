import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { RootObject } from '../models/deezer-artist.model';
import { EditorialResponse } from "../models/editorial.model";

@Injectable({
    providedIn: 'root'
})
export class DeezerProxyService {
    private editorialCache: EditorialResponse | undefined;
    
    constructor(private httpClient: HttpClient) {}

    public getArtistByName(searchValue: string): Observable<RootObject> {
        return this.httpClient.get<RootObject>(`https://api.deezer.com/search?q=${searchValue}&strict=on`)
    }

    public getEditorialList(): Observable<EditorialResponse> {
        if (this.editorialCache) {
            return of(this.editorialCache)
        }
        return this.httpClient.get<EditorialResponse>(`https://api.deezer.com/editorial/0/charts`)
            .pipe(
                map((response: EditorialResponse) => {
                    this.editorialCache = { ...response };
                    console.log(this.editorialCache);
                    return this.editorialCache
                })
            )
    }

    public queryArtist(artistName: string) {
        return this.httpClient.get(`https://api.deezer.com/search?q=artist:"${artistName}`)
    }
}