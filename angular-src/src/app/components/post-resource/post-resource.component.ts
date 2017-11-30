import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { ResourcesService } from '../../services/resources.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-resource',
  templateUrl: './post-resource.component.html',
  styleUrls: ['./post-resource.component.css']
})
export class PostResourceComponent implements OnInit {
  title:string; 
  category:string;
  link:string;
  description:string;
  user: object;

  constructor(
    private resourcesService: ResourcesService,
    private flashMessage: FlashMessagesService,
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user.username;
      console.log(this.user);
    },
    err => {
      console.log(err);
      return false;
    });
    
  }

  onSubmit(event){
    event.preventDefault();

    const postResource = {
      title: this.title,
      category: this.category,
      link: this.link,
      content: this.description,
      author: this.user,
      date: Date.now()
    }

    if ( this.title === '' || this.category === '' || this.link === '' || this.title === undefined || this.category === undefined || this.link === undefined)
    {
      this.flashMessage.show('Please fill in all fields' , {
        cssClass: 'alert-danger', 
        timeout: 5000});
    } else {
      console.log(postResource);
      this.resourcesService.postResource(postResource).subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['/find-resource']);
    }
  }
  
}
