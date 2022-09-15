import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersRequestService } from '../services/users-request.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  loggedInUser: any = JSON.parse(
    <string>sessionStorage.getItem('loggedInUser')
  );

  deleteUser() {
    this._userRequest.deleteUser(this.loggedInUser).subscribe({
      next: (data) => {
        console.log(data);
        sessionStorage.removeItem('loggedInUser');
        sessionStorage.removeItem('loggedInUserId');
        this._router.navigate(['login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  constructor(
    private _userRequest: UsersRequestService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
}
