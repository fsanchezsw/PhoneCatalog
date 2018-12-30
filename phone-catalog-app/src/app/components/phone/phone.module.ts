import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { MatToolbarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [PhoneComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [PhoneComponent]
})
export class PhoneModule { }
