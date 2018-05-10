import { Article } from './../../models/article';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input('article') article: Article;

  baseUrl;

  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
  }

}
