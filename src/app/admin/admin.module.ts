import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AdminArticleComponent
  ],
  exports: [
    AdminArticleComponent
  ]
})
export class AdminModule { }
