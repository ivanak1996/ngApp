import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
    private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

  getUserType() {
    var userData = JSON.parse(sessionStorage['user']);
    return userData.role;

  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logoutUser() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
