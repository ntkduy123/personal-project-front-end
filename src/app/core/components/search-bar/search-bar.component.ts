import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private baseUrl = environment.baseUrl;

  public autocompleteList: any[] = [];


  public isOnFocus: boolean = false;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getTitles(query) {
    this.http.get(this.baseUrl + 'api/article/test/' + query).subscribe(response => {
      this.autocompleteList = response.json();
      console.log(this.autocompleteList);
    });
  }

}
