import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { DeezerProxyService } from '../services/deezer-proxy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search = new FormControl()

  constructor(private deezerProxyService: DeezerProxyService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchValue) => this.deezerProxyService.getArtistByName(searchValue))
    ).subscribe(
      response => console.log(response)
    )
  }

}
