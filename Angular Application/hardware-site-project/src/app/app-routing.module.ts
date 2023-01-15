import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsTemplateComponent } from './products/products-template/products-template.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'products',
    children: [
      {
        path: 'Keyboards',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['keyboards'],
        },
      },
      {
        path: 'Mouses',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['mouses'],
        },
      },
      {
        path: 'Monitors',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['monitors'],
        },
      },
      {
        path: 'Chair',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['chair'],
        },
      },
      {
        path: 'Computers',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['computers'],
        },
      },
      {
        path: 'Laptops',
        component: ProductsTemplateComponent,
        data: {
          periphery: ['laptops'],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
