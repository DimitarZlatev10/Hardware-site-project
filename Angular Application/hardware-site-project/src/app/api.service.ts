import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserData(email: any) {
    return this.http.post(`${apiUrl}/users/userData`, { email });
  }

  register(userData: any) {
    return this.http.post(`${apiUrl}/users/register`, userData);
  }

  login(userData: any) {
    return this.http.post(`${apiUrl}/users/login`, userData);
  }
}
