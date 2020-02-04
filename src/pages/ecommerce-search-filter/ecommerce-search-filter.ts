import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the EcommerceSearchFilter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ecommerce-search-filter',
  templateUrl: 'ecommerce-search-filter.html'
})
export class EcommerceSearchFilterPage {
  minPrice : number = 0;
  maxPrice : number = 15000;
  rangedPrice : any = {
    lower: <number> this.minPrice,
    upper: <number> this.maxPrice
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rangedPrice.lower = this.minPrice;
    this.rangedPrice.upper = this.maxPrice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcommerceSearchFilterPage');
  }

}
