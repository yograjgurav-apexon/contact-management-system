import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersRequestService } from '../services/users-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedInUserId!: number;
  allUsers: any;
  // loggedInUser!: any;
  invalidUser!: boolean;
  loggedInUser: any;
  constructor(
    private _userRequest: UsersRequestService,
    private _builder: FormBuilder,
    private _router: Router
  ) {}

  loginForm = this._builder.group({
    id: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    let loggedInUser = JSON.parse(
      <string>sessionStorage.getItem('loggedInUser')
    );

    if (loggedInUser) {
      // console.log('User exists');
      this.loggedInUserId = +loggedInUser.id;
      console.log(this.loggedInUserId);
    }

    let currentUser = sessionStorage.getItem('loggedInUserId');

    if (currentUser) {
      this.loggedInUserId = +currentUser!;
    }

    // console.log(currentUser);
    // this._userRequest.getUsers().subscribe((data) => {
    //   // console.log(data);
    //   this.allUsers = data;
    //   console.log(this.allUsers);
    // });
    this.getUsers();
    // console.log(this.allUsers);
  }

  getUsers() {
    this._userRequest.getUsers().subscribe((data) => {
      // this.allUsers = data;
      // this.allUsers.push(data);
      this.allUsers = data;
    });
  }

  submit() {
    let id: number = <number>(<unknown>this.loginForm.controls['id'].value);
    let password: string = <string>this.loginForm.controls['password'].value;

    // let result = this._userRequest.login(id, password);

    for (const user of this.allUsers) {
      if (user.id === id && user.password === password) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(Object(user)));
        // console.log(JSON.parse(user));

        console.log(this._router.url);

        this._router.navigate(['/profile', user.id]);
      } else {
        this.invalidUser = true;
      }
    }
    // if (result === true) {
    //   console.log('nice');
    // } else {
    //   console.log('not nice');
    // }

    // let userFound = this.allUsers.filter((data: any) => {
    //   data.id === id;
    // });
    // console.log(userFound);
  }
}
