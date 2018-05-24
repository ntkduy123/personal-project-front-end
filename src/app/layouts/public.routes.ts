import { AuthGuardService } from './../shared/services/auth-guard.service';
import { Routes } from '@angular/router';
import { AdminArticleComponent } from '../admin/components/admin-article/admin-article.component';
import { ArticleFormComponent } from '../shared/components/article-form/article-form.component';
import { ArticleDetailComponent } from '../shared/components/article-detail/article-detail.component';
import { SignUpFormComponent } from '../shared/components/sign-up-form/sign-up-form.component';
import { ArticleComponent } from '../shared/components/article/article.component';

export const PUBLIC_ROUTES: Routes = [
    { path: 'admin/articles', component: AdminArticleComponent },
    { path: 'admin/article/new', component: ArticleFormComponent },
    { path: 'admin/article/:id', component: ArticleFormComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: '', component: ArticleComponent }
];
