import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent},
  { path: 'artist/:id', component: ArtistComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
