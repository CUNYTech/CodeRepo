import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UpdateUserService } from '../../services/update-user.service';
import { log } from 'util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isEdit:boolean = true;
  updateProfile = {
    user: '',
    profileImg: '',
    facebook: '',
    twitter: '',
    instagram: ''
  }

  constructor(
    private authService: AuthService,
    private updateUserService: UpdateUserService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.updateProfile.user = profile.user.name;
    },
    err => {
      console.log(err);
      return false;
    });
    console.log(this.updateProfile);
  }

  onSubmit(e){
    e.preventDefault();
    this.updateUserService.updateUserProfile(this.updateProfile);
  }

}
