import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  userInfo: any = [];

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
        this.getUserFavourites();
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
        this.getUserFavourites();
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
        console.log(value);

        this.getUserFavourites();
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
        console.log(value);

        this.getUserFavourites();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private localService: LocalService,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.getUserFavourites();
  }

  p: any;
  data: any = [];
  getUserFavourites() {
    const email = this.localService.getData('token');
    this.api.getUserFavouriteProducts(email).subscribe({
      next: (value) => {
        this.data = value;
        console.log(this.data);
      },
      error: (err) => {
        console.error(err);
      },
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
