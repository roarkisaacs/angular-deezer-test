import { Component } from '@angular/core';
import { DeezerData } from './models/deezer-data.model';
import { Artist } from './models/artist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musicdb-app-angular';
  artistList: DeezerData<Artist[]> | undefined;

  searchResponse(data: DeezerData<Artist[]>): void {
    console.log(data);
    this.artistList = data;
  }

  redirectHome(): void {}
}
