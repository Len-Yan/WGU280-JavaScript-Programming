import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Page {
  page: number;
  pages: number;
  per_page: string;
  total: number;
}

@Injectable({
  providedIn: 'root'
})

export class MapinfoService {
  private cid = new Subject<string>();
  id$ = this.cid.asObservable();

  @Output() aClickedEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  setId(id: string) {
    //console.log("service call: " + id);
    this.cid.next(id);
  }

  //F API call with country name as param
  getLocation(country: string) {
    return this.http.get<Page>(`http://api.worldbank.org/v2/country/${country}?format=json`)
  }
  /*
  getLocation(country: string) {
    return this.http.get<Data>(`http://api.geonames.org/countryInfo?country=${country}&username=o8shang`)
  }
*/




  AClicked(msg: string) {
    this.aClickedEvent.emit(msg);
  }

  callapi() {
    console.log("test")
  }

}
