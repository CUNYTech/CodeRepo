import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SearchService } from '../../services/search.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('entriesAnim', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: '0'}),
        animate('300ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)', opacity: '0'}))
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  search:any;
  searches:string[] = [];
  state = 'active';

  constructor(
    private flashMessage: FlashMessagesService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    
  }

  onSubmit(e){
    e.preventDefault();
    let search = '{"search": "'+this.search.toUpperCase()+'"}';
    if (this.search == '' || this.search == undefined || this.search == null) {
      this.flashMessage.show('Please submit a tag', {cssClass: 'alert-danger', timeout: 3000});
    } else {
      this.searchService.getSearch(search).subscribe(data => {
        if (data.success === false){
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        }
        for(let i = 0; i < data.length; i++){
          this.searches.unshift(data[i]);
        }
      });
    }
    this.search = '';
  }

  removeEntry(search) {
    this.searches.splice(search, 1);
  }
}