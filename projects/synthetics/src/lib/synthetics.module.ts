import { NgModule } from '@angular/core';
import { MultiTextfieldComponent } from './multi-textfield/multi-textfield.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MultiTextfieldComponent
  ],
  exports: [
    MultiTextfieldComponent
  ]
})
export class SyntheticsModule { }
