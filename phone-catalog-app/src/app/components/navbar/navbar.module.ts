import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatListModule, MatIconModule, MatSidenavModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
