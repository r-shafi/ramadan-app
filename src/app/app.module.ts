import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { AyatComponent } from './components/ayat/ayat.component';

import { HttpClientModule } from '@angular/common/http';
import { TimesComponent } from './components/times/times.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SurahComponent } from './components/surah/surah.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AyatComponent,
    TimesComponent,
    NavigationComponent,
    HomeComponent,
    SurahComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
