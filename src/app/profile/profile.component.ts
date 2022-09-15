import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loggedInUser: any = JSON.parse(
    <string>sessionStorage.getItem('loggedInUser')
  );

  logout() {
    console.log('logout');
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('loggedInUserId');
    this._router.navigate(['../login']);
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
