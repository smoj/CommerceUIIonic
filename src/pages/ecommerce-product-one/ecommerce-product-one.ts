import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EcommerceProductTabReviewsPage } from '../ecommerce-product-tab-reviews/ecommerce-product-tab-reviews';
import { EcommerceProductTabDetailsPage } from '../ecommerce-product-tab-details/ecommerce-product-tab-details';

/*
  Generated class for the EcommerceProductOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ecommerce-product-one',
  templateUrl: 'ecommerce-product-one.html'
})
export class EcommerceProductOnePage {
  details : any = EcommerceProductTabDetailsPage;
  reviews : any = EcommerceProductTabReviewsPage;
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcommerceProductOnePage');
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    this.slideIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

}
