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

  constructor(private aritcleService: ArticleService) {
    this.subscription = this.aritcleService.getAll().subscribe(response => {
      this.articles = response.json();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
