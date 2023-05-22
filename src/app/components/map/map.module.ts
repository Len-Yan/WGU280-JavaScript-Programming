import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapinfoService } from 'src/app/mapinfo.service';
import { MapRoutingModule } from './map-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapRoutingModule,
  ],
  providers: [MapinfoService],
})
export class MapModule { }
