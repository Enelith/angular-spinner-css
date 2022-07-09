import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpinnerPureCssModule } from '@app/shared/spinner-pure-css/spinner-pure-css.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SpinnerPureCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
