import { Component, OnInit, Output } from '@angular/core';
import { Page, MapinfoService } from 'src/app/mapinfo.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  a: any;
  //country: string = 'br';
  subscription: Subscription = new Subscription;

  status: string = '';
  cName: string = 'unknow';
  cCapital: string = 'unknow';
  cRegion: string = 'unknow';
  cLevel: string = 'unknow';
  cLong: string = 'unknow';
  cLat: string = 'unknow';

  constructor(private map: MapinfoService) { }

  ngOnInit() {
    //this.map.currentMsg.subscribe(message => this.message = message)
    /*
        this.map.aClickedEvent
          .subscribe((data: string) => {
            console.log('Event message from Component A: ' + data);
          });
    
    this.subscription = this.map.id$.subscribe((id: any) => {
      this.cid = id;
    });
*/
    this.map.id$.subscribe((id: string) => {
      //console.log("info call: " + id);
      this.getInfo(id)
    });

  }

  //F.recive data and store
  getInfo(cid: string) {
    if (cid === '?') { this.status = "No Data for this country in World bank API or this SVG map, you can try click on an different country" }

    else {
      this.map.getLocation(cid).subscribe((data: Page) => {
        this.status = "Success"
        this.a = data;
        console.log(this.a[1][0]);
        this.cName = this.a[1][0].name
        this.cCapital = this.a[1][0].capitalCity
        this.cRegion = this.a[1][0].region.value
        this.cLevel = this.a[1][0].incomeLevel.value
        this.cLong = this.a[1][0].longitude
        this.cLat = this.a[1][0].latitude
      })
    };
  }

  callapi(id: string) {
    console.log('clicked: ', id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
