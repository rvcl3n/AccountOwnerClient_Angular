import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //???????????????????????
import { AuthGuard } from './_helpers/auth.guard';
import { OwnerGuard } from './_helpers/owner.guard';
import { TokenInterceptor } from './_helpers/token.interceptor';
import { AuthService } from './shared/services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, //???????????????????
    ReactiveFormsModule, //???????????????????????
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule), canActivate: [OwnerGuard], canLoad: [OwnerGuard]},
      { path: '404', component : NotFoundComponent},
      { path: '500', component: InternalServerComponent },
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}    
    ])
  ],
  providers: [
    DatePipe,
    AuthGuard,
    OwnerGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
