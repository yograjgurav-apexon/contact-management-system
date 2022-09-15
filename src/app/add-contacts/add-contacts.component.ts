import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersRequestService } from '../services/users-request.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent implements OnInit {
  loggedInUser: any = JSON.parse(
    <string>sessionStorage.getItem('loggedInUser')
  );

  userAdded!: boolean;

  userForm = this._builder.group({
    username: ['', Validators.required],
    phone: ['', Validators.required],
  });

  newUser = {
    username: '',
    phone: '',
  };

  constructor(
    private _builder: FormBuilder,
    private _usersRequest: UsersRequestService
  ) {}

  ngOnInit(): void {
    console.log('add-contacts', this.loggedInUser);
  }

  storeUser() {
    this.newUser.username = <string>this.userForm.controls['username'].value;
    this.newUser.phone = <string>this.userForm.controls['phone'].value;
    this.userForm.reset();
    this.loggedInUser.contacts.push(this.newUser);
    console.log(this.loggedInUser);
    this._usersRequest.addNewUser(this.loggedInUser).subscribe({
      next: (data: any) => {
        console.log(data);
        sessionStorage.setItem('loggedInUser', JSON.stringify(Object(data)));
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    console.log(this.loggedInUser);
    this.userAdded = true;
  }
}
