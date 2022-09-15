import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersRequestService } from '../services/users-request.service';

// interface user {
//   id: number,
//   username: string,
//   password: string,
//   phone: number,
//   birthday?: string,
//   contacts: []
// }

interface User{
  username: string,
  password: string,
  phone: string,
  birthday:string,
  contacts: [],
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private _usersRequest: UsersRequestService,
    private _builder: FormBuilder,
    private _router: Router
  ) {}

  newUser: User = {
    username: '',
    password: '',
    phone: '',
    birthday: '',
    contacts: [
    ],
  };

  userForm = this._builder.group({
    id: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    birthday: ['', Validators.required],
  });

  storeUser(): void {
    // this._userRequests.save(this.userForm.value).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this._router.navigate(['login', this.userForm.controls['id'].value]);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    // console.log(
    //   this.userForm.controls['username'],
    //   this.userForm.controls['password']
    // );
    this.newUser.username = <string>this.userForm.controls['username'].value;
    this.newUser.password = <string>this.userForm.controls['password'].value;
    this.newUser.phone = <string>this.userForm.controls['phone'].value;
    this.newUser.birthday = <string>this.userForm.controls['birthday'].value;
    console.log(this.newUser);
    console.log(this.newUser.contacts);

    this._usersRequest.save(this.newUser).subscribe({
      // subscribe({next:fn,error:fn})
      next: (data) => {
        console.log(data);
        sessionStorage.setItem('loggedInUserId', data.id);
        this._router.navigate(['../login', data.id]);
      },
      error: (err) => {
        console.log(err);
        this.userForm.reset({});
      },
    });
    // this._router.navigate(['../login']);
  }

  ngOnInit(): void {
    sessionStorage.removeItem('loggedInUser');
    this._usersRequest.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
