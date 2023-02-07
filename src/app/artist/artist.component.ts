import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DeezerProxyService } from '../services/deezer-proxy.service';
import { ArtistView } from '../models/artist-view.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent implements OnInit {
  artistView$: Observable<ArtistView> | undefined;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private deezerProxyService: DeezerProxyService
  ) { }

  ngOnInit(): void {
    this.getArtistIDFromRoute();
  }

  private getArtistIDFromRoute(): void {
    const artistID = this.route.snapshot.paramMap.get('id')! || undefined;

    if (!artistID) this.routeToHome();

    this.getArtistView(artistID!);
  }

  private getArtistView(id: string): void {
    this.artistView$ = this.deezerProxyService.getArtistView(id)
  }

  routeToHome(): void {
    this.router.navigate(['/'])
  }
}
