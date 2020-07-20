import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, MatTabsModule, BrowserModule, FormsModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class AuthModuleModule { }
