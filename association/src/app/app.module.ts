import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { MembersComponent } from './compenents/members/members.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { RolesComponent } from './compenents/roles/roles.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { HomeComponent } from './compenents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
