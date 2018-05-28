import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  create(user) {
    return this.http.post(this.baseUrl + '/registration', JSON.stringify(user));
  }

  verify(user) {
    return this.http.post(this.baseUrl + '/login', JSON.stringify(user));
  }
}
