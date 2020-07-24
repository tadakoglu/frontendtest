import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavModule } from '../nav-module/nav.module';


@NgModule({
  imports: [
    CommonModule, MatTabsModule, BrowserModule, FormsModule, NavModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class AuthModuleModule { }
