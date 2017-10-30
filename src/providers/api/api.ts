import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  /**
  *To get all the countries from API.
  */
  public getData() :void {
    this.http.get('myUrl');
  }

}
