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
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  repass = '';

  constructor(
    private api: ApiService,
    private localStorage: LocalService,
    private router: Router
  ) {}

  registerUser() {
    console.log(this.firstName, this.lastName);
    this.api
      .register({
        firstName: this.firstName,
        lastName: this.lastName,
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
