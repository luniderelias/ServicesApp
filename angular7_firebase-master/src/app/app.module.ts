import { EcommerceComponent } from './components/dashboard/eCommerce/eCommerce.component';
import { MessagingService } from './services/messaging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { CityConfigurationComponent } from './components/city-configuration/city-configuration.component';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { AddComponent } from './components/add/add.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';
import { AddNewCityComponent } from './components/add-new-city/add-new-city.component';
import { AddNewDistrictComponent } from './components/add-new-district/add-new-district.component';
import { AddNewStreetComponent } from './components/add-new-street/add-new-street.component';
import { AddNewBuildingComponent } from './components/add-new-building/add-new-building.component';
import { EditCityComponent } from './components/edit-city/edit-city.component';
import { EditDistrictComponent } from './components/edit-district/edit-district.component';
import { EditStreetComponent } from './components/edit-street/edit-street.component';
import { EditBuildingComponent } from './components/edit-building/edit-building.component';
import { AddPaypalComponent } from './components/add-paypal/add-paypal.component';
import { AddStripeComponent } from './components/add-stripe/add-stripe.component';
import { AddExtraFoodComponent } from './components/add-extra-food/add-extra-food.component';
import { ViewExtraFoodComponent } from './components/view-extra-food/view-extra-food.component';
import { EditExtraFoodComponent } from './components/edit-extra-food/edit-extra-food.component';
import { AddNewRestaurantComponent } from './components/add-new-restaurant/add-new-restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './components/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { ContentLayoutComponent } from './components/layouts/content/content-layout.component';
import { FullLayoutComponent } from './components/layouts/full/full-layout.component';

import { DragulaService } from 'ng2-dragula';

import * as $ from 'jquery';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    DetailsBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    EditRestaurantComponent,
    CategoriesComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    EditCategoryComponent,
    ItemsComponent,
    ItemDetailsComponent,
    EditItemComponent,
    AddItemComponent,
    OrdersComponent,
    OrderDetailsComponent,
    EditOrderComponent,
    AddCityComponent,
    CityConfigurationComponent,
    AddDistrictComponent,
    AddComponent,
    AddBuildingComponent,
    AddNewCityComponent,
    AddNewDistrictComponent,
    AddNewStreetComponent,
    AddNewBuildingComponent,
    EditCityComponent,
    EditDistrictComponent,
    EditStreetComponent,
    EditBuildingComponent,
    AddPaypalComponent,
    AddStripeComponent,
    AddExtraFoodComponent,
    ViewExtraFoodComponent,
    EditExtraFoodComponent,
    AddNewRestaurantComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDatatableModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        SnotifyModule.forRoot(),
        HttpClientModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
              }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
  ],
  providers: [
    AngularFireAuth,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    DragulaService,
    AuthService,
    AuthGuard,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
