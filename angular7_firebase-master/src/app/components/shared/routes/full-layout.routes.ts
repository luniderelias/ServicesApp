import { Routes, RouterModule } from '@angular/router';


import { OffersComponent } from 'src/app/components/offers/offers.component';
import { DetailsBookComponent } from './../../../components/details-book/details-book.component';
import { ListBooksComponent } from './../../../components/admin/list-books/list-books.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
import { Page404Component } from './../../../components/page404/page404.component';
import { RestaurantsComponent } from 'src/app/components/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from 'src/app/components/restaurant-details/restaurant-details.component';
import { EditRestaurantComponent } from 'src/app/components/edit-restaurant/edit-restaurant.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { AddCategoryComponent } from 'src/app/components/add-category/add-category.component';
import { CategoryDetailsComponent } from 'src/app/components/category-details/category-details.component';
import { EditCategoryComponent } from 'src/app/components/edit-category/edit-category.component';
import { ItemsComponent } from 'src/app/components/items/items.component';
import { ItemDetailsComponent } from 'src/app/components/item-details/item-details.component';
import { EditItemComponent } from 'src/app/components/edit-item/edit-item.component';
import { AddItemComponent } from 'src/app/components/add-item/add-item.component';
import { OrdersComponent } from 'src/app/components/orders/orders.component';
import { OrderDetailsComponent } from 'src/app/components/order-details/order-details.component';
import { EditOrderComponent } from 'src/app/components/edit-order/edit-order.component';
import { CityConfigurationComponent } from 'src/app/components/city-configuration/city-configuration.component';
import { AddDistrictComponent } from 'src/app/components/add-district/add-district.component';
import { AddComponent } from 'src/app/components/add/add.component';
import { AddBuildingComponent } from 'src/app/components/add-building/add-building.component';
import { AddNewCityComponent } from 'src/app/components/add-new-city/add-new-city.component';
import { AddNewDistrictComponent } from 'src/app/components/add-new-district/add-new-district.component';
import { AddNewStreetComponent } from 'src/app/components/add-new-street/add-new-street.component';
import { AddNewBuildingComponent } from 'src/app/components/add-new-building/add-new-building.component';
import { EditCityComponent } from 'src/app/components/edit-city/edit-city.component';
import { EditDistrictComponent } from 'src/app/components/edit-district/edit-district.component';
import { EditStreetComponent } from 'src/app/components/edit-street/edit-street.component';
import { EditBuildingComponent } from 'src/app/components/edit-building/edit-building.component';
import { AddPaypalComponent } from 'src/app/components/add-paypal/add-paypal.component';
import { AddStripeComponent } from 'src/app/components/add-stripe/add-stripe.component';
import { AddExtraFoodComponent } from 'src/app/components/add-extra-food/add-extra-food.component';
import { ViewExtraFoodComponent } from 'src/app/components/view-extra-food/view-extra-food.component';
import { EditExtraFoodComponent } from 'src/app/components/edit-extra-food/edit-extra-food.component';
import { AddNewRestaurantComponent } from 'src/app/components/add-new-restaurant/add-new-restaurant.component';


import { AuthGuard } from './../../../guards/auth.guard';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'src/app/components/dashboard/dashboard.module#DashboardModule',
  },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard]},
    { path: 'book/:id', component: DetailsBookComponent , canActivate: [AuthGuard]},
    { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard]},
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'lojas/listar', component: RestaurantsComponent, canActivate: [AuthGuard]},
    { path: 'lojas/detalhes/:id', component: RestaurantDetailsComponent, canActivate: [AuthGuard]},
    { path: 'lojas/editar/:id', component: EditRestaurantComponent, canActivate: [AuthGuard]},
    { path: 'categorias/listar', component: CategoriesComponent, canActivate: [AuthGuard]},
    { path: 'categorias/adicionar', component: AddCategoryComponent, canActivate: [AuthGuard]},
    { path: 'categorias/detalhes/:id', component: CategoryDetailsComponent, canActivate: [AuthGuard]},
    { path: 'categorias/editar/:id', component: EditCategoryComponent, canActivate: [AuthGuard]},
    { path: 'produtos/listar', component: ItemsComponent, canActivate: [AuthGuard]},
    { path: 'produtos/detalhes/:id', component: ItemDetailsComponent, canActivate: [AuthGuard]},
    { path: 'produtos/editar/:id', component: EditItemComponent, canActivate: [AuthGuard]},
    { path: 'produtos/adicionar', component: AddItemComponent, canActivate: [AuthGuard]},
    { path: 'pedidos', component: OrdersComponent, canActivate: [AuthGuard]},
    { path: 'pedidos/detalhes/:id', component: OrderDetailsComponent, canActivate: [AuthGuard]},
    { path: 'pedidos/editar/:id', component: EditOrderComponent, canActivate: [AuthGuard]},
    { path: 'enderecos/cidades/listar', component: CityConfigurationComponent, canActivate: [AuthGuard]},
    { path: 'add-district', component: AddDistrictComponent, canActivate: [AuthGuard]},
    { path: 'add', component: AddComponent, canActivate: [AuthGuard]},
    { path: 'add-building', component: AddBuildingComponent , canActivate: [AuthGuard]},
    { path: 'enderecos/cidades/adicionar', component: AddNewCityComponent, canActivate: [AuthGuard]},
    { path: 'add-new-district', component: AddNewDistrictComponent , canActivate: [AuthGuard]},
    { path: 'add-new-street', component: AddNewStreetComponent, canActivate: [AuthGuard] },
    { path: 'add-new-building', component: AddNewBuildingComponent, canActivate: [AuthGuard]},
    { path: 'enderecos/cidades/editar/:id', component: EditCityComponent , canActivate: [AuthGuard]},
    { path: 'edit-district/:id', component: EditDistrictComponent , canActivate: [AuthGuard]},
    { path: 'edit-street/:id', component: EditStreetComponent, canActivate: [AuthGuard]},
    { path: 'edit-building/:id', component: EditBuildingComponent , canActivate: [AuthGuard]},
    { path: 'add-paypal', component: AddPaypalComponent, canActivate: [AuthGuard]},
    { path: 'add-stripe', component: AddStripeComponent, canActivate: [AuthGuard] },
    { path: 'produtos/adicional/:id', component: AddExtraFoodComponent, canActivate: [AuthGuard] },
    { path: 'produtos/adicional/listar/:id', component: ViewExtraFoodComponent, canActivate: [AuthGuard] },
    { path: 'produtos/adicional/editar/:id/:product_id', component: EditExtraFoodComponent, canActivate: [AuthGuard] },
    { path: 'lojas/adicionar', component: AddNewRestaurantComponent , canActivate: [AuthGuard]},
    { path: '**', component: Page404Component },
];
