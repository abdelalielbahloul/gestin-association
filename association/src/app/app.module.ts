import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { MembersComponent } from './compenents/members/members.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { RolesComponent } from './compenents/roles/roles.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { HomeComponent } from './compenents/home/home.component';
import { SidebarComponent } from './compenents/sidebar/sidebar.component';
import { AddMemberComponent } from './compenents/add-member/add-member.component';
// import { ToastrService } from './services/toastr.service';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    NotFoundComponent,
    HomeComponent,
    SidebarComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
