import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth-module/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'kayit-ol' }, 
  { path: 'kayit-ol', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
