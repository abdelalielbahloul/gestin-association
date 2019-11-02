import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './compenents/members/members.component';
import { RolesComponent } from './compenents/roles/roles.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';
import { HomeComponent } from './compenents/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'members', component: MembersComponent},
  { path: 'roles', component: RolesComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
