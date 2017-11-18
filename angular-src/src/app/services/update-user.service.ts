import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UpdateUserService {

  constructor(
    private http: Http
  ) { }

  updateUserProfile(updateProfile){
    console.log(updateProfile);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/update', updateProfile, {headers: headers})
      .map(res => res.json());
  }
}
