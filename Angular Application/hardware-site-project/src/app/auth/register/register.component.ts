import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  repass = '';

  isFirstNameValid() {
    return /.{3,}/.test(this.firstName);
  }

  isLastNameValid() {
    return /.{3,}/.test(this.lastName);
  }

  isEmailValid() {
    return /^[a-zA-Z0-9]+\@[a-zA-Z]{2,}\.[a-zA-Z0-9]{2,}$/.test(this.email);
  }

  isPasswordValid() {
    return this.password.length < 6;
  }

  isRepassValid() {
    return this.password == this.repass;
  }

  constructor(
    private api: ApiService,
    private localService: LocalService,
    private router: Router
  ) {}

  registerUser() {
    if (!this.isFirstNameValid()) {
      return;
    }

    if (!this.isLastNameValid()) {
      return;
    }

    if (!this.isEmailValid()) {
      return;
    }

    if (this.isPasswordValid()) {
      return;
    }

    if (!this.isRepassValid()) {
      return;
    }

    this.api
      .register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (value) => {
          this.localService.saveData('token', this.email);
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
