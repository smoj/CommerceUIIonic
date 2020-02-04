import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { EcommerceHomePage } from '../ecommerce-home/ecommerce-home';

/*
  Generated class for the Sidemenus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sidemenus',
  templateUrl: 'sidemenus.html'
})
export class SidemenusPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl : MenuController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenusPage');
  }

  openMenuOne() {
    this.menuCtrl.enable(true,'profile-sidemenu-one');
    this.menuCtrl.enable(false,'profile-sidemenu-two');
    this.menuCtrl.open('profile-sidemenu-one');
  }

  openMenuTwo() {
    this.menuCtrl.enable(false,'profile-sidemenu-one');
    this.menuCtrl.enable(true,'profile-sidemenu-two');
    this.menuCtrl.open('profile-sidemenu-two');
  }

  goHome() {
    this.navCtrl.setRoot(EcommerceHomePage);
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    this.menuCtrl.enable(false,'profile-sidemenu-two');
    this.menuCtrl.enable(false,'profile-sidemenu-one');
  }

}
