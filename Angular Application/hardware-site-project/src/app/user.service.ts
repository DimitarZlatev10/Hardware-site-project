import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private localService: LocalService, private api: ApiService) {}

  isUser() {
    return localStorage.getItem('token') !== null;
  }

  // getUserData() {
  //   const email = this.localService.getData('token');

  //   this.api.getUserData(email).subscribe({
  //     next: (value) => {
  //       return value;
  //     },
  //   });
  // }
}
