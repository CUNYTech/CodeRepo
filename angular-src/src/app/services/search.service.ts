import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searchResult:any;

  constructor() {
    this.searchResult = 
      {
        key: "html",
        definition: "HTML tag"
      }
  }

  getSearch(){
    return this.searchResult;
  }

}

// interface SearchResult {
//   key:string,
//   definition:string,
// }
