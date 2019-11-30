import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://172.18.5.8:9898/list";
  constructor(private http:HttpClient) { }

  getUser()
  {
    return this.http.get(this.url);
  }
}
