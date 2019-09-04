import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { ReposeComponent } from './repose/repose.component';


const routes: Routes = [
  {path: 'users', component: SearchUserComponent},
    {path: 'repository', component: ReposeComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  // exports: [RouterModule]
  declarations: []
})
export class AppRoutingModule { }
