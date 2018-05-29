import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import * as tinymce from 'tinymce';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article;

  content: string;

  file: File;

  id;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute) {
    this.article = new Article();
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.articleService.get(this.id).take(1).subscribe(response => {
        this.article = response.json();
        this.content = this.article.content;
      });
    }
  }

  ngOnInit() {
  }

  save(form) {
    const article = form.value;
    article.content = this.content;

    if (!form.invalid) {
      if (this.id) {
        article.id = this.id;
        this.articleService.update(article, this.file);
      } else {
        this.articleService.create(article, this.file);
      }
      this.router.navigate(['']);
    }
  }

  uploadImage(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  onHtmlEditorKeyUp(content: any): void {
    this.content = content;
  }
}
