import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TabGroupComponent } from './company/tab-group/tab-group.component';
import { HomeComponent } from './company/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/tablist', component: TabGroupComponent },
  { path: 'admin/home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
