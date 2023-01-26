import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../models/deezer-artist.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input('artistList') artistList: RootObject | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.artistList)
  }

}
