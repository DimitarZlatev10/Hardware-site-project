import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, FavouritesComponent],
  imports: [CommonModule, RouterModule, FormsModule, NgxPaginationModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
