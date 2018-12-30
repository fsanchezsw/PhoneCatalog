import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { NavbarModule } from './components/navbar/navbar.module';
import { PhonesModule } from './components/phones/phones.module';
import { PhoneModule } from './components/phone/phone.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserModule,

    MatSidenavModule,

    NavbarModule,
    PhonesModule,
    PhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
