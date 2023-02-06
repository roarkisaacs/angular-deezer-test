import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'artist', component: ArtistComponent },
  { path: 'track', component: TrackComponent },
  { path: '**', component: AppComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
