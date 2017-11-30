import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UpdateUserService } from '../../services/update-user.service';
import { log } from 'util';
import { provideForRootGuard } from '@angular/router/src/router_module';

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
  user: object;

  constructor(
    private authService: AuthService,
    private updateUserService: UpdateUserService
  ) { }

  ngOnInit() {
    
    this.authService.getProfile().subscribe(profile => {
      this.updateProfile.user = profile.user.name;
      this.user = profile;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.updateUserService.updateUserProfile(this.updateProfile).subscribe(profile => {
      console.log(profile);
    });
    // console.log(this.user);
  }

}
