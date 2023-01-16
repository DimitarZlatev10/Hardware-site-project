import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.css'],
})
export class ProductsTemplateComponent implements OnInit {
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

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  p: any;
  data: any = [];
  getData() {
    this.api.getAllProducts().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
