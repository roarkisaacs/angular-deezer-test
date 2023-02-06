import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap } from 'rxjs';
import { DeezerProxyService } from '../services/deezer-proxy.service';
import { DeezerData } from '../models/deezer-data.model';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<DeezerData<Artist[]>>();
  public searchUpdate = new Subject<string>();
  public searchInput = '';
  public displaySearchBar: boolean = false;
  showSearchInput = false;

  constructor(private deezerProxyService: DeezerProxyService) {}

  ngOnInit(): void {
    this.setSearchQuery();
  }

  private setSearchQuery(): void {
    this.searchUpdate.pipe(
      filter((searchValue:string) => searchValue.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchValue: string) => this.deezerProxyService.querySearchTermByArtistName(searchValue))
    ).subscribe(
      (response: DeezerData<Artist[]>) => this.searchEvent.emit(response)
    );
  }

  public toggleSearch(): void {
    this.displaySearchBar = !this.displaySearchBar;
  }

  public clearSearch(): void {
    this.searchInput = '';
    this.showSearchInput = false;
    this.toggleSearch();
    this.searchEvent.emit();
  }

  ngOnDestroy(): void {
    this.searchUpdate.unsubscribe()
  }
}
