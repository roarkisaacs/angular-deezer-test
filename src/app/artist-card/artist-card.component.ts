import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input('artist') artist: Artist | undefined;
  displayAlbumCount: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth > 1200) {
      this.displayAlbumCount = true;
    }
  }
}
