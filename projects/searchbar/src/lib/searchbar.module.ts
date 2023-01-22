import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    SearchbarComponent,
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchbarModule { }
