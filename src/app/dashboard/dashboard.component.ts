import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedInUser: any = JSON.parse(<string>sessionStorage.getItem('loggedInUser'));

  constructor() {}

  // getLoggedInUser() {
  //   let user = sessionStorage.getItem('loggedInUser');
  //   this.loggedInUser = user;
  //   console.log(this.loggedInUser);
  // }

  ngOnInit(): void {
    console.log(this.loggedInUser);
    // this.getLoggedInUser();
  }
}
