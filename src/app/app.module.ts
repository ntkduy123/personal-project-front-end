import { SignUpFormComponent } from './shared/components/sign-up-form/sign-up-form.component';
import { ArticleDetailComponent } from './shared/components/article-detail/article-detail.component';
import { AdminModule } from './admin/admin.module';
import { ArticleComponent } from './shared/components/article/article.component';
import { ArticleFormComponent } from './shared/components/article-form/article-form.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';
import { ArticleCardComponent } from './shared/components/article-card/article-card.component';
import { AdminArticleComponent } from './admin/components/admin-article/admin-article.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AdminModule,
    HttpModule,

    RouterModule.forRoot([
      { path: 'admin/articles', component: AdminArticleComponent  },
      { path: 'admin/article/new', component: ArticleFormComponent },
      { path: 'admin/article/:id', component: ArticleFormComponent },
      { path: 'article/:id', component: ArticleDetailComponent },
      { path: 'sign-up', component: SignUpFormComponent },
      { path: '', component: ArticleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
