import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class userGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
    alert(`You must login to access this action`);
    this.router.navigate(['/login']);
    return false;
  }
}
