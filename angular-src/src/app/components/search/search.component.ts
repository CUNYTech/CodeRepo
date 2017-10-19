import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;

  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit(e){
    e.preventDefault();

    let search = this.search;
    console.log(search);
    this.search = '';
    

  }

}
