import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8"
      }
    },
    theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true
};

  registerUserData: any = { }
  isStudent: boolean = true;

  setIsStudent(student: boolean) {
    this.isStudent = student;
    console.log(this.isStudent);
  }

  register() {
    this.registerUserData.userType = this.isStudent ? 'student' : 'company';
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

}
