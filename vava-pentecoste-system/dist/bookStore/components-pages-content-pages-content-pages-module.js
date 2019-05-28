(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-content-pages-content-pages-module"],{

/***/ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming soon starts-->\r\n<section id=\"coming-soon\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n        <div class=\"card p-3 box-shadow-2\">\r\n          <div class=\"card-header text-center\">\r\n            <img alt=\"avtar\" class=\"img-fluid mb-3\" src=\"app-assets/img/logos/logo-color-big.png\" width=\"80\">\r\n            <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Coming Soon</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"text-center\">\r\n              <h5 class=\"card-text pb-2\">WE ARE LAUNCHING SOON.</h5>\r\n              <div id=\"clockFlat\" class=\"card-text getting-started pt-1 mt-2 display-inline-block\">\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-danger bg-darken-5 white box-shadow-2\"> <span>57</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Weeks </p>\r\n                </div>\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-danger bg-darken-5 white box-shadow-2\"> <span>05</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Days </p>\r\n                </div>\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-danger bg-darken-5 white box-shadow-2\"> <span>11</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Hours </p>\r\n                </div>\r\n                <div class=\"clockCard px-2 py-3 mr-3 mb-3 bg-danger bg-darken-5 white box-shadow-2\"> <span>12</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Minutes </p>\r\n                </div>\r\n                <div class=\"clockCard px-2 py-3 mr-3 mb-3 bg-danger bg-darken-5 white box-shadow-2\"> <span>34</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Seconds </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 pt-1\">\r\n                <p class=\"card-text lead\">Our website is under construction.</p>\r\n              </div>\r\n              <div class=\"col-12 text-center pt-2\">\r\n                <p class=\"socialIcon card-text\">\r\n                  <a class=\"grey darken-1\"><i class=\"fa fa-facebook-square\"></i></a>\r\n                  <a class=\"grey darken-1\"><i class=\"fa fa-twitter-square\"></i></a>\r\n                  <a class=\"grey darken-1\"><i class=\"fa fa-google-plus-square\"></i></a>\r\n                  <a class=\"grey darken-1\"><i class=\"fa fa-linkedin-square\"></i></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Coming soon ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9jb21pbmctc29vbi9jb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent() {
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        // countdown JS
        $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
        // coming soon JS start working after page load
        $.getScript('./assets/js/coming-soon/coming-soon.js');
    };
    ComingSoonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon-page',
            template: __webpack_require__(/*! ./coming-soon-page.component.html */ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-page.component.scss */ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.scss")]
        })
    ], ComingSoonPageComponent);
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/content-pages-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/content-pages-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/components/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/components/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/components/pages/content-pages/register/register-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        children: [
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonPageComponent"],
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__["LockScreenPageComponent"],
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__["MaintenancePageComponent"],
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ContentPagesRoutingModule);
    return ContentPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/content-pages.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/content-pages.module.ts ***!
  \************************************************************************/
/*! exports provided: ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-pages-routing.module */ "./src/app/components/pages/content-pages/content-pages-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/components/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/components/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/components/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/components/pages/content-pages/register/register-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonPageComponent"],
                _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"],
                _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPageComponent"],
                _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__["LockScreenPageComponent"],
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_9__["MaintenancePageComponent"],
                _register_register_page_component__WEBPACK_IMPORTED_MODULE_10__["RegisterPageComponent"]
            ]
        })
    ], ContentPagesModule);
    return ContentPagesModule;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/error/error-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/error/error-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Error page starts-->\r\n<section id=\"error\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-3 box-shadow-2\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"error-container\">\r\n                                <div class=\"no-border\">\r\n                                    <div class=\"text-center text-bold-700 grey darken-2 mt-5\" style=\"font-size: 11rem; margin-bottom: 4rem;\">404</div>\r\n                                </div>\r\n                                <div class=\"error-body\">\r\n                                    <fieldset class=\"row py-2 pt-4\">\r\n                                        <div class=\"input-group col-12\">\r\n                                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Search...\" aria-describedby=\"button-addon2\">\r\n                                        </div>\r\n                                    </fieldset>\r\n                                    <div class=\"py-2 justify-content-center\">\r\n                                        <div class=\"text-center\">\r\n                                            <a class=\"btn btn-danger btn-raised px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0\"><i class=\"ft-home\"></i> Back to Home</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"error-footer bg-transparent\">\r\n                                    <div class=\"row\">\r\n                                        <p class=\"text-muted text-center col-12 py-1\">© 2018 <a>Convex </a>Crafted with <i class=\"ft-heart font-small-3\"></i> by <a href=\"https://themeforest.net/user/pixinvent\" target=\"_blank\">PIXINVENT</a></p>\r\n                                        <div class=\"col-12 text-center\">\r\n                                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-facebook\">\r\n                                            <span class=\"fa fa-facebook\"></span>\r\n                                            </a>\r\n                                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-twitter\">\r\n                                            <span class=\"fa fa-twitter\"></span>\r\n                                            </a>\r\n                                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-linkedin\">\r\n                                            <span class=\"fa fa-linkedin\"></span>\r\n                                            </a>\r\n                                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-github\">\r\n                                            <span class=\"fa fa-github\"></span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Error page ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/error/error-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/error/error-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9lcnJvci9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/error/error-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/error/error-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/components/pages/content-pages/error/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/components/pages/content-pages/error/error-page.component.scss")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\r\n<section id=\"forgot-password\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-4 box-shadow-2\">\r\n                    <div class=\"card-header text-center\">\r\n                        <img src=\"assets/img/logos/logo-color-big.png\" alt=\"company-logo\" class=\"mb-3\" width=\"80\">\r\n                        <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Forgot Password</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <form class=\"pt-2\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control form-control-lg\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Your Email Address\" ngModel>\r\n                                </div>\r\n                                <div class=\"form-group pt-2\">\r\n                                    <div class=\"text-center mt-3\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-raised px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"card-footer grey darken-1\">\r\n                            <div class=\"float-left\"><a (click)=\"onLogin()\">Login</a></div>\r\n                            <div class=\"float-right\">New User? <a (click)=\"onRegister()\">Register Now</a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Forgot Password Ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ForgotPasswordPageComponent.prototype, "forogtPasswordForm", void 0);
    ForgotPasswordPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password-page',
            template: __webpack_require__(/*! ./forgot-password-page.component.html */ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/components/pages/content-pages/forgot-password/forgot-password-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ForgotPasswordPageComponent);
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Lock Screen Starts-->\r\n<section id=\"lock-screen\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-3 box-shadow-2 width-400\">\r\n                    <div class=\"card-header text-center\">\r\n                        <img src=\"assets/img/logos/logo-color-big.png\" alt=\"company-logo\" class=\"mb-3\" width=\"80\">\r\n                        <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Unlock User</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate=\"\">\r\n                                <div class=\"form-group pt-1\">\r\n                                    <input type=\"password\" class=\"form-control form-control-lg\" id=\"inputPass\" name=\"inputPass\" placeholder=\"Password\" ngModel required>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"text-center mt-4\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-raised px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0\">Unlock</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"card-footer grey darken-1\">\r\n                            <div class=\"text-center\">Don't have an account? <a href=\"#\"> Signup </a></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Lock Screen Ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9sb2NrLXNjcmVlbi9sb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LockScreenPageComponent.prototype, "lockScreenForm", void 0);
    LockScreenPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-screen-page',
            template: __webpack_require__(/*! ./lock-screen-page.component.html */ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen-page.component.scss */ "./src/app/components/pages/content-pages/lock-screen/lock-screen-page.component.scss")]
        })
    ], LockScreenPageComponent);
    return LockScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/login/login-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/login/login-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-4 box-shadow-2 width-400\">\r\n                    <div class=\"card-header text-center\">\r\n                        <img src=\"assets/img/logos/logo-color-big.png\" alt=\"company-logo\" class=\"mb-3\" width=\"80\">\r\n                        <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Login</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <form novalidate=\"\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"email\" class=\"form-control form-control-lg\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email Address\" ngModel required email>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"password\" class=\"form-control form-control-lg\" name=\"inputPass\" id=\"inputPass\" placeholder=\"Password\" ngModel required>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-5\">\r\n                                                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"rememberme\">\r\n                                                <label class=\"custom-control-label float-left\" for=\"rememberme\">Remember Me</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"text-center col-md-12\">\r\n                                        <button type=\"submit\" class=\"btn btn-danger btn-raised px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer grey darken-1\">\r\n                        <div class=\"text-center mb-1\">Forgot Password? <a (click)=\"onForgotPassword()\"><b>Reset</b></a></div>\r\n                        <div class=\"text-center\">Don't have an account? <a (click)=\"onRegister()\"><b>Signup</b></a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/login/login-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/login/login-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/login/login-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/login/login-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit button click    
    LoginPageComponent.prototype.onSubmit = function () {
        this.loginForm.reset();
    };
    // On Forgot password link click
    LoginPageComponent.prototype.onForgotPassword = function () {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    };
    // On registration link click
    LoginPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginPageComponent.prototype, "loginForm", void 0);
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/pages/content-pages/login/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/components/pages/content-pages/login/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/maintenance/maintenance-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Under Maintenance Starts-->\r\n<section id=\"maintenance\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-3 box-shadow-2\">\r\n                    <div class=\"card-header text-center\">\r\n                        <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Under Maintenance</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <span class=\"card-title text-center\">\r\n                                <img alt=\"avtar\" class=\"img-fluid mx-auto d-block pt-2 mb-1\" src=\"assets/img/logos/logo-color-big.png\" width=\"100\">\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"card-block text-center\">\r\n                            <h3>This page is under maintenance</h3>\r\n                            <p>We're sorry for the inconvenience.\r\n                                <br> Please come back later.</p>\r\n                            <div class=\"mt-2\"><i class=\"fa fa-cog spinner font-large-2\"></i></div>\r\n                        </div>\r\n                        <hr>\r\n                        <p class=\"socialIcon card-text text-center pt-2 pb-2\">\r\n                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\">\r\n                                <span class=\"fa fa-linkedin font-medium-4\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\">\r\n                                <span class=\"fa fa-github font-medium-4\"></span>\r\n                            </a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Under Maintenance Starts-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/maintenance/maintenance-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9tYWludGVuYW5jZS9tYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MaintenancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageComponent", function() { return MaintenancePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance-page',
            template: __webpack_require__(/*! ./maintenance-page.component.html */ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-page.component.scss */ "./src/app/components/pages/content-pages/maintenance/maintenance-page.component.scss")]
        })
    ], MaintenancePageComponent);
    return MaintenancePageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/content-pages/register/register-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/register/register-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Registration Page Starts-->\r\n<section id=\"regestration\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center gradient-aqua-marine\">\r\n                <div class=\"card p-4 box-shadow-2\">\r\n                    <div class=\"card-header text-center\">\r\n                        <img src=\"assets/img/logos/logo-color-big.png\" alt=\"company-logo\" class=\"mb-3\" width=\"80\">\r\n                        <h4 class=\"text-uppercase text-bold-400 grey darken-1\">Signup</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block mx-auto\">\r\n                            <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"fname\" id=\"fname\" placeholder=\"First Name\" ngModel required >\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"text\" class=\"form-control form-control-lg\" name=\"lname\" id=\"lname\" placeholder=\"Last Name\" ngModel required >\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"email\" class=\"form-control form-control-lg\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email\" ngModel required email >\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"password\" class=\"form-control form-control-lg\" name=\"inputPass\" id=\"inputPass\" placeholder=\"Password\" ngModel required >\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-offset-1\">\r\n                                    <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"terms\">\r\n                                        <label class=\"custom-control-label pl-2\" for=\"terms\">I agree <a>terms and conditions</a></label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group text-center\">\r\n                                    <button type=\"button\" class=\"btn btn-danger btn-raised px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0\" [disabled]=\"!f.valid\">Get Started</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Registration Page Ends-->"

/***/ }),

/***/ "./src/app/components/pages/content-pages/register/register-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/register/register-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGVudC1wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/content-pages/register/register-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/pages/content-pages/register/register-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    //  On submit click, reset field value
    RegisterPageComponent.prototype.onSubmit = function () {
        this.registerForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterPageComponent.prototype, "registerForm", void 0);
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/components/pages/content-pages/register/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/components/pages/content-pages/register/register-page.component.scss")]
        })
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-pages-content-pages-content-pages-module.js.map