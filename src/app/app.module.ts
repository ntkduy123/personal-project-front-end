import { SignUpFormComponent } from './shared/components/sign-up-form/sign-up-form.component';
import { ArticleDetailComponent } from './shared/components/article-detail/article-detail.component';
import { AdminModule } from './admin/admin.module';
import { ArticleComponent } from './shared/components/article/article.component';
import { ArticleFormComponent } from './shared/components/article-form/article-form.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';
import { ArticleCardComponent } from './shared/components/article-card/article-card.component';
import { AdminArticleComponent } from './admin/components/admin-article/admin-article.component';
import { PublicComponent } from './layouts/public/public.component';
import { PUBLIC_ROUTES } from './layouts/public.routes';
import { SecureComponent } from './layouts/secure/secure.component';
import { SECURE_ROUTES } from './layouts/secure.routes';

const APP_ROUTES: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AdminModule,
    HttpModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
