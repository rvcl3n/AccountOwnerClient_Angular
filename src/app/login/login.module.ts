import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './../_helpers/auth.guard';
import { AuthService } from './../shared/services/authentication.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [
    //AuthGuard,
   // AuthService

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }