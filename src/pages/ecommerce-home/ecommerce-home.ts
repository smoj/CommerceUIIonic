import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the EcommerceHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ecommerce-home',
  templateUrl: 'ecommerce-home.html'
})
export class EcommerceHomePage {
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl : MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EcommerceHomePage');
  }

  ionViewWillEnter() {
    // console.log('Main Side Menu:', this.menuCtrl.isEnabled('mainAppSidemenu'));
    if(!this.menuCtrl.isEnabled('mainAppSidemenu')){
      this.menuCtrl.enable(true, 'mainAppSidemenu');
    }
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
