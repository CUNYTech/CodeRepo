import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-history-list',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['./search-history-list.component.css']
})
export class SearchHistoryListComponent implements OnInit {
  historyResults:string[] = [];

  constructor(private searchService: SearchService) {
    this.historyResults = this.searchService.historyResults;
  }

  ngOnInit() {
  }

  removeEntry(search) {
    this.historyResults.splice(search, 1);
  }

}
