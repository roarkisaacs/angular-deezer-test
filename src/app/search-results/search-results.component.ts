import { Component, Input, OnInit } from '@angular/core';
import { DeezerData } from '../models/deezer-data.model';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input('artistList') data: DeezerData<Artist[]> | undefined;

  ngOnInit(): void {
    if (!this.data) return;


    console.log(this.data)
  }

}
