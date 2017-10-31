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
    let search = '{"search": "'+this.search+'"}';
    console.log(search);  
    // console.log(search);
    if (this.search == '' || this.search == undefined || this.search == null) {
      this.flashMessage.show('Please submit a tag', {cssClass: 'alert-danger', timeout: 3000});
    } else {
      search = search.toString();
      console.log(typeof search);
      // search = search.search.toLowerCase();
      // search = "" + search + "";
      // Submit search to back-end
      this.searchService.getSearch(search).subscribe(data => {
        if(data.success){
          console.log(data);
        } else {
          console.log(data);
        }
      });
    }

    
    this.search = '';

    // this.search = this.searchService.getSearch();
    // console.log(this.search);
    // this.searches.unshift(this.search);

  }

}