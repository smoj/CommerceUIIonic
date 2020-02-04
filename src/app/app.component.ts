import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// All created pages
import { SidemenusPage } from '../pages/sidemenus/sidemenus';
import { SliderOnePage } from '../pages/slider-one/slider-one';
import { SliderTwoPage } from '../pages/slider-two/slider-two';
import { SignupPage } from '../pages/signup/signup';
import { LoginTwoPage } from '../pages/login-two/login-two';
import { LoginWithSocialOnePage } from '../pages/login-with-social-one/login-with-social-one';
import { EcommerceCategoriesPage } from '../pages/ecommerce-categories/ecommerce-categories';
import { EcommerceCartPage } from '../pages/ecommerce-cart/ecommerce-cart';
import { EcommerceCategoryBannerAndGridPage } from '../pages/ecommerce-category-banner-and-grid/ecommerce-category-banner-and-grid';
import { EcommerceProductOnePage } from '../pages/ecommerce-product-one/ecommerce-product-one';
import { EcommerceHomePage } from '../pages/ecommerce-home/ecommerce-home';
import { EcommerceProductTabReviewsPage } from '../pages/ecommerce-product-tab-reviews/ecommerce-product-tab-reviews';
import { EcommerceProductTabDetailsPage } from '../pages/ecommerce-product-tab-details/ecommerce-product-tab-details';
import { EcommerceCartDeliveryPage } from '../pages/ecommerce-cart-delivery/ecommerce-cart-delivery';
import { EcommerceCartPaymentPage } from '../pages/ecommerce-cart-payment/ecommerce-cart-payment';
import { EcommerceCartDonePage } from '../pages/ecommerce-cart-done/ecommerce-cart-done';
import { EcommerceSearchFilterPage } from '../pages/ecommerce-search-filter/ecommerce-search-filter';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = EcommerceHomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Walkthrough Slider', component: SliderOnePage },
      { title: 'Carousel Slider', component: SliderTwoPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Forgot Password', component: SignupPage },
      { title: 'Login 2', component: LoginTwoPage },
      { title: 'Login (Alternate)', component: LoginWithSocialOnePage },
      { title: 'Sidemenus (2 Styles)', component: SidemenusPage},
      { title: 'Ecommerce Home', component: EcommerceHomePage},
      { title: 'Search & Filtering', component: EcommerceSearchFilterPage},
      { title: 'Category', component: EcommerceCategoriesPage },
      { title: 'Category Items', component: EcommerceCategoryBannerAndGridPage },
      { title: 'Product Page', component : EcommerceProductOnePage},
      { title: 'Product Review', component : EcommerceProductTabReviewsPage},
      { title: 'Cart', component: EcommerceCartPage},
      { title: 'Shipping', component : EcommerceCartDeliveryPage},
      { title: 'Payment', component : EcommerceCartPaymentPage},
      { title: 'Order Done', component : EcommerceCartDonePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
