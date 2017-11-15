import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titleLeft:string = "Find";
  titleMid:string = "the code references";
  titleRight:string = "you're looking for.";
  
  constructor() { }

  ngOnInit() {
  }

  findBtnEnter(){
    this.titleMid = "the resources";
  }
  findBtnLeave(){
    this.titleMid = "the code references";
  }
  postBtnEnter(){
    this.titleLeft = "Post";
    this.titleMid = "the resources";
    this.titleRight = "you'd like.";
  }
  postBtnLeave(){
    this.titleLeft = "Find";
    this.titleMid = "the code references";
    this.titleRight = "you're looking for.";
  }
  searchBtnEnter(){
    this.titleLeft = "Search";
    this.titleMid = "for the tags";
    this.titleRight = "you need.";
  }
  searchBtnLeave(){
    this.titleLeft = "Find";
    this.titleMid = "the code references";
    this.titleRight = "you're looking for.";
  }
}
