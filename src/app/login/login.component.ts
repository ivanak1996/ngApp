import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userLoginData);
    this._auth.loginUser(this.userLoginData)
      .subscribe(
        res => {
          console.log(res);          
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('user', JSON.stringify(res.user));
          this._router.navigate(['/fairPacks']);
        },
        err => console.log(err)
      );
  }

}
