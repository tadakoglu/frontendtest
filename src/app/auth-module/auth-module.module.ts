import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,MatTabsModule,FormsModule
  ],
  declarations: [SignUpComponent]
})
export class AuthModuleModule { }
