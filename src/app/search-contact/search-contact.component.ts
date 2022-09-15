import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css'],
})
export class SearchContactComponent implements OnInit {
  filteredString!: string;

  loggedInUser: any = JSON.parse(
    <string>sessionStorage.getItem('loggedInUser')
  );

  allContacts: any = this.loggedInUser.contacts;

  constructor() {}

  ngOnInit(): void {}
}
