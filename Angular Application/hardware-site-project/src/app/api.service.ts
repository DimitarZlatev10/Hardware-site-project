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

  getAllProducts() {
    return this.http.get(`${apiUrl}/products`);
  }

  getProductById(id: any) {
    return this.http.get(`${apiUrl}/products/` + id);
  }

  addProductToFavourites(productId: string, userId: string) {
    return this.http.post(`${apiUrl}/products/addToFavourites`, {
      productId,
      userId,
    });
  }

  removeProductFromFavourites(productId: string, userId: string) {
    return this.http.post(`${apiUrl}/products/removeFromFavourites`, {
      productId,
      userId,
    });
  }

  addProductToCart(productId: string, userId: string) {
    return this.http.post(`${apiUrl}/products/addToCart`, {
      productId,
      userId,
    });
  }

  removeProductFromCart(productId: string, userId: string) {
    return this.http.post(`${apiUrl}/products/removeFromCart`, {
      productId,
      userId,
    });
  }
}
