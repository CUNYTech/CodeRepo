import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searches:Searches[] = [];

  constructor() {
    this.searches = [
      {
        key: "html",
        definition: "HTML tag"
      },
      {
        key: "input",
        definition: "Input tag"
      },
      {
        key: "form",
        definition: "Form tag"
      },
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
