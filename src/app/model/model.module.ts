import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    { provide: AuthServiceService, useClass: AuthServiceService }
  ]

})
export class ModelModule { }
