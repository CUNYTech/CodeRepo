import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  searchResult:any;

  constructor(private http: Http) {
    this.searchResult = 
      {
        key: "html",
        definition: "HTML tag"
      }
  }

  getSearch(search){
    // return this.searchResult;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/searches/search', search, {headers: headers})
      .map(res => res.json());
  }

}

// interface SearchResult {
//   key:string,
//   definition:string,
// }
