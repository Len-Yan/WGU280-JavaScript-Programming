import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { InfoComponent } from './components/info/info.component';
import { AppRoutingModule } from './app-routing.module';
import { MapinfoService } from './mapinfo.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MapModule } from './components/map/map.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MapModule
  ],
  providers: [MapinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
