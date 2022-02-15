import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LogosComponent } from './component/logos/logos.component';

import { BadgesComponent } from './component/badges/badges.component';
import { BannerComponent } from './component/banner/banner.component';
import { ChartComponent } from './component/chart/chart.component';
import { StreamComponent } from './component/stream/stream.component';

@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LogosComponent,
    
    BadgesComponent,
    BannerComponent,
    ChartComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
