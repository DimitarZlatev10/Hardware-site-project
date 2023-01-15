import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

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

  constructor(private api: ApiService) {}

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
        next(value) {
          console.log(value);
        },
      });
  }

  ngOnInit(): void {}
}
