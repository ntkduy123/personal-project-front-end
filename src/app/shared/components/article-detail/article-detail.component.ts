import { ActivatedRoute } from '@angular/router';
import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  id;

  article: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.article = new Article();

    if (this.id) {
      this.articleService.get(this.id).take(1).subscribe(response => {
        this.article = response.json();
      });
    }
  }

  ngOnInit() {
  }

}
