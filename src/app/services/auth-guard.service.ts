import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private store: Store<{ applicationDetails: any }>, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.store.select('applicationDetails').pipe(map(data => {
      if (data.accountType && data.accountType!='') {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }))
  }
}
