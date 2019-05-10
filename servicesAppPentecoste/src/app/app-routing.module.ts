import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, 
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'choose-address', loadChildren: './choose-address/choose-address.module#ChooseAddressPageModule' },
  { path: 'choose-payment', loadChildren: './choose-payment/choose-payment.module#ChoosePaymentPageModule' },
  { path: 'new-address', loadChildren: './new-address/new-address.module#NewAddressPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'order-details', loadChildren: './order-details/order-details.module#OrderDetailsPageModule' },
  { path: 'item-search', loadChildren: './item-search/item-search.module#ItemSearchPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'my-address', loadChildren: './my-address/my-address.module#MyAddressPageModule' },
  { path: 'edit-address', loadChildren: './edit-address/edit-address.module#EditAddressPageModule' },
  { path: 'restaurant-map', loadChildren: './restaurant-map/restaurant-map.module#RestaurantMapPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'chat-list', loadChildren: './chat-list/chat-list.module#ChatListPageModule' },
  { path: 'food-search', loadChildren: './food-search/food-search.module#FoodSearchPageModule' },
  { path: 'chat-user', loadChildren: './chat-user/chat-user.module#ChatUserPageModule' },
  { path: 'translate', loadChildren: './translate/translate.module#TranslatePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
