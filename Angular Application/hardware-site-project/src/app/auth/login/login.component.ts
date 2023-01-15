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
  email = '';
  password = '';
  constructor(
    private api: ApiService,
    private router: Router,
    private localStorage: LocalService
  ) {}

  loginUser() {
    console.log(this.email, this.password);
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
          console.error(err);
        },
      });
  }

  ngOnInit(): void {}
}
