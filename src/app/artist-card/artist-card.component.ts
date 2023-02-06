import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent {

  @Input('artist') artist: Artist | undefined;
}
