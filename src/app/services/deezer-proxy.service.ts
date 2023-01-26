import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RootObject } from '../models/deezer-artist.model';

@Injectable({
    providedIn: 'root'
})
export class DeezerProxyService {
    
    constructor(private httpClient: HttpClient) {}

    public getArtistByName(searchValue: string): Observable<RootObject> {
        return this.httpClient.get<RootObject>(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"${searchValue}"`);
    }

    public getEditorialList(): Observable<RootObject> {
        return this.httpClient.get<RootObject>(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/editorial/0/charts`);
    }
}