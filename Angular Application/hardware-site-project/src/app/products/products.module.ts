import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTemplateComponent } from './products-template/products-template.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ProductsTemplateComponent, DetailsComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [ProductsTemplateComponent],
})
export class ProductsModule {}
