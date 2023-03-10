import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeezerProxyService } from '../services/deezer-proxy.service';
import { Editorial } from '../models/editorial.model';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorialComponent implements OnInit {

  constructor(private deezerProxyService: DeezerProxyService) { }
  public response$: Observable<Editorial> | undefined;

  ngOnInit(): void {
    this.response$ = this.deezerProxyService.getEditorialList();
  }

}
