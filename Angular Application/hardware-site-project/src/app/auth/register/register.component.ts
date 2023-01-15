import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';
import { UserService } from 'src/app/user.service';

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
  userInfo: any = [];

  constructor(
    private api: ApiService,
    private localService: LocalService,
    private router: Router,
    private userService: UserService
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
          this.localService.saveData('token', this.email);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  ngOnInit(): void {
    console.log(this.userService.isUser());
    const email = this.localService.getData('token');
    this.api.getUserData(email).subscribe({
      next: (value) => {
        this.userInfo = value;
        console.log(this.userInfo);
      },
    });
  }
}
