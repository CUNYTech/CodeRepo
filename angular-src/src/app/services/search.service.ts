import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searches:Searches[] = [];

  constructor() {
    this.searches = [
      {
        key: "html",
        definition: "HTML tag"
      }
    ];
  }

  getSearch(){
    return this.searches;
  }

}

interface Searches {
  key:string,
  definition:string,
}
