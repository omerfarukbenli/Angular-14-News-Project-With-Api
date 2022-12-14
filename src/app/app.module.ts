import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiService} from './newsapi.service'


import {HttpClientModule} from '@angular/common/http';
import { TechnewsComponent } from './technews/technews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
