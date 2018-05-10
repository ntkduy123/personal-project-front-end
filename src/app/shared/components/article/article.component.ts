import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  articles: any[] = [];

  subscription: Subscription;

  constructor(private articleService: ArticleService) {
    this.subscription = this.articleService.getAll().subscribe(response => {
      this.articles = response.json();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
