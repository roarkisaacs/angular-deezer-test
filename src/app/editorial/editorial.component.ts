import { Component, OnInit } from '@angular/core';
import { DeezerProxyService } from '../services/deezer-proxy.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  constructor(private deezerProxyService: DeezerProxyService) { }

  ngOnInit(): void {
    this.deezerProxyService.getEditorialList()
      .subscribe(response => console.log(response))
  }

}
