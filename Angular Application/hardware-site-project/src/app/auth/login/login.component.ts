import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  email = '';
  password = '';

  isEmailValid() {
    return /^[a-zA-Z0-9]+\@[a-zA-Z]{2,}\.[a-zA-Z0-9]{2,}$/.test(this.email);
  }

  isPasswordValid() {
    return this.password.length < 6;
  }

  constructor(
    private api: ApiService,
    private router: Router,
    private localStorage: LocalService
  ) {}

  loginUser() {
    if (!this.isEmailValid()) {
      return;
    }

    if (this.isPasswordValid()) {
      return;
    }

    this.api
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (value) => {
          this.localStorage.saveData('token', this.email);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          console.error(err);
        },
      });
  }

  ngOnInit(): void {}
}
