import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  demoData: any[] = [
    {
      id: 1,
      name: 'Raj',
      number: 1212121212,
    },
    {
      id: 2,
      name: 'Varad',
      number: 7474747474,
    },
    {
      id: 3,
      name: 'Suyash',
      number: 9393939393,
    },
    {
      id: 4,
      name: 'Gaurav',
      number: 9283847583,
    },
  ];

  loggedInUser: any = JSON.parse(
    <string>sessionStorage.getItem('loggedInUser')
  );
  allContacts: any = this.loggedInUser.contacts;
  constructor() {}

  delete(value: any) {
    console.log(value);
  }

  ngOnInit(): void {
    console.log(this.loggedInUser.contacts);
    console.log(this.allContacts);
  }
}
