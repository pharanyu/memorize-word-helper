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
  noAuthHeader = { headers: new HttpHeaders({ 'noauth': 'True' }) };

  constructor(private http: HttpClient) { }

  /** Http Methods */

  postUser(user: User) {
    return this.http.post('/api/user/register', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post('/api/user/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get('/api/user/userprofile');
  }

  /** Other Methods */

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
