import { AuthGuardService } from './services/auth-guard.service';
import { Article } from './models/article';
import { ArticleService } from './services/article.service';
import { CoreModule } from './../core/core.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './components/article/article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { TinymceDirective } from './directives/tinymce/tinymce.directive';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { UserService } from './services/user.service';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CoreModule,
    RouterModule.forChild([])
  ],
  declarations: [
    ArticleCardComponent,
    ArticleComponent,
    ArticleFormComponent,
    TinymceDirective,
    ArticleDetailComponent,
    SignUpFormComponent,
    SignInFormComponent,
  ],
  exports: [
    FormsModule,
    ArticleCardComponent,
    ArticleComponent,
    ArticleFormComponent,
    ArticleDetailComponent,
    SignUpFormComponent
  ],
  providers: [
    AuthGuardService,
    ArticleService,
    UserService
  ]
})
export class SharedModule { }
