import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { log } from 'util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isEdit:boolean = true;
  user: object;
  updateProfile: Object = {
    img: '',
    facebook: '',
    twitter: '',
    instagram: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.updateProfile);
    
  }

}
