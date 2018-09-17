import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SyntheticsModule } from 'synthetics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SyntheticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
