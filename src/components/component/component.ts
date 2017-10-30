import { Component } from '@angular/core';


@Component({
  selector: 'component',
  templateUrl: 'component.html'
})
export class Component {

  text: string;

  constructor() {
    console.log('Hello Component Component');
    this.text = 'Hello World';
  }

}
