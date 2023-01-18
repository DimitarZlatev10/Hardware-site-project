import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userInfo: any = [];

  get isUser() {
    return localStorage.getItem('token') !== null;
  }

  constructor(
    private router: Router,
    private localService: LocalService,
    private api: ApiService
  ) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    const email = this.localService.getData('token');
    this.api.getUserData(email).subscribe({
      next: (value) => {
        this.userInfo = value;
        console.log(this.userInfo);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
