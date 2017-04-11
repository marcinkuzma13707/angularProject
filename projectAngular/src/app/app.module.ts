import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list/country-list.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent, CountryListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }