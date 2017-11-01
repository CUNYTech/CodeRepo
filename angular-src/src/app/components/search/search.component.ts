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

  // Current tags that work table, div

  onSubmit(e){
    e.preventDefault();
    let search = '{"search": "'+this.search.toUpperCase()+'"}';
    if (this.search == '' || this.search == undefined || this.search == null) {
      this.flashMessage.show('Please submit a tag', {cssClass: 'alert-danger', timeout: 3000});
    } else {
      this.searchService.getSearch(search).subscribe(data => {
        for(let i = 0; i < data.length; i++){
          this.searches.unshift(data[i]);
        }
      });
    }
    this.search = '';
  }
}