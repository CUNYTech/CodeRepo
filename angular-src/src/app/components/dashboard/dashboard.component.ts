import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titleText:string = "Find the code references you're looking for.";
  
  constructor() { }

  ngOnInit() {
  }

  findBtnEnter(){
    this.titleText = "Find the resources you're looking for.";
  }
  postBtnEnter(){
    this.titleText = "Post the resources you'd like.";
  }
  searchBtnEnter(){
    this.titleText = "Search for the tags you need.";
  }
  btnLeave(){
    this.titleText = "Find the code references you're looking for.";
  }
}
