import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './home/details/details.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'home' , component: HomeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
