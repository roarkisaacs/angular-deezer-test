import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { EditorialComponent } from './editorial/editorial.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { InterceptorService } from './interceptor/interceptor.service';
import { ToastrModule } from 'ngx-toastr/public_api';
import { ErrorHandlerService } from './error-handler/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    EditorialComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    ToastrModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
