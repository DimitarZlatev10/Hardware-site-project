import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class guestGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token') !== null) {
      alert('You need to logout to access this action');
      this.router.navigate(['/']);

      return false;
    }
    return true;
  }
}
