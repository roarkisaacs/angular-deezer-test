import { Component } from '@angular/core';
import { RootObject } from './models/deezer-artist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musicdb-app-angular';
  artistList: RootObject | undefined;

  searchResponse(data: RootObject): void {
    console.log(data);
    this.artistList = data;
  }
}
