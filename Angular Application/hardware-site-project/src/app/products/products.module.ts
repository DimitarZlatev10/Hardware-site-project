import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTemplateComponent } from './products-template/products-template.component';

@NgModule({
  declarations: [ProductsTemplateComponent],
  imports: [CommonModule],
  exports: [ProductsTemplateComponent],
})
export class ProductsModule {}
