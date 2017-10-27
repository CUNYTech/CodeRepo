import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string;
  searches:string[] = [];

  constructor(
    private flashMessage: FlashMessagesService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onSubmit(e){
    e.preventDefault();
    // console.log(search);
    this.searches.unshift(this.search);
    this.search = '';

  }

}
