import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let loggedInUserId = route.paramMap.get('id');
    let sessionUser = JSON.parse(
      <string>sessionStorage.getItem('loggedInUser')
    );

    // console.log(loggedInUserId, sessionUser.id);

    if (sessionUser) {
      // if (loggedInUserId == sessionUser.id) {
      //   console.log('Matched');
      //   return true;
      // }
    } else {
      alert('You have to login first');
      this._router.navigate(['../login']);
      return false;
    }
    return true;
  }
}
