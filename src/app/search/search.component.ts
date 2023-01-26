import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap } from 'rxjs';
import { RootObject } from '../models/deezer-artist.model';
import { DeezerProxyService } from '../services/deezer-proxy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<RootObject>();
  public searchUpdate = new Subject<string>();
  public searchInput = '';
  public displaySearchBar: boolean = false;

  constructor(private deezerProxyService: DeezerProxyService) {}

  ngOnInit(): void {
    this.setSearchQuery();
  }

  private setSearchQuery(): void {
    this.searchUpdate.pipe(
      filter((searchValue:string) => searchValue.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchValue: string) => this.deezerProxyService.getArtistByName(searchValue))
    ).subscribe(
      (response: RootObject) => this.searchEvent.emit(response)
    );
  }

  public toggleSearch(): void {
    this.displaySearchBar = !this.displaySearchBar;
  }

  public clearSearch(): void {
    this.searchInput = '';
    this.toggleSearch();
    this.searchEvent.emit();
  }

  ngOnDestroy(): void {
    this.searchUpdate.unsubscribe()
  }
}
