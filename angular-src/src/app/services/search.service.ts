import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searches:Searches[] = [];

  constructor() {
    this.searches = [
      {
        key: "html",
        definition: "asd"
      },
    ];
  }

}

interface Searches {
  key:string,
  definition:string
}

