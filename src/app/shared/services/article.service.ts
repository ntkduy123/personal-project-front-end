import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ArticleService {
  private baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  get(id) {
    return this.http.get(this.baseUrl + 'api/article/get/' + id);
  }

  getAll() {
    return this.http.get(this.baseUrl + 'api/article/getAll');
  }

  create(article, file: File) {
    this.http
      .post(this.baseUrl + 'api/article/add', JSON.stringify(article))
      .subscribe(response => {
        if (file) {
          const fileName = response.json().id + '.' + file.name.split('.').pop();
          this.uploadFile(file, fileName, response.json().id);
        }
        return response;
      });
  }

  uploadFile(file: File, fileName, articleId): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', this.baseUrl + 'api/article/upload', true);

      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('fileName', fileName);
      formData.append('articleId', articleId);
      xhr.send(formData);
    });
  }

  update(article, file: File) {
    this.http
      .post(this.baseUrl + 'api/article/update', JSON.stringify(article))
      .subscribe(response => {
        if (file) {
          const fileName = article.id + '.' + file.name.split('.').pop();
          this.uploadFile(file, fileName, article.id);
        }
        return response;
      });
  }

  delete(id) {
    console.log(id);
    this.http
      .delete(this.baseUrl + 'api/article/delete/' + id)
      .subscribe(response => {
        return response;
      });
  }
}
