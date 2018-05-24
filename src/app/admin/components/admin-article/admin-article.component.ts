import { Subscription } from 'rxjs/Subscription';
import { ArticleService } from './../../../shared/services/article.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit, OnDestroy {

  articles: any[] = [];

  subscription: Subscription;

  constructor(private articleService: ArticleService) {
    this.subscription = this.articleService.getAll().subscribe(response => {
      this.articles = response.json();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(id) {
    if (confirm('Are you sure you want to delete this product ?')) {
      this.articleService.delete(id);
    }

    return;
  }

}
