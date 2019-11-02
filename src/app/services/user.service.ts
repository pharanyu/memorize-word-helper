import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    userName: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post('/api/user/register', user);
  }
}
