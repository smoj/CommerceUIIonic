import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfileSidemenuOneComponent } from '../components/profile-sidemenu-one/profile-sidemenu-one';
import { ProfileSidemenuTwoComponent } from '../components/profile-sidemenu-two/profile-sidemenu-two';
import { SidemenusPage } from '../pages/sidemenus/sidemenus';
import { Doublepadding } from '../components/doublepadding/doublepadding';
import { Bold } from '../components/bold/bold';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfileSidemenuOneComponent,
    ProfileSidemenuTwoComponent,
    SidemenusPage,
    Doublepadding,
    Bold,
    SliderOnePage,
    SliderTwoPage,
    SignupPage,
    LoginTwoPage,
    LoginWithSocialOnePage,
    EcommerceCategoriesPage,
    EcommerceCartPage,
    EcommerceCategoryBannerAndGridPage,
    EcommerceProductOnePage,
    EcommerceHomePage,
    EcommerceProductTabReviewsPage,
    EcommerceProductTabDetailsPage,
    EcommerceCartDeliveryPage,
    EcommerceCartPaymentPage,
    EcommerceCartDonePage,
    EcommerceSearchFilterPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfileSidemenuOneComponent,
    ProfileSidemenuTwoComponent,
    SidemenusPage,
    SliderOnePage,
    SliderTwoPage,
    SignupPage,
    LoginTwoPage,
    LoginWithSocialOnePage,
    EcommerceCategoriesPage,
    EcommerceCartPage,
    EcommerceCategoryBannerAndGridPage,
    EcommerceProductOnePage,
    EcommerceHomePage,
    EcommerceProductTabReviewsPage,
    EcommerceProductTabDetailsPage,
    EcommerceCartDeliveryPage,
    EcommerceCartPaymentPage,
    EcommerceCartDonePage,
    EcommerceSearchFilterPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
