import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistCardComponent implements OnInit {

  @Input('artist') artist: Artist | undefined;
  displayAlbumCount: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (window.innerWidth > 1200) {
      this.displayAlbumCount = true;
    }
  }

  viewArtist(artistId: number): void {
    if (artistId) {
      this.router.navigate([`/artist/${artistId}`], { relativeTo: this.route}).then(result => console.log(result));
    }
  }
}
