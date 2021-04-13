import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AyatComponent } from './ayat/ayat.component';

import { HttpClientModule } from '@angular/common/http';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, AyatComponent, TimesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
