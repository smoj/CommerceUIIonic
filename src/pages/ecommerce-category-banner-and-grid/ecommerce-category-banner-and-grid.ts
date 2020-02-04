import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EcommerceCategoryBannerAndGrid page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ecommerce-category-banner-and-grid',
  templateUrl: 'ecommerce-category-banner-and-grid.html'
})
export class EcommerceCategoryBannerAndGridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcommerceCategoryBannerAndGridPage');
  }

}
