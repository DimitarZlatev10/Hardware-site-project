import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.css'],
})
export class ProductsTemplateComponent implements OnInit {
  userInfo: any = [];
  message: string | null = null;

  details(id: any) {
    this.api.getProductById(id).subscribe({
      next: (value) => {
        this.router.navigate(['products/details/' + id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  addToFavourites(id: string) {
    if (this.userInfo.length == 0) {
      this.router.navigate(['/login']);
      alert('You must be logged in to add products to your favourites');
      return;
    }

    this.api.addProductToFavourites(id, this.userInfo._id).subscribe({
      next: (value) => {
        this.message = 'Successfully added item to your favourites';
        this.getData();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeFromFavourites(id: string) {
    if (this.userInfo.length == 0) {
      this.router.navigate(['/login']);
      alert('You must be logged in to remove products from your favourites');
      return;
    }

    this.api.removeProductFromFavourites(id, this.userInfo._id).subscribe({
      next: (value) => {
        this.message = 'Successfully removed item from your favourites';
        this.getData();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  addToCart(id: string) {
    if (this.userInfo.length == 0) {
      this.router.navigate(['/login']);
      alert('You must be logged in to add products to your cart');
      return;
    }

    this.api.addProductToCart(id, this.userInfo._id).subscribe({
      next: (value) => {
        this.message = 'Successfully added item to your cart';
        this.getData();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeFromCart(id: string) {
    if (this.userInfo.length == 0) {
      this.router.navigate(['/login']);
      alert('You must be logged in to remove items from your cart');
    }

    this.api.removeProductFromCart(id, this.userInfo._id).subscribe({
      next: (value) => {
        this.message = 'Successfully removed item from your cart';
        this.getData();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private api: ApiService,
    private router: Router,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getUserInfo();
  }

  p: any;
  data: any = [];
  getData() {
    this.api.getAllProducts().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  getUserInfo() {
    const email = this.localService.getData('token');
    this.api.getUserData(email).subscribe({
      next: (value) => {
        this.userInfo = value;
        console.log(this.userInfo);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
