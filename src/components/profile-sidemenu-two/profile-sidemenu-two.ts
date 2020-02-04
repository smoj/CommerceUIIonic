import { Component } from '@angular/core';

/*
  Generated class for the SimpleSidemenu component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'profile-sidemenu-two',
  templateUrl: 'profile-sidemenu-two.html'
})
export class ProfileSidemenuTwoComponent {

  text: string;

  constructor() {
    console.log('Hello SimpleSidemenu Component');
    this.text = 'Hello World';
  }

}
