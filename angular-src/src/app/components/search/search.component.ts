import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:any;
  searches:string[] = [];

  constructor(
    private flashMessage: FlashMessagesService,
    private searchService: SearchService
  ) {}

  ngOnInit() {

  }

  onSubmit(e){
    e.preventDefault();
    this.search = this.searchService.getSearch();
    console.log(this.search);
    // this.search = this.searchService.getSearch();
    this.searches.unshift(this.search);
    this.search = '';
  }

}