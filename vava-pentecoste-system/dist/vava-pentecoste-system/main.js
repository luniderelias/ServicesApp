(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/pages/content-pages/content-pages.module": [
		"./src/app/components/pages/content-pages/content-pages.module.ts",
		"components-pages-content-pages-content-pages-module"
	],
	"src/app/components/dashboard/dashboard.module": [
		"./src/app/components/dashboard/dashboard.module.ts",
		"src-app-components-dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/routes/full-layout.routes */ "./src/app/components/shared/routes/full-layout.routes.ts");
/* harmony import */ var _components_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/full/full-layout.component */ "./src/app/components/layouts/full/full-layout.component.ts");
/* harmony import */ var _components_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/content/content-layout.component */ "./src/app/components/layouts/content/content-layout.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '',
        redirectTo: 'dashboard/eCommerce',
        pathMatch: 'full',
    },
    {
        path: 'user/login',
        component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    { path: '', component: _components_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _components_shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__["Full_ROUTES"] },
    { path: '', component: _components_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: [
            {
                path: 'pages',
                loadChildren: './components/pages/content-pages/content-pages.module#ContentPagesModule'
            }
        ],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<ng-snotify></ng-snotify>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/messaging.service */ "./src/app/services/messaging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(messagingService) {
        this.messagingService = messagingService;
        this.title = 'vava-pentecoste-system';
    }
    AppComponent.prototype.ngOnInit = function () {
        var userId = 'user001';
        switch (localStorage.getItem('current_user_role')) {
            case 'admin':
                userId = 'admin';
                break;
            case 'store_one':
                userId = 'store_one';
                break;
        }
        this.messagingService.requestPermission(userId);
        this.messagingService.receiveMessage();
        this.message = this.messagingService.currentMessage;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/messaging.service */ "./src/app/services/messaging.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _components_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/restaurants/restaurants.component */ "./src/app/components/restaurants/restaurants.component.ts");
/* harmony import */ var _components_restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/restaurant-details/restaurant-details.component */ "./src/app/components/restaurant-details/restaurant-details.component.ts");
/* harmony import */ var _components_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-restaurant/edit-restaurant.component */ "./src/app/components/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "./src/app/components/add-category/add-category.component.ts");
/* harmony import */ var _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/category-details/category-details.component */ "./src/app/components/category-details/category-details.component.ts");
/* harmony import */ var _components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/edit-category/edit-category.component */ "./src/app/components/edit-category/edit-category.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/item-details/item-details.component */ "./src/app/components/item-details/item-details.component.ts");
/* harmony import */ var _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/edit-item/edit-item.component */ "./src/app/components/edit-item/edit-item.component.ts");
/* harmony import */ var _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/order-details/order-details.component */ "./src/app/components/order-details/order-details.component.ts");
/* harmony import */ var _components_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/edit-order/edit-order.component */ "./src/app/components/edit-order/edit-order.component.ts");
/* harmony import */ var _components_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/add-city/add-city.component */ "./src/app/components/add-city/add-city.component.ts");
/* harmony import */ var _components_city_configuration_city_configuration_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/city-configuration/city-configuration.component */ "./src/app/components/city-configuration/city-configuration.component.ts");
/* harmony import */ var _components_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/add-district/add-district.component */ "./src/app/components/add-district/add-district.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _components_add_building_add_building_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/add-building/add-building.component */ "./src/app/components/add-building/add-building.component.ts");
/* harmony import */ var _components_add_new_city_add_new_city_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/add-new-city/add-new-city.component */ "./src/app/components/add-new-city/add-new-city.component.ts");
/* harmony import */ var _components_add_new_district_add_new_district_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/add-new-district/add-new-district.component */ "./src/app/components/add-new-district/add-new-district.component.ts");
/* harmony import */ var _components_add_new_street_add_new_street_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/add-new-street/add-new-street.component */ "./src/app/components/add-new-street/add-new-street.component.ts");
/* harmony import */ var _components_add_new_building_add_new_building_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/add-new-building/add-new-building.component */ "./src/app/components/add-new-building/add-new-building.component.ts");
/* harmony import */ var _components_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/edit-city/edit-city.component */ "./src/app/components/edit-city/edit-city.component.ts");
/* harmony import */ var _components_edit_district_edit_district_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/edit-district/edit-district.component */ "./src/app/components/edit-district/edit-district.component.ts");
/* harmony import */ var _components_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/edit-street/edit-street.component */ "./src/app/components/edit-street/edit-street.component.ts");
/* harmony import */ var _components_edit_building_edit_building_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/edit-building/edit-building.component */ "./src/app/components/edit-building/edit-building.component.ts");
/* harmony import */ var _components_add_paypal_add_paypal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/add-paypal/add-paypal.component */ "./src/app/components/add-paypal/add-paypal.component.ts");
/* harmony import */ var _components_add_stripe_add_stripe_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/add-stripe/add-stripe.component */ "./src/app/components/add-stripe/add-stripe.component.ts");
/* harmony import */ var _components_add_extra_food_add_extra_food_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/add-extra-food/add-extra-food.component */ "./src/app/components/add-extra-food/add-extra-food.component.ts");
/* harmony import */ var _components_view_extra_food_view_extra_food_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/view-extra-food/view-extra-food.component */ "./src/app/components/view-extra-food/view-extra-food.component.ts");
/* harmony import */ var _components_edit_extra_food_edit_extra_food_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/edit-extra-food/edit-extra-food.component */ "./src/app/components/edit-extra-food/edit-extra-food.component.ts");
/* harmony import */ var _components_add_new_restaurant_add_new_restaurant_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/add-new-restaurant/add-new-restaurant.component */ "./src/app/components/add-new-restaurant/add-new-restaurant.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _components_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/layouts/content/content-layout.component */ "./src/app/components/layouts/content/content-layout.component.ts");
/* harmony import */ var _components_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/layouts/full/full-layout.component */ "./src/app/components/layouts/full/full-layout.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ng2_imageupload__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ng2-imageupload */ "./node_modules/ng2-imageupload/index.js");
/* harmony import */ var ng2_imageupload__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(ng2_imageupload__WEBPACK_IMPORTED_MODULE_72__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































































function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_62__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__["ListBooksComponent"],
                _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
                _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__["Page404Component"],
                _components_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_23__["RestaurantsComponent"],
                _components_restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_24__["RestaurantDetailsComponent"],
                _components_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_25__["EditRestaurantComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesComponent"],
                _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_27__["AddCategoryComponent"],
                _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_28__["CategoryDetailsComponent"],
                _components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_29__["EditCategoryComponent"],
                _components_items_items_component__WEBPACK_IMPORTED_MODULE_30__["ItemsComponent"],
                _components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_31__["ItemDetailsComponent"],
                _components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_32__["EditItemComponent"],
                _components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_33__["AddItemComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_34__["OrdersComponent"],
                _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_35__["OrderDetailsComponent"],
                _components_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_36__["EditOrderComponent"],
                _components_add_city_add_city_component__WEBPACK_IMPORTED_MODULE_37__["AddCityComponent"],
                _components_city_configuration_city_configuration_component__WEBPACK_IMPORTED_MODULE_38__["CityConfigurationComponent"],
                _components_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_39__["AddDistrictComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_40__["AddComponent"],
                _components_add_building_add_building_component__WEBPACK_IMPORTED_MODULE_41__["AddBuildingComponent"],
                _components_add_new_city_add_new_city_component__WEBPACK_IMPORTED_MODULE_42__["AddNewCityComponent"],
                _components_add_new_district_add_new_district_component__WEBPACK_IMPORTED_MODULE_43__["AddNewDistrictComponent"],
                _components_add_new_street_add_new_street_component__WEBPACK_IMPORTED_MODULE_44__["AddNewStreetComponent"],
                _components_add_new_building_add_new_building_component__WEBPACK_IMPORTED_MODULE_45__["AddNewBuildingComponent"],
                _components_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_46__["EditCityComponent"],
                _components_edit_district_edit_district_component__WEBPACK_IMPORTED_MODULE_47__["EditDistrictComponent"],
                _components_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_48__["EditStreetComponent"],
                _components_edit_building_edit_building_component__WEBPACK_IMPORTED_MODULE_49__["EditBuildingComponent"],
                _components_add_paypal_add_paypal_component__WEBPACK_IMPORTED_MODULE_50__["AddPaypalComponent"],
                _components_add_stripe_add_stripe_component__WEBPACK_IMPORTED_MODULE_51__["AddStripeComponent"],
                _components_add_extra_food_add_extra_food_component__WEBPACK_IMPORTED_MODULE_52__["AddExtraFoodComponent"],
                _components_view_extra_food_view_extra_food_component__WEBPACK_IMPORTED_MODULE_53__["ViewExtraFoodComponent"],
                _components_edit_extra_food_edit_extra_food_component__WEBPACK_IMPORTED_MODULE_54__["EditExtraFoodComponent"],
                _components_add_new_restaurant_add_new_restaurant_component__WEBPACK_IMPORTED_MODULE_55__["AddNewRestaurantComponent"],
                _components_layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_70__["FullLayoutComponent"],
                _components_layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_69__["ContentLayoutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng2_imageupload__WEBPACK_IMPORTED_MODULE_72__["ImageUploadModule"],
                ng2_img_max__WEBPACK_IMPORTED_MODULE_57__["Ng2ImgMaxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_65__["NgxDatatableModule"],
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_64__["AngularFireMessagingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_20__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_63__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_59__["SharedModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_68__["SnotifyModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_61__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_58__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_61__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_60__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
                })
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuth"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_68__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_68__["SnotifyService"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_71__["DragulaService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_66__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_67__["AuthGuard"],
                _services_messaging_service__WEBPACK_IMPORTED_MODULE_0__["MessagingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-building/add-building.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-building/add-building.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWJ1aWxkaW5nL2FkZC1idWlsZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-building/add-building.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-building/add-building.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n  <div class=\"col\">\n  \n\t\t\n\n\t\t\t\t<div *ngIf = \"buildings\">\n\n\t\t\t\t\t<a [routerLink] = \"['/orders']\">Go back </a>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t\t<h2 class =\"page header\">Restaurant Building </h2>\n\n\t\t\t\t\t<div class = \"row\">\n\t\t\t\t\t\t<div class = \"col-md-4\">\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District Image</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District ID</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District Name</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td style = \"width:30%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">Action</b>\n\t\t\t\t\t\t\t\t\t</td>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div *ngFor=\"let item of buildings\" style=\"width:100%;\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div style = \"background-color:#00bfff;color:white;width:100%;\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t \n\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/multi4ionic.appspot.com/o/categoryimages%2Fthe-kelvin-apartments-exterior.jpg?alt=media&token=3d1ff60f-7522-4da0-a0c6-b4103aadac23\">\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<p style = \"text-align: left;\">{{item.$key}}</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<p style = \"text-align: left;\">{{item.name}}</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:30%;\">\n\t\t\t\t\t\t\t\t\t\t\t<!---\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-extra-food/' + item.$key]\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t---->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemEdit(item.$key)\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemDelete(item.$key)\" class = \"btn btn-danger\" >Delete</a>\n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add-new-building']\" style = \"text-align: center;color:white;\">Add Building</a>\n\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" >\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-building/'+item.$key]\" style = \"text-align: center;color:white;\">Edit Building</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button (click)=\"deleteBuilding(item.$key)\" class=\"btn btn-success\" >\n\t\t\t\t\t\t\t\t<a  style = \"text-align: center;color:white;\">Delete</a>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\n\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t  \n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\n\n  \n  </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/components/add-building/add-building.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-building/add-building.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBuildingComponent", function() { return AddBuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBuildingComponent = /** @class */ (function () {
    function AddBuildingComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    AddBuildingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getBuildings().snapshotChanges().subscribe(function (buildings) {
            _this.buildings = [];
            buildings.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.buildings.push(a);
            });
        });
    };
    AddBuildingComponent.prototype.deleteBuilding = function (buildingkey) {
        this.firebaseService.deleteBuilding(buildingkey);
    };
    AddBuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-building',
            template: __webpack_require__(/*! ./add-building.component.html */ "./src/app/components/add-building/add-building.component.html"),
            styles: [__webpack_require__(/*! ./add-building.component.css */ "./src/app/components/add-building/add-building.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddBuildingComponent);
    return AddBuildingComponent;
}());



/***/ }),

/***/ "./src/app/components/add-category/add-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-category/add-category.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-category/add-category.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-category/add-category.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form name=\"formBook\" #formBook=\"ngForm\" (ngSubmit)=\"showQuestion()\" ngNativeValidate>\n\n            <div class=\"form-group\">\n                <label>ID</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cat_id\" name=\"cat_id\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cat_name\" name=\"cat_name\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Loja</label>\n\n                <select class=\"form-control\" type=\"text\" [(ngModel)]=\"res_name\" name=\"res_name\" required>\n\n     \n      <option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.$key\">{{restaurant.title}}</option>\n\t \n\n\t</select>\n            </div>\n            <div class=\"form-group\">\n                <img src=\"image\" hidden=\"!image\">\n                <input type=\"file\" (change)=\"onImageChange($event)\" accept=\"image/*\" required>\n                <!-- <input id=\"image\" name=\"image\" [(ngModel)]=\"image\" type=\"file\" accept=\".png, .jpg\" required> -->\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/add-category/add-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-category/add-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(dataApi, firebaseService, router, ng2ImgMax) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.ng2ImgMax = ng2ImgMax;
        this.isAdmin = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
            localStorage.getItem('current_user_role') === 'super_admin';
    }
    AddCategoryComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.getRestaurants();
    };
    AddCategoryComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.firebaseService.getRestaurants().snapshotChanges().subscribe(function (restaurants) {
            _this.restaurants = [];
            restaurants.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.restaurants.push(a);
            });
        });
    };
    AddCategoryComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onCategoryAddSubmit();
        });
    };
    AddCategoryComponent.prototype.onCategoryAddSubmit = function () {
        var _this = this;
        return this.firebaseService.getRestaurantDetails(this.res_name).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            var category = {
                cat_id: _this.cat_id,
                cat_name: _this.cat_name,
                res_name: _this.res_name,
                image: _this.image,
                restaurant_name: _this.restaurant.title,
                restaurant_image: _this.restaurant.firebase_url,
                restaurant_lat: _this.restaurant.lat,
                restaurant_long: _this.restaurant.long,
                res_id: _this.restaurant.$key,
                user_id: _this.restaurant.user_id,
            };
            _this.firebaseService.addCategory(category).then(function () {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showSuccess"]('Sucesso!', 'Categoria Cadastrada com Sucesso!');
                _this.loading = false;
                _this.router.navigate(['categorias/listar']);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro', 'Falha ao Cadastrar Categoria');
                _this.loading = false;
            });
        }, function (error) {
            _this.loading = false;
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro', 'Falha ao Cadastrar Categoria');
        });
    };
    AddCategoryComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var image = event.target.files[0];
        this.ng2ImgMax.resizeImage(image, 300, 300).subscribe(function (result) {
            _this.image = new File([result], result.name);
        }, function (error) {
            console.log('😢 Oh no!', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCategoryComponent.prototype, "btnClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddCategoryComponent.prototype, "userUid", void 0);
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/components/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/components/add-category/add-category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_5__["Ng2ImgMaxService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/add-city/add-city.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-city/add-city.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNpdHkvYWRkLWNpdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-city/add-city.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-city/add-city.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-city works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/add-city/add-city.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-city/add-city.component.ts ***!
  \***********************************************************/
/*! exports provided: AddCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityComponent", function() { return AddCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCityComponent = /** @class */ (function () {
    function AddCityComponent() {
    }
    AddCityComponent.prototype.ngOnInit = function () {
    };
    AddCityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-city',
            template: __webpack_require__(/*! ./add-city.component.html */ "./src/app/components/add-city/add-city.component.html"),
            styles: [__webpack_require__(/*! ./add-city.component.css */ "./src/app/components/add-city/add-city.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCityComponent);
    return AddCityComponent;
}());



/***/ }),

/***/ "./src/app/components/add-district/add-district.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-district/add-district.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWRpc3RyaWN0L2FkZC1kaXN0cmljdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-district/add-district.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-district/add-district.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n\n\n        <div *ngIf=\"districts\">\n\n            <a [routerLink]=\"['/orders']\">Go back </a>\n            <br>\n\n            <h2 class=\"page header\">Districts </h2>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n\n\n                </div>\n\n\n                <table class=\"table\">\n                    <tr>\n\n\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">District Image</b>\n                        </td>\n\n\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">District ID</b>\n                        </td>\n\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">District Name</b>\n                        </td>\n\n\n\n                        <td style=\"width:30%;\">\n                            <b style=\"text-align: center;\">Action</b>\n                        </td>\n\n\n\n\n\n                    </tr>\n\n\n\n                </table>\n\n                <div *ngFor=\"let item of districts\" style=\"width:100%;\">\n\n                    <div style=\"background-color:#00bfff;color:white;width:100%;\">\n\n                    </div>\n\n                    <table class=\"table\">\n\n\n\n                        <tr>\n\n                            <td style=\"width:20%;\">\n                                <img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/multi4ionic.appspot.com/o/categoryimages%2F1448959365-red_light-21_copy.jpg?alt=media&token=a5136b24-cd93-4d10-826a-26f295e9ece2\">\n                            </td>\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">{{item.$key}}</p>\n                            </td>\n\n\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">{{item.name}}</p>\n                            </td>\n\n\n\n                            <td style=\"width:30%;\">\n                                <!---\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-extra-food/' + item.$key]\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t---->\n\n                                <!--\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemEdit(item.$key)\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemDelete(item.$key)\" class = \"btn btn-danger\" >Delete</a>\n\t\t\t\t\t\t\t\t\t\t\t-->\n                                <button class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add-new-district']\" style = \"text-align: center;color:white;\">Add District</a>\n\t\t\t\t\t\t\t\t\t</button>\n\n\n                                <button class=\"btn btn-warning\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-district/'+item.$key]\" style = \"text-align: center;color:white;\">Edit District</a>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\n                                <button (click)=\"deleteDistrict(item.$key)\" class=\"btn btn-success\">\n\t\t\t\t\t\t\t\t\t<a  style = \"text-align: center;color:white;\">Delete</a>\n\t\t\t\t\t\t\t\t\t</button>\n\n\n\n                            </td>\n\n\n\n\n\n\n\n                        </tr>\n\n\n\n                    </table>\n                </div>\n\n\n            </div>\n\n\n        </div>\n\n\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-district/add-district.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-district/add-district.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDistrictComponent", function() { return AddDistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDistrictComponent = /** @class */ (function () {
    function AddDistrictComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    AddDistrictComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getDistricts().snapshotChanges().subscribe(function (districts) {
            _this.districts = [];
            districts.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.districts.push(a);
            });
        });
    };
    AddDistrictComponent.prototype.deleteDistrict = function (districtkey) {
        this.firebaseService.deleteDistrict(districtkey);
    };
    AddDistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-district',
            template: __webpack_require__(/*! ./add-district.component.html */ "./src/app/components/add-district/add-district.component.html"),
            styles: [__webpack_require__(/*! ./add-district.component.css */ "./src/app/components/add-district/add-district.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddDistrictComponent);
    return AddDistrictComponent;
}());



/***/ }),

/***/ "./src/app/components/add-extra-food/add-extra-food.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-extra-food/add-extra-food.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWV4dHJhLWZvb2QvYWRkLWV4dHJhLWZvb2QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-extra-food/add-extra-food.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-extra-food/add-extra-food.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Nome do Opcional</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"extraName\" name=\"extraName\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Preço do Opcional</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"extraPrice\" name=\"extraPrice\" required>\n            </div>\n\n\n            <div class=\"col\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/produtos/detalhes/'+id]\">Voltar</button>\n                <button type=\"submit\" value=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-extra-food/add-extra-food.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-extra-food/add-extra-food.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddExtraFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExtraFoodComponent", function() { return AddExtraFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddExtraFoodComponent = /** @class */ (function () {
    function AddExtraFoodComponent(dataApi, firebaseService, router, route, authService) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.extraSelected = '';
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
            localStorage.getItem('current_user_role') === 'super_admin';
    }
    AddExtraFoodComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onExtraItemAddSubmit();
        });
    };
    AddExtraFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(function (item) {
            _this.item = [];
            var res = item.payload.toJSON();
            res['$key'] = item.key;
            _this.item = res;
        });
    };
    AddExtraFoodComponent.prototype.onExtraItemAddSubmit = function () {
        var _this = this;
        var extraItem = {
            name: this.extraName,
            selected: this.extraSelected,
            price: this.extraPrice,
        };
        this.firebaseService.addExtraItem(this.id, extraItem).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showSuccess"]('Sucesso!', 'Produto Extra Salvo');
            _this.loading = false;
            _this.router.navigate(['/produtos/adicional/listar/' + _this.id]);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showError"]('Erro!', 'Falha ao Adicionar Produto Extra!');
            _this.loading = false;
        });
    };
    AddExtraFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-extra-food',
            template: __webpack_require__(/*! ./add-extra-food.component.html */ "./src/app/components/add-extra-food/add-extra-food.component.html"),
            styles: [__webpack_require__(/*! ./add-extra-food.component.css */ "./src/app/components/add-extra-food/add-extra-food.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddExtraFoodComponent);
    return AddExtraFoodComponent;
}());



/***/ }),

/***/ "./src/app/components/add-item/add-item.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <div class=\"col\">\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n\n            <div class=\"form-group\">\n                <label>Código</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"product_id\" name=\"product_id\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Categoria</label>\n\n                <select class=\"form-control\" type=\"text\" [(ngModel)]=\"categories\" name=\"categories\" required>\n\t\t\t\t\t\t\t\t  <option *ngFor=\"let category of categoryList\" [value]=\"category.$key\">{{category.cat_name}}</option>\n\n\t\t\t\t</select>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Descrição</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <img src=\"image\" hidden=\"!image\">\n                <input type=\"file\" (change)=\"onImageChange($event)\" accept=\"image/*\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Popularidade</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"popularity\" name=\"popularity\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Preço</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"price\" name=\"price\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Estoque</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"stock\" name=\"stock\" required>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/add-item/add-item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-item/add-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(dataApi, firebaseService, router, ng2ImgMax) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.ng2ImgMax = ng2ImgMax;
        this.available = '';
        this.category = '';
        this.percent = '';
        this.isAdmin = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
            localStorage.getItem('current_user_role') === 'super_admin';
    }
    AddItemComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onItemAddSubmit();
        });
    };
    AddItemComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var image = event.target.files[0];
        this.ng2ImgMax.resizeImage(image, 300, 300).subscribe(function (result) {
            _this.image = new File([result], result.name);
        }, function (error) {
            console.log('😢 Oh no!', error);
        });
    };
    AddItemComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (categories) {
            _this.categoryList = [];
            categories.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.categoryList.push(a);
            });
        });
    };
    AddItemComponent.prototype.onItemAddSubmit = function () {
        var _this = this;
        this.firebaseService.getCategoryDetails(this.categories).snapshotChanges().subscribe(function (category) {
            _this.category_details = [];
            var res = category.payload.toJSON();
            if (category.key != null || category.key !== 'null') {
                res['$key'] = category.key;
            }
            var categories = _this.categories;
            _this.category_details = res;
            var found = _this.categoryList.find(function (element) {
                return element.$key === categories;
            });
            var item = {
                available: _this.available,
                category: found.cat_name,
                description: _this.description,
                product_id: _this.product_id,
                name: _this.name,
                search: _this.name.toLowerCase(),
                popularity: _this.popularity,
                price: _this.price,
                stock: _this.stock,
                categories: _this.categories,
                percent: _this.percent,
                restaurant_image: _this.category_details.restaurant_image,
                restaurant_name: _this.category_details.restaurant_name,
                restaurant_lat: _this.category_details.restaurant_lat,
                restaurant_long: _this.category_details.restaurant_long,
                res_id: _this.category_details.res_id,
                user_id: _this.category_details.user_id,
                real_price: _this.price,
                image: _this.image
            };
            _this.firebaseService.addItem(item).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showSuccess"]('Sucesso!', 'Produto Adicionado');
                _this.loading = false;
                _this.router.navigate(['produtos/listar']);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro!', 'Falha ao Adicionar Produto!');
                _this.loading = false;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddItemComponent.prototype, "btnClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddItemComponent.prototype, "userUid", void 0);
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/components/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/components/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_5__["Ng2ImgMaxService"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/add-new-building/add-new-building.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/add-new-building/add-new-building.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1idWlsZGluZy9hZGQtbmV3LWJ1aWxkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-new-building/add-new-building.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-new-building/add-new-building.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/settings']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Add New Buildings</h2>\n        <form (submit)=\"addBuildingName()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Building Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"buildingName\" name=\"buildingName\" required>\n            </div>\n\n\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-new-building/add-new-building.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/add-new-building/add-new-building.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddNewBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBuildingComponent", function() { return AddNewBuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewBuildingComponent = /** @class */ (function () {
    function AddNewBuildingComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddNewBuildingComponent.prototype.ngOnInit = function () {
    };
    AddNewBuildingComponent.prototype.addBuildingName = function () {
        var buildingName = {
            name: this.buildingName
        };
        this.firebaseService.addNewBuilding(buildingName);
        this.router.navigate(['add-building']);
    };
    AddNewBuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-building',
            template: __webpack_require__(/*! ./add-new-building.component.html */ "./src/app/components/add-new-building/add-new-building.component.html"),
            styles: [__webpack_require__(/*! ./add-new-building.component.css */ "./src/app/components/add-new-building/add-new-building.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewBuildingComponent);
    return AddNewBuildingComponent;
}());



/***/ }),

/***/ "./src/app/components/add-new-city/add-new-city.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-new-city/add-new-city.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1jaXR5L2FkZC1uZXctY2l0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-new-city/add-new-city.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-new-city/add-new-city.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <div class=\"col\">\n        <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cityName\" name=\"cityName\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Preço do Frete</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"fare\" name=\"fare\" required>\n            </div>\n\n\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/add-new-city/add-new-city.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-new-city/add-new-city.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddNewCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCityComponent", function() { return AddNewCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewCityComponent = /** @class */ (function () {
    function AddNewCityComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
            localStorage.getItem('current_user_role') === 'super_admin';
    }
    AddNewCityComponent.prototype.ngOnInit = function () {
    };
    AddNewCityComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.addCityName();
        });
    };
    AddNewCityComponent.prototype.addCityName = function () {
        var _this = this;
        var cityName = {
            name: this.cityName,
            fare: this.fare
        };
        this.firebaseService.addNewCity(cityName).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showSuccess"]('Sucesso!', 'Cidade Adicionada');
            _this.loading = false;
            _this.router.navigate(['enderecos/cidades/listar']);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showError"]('Erro!', 'Falha ao Adicionar Cidade!');
            _this.loading = false;
        });
    };
    AddNewCityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-city',
            template: __webpack_require__(/*! ./add-new-city.component.html */ "./src/app/components/add-new-city/add-new-city.component.html"),
            styles: [__webpack_require__(/*! ./add-new-city.component.css */ "./src/app/components/add-new-city/add-new-city.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewCityComponent);
    return AddNewCityComponent;
}());



/***/ }),

/***/ "./src/app/components/add-new-district/add-new-district.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/add-new-district/add-new-district.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1kaXN0cmljdC9hZGQtbmV3LWRpc3RyaWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-new-district/add-new-district.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-new-district/add-new-district.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/settings']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Add New District</h2>\n        <form (submit)=\"addDistrictName()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>District Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"districtName\" name=\"districtName\" required>\n            </div>\n\n\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/add-new-district/add-new-district.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/add-new-district/add-new-district.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddNewDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewDistrictComponent", function() { return AddNewDistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewDistrictComponent = /** @class */ (function () {
    function AddNewDistrictComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddNewDistrictComponent.prototype.ngOnInit = function () {
    };
    AddNewDistrictComponent.prototype.addDistrictName = function () {
        var districtName = {
            name: this.districtName
        };
        this.firebaseService.addNewDistrict(districtName);
        this.router.navigate(['add-district']);
    };
    AddNewDistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-district',
            template: __webpack_require__(/*! ./add-new-district.component.html */ "./src/app/components/add-new-district/add-new-district.component.html"),
            styles: [__webpack_require__(/*! ./add-new-district.component.css */ "./src/app/components/add-new-district/add-new-district.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewDistrictComponent);
    return AddNewDistrictComponent;
}());



/***/ }),

/***/ "./src/app/components/add-new-restaurant/add-new-restaurant.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/add-new-restaurant/add-new-restaurant.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1yZXN0YXVyYW50L2FkZC1uZXctcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-new-restaurant/add-new-restaurant.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/add-new-restaurant/add-new-restaurant.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form name=\"formBook\" #formBook=\"ngForm\" (ngSubmit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <label>Endereço</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <label>Descrição</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n            </div>\n\n\n\n\n\n\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Latitude</label>\n                        <input class=\"form-control\" type=\"double\" [(ngModel)]=\"lat\" name=\"lat\" required>\n                    </div>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Longitude</label>\n                        <input class=\"form-control\" type=\"double\" [(ngModel)]=\"long\" name=\"long\" required>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Informações Adicionais</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"info\" name=\"info\" required>\n                    </div>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Marca</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"mark\" name=\"mark\" required>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Tipo de Produtos</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"outlet\" name=\"outlet\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Telefone</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phonenumber\" placeholder=\"(85) 9 8888-8888\" name=\"phonenumber\" required>\n            </div>\n\n\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" [(ngModel)]=\"image\" type=\"file\" required>\n            </div>\n\n\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n\n        </form>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-new-restaurant/add-new-restaurant.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-new-restaurant/add-new-restaurant.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddNewRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewRestaurantComponent", function() { return AddNewRestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewRestaurantComponent = /** @class */ (function () {
    function AddNewRestaurantComponent(dataApi, firebaseService, router) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.option = '0';
        this.isAdmin = localStorage.getItem('current_user_role') === 'super_admin';
    }
    AddNewRestaurantComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onAddRestaurant();
        });
    };
    AddNewRestaurantComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    AddNewRestaurantComponent.prototype.ngOnInit = function () {
    };
    AddNewRestaurantComponent.prototype.onAddRestaurant = function () {
        var _this = this;
        var restaurant = {
            address: this.address,
            description: this.description,
            image: this.image,
            info: this.info,
            lat: this.lat,
            long: this.long,
            mark: this.mark,
            option: this.option,
            outlet: this.outlet,
            phonenumber: this.phonenumber,
            title: this.title,
            user_id: 'superadmin'
        };
        this.firebaseService.addRestaurant(restaurant).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showSuccess"]('Sucesso!', 'Loja Adicionada');
            _this.loading = false;
            _this.router.navigate(['lojas/listar']);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro!', 'Falha ao Adicionar Loja!');
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddNewRestaurantComponent.prototype, "btnClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddNewRestaurantComponent.prototype, "userUid", void 0);
    AddNewRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-restaurant',
            template: __webpack_require__(/*! ./add-new-restaurant.component.html */ "./src/app/components/add-new-restaurant/add-new-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./add-new-restaurant.component.css */ "./src/app/components/add-new-restaurant/add-new-restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddNewRestaurantComponent);
    return AddNewRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/components/add-new-street/add-new-street.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-new-street/add-new-street.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1zdHJlZXQvYWRkLW5ldy1zdHJlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-new-street/add-new-street.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-new-street/add-new-street.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/settings']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Add New Street</h2>\n        <form (submit)=\"addStreetName()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Street Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"streetName\" name=\"streetName\" required>\n            </div>\n\n\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-new-street/add-new-street.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-new-street/add-new-street.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddNewStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewStreetComponent", function() { return AddNewStreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewStreetComponent = /** @class */ (function () {
    function AddNewStreetComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddNewStreetComponent.prototype.ngOnInit = function () {
    };
    AddNewStreetComponent.prototype.addStreetName = function () {
        var streetName = {
            name: this.streetName
        };
        this.firebaseService.addNewStreet(streetName);
        this.router.navigate(['add']);
    };
    AddNewStreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-street',
            template: __webpack_require__(/*! ./add-new-street.component.html */ "./src/app/components/add-new-street/add-new-street.component.html"),
            styles: [__webpack_require__(/*! ./add-new-street.component.css */ "./src/app/components/add-new-street/add-new-street.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewStreetComponent);
    return AddNewStreetComponent;
}());



/***/ }),

/***/ "./src/app/components/add-paypal/add-paypal.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-paypal/add-paypal.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXBheXBhbC9hZGQtcGF5cGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-paypal/add-paypal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-paypal/add-paypal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n\n        <a [routerLink]=\"['/settings']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Paypal Configuration</h2>\n        <form (submit)=\"onPaypalConfiguration()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>PayPal Environment Sandbox</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"sandbox\" name=\"sandbox\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>PayPal Environment Production</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"production\" name=\"production\">\n            </div>\n\n\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/add-paypal/add-paypal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-paypal/add-paypal.component.ts ***!
  \***************************************************************/
/*! exports provided: AddPaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaypalComponent", function() { return AddPaypalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPaypalComponent = /** @class */ (function () {
    function AddPaypalComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddPaypalComponent.prototype.ngOnInit = function () {
    };
    AddPaypalComponent.prototype.onPaypalConfiguration = function () {
        if (this.production == "undefined" || this.production == undefined || this.production == "") {
            var paypal = {
                sandbox: this.sandbox,
                production: ""
            };
            this.firebaseService.addPaypalConfiguration(paypal);
            this.router.navigate(['settings']);
        }
        else {
            var paypal = {
                sandbox: this.sandbox,
                production: this.production
            };
            this.firebaseService.addPaypalConfiguration(paypal);
            this.router.navigate(['settings']);
        }
    };
    AddPaypalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-paypal',
            template: __webpack_require__(/*! ./add-paypal.component.html */ "./src/app/components/add-paypal/add-paypal.component.html"),
            styles: [__webpack_require__(/*! ./add-paypal.component.css */ "./src/app/components/add-paypal/add-paypal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddPaypalComponent);
    return AddPaypalComponent;
}());



/***/ }),

/***/ "./src/app/components/add-stripe/add-stripe.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-stripe/add-stripe.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN0cmlwZS9hZGQtc3RyaXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-stripe/add-stripe.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-stripe/add-stripe.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n\n        <a [routerLink]=\"['/settings']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Stripe Configuration</h2>\n        <form (submit)=\"onStripeConfiguration()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Stripe Publishable Key</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"publishable\" name=\"publishable\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Stripe Secret Key</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"secret\" name=\"secret\" required>\n            </div>\n\n\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/add-stripe/add-stripe.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-stripe/add-stripe.component.ts ***!
  \***************************************************************/
/*! exports provided: AddStripeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStripeComponent", function() { return AddStripeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddStripeComponent = /** @class */ (function () {
    function AddStripeComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddStripeComponent.prototype.ngOnInit = function () {
    };
    AddStripeComponent.prototype.onStripeConfiguration = function () {
        var stripe = {
            publishable: this.publishable,
            secret: this.secret
        };
        this.firebaseService.addStripeConfiguration(stripe);
        this.router.navigate(['settings']);
    };
    AddStripeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-stripe',
            template: __webpack_require__(/*! ./add-stripe.component.html */ "./src/app/components/add-stripe/add-stripe.component.html"),
            styles: [__webpack_require__(/*! ./add-stripe.component.css */ "./src/app/components/add-stripe/add-stripe.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddStripeComponent);
    return AddStripeComponent;
}());



/***/ }),

/***/ "./src/app/components/add/add.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/add/add.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add/add.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n  <div class=\"col\">\n  \n\t\t\t\t\n\t\t\t\t<div *ngIf = \"streets\">\n\n\t\t\t\t\t<a [routerLink] = \"['/orders']\">Go back </a>\n\t\t\t\t\t<br>\n\t\t\t\t\t\n\t\t\t\t\t<h2 class =\"page header\">Shop Streets </h2>\n\n\t\t\t\t\t<div class = \"row\">\n\t\t\t\t\t\t<div class = \"col-md-4\">\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District Image</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District ID</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">District Name</b>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td style = \"width:30%;\">\n\t\t\t\t\t\t\t\t\t\t<b style = \"text-align: center;\">Action</b>\n\t\t\t\t\t\t\t\t\t</td>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div *ngFor=\"let item of streets\" style=\"width:100%;\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div style = \"background-color:#00bfff;color:white;width:100%;\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t <table class=\"table\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t \n\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/multi4ionic.appspot.com/o/categoryimages%2Fparis-streets-big.jpg?alt=media&token=2d8725e9-44fd-4108-8ef5-ad39c005ad78\">\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\n\t\t\t\t\t\t\t\t\t\t<p style = \"text-align: left;\">{{item.$key}}</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:20%;\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<p style = \"text-align: left;\">{{item.name}}</p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td style = \"width:30%;\">\n\t\t\t\t\t\t\t\t\t\t\t<!---\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-extra-food/' + item.$key]\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t---->\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemEdit(item.$key)\" class = \"btn btn-warning\" >Edit</a>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"onExtraItemDelete(item.$key)\" class = \"btn btn-danger\" >Delete</a>\n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add-new-street']\" style = \"text-align: center;color:white;\">Add Street</a>\n\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" >\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-street/'+item.$key]\" style = \"text-align: center;color:white;\">Edit Street</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button (click)=\"deleteStreet(item.$key)\" class=\"btn btn-success\" >\n\t\t\t\t\t\t\t\t<a  style = \"text-align: center;color:white;\">Delete</a>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\n\n\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t  \n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n  \n  </div>\n  \n</section>\n"

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = /** @class */ (function () {
    function AddComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getStreets().snapshotChanges().subscribe(function (streets) {
            _this.streets = [];
            streets.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.streets.push(a);
            });
        });
    };
    AddComponent.prototype.deleteStreet = function (streetkey) {
        this.firebaseService.deleteStreet(streetkey);
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/components/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbGlzdC1ib29rcy9saXN0LWJvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n  <div class=\"col\">\n    <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalBook\">New Book</button>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Title</th>\n          <th scope=\"col\">Author</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Offer</th>\n          <th scope=\"col\">&nbsp;</th>\n          <th scope=\"col\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let book of books; index as i\">\n          <th scope=\"row\">{{i+1}}</th>\n          <td>{{book.titulo}}</td>\n          <td>{{book.autor}}</td>\n          <td>{{book.idioma}}</td>\n          <td>{{book.precio}}</td>\n          <td>{{book.oferta == 1 ? 'Sí': 'No'}}</td>\n          <td *ngIf=\"book.userUid == userUid || isAdmin == true; else noOwner\">\n            <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBook\" (click)=\"onPreUpdateBook(book)\">Update</button>\n          </td>\n          <ng-template #noOwner>\n            <td>\n              <button class=\"btn btn-secondary\" disabled=\"true\">Update</button>\n            </td>\n          </ng-template>\n          <td *ngIf=\"isAdmin == true; else noAdmin\">\n            <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Delete</button>\n          </td>\n          <ng-template #noAdmin>\n            <td>\n              <button class=\"btn btn-danger\" disabled=\"true\">Delete</button>\n            </td>\n          </ng-template>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n<app-modal [userUid]=\"userUid\"></app-modal>"

/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function() { return ListBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListBooksComponent = /** @class */ (function () {
    function ListBooksComponent(dataApi, authService) {
        this.dataApi = dataApi;
        this.authService = authService;
        this.isAdmin = null;
        this.userUid = null;
    }
    ListBooksComponent.prototype.ngOnInit = function () {
        this.getListBooks();
        this.getCurrentUser();
    };
    ListBooksComponent.prototype.getCurrentUser = function () {
        /**
      this.authService.isAuth().subscribe(auth => {
        if (auth) {
          this.userUid = auth.uid;
          this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
            this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
            // this.isAdmin = true;
          })
        }
      })
      */
    };
    ListBooksComponent.prototype.getListBooks = function () {
    };
    ListBooksComponent.prototype.onDeleteBook = function (idBook) {
    };
    ListBooksComponent.prototype.onPreUpdateBook = function (book) {
    };
    ListBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-books',
            template: __webpack_require__(/*! ./list-books.component.html */ "./src/app/components/admin/list-books/list-books.component.html"),
            styles: [__webpack_require__(/*! ./list-books.component.css */ "./src/app/components/admin/list-books/list-books.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ListBooksComponent);
    return ListBooksComponent;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-3\" *ngFor=\"let category of categories; index as i\" style=\"padding-top:30px;\">\n\n                <div class=\"card\" [routerLink]=\"['/categorias/detalhes/'+category.$key]\">\n                    <div class=\"card-body\">\n                        <div class=\"card-block\">\n                            <h5 style=\"text-align: center;\"><b>{{category.cat_name.toUpperCase()}}</b></h5>\n                            <img style=\" width:100% \" class=\"thumbnail \" src=\"{{category.firebase_url}} \">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div align=\"right \" style=\"margin-top:15px; \">\n            <a [routerLink]=\"[ '/categorias/adicionar'] \" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary \" *ngIf=\"isAdmin \">Adicionar Nova Categoria</a>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(firebaseService, authService, router) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.isAdmin = null;
        this.userUid = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (category) {
            _this.categories = [];
            category.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.categories.push(a);
            });
        });
    };
    CategoriesComponent.prototype.onRestaurantDelete = function (id) {
        this.firebaseService.deleteRestaurant(id);
        this.router.navigate(['/restaurants']);
    };
    CategoriesComponent.prototype.goToRestaurantDetails = function (restaurant) {
        this.router.navigate(['/restaurants']);
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/category-details/category-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/category-details/category-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/category-details/category-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/category-details/category-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <div *ngIf=\"category_details\">\n            <h2 class=\"page header\">{{category_details.cat_name}}<small> Categoria</small></h2>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img style=\"width:100%\" class=\"thumbnail\" src=\"{{category_details.firebase_url}}\">\n\n                </div>\n\n                <div class=\"col-md-8\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><b>ID: </b>{{category_details.cat_id}}</li>\n                        <li class=\"list-group-item\"><b>Nome: </b>{{category_details.cat_name}}</li>\n                    </ul>\n\n\n\n                </div>\n\n            </div>\n\n\n            <div class=\"col\" style=\"margin-top: 15px\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/categorias/listar']\">Voltar</button>\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" [routerLink]=\"['/categorias/editar/'+category_details.$key]\" *ngIf=\"isAdmin\">Editar</button>\n                <button (click)=\"showQuestion()\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"isAdmin\">Deletar</button>\n            </div>\n\n        </div>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/category-details/category-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/category-details/category-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryDetailsComponent = /** @class */ (function () {
    function CategoryDetailsComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    CategoryDetailsComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onCategoryDelete();
        });
    };
    CategoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(function (category) {
            _this.category_details = [];
            var res = category.payload.toJSON();
            if (category.key != null || category.key !== 'null') {
                res['$key'] = category.key;
            }
            _this.category_details = res;
        });
    };
    CategoryDetailsComponent.prototype.onCategoryDelete = function () {
        var _this = this;
        this.firebaseService.deleteCategory(this.id).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Categoria Removida');
            _this.loading = false;
            _this.router.navigate(['/categorias/listar']);
        }, function (error) {
            _this.loading = false;
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Remover Categoria!');
        });
    };
    CategoryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-details',
            template: __webpack_require__(/*! ./category-details.component.html */ "./src/app/components/category-details/category-details.component.html"),
            styles: [__webpack_require__(/*! ./category-details.component.css */ "./src/app/components/category-details/category-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryDetailsComponent);
    return CategoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/city-configuration/city-configuration.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/city-configuration/city-configuration.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0eS1jb25maWd1cmF0aW9uL2NpdHktY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/city-configuration/city-configuration.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/city-configuration/city-configuration.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n                        <ngx-datatable #table class='bootstrap' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='cities'>\n                            <ngx-datatable-column prop=\"firebase_url\">\n\n                                <ng-template let-column=\"Imagem\" ngx-datatable-header-template>\n                                    <small><b>IMAGEM</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    <img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/multi4ionic.appspot.com/o/categoryimages%2Fdownload.jpg?alt=media&token=395a1d9f-7707-4e8d-9830-f39201b04eb4\">\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"name\">\n                                <ng-template let-column=\"name\" ngx-datatable-header-template>\n                                    <small><b>NOME</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    <small><b>ID</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    <small><b>AÇÕES</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    <button routerLink=\"/enderecos/cidades/editar/{{value}}\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-warning\" *ngIf=\"isAdmin\">Editar</button>\n                                    <button (click)=\"showQuestion(value)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"isAdmin\">Deletar</button>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n\n                        </ngx-datatable>\n\n                        <div align=\"right\" style=\"margin-top:15px;\">\n                            <a [routerLink]=\"['/enderecos/cidades/adicionar']\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" *ngIf=\"isAdmin\">Adicionar Nova Cidade</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->\n<app-modal [userUid]=\"userUid\"></app-modal>"

/***/ }),

/***/ "./src/app/components/city-configuration/city-configuration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/city-configuration/city-configuration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CityConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityConfigurationComponent", function() { return CityConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CityConfigurationComponent = /** @class */ (function () {
    function CityConfigurationComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    CityConfigurationComponent.prototype.showQuestion = function (value) {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.deleteCity(value);
        });
    };
    CityConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getCities().snapshotChanges().subscribe(function (cities) {
            _this.cities = [];
            cities.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.cities.push(a);
            });
        });
    };
    CityConfigurationComponent.prototype.deleteCity = function (citykey) {
        var _this = this;
        this.firebaseService.deleteCity(citykey).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Cidade Removida!');
            _this.loading = false;
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Remover Cidade!');
            _this.loading = false;
        });
    };
    CityConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-configuration',
            template: __webpack_require__(/*! ./city-configuration.component.html */ "./src/app/components/city-configuration/city-configuration.component.html"),
            styles: [__webpack_require__(/*! ./city-configuration.component.css */ "./src/app/components/city-configuration/city-configuration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CityConfigurationComponent);
    return CityConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/details-book/details-book.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.card-text{\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzLWJvb2svZGV0YWlscy1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMtYm9vay9kZXRhaWxzLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAuY2FyZC10ZXh0e1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/details-book/details-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/details-book/details-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function() { return DetailsBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsBookComponent = /** @class */ (function () {
    function DetailsBookComponent(dataApi, route) {
        this.dataApi = dataApi;
        this.route = route;
    }
    DetailsBookComponent.prototype.ngOnInit = function () {
    };
    DetailsBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-book',
            template: __webpack_require__(/*! ./details-book.component.html */ "./src/app/components/details-book/details-book.component.html"),
            styles: [__webpack_require__(/*! ./details-book.component.css */ "./src/app/components/details-book/details-book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsBookComponent);
    return DetailsBookComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-building/edit-building.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-building/edit-building.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1idWlsZGluZy9lZGl0LWJ1aWxkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-building/edit-building.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-building/edit-building.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/items']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Edit Building</h2>\n        <form (submit)=\"onBuildingEditSubmit()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Building Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"buildingName\" name=\"buildingName\" required>\n            </div>\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/edit-building/edit-building.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-building/edit-building.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBuildingComponent", function() { return EditBuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBuildingComponent = /** @class */ (function () {
    function EditBuildingComponent(dataApi, firebaseService, router, route, authService) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    EditBuildingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getBuildingDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            _this.buildingName = _this.restaurant.name;
        });
    };
    EditBuildingComponent.prototype.onBuildingEditSubmit = function () {
        var building = {
            name: this.buildingName,
        };
        this.firebaseService.updateBuilding(this.id, building);
        this.router.navigate(['/add-building']);
    };
    EditBuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-building',
            template: __webpack_require__(/*! ./edit-building.component.html */ "./src/app/components/edit-building/edit-building.component.html"),
            styles: [__webpack_require__(/*! ./edit-building.component.css */ "./src/app/components/edit-building/edit-building.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EditBuildingComponent);
    return EditBuildingComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-category/edit-category.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-category/edit-category.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-category/edit-category.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-category/edit-category.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"showQuestion()\" ngNativeValidate *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"form-group\">\n        <label>ID</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cat_id\" name=\"cat_id\" required>\n    </div>\n    <div class=\"form-group\">\n        <label>Nome</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cat_name\" name=\"cat_name\" required>\n    </div>\n\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"res_id\" name=\"res_id\" required>\n            <option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.$key\">{{restaurant.title}}</option>\n    </select>\n\n    <div class=\"form-group\" *ngIf=\"!this.inputImageUser?.nativeElement.value\" style=\"margin-top: 20px\">\n\n        <img style=\"width:15%\" class=\"thumbnail\" src=\"{{firebase_url}}\">\n\n\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"this.inputImageUser?.nativeElement.value\" style=\"margin-top: 20px\">\n\n        <img style=\"width:15%\" class=\"thumbnail\" src=\"{{this.inputImageUser?.nativeElement.value}}\">\n\n\n    </div>\n\n    <hr>\n    <div class=\"form-group\">\n        <h5>Selecionar Imagem:</h5>\n        <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n    </div>\n    <div class=\"progress\">\n        <div [style.visibility]=\"(uploadPercent == 0) ? 'hidden' : 'visible'\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) +'%'\">\n\n        </div>\n    </div>\n    <br>\n    <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n\n\n    <div class=\"col\" style=\"margin-top: 15px\">\n        <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/categorias/detalhes/'+id]\">Voltar</button>\n        <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\">Salvar</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/edit-category/edit-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-category/edit-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(dataApi, firebaseService, router, route, authService, storage, ng2ImgMax) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.storage = storage;
        this.ng2ImgMax = ng2ImgMax;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
        this.categoryFolder = 'categoryimages';
        this.id = this.route.snapshot.params['id'];
        this.getRestaurants();
        this.getCategoryDetails();
    }
    EditCategoryComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        //this.btnClose.nativeElement.click();
    };
    EditCategoryComponent.prototype.ngOnInit = function () {
    };
    EditCategoryComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onCategoryEditSubmit();
        });
    };
    EditCategoryComponent.prototype.getCategoryDetails = function () {
        var _this = this;
        this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(function (category) {
            _this.category = [];
            var res = category.payload.toJSON();
            res['$key'] = category.key;
            _this.category = res;
            _this.cat_id = _this.category.cat_id;
            _this.cat_name = _this.category.cat_name;
            _this.res_id = _this.category.res_id;
            _this.image = _this.category.image;
            _this.firebase_url = _this.category.firebase_url;
        });
    };
    EditCategoryComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.firebaseService.getRestaurants().snapshotChanges().subscribe(function (restaurants) {
            _this.restaurants = [];
            restaurants.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.restaurants.push(a);
            });
        });
    };
    EditCategoryComponent.prototype.onCategoryEditSubmit = function () {
        var _this = this;
        if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {
            var category = {
                cat_id: this.cat_id,
                cat_name: this.cat_name,
                image: this.firebase_url,
                firebase_url: this.firebase_url,
                res_id: this.res_id,
            };
            this.firebaseService.updateCategory(this.id, category).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showSuccess"]('Sucesso!', 'Categoria Salva com Sucesso!');
                _this.loading = false;
                _this.router.navigate(['/categorias/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro!', 'Falha ao Editar Categoria!');
                _this.loading = false;
            });
        }
        if (this.inputImageUser.nativeElement.value) {
            var category = {
                cat_id: this.cat_id,
                cat_name: this.cat_name,
                image: this.inputImageUser.nativeElement.value,
                firebase_url: this.inputImageUser.nativeElement.value,
                res_id: this.res_id,
            };
            this.firebaseService.updateCategoryWithImage(this.id, category).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showSuccess"]('Sucesso!', 'Categoria Salva com Sucesso!');
                _this.loading = false;
                _this.router.navigate(['/categorias/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__["showError"]('Erro!', 'Falha ao Editar Categoria!');
                _this.loading = false;
            });
        }
    };
    EditCategoryComponent.prototype.onChange = function ($event) {
        this.image = $event; // <--- File Object for future use.
    };
    EditCategoryComponent.prototype.onUpload = function (e) {
        var _this = this;
        var image = e.target.files[0];
        this.ng2ImgMax.resizeImage(image, 300, 300).subscribe(function (result) {
            _this.image = new File([result], result.name);
            var filePath = "/" + _this.categoryFolder + "/" + image.name;
            var ref = _this.storage.ref(filePath);
            var task = _this.storage.upload(filePath, _this.image);
            _this.uploadPercent = task.percentageChanges();
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditCategoryComponent.prototype, "userUid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUser'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditCategoryComponent.prototype, "inputImageUser", void 0);
    EditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/components/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/components/edit-category/edit-category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_8__["Ng2ImgMaxService"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-city/edit-city.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-city/edit-city.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jaXR5L2VkaXQtY2l0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-city/edit-city.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-city/edit-city.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"cityName\" name=\"cityName\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Preço do Frete</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"fare\" name=\"fare\" required>\n            </div>\n\n            <div class=\"col\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/enderecos/cidades/listar']\">Voltar</button>\n                <button type=\"submit\" value=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/edit-city/edit-city.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-city/edit-city.component.ts ***!
  \*************************************************************/
/*! exports provided: EditCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityComponent", function() { return EditCityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditCityComponent = /** @class */ (function () {
    function EditCityComponent(dataApi, firebaseService, router, route, authService) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    EditCityComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onCityEditSubmit();
        });
    };
    EditCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getCityDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            _this.cityName = _this.restaurant.name;
            _this.fare = _this.restaurant.fare;
        });
    };
    EditCityComponent.prototype.onCityEditSubmit = function () {
        var _this = this;
        var city = {
            name: this.cityName,
            fare: this.fare
        };
        this.firebaseService.updateCity(this.id, city).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showSuccess"]('Sucesso!', 'Cidade Salva');
            _this.loading = false;
            _this.router.navigate(['enderecos/cidades/listar']);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showError"]('Erro!', 'Falha ao Salvar Cidade!');
            _this.loading = false;
        });
    };
    EditCityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-city',
            template: __webpack_require__(/*! ./edit-city.component.html */ "./src/app/components/edit-city/edit-city.component.html"),
            styles: [__webpack_require__(/*! ./edit-city.component.css */ "./src/app/components/edit-city/edit-city.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EditCityComponent);
    return EditCityComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-district/edit-district.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-district/edit-district.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1kaXN0cmljdC9lZGl0LWRpc3RyaWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-district/edit-district.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-district/edit-district.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/items']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Edit District</h2>\n        <form (submit)=\"onDistrictEditSubmit()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>District Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"districtName\" name=\"districtName\" required>\n            </div>\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/edit-district/edit-district.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-district/edit-district.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDistrictComponent", function() { return EditDistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDistrictComponent = /** @class */ (function () {
    function EditDistrictComponent(dataApi, firebaseService, router, route, authService) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    EditDistrictComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getDistrictDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            _this.districtName = _this.restaurant.name;
        });
    };
    EditDistrictComponent.prototype.onDistrictEditSubmit = function () {
        var city = {
            name: this.districtName,
        };
        this.firebaseService.updateDistrict(this.id, city);
        this.router.navigate(['/add-district']);
    };
    EditDistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-district',
            template: __webpack_require__(/*! ./edit-district.component.html */ "./src/app/components/edit-district/edit-district.component.html"),
            styles: [__webpack_require__(/*! ./edit-district.component.css */ "./src/app/components/edit-district/edit-district.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EditDistrictComponent);
    return EditDistrictComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-extra-food/edit-extra-food.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/edit-extra-food/edit-extra-food.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1leHRyYS1mb29kL2VkaXQtZXh0cmEtZm9vZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-extra-food/edit-extra-food.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-extra-food/edit-extra-food.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"order_details.name\" name=\"name\" required>\n            </div>\n            <div class=\"form-group\">\n                <label>Preço</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"order_details.value\" name=\"value\" required>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/produtos/adicional/listar/'+product_id]\">Voltar</button>\n                <button type=\"submit\" value=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/edit-extra-food/edit-extra-food.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-extra-food/edit-extra-food.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditExtraFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExtraFoodComponent", function() { return EditExtraFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditExtraFoodComponent = /** @class */ (function () {
    function EditExtraFoodComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    EditExtraFoodComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.save();
        });
    };
    EditExtraFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.product_id = this.route.snapshot.params['product_id'];
        this.firebaseService.getItemEditExtraDetail(this.id).snapshotChanges().subscribe(function (item) {
            _this.order_details = [];
            var res = item.payload.toJSON();
            res['$key'] = item.key;
            _this.order_details = res;
        });
    };
    EditExtraFoodComponent.prototype.save = function () {
        var _this = this;
        var extraItem = {
            name: this.order_details.name,
            selected: this.order_details.selected,
            value: this.order_details.value,
        };
        this.firebaseService.updateChooseExtraItem(this.id, extraItem).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showSuccess"]('Sucesso!', 'Adicional Salvo');
            _this.loading = false;
            _this.router.navigate(['/produtos/adicional/listar/' + _this.product_id]);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_3__["showError"]('Erro!', 'Falha ao Salvar Adicional');
            _this.loading = false;
        });
    };
    EditExtraFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-extra-food',
            template: __webpack_require__(/*! ./edit-extra-food.component.html */ "./src/app/components/edit-extra-food/edit-extra-food.component.html"),
            styles: [__webpack_require__(/*! ./edit-extra-food.component.css */ "./src/app/components/edit-extra-food/edit-extra-food.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditExtraFoodComponent);
    return EditExtraFoodComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-item/edit-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-item/edit-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1pdGVtL2VkaXQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-item/edit-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-item/edit-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\" *ngIf=\"isAdmin\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <form (submit)=\"showQuestion()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Código</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"product_id\" name=\"product_id\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Categoria</label>\n\n                <select class=\"form-control\" type=\"text\" [(ngModel)]=\"categories\" name=\"categories\" required>\n                                          <option *ngFor=\"let category of categoryList\" [value]=\"category.$key\">{{category.cat_name}}</option>\n        \n                        </select>\n\n            </div>\n\n\n            <div class=\"form-group\">\n                <label>Descrição</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n            </div>\n\n\n            <div class=\"form-group\" *ngIf=\"!this.inputImageUser?.nativeElement.value\" style=\"margin-top: 20px\">\n\n                <img style=\"width:25%\" class=\"thumbnail\" src=\"{{image_firebase_url}}\">\n\n\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"this.inputImageUser?.nativeElement.value\" style=\"margin-top: 20px\">\n\n                <img style=\"width:25%\" class=\"thumbnail\" src=\"{{this.inputImageUser?.nativeElement.value}}\">\n\n\n            </div>\n\n            <hr>\n            <div class=\"form-group\">\n                <h5>Selecionar Imagem:</h5>\n                <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n            </div>\n            <div class=\"progress\">\n                <div [style.visibility]=\"(uploadPercent == 0) ? 'hidden' : 'visible'\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) +'%'\">\n\n                </div>\n            </div>\n            <br>\n            <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n\n            <div class=\"form-group\">\n                <label>Popularidade</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"popularity\" name=\"popularity\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Preço</label>\n                <input class=\"form-control\" type=\"number\" step=\"0.01\" [(ngModel)]=\"price\" name=\"price\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Estoque</label>\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"stock\" name=\"stock\" required>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/produtos/detalhes/'+id]\">Voltar</button>\n                <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n            </div>\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/edit-item/edit-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-item/edit-item.component.ts ***!
  \*************************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(dataApi, firebaseService, router, route, authService, storage, ng2ImgMax) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.storage = storage;
        this.ng2ImgMax = ng2ImgMax;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
        this.itemFolder = 'itemimages';
    }
    EditItemComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onItemEditSubmit();
        });
    };
    EditItemComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        //this.btnClose.nativeElement.click();
    };
    EditItemComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getCategories();
        this.getItemDetails();
    };
    EditItemComponent.prototype.getItemDetails = function () {
        var _this = this;
        this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(function (item) {
            _this.item = [];
            var res = item.payload.toJSON();
            res['$key'] = item.key;
            _this.item = res;
            _this.name = _this.item.name;
            _this.categories = _this.item.categories;
            _this.description = _this.item.description;
            _this.available = _this.item.available;
            _this.product_id = _this.item.product_id;
            _this.popularity = _this.item.popularity;
            _this.price = _this.item.price;
            _this.stock = _this.item.stock;
            _this.image_firebase_url = _this.item.image_firebase_url;
        });
    };
    EditItemComponent.prototype.getCategories = function () {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (categories) {
            _this.categoryList = [];
            categories.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.categoryList.push(a);
            });
        });
    };
    EditItemComponent.prototype.onItemEditSubmit = function () {
        var _this = this;
        if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {
            var item = {
                name: this.name,
                search: this.name.toLowerCase(),
                categories: this.categories,
                description: this.description,
                available: this.available,
                product_id: this.product_id,
                popularity: this.popularity,
                price: this.price,
                stock: this.stock,
                image: this.image_firebase_url,
                image_firebase_url: this.image_firebase_url,
            };
            this.firebaseService.updateItem(this.id, item).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Produto Salvo');
                _this.loading = false;
                _this.router.navigate(['/produtos/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Salvar Produto!');
                _this.loading = false;
            });
        }
        if (this.inputImageUser.nativeElement.value) {
            var item = {
                name: this.name,
                search: this.name.toLowerCase(),
                categories: this.categories,
                description: this.description,
                available: this.available,
                product_id: this.product_id,
                popularity: this.popularity,
                price: this.price,
                stock: this.stock,
                image: this.inputImageUser.nativeElement.value,
                image_firebase_url: this.inputImageUser.nativeElement.value,
            };
            this.firebaseService.updateItemWithImage(this.id, item).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Produto Salvo');
                _this.loading = false;
                _this.router.navigate(['/produtos/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Salvar Produto!');
                _this.loading = false;
            });
        }
    };
    EditItemComponent.prototype.onChange = function ($event) {
        this.image = $event;
    };
    EditItemComponent.prototype.onUpload = function (e) {
        var _this = this;
        var image = e.target.files[0];
        this.ng2ImgMax.resizeImage(image, 300, 300).subscribe(function (result) {
            _this.image = new File([result], result.name);
            var filePath = "/" + _this.itemFolder + "/" + image.name;
            var ref = _this.storage.ref(filePath);
            var task = _this.storage.upload(filePath, _this.image);
            _this.uploadPercent = task.percentageChanges();
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
        }, function (error) {
            console.log('😢 Oh no!', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditItemComponent.prototype, "userUid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUser'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditItemComponent.prototype, "inputImageUser", void 0);
    EditItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__(/*! ./edit-item.component.html */ "./src/app/components/edit-item/edit-item.component.html"),
            styles: [__webpack_require__(/*! ./edit-item.component.css */ "./src/app/components/edit-item/edit-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_8__["Ng2ImgMaxService"]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-order/edit-order.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-order/edit-order.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1vcmRlci9lZGl0LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-order/edit-order.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-order/edit-order.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n        <form (submit)=\"onStatusOrderSubmit()\" ngNativeValidate>\n\n            <ul class=\"list-group\" *ngIf=\"order_details\">\n\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-12\">\n\n                        <div class=\"panel panel-default\">\n                            <!-- Table -->\n                            <table class=\"table\">\n                                <tr>\n\n                                    <td style=\"width:15%;\">\n                                        <b style=\"text-align: center;\">Imagem</b>\n                                    </td>\n                                    <td style=\"width:15%;\">\n                                        <b style=\"text-align: center;\">Nome do Cliente</b>\n                                    </td>\n\n\n\n                                    <td style=\"width:10%;\">\n                                        <b style=\"text-align: center;\">Total</b>\n                                    </td>\n                                    <td style=\"width:10%;\">\n                                        <b style=\"text-align: center;\">Forma de Pagamento</b>\n                                    </td>\n\n                                    <td style=\"width:20%;\">\n                                        <b style=\"text-align: center;\">Status</b>\n                                    </td>\n\n                                    <td style=\"width:10%;\">\n                                        <b style=\"text-align: center;\">Data</b>\n                                    </td>\n\n                                    <td style=\"width:20%;text-align:center;\">\n                                        <b style=\"text-align: center;\">Ação</b>\n                                    </td>\n\n\n                                </tr>\n                            </table>\n\n\n                            <table class=\"table\">\n                                <tr>\n\n                                    <td style=\"width:15%;\">\n                                        <img style=\"width:100px;height:40px;\" class=\"thumbnail\" src=\"{{order_details.items[0].image}}\">\n                                    </td>\n\n\n                                    <td style=\"width:15%;\">\n                                        <p style=\"text-align: left;\">{{order_details.customerDetails.displayName}}</p>\n                                    </td>\n\n\n\n\n                                    <td style=\"width:10%;\">\n                                        <p style=\"text-align: left;\">R$ {{order_details.total}}</p>\n                                    </td>\n\n                                    <td style=\"width:10%;\">\n                                        <p style=\"text-align: left;\">{{order_details.payments.PaymentType}}</p>\n                                    </td>\n\n                                    <td style=\"width:20%;\">\n\n                                        <select class=\"form-control\" type=\"text\" [(ngModel)]=\"order_details.status\" name=\"status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Realizado\">Pendente</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Em Andamento\">Em Andamento</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Saiu para Entrega\">Saiu para Entrega</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Entregue\">Entregue</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Cancelado\">Cancelado pelo Cliente</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <option value=\"Cancelado\">Cancelado pela Loja</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n                                    </td>\n\n                                    <td style=\"width:10%;\">\n                                        <p style=\"text-align: center;\">{{order_details.timeStamp | date:'dd/MM/yyyy HH:mm'}}</p>\n                                    </td>\n\n                                    <td style=\"width:20%;text-align:center;\">\n                                        <button type=\"submit\" value=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n                                    </td>\n\n                                </tr>\n                            </table>\n                        </div>\n\n\n\n\n\n\n\n\n\n\n                    </div>\n                </div>\n\n\n\n\n            </ul>\n        </form>\n\n\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/edit-order/edit-order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-order/edit-order.component.ts ***!
  \***************************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditOrderComponent = /** @class */ (function () {
    function EditOrderComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getOrderDetail(this.id).on('value', function (snapshot) {
            _this.order_details = snapshot.val();
        });
    };
    EditOrderComponent.prototype.onStatusOrderSubmit = function () {
        var order_details = {
            status: this.status,
            checked: ""
        };
        this.firebaseService.updateRestaurantOrderStatus(this.id, order_details);
        this.router.navigate(['/pedidos/detalhes/' + this.id]);
    };
    EditOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(/*! ./edit-order.component.html */ "./src/app/components/edit-order/edit-order.component.html"),
            styles: [__webpack_require__(/*! ./edit-order.component.css */ "./src/app/components/edit-order/edit-order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-restaurant/edit-restaurant.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/edit-restaurant/edit-restaurant.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1yZXN0YXVyYW50L2VkaXQtcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-restaurant/edit-restaurant.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-restaurant/edit-restaurant.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <form name=\"formBook\" #formBook=\"ngForm\" (ngSubmit)=\"showQuestion()\" ngNativeValidate>\n\n        <div class=\"form-group\">\n            <label>Nome</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n        </div>\n\n\n\n        <div class=\"form-group\">\n            <label>Endereço</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n        </div>\n\n\n\n        <div class=\"form-group\">\n            <label>Descrição</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n        </div>\n\n\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <div class=\"form-group\">\n                    <label>Latitude</label>\n                    <input class=\"form-control\" type=\"double\" [(ngModel)]=\"lat\" name=\"lat\" required>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <div class=\"form-group\">\n                    <label>Longitude</label>\n                    <input class=\"form-control\" type=\"double\" [(ngModel)]=\"long\" name=\"long\" required>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <div class=\"form-group\">\n                    <label>Informações Adicionais</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"info\" name=\"info\" required>\n                </div>\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <div class=\"form-group\">\n                    <label>Marca</label>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"mark\" name=\"mark\" required>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Tipo de Produtos</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"outlet\" name=\"outlet\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Telefone</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phonenumber\" placeholder=\"(85) 9 8888-8888\" name=\"phonenumber\" required>\n        </div>\n\n\n        <div class=\"form-group\" *ngIf=\"!this.inputImageUser.nativeElement.value\">\n\n            <img style=\"width:25%\" class=\"thumbnail\" src=\"{{firebase_url}}\">\n\n\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"this.inputImageUser.nativeElement.value\">\n\n            <img style=\"width:25%\" class=\"thumbnail\" src=\"{{this.inputImageUser.nativeElement.value}}\">\n\n\n        </div>\n\n\n        <hr>\n        <div class=\"form-group\">\n            <h5>Selecionar Imagem</h5>\n            <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n        </div>\n        <div class=\"progress\">\n            <div [style.visibility]=\"(percent == 0) ? 'hidden' : 'visible'\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) +'%'\">\n\n            </div>\n        </div>\n        <br>\n        <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n\n\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/lojas/detalhes/'+id]\">Voltar</button>\n            <button type=\"submit\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\">Salvar</button>\n        </div>\n\n\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/components/edit-restaurant/edit-restaurant.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-restaurant/edit-restaurant.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRestaurantComponent", function() { return EditRestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditRestaurantComponent = /** @class */ (function () {
    function EditRestaurantComponent(dataApi, firebaseService, router, route, authService, storage) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.storage = storage;
        this.option = '0';
        this.restaurantFolder = 'restaurantimages';
    }
    EditRestaurantComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onEditRestaurant();
        });
    };
    EditRestaurantComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New 
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
    };
    EditRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getRestaurantDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            _this.title = _this.restaurant.title;
            _this.address = _this.restaurant.address;
            _this.description = _this.restaurant.description;
            _this.info = _this.restaurant.info;
            _this.lat = _this.restaurant.lat;
            _this.long = _this.restaurant.long;
            _this.mark = _this.restaurant.mark;
            _this.option = _this.restaurant.option;
            _this.outlet = _this.restaurant.outlet;
            _this.phonenumber = _this.restaurant.phonenumber;
            _this.firebase_url = _this.restaurant.firebase_url;
        });
    };
    EditRestaurantComponent.prototype.onAddRestaurant = function () {
        var restaurant = {
            address: this.address,
            description: this.description,
            image: this.image,
            info: this.info,
            lat: this.lat,
            long: this.long,
            mark: this.mark,
            option: this.option,
            outlet: this.outlet,
            phonenumber: this.phonenumber,
            title: this.title,
        };
        this.firebaseService.addRestaurant(restaurant);
    };
    EditRestaurantComponent.prototype.onEditRestaurant = function () {
        var _this = this;
        if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {
            var restaurant = {
                address: this.address,
                description: this.description,
                info: this.info,
                lat: this.lat,
                long: this.long,
                mark: this.mark,
                option: this.option,
                outlet: this.outlet,
                phonenumber: this.phonenumber,
                title: this.title,
                image: this.firebase_url,
            };
            this.firebaseService.updateRestaurant(this.id, restaurant).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Loja Salva');
                _this.loading = false;
                _this.router.navigate(['/lojas/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Salvar Loja!');
                _this.loading = false;
            });
        }
        if (this.inputImageUser.nativeElement.value) {
            var restaurant = {
                address: this.address,
                description: this.description,
                info: this.info,
                lat: this.lat,
                long: this.long,
                mark: this.mark,
                option: this.option,
                outlet: this.outlet,
                phonenumber: this.phonenumber,
                title: this.title,
                image: this.inputImageUser.nativeElement.value,
                firebase_url: this.inputImageUser.nativeElement.value,
            };
            this.firebaseService.updateRestaurantWithImage(this.id, restaurant).then(function (res) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Loja Salva');
                _this.loading = false;
                _this.router.navigate(['/lojas/detalhes/' + _this.id]);
            }, function (error) {
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Salvar Loja!');
                _this.loading = false;
            });
        }
    };
    EditRestaurantComponent.prototype.onChange = function ($event) {
        this.image = $event; // <--- File Object for future use.
    };
    EditRestaurantComponent.prototype.onUpload = function (e) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        var file = e.target.files[0];
        var filePath = "/" + this.restaurantFolder + "/" + file.name;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        task.percentageChanges().subscribe(function (percent) {
            _this.percent = percent;
        });
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditRestaurantComponent.prototype, "userUid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUser'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditRestaurantComponent.prototype, "inputImageUser", void 0);
    EditRestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-restaurant',
            template: __webpack_require__(/*! ./edit-restaurant.component.html */ "./src/app/components/edit-restaurant/edit-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./edit-restaurant.component.css */ "./src/app/components/edit-restaurant/edit-restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], EditRestaurantComponent);
    return EditRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-street/edit-street.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-street/edit-street.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zdHJlZXQvZWRpdC1zdHJlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-street/edit-street.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-street/edit-street.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <div class=\"col\">\n\n        <a [routerLink]=\"['/items']\">Back</a>\n        <br />\n        <h2 class=\"page-header\">Edit Street</h2>\n        <form (submit)=\"onStreetEditSubmit()\" ngNativeValidate>\n            <div class=\"form-group\">\n                <label>Street Name</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"streetName\" name=\"streetName\" required>\n            </div>\n            <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        </form>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/edit-street/edit-street.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-street/edit-street.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStreetComponent", function() { return EditStreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditStreetComponent = /** @class */ (function () {
    function EditStreetComponent(dataApi, firebaseService, router, route, authService) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    EditStreetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getStreetDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
            _this.streetName = _this.restaurant.name;
        });
    };
    EditStreetComponent.prototype.onStreetEditSubmit = function () {
        var street = {
            name: this.streetName,
        };
        this.firebaseService.updateStreet(this.id, street);
        this.router.navigate(['/add']);
    };
    EditStreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-street',
            template: __webpack_require__(/*! ./edit-street.component.html */ "./src/app/components/edit-street/edit-street.component.html"),
            styles: [__webpack_require__(/*! ./edit-street.component.css */ "./src/app/components/edit-street/edit-street.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EditStreetComponent);
    return EditStreetComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hero/hero.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-3\">Hello, world!</h1>\n    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and\n      three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n    <p>\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"books\" class=\"mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n        <div class=\"card_book\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <p>\n                <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n              </p>\n              <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n              <p class=\"card-text\">\n                {{book.descripcion }}\n              </p>\n              <div class=\"container-precio-idioma\">\n                <p class=\"badge badge-info\">\n                  {{book.precio}}€\n                </p>\n                <p class=\"badge badge-info\">\n                  {{book.idioma}}\n                </p>\n              </div>\n              <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataApi) {
        this.dataApi = dataApi;
        this.books = [];
        this.book = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/item-details/item-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/item-details/item-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/item-details/item-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/item-details/item-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <div *ngIf=\"item\">\n            <h2 class=\"page header\">{{item.name}} <small>Categoria: {{ item.category }}</small></h2>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img style=\"width:100%\" class=\"thumbnail\" src=\"{{item.image_firebase_url}}\">\n\n                </div>\n\n                <div class=\"col-md-8\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><b>Código:</b> {{item.product_id}}</li>\n                        <li class=\"list-group-item\"><b>Descrição:</b> {{item.description}}</li>\n                        <li class=\"list-group-item\"><b>Preço:</b> R${{formatMoney(item.price)}}</li>\n                        <li class=\"list-group-item\"><b>Estoque:</b> {{item.stock}} un.</li>\n                        <li class=\"list-group-item\"><b>Popularidade:</b> {{item.popularity}}</li>\n\n\n                    </ul>\n\n\n\n                </div>\n\n            </div>\n\n\n            <div class=\"col\" style=\"margin-top: 15px\">\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/produtos/listar']\">Voltar</button>\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" [routerLink]=\"['/produtos/editar/'+item.$key]\" *ngIf=\"isAdmin\">Editar</button>\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" [routerLink]=\"['/produtos/adicional/'+item.$key]\" *ngIf=\"isAdmin\">Adicionar Opção</button>\n                <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-warning\" [routerLink]=\"['/produtos/adicional/listar/'+item.$key]\">Ver Adicionais</button>\n                <button (click)=\"showQuestion()\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"isAdmin\">Deletar</button>\n            </div>\n\n        </div>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/item-details/item-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/item-details/item-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.isAdmin = null;
        this.userUid = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    ItemDetailsComponent.prototype.showQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onItemDelete();
        });
    };
    ItemDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(function (item) {
            _this.item = [];
            var res = item.payload.toJSON();
            res['$key'] = item.key;
            _this.item = res;
        });
    };
    ItemDetailsComponent.prototype.onItemDelete = function () {
        var _this = this;
        this.firebaseService.deleteItem(this.id).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Produto Removido');
            _this.loading = false;
            _this.router.navigate(['/produtos/listar']);
        }, function (error) {
            _this.loading = false;
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Remover Produto!');
        });
    };
    ItemDetailsComponent.prototype.formatMoney = function (n) {
        if (n) {
            var num = parseFloat(n);
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    ItemDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! ./item-details.component.html */ "./src/app/components/item-details/item-details.component.html"),
            styles: [__webpack_require__(/*! ./item-details.component.css */ "./src/app/components/item-details/item-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-line {\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    display: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1saW5lIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/items/items.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/items/items.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table style=\"width: 100%\">\n                            <tr>\n                                <td>\n                                    <input type='text' style='padding:4px;margin:5px auto;' placeholder='Filtrar pelo Código' (keyup)='updateFilter($event)' />\n                                </td>\n                                <td style=\"text-align:right;\">\n                                    <a [routerLink]=\"['/produtos/adicionar']\" style=\"margin-top:15px\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary \" *ngIf=\"isAdmin \">Adicionar Novo Produto</a>\n                                </td>\n                            </tr>\n                        </table>\n                        <ngx-datatable #table class=\"bootstrap\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50 \" [rowHeight]=\" 'auto' \" [limit]=\"10 \" [rows]='items' [sorts]=\"[{prop: 'name', dir: 'asc'},{prop: 'available', dir:\n                                    'asc'},{prop: 'description', dir: 'asc'},{prop: 'price', dir: 'asc'},{prop: 'stock', dir: 'asc'}] \">\n                            <ngx-datatable-column prop=\"image_firebase_url\">\n\n                                <ng-template let-column=\"Imagem\" ngx-datatable-header-template>\n                                    <small><b>IMAGEM</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n\n                                    <img style=\"width:100px;height:100px;\" class=\"thumbnail\" src=\"{{value}} \">\n                                </ng-template>\n\n                            </ngx-datatable-column>\n\n\n                            <ngx-datatable-column prop=\"product_id\">\n                                <ng-template let-column=\"product_id\" ngx-datatable-header-template>\n                                    <small><b>CÓDIGO</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"name\">\n                                <ng-template let-column=\"name\" ngx-datatable-header-template>\n                                    <small><b>NOME</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"description\">\n                                <ng-template let-column=\"description\" ngx-datatable-header-template>\n                                    <small><b>DESCRIÇÃO</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{(value.length>75)? (value | slice:0:75)+'..':(value)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"price\">\n                                <ng-template let-column=\"price\" ngx-datatable-header-template>\n                                    <small><b>PREÇO</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    R${{formatMoney(value)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"stock\">\n                                <ng-template let-column=\"stock\" ngx-datatable-header-template>\n                                    <small><b>ESTOQUE</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{value}} un.\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    <small><b>AÇÕES</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    <button href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary \" routerLink=\"/produtos/detalhes/{{value}}\">Visualizar</button>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n\n                        </ngx-datatable>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(firebaseService, authService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.isAdmin = null;
        this.userUid = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
        this.firebaseService.getItems().snapshotChanges().subscribe(function (items) {
            _this.items = [];
            _this.temp = [];
            items.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.items.push(a);
                _this.temp.push(a);
            });
        });
    }
    ItemsComponent.prototype.ngOnInit = function () { };
    ItemsComponent.prototype.onRestaurantDelete = function (id) {
        this.firebaseService.deleteRestaurant(id);
        this.router.navigate(['/restaurants']);
    };
    ItemsComponent.prototype.goToRestaurantDetails = function (restaurant) {
        this.router.navigate(['/restaurants']);
    };
    ItemsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (d) {
            return d.product_id.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.items = temp;
        this.table.offset = 0;
    };
    ItemsComponent.prototype.formatMoney = function (n) {
        if (n) {
            var num = parseFloat(n);
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], ItemsComponent.prototype, "table", void 0);
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/components/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/content/content-layout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/layouts/content/content-layout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/layouts/content/content-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/layouts/content/content-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9jb250ZW50L2NvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layouts/content/content-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/layouts/content/content-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! ./content-layout.component.html */ "./src/app/components/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/components/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/full/full-layout.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/layouts/full/full-layout.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <app-navbar></app-navbar>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <div class=\"content-wrapper\">\r\n                <div class=\"container-fluid\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n    <app-notification-sidebar></app-notification-sidebar>\r\n    <app-customizer></app-customizer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/layouts/full/full-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/layouts/full/full-layout.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9mdWxsL2Z1bGwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layouts/full/full-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/layouts/full/full-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        //customizer events
        this.elementRef.nativeElement.querySelector('#cz-compact-menu')
            .addEventListener('click', this.onClick.bind(this));
        this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
            .addEventListener('click', this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/components/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/components/layouts/full/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalBook\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"false\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                    {{ !this.dataApi.selectedBook.id ? 'Nova Loja' : 'Atualizar Loja'}}\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"formBook\" #formBook=\"ngForm\" (ngSubmit)=\"onAddRestaurant()\" ngNativeValidate>\n\n\n                    <div class=\"form-group\">\n                        <label>Nome</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" name=\"title\" required>\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                        <label>Endereço</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                        <label>Descrição</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" required>\n                    </div>\n\n\n\n\n\n\n\n\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Latitude</label>\n                                <input class=\"form-control\" type=\"double\" [(ngModel)]=\"lat\" name=\"lat\" required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Longitude</label>\n                                <input class=\"form-control\" type=\"double\" [(ngModel)]=\"long\" name=\"long\" required>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Informações Adicionais</label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"info\" name=\"info\" required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Marca</label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"mark\" name=\"mark\" required>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <label>Tipos de Produtos</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"outlet\" name=\"outlet\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Telefone</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phonenumber\" placeholder=\"(85) 9 8888-8888\" name=\"phonenumber\" required>\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                        <input id=\"image\" name=\"image\" [(ngModel)]=\"image\" type=\"file\">\n                    </div>\n                    <!--\n\t\t\t\t  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n\t\t\t\t  -->\n\n                    <div class=\"modal-footer\">\n                        <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" #btnClose data-dismiss=\"modal\">Fechar</button>\n                        <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" type=\"submit\">Salvar</button>\n                    </div>\n\n                </form>\n\n                <!--\n        <form name=\"formBook\" #formBook=\"ngForm\" (ngSubmit)=\"onSaveBook(formBook)\">\n          <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.dataApi.selectedBook.id\">\n          <input type=\"hidden\" name=\"userUid\" [value]=\"userUid\">\n          <div class=\"form-group\">\n            <label for=\"titulo\" class=\"col-form-label\">Title:</label>\n            <input type=\"text\" class=\"form-control\" name=\"titulo\" [(ngModel)]=\"this.dataApi.selectedBook.titulo\">\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"idioma\">Language</label>\n              <select name=\"idioma\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.idioma\">\n                <option value=\"Inglés\">Inglés</option>\n                <option value=\"Castellano\">Castellano</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"precio\">Price</label>\n              <input type=\"text\" name=\"precio\" class=\"form-control\" placeholder=\"0,00€\" [(ngModel)]=\"this.dataApi.selectedBook.precio\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"autor\">Author</label>\n              <input type=\"text\" name=\"autor\" class=\"form-control\" placeholder=\"Autor\" [(ngModel)]=\"this.dataApi.selectedBook.autor\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"oferta\">Offer</label>\n              <select name=\"oferta\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.oferta\">\n                <option value=\"1\">Sí</option>\n                <option value=\"0\">No</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"portada\">Portada</label>\n              <input type=\"text\" name=\"portada\" class=\"form-control\" placeholder=\"Portada\" [(ngModel)]=\"this.dataApi.selectedBook.portada\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"link_amazon\">Link Amazon</label>\n              <input type=\"text\" name=\"link_amazon\" class=\"form-control\" placeholder=\"Link amazon\" [(ngModel)]=\"this.dataApi.selectedBook.link_amazon\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descripcion\" class=\"col-form-label\">Descripcion:</label>\n            <textarea class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"this.dataApi.selectedBook.descripcion\"></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" #btnClose data-dismiss=\"modal\">Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Save Book</button>\n          </div>\n        </form>\n\t\t\n\t\t\n\t\t--->\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(dataApi, firebaseService, router) {
        this.dataApi = dataApi;
        this.firebaseService = firebaseService;
        this.router = router;
        this.option = '0';
    }
    ModalComponent.prototype.onSaveBook = function (bookForm) {
        if (bookForm.value.id == null) {
            // New
            bookForm.value.userUid = this.userUid;
            this.dataApi.addBook(bookForm.value);
        }
        else {
            // Update
            this.dataApi.updateBook(bookForm.value);
        }
        bookForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onAddRestaurant = function () {
        var restaurant = {
            address: this.address,
            description: this.description,
            image: this.image,
            info: this.info,
            lat: this.lat,
            long: this.long,
            mark: this.mark,
            option: this.option,
            outlet: this.outlet,
            phonenumber: this.phonenumber,
            title: this.title,
            user_id: 'superadmin'
        };
        this.firebaseService.addRestaurant(restaurant);
        this.btnClose.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "btnClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "userUid", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Multi Restaurant System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n    \n    <ul class=\"navbar-nav ml-auto\">\n \n\t   <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/restaurants\">Restaurants</a>\n      </li>\n\t  \n\t   <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/add-new-restaurant\">Add Restaurant</a>\n      </li>\n\t  \n\t   <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/categories\">Categories</a>\n      </li>\n\t  \n\t  <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/add-category\">Add Category</a>\n      </li>\n\t  \n\t   <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/items\">Items</a>\n      </li>\n\t  \n\t   <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/add-item\">Add Item</a>\n      </li>\n\t  \n\t \n\t \n\t  \n\t  <li class=\"dropdown\" *ngIf=\"isLogged\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" id=\"themes\">Manage Address<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" aria-labelledby=\"themes\">\n\t\t\t\t<li ><a routerLink=\"/city-configuration\" style =\"padding-left:20px;\">Cities</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-new-city\" style =\"padding-left:20px;\">Add New City</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-district\" style =\"padding-left:20px;\">Districts</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-new-district\" style =\"padding-left:20px;\">Add New District</a></li>\n\t\t\t\t<li ><a routerLink=\"/add\" style =\"padding-left:20px;\">Streets</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-new-street\" style =\"padding-left:20px;\">Add New Street</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-building\" style =\"padding-left:20px;\">Buildings</a></li>\n\t\t\t\t<li ><a routerLink=\"/add-new-building\" style =\"padding-left:20px;\">Add New Building</a></li>\n\t\t\t\t\n              </ul>\n            </li>\n\t\t\t\n\t\t\t<li class=\"dropdown\" *ngIf=\"isLogged\">\n              <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" id=\"themes\">Settings<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" aria-labelledby=\"themes\">\n\t\t\t\t<li>  <a routerLink=\"/add-paypal\" style =\"padding-left:5px;\">Paypal Configuration</a> </li>\n\t\t\t\t<li>\t\t\t\t\n\t\t\t\t<a routerLink=\"/add-stripe\" style =\"padding-left:5px;\">Stripe Configuration</a>\n\t\t\t\t</li>\n              </ul>\n            </li>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/orders\">Orders</a>\n      </li>\n\t\t\t\n\t\t\t\n\t  \n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/login\">Login\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, afsAuth) {
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.app_name = 'vava-pentecoste-system';
        this.isLogged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.afsAuth.auth.signOut();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/offers/offers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/offers/offers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/offers/offers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/offers/offers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offers/offers.component.ts ***!
  \*******************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffersComponent = /** @class */ (function () {
    function OffersComponent(dataApi) {
        this.dataApi = dataApi;
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/components/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/components/offers/offers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_1__["DataApiService"]])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/components/order-details/order-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/order-details/order-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mb-3\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"col\">\n        <div *ngIf=\"order_details\">\n            <h4 class=\"page header\">DETALHES DO PEDIDO <small>{{order_details.timeStamp | date:'dd/MM/yyyy HH:mm'}}</small></h4>\n            <div class=\"row\">\n                <table class=\"table\">\n                    <tr>\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Imagem</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Nome do Produto</b>\n                        </td>\n\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Preço</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Quantidade</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Sub-Total</b>\n                        </td>\n                    </tr>\n                </table>\n\n                <div *ngFor=\"let item of order_details.items\" style=\"width: 100%;\">\n                    <table class=\"table\">\n                        <tr>\n\n                            <td style=\"width:20%;\">\n                                <img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"{{item.image}}\">\n                            </td>\n\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">{{item.name}}</p>\n                            </td>\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">R${{formatMoney(item.price)}}</p>\n                            </td>\n\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">{{item.quantity}} un.</p>\n                            </td>\n\n\n                            <td style=\"width:20%;\">\n                                <p style=\"text-align: left;\">R${{formatMoney(item.price*item.quantity)}}</p>\n                            </td>\n\n                        </tr>\n                    </table>\n\n\n                    <div *ngFor=\"let extra of item.extra\">\n                        <table class=\"table\" *ngIf=\"extra.quantity != 0\">\n                            <tr>\n                                <td style=\"width:20%;\">\n                                    <b style=\"text-align: center;\"></b>\n                                </td>\n\n                                <td style=\"width:20%;\">\n                                    <b style=\"text-align: center;\">Nome do Opcional</b>\n                                </td>\n\n                                <td style=\"width:20%;\">\n                                    <b style=\"text-align: center;\">Preço do Opcional</b>\n                                </td>\n\n                                <td style=\"width:20%;\">\n                                    <b style=\"text-align: center;\">Quantidade</b>\n                                </td>\n\n                                <td style=\"width:20%;\">\n                                    <b style=\"text-align: center;\">Sub-Total</b>\n                                </td>\n\n                            </tr>\n                        </table>\n\n                        <table class=\"table\" *ngIf=\"extra.quantity != 0\">\n                            <tr>\n                                <td style=\"width:20%;\">\n                                </td>\n                                <td style=\"width:20%;\">\n                                    <h4 style=\"text-align: left;\">\n                                        <strong>{{extra.name}}</strong></h4>\n                                    <img style=\"width:100px;height:60px;\" class=\"thumbnail\" src=\"https://firebasestorage.googleapis.com/v0/b/onesignalexample-f359b.appspot.com/o/extra.png?alt=media&token=d20d367f-7c61-477e-a55a-d2b39e93ec02\">\n                                </td>\n\n                                <td style=\"width:20%;\">\n                                    <p style=\"text-align: left;\">R${{formatMoney(extra.value)}}</p>\n                                </td>\n\n\n                                <td style=\"width:20%;\">\n                                    <p style=\"text-align: left;\">{{extra.quantity}} un.</p>\n                                </td>\n\n\n                                <td style=\"width:20%;\">\n                                    <p style=\"text-align: left;\">R${{formatMoney(extra.value*extra.quantity)}}</p>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <h4 class=\"page header\">DETALHES DO CLIENTE</h4>\n                <table class=\"table\">\n                    <tr>\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Nome</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Email</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Endereço</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Telefone</b>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <b style=\"text-align: center;\">Data</b>\n                        </td>\n                    </tr>\n\n                </table>\n\n\n                <table class=\"table\">\n                    <tr>\n                        <td style=\"width:20%;\">\n                            <p style=\"text-align: left;\">{{order_details.customerDetails.displayName}}</p>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <p style=\"text-align: left;\">{{order_details.customerDetails.email}}</p>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <p style=\"text-align: left;\">{{order_details.addresses.street + ', ' + order_details.addresses.number}}</p>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <p style=\"text-align: left;\">{{order_details.addresses.phone}}</p>\n                        </td>\n\n                        <td style=\"width:20%;\">\n                            <p style=\"text-align: left;\">{{order_details.timeStamp | date:'dd/MM/yyyy HH:mm'}}</p>\n                        </td>\n\n                    </tr>\n                </table>\n                <table style=\"text-align:right;float:right;width:100%;\">\n                    <tr>\n                        <td>\n                            <button href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"order_details.status !== 'Finalizado' && order_details.status !== 'Cancelado Pela Loja'\" (click)=\"showCancelOrderQuestion()\">Cancelar Pedido</button>\n                        </td>\n                        <td>\n                            <button href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" *ngIf=\"order_details.status !== 'Finalizado' && order_details.status !== 'Cancelado Pela Loja'\" (click)=\"showQuestion()\">{{button_text}}</button>\n                        </td>\n                        <td style=\"width:40%;\">\n                            <h4 style=\"text-align: right; \">Forma de Pagamento: <b>{{paymentType}}</b></h4>\n                            <h4 style=\"text-align: right;\" *ngIf=\"order_details.payments.PaymentType === 'cash'\"><b>Levar Troco para: R${{formatMoney(+order_details.payments.PaymentChange)}}</b></h4>\n                            <h4 style=\"text-align: right; color: red\" *ngIf=\"order_details.payments.PaymentType === 'cash' || order_details.payments.PaymentType === 'debit'\"><b>Desconto: R${{formatMoney(-(order_details.total - order_details.addresses.fare - itensPrice))}}</b></h4>\n                            <h4 style=\"text-align: right; color: green\"><b>Frete: R${{formatMoney(order_details.addresses.fare)}}</b></h4>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td style=\"width:40%;\">\n                            <h4 style=\"text-align: right; color: blue\">Total: <b>R$ {{formatMoney(order_details.total)}}</b></h4>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/order-details/order-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.paymentType = '';
        this.itensPrice = 0;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getOrderDetail(this.id).on('value', function (snapshot) {
            _this.order_details = snapshot.val();
            if (_this.previousStatus === undefined) {
                _this.order_details.items.forEach(function (item) {
                    _this.itensPrice += item.price * item.quantity;
                });
            }
            switch (_this.order_details.payments.PaymentType) {
                case 'credit':
                    _this.paymentType = 'Cartão de Crédito';
                    break;
                case 'debit':
                    _this.paymentType = 'Cartão de Débito';
                    break;
                case 'cash':
                    _this.paymentType = 'À Vista';
                    break;
            }
            _this.previousStatus = _this.order_details.status;
            if (_this.order_details.status === 'Pendente') {
                _this.onStatusOrderSubmit('Em Andamento');
            }
            switch (_this.order_details.status) {
                case 'Em Andamento':
                    _this.button_text = 'Liberar Entrega';
                    break;
                case 'Saiu para Entrega':
                    _this.button_text = 'Finalizar';
                    break;
                case 'Finalizado':
                    break;
            }
        });
    };
    OrderDetailsComponent.prototype.showQuestion = function () {
        var _this = this;
        switch (this.order_details.status) {
            case 'Em Andamento':
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'O Pedido saiu para Entrega?').then(function (res) {
                    if (res.dismiss) {
                        return;
                    }
                    _this.onStatusOrderSubmit('Saiu para Entrega');
                });
                break;
            case 'Saiu para Entrega':
                _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'O Pedido foi Recebido pelo Cliente?').then(function (res) {
                    if (res.dismiss) {
                        return;
                    }
                    _this.onStatusOrderSubmit('Finalizado');
                });
                break;
        }
    };
    OrderDetailsComponent.prototype.showCancelOrderQuestion = function () {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Cancelar o Pedido?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.onStatusOrderSubmit('Cancelado Pela Loja');
        });
    };
    OrderDetailsComponent.prototype.onStatusOrderSubmit = function (status) {
        var _this = this;
        this.loading = true;
        var order_details = {
            status: status,
            checked: ''
        };
        this.firebaseService.updateRestaurantOrderStatus(this.id, order_details).then(function (res) {
            _this.loading = false;
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Status do Pedido Alterado');
        }, function (error) {
            _this.loading = false;
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Alterar Status do Pedido');
        });
    };
    OrderDetailsComponent.prototype.formatMoney = function (n) {
        if (n) {
            var num = parseFloat(n);
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/components/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/components/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/orders/orders.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Filtrar por Cliente' (keyup)='updateFilter($event,\"name\")' />\n                            <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Filtrar por Status' (keyup)='updateFilter($event,\"status\")' />\n                        </div>\n                        <ngx-datatable #table class='bootstrap' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='orders' [sorts]=\"[{prop: 'timeStamp', dir: 'desc'}]\">\n\n                            <ngx-datatable-column prop=\"customerDetails.displayName\" name=\"customerDetails.displayName\">\n                                <ng-template let-column=\"customerDetails.displayName\" ngx-datatable-header-template>\n                                    <small><b>CLIENTE</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"addresses.phone\">\n                                <ng-template let-column=\"addresses.phone\" ngx-datatable-header-template>\n                                    <small><b>TELEFONE</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"total\" name=\"total\">\n                                <ng-template let-column=\"total\" ngx-datatable-header-template>\n                                    <small><b>TOTAL</b></small>\n                                </ng-template>\n\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                    R${{formatMoney(row.total)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"status\" name=\"status\">\n                                <ng-template let-column=\"status\" ngx-datatable-header-template>\n                                    <small><b>STATUS</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{value}} <span style=\"color: red\" *ngIf=\"value === 'Pendente'\">Novo</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"timeStamp\" name=\"timeStamp\" [comparator]=\"customComparator\">\n                                <ng-template let-column=\"timeStamp\" ngx-datatable-header-template>\n                                    <small><b>DATA</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{value | date:'dd/MM/yyyy HH:mm'}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    <small><b>AÇÕES</b></small>\n                                </ng-template>\n\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                    <button href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" (click)=\"showQuestion(row)\">{{row.status === 'Pendente'? 'Receber':'Visualizar'}}</button>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n\n                        </ngx-datatable>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->\n<app-modal [userUid]=\"userUid\"></app-modal>"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(firebaseService, authService, router) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.loading = false;
    }
    OrdersComponent.prototype.showQuestion = function (row) {
        var _this = this;
        if (row.status === 'Pendente') {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_5__["showQuestion"]('', 'Deseja Receber o Pedido?').then(function (res) {
                if (res.dismiss) {
                    return;
                }
                _this.router.navigate(['pedidos/detalhes/' + row.$key]);
            });
        }
        else {
            this.router.navigate(['pedidos/detalhes/' + row.$key]);
        }
    };
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getOrders().snapshotChanges().subscribe(function (orders) {
            _this.orders = [];
            _this.temp = [];
            orders.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.orders.push(a);
                _this.temp.push(a);
            });
        });
    };
    OrdersComponent.prototype.updateFilter = function (event, prop) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (d) {
            if (prop === 'name')
                return d.customerDetails.displayName.toLowerCase().indexOf(val) !== -1 || !val;
            if (prop === 'status')
                return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.orders = temp;
        this.table.offset = 0;
    };
    OrdersComponent.prototype.customComparator = function (propA, propB) {
        if (propA < propB) {
            return -1;
        }
        if (propA > propB) {
            return 1;
        }
    };
    OrdersComponent.prototype.formatMoney = function (n) {
        if (n) {
            var num = parseFloat(n);
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], OrdersComponent.prototype, "table", void 0);
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/page404/page404.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/page404/page404.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page404/page404.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/components/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/restaurant-details/restaurant-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/restaurant-details/restaurant-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC1kZXRhaWxzL3Jlc3RhdXJhbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/restaurant-details/restaurant-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant-details/restaurant-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n\n    <div class=\"col\">\n        <div *ngIf=\"restaurant\">\n            <h2 class=\"page header\">{{restaurant.title}} <small> {{ restaurant.info }}</small></h2>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img style=\"width:100%\" class=\"thumbnail\" src=\"{{restaurant.firebase_url}}\">\n\n                </div>\n\n                <div class=\"col-md-8\">\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\"><b>Descrição:</b> {{restaurant.description}}</li>\n                        <li class=\"list-group-item\"><b>Endereço:</b> {{restaurant.address}}</li>\n                        <li class=\"list-group-item\"><b>Telefone:</b> {{restaurant.phonenumber}}</li>\n                        <li class=\"list-group-item\"><b>Informações Adicionais:</b> {{restaurant.info}}</li>\n                        <li class=\"list-group-item\"><b>Marca:</b> {{restaurant.mark}}</li>\n                        <li class=\"list-group-item\"><b>Tipo de Produtos:</b> {{restaurant.outlet}}</li>\n                        <li class=\"list-group-item\"><b>Latitude:</b> {{restaurant.lat}} <b>Longitude:</b> {{restaurant.long}}</li>\n                    </ul>\n                </div>\n\n                <!--\n\t\t<a class = \"btn btn-default\" [routerLink] = \"['/edit-restaurant/'+restaurant.$key]\">Edit</a>\n\t\t-->\n                <div class=\"col\" style=\"margin-top: 15px\">\n                    <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/lojas/listar']\">Voltar</button>\n                    <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" [routerLink]=\"['/lojas/editar/'+restaurant.$key]\" *ngIf=\"isAdmin\">Editar</button>\n                    <button (click)=\"showQuestion(id)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"isSuperAdmin\">Deletar</button>\n                </div>\n\n            </div>\n\n            <h3>Categorias</h3>\n            <ul class=\"list-group\">\n\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-3\" *ngFor=\"let category of categories\">\n\n                        <a [routerLink]=\"['/categorias/detalhes/'+category.$key]\" style=\"text-align: center;\">\n                            <h4>{{category.cat_name}}</h4>\n                        </a>\n\n                        <img style=\"width:100%\" class=\"thumbnail\" src=\"{{category.firebase_url}}\">\n\n                    </div>\n\n                </div>\n\n            </ul>\n\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/restaurant-details/restaurant-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/restaurant-details/restaurant-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RestaurantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailsComponent", function() { return RestaurantDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestaurantDetailsComponent = /** @class */ (function () {
    function RestaurantDetailsComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.isAdmin = null;
        this.isSuperAdmin = null;
        this.userUid = null;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin';
        this.isSuperAdmin = localStorage.getItem('current_user_role') === 'super_admin';
    }
    RestaurantDetailsComponent.prototype.showQuestion = function (id) {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onRestaurantDelete(id);
        });
    };
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getRestaurantCategories(this.id).snapshotChanges().subscribe(function (categories) {
            _this.categories = [];
            categories.forEach(function (item) {
                var cat = item.payload.toJSON();
                cat['$key'] = item.key;
                _this.categories.push(cat);
            });
        });
        this.firebaseService.getRestaurantDetails(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.restaurant = [];
            var res = restaurant.payload.toJSON();
            res['$key'] = restaurant.key;
            _this.restaurant = res;
        });
    };
    RestaurantDetailsComponent.prototype.onRestaurantDelete = function (id) {
        var _this = this;
        this.firebaseService.deleteRestaurant(id).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Loja Deletada');
            _this.loading = false;
            _this.router.navigate(['/lojas/listar']);
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Deletar Loja!');
            _this.loading = false;
        });
    };
    RestaurantDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant-details',
            template: __webpack_require__(/*! ./restaurant-details.component.html */ "./src/app/components/restaurant-details/restaurant-details.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-details.component.css */ "./src/app/components/restaurant-details/restaurant-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RestaurantDetailsComponent);
    return RestaurantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurants/restaurants.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/restaurants/restaurants.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/restaurants/restaurants.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/restaurants/restaurants.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <ngx-datatable #table class='bootstrap' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='stores'>\n                            <ngx-datatable-column prop=\"firebase_url\">\n\n                                <ng-template let-column=\"Imagem\" ngx-datatable-header-template>\n                                    <small><b>IMAGEM</b></small>\n                                </ng-template>\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n\n                                    <img style=\"width:100px;height:100px;\" class=\"thumbnail\" src=\"{{value}}\">\n                                </ng-template>\n\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"title\">\n                                <ng-template let-column=\"title\" ngx-datatable-header-template>\n                                    <small><b>NOME</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"address\">\n                                <ng-template let-column=\"address\" ngx-datatable-header-template>\n                                    <small><b>ENDEREÇO</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"phonenumber\">\n                                <ng-template let-column=\"phonenumber\" ngx-datatable-header-template>\n                                    <small><b>TELEFONE</b></small>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"info\">\n                                <ng-template let-column=\"info\" ngx-datatable-header-template>\n                                    <small><b>SOBRE</b></small>\n                                </ng-template>\n\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{(value.length>60)? (value | slice:0:60)+'..':(value)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"outlet\">\n                                <ng-template let-column=\"outlet\" ngx-datatable-header-template>\n                                    <small><b>TIPO DE LOJA</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    {{(value.length>60)? (value | slice:0:60)+'..':(value)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    <small><b>AÇÕES</b></small>\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    <button href=\"javascript:void(0)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" routerLink=\"/lojas/detalhes/{{value}}\">Visualizar</button>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n\n                        </ngx-datatable>\n\n                        <!--                         <div align=\"right\" style=\"margin-top:15px;\">\n                            <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" data-toggle=\"modal\" data-target=\"#modalBook\">Adicionar Nova Loja</button>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->\n<app-modal [userUid]=\"userUid\"></app-modal>"

/***/ }),

/***/ "./src/app/components/restaurants/restaurants.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/restaurants/restaurants.component.ts ***!
  \*****************************************************************/
/*! exports provided: RestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsComponent", function() { return RestaurantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(firebaseService, authService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.rows = [];
        this.isAdmin = null;
        this.userUid = null;
        this.firebaseService.getRestaurants().snapshotChanges().subscribe(function (stores) {
            _this.stores = [];
            stores.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.stores.push(a);
            });
        });
    }
    RestaurantsComponent.prototype.ngOnInit = function () { };
    RestaurantsComponent.prototype.onRestaurantDelete = function (id) {
        this.firebaseService.deleteRestaurant(id);
        this.router.navigate(['/restaurants']);
    };
    RestaurantsComponent.prototype.goToRestaurantDetails = function (store) {
        this.router.navigate(['/restaurants']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], RestaurantsComponent.prototype, "table", void 0);
    RestaurantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurants',
            template: __webpack_require__(/*! ./restaurants.component.html */ "./src/app/components/restaurants/restaurants.component.html"),
            styles: [__webpack_require__(/*! ./restaurants.component.css */ "./src/app/components/restaurants/restaurants.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/customizer/customizer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/customizer/customizer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\r\n<div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block open\">\r\n    <a class=\"customizer-close\">\r\n        <i class=\"ft-x font-medium-3\"></i>\r\n    </a>\r\n    <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\">\r\n        <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\r\n    </a>\r\n    <div class=\"customizer-content p-3 ps-container ps-theme-dark\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\r\n        <h4 class=\"mb-0 text-bold-400\">Gerador de Temas</h4>\r\n        <p>Escolha o tema e veja em tempo real</p>\r\n        <hr>\r\n\r\n        <!--Sidebar Background Image Starts-->\r\n        <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Imagem de Fundo - Menu Lateral</h6>\r\n        <div class=\"cz-bg-image row\">\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/01.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/02.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/03.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/04.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/05.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/06.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/07.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n                <img src=\"assets/img/sidebar-bg/08.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\r\n            </div>\r\n        </div>\r\n        <!--Sidebar Background Image Ends-->\r\n\r\n        <!--Sidebar BG Image Toggle Starts-->\r\n        <div class=\"togglebutton mt-2\">\r\n            <div>\r\n                <span class=\"text-bold-400\">Mostrar / Esconder Imagem - Menu Lateral</span>\r\n                <div class=\"float-right\">\r\n                    <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"sidebar-bg-img\" switchColor=\"#FF4961\" color=\"white\" (change)=\"onChange($event)\"></ui-switch>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Sidebar BG Image Toggle Ends-->\r\n\r\n        <hr>\r\n\r\n        <!--Sidebar Options Starts-->\r\n        <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Opções de Cor - Menu lateral</h6>\r\n        <div class=\"cz-bg-color\">\r\n            <div class=\"row p-1\">\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"gradient-aqua-marine d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"aqua-marine\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"gradient-sublime-vivid d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"sublime-vivid\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"gradient-crystal-clear d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"crystal-clear\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"gradient-timber d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"timber\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row p-1\">\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"bg-black d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"black\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"bg-white d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"white\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"bg-primary d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"primary\"></span>\r\n                </div>\r\n                <div class=\"col mb-3\">\r\n                    <span class=\"bg-danger d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"danger\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Sidebar Options Ends-->\r\n        <hr>\r\n\r\n\r\n        <!--Compact Menu Starts-->\r\n        <div class=\"togglebutton\">\r\n            <div>\r\n                <span class=\"text-bold-400\">Menu Compacto</span>\r\n                <div class=\"float-right\">\r\n                    <ui-switch size=\"small\" class=\"cz-compact-menu\" id=\"cz-compact-menu\" switchColor=\"#FF4961\" color=\"white\"></ui-switch>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Compact Menu Ends-->\r\n        <hr>\r\n\r\n        <!--Sidebar Width Starts-->\r\n        <div>\r\n            <label for=\"cz-sidebar-width\" class=\"text-bold-400\">Largura - Menu Lateral</label>\r\n            <select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\r\n\t\t\t\t<option value=\"small\">Pequeno</option>\r\n\t\t\t\t<option value=\"medium\">Médio</option>\r\n\t\t\t\t<option value=\"large\" selected>Grande</option>\r\n\t\t\t</select>\r\n        </div>\r\n        <!--Sidebar Width Ends-->\r\n    </div>\r\n</div>\r\n<!--Theme customizer Ends-->"

/***/ }),

/***/ "./src/app/components/shared/customizer/customizer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/customizer/customizer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 46px;\n    cursor: pointer;\n    border-radius: 15px 0 0 15px; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color span.rounded {\n      border-radius: 1rem !important;\n      border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-color span.rounded.selected {\n        border: 3px solid #314fe5; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY3VzdG9taXplci9DOlxcVXNlcnNcXGx1bmlkXFxEZXNrdG9wXFxwcm9qZXRvXFxTSVNURU1BIC0gVkFWQVxcdmF2YS1wZW50ZWNvc3RlLXN5c3RlbS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxjdXN0b21pemVyXFxjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNULGNBQWE7RUFDaEIsV0FBVTtFQUNQLHVCQUFzQjtFQUN6QixjQUFhO0VBQ1YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sVUFBUztFQUNULGNBQWE7RUFDYiwyREFBMEQ7RUFDMUQsb0NBQTJCO1VBQTNCLDRCQUEyQjtFQUMzQiwyQ0FBMEM7RUFDMUMsdUNBQXNDLEVBNkV6QztFQTFGRDtJQWdCRSxTQUFRLEVBQ1I7RUFqQkY7SUFvQkUsbUJBQWtCO0lBQ2YsYUFBWSxFQUNmO0VBdEJGO0lBeUJFLGlCQUFnQjtJQUNoQiw4QkFBNEI7SUFDNUIsZUFBYztJQUNYLDRDQUEyQyxFQUM5QztFQTdCRjtJQStCSyxZQUFXLEVBQ2Q7RUFoQ0Y7SUFrQ0UsbUJBQWtCO0lBQ2YsWUFBVztJQUNYLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLFlBQVcsRUFDZDtFQXhDRjtJQTBDRSxtQkFBa0I7SUFDZixTQUFRO0lBQ1IsWUFBVztJQUNYLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLDZCQUE0QixFQUMvQjtFQW5ERjtJQXNERyxpQkFBZSxFQUNmO0VBdkRIO0lBMkRLLGVBQWMsRUFnQmpCO0VBM0VGO01BOERJLGdCQUFlLEVBQ2Y7RUEvREo7TUFpRUksdUJBQXNCLEVBQ3RCO0VBbEVKO01Bb0VJLCtCQUE4QjtNQUM5QiwwQkFBeUIsRUFJekI7RUF6RUo7UUF1RUssMEJBQXlCLEVBQ3pCO0VBeEVMO0lBK0VHLGdCQUFlLEVBQ2Y7RUFoRkg7SUFrRkcsK0JBQThCO0lBQzlCLDBCQUF5QixFQUl6QjtFQXZGSDtNQXFGSSwwQkFBeUIsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taXplcntcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICByaWdodDogLTQwMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdHotaW5kZXg6IDEwNTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHQmLm9wZW57XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b21pemVyLWNvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdGEuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLmN1c3RvbWl6ZXItY2xvc2Uge1xyXG4gICAgXHRjb2xvcjogIzAwMDtcclxuXHR9XHJcblx0LmN1c3RvbWl6ZXItY2xvc2V7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAxMHB4O1xyXG5cdCAgICB0b3A6IDEwcHg7XHJcblx0ICAgIHBhZGRpbmc6IDdweDtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0ICAgIHotaW5kZXg6IDEwO1xyXG5cdH1cclxuXHQuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNDZweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xyXG5cdH1cclxuXHQuY29sb3Itb3B0aW9uc3tcclxuXHRcdGF7XHJcblx0XHRcdHdoaXRlLXNwYWNlOnByZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jei1iZy1jb2xvciB7XHJcbiAgICBcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0c3BhbntcclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji53aGl0ZXtcclxuXHRcdFx0XHRjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYucm91bmRlZHtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcclxuXHRcdFx0XHQmLnNlbGVjdGVke1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAzcHggc29saWQgIzMxNGZlNTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jei1iZy1pbWFnZXtcclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHRcdGltZy5yb3VuZGVke1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XHJcblx0XHRcdCYuc2VsZWN0ZWR7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI0ZGNTg2QjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/customizer/customizer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
        $('.customizer').removeClass('open');
    };
    CustomizerComponent.prototype.onChange = function (e) {
        if (e === true) {
            document.getElementsByClassName("sidebar-background")[0].style.display = "block";
        }
        else {
            document.getElementsByClassName("sidebar-background")[0].style.display = "none";
        }
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/components/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/components/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/data/sweet-alerts.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared/data/sweet-alerts.ts ***!
  \********************************************************/
/*! exports provided: basicAlert, withTitle, htmlAlert, typeQuestion, showQuestion, typePrimary, typeSuccess, showSuccess, typeInfo, typeWarning, typeError, showError, customIcon, autoClose, outsideClick, ajaxRequest, customButton, promptFunction, confirmText, confirmCancelButton, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicAlert", function() { return basicAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTitle", function() { return withTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlAlert", function() { return htmlAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeQuestion", function() { return typeQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showQuestion", function() { return showQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typePrimary", function() { return typePrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeSuccess", function() { return typeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccess", function() { return showSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeInfo", function() { return typeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeWarning", function() { return typeWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeError", function() { return typeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customIcon", function() { return customIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoClose", function() { return autoClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsideClick", function() { return outsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxRequest", function() { return ajaxRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customButton", function() { return customButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promptFunction", function() { return promptFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmText", function() { return confirmText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmCancelButton", function() { return confirmCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

// Simple Alert
function basicAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Here's a message!");
}
// Alert with Title
function withTitle() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Here's a message!", "It's pretty, isn't it?");
}
//  HTML Alert
function htmlAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'HTML <small>Title</small>!',
        html: 'A custom <span style="color:#F6BB42">html<span> message.'
    });
}
// Question Type Alert
function typeQuestion() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Question", "Are You Sure?", "question");
}
// Question Type Alert
function showQuestion(title, question) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()(title, question, "question");
}
// Primary Type Alert
function typePrimary() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Good job!", "You clicked the button!", "success");
}
// Success Type Alert
function typeSuccess() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Good job!", "You clicked the button!", "success");
}
function showSuccess(title, text) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()(title, text, "success");
}
// Info Type Alert
function typeInfo() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Info!", "You clicked the button!", "info");
}
// Warning Type Alert
function typeWarning() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Warning!", "You clicked the button!", "warning");
}
// Error Type Alert
function typeError() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Error!", "You clicked the button!", "error");
}
function showError(title, text) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()(title, text, "error");
}
// Custom Icon 
function customIcon() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/photos/7.jpeg" });
}
// Auto close timer
function autoClose() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}
// Allow Outside Click
function outsideClick() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}
// Ajax Request
function ajaxRequest() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(function (email) {
        if (email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }
    });
}
// Button Options
function customButton() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Opps!'
    });
}
// Prompt Function
function promptFunction() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    });
    var steps = [
        {
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ];
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.queue(steps).then(function (result) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resetDefaults();
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result.value) +
                    '</pre>',
                confirmButtonText: 'Lovely!'
            });
        }
    });
}
// Confirm Button Action
function confirmText() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Text Changed',
        cancelButtonText: "No, cancel"
    }).then(function (isConfirm) {
        if (isConfirm) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Changed!', 'Confirm button text was changed!!', 'success');
        }
    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
}
// Confirm & Cancel Button
function confirmCancelButton() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Deleted!', 'Your imaginary file has been deleted.', 'success');
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
}
// Chaining modals / Steps
function steps() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        cancelButtonColor: '#FF586B',
        animation: false
    });
    var steps = [
        {
            title: 'Step 1',
            text: 'Chaining modals is easy with Step 1'
        },
        {
            title: 'Step 2',
            text: 'Chaining modals is easy with Step 2'
        },
        {
            title: 'Step 3',
            text: 'Chaining modals is easy with Step 3'
        },
    ];
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.queue(steps).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: 'All done!',
            text: 'Great job :)',
            confirmButtonText: 'Lovely!',
            showCancelButton: false
        });
    }).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resetDefaults();
    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
}


/***/ }),

/***/ "./src/app/components/shared/directives/toggle-fullscreen.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/shared/directives/toggle-fullscreen.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n            Copyright &copy; {{currentDate | date: 'yyyy'}} Alaska Projects, Todos os direitos reservados.\r\n        </p>\r\n\r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>\r\n            <a href=\"javascript:;\" class=\"mr-2 display-inline-block\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">\r\n                <i class=\"{{toggleClass}} blue-grey darken-4\"></i>\r\n                <p class=\"d-none\">fullscreen</p>\r\n            </a>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mt-1\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\r\n                            <i class=\"ft-bell blue-grey darken-4\"></i>\r\n                            <span class=\"notification badge badge-pill badge-danger\" id=\"notificationNumber\">{{notifications.length}}</span>\r\n                            <p class=\"d-none\">Notificações</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\r\n                            <div class=\"arrow_box_right\">\r\n                                <div class=\"noti-list\">\r\n                                    <div *ngFor=\"let notification of notifications; let i = index\">\r\n                                        <a class=\"dropdown-item noti-container py-2\" (click)=\"removeNotification(notification)\">\r\n                                            <i class=\"ft-share info float-left d-block font-medium-4 mt-2 mr-2\"></i>\r\n                                            <span class=\"noti-wrapper\">\r\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 info\">{{notification.notification.title}}</span>\r\n                                            <span class=\"noti-text\" id=\"notiText\">{{notification.notification.body}}</span>\r\n                                            </span>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\" (click)=\"removeAllNotifications()\">Marcar todas como Lidas</a>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item mr-0\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link dropdown-user-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <span class=\"avatar avatar-online\">\r\n                                    <img src=\"assets/img/photos/profile2.jpg\" alt=\"avatar\" id=\"navbar-avatar\">\r\n                                </span>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\r\n                            <div>\r\n\r\n                                <div *ngIf=\"isLogged\">\r\n                                    <a class=\"dropdown-item py-1\" routerLink=\"/user/profile\">\r\n                                        <i class=\"ft-edit mr-2\"></i>\r\n                                        <span>Meu perfil</span>\r\n                                    </a>\r\n                                </div>\r\n                                <!--                                 <div *ngIf=\"isLogged \">>\r\n                                    <a class=\"dropdown-item py-1 \" routerLink=\"/chat \">\r\n                                        <i class=\"ft-message-circle mr-2 \"></i>\r\n                                        <span>Meus Chats</span>\r\n                                    </a>\r\n                                </div> \r\n                                <div class=\"dropdown-divider \"></div>-->\r\n                                <div *ngIf=\"isLogged\">\r\n                                    <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"onLogout()\">\r\n                                        <i class=\"ft-power mr-2\"></i>\r\n                                        <span>Sair</span>\r\n                                    </a>\r\n                                </div>\r\n                                <div *ngIf=\"!isLogged\">\r\n                                    <a class=\"nav-link\" routerLink=\"/user/login\">\r\n                                        <i class=\"ft-power mr-2\"></i>\r\n                                        <span>Entrar</span>\r\n                                    </a>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notiText {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 90%;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0M6XFxVc2Vyc1xcbHVuaWRcXERlc2t0b3BcXHByb2pldG9cXFNJU1RFTUEgLSBWQVZBXFx2YXZhLXBlbnRlY29zdGUtc3lzdGVtL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsV0FBVTtFQUNWLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aVRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/messaging.service */ "./src/app/services/messaging.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, translate, afsAuth, messagingService, firebaseService) {
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
        this.afsAuth = afsAuth;
        this.messagingService = messagingService;
        this.firebaseService = firebaseService;
        this.notifications = [];
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.isCollapsed = true;
        this.isLogged = false;
        this.getCurrentUser();
        this.getNotifications();
        this._subscription = this.messagingService.currentMessage.subscribe(function (value) {
            if (value !== null) {
                _this.getNotifications();
            }
        });
    }
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            localStorage.setItem('current_user', JSON.stringify(auth));
            if (auth) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
                _this.router.navigate(['/user/login']);
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        localStorage.clear();
        this.afsAuth.auth.signOut();
    };
    NavbarComponent.prototype.getNotifications = function () {
        var _this = this;
        this.firebaseService.getNotifications().snapshotChanges().subscribe(function (notifications) {
            _this.notifications = [];
            notifications.forEach(function (item) {
                var a = item.payload.toJSON();
                a['$key'] = item.key;
                _this.notifications.push(a);
            });
            if (notifications !== null) {
                _this.reloadChildView();
            }
        });
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else {
            this.toggleClass = 'ft-maximize';
        }
    };
    NavbarComponent.prototype.addNotification = function (notification) {
        this.notifications.push(notification);
        this.reloadChildView();
    };
    NavbarComponent.prototype.removeNotification = function (notification) {
        this.firebaseService.deleteNotification(notification.$key);
        this.getNotifications();
        if (notification.data.order_id) {
            this.router.navigateByUrl('/pedidos/detalhes/' + notification.data.order_id);
            return;
        }
        if (notification.data.product_id) {
            this.router.navigateByUrl('/produtos/detalhes/' + notification.data.product_id);
            return;
        }
    };
    NavbarComponent.prototype.removeAllNotifications = function () {
        this.firebaseService.deleteAllNotifications();
        this.getNotifications();
    };
    NavbarComponent.prototype.insertChildView = function () {
        if (this.vc) {
            this.vc.insert(this.childViewRef);
        }
    };
    NavbarComponent.prototype.removeChildView = function () {
        if (this.vc) {
            this.vc.detach();
        }
    };
    NavbarComponent.prototype.reloadChildView = function () {
        var _this = this;
        this.removeChildView();
        setTimeout(function () {
            _this.insertChildView();
        }, 3000);
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notificationNumber', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], NavbarComponent.prototype, "vc", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/shared/notification-sidebar/notification-sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\r\n  <a class=\"notification-sidebar-close\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT ACTIVITY</h6>\r\n                <div class=\"timeline\">\r\n                  <ul class=\"list-unstyled base-timeline activity-timeline ml-0\">\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-danger\">\r\n                              <i class=\"ft-shopping-cart\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-danger\">Update</a>\r\n                              <span class=\"d-block\">Jim Doe Purchased new equipments for zonal office.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              just now\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-primary\">\r\n                              <i class=\"fa fa-plane\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-primary\">Added</a>\r\n                              <span class=\"d-block\">Your Next flight for USA will be on 15th August 2015.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              25 hours ago\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-dark\">\r\n                              <i class=\"ft-mic\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-dark\">Assined</a>\r\n                              <span class=\"d-block\">Natalya Parker Send you a voice mail for next conference.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              15 days ago\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-warning\">\r\n                              <i class=\"ft-map-pin\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-warning\">New</a>\r\n                              <span class=\"d-block\">Jessy Jay open a new store at S.G Road.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              20 days ago\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-primary\">\r\n                              <i class=\"ft-inbox\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-primary\">Added</a>\r\n                              <span class=\"d-block\">voice mail for conference.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              2 Week Ago\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-danger\">\r\n                              <i class=\"ft-mic\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-danger\">Update</a>\r\n                              <span class=\"d-block\">Natalya Parker Jessy Jay open a new store at S.G Road.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">1 Month Ago</small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-dark\">\r\n                              <i class=\"ft-inbox\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-dark\">Assined</a>\r\n                              <span class=\"d-block\">Natalya Parker Send you a voice mail for Updated conference.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              1 Month ago\r\n                          </small>\r\n                      </li>\r\n                      <li class=\"\">\r\n                          <div class=\"timeline-icon bg-warning\">\r\n                              <i class=\"ft-map-pin\"></i>\r\n                          </div>\r\n                          <div class=\"base-timeline-info\">\r\n                              <a href=\"#\" class=\"text-uppercase text-warning\">New</a>\r\n                              <span class=\"d-block\">Started New project with Jessie Lee.</span>\r\n                          </div>\r\n                          <small class=\"text-muted\">\r\n                              2 Month ago\r\n                          </small>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"notifications1\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"recent-activity1\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"notifications2\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"recent-activity2\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"show-emails\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"float-right\">\r\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"show-stats\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->\r\n"

/***/ }),

/***/ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvQzpcXFVzZXJzXFxsdW5pZFxcRGVza3RvcFxccHJvamV0b1xcU0lTVEVNQSAtIFZBVkFcXHZhdmEtcGVudGVjb3N0ZS1zeXN0ZW0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcbm90aWZpY2F0aW9uLXNpZGViYXJcXG5vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNULGNBQWE7RUFDaEIsV0FBVTtFQUNQLHVCQUFzQjtFQUN6QixjQUFhO0VBQ1YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sVUFBUztFQUNULGNBQWE7RUFDYiwyREFBMEQ7RUFDMUQsb0NBQTJCO1VBQTNCLDRCQUEyQjtFQUMzQiwyQ0FBMEM7RUFDMUMsdUNBQXNDLEVBd0R6QztFQXJFRDtJQWdCRSxTQUFRLEVBQ1I7RUFqQkY7SUFvQkUsbUJBQWtCO0lBQ2YsYUFBWTtJQUNaLGNBQWEsRUFjaEI7RUFwQ0Y7TUE0Qk0sYUFBVyxFQUNSO0VBN0JUO01BK0JNLGFBQVcsRUFDUjtFQWhDVDtJQXVDRSxpQkFBZ0I7SUFDaEIsOEJBQTRCO0lBQzVCLGVBQWM7SUFDWCw0Q0FBMkMsRUFDOUM7RUEzQ0Y7SUE2Q0ssWUFBVyxFQUNkO0VBOUNGO0lBZ0RFLG1CQUFrQjtJQUNmLFlBQVc7SUFDWCxVQUFTO0lBQ1QsYUFBWTtJQUNaLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7RUF0REY7SUF3REUsbUJBQWtCO0lBQ2YsU0FBUTtJQUNSLFlBQVc7SUFDWCxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tc2lkZWJhcntcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICByaWdodDogLTQwMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdHotaW5kZXg6IDEwNTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHQmLm9wZW57XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHRoZWlnaHQ6IDEwMCU7XHJcbiAgICBcdHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgXHQjdGltZWxpbmV7XHJcbiAgICBcdFx0Ji50aW1lbGluZS1sZWZ0e1xyXG4gICAgXHRcdFx0LnRpbWVsaW5lLWl0ZW17XHJcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHQmOmFmdGVye1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6bm9uZTtcclxuICAgIFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0fVxyXG4gICAgXHRcdH1cclxuICAgIFx0fVxyXG5cdH1cclxuXHJcblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcclxuICAgIFx0Y29sb3I6ICMwMDA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZXtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgcmlnaHQ6IDEwcHg7XHJcblx0ICAgIHRvcDogMTBweDtcclxuXHQgICAgcGFkZGluZzogN3B4O1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHQgICAgei1pbmRleDogMTA7XHJcblx0fVxyXG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHRcclxuXHJcblx0XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent() {
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
        // notification-sidebar JS File
        $.getScript('./assets/js/notification-sidebar.js');
    };
    NotificationSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! ./notification-sidebar.component.html */ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.scss")]
        })
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/routes/full-layout.routes.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/routes/full-layout.routes.ts ***!
  \****************************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
/* harmony import */ var src_app_components_offers_offers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
/* harmony import */ var src_app_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var src_app_components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var src_app_components_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/restaurants/restaurants.component */ "./src/app/components/restaurants/restaurants.component.ts");
/* harmony import */ var src_app_components_restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/restaurant-details/restaurant-details.component */ "./src/app/components/restaurant-details/restaurant-details.component.ts");
/* harmony import */ var src_app_components_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/edit-restaurant/edit-restaurant.component */ "./src/app/components/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var src_app_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var src_app_components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/add-category/add-category.component */ "./src/app/components/add-category/add-category.component.ts");
/* harmony import */ var src_app_components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/category-details/category-details.component */ "./src/app/components/category-details/category-details.component.ts");
/* harmony import */ var src_app_components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/edit-category/edit-category.component */ "./src/app/components/edit-category/edit-category.component.ts");
/* harmony import */ var src_app_components_items_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var src_app_components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/item-details/item-details.component */ "./src/app/components/item-details/item-details.component.ts");
/* harmony import */ var src_app_components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/components/edit-item/edit-item.component */ "./src/app/components/edit-item/edit-item.component.ts");
/* harmony import */ var src_app_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/add-item/add-item.component */ "./src/app/components/add-item/add-item.component.ts");
/* harmony import */ var src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var src_app_components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/components/order-details/order-details.component */ "./src/app/components/order-details/order-details.component.ts");
/* harmony import */ var src_app_components_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/edit-order/edit-order.component */ "./src/app/components/edit-order/edit-order.component.ts");
/* harmony import */ var src_app_components_city_configuration_city_configuration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/components/city-configuration/city-configuration.component */ "./src/app/components/city-configuration/city-configuration.component.ts");
/* harmony import */ var src_app_components_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/components/add-district/add-district.component */ "./src/app/components/add-district/add-district.component.ts");
/* harmony import */ var src_app_components_add_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var src_app_components_add_building_add_building_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/components/add-building/add-building.component */ "./src/app/components/add-building/add-building.component.ts");
/* harmony import */ var src_app_components_add_new_city_add_new_city_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/components/add-new-city/add-new-city.component */ "./src/app/components/add-new-city/add-new-city.component.ts");
/* harmony import */ var src_app_components_add_new_district_add_new_district_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/components/add-new-district/add-new-district.component */ "./src/app/components/add-new-district/add-new-district.component.ts");
/* harmony import */ var src_app_components_add_new_street_add_new_street_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/components/add-new-street/add-new-street.component */ "./src/app/components/add-new-street/add-new-street.component.ts");
/* harmony import */ var src_app_components_add_new_building_add_new_building_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/components/add-new-building/add-new-building.component */ "./src/app/components/add-new-building/add-new-building.component.ts");
/* harmony import */ var src_app_components_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/components/edit-city/edit-city.component */ "./src/app/components/edit-city/edit-city.component.ts");
/* harmony import */ var src_app_components_edit_district_edit_district_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/components/edit-district/edit-district.component */ "./src/app/components/edit-district/edit-district.component.ts");
/* harmony import */ var src_app_components_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/components/edit-street/edit-street.component */ "./src/app/components/edit-street/edit-street.component.ts");
/* harmony import */ var src_app_components_edit_building_edit_building_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/components/edit-building/edit-building.component */ "./src/app/components/edit-building/edit-building.component.ts");
/* harmony import */ var src_app_components_add_paypal_add_paypal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/components/add-paypal/add-paypal.component */ "./src/app/components/add-paypal/add-paypal.component.ts");
/* harmony import */ var src_app_components_add_stripe_add_stripe_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/components/add-stripe/add-stripe.component */ "./src/app/components/add-stripe/add-stripe.component.ts");
/* harmony import */ var src_app_components_add_extra_food_add_extra_food_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/components/add-extra-food/add-extra-food.component */ "./src/app/components/add-extra-food/add-extra-food.component.ts");
/* harmony import */ var src_app_components_view_extra_food_view_extra_food_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/components/view-extra-food/view-extra-food.component */ "./src/app/components/view-extra-food/view-extra-food.component.ts");
/* harmony import */ var src_app_components_edit_extra_food_edit_extra_food_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/components/edit-extra-food/edit-extra-food.component */ "./src/app/components/edit-extra-food/edit-extra-food.component.ts");
/* harmony import */ var src_app_components_add_new_restaurant_add_new_restaurant_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/components/add-new-restaurant/add-new-restaurant.component */ "./src/app/components/add-new-restaurant/add-new-restaurant.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./../../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");







































// Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: 'src/app/components/dashboard/dashboard.module#DashboardModule',
    },
    { path: 'offers', component: src_app_components_offers_offers_component__WEBPACK_IMPORTED_MODULE_0__["OffersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'book/:id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_1__["DetailsBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'admin/list-books', component: _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_2__["ListBooksComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'user/register', component: src_app_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'user/profile', component: src_app_components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'lojas/listar', component: src_app_components_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'lojas/detalhes/:id', component: src_app_components_restaurant_details_restaurant_details_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'lojas/editar/:id', component: src_app_components_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_8__["EditRestaurantComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'categorias/listar', component: src_app_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'categorias/adicionar', component: src_app_components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_10__["AddCategoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'categorias/detalhes/:id', component: src_app_components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'categorias/editar/:id', component: src_app_components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_12__["EditCategoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/listar', component: src_app_components_items_items_component__WEBPACK_IMPORTED_MODULE_13__["ItemsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/detalhes/:id', component: src_app_components_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_14__["ItemDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/editar/:id', component: src_app_components_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_15__["EditItemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/adicionar', component: src_app_components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_16__["AddItemComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'pedidos', component: src_app_components_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__["OrdersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'pedidos/detalhes/:id', component: src_app_components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'pedidos/editar/:id', component: src_app_components_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__["EditOrderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'enderecos/cidades/listar', component: src_app_components_city_configuration_city_configuration_component__WEBPACK_IMPORTED_MODULE_20__["CityConfigurationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-district', component: src_app_components_add_district_add_district_component__WEBPACK_IMPORTED_MODULE_21__["AddDistrictComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add', component: src_app_components_add_add_component__WEBPACK_IMPORTED_MODULE_22__["AddComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-building', component: src_app_components_add_building_add_building_component__WEBPACK_IMPORTED_MODULE_23__["AddBuildingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'enderecos/cidades/adicionar', component: src_app_components_add_new_city_add_new_city_component__WEBPACK_IMPORTED_MODULE_24__["AddNewCityComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-new-district', component: src_app_components_add_new_district_add_new_district_component__WEBPACK_IMPORTED_MODULE_25__["AddNewDistrictComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-new-street', component: src_app_components_add_new_street_add_new_street_component__WEBPACK_IMPORTED_MODULE_26__["AddNewStreetComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-new-building', component: src_app_components_add_new_building_add_new_building_component__WEBPACK_IMPORTED_MODULE_27__["AddNewBuildingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'enderecos/cidades/editar/:id', component: src_app_components_edit_city_edit_city_component__WEBPACK_IMPORTED_MODULE_28__["EditCityComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'edit-district/:id', component: src_app_components_edit_district_edit_district_component__WEBPACK_IMPORTED_MODULE_29__["EditDistrictComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'edit-street/:id', component: src_app_components_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_30__["EditStreetComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'edit-building/:id', component: src_app_components_edit_building_edit_building_component__WEBPACK_IMPORTED_MODULE_31__["EditBuildingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-paypal', component: src_app_components_add_paypal_add_paypal_component__WEBPACK_IMPORTED_MODULE_32__["AddPaypalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'add-stripe', component: src_app_components_add_stripe_add_stripe_component__WEBPACK_IMPORTED_MODULE_33__["AddStripeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/adicional/:id', component: src_app_components_add_extra_food_add_extra_food_component__WEBPACK_IMPORTED_MODULE_34__["AddExtraFoodComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/adicional/listar/:id', component: src_app_components_view_extra_food_view_extra_food_component__WEBPACK_IMPORTED_MODULE_35__["ViewExtraFoodComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'produtos/adicional/editar/:id/:product_id', component: src_app_components_edit_extra_food_edit_extra_food_component__WEBPACK_IMPORTED_MODULE_36__["EditExtraFoodComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: 'lojas/adicionar', component: src_app_components_add_new_restaurant_add_new_restaurant_component__WEBPACK_IMPORTED_MODULE_37__["AddNewRestaurantComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_38__["AuthGuard"]] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"] },
];


/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/components/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/components/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/components/shared/directives/toggle-fullscreen.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_9__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_11__["ToggleFullscreenDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar-routes.config.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar-routes.config.ts ***!
  \********************************************************************/
/*! exports provided: ROUTES_SUPER_ADMIN, ROUTES_ADMIN, ROUTES_STORE_ONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_SUPER_ADMIN", function() { return ROUTES_SUPER_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_ADMIN", function() { return ROUTES_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_STORE_ONE", function() { return ROUTES_STORE_ONE; });
var ROUTES_SUPER_ADMIN = [
    {
        path: '/dashboard/eCommerce', title: 'Dashboard', icon: 'icon-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/lojas', title: 'Lojas', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/lojas/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/lojas/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/categorias', title: 'Categorias', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/categorias/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/categorias/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/produtos', title: 'Produtos', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/produtos/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/produtos/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/enderecos', title: 'Cidades', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/enderecos/cidades/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
            {
                path: '/enderecos/cidades/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pedidos', title: 'Pedidos', icon: 'icon-note', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: []
    },
];
var ROUTES_ADMIN = [
    {
        path: '/dashboard/eCommerce', title: 'Dashboard', icon: 'icon-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/lojas', title: 'Lojas', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/lojas/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/categorias', title: 'Categorias', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/categorias/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/categorias/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/produtos', title: 'Produtos', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/produtos/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/produtos/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/enderecos', title: 'Cidades', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/enderecos/cidades/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
            {
                path: '/enderecos/cidades/adicionar', title: 'Adicionar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pedidos', title: 'Pedidos', icon: 'icon-note', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: []
    },
];
// Sidebar menu Routes and data
var ROUTES_STORE_ONE = [
    {
        path: '/lojas', title: 'Lojas', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/lojas/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/categorias', title: 'Categorias', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/categorias/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/produtos', title: 'Produtos', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/produtos/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/enderecos', title: 'Cidades', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/enderecos/cidades/listar', title: 'Listar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pedidos', title: 'Pedidos', icon: 'icon-note', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: []
    },
];


/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"assets/img/logo.png\" />\r\n            </div>\r\n            <span class=\"text align-middle\">ALEPH</span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i class=\"ft-disc toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\">\r\n    <!-- <div class=\"user-settings-wrap text-center\">\r\n        <img class=\"rounded-circle user-img mb-3\" src=\"./assets/img/portrait/small/avatar-s-3.jpg\" alt=\"User Image\" width=\"100\">\r\n        <h5 class=\"white mb-3\">John Doe</h5>\r\n        <div class=\"user-options\">\r\n            <a [routerLink]=\"['/']\" class=\"white p-1\"><i class=\"ft-home font-medium-3\"></i></a>\r\n            <a [routerLink]=\"['/pages/profile']\" class=\"white p-1 mx-3\"><i class=\"ft-user font-medium-3\"></i></a>\r\n            <a [routerLink]=\"['/chat-ngrx']\" class=\"white p-1\"><i class=\"ft-message-square font-medium-3\"></i></a>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\">\r\n            <!-- First level menu -->\r\n            <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\r\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->"

/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/components/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, translate) {
        this.router = router;
        this.route = route;
        this.translate = translate;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        switch (localStorage.getItem('current_user_role')) {
            case 'super_admin':
                this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES_SUPER_ADMIN"].filter(function (menuItem) { return menuItem; });
                break;
            case 'admin':
                this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES_ADMIN"].filter(function (menuItem) { return menuItem; });
                break;
            case 'store_one':
                this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES_STORE_ONE"].filter(function (menuItem) { return menuItem; });
                break;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n  border: 0 solid #fff !important;\n}\n.btn-social{\n  position: relative;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  border-color: rgba(0,0,0,0.2);\n}\n.btn-facebook{\n  background: #3b5998;\n}\n.btn-google{\n  background: #dd4b39;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWiw4QkFBOEI7Q0FDL0I7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgYm9yZGVyOiAwIHNvbGlkICNmZmYgIWltcG9ydGFudDtcbn1cbi5idG4tc29jaWFse1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmJ0bi1mYWNlYm9va3tcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbi5idG4tZ29vZ2xle1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/users/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\" class=\"mb-5 mt-5\">\n\n    <div class=\"container\" style=\"background-image: 'assets/store.jpg'\">\n        <h3 style=\"text-align:center;\">\n            Gestão de Pedidos\n            <span>\n\t\t\t\t <img style=\"text-align:center;\" src =\"assets/sign.png\" (click)=\"onLoginGoogle()\" style =\"width:20%;height:50%;\">\n\t\t\t</span>\n        </h3>\n\n        <img style=\"text-align:center;\" src=\"assets/store.jpg\" width=\"1100px\" height=\"400px\">\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        });
    };
    LoginComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginComponent.prototype.onLoginRedirect = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-section {\n  border: 1px solid #007bff;\n  background: #fff;\n}\n.profile-header {\n  background: #007bff;\n  height: 150px;\n}\n.user-detail {\n  margin: -50px 0 30px 0;\n}\nimg {\n  height: 100px;\n  width: 100px;\n}\n.user-details h5 {\n  margin: 15px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZDtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNlY3Rpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi51c2VyLWRldGFpbCB7XG4gIG1hcmdpbjogLTUwcHggMCAzMHB4IDA7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi51c2VyLWRldGFpbHMgaDUge1xuICBtYXJnaW46IDE1cHggMCA1cHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\" class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n      </div>\n      <div class=\"row user-details\">\n        <div class=\"col-12\">\n          <img src=\"{{user.photoUrl}}\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n          <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\n          <p>\n            {{user.email}}\n          </p>\n\n          <hr>\n         \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.user = {
            displayName: '',
            email: '',
            photoUrl: '',
        };
        this.providerId = 'null';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.displayName = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.providerId = user.providerData[0].providerId;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/users/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n  border: 0px solid #fff !important;\n}\n.btn-social{\n  position: relative;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  border-color: rgba(0,0,0,0.2);\n}\n.btn-facebook{\n  background: #3b5998;\n}\n.btn-google{\n  background: #dd4b39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWiw4QkFBOEI7Q0FDL0I7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1zb2NpYWx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uYnRuLWZhY2Vib29re1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xufVxuLmJ0bi1nb29nbGV7XG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"register\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n  \n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        });
    };
    RegisterComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        });
    };
    RegisterComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['admin/restaurants']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUser'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "inputImageUser", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/view-extra-food/view-extra-food.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/view-extra-food/view-extra-food.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1leHRyYS1mb29kL3ZpZXctZXh0cmEtZm9vZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/view-extra-food/view-extra-food.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/view-extra-food/view-extra-food.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <img *ngIf=\"loading\" class=\"center-spinner\" src=\"assets/spinner.gif\" />\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <ngx-datatable #table class='bootstrap' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='order_details'>\n                            <ngx-datatable-column prop=\"name\">\n                                <ng-template let-column=\"name\" ngx-datatable-header-template>\n                                    NOME\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"value\">\n                                <ng-template let-column=\"value\" ngx-datatable-header-template>\n                                    PREÇO\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    R${{formatMoney(value)}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column prop=\"$key\">\n                                <ng-template let-column=\"$key\" ngx-datatable-header-template>\n                                    AÇÕES\n                                </ng-template>\n\n                                <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                    <button (click)=\"onExtraItemEdit(value)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-warning\" *ngIf=\"isAdmin\">Editar</button>\n                                    <button (click)=\"showQuestion(value)\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-danger\" *ngIf=\"isAdmin\">Deletar</button>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n\n                        </ngx-datatable>\n\n                        <div align=\"right\" style=\"margin-top:15px;\">\n                            <button class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-secondary\" [routerLink]=\"['/produtos/detalhes/'+id]\">Voltar</button>\n                            <button [routerLink]=\"['/produtos/adicional/'+id]\" class=\"btn btn-raised mr-1 btn-round shadow-z-2 btn-primary\" *ngIf=\"isAdmin\">Adicionar Nova Opção</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->\n<app-modal [userUid]=\"userUid\"></app-modal>"

/***/ }),

/***/ "./src/app/components/view-extra-food/view-extra-food.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/view-extra-food/view-extra-food.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewExtraFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewExtraFoodComponent", function() { return ViewExtraFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/data/sweet-alerts */ "./src/app/components/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewExtraFoodComponent = /** @class */ (function () {
    function ViewExtraFoodComponent(firebaseService, authService, router, route) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
    }
    ViewExtraFoodComponent.prototype.showQuestion = function (value) {
        var _this = this;
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showQuestion"]('', 'Deseja Confirmar essa Ação?').then(function (res) {
            if (res.dismiss) {
                return;
            }
            _this.loading = true;
            _this.onExtraItemDelete(value);
        });
    };
    ViewExtraFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getItemExtraDetail(this.id).snapshotChanges().subscribe(function (restaurant) {
            _this.order_details = [];
            restaurant.forEach(function (item) {
                var res = item.payload.toJSON();
                res['$key'] = item.key;
                _this.order_details.push(res);
            });
        });
    };
    ViewExtraFoodComponent.prototype.onExtraItemDelete = function (id) {
        var _this = this;
        this.firebaseService.onExtraItemDelete(this.id, id).then(function (res) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showSuccess"]('Sucesso!', 'Adicional Removido');
            _this.loading = false;
        }, function (error) {
            _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_4__["showError"]('Erro!', 'Falha ao Remover Adicional');
            _this.loading = false;
        });
    };
    ViewExtraFoodComponent.prototype.onExtraItemEdit = function (id) {
        this.firebaseService.setProductId(this.id);
        this.router.navigate(['/produtos/adicional/editar/' + id + '/' + this.id]);
    };
    ViewExtraFoodComponent.prototype.formatMoney = function (n) {
        if (n) {
            var num = parseFloat(n);
            return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        }
        else {
            return '';
        }
    };
    ViewExtraFoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-extra-food',
            template: __webpack_require__(/*! ./view-extra-food.component.html */ "./src/app/components/view-extra-food/view-extra-food.component.html"),
            styles: [__webpack_require__(/*! ./view-extra-food.component.css */ "./src/app/components/view-extra-food/view-extra-food.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewExtraFoodComponent);
    return ViewExtraFoodComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        // go login page
        localStorage.clear();
        this.router.navigate(['/user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(firebaseService, router, firebaseAuth, afsAuth) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.afsAuth = afsAuth;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('current_user')));
        this.firebaseAuth.authState.subscribe(function (user) {
            if (user) {
                _this.isLoggedIn.next(true);
                _this.getCurrentUserDetails(firebaseAuth.auth.currentUser);
                // NOW, when the callback from firebase came, and user is logged in,
                // we can navigate to the attempted URL (if exists)
            }
            else {
                _this.isLoggedIn.next(false);
            }
        });
    }
    AuthService.prototype.getCurrentUserDetails = function (id) {
        var _this = this;
        this.firebaseService.getUserDetails(id).snapshotChanges().subscribe(function (user) {
            _this.continueLogin(user.payload.val());
        });
    };
    AuthService.prototype.continueLogin = function (user) {
        localStorage.setItem('current_user_role', user.role);
        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
        }
        else {
            this.router.navigate(['dashboard/eCommerce']);
        }
    };
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider())
            .then(function (credential) { return _this.updateUserData(credential.user); });
    };
    AuthService.prototype.loginGoogleUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider())
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.clear();
        return this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return (this.afsAuth.authState !== undefined && this.authState !== null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        get: function () {
            return this.afsAuth.auth;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.updateUserData = function (user) {
        var _this = this;
        this.firebaseService.getUserDetails(user).snapshotChanges().subscribe(function (res) {
            if (res.key) {
                _this.continueLogin(res.payload.val());
            }
            else {
                var data = {
                    id: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    role: 'new-user'
                };
                _this.firebaseService.addNewUser(data);
                _this.continueLogin(data);
            }
        });
    };
    AuthService.prototype.isUserAdmin = function (userUid) {
        //return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataApiService = /** @class */ (function () {
    function DataApiService() {
        this.selectedBook = {
            id: null
        };
    }
    DataApiService.prototype.getAllBooks = function () {
        /**
      this.booksCollection = this.afs.collection<BookInterface>('books');
      return this.books = this.booksCollection.snapshotChanges()
        .pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as BookInterface;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
        **/
    };
    DataApiService.prototype.getAllBooksOffers = function () {
        /**
      this.booksCollection = this.afs.collection('books', ref => ref.where('oferta', '==', '1'));
      return this.books = this.booksCollection.snapshotChanges()
        .pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as BookInterface;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
        
        **/
    };
    DataApiService.prototype.getOneBook = function (idBook) {
        /**
      this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
      return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as BookInterface;
          data.id = action.payload.id;
          return data;
        }
      }));
      
      **/
    };
    DataApiService.prototype.addBook = function (book) {
        // this.booksCollection.add(book);
    };
    DataApiService.prototype.updateBook = function (book) {
        /**
      let idBook = book.id;
      this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
      this.bookDoc.update(book);
      
      */
    };
    DataApiService.prototype.deleteBook = function (idBook) {
        /**
      this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`);
      this.bookDoc.delete();
      
      **/
    };
    DataApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Firebase modules for Database, Data list and Single object

var FirebaseService = /** @class */ (function () {
    function FirebaseService(af) {
        this.af = af;
        this.listings = this.af.list('/listings');
        this.restaurants = this.af.list('/restaurants');
        this.categories = this.af.list('/category');
        this.items = this.af.list('/items');
        this.orders = this.af.list('/orders', function (ref) {
            return ref.orderByChild('timeStamp').limitToLast(100);
        });
        this.dashboardOrders = this.af.list('/orders', function (ref) {
            return ref.limitToLast(10).orderByChild('timeStamp');
        });
        this.notifications = this.af.list('/notifications/' + localStorage.getItem('current_user_role'));
        this.eraseNotificationsPath = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/notifications/' + localStorage.getItem('current_user_role'));
        this.orderList = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/orders');
        this.itemExtraList = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/items');
        this.userDetail = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users');
        this.allTableOrders = this.af.list('/AllTableOrders');
        this.allTableOrdersList = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/AllTableOrders');
        this.paypal = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/paypal');
        this.stripe = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/stripe');
        this.cities = this.af.list('/city');
        this.districts = this.af.list('/districts');
        this.streets = this.af.list('/streets');
        this.buildings = this.af.list('/apartments');
        this.users = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users');
        this.chooseCategories = this.af.list('/categoryChoose');
        this.itemChoose = this.af.list('/itemChoose');
        this.itemChooseExtraList = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/itemChoose');
        this.tax = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/tax');
        this.folder = 'listingimages';
        this.itemFolder = 'itemimages';
        this.restaurantFolder = 'restaurantimages';
        this.categoryFolder = 'categoryimages';
    }
    FirebaseService.prototype.updateChooseExtraItem = function (id, extraItem) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/items').child(this.productId).child("extraOptions").child(id).update({
            name: extraItem.name,
            selected: "false",
            value: extraItem.value
        });
    };
    FirebaseService.prototype.getItemEditExtraDetail = function (id) {
        this.extraItemDetail = this.af.object('/items/' + this.productId + '/extraOptions/' + id);
        return this.extraItemDetail;
    };
    FirebaseService.prototype.getItemExtraDetail = function (id) {
        this.extraItemList = this.af.list('/items/' + id + '/extraOptions/');
        return this.extraItemList;
    };
    FirebaseService.prototype.setProductId = function (id) {
        this.productId = id;
    };
    FirebaseService.prototype.onExtraItemDelete = function (item_id, extra_id) {
        return this.itemExtraList.child(item_id).child("extraOptions").child(extra_id).remove();
    };
    FirebaseService.prototype.addExtraItem = function (id, extraItem) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/items').child(id).child("extraOptions").push({
            name: extraItem.name,
            selected: "false",
            value: extraItem.price
        });
    };
    FirebaseService.prototype.addStripeConfiguration = function (stripe) {
        this.stripe.set({
            publishable: stripe.publishable,
            secret: stripe.secret
        });
    };
    FirebaseService.prototype.addPaypalConfiguration = function (paypal) {
        this.paypal.set({
            sandbox: paypal.sandbox,
            production: paypal.production
        });
    };
    FirebaseService.prototype.updateBuilding = function (id, building) {
        return this.buildings.update(id, building);
    };
    FirebaseService.prototype.getBuildingDetails = function (id) {
        this.buildingDetail = this.af.object('/apartments/' + id);
        return this.buildingDetail;
    };
    FirebaseService.prototype.updateStreet = function (id, street) {
        return this.streets.update(id, street);
    };
    FirebaseService.prototype.getStreetDetails = function (id) {
        this.streetDetail = this.af.object('/streets/' + id);
        return this.streetDetail;
    };
    FirebaseService.prototype.updateDistrict = function (id, district) {
        return this.districts.update(id, district);
    };
    FirebaseService.prototype.getDistrictDetails = function (id) {
        this.districtDetail = this.af.object('/districts/' + id);
        return this.districtDetail;
    };
    FirebaseService.prototype.updateCity = function (id, city) {
        return this.cities.update(id, city);
    };
    FirebaseService.prototype.getCityDetails = function (id) {
        this.cityDetail = this.af.object('/city/' + id);
        return this.cityDetail;
    };
    FirebaseService.prototype.addNewBuilding = function (buildingName) {
        return this.buildings.push(buildingName);
    };
    FirebaseService.prototype.addNewUser = function (user) {
        return this.af.object('/users/' + user.email.split('@')[0]).update(user);
    };
    FirebaseService.prototype.getUserDetails = function (user) {
        this.userDetail = this.af.object('/users/' + user.email.split('@')[0]);
        return this.userDetail;
    };
    FirebaseService.prototype.addNewStreet = function (streetName) {
        return this.streets.push(streetName);
    };
    FirebaseService.prototype.addNewDistrict = function (districtName) {
        return this.districts.push(districtName);
    };
    FirebaseService.prototype.addNewCity = function (cityName) {
        return this.cities.push(cityName);
    };
    FirebaseService.prototype.deleteBuilding = function (buildingKey) {
        return this.buildings.remove(buildingKey);
    };
    FirebaseService.prototype.getBuildings = function () {
        return this.buildings;
    };
    FirebaseService.prototype.deleteStreet = function (streetKey) {
        return this.streets.remove(streetKey);
    };
    FirebaseService.prototype.getStreets = function () {
        return this.streets;
    };
    FirebaseService.prototype.getDistricts = function () {
        return this.districts;
    };
    FirebaseService.prototype.deleteDistrict = function (districtKey) {
        return this.districts.remove(districtKey);
    };
    FirebaseService.prototype.getCities = function () {
        return this.cities;
    };
    FirebaseService.prototype.deleteCity = function (cityKey) {
        return this.cities.remove(cityKey);
    };
    FirebaseService.prototype.updateRestaurantOrderStatus = function (id, order_details) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/orders').child(id).update({
            status: order_details.status
        });
    };
    FirebaseService.prototype.getOrderDetail = function (id) {
        return this.orderList.child(id);
    };
    FirebaseService.prototype.getOrders = function () {
        return this.orders;
    };
    FirebaseService.prototype.getDashboardOrders = function () {
        return this.dashboardOrders;
    };
    FirebaseService.prototype.addItem = function (item) {
        var _this = this;
        var storageRefItem = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var selectedItemFile = item.image;
        var pathItem = "/" + this.itemFolder + "/" + selectedItemFile.name;
        var iRefItem = storageRefItem.child(pathItem);
        return iRefItem.put(selectedItemFile).then(function (snapshot) {
            item.image = pathItem;
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
            var spaceRef = storageRef.child(item.image);
            return storageRef.child(item.image).getDownloadURL().then(function (url) {
                item.image_firebase_url = url;
                return _this.items.push(item);
            });
        });
    };
    FirebaseService.prototype.updateItemWithImage = function (id, item) {
        return this.items.update(id, item);
    };
    FirebaseService.prototype.updateItem = function (id, item) {
        return this.items.update(id, item);
    };
    FirebaseService.prototype.deleteItem = function (id) {
        return this.items.remove(id);
    };
    FirebaseService.prototype.getItemDetails = function (id) {
        this.item_details = this.af.object('/items/' + id);
        return this.item_details;
    };
    FirebaseService.prototype.getItems = function () {
        return this.items;
    };
    FirebaseService.prototype.deleteCategory = function (id) {
        return this.categories.remove(id);
    };
    FirebaseService.prototype.updateCategoryWithImage = function (id, category) {
        return this.categories.update(id, category);
    };
    FirebaseService.prototype.updateCategory = function (id, category) {
        return this.categories.update(id, category);
    };
    FirebaseService.prototype.getCategoryDetails = function (cat_id) {
        this.category_details = this.af.object('/category/' + cat_id);
        return this.category_details;
    };
    FirebaseService.prototype.addCategory = function (category) {
        var _this = this;
        var storageRefItem = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var selectedItemFile = category.image;
        var pathItem = "/" + this.categoryFolder + "/" + selectedItemFile.name;
        var iRefItem = storageRefItem.child(pathItem);
        return iRefItem.put(selectedItemFile).then(function (snapshot) {
            category.image = pathItem;
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
            var spaceRef = storageRef.child(category.image);
            return storageRef.child(category.image).getDownloadURL().then(function (url) {
                category.firebase_url = url;
                return _this.categories.push(category);
            });
        });
    };
    FirebaseService.prototype.getCategories = function () {
        this.categories = this.af.list('/category');
        return this.categories;
    };
    FirebaseService.prototype.updateRestaurant = function (id, restaurant) {
        return this.restaurants.update(id, restaurant);
    };
    FirebaseService.prototype.updateRestaurantWithImage = function (id, restaurant) {
        return this.restaurants.update(id, restaurant);
    };
    FirebaseService.prototype.getRestaurantDetails = function (id) {
        this.restaurant = this.af.object('/restaurants/' + id);
        return this.restaurant;
    };
    FirebaseService.prototype.getRestaurantCategories = function (id) {
        this.restaurantCategory = this.af.list('/category/', function (ref) { return ref.orderByChild('res_name').equalTo(id); });
        return this.restaurantCategory;
    };
    FirebaseService.prototype.deleteRestaurant = function (id) {
        return this.restaurants.remove(id);
    };
    FirebaseService.prototype.getRestaurants = function () {
        return this.restaurants;
    };
    FirebaseService.prototype.addRestaurant = function (restaurant) {
        var _this = this;
        var storageRefItem = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var _loop_1 = function (selectedItemFile) {
            var pathItem = "/" + this_1.restaurantFolder + "/" + selectedItemFile.name;
            var iRefItem = storageRefItem.child(pathItem);
            return { value: iRefItem.put(selectedItemFile).then(function (snapshot) {
                    restaurant.image = pathItem;
                    var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                    var spaceRef = storageRef.child(restaurant.image);
                    return storageRef.child(restaurant.image).getDownloadURL().then(function (url) {
                        restaurant.firebase_url = url;
                        return _this.restaurants.push(restaurant);
                    });
                }) };
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedItemFile = _a[_i];
            var state_1 = _loop_1(selectedItemFile);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    FirebaseService.prototype.getNotifications = function () {
        return this.notifications;
    };
    FirebaseService.prototype.deleteNotification = function (id) {
        return this.notifications.remove(id);
    };
    FirebaseService.prototype.deleteAllNotifications = function () {
        this.eraseNotificationsPath.set({});
    };
    FirebaseService.prototype.getNotificationDetails = function (id) {
        this.notification_details = this.af.object('/notifications/' + id);
        return this.restaurant;
    };
    FirebaseService.prototype.getDashBoardData = function () {
        this.dashboard = this.af.object('/dashboard');
        return this.dashboard;
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/messaging.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            _this.updateToken(userId, token);
        });
    };
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__["AngularFireMessaging"]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyC_XK8JWBdU85Q1YdED3XBfL67vyh1lvYc',
        authDomain: 'services-app-pentecoste.firebaseapp.com',
        databaseURL: 'https://services-app-pentecoste.firebaseio.com',
        projectId: 'services-app-pentecoste',
        storageBucket: 'services-app-pentecoste.appspot.com',
        messagingSenderId: '983922821843',
        appId: '1:983922821843:web:bf079d50af158165'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lunid\Desktop\projeto\SISTEMA - VAVA\vava-pentecoste-system\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map