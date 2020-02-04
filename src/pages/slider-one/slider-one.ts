import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SliderOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slider-one',
  templateUrl: 'slider-one.html'
})
export class SliderOnePage {
  @ViewChild('slides') slides;
  slideIndex : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderOnePage');
    // this.slides.centeredSlides = true;
    // this.slides.slidesPerView = 2;
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
