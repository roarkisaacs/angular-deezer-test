import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full', },
  { path: 'artist/:id', component: ArtistComponent, pathMatch: 'full' },
  { path: 'artist', component: ArtistComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
