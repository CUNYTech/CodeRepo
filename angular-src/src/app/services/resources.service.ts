import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourcesService {

  constructor(private http: Http) { }

  postResource(postResource){
    console.log('Successfully send to service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/resources/postresource', postResource, {headers: headers})
      .map(res => res.json());
  }

  getAll(filter){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/resources/postresource', filter ,{headers: headers})
      .map(res => res.json());
  }
}
