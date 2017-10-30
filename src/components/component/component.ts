import { Component } from '@angular/core';

/**
 * Generated class for the Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
