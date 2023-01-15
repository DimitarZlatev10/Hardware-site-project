import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.css'],
})
export class ProductsTemplateComponent implements OnInit {
  constructor(private api: ApiService) {}

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
