import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SliderOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slider-two',
  templateUrl: 'slider-two.html'
})
export class SliderTwoPage {
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderOnePage');
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 2;
    this.slides.spaceBetween = 10;
    // this.slides.autoHeight = true;
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
