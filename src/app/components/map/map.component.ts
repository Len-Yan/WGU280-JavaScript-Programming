import { Component, OnInit, Output, Input, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { Page, MapinfoService } from 'src/app/mapinfo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapsvg') mySvg: ElementRef | undefined;

  constructor(private map: MapinfoService) { }
  message: string = '';
  id: string = '';


  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.mySvg) {
      const paths = this.mySvg.nativeElement.querySelectorAll('path');
      paths.forEach((path: { addEventListener: (arg0: string, arg1: (event: Event) => void) => void; }) => {
        path.addEventListener('click', this.handlePathClick);
      });
    }
  }

  handlePathClick = (event: Event) => {
    const id = (event.target as HTMLInputElement).getAttribute('id');
    if (id) {
      console.log("map call: " + id);
      this.map.setId(id);
      //console.log("clicked: " + id);
    }
    else {
      this.map.setId("?");
      console.log("clicked id not exist in current svg map")
    }
  }

}
