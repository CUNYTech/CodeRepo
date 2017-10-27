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
  isEmpty:boolean = true;

  constructor(
    private flashMessage: FlashMessagesService,
    private searchService: SearchService
  ) {}

  ngOnInit() {

  }

  onSubmit(e){
    e.preventDefault();
    let search = {
      key: this.search
    }

    if (this.search == '' || this.search == undefined || this.search == null) {
      this.flashMessage.show('Please submit a tag', {cssClass: 'alert-danger', timeout: 3000});
      
    } else {
      
      this.isEmpty = false;
  
      search = search.key.toLowerCase();
    }

    console.log(search);
    this.search = '';

    // this.search = this.searchService.getSearch();
    // console.log(this.search);
    // this.searches.unshift(this.search);

  }

}