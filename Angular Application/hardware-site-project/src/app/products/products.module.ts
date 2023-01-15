import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTemplateComponent } from './products-template/products-template.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ProductsTemplateComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [ProductsTemplateComponent],
})
export class ProductsModule {}
