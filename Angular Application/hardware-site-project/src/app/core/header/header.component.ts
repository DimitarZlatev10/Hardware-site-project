import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  get isUser() {
    return localStorage.getItem('token') !== null;
  }

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
