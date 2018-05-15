(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <br/>\n    <br/>\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [{ path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);\r\nfigure.snip0013 {\r\n  position: relative;\r\n  float: left;\r\n  overflow: hidden;\r\n  margin: 10px 1%;\r\n  min-width: 220px;\r\n  max-width: 310px;\r\n  max-height: 220px;\r\n  width: 100%;\r\n  background: #000000;\r\n  text-align: center;\r\n}\r\nfigure.snip0013 img {\r\n  max-width: 100%;\r\n  opacity: 1;\r\n  transition: opacity 0.35s;\r\n}\r\nfigure.snip0013 > div {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\nfigure.snip0013 > div a {\r\n  color: #ffffff;\r\n}\r\nfigure.snip0013 > div a i {\r\n  font-size: 50px;\r\n  opacity: 0;\r\n  top: 50%;\r\n  position: relative;\r\n  -webkit-transform: translate3d(0, -50%, 0);\r\n  transform: translate3d(0, -50%, 0);\r\n  transition-delay: 0s;\r\n  display: inline-block;\r\n}\r\nfigure.snip0013 > div a i.left-icon {\r\n  -webkit-transform: translate3d(0, -50%, 0);\r\n  transform: translate3d(0, -50%, 0);\r\n}\r\nfigure.snip0013 > div a i.right-icon {\r\n  -webkit-transform: translate3d(0, -50%, 0);\r\n  transform: translate3d(0, -50%, 0);\r\n}\r\nfigure.snip0013 > div::before {\r\n  position: absolute;\r\n  top: 30px;\r\n  right: 50%;\r\n  bottom: 30px;\r\n  left: 50%;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.8);\r\n  border-right: 1px solid rgba(255, 255, 255, 0.8);\r\n  content: '';\r\n  opacity: 0;\r\n  background-color: #ffffff;\r\n  transition: all 0.4s;\r\n  transition-delay: 0.3s;\r\n}\r\n.overlay{\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color:rgba(255, 255, 255, 0);;\r\n}\r\nfigure.snip0013:hover img {\r\n  opacity: 0.35;\r\n}\r\nfigure.snip0013:hover .overlay {\r\n    opacity: 0.7;\r\n  }\r\nfigure.snip0013:hover > div i {\r\n  opacity: 0.9;\r\n  transition: 0.3s ease-in-out;\r\n  transition-delay: 0.3s;\r\n}\r\nfigure.snip0013:hover > div i.left-icon {\r\n  -webkit-transform: translate3d(-25%, -50%, 0);\r\n  transform: translate3d(-25%, -50%, 0);\r\n}\r\nfigure.snip0013:hover > div i.right-icon {\r\n  -webkit-transform: translate3d(25%, -50%, 0);\r\n  transform: translate3d(25%, -50%, 0);\r\n}\r\nfigure.snip0013:hover > div::before {\r\n  background: rgba(255, 255, 255, 0);\r\n  left: 30px;\r\n  right: 30px;\r\n  opacity: 1;\r\n  transition-delay: 0s;\r\n}\r\n.text {\r\n    color: white;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br/>\n<br/>\n<h2 class=\"page-header\" align =\"center\">Dashboard</h2>\n<h4 align=\"center\"> Welcome to the Indian Monuments Gallery</h4>\n<div align=\"center\" >\n<button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectedIndia()\" style=\" width: 100px;\" >India</button>\n<button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectedUS()\" style=\"margin-left: 20px; width: 100px;\">US</button>\n</div>\n<div *ngIf=\"selectedIndex()\">\n    <figure class=\"snip0013\">\n      <a href=\"https://www.google.com/maps/place/Taj+Mahal/@27.1733702,78.0420624,3a,75y,10.31h,105.6t/data=!3m8!1e1!3m6!1sAF1QipMSG0j4vDKFQkiHOwaKuCNk-elf8R8iAeVYX_kY!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMSG0j4vDKFQkiHOwaKuCNk-elf8R8iAeVYX_kY%3Dw203-h100-k-no-pi-15.036458-ya359.67188-ro-0-fo100!7i8704!8i4352!4m5!3m4!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1750151!4d78.0421552\">\n       <i> <img  width=\"300\" height=\"200\" src=\"../../../assets/images/taj mahal.jpeg\" alt=\"taj mahal\"/>\n        <div class=\"overlay\">\n          <div class=\"text\">Taj Mahal</div>\n        </div>\n      </i>\t\t\t\n      </a>\n      </figure>\n  \n      <figure class=\"snip0013\">\n        <a href=\"https://www.google.com/maps/place/Harmandir+Sahib/@31.6207863,74.8761369,3a,75y,182.48h,93.27t/data=!3m8!1e1!3m6!1sAF1QipNY5DYUBK4J4KyorlT8fy9a9qqNAPe_ygIRnEZy!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNY5DYUBK4J4KyorlT8fy9a9qqNAPe_ygIRnEZy%3Dw203-h100-k-no-pi-2.9999962-ya95.50001-ro-0-fo100!7i8704!8i4352!4m5!3m4!1s0x0:0x604384897626248e!8m2!3d31.6199803!4d74.8764849\">\n        <i>\t\t\n        <img  width=\"300\" height=\"200\" src=\"../../../assets/images/golden temple.jpg\" alt=\"golden temple\"/>\n          <div class=\"overlay\">\n            <div class=\"text\"> Golden Temple</div>\n          </div>\t\t\t\n        </i>\t\t\n      </a>\n        </figure>  \n        <figure class=\"snip0013\">\n          <a href=\"https://www.google.com/maps/uv?hl=en&pb=!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4s/maps/place/red%2Bfort/@28.6559308,77.23832,3a,75y,73.13h,90t/data%3D*213m4*211e1*213m2*211sc4oMdNuGcsiuqC90w5l0_Q*212e0*214m2*213m1*211s0x390cfce26ec085ef:0x441e32f4fa5002fb!5sred+fort+-+Google+Search&imagekey=!1e2!2sc4oMdNuGcsiuqC90w5l0_Q&sa=X&ved=0ahUKEwi0kPmsp-_aAhVM21MKHXc7CCQQpx8I8wEwGQ\">\n          <i>\t\t\n          <img  width=\"300\" height=\"200\" src=\"../../../assets/images/red fort.jpg\" alt=\"red fort\"/>\n            <div class=\"overlay\">\n              <div class=\"text\">Red Fort</div>\n            </div>\n          </i>\t\t\n        </a>\t\t\t\n          </figure>    \n          \n          <figure class=\"snip0013\">\n              <a href=\"https://www.google.com/maps/place/Lotus+Temple/@28.5539743,77.2587116,3a,75y,189.94h,104.68t/data=!3m8!1e1!3m6!1sAF1QipPuhfW7kP66wbMdeR3SuTmhgG7DPG0xu_pATiDf!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPuhfW7kP66wbMdeR3SuTmhgG7DPG0xu_pATiDf%3Dw203-h100-k-no-pi-2.9338646-ya347.88422-ro0-fo100!7i8000!8i4000!4m5!3m4!1s0x0:0x653beb1ee85ec67a!8m2!3d28.553492!4d77.2588264\">\n              <i>\t\t\n              <img  width=\"300\" height=\"200\" src=\"../../../assets/images/lotus temple.jpg\" alt=\"lotus temple\"/>\n              <div class=\"overlay\">\n                <div class=\"text\">Lotus Temple</div>\n              </div>\t\n            </i>\t\t\n          </a>\t\t\n            </figure>\n\n            <figure class=\"snip0013\">\n                <a href=\"https://www.google.com/maps/place/Sanchi+Stupa/@23.4801656,77.7401483,3a,75y,26.18h,97.4t/data=!3m8!1e1!3m6!1sAF1QipN5g1or8iPhLezA82758MizszBxM5QLlhktpFQT!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN5g1or8iPhLezA82758MizszBxM5QLlhktpFQT%3Dw203-h100-k-no-pi-0-ya345.5-ro-0-fo100!7i9728!8i4864!4m5!3m4!1s0x397c0ff7481b1191:0x9ebd3713a36096b2!8m2!3d23.4793743!4d77.7396681\">\n                <i>\t\t\n                <img  width=\"300\" height=\"200\" src=\"../../../assets/images/sanchi stupa.jpg\" alt=\"sanchi stupa\"/>\n                <div class=\"overlay\">\n                  <div class=\"text\">Sanchi Stupa</div>\n                </div>\t\n              </i>\t\t\n            </a>\t\t\n              </figure>    \n\n              <figure class=\"snip0013\">\n                  <a href=\"https://www.google.com/maps/place/Qutub+Minar/@28.5248502,77.1855282,3a,75y,196.76h,118.23t/data=!3m6!1e1!3m4!1sDcUS0rqPmqODq6-kC9OMtQ!2e0!7i13312!8i6656!4m8!1m2!2m1!1s+qutub+minar!3m4!1s0x390d1e0667819b4f:0x834995f160759db8!8m2!3d28.5244281!4d77.1854559\">\n                  <i>\t\t\n                  <img  width=\"300\" height=\"200\" src=\"../../../assets/images/qutub-minar.jpg\" alt=\"qutub minar\"/>\n                  <div class=\"overlay\">\n                    <div class=\"text\">Qutub Minar</div>\n                  </div>\n                </i>\t\t\n              </a>\t\t\t\n                </figure>\n\n                <figure class=\"snip0013\">\n                    <a href=\"https://www.google.com/maps/uv?hl=en&pb=!1s0x3a19f2a097819bbf%3A0xed9983ca391e3247!2m20!8m2!1m1!1e2!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e6!2m2!1m1!1e4!2m2!1m1!1e5!3m1!7e115!4s%2Fmaps%2Fplace%2Fkonark%2Btemple%2F%4019.887546%2C86.0947922%2C3a%2C75y%2C253.21h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sxsiCTMqHG6mOgH6Q09AMlw*212e0*214m2*213m1*211s0x3a19f2a097819bbf%3A0xed9983ca391e3247!5skonark%20temple%20-%20Google%20Search&imagekey=!1e10!2sAF1QipO7T_gAVL1EnKdgxt9anuaLQbXqG4E1C91Yt_dy&sa=X&ved=0ahUKEwir9ZWZqO_aAhVSzFMKHfpLDxkQpx8I4gEwDg&activetab=panorama\">\n                    <i>\t\t\n                    <img  width=\"300\" height=\"200\" src=\"../../../assets/images/konark temple.JPG\" alt=\"Konark temple\"/>\n                    <div class=\"overlay\">\n                      <div class=\"text\">Konark Temple</div>\n                    </div>\n                  </i>\t\t\n                </a>\t\t\t\n                  </figure>\n                  <figure class=\"snip0013\">\n                      <a href=\"https://www.google.com/maps/place/India+Gate/@28.6128659,77.2292764,3a,75y,63.26h,121.97t/data=!3m8!1e1!3m6!1sAF1QipMUtCL-Qx63p0a_U3y3dQnrhCtrev8wMmreNKJJ!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMUtCL-Qx63p0a_U3y3dQnrhCtrev8wMmreNKJJ%3Dw203-h100-k-no-pi-30.000002-ya353.6875-ro-0-fo100!7i8704!8i4352!4m5!3m4!1s0x0:0x717971125923e5d!8m2!3d28.612912!4d77.2295097\">\n                      <i>\t\t\n                      <img  width=\"300\" height=\"200\" src=\"../../../assets/images/india gate.jpg\" alt=\"India gate\"/>\n                      <div class=\"overlay\">\n                        <div class=\"text\">India gate</div>\n                      </div>\t\n                    </i>\t\t\n                  </a>\t\t\n                    </figure>\n\n                    <figure class=\"snip0013\">\n                        <a href=\"https://www.google.com/maps/place/Hawa+Mahal/@26.9237989,75.8270228,3a,75y,277.59h,129.84t/data=!3m8!1e1!3m6!1sAF1QipOwHIxqM7tG7NPmv1YHsd2xLWuChfEr6o9AbnN5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOwHIxqM7tG7NPmv1YHsd2xLWuChfEr6o9AbnN5%3Dw234-h106-k-no-pi-24.40625-ya65.28126-ro-0-fo100!7i9728!8i4860!4m5!3m4!1s0x396db14b1bd30ba5:0x860e5d531eccb20c!8m2!3d26.9239363!4d75.8267438\">\n                        <i>\t\t\n                        <img  width=\"300\" height=\"200\" src=\"../../../assets/images/hawa-mahal.png\" alt=\"Hawa Mahal\"/>\n                        <div class=\"overlay\">\n                          <div class=\"text\">Hawa Mahal</div>\n                        </div>\t\t\n                      </i>\t\t\n                    </a>\t\n                      </figure>\n                      \n  </div>\n  <div *ngIf=\"!selectedIndex()\">\n      <figure class=\"snip0013\">\n          <a href=\"https://www.google.com/maps/place/Statue+of+Liberty+National+Monument/@40.6885701,-74.0444824,3a,51.6y,8.95h,122.56t/data=!3m8!1e1!3m6!1sAF1QipOx80X0hnQkUHcpHKr8Uw7xp5HlwieuigAAW-NI!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOx80X0hnQkUHcpHKr8Uw7xp5HlwieuigAAW-NI%3Dw203-h100-k-no-pi-30.000002-ya358.79688-ro-0-fo100!7i8704!8i4352!4m5!3m4!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004\">\n          <i>\t\t\n          <img  width=\"300\" height=\"200\" src=\"../../../assets/images/statue of liberty.jpg\" alt=\"Statue of Liberty\"/>\n          <div class=\"overlay\">\n            <div class=\"text\">Statue of Liberty</div>\n          </div>\t\t\n        </i>\t\t\n      </a>\t\n        </figure>\n        <figure class=\"snip0013\">\n            <a href=\"https://www.google.com/maps/place/Mount+Rushmore+National+Memorial/@43.8771935,-103.4559402,3a,21.5y,294.54h,106.3t/data=!3m8!1e1!3m6!1sAF1QipOFxAY9wqVLnId9EsiFV7j_x9YuceVOF8kHmwmR!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOFxAY9wqVLnId9EsiFV7j_x9YuceVOF8kHmwmR%3Dw203-h100-k-no-pi-2.9999962-ya69.50002-ro-0-fo100!7i10240!8i5120!4m5!3m4!1s0x0:0xdaf53dbe055cc641!8m2!3d43.8791025!4d-103.4590667\">\n            <i>\t\t\n            <img  width=\"300\" height=\"200\" src=\"../../../assets/images/presidents.jpeg\" alt=\"presidents\"/>\n            <div class=\"overlay\">\n              <div class=\"text\">Mount Rushmore National Memorial</div>\n            </div>\t\t\n          </i>\t\t\n        </a>\t\n          </figure> \n          <figure class=\"snip0013\">\n              <a href=\"https://www.google.com/maps/place/Washington+Monument/@38.8901488,-77.035619,2a,75y,163.15h,124.12t/data=!3m6!1e1!3m4!1sQYrdTfftLaB1kJ2Tq55w_w!2e0!7i13312!8i6656!4m5!3m4!1s0x89b7b7a1be0c2e7f:0xe97346828ed0bfb8!8m2!3d38.8894838!4d-77.0352791\">\n              <i>\t\t\n              <img  width=\"300\" height=\"200\" src=\"../../../assets/images/washington.jpg\" alt=\"Washington\"/>\n              <div class=\"overlay\">\n                <div class=\"text\">Washington Monument</div>\n              </div>\t\t\n            </i>\t\t\n          </a>\t\n            </figure>\n            <figure class=\"snip0013\">\n                <a href=\"https://www.google.com/maps/place/U.S.S+Arizona+Memorial+at+Bolin+Memorial+Park/@33.4481149,-112.0933457,3a,75y,163.5h,90t/data=!3m8!1e1!3m6!1sAF1QipO7Ki2MuUlYAiEDGpzqlwXVAsESsGhhm3iKROj7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO7Ki2MuUlYAiEDGpzqlwXVAsESsGhhm3iKROj7%3Dw203-h100-k-no-pi-0-ya163.5-ro-0-fo100!7i6912!8i3456!4m5!3m4!1s0x872b122d1fd98609:0x40af3b480cd8b775!8m2!3d33.448146!4d-112.0937086\">\n                <i>\t\t\n                <img  width=\"300\" height=\"200\" src=\"../../../assets/images/uss arizona.JPG\" alt=\"USS arizona\"/>\n                <div class=\"overlay\">\n                  <div class=\"text\">USS Arizona Memorial</div>\n                </div>\t\t\n              </i>\t\t\n            </a>\t\n              </figure>\n          <figure class=\"snip0013\">\n              <a href=\"https://www.google.com/maps/place/Independence+National+Historical+Park/@39.949188,-75.149901,2a,75y,202.48h,99.94t/data=!3m6!1e1!3m4!1s25KxldKxccc_RBW40A4iPw!2e0!7i13312!8i6656!4m5!3m4!1s0x0:0x8647809a3e710321!8m2!3d39.9495312!4d-75.1497319\">\n              <i>\t\t\n              <img  width=\"300\" height=\"200\" src=\"../../../assets/images/national historical.jpg\" alt=\"National Historical\"/>\n              <div class=\"overlay\">\n                <div class=\"text\">Independence National Historical Park</div>\n              </div>\t\t\n            </i>\t\t\n          </a>\t\n            </figure>\n            <figure class=\"snip0013\">\n                <a href=\"https://www.google.com/maps/place/Empire+State+Building/@40.7480477,-73.9848401,3a,75y,123.4h,142.42t/data=!3m8!1e1!3m6!1sAF1QipNfV6NPQBtXwjUzL_d0wN8k01cnQ3vawSZBo9vD!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNfV6NPQBtXwjUzL_d0wN8k01cnQ3vawSZBo9vD%3Dw129-h106-k-no-pi-30.000002-ya120.364586-ro-0-fo100!7i8192!8i4096!4m5!3m4!1s0x0:0xd134e199a405a163!8m2!3d40.7484405!4d-73.9856644\">\n                <i>\t\t\n                <img  width=\"300\" height=\"200\" src=\"../../../assets/images/empire state.jpg\" alt=\"Empire State\"/>\n                <div class=\"overlay\">\n                  <div class=\"text\">Empire State Building</div>\n                </div>\t\t\n              </i>\t\t\n  \n              </a>\t\n              </figure>\n              <figure class=\"snip0013\">\n                  <a href=\"https://www.google.com/maps/place/Thomas+Jefferson+Memorial/@38.8808885,-77.0365108,3a,75y,352.93h,90t/data=!3m7!1e1!3m5!1sXUwVlH2t-EE_iV6hDVlVIA!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DXUwVlH2t-EE_iV6hDVlVIA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D129%26h%3D106%26yaw%3D352.9271%26pitch%3D-24.479166%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x89b7b70b9e9c68bb:0x44137d74ec09872!8m2!3d38.8813959!4d-77.0364569\">\n                  <i>\t\t\n                  <img  width=\"300\" height=\"200\" src=\"../../../assets/images/Thomas jefferson.jpg\" alt=\"Thomas Jefferson\"/>\n                  <div class=\"overlay\">\n                    <div class=\"text\">Thomas Jefferson Memorial</div>\n                  </div>\n                </i>\t\t\n                  </a>\t\n                </figure>\n                <figure class=\"snip0013\">\n                    <a href=\"https://www.google.com/maps/place/The+White+House/@38.8973976,-77.0365475,2a,75y,350.46h,107.48t/data=!3m7!1e1!3m5!1s5HPwmB_iGeihN09SMZQI_A!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3D5HPwmB_iGeihN09SMZQI_A%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D129%26h%3D106%26yaw%3D349.5%26pitch%3D-2.9338646%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x89b7b7bcdecbb1df:0x715969d86d0b76bf!8m2!3d38.8976763!4d-77.0365298\">\n                    <i><img  width=\"300\" height=\"200\" src=\"../../../assets/images/white.jpg\" alt=\"White house\"/>\n                    <div class=\"overlay\">\n                      <div class=\"text\">White House</div>\n                    </div>\t\n                  </i>\t\n                    </a>\t\n                  </figure>\n                  <figure class=\"snip0013\">\n                      <a href=\"https://www.google.com/maps/place/Lincoln+Memorial/@38.8892016,-77.0495707,3a,75y,251.09h,103.99t/data=!3m6!1e1!3m4!1spxf7HmK9XLL_JRFk-c5n_w!2e0!7i13312!8i6656!4m5!3m4!1s0x89b7b771e0906287:0x1049d1c9c95c2eb6!8m2!3d38.8892686!4d-77.050176\">\n                      <i><img  width=\"300\" height=\"200\" src=\"../../../assets/images/lincoln.JPG\" alt=\"Lincoln\"/>\n                      <div class=\"overlay\">\n                        <div class=\"text\">Lincoln Memorial</div>\n                      </div></i>\t\t\n                      </a>\t\n                    </figure>\n                 \n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.title = 'dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.selectedIndia = function () {
        this.index = 'India';
    };
    DashboardComponent.prototype.selectedUS = function () {
        this.index = 'US';
    };
    DashboardComponent.prototype.selectedIndex = function () {
        if (this.index == 'India') {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Image Gallery</h1>\n    <br/><br/>\n    <img src=\"../../../assets/images/namaste.jpg\" alt=\"no image\" width=\"100\" height=\"100\">\n    \n    <br/><br/><br/>\n    <p class=\"lead\"> To view the images you can register and login. </p>\n    <div>\n      <a class=\"btn btn-info\" style=\"width: 100px\" routerLink=\"/register\">Register</a> <a class=\"btn btn-secondary\" routerLink=\"/login\" style=\"margin-left:20px; width:100px;\">Login</a>\n    </div>\n  </div>\n\n  "

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
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
    function LoginComponent(authservice, router, flashmessageservice) {
        this.authservice = authservice;
        this.router = router;
        this.flashmessageservice = flashmessageservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authservice.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authservice.storeUserData(data.token, data.user);
                _this.flashmessageservice.show('Hello user, you are authenticated', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashmessageservice.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark \">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\" navbar-brand\" routerLink=\"/\"><h4>Image Gallery </h4></a>\n        </div>\n\n        <ul  class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  class=\"nav-link\" routerLink=\"/\"><h5>Home</h5></a></li>\n\n </ul>\n <ul class=\"navbar-nav navbar-right\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  *ngIf=\"authservice.isloggedIn()\"  class=\"nav-link\" routerLink=\"/dashboard\"><h5>Dashboard</h5></a></li>\n    <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  *ngIf=\"authservice.isloggedIn()\" class=\"nav-link\" routerLink=\"/profile\"><h5>Profile</h5></a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  *ngIf=\"!authservice.isloggedIn()\"  class=\"nav-link\" routerLink=\"/login\"><h5>Login</h5></a></li>\n    <li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a *ngIf=\"!authservice.isloggedIn()\" class=\"nav-link\" routerLink=\"/register\"><h5>Register</h5></a></li>\n    <li><a (click)=\"onLogoutClick()\" class=\"nav-link\"  *ngIf=\"authservice.isloggedIn()\" ><h5>Logout</h5></a></li>\n\n    \n  </ul>\n      </div>\n    </nav>\n    \n    "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
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
    function NavbarComponent(authservice, router, flashmessageservice) {
        this.authservice = authservice;
        this.router = router;
        this.flashmessageservice = flashmessageservice;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authservice.logout();
        this.flashmessageservice.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br/>\n\n<br/>\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <br/>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n</ul>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    \n    <br/>\n    <br/>\n    \n    <h2 class=\"page-header\">Register</h2>\n    \n    <form (submit)=\"onRegisterSubmit()\" >\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\"  [(ngModel)]=\"name\" name=\"name\" class=\"form-control\"  placeholder=\"Enter Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\"  placeholder=\"Enter Username\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"  aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"  placeholder=\" Enter Password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    \n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function AuthGuard(authservice, rotuer) {
        this.authservice = authservice;
        this.rotuer = rotuer;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authservice.isloggedIn) {
            return true;
        }
        else {
            this.rotuer.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
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
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        //if the user is authenticated
        localStorage.setItem('id_token', token); //key and value
        localStorage.setItem('user', JSON.stringify(user)); //change it into string object cannot be stored
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isloggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Surabhi Maheshwari\meanauthapp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map