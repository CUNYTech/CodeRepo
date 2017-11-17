import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isEdit:boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(e){
    console.log();
  }

}
