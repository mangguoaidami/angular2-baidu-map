import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaiduMapModule } from './../src/index';

import { MainApp } from './map/map.component';


@NgModule({
  imports: [ 
    BrowserModule,
    BaiduMapModule
   ],
  declarations: [ AppComponent, MainApp ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}