import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, ReactiveFormsModule, CommonModule],
})
export default class AuthModule {}
