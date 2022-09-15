import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersRequestService } from '../services/users-request.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  loggedInUser = JSON.parse(<string>sessionStorage.getItem('loggedInUser'));

  userUpdated!: boolean;

  userForm = this._builder.group({
    password: ['', Validators.required],
  });

  constructor(
    private _builder: FormBuilder,
    private _usersRequest: UsersRequestService
  ) {}

  ngOnInit(): void {
    console.log(this.loggedInUser);
  }

  updateUser() {
    this.userUpdated = true;
    console.log('Updated');
    // console.log(
    //   this.loggedInUser.password,
    //   this.userForm.controls['password'].value
    // );
    this.loggedInUser.password = this.userForm.controls['password'].value;
    console.log(this.loggedInUser);
    this._usersRequest.updateUser(this.loggedInUser).subscribe({
      next: (data: any) => {
        console.log(data);
        sessionStorage.setItem('loggedInUser', JSON.stringify(Object(data)));
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this.userForm.reset();
  }
}
