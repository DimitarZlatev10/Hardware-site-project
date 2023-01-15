import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${apiUrl}/users/register`, userData);
  }
}
