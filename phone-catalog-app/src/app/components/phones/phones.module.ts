import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from './phones.component';
import { MatToolbarModule, MatTableModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [PhonesComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    CdkTableModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [PhonesComponent]
})
export class PhonesModule { }
