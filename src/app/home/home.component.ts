import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../models/artist.model';
import { DeezerData } from '../models/deezer-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  artistList: DeezerData<Artist[]> | undefined;

  constructor(private router: Router) {}

  searchResponse(data: DeezerData<Artist[]>): void {
    console.log(data);
    this.artistList = data;
  }

  redirectHome(): void {
    this.router.navigate(['/']);
  }

}
