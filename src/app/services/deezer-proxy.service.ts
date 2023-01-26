import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DeezerProxyService {
    
    constructor(private httpClient: HttpClient) {}

    public getArtistByName(searchValue: string): Observable<any> {
        return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://https://api.deezer.com/search?q=artist:${searchValue}`);
    }
}