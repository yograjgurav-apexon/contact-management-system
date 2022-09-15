import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersRequestService {
  url = 'http://localhost:3000/users';
  data!: any;
  constructor(private _http: HttpClient) {}

  getFakeData(): Observable<any> {
    // When you call get() method the request wouldn't be sent
    // The request is sent only when you subscribe
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this._http.get(url);
  }

  getUsers(): Observable<any> {
    // console.log(this._http.get(this.url));
    this._http.get(this.url).subscribe((data) => {
      this.data = data;
    });

    return this._http.get(this.url);
  }

  save(user: any): Observable<any> {
    return this._http.post(this.url, user);
  }

  login(id: any, password: any) {
    console.log(`id: ${id}, password: ${password}`);
    // console.log(this.data);

    // return this.data.some((data: any) => {
    //   data.password === password;
    //   // console.log(data.password);
    // });
    // return userMatched;
  }

  // login(id: number, password: string) {
  //   console.log(`idL ${id}, password: ${password}`);
  //   let result = this.getUsers().subscribe((data) => {
  //     // console.log(data);
  //     return data.find((user: any) => {
  //       user.id == id;
  //     });
  //   });
  //   // return result;
  // }

  addNewUser(currentUser: any, newUser?: any) {
    console.log(`${this.url}/${currentUser.id}`);

    return this._http.put(`${this.url}/${currentUser.id}`, currentUser);
  }

  updateUser(currentUser: any) {
    return this._http.put(`${this.url}/${currentUser.id}`, currentUser);
  }

  deleteUser(currentUser: any) {
    return this._http.delete(`${this.url}/${currentUser.id}`);
  }
}
