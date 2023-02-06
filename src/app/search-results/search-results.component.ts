import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DeezerData } from '../models/deezer-data.model';
import { Artist } from '../models/artist.model';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { DeezerProxyService } from '../services/deezer-proxy.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  @Input('artistList') data: DeezerData<Artist[]> | undefined;
  response$: Observable<DeezerData<Artist[]>> | undefined;

  constructor(private deezerProxyService: DeezerProxyService) {}

  handlePageEvent(event: PageEvent) {
    if (this.data?.next)
      this.response$ = this.deezerProxyService.continueSearchByIndex(this.data!.next);
  }

}
