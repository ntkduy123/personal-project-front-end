import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HeaderComponent,
    SearchBarComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
