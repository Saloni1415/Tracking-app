function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"app\" class=\"h-100 app\" [ngClass]=\"settings.theme\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"> \r\n    <router-outlet></router-outlet> \r\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.7)\" size=\"large\" color=\"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>     \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCatalogCatalogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>catalog works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\r\n                <h1 class=\"error\">404</h1>\r\n            </div>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\r\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Search keyword</mat-label>\r\n                        <input matInput placeholder=\"Enter search keyword...\">\r\n                    </mat-form-field>\r\n                </mat-card>\r\n                <div class=\"box-footer\">\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>home</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>          \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container> \r\n\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\r\n           <mat-icon color=\"warn\">close</mat-icon>\r\n        </button>\r\n        <div class=\"divider\"></div>\r\n        <app-sidenav-menu [menuItems]=\"sidenavMenuItems\" [menuParentId]=\"0\"></app-sidenav-menu>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"text-center py-2\">                   \r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n            </svg>\r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n            </svg>\r\n            <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n            </svg>\r\n        </div> \r\n    </mat-sidenav>\r\n\r\n\r\n    <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"top-toolbar theme-container\">\r\n            <span fxHide=\"false\" fxHide.gt-sm>\r\n                <button mat-button (click)=\"sidenav.toggle()\" class=\"sidenav-toggle\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button> \r\n            </span>\r\n            <span fxShow=\"false\" fxShow.gt-xs fxLayoutAlign=\"center center\"><mat-icon class=\"mat-icon-sm\">call</mat-icon>  Hotline: (+100) 123 456 7890 </span>\r\n            <span fxShow=\"false\" fxShow.gt-sm>Welcome to our market!</span>\r\n            <app-top-menu></app-top-menu>       \r\n        </mat-toolbar-row>\r\n        <mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"logo-toolbar theme-container\">\r\n            \r\n            <div fxFlex=\"20\">\r\n                <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">Emporium</a>\r\n            </div>\r\n            <div fxFlex fxShow=\"false\" fxShow.gt-sm>\r\n                <form method=\"get\"  class=\"search-form\" fxLayout=\"row\">\r\n                    <button mat-raised-button [matMenuTriggerFor]=\"categoriesMenu\" #categoriesMenuTrigger=\"matMenuTrigger\" type=\"button\" class=\"mat-elevation-z0 categories text-truncate text-muted\">{{category?.name}}<mat-icon>arrow_drop_down</mat-icon></button>\r\n                    <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n                        <span (mouseleave)=\"categoriesMenuTrigger.closeMenu()\">\r\n                            <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"changeCategory($event)\"></app-category-list>\r\n                        </span>\r\n                    </mat-menu>\r\n                    <input type=\"text\" placeholder=\"Type to search...\" fxFlex>\r\n                    <button mat-mini-fab (click)=\"search()\" type=\"button\" class=\"search-btn mat-elevation-z0 text-muted\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button> \r\n                </form>\r\n            </div>  \r\n            <div fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"end center\">   \r\n                <div fxLayoutAlign=\"center center\" [@.disabled]=\"true\">\r\n                    <button mat-button [matMenuTriggerFor]=\"cartMenu\" #cartMenuTrigger=\"matMenuTrigger\" class=\"flex-row-button\">\r\n                        <mat-icon class=\"mat-icon-lg\">shopping_cart</mat-icon>\r\n                        <span *ngIf=\"appService.Data.totalCartCount > 0\" class=\"cart-items-count\">{{appService.Data.totalCartCount}}</span>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-xs class=\"top-cart\">\r\n                            <span>Shopping Cart</span>\r\n                            <span *ngIf=\"appService.Data.totalCartCount > 0\">\r\n                                <bdi>{{appService.Data.totalCartCount}} item<span *ngIf=\"appService.Data.totalCartCount > 1\">s</span> - \r\n                                    $<span>{{appService.Data.totalPrice | number : '1.2-2'}}</span>\r\n                                </bdi>\r\n                            </span>\r\n                        </div>\r\n                        <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon>\r\n                    </button>\r\n                    <mat-menu #cartMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"top-menu-dropdown cart-dropdown\">\r\n                        <ng-template matMenuContent>\r\n                            <span (mouseleave)=\"cartMenuTrigger.closeMenu()\" class=\"d-block\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                                    <b><span>{{appService.Data.totalCartCount}} ITEM<span *ngIf=\"appService.Data.totalCartCount > 1\">S</span></span></b>\r\n                                    <b><a [routerLink]=\"['/cart']\" class=\"text-muted\">VIEW CART</a></b>\r\n                                </div>\r\n                                <div class=\"divider mt-1\"></div>\r\n                                <div *ngIf=\"appService.Data.totalCartCount == 0\" class=\"py-1 text-muted text-center\">You have no items in your shopping cart.</div>\r\n                                <mat-list>\r\n                                    <mat-list-item *ngFor=\"let product of appService.Data.cartList\">                                   \r\n                                        <h3 matLine class=\"text-muted\"> {{product.name}} </h3>\r\n                                        <p matLine class=\"text-muted\">\r\n                                            <bdi>{{product.cartCount}} x ${{product.newPrice | number : '1.2-2'}}</bdi>\r\n                                        </p>\r\n                                        <img  [src]=\"product.images[0].small\" alt=\"image\">\r\n                                        <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(product);stopClickPropagate($event)\" matTooltip=\"Remove\" matTooltipPosition=\"before\">\r\n                                            <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n                                        </button>\r\n                                    </mat-list-item>\r\n                                </mat-list>\r\n                                <div *ngIf=\"appService.Data.cartList.length > 0\" class=\"cart-dropdown-footer\">\r\n                                    <div class=\"divider mt-1\"></div>\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-1\">\r\n                                        <b>TOTAL:</b>\r\n                                        <b class=\"new-price\">${{appService.Data.totalPrice | number : '1.2-2'}}</b>\r\n                                    </div>\r\n                                    <div class=\"divider mt-1\"></div>\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-1\">\r\n                                        <button mat-mini-fab color=\"warn\" (click)=\"clear();stopClickPropagate($event)\" matTooltip=\"Clear All\" matTooltipPosition=\"after\">\r\n                                            <mat-icon>remove_shopping_cart</mat-icon>\r\n                                        </button>\r\n                                        <a [routerLink]=\"['/checkout']\" mat-mini-fab color=\"primary\" matTooltip=\"Checkout\" matTooltipPosition=\"before\">\r\n                                            <mat-icon>check</mat-icon>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </ng-template>\r\n                    </mat-menu>\r\n                </div> \r\n                <div fxLayoutAlign=\"center center\" fxHide=\"false\" fxHide.gt-sm [@.disabled]=\"true\"> \r\n                    <button mat-icon-button [matMenuTriggerFor]=\"searchMenu\" #searchMenuTrigger=\"matMenuTrigger\" class=\"search-toggle-btn\">\r\n                        <mat-icon class=\"mat-icon-lg\">search</mat-icon>\r\n                    </button>\r\n                    <mat-menu #searchMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"search-dropdown mat-elevation-z8\">\r\n                        <ng-template matMenuContent>\r\n                            <form method=\"get\" fxFlex class=\"search-form\">\r\n                                <button mat-raised-button [matMenuTriggerFor]=\"categories2Menu\" #categories2MenuTrigger=\"matMenuTrigger\" type=\"button\" class=\"mat-elevation-z0 categories text-muted\" (click)=\"stopClickPropagate($event)\">{{category?.name}}<mat-icon>arrow_drop_down</mat-icon></button>\r\n                                <mat-menu #categories2Menu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n                                    <ng-template matMenuContent>\r\n                                        <span (mouseleave)=\"categories2MenuTrigger.closeMenu()\">\r\n                                            <app-category-list [categories]=\"categories\" [categoryParentId]=\"0\" (change)=\"changeCategory($event)\"></app-category-list>\r\n                                        </span>\r\n                                    </ng-template>\r\n                                </mat-menu>\r\n                                <input type=\"text\" placeholder=\"Type to search...\" fxFlex (click)=\"stopClickPropagate($event)\">\r\n                                <button mat-mini-fab (click)=\"search()\" type=\"button\" class=\"search-btn mat-elevation-z0 text-muted\">\r\n                                    <mat-icon>search</mat-icon>\r\n                                </button> \r\n                            </form>\r\n                        </ng-template>\r\n                    </mat-menu>\r\n                </div> \r\n            </div> \r\n        </mat-toolbar-row>\r\n    </mat-toolbar> \r\n\r\n\r\n \r\n    <app-menu fxShow=\"false\" fxShow.gt-sm></app-menu>  \r\n\r\n    \r\n    <div class=\"theme-container main\"> \r\n        <app-breadcrumb></app-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n\r\n    <app-options></app-options>\r\n\r\n    <app-footer></app-footer>\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition\" (click)=\"scrollToTop()\">\r\n        <mat-icon>arrow_upward</mat-icon>\r\n    </div>\r\n\r\n\r\n </mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/banners/banners.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/banners/banners.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBannersBannersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n        <div class=\"banner\" fxFlex=\"50\" fxFlex.gt-sm=\"67\" [ngStyle]=\"getBgImage(0)\">\r\n            <div class=\"info\" fxLayoutAlign=\"start start\">\r\n                <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <h1 class=\"title\">{{getBanner(0).title}}</h1>\r\n                    <h3 class=\"subtitle\">{{getBanner(0).subtitle}}</h3>\r\n                    <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                </div> \r\n            </div> \r\n        </div>\r\n        <div fxLayout=\"row\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                <div class=\"info\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(1).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(1).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div> \r\n                </div> \r\n            </div>\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                <div class=\"info\" fxFlex fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(2).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(2).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div> \r\n                </div> \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n        <div fxLayout=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(3)\">\r\n                <div class=\"info\" fxLayoutAlign=\"space-around center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(3).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(3).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div>                    \r\n                </div>\r\n            </div>\r\n            <div class=\"banner\" fxFlex [ngStyle]=\"getBgImage(4)\">\r\n                <div class=\"info\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\r\n                      <h2 class=\"title\">{{getBanner(4).title}}</h2>\r\n                      <h4 class=\"subtitle\">{{getBanner(4).subtitle}}</h4>\r\n                      <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                    </div>\r\n                </div> \r\n            </div>\r\n        </div>\r\n        <div class=\"banner\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"67\" [ngStyle]=\"getBgImage(5)\">\r\n            <div class=\"info\" fxLayout=\"column\" fxLayoutAlign=\"center end\">\r\n                <div class=\"px-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                  <h1 class=\"title\">{{getBanner(5).title}}</h1>\r\n                  <h3 class=\"subtitle\">{{getBanner(5).subtitle}}</h3>\r\n                  <a [routerLink]=\"['/products']\" mat-raised-button color=\"primary\" class=\"mt-2\">Shop now</a>\r\n                </div>\r\n            </div> \r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brands-carousel/brands-carousel.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brands-carousel/brands-carousel.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedBrandsCarouselBrandsCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"brands-carousel\"> \r\n    <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n        <a mat-button routerLink=\"/brands\">Show All Brands</a>\r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let brand of brands\" class=\"swiper-slide\">\r\n                <div class=\"p-0\">\r\n                    <a [routerLink]=\"['/brands', brand.name]\" class=\"brand-item\">\r\n                        <img [attr.data-src]=\"brand.image\" class=\"swiper-lazy\">\r\n                    </a>\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/category-list/category-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/category-list/category-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCategoryListCategoryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let category of mainCategories\">\r\n    <button mat-menu-item (click)=\"changeCategory($event)\">\r\n        <span>{{category.name}}</span>\r\n    </button>\r\n     <div *ngIf=\"category.hasSubCategory\" class=\"sub-category\">\r\n        <app-category-list [categories]=\"categories\" [categoryParentId]=\"category.id\" (change)=\"changeCategory($event)\"></app-category-list>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/controls/controls.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/controls/controls.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedControlsControlsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayout.xs=\"column\" [fxLayoutAlign]=\"align\" class=\"text-muted\">\r\n    <div *ngIf=\"product?.availibilityCount > 0 && (type=='all' || type=='wish')\">\r\n        <bdi>\r\n            <span *ngIf=\"type!='wish'\" class=\"fw-500\">Quantity:</span> \r\n            <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n            <span> {{count}} </span>\r\n            <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n        </bdi>\r\n    </div>\r\n    <div *ngIf=\"type!='wish'\">\r\n        <button mat-icon-button matTooltip=\"Add to wishlist\" (click)=\"addToWishList(product)\"><mat-icon>favorite</mat-icon></button>\r\n        <button mat-icon-button matTooltip=\"Add to cart\" *ngIf=\"product?.availibilityCount > 0\" (click)=\"addToCart(product)\"><mat-icon>shopping_cart</mat-icon></button>\r\n        <button mat-icon-button matTooltip=\"Add to compare\" (click)=\"addToCompare(product)\"><mat-icon>compare</mat-icon></button>\r\n        <button *ngIf=\"type!='all'\" mat-icon-button matTooltip=\"Quick view\" (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></button>\r\n    </div>\r\n</div> \r\n<div *ngIf=\"product?.availibilityCount == 0 && type=='all'\" class=\"bg-warn p-1 mt-2\">\r\n    Sorry, this item is unavailable. Please choose a different one.\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-carousel/main-carousel.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-carousel/main-carousel.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedMainCarouselMainCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-slider\">\r\n  <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">      \r\n      <div *ngFor=\"let slide of slides\" class=\"swiper-slide\">\r\n        <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n            <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n            <div class=\"mask\"></div>  \r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"content\">\r\n              <h1>{{slide.title}}</h1>\r\n              <h3>{{slide.subtitle}}</h3>\r\n              <button mat-raised-button color=\"primary\">Shop now</button>\r\n            </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"swiper-pagination white\"></div>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedProductsCarouselProductDialogProductDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\"> \r\n            <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\">      \r\n                    <div *ngFor=\"let image of product.images\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"image.medium\" class=\"swiper-lazy\"/>\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div>\r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\"> \r\n            <h2>{{product.name}}</h2>\r\n            <div class=\"py-1 lh\">\r\n                <p><span class=\"text-muted fw-500\">Category: </span><span>{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</span></p>\r\n                <p><span class=\"text-muted fw-500\">Availibility: </span><span>{{ (product.availibilityCount > 0) ? 'In stock':'Unavailable'}}</span></p>\r\n            </div>                 \r\n            <div class=\"py-1\">\r\n                <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'row'\"></app-rating>\r\n            </div>\r\n            <p class=\"py-1 text-muted lh\">{{product.description}}</p>\r\n            <div fxLayoutAlign=\"end center\" class=\"text-muted\">                 \r\n                 <button [mat-dialog-close]=\"product\" mat-icon-button matTooltip=\"View full details\"><mat-icon>arrow_forward</mat-icon></button>               \r\n            </div>              \r\n            <div class=\"divider\"></div>\r\n            <h2 class=\"mt-2 new-price\">${{product.newPrice}}</h2>\r\n            <app-controls [product]=\"product\" [type]=\"'all'\"></app-controls>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/products-carousel.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/products-carousel.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedProductsCarouselProductsCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"products\" class=\"swiper-container\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">      \r\n        <div *ngFor=\"let product of products\" class=\"swiper-slide\">\r\n            <mat-card class=\"product-item\">\r\n                <mat-chip-list *ngIf=\"product.discount\">\r\n                    <mat-chip color=\"warn\" selected=\"true\">{{product.discount}}% OFF</mat-chip>\r\n                </mat-chip-list>\r\n                <a [routerLink]=\"['/products', product.id, product.name]\" class=\"image-link\">\r\n                    <img [attr.data-src]=\"product.images[0].medium\" class=\"swiper-lazy\"/>\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </a>\r\n                <h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     \r\n                <a [routerLink]=\"['/products', product.id, product.name]\" class=\"title text-truncate\">\r\n                    {{product.name}}\r\n                </a>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <p class=\"old-price text-muted\"><span *ngIf=\"product.oldPrice\">${{product.oldPrice | number : '1.2-2'}}</span></p>\r\n                        <p class=\"new-price\">${{product.newPrice | number : '1.2-2'}}</p>\r\n                    </div>\r\n                    <app-rating [ratingsCount]=\"product.ratingsCount\" [ratingsValue]=\"product.ratingsValue\" [direction]=\"'column'\"></app-rating>\r\n                </div>                            \r\n                <div class=\"divider mt-2\"></div>\r\n                <div class=\"icons\">\r\n                    <app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [fxLayout]=\"direction\" [fxLayoutAlign]=\"(direction == 'row') ? 'start center' : 'center end'\">    \r\n    <div class=\"ratings\">        \r\n         <mat-icon *ngFor=\"let star of stars; let i=index;\" class=\"mat-icon-xs\" (click)=\"rate(i)\">{{star}}</mat-icon>\r\n    </div>\r\n    <p class=\"ratings-count text-muted\">{{ratingsCount}} ratings</p>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb light-block\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Homepage</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\"><b>{{breadcrumb.name}}</b></span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"bg-primary footer\">\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"border-bottom-mute subscribe-block theme-container\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> \r\n            <h1 class=\"fw-500\">Subscribe our Newsletter</h1>\r\n            <h3 class=\"fw-300 secondary-color\">Stay up to date with our latest new and products</h3>\r\n        </div>\r\n        <form method=\"get\" class=\"subscribe-search-form\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"42.4\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <input type=\"text\" placeholder=\"Your email address...\" fxFlex>\r\n            <button mat-raised-button color=\"accent\" (click)=\"subscribe()\" type=\"button\" class=\"mat-elevation-z0 text-muted\">Subscribe</button>\r\n        </form>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"py-3 border-bottom-mute theme-container\">        \r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"40\"> \r\n            <h3 class=\"col-title\">USEFUL LINKS</h3>\r\n            <p class=\"mt-2\"><a href=\"javascript:void(0);\" class=\"link secondary-color\">My Account</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/contact\" class=\"link secondary-color\">Contact</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/compare\" class=\"link secondary-color\">Compare</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/wishlist\" class=\"link secondary-color\">Wishlist</a></p>\r\n            <p class=\"mt-1\"><a routerLink=\"/checkout\" class=\"link secondary-color\">Checkout</a></p>\r\n            <p class=\"mt-1\"><a href=\"javascript:void(0);\" class=\"link secondary-color\">FAQ</a></p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\" ngClass.xs=\"mt-2\" class=\"contact-information\"> \r\n            <h3 class=\"col-title\">CONTACT INFORMATION</h3>            \r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 secondary-color\">\r\n                <mat-icon>location_on</mat-icon>\r\n                <span>2903 Avenue Z, Brooklyn, NY</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon>call</mat-icon>\r\n                <span>(212) 457-2308</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon>mail_outline</mat-icon>\r\n                <span>contact@emporium.com</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon>schedule</mat-icon>\r\n                <span>Mon - Sun / 9:00AM - 8:00PM</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon>directions</mat-icon>\r\n                <a href=\"javascript:void(0);\" class=\"link secondary-color\">Get directions</a>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 secondary-color\">\r\n                <mat-icon>directions_bus</mat-icon>\r\n                <span>Routes to us</span>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\"> \r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"copyright secondary-color theme-container\">\r\n        <p ngClass.xs=\"mt-1\">Copyright © 2018 All Rights Reserved</p>\r\n        <p>Designed & Developed by <a mat-button href=\"http://themeseason.com/\" target=\"_blank\">ThemeSeason</a></p>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/menu.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/menu.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"top-navbar mat-elevation-z2\" fxLayoutAlign=\"center center\">\r\n    <a mat-button routerLink=\"/\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\r\n    <a mat-button [matMenuTriggerFor]=\"menu\" (click)=\"openMegaMenu()\">Fashion<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" class=\"mega-menu app-dropdown\">\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex=\"20\" fxLayout=\"column\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>WOMEN</b></a>\r\n                <mat-divider></mat-divider> \r\n                <a mat-menu-item routerLink=\"/\">Dresses & Skirts</a>\r\n                <a mat-menu-item routerLink=\"/\">Jackets</a>              \r\n                <a mat-menu-item routerLink=\"/\">Tops & Blouses</a>\r\n                <a mat-menu-item routerLink=\"/\">Shoes & Boots</a>\r\n                <a mat-menu-item routerLink=\"/\">Knitwear</a>                \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>MEN</b></a>\r\n                <mat-divider></mat-divider> \r\n                <button mat-menu-item>T-shirts & Polos</button>\r\n                <button mat-menu-item>Shoes & Boots</button> \r\n                <button mat-menu-item>Jeans</button> \r\n                <button mat-menu-item>Coats</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>KIDS</b></a>\r\n                <mat-divider></mat-divider> \r\n                <button mat-menu-item>Top</button>\r\n                <button mat-menu-item>Pants & Shorts</button>\r\n                <button mat-menu-item>Dresses</button> \r\n                <button mat-menu-item>Skirts</button> \r\n                <button mat-menu-item>Set & Body</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <a mat-menu-item routerLink=\"/\"><b>ACCESSORIES</b></a>\r\n                <mat-divider></mat-divider>                \r\n                <button mat-menu-item>Watches</button>  \r\n                <button mat-menu-item>Bags & Wallet</button>\r\n                <button mat-menu-item>Sunglasses</button> \r\n                <button mat-menu-item>Belts & Hats</button> \r\n            </div>\r\n            <div fxFlex=\"20\" class=\"p-1\"> \r\n                <mat-card class=\"mega-menu-widget p-0\">\r\n                    <mat-chip-list>\r\n                        <mat-chip color=\"warn\" selected=\"true\">50% OFF</mat-chip>\r\n                    </mat-chip-list>\r\n                    <button mat-raised-button color=\"primary\">Shop now</button>\r\n                    <img src=\"assets/images/others/mega_menu_img.png\" alt=\"\" class=\"w-100\"> \r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n           \r\n    </mat-menu>\r\n    \r\n    <a mat-button [routerLink]=\"['/products', 'jewellery']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Jewellery</a>\r\n    <a mat-button [routerLink]=\"['/products', 'electronics']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Electronics</a>\r\n    <a mat-button [routerLink]=\"['/products', 'sports']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Sports</a>\r\n    <a mat-button [routerLink]=\"['/products', 'motors']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Motors</a>\r\n\r\n    <a mat-button [matMenuTriggerFor]=\"animals\">Pages<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n    <mat-menu #animals=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\"> \r\n        <a mat-menu-item routerLink=\"/products\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">All products</a> \r\n        <a mat-menu-item [routerLink]=\"['/products', '2', 'PC All-in-One']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Product detail</a> \r\n        <a mat-menu-item routerLink=\"/contact\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Contact</a>  \r\n        <a mat-menu-item routerLink=\"/sign-in\">Sign in</a>       \r\n        <a mat-menu-item routerLink=\"/404\">404 Error</a>\r\n        <a mat-menu-item [matMenuTriggerFor]=\"others\">Others</a>\r\n    </mat-menu>\r\n\r\n    <mat-menu #others=\"matMenu\" class=\"app-dropdown\">\r\n        <a mat-menu-item href=\"http://themeseason.com\" target=\"_blank\">External Link</a>\r\n        <a mat-menu-item>Menu item</a>\r\n        <a mat-menu-item>Menu item</a>\r\n        <a mat-menu-item>Menu item</a>\r\n    </mat-menu>\r\n    \r\n    <a mat-button routerLink=\"/contact\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Contact</a>\r\n\r\n</mat-toolbar>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/options/options.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/options/options.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"options transition\" [ngClass]=\"{'show': showOptions}\">\r\n    <button mat-raised-button (click)=\"showOptions = !showOptions\" class=\"options-icon mat-elevation-z0\">\r\n        <mat-icon>palette</mat-icon>\r\n    </button>\r\n    <mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between center\"> \r\n        <span class=\"skin-icon green\" (click)=\"changeTheme('green')\"></span> \r\n        <span class=\"skin-icon blue\" (click)=\"changeTheme('blue')\"></span>\r\n        <span class=\"skin-icon red\" (click)=\"changeTheme('red')\"></span> \r\n        <span class=\"skin-icon pink\" (click)=\"changeTheme('pink')\"></span> \r\n        <span class=\"skin-icon purple\" (click)=\"changeTheme('purple')\"></span>\r\n        <span class=\"skin-icon grey\" (click)=\"changeTheme('grey')\"></span>  \r\n        <button mat-mini-fab color=\"warn\" (click)=\"settings.rtl = !settings.rtl\" matTooltip=\"LTR / RTL\">\r\n            <mat-icon>swap_horiz</mat-icon>\r\n        </button>     \r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsSidenavMenuSidenavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-sidenav-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-sidenav-menu>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/top-menu/top-menu.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/top-menu/top-menu.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsTopMenuTopMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top-menu\">    \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n        {{currency}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n                <span>{{cur}}</span>\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n        <img [src]=\"flag.image\" width=\"18\">\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"flag-menu-title\">{{flag.name}}</span>\r\n        <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n        <span (mouseleave)=\"langMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n                <img [src]=\"flag.image\" width=\"18\"> {{flag.name}}\r\n            </button>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <span fxShow=\"false\" fxShow.gt-sm>\r\n        <a mat-button routerLink=\"/compare\">Compare <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.compareList.length}})</a>\r\n        <a mat-button routerLink=\"/wishlist\">Wishlist <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.wishList.length}})</a>\r\n    </span>  \r\n\r\n    <a mat-button [matMenuTriggerFor]=\"accountMenu\" #accountMenuTrigger=\"matMenuTrigger\">\r\n        <mat-icon class=\"mat-icon-sm account-icon\">person</mat-icon> <span fxShow=\"false\" fxShow.gt-sm>account</span> <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n    </a>\r\n    <mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown account\">\r\n        <span (mouseleave)=\"accountMenuTrigger.closeMenu()\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">                   \r\n                <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\r\n                <p>Emilio Verdines <br> <small>emilio_v <span *ngIf=\"settings.rtl\">&rlm;</span>(152<mat-icon class=\"mat-icon-xs\">star</mat-icon>)</small></p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/account\"> \r\n                <mat-icon class=\"mat-icon-sm\">settings</mat-icon>\r\n                <span>Account Settings</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/compare\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">compare</mat-icon>\r\n                <span>Compare <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.compareList.length}})</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/wishlist\" fxHide=\"false\" fxHide.gt-sm>\r\n                <mat-icon class=\"mat-icon-sm\">favorite</mat-icon>\r\n                <span>Wishlist <span *ngIf=\"settings.rtl\">&rlm;</span>({{appService.Data.wishList.length}})</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\r\n                <span>Lock screen</span> \r\n            </a>\r\n            <a mat-menu-item routerLink=\"/\"> \r\n                <mat-icon class=\"mat-icon-sm\">help</mat-icon>\r\n                <span>Help</span> \r\n            </a>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item routerLink=\"/sign-in\"> \r\n                <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n                <span>Sign Out</span> \r\n            </a>\r\n        </span>\r\n    </mat-menu>    \r\n\r\n</div>  ";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appSettings, router) {
        _classCallCheck(this, AppComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.loading = false;
        this.settings = this.appSettings.settings;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.router.navigate(['']);  //redirect other pages to homepage on browser refresh    
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              window.scrollTo(0, 0);
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.models.ts":
  /*!*******************************!*\
    !*** ./src/app/app.models.ts ***!
    \*******************************/

  /*! exports provided: Category, Product */

  /***/
  function srcAppAppModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Category = function Category(id, name, hasSubCategory, parentId) {
      _classCallCheck(this, Category);

      this.id = id;
      this.name = name;
      this.hasSubCategory = hasSubCategory;
      this.parentId = parentId;
    };

    var Product = function Product(id, name, images, oldPrice, newPrice, discount, ratingsCount, ratingsValue, description, availibilityCount, cartCount, color, size, weight, categoryId) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.images = images;
      this.oldPrice = oldPrice;
      this.newPrice = newPrice;
      this.discount = discount;
      this.ratingsCount = ratingsCount;
      this.ratingsValue = ratingsValue;
      this.description = description;
      this.availibilityCount = availibilityCount;
      this.cartCount = cartCount;
      this.color = color;
      this.size = size;
      this.weight = weight;
      this.categoryId = categoryId;
    };
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme/utils/custom-overlay-container */
    "./src/app/theme/utils/custom-overlay-container.ts");
    /* harmony import */


    var _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./theme/utils/scroll-strategy */
    "./src/app/theme/utils/scroll-strategy.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./theme/components/top-menu/top-menu.component */
    "./src/app/theme/components/top-menu/top-menu.component.ts");
    /* harmony import */


    var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./theme/components/menu/menu.component */
    "./src/app/theme/components/menu/menu.component.ts");
    /* harmony import */


    var _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./theme/components/sidenav-menu/sidenav-menu.component */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts");
    /* harmony import */


    var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./theme/components/breadcrumb/breadcrumb.component */
    "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/utils/app-interceptor */
    "./src/app/theme/utils/app-interceptor.ts");
    /* harmony import */


    var _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./theme/components/options/options.component */
    "./src/app/theme/components/options/options.component.ts");
    /* harmony import */


    var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./theme/components/footer/footer.component */
    "./src/app/theme/components/footer/footer.component.ts");
    /* harmony import */


    var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/catalog/catalog.component */
    "./src/app/pages/catalog/catalog.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }; // import { UserlocComponent } from './userloc/userloc.component';
    // import { DriverpublishComponent } from './driverpublish/driverpublish.component';
    // import { UserlocComponent } from './userloc/userloc.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyA1rF9bttCxRmsNdZYjW7FzIoyrul5jb-s'
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_13__["PagesComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"], _theme_components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_15__["TopMenuComponent"], _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _theme_components_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_17__["SidenavMenuComponent"], _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _theme_components_options_options_component__WEBPACK_IMPORTED_MODULE_22__["OptionsComponent"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_24__["CatalogComponent"]],
      providers: [_app_settings__WEBPACK_IMPORTED_MODULE_19__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_20__["AppService"], {
        provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"],
        useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_8__["CustomOverlayContainer"]
      }, {
        provide: _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MAT_MENU_SCROLL_STRATEGY"],
        useFactory: _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_9__["menuScrollStrategy"],
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_21__["AppInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routes, routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-account-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-account-account-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "./src/app/pages/account/account.module.ts")).then(function (m) {
            return m.AccountModule;
          });
        },
        data: {
          breadcrumb: 'Account Settings'
        }
      }, {
        path: 'compare',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-compare-compare-module */
          "pages-compare-compare-module").then(__webpack_require__.bind(null,
          /*! ./pages/compare/compare.module */
          "./src/app/pages/compare/compare.module.ts")).then(function (m) {
            return m.CompareModule;
          });
        },
        data: {
          breadcrumb: 'Compare'
        }
      }, {
        path: 'wishlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-wishlist-wishlist-module */
          "pages-wishlist-wishlist-module").then(__webpack_require__.bind(null,
          /*! ./pages/wishlist/wishlist.module */
          "./src/app/pages/wishlist/wishlist.module.ts")).then(function (m) {
            return m.WishlistModule;
          });
        },
        data: {
          breadcrumb: 'Wishlist'
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "pages-cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "./src/app/pages/cart/cart.module.ts")).then(function (m) {
            return m.CartModule;
          });
        },
        data: {
          breadcrumb: 'Cart'
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkout-checkout-module */
          "pages-checkout-checkout-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkout/checkout.module */
          "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
            return m.CheckoutModule;
          });
        },
        data: {
          breadcrumb: 'Checkout'
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-contact-contact-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-contact-contact-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/contact/contact.module */
          "./src/app/pages/contact/contact.module.ts")).then(function (m) {
            return m.ContactModule;
          });
        },
        data: {
          breadcrumb: 'Contact'
        }
      }, {
        path: 'sign-in',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-sign-in-sign-in-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-sign-in-sign-in-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/sign-in/sign-in.module */
          "./src/app/pages/sign-in/sign-in.module.ts")).then(function (m) {
            return m.SignInModule;
          });
        },
        data: {
          breadcrumb: 'Sign In '
        }
      }, {
        path: 'brands',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-brands-brands-module */
          [__webpack_require__.e("default~pages-brands-brands-module~pages-products-products-module"), __webpack_require__.e("pages-brands-brands-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/brands/brands.module */
          "./src/app/pages/brands/brands.module.ts")).then(function (m) {
            return m.BrandsModule;
          });
        },
        data: {
          breadcrumb: 'Brands'
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-products-products-module */
          [__webpack_require__.e("default~pages-brands-brands-module~pages-products-products-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-products-products-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/products/products.module */
          "./src/app/pages/products/products.module.ts")).then(function (m) {
            return m.ProductsModule;
          });
        },
        data: {
          breadcrumb: 'All Products'
        }
      }, {
        path: 'ordertrack',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-ordertrack-ordertrack-module */
          [__webpack_require__.e("default~pages-driverpublish-driverpublish-module~pages-ordertrack-ordertrack-module~pages-userloc-us~329700d6"), __webpack_require__.e("default~pages-ordertrack-ordertrack-module~pages-userloc-userloc-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-ordertrack-ordertrack-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/ordertrack/ordertrack.module */
          "./src/app/pages/ordertrack/ordertrack.module.ts")).then(function (m) {
            return m.OrdertrackModule;
          });
        },
        data: {
          breadcrumb: 'ordertrack'
        }
      }, {
        path: 'track',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-driverpublish-driverpublish-module */
          [__webpack_require__.e("default~pages-driverpublish-driverpublish-module~pages-ordertrack-ordertrack-module~pages-userloc-us~329700d6"), __webpack_require__.e("common"), __webpack_require__.e("pages-driverpublish-driverpublish-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/driverpublish/driverpublish.module */
          "./src/app/pages/driverpublish/driverpublish.module.ts")).then(function (m) {
            return m.DriverpublishModule;
          });
        },
        data: {
          breadcrumb: 'track'
        }
      }, {
        path: 'userloc',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-userloc-userloc-module */
          [__webpack_require__.e("default~pages-driverpublish-driverpublish-module~pages-ordertrack-ordertrack-module~pages-userloc-us~329700d6"), __webpack_require__.e("default~pages-ordertrack-ordertrack-module~pages-userloc-userloc-module"), __webpack_require__.e("pages-userloc-userloc-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/userloc/userloc.module */
          "./src/app/pages/userloc/userloc.module.ts")).then(function (m) {
            return m.UserlocModule;
          });
        },
        data: {
          breadcrumb: 'usertrack'
        }
      }, {
        path: 'catalog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-catalog-catalog-module */
          "pages-catalog-catalog-module").then(__webpack_require__.bind(null,
          /*! ./pages/catalog/catalog.module */
          "./src/app/pages/catalog/catalog.module.ts")).then(function (m) {
            return m.CatalogModule;
          });
        },
        data: {
          breadcrumb: 'catalog'
        }
      }]
    }, {
      path: '**',
      component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
    });
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: Data, AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Data", function () {
      return Data;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var Data = function Data(categories, compareList, wishList, cartList, totalPrice, totalCartCount) {
      _classCallCheck(this, Data);

      this.categories = categories;
      this.compareList = compareList;
      this.wishList = wishList;
      this.cartList = cartList;
      this.totalPrice = totalPrice;
      this.totalCartCount = totalCartCount;
    };

    var AppService = /*#__PURE__*/function () {
      function AppService(http, snackBar) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.snackBar = snackBar;
        this.Data = new Data([], // categories
        [], // compareList
        [], // wishList
        [], // cartList
        null, //totalPrice,
        0 //totalCartCount
        );
        this.url = "assets/data/";
      }

      _createClass(AppService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(this.url + 'categories.json');
        }
      }, {
        key: "getProducts",
        value: function getProducts(type) {
          return this.http.get(this.url + type + '-products.json');
        }
      }, {
        key: "getProductById",
        value: function getProductById(id) {
          return this.http.get(this.url + 'product-' + id + '.json');
        }
      }, {
        key: "getBanners",
        value: function getBanners() {
          return this.http.get(this.url + 'banners.json');
        }
      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          var message, status;

          if (this.Data.compareList.filter(function (item) {
            return item.id == product.id;
          })[0]) {
            message = 'The product ' + product.name + ' already added to comparison list.';
            status = 'error';
          } else {
            this.Data.compareList.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
          }

          this.snackBar.open(message, '×', {
            panelClass: [status],
            verticalPosition: 'top',
            duration: 3000
          });
        }
      }, {
        key: "addToWishList",
        value: function addToWishList(product) {
          var message, status;

          if (this.Data.wishList.filter(function (item) {
            return item.id == product.id;
          })[0]) {
            message = 'The product ' + product.name + ' already added to wish list.';
            status = 'error';
          } else {
            this.Data.wishList.push(product);
            message = 'The product ' + product.name + ' has been added to wish list.';
            status = 'success';
          }

          this.snackBar.open(message, '×', {
            panelClass: [status],
            verticalPosition: 'top',
            duration: 3000
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var _this = this;

          var message, status;
          this.Data.totalPrice = null;
          this.Data.totalCartCount = null;

          if (this.Data.cartList.filter(function (item) {
            return item.id == product.id;
          })[0]) {
            var item = this.Data.cartList.filter(function (item) {
              return item.id == product.id;
            })[0];
            item.cartCount = product.cartCount;
          } else {
            this.Data.cartList.push(product);
          }

          this.Data.cartList.forEach(function (product) {
            _this.Data.totalPrice = _this.Data.totalPrice + product.cartCount * product.newPrice;
            _this.Data.totalCartCount = _this.Data.totalCartCount + product.cartCount;
          });
          message = 'The product ' + product.name + ' has been added to cart.';
          status = 'success';
          this.snackBar.open(message, '×', {
            panelClass: [status],
            verticalPosition: 'top',
            duration: 3000
          });
        }
      }, {
        key: "resetProductCartCount",
        value: function resetProductCartCount(product) {
          product.cartCount = 0;
          var compareProduct = this.Data.compareList.filter(function (item) {
            return item.id == product.id;
          })[0];

          if (compareProduct) {
            compareProduct.cartCount = 0;
          }

          ;
          var wishProduct = this.Data.wishList.filter(function (item) {
            return item.id == product.id;
          })[0];

          if (wishProduct) {
            wishProduct.cartCount = 0;
          }

          ;
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          return [{
            name: 'aloha',
            image: 'assets/images/brands/aloha.png'
          }, {
            name: 'dream',
            image: 'assets/images/brands/dream.png'
          }, {
            name: 'congrats',
            image: 'assets/images/brands/congrats.png'
          }, {
            name: 'best',
            image: 'assets/images/brands/best.png'
          }, {
            name: 'original',
            image: 'assets/images/brands/original.png'
          }, {
            name: 'retro',
            image: 'assets/images/brands/retro.png'
          }, {
            name: 'king',
            image: 'assets/images/brands/king.png'
          }, {
            name: 'love',
            image: 'assets/images/brands/love.png'
          }, {
            name: 'the',
            image: 'assets/images/brands/the.png'
          }, {
            name: 'easter',
            image: 'assets/images/brands/easter.png'
          }, {
            name: 'with',
            image: 'assets/images/brands/with.png'
          }, {
            name: 'special',
            image: 'assets/images/brands/special.png'
          }, {
            name: 'bravo',
            image: 'assets/images/brands/bravo.png'
          }];
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return [{
            name: 'Afghanistan',
            code: 'AF'
          }, {
            name: 'Aland Islands',
            code: 'AX'
          }, {
            name: 'Albania',
            code: 'AL'
          }, {
            name: 'Algeria',
            code: 'DZ'
          }, {
            name: 'American Samoa',
            code: 'AS'
          }, {
            name: 'AndorrA',
            code: 'AD'
          }, {
            name: 'Angola',
            code: 'AO'
          }, {
            name: 'Anguilla',
            code: 'AI'
          }, {
            name: 'Antarctica',
            code: 'AQ'
          }, {
            name: 'Antigua and Barbuda',
            code: 'AG'
          }, {
            name: 'Argentina',
            code: 'AR'
          }, {
            name: 'Armenia',
            code: 'AM'
          }, {
            name: 'Aruba',
            code: 'AW'
          }, {
            name: 'Australia',
            code: 'AU'
          }, {
            name: 'Austria',
            code: 'AT'
          }, {
            name: 'Azerbaijan',
            code: 'AZ'
          }, {
            name: 'Bahamas',
            code: 'BS'
          }, {
            name: 'Bahrain',
            code: 'BH'
          }, {
            name: 'Bangladesh',
            code: 'BD'
          }, {
            name: 'Barbados',
            code: 'BB'
          }, {
            name: 'Belarus',
            code: 'BY'
          }, {
            name: 'Belgium',
            code: 'BE'
          }, {
            name: 'Belize',
            code: 'BZ'
          }, {
            name: 'Benin',
            code: 'BJ'
          }, {
            name: 'Bermuda',
            code: 'BM'
          }, {
            name: 'Bhutan',
            code: 'BT'
          }, {
            name: 'Bolivia',
            code: 'BO'
          }, {
            name: 'Bosnia and Herzegovina',
            code: 'BA'
          }, {
            name: 'Botswana',
            code: 'BW'
          }, {
            name: 'Bouvet Island',
            code: 'BV'
          }, {
            name: 'Brazil',
            code: 'BR'
          }, {
            name: 'British Indian Ocean Territory',
            code: 'IO'
          }, {
            name: 'Brunei Darussalam',
            code: 'BN'
          }, {
            name: 'Bulgaria',
            code: 'BG'
          }, {
            name: 'Burkina Faso',
            code: 'BF'
          }, {
            name: 'Burundi',
            code: 'BI'
          }, {
            name: 'Cambodia',
            code: 'KH'
          }, {
            name: 'Cameroon',
            code: 'CM'
          }, {
            name: 'Canada',
            code: 'CA'
          }, {
            name: 'Cape Verde',
            code: 'CV'
          }, {
            name: 'Cayman Islands',
            code: 'KY'
          }, {
            name: 'Central African Republic',
            code: 'CF'
          }, {
            name: 'Chad',
            code: 'TD'
          }, {
            name: 'Chile',
            code: 'CL'
          }, {
            name: 'China',
            code: 'CN'
          }, {
            name: 'Christmas Island',
            code: 'CX'
          }, {
            name: 'Cocos (Keeling) Islands',
            code: 'CC'
          }, {
            name: 'Colombia',
            code: 'CO'
          }, {
            name: 'Comoros',
            code: 'KM'
          }, {
            name: 'Congo',
            code: 'CG'
          }, {
            name: 'Congo, The Democratic Republic of the',
            code: 'CD'
          }, {
            name: 'Cook Islands',
            code: 'CK'
          }, {
            name: 'Costa Rica',
            code: 'CR'
          }, {
            name: 'Cote D\'Ivoire',
            code: 'CI'
          }, {
            name: 'Croatia',
            code: 'HR'
          }, {
            name: 'Cuba',
            code: 'CU'
          }, {
            name: 'Cyprus',
            code: 'CY'
          }, {
            name: 'Czech Republic',
            code: 'CZ'
          }, {
            name: 'Denmark',
            code: 'DK'
          }, {
            name: 'Djibouti',
            code: 'DJ'
          }, {
            name: 'Dominica',
            code: 'DM'
          }, {
            name: 'Dominican Republic',
            code: 'DO'
          }, {
            name: 'Ecuador',
            code: 'EC'
          }, {
            name: 'Egypt',
            code: 'EG'
          }, {
            name: 'El Salvador',
            code: 'SV'
          }, {
            name: 'Equatorial Guinea',
            code: 'GQ'
          }, {
            name: 'Eritrea',
            code: 'ER'
          }, {
            name: 'Estonia',
            code: 'EE'
          }, {
            name: 'Ethiopia',
            code: 'ET'
          }, {
            name: 'Falkland Islands (Malvinas)',
            code: 'FK'
          }, {
            name: 'Faroe Islands',
            code: 'FO'
          }, {
            name: 'Fiji',
            code: 'FJ'
          }, {
            name: 'Finland',
            code: 'FI'
          }, {
            name: 'France',
            code: 'FR'
          }, {
            name: 'French Guiana',
            code: 'GF'
          }, {
            name: 'French Polynesia',
            code: 'PF'
          }, {
            name: 'French Southern Territories',
            code: 'TF'
          }, {
            name: 'Gabon',
            code: 'GA'
          }, {
            name: 'Gambia',
            code: 'GM'
          }, {
            name: 'Georgia',
            code: 'GE'
          }, {
            name: 'Germany',
            code: 'DE'
          }, {
            name: 'Ghana',
            code: 'GH'
          }, {
            name: 'Gibraltar',
            code: 'GI'
          }, {
            name: 'Greece',
            code: 'GR'
          }, {
            name: 'Greenland',
            code: 'GL'
          }, {
            name: 'Grenada',
            code: 'GD'
          }, {
            name: 'Guadeloupe',
            code: 'GP'
          }, {
            name: 'Guam',
            code: 'GU'
          }, {
            name: 'Guatemala',
            code: 'GT'
          }, {
            name: 'Guernsey',
            code: 'GG'
          }, {
            name: 'Guinea',
            code: 'GN'
          }, {
            name: 'Guinea-Bissau',
            code: 'GW'
          }, {
            name: 'Guyana',
            code: 'GY'
          }, {
            name: 'Haiti',
            code: 'HT'
          }, {
            name: 'Heard Island and Mcdonald Islands',
            code: 'HM'
          }, {
            name: 'Holy See (Vatican City State)',
            code: 'VA'
          }, {
            name: 'Honduras',
            code: 'HN'
          }, {
            name: 'Hong Kong',
            code: 'HK'
          }, {
            name: 'Hungary',
            code: 'HU'
          }, {
            name: 'Iceland',
            code: 'IS'
          }, {
            name: 'India',
            code: 'IN'
          }, {
            name: 'Indonesia',
            code: 'ID'
          }, {
            name: 'Iran, Islamic Republic Of',
            code: 'IR'
          }, {
            name: 'Iraq',
            code: 'IQ'
          }, {
            name: 'Ireland',
            code: 'IE'
          }, {
            name: 'Isle of Man',
            code: 'IM'
          }, {
            name: 'Israel',
            code: 'IL'
          }, {
            name: 'Italy',
            code: 'IT'
          }, {
            name: 'Jamaica',
            code: 'JM'
          }, {
            name: 'Japan',
            code: 'JP'
          }, {
            name: 'Jersey',
            code: 'JE'
          }, {
            name: 'Jordan',
            code: 'JO'
          }, {
            name: 'Kazakhstan',
            code: 'KZ'
          }, {
            name: 'Kenya',
            code: 'KE'
          }, {
            name: 'Kiribati',
            code: 'KI'
          }, {
            name: 'Korea, Democratic People\'S Republic of',
            code: 'KP'
          }, {
            name: 'Korea, Republic of',
            code: 'KR'
          }, {
            name: 'Kuwait',
            code: 'KW'
          }, {
            name: 'Kyrgyzstan',
            code: 'KG'
          }, {
            name: 'Lao People\'S Democratic Republic',
            code: 'LA'
          }, {
            name: 'Latvia',
            code: 'LV'
          }, {
            name: 'Lebanon',
            code: 'LB'
          }, {
            name: 'Lesotho',
            code: 'LS'
          }, {
            name: 'Liberia',
            code: 'LR'
          }, {
            name: 'Libyan Arab Jamahiriya',
            code: 'LY'
          }, {
            name: 'Liechtenstein',
            code: 'LI'
          }, {
            name: 'Lithuania',
            code: 'LT'
          }, {
            name: 'Luxembourg',
            code: 'LU'
          }, {
            name: 'Macao',
            code: 'MO'
          }, {
            name: 'Macedonia, The Former Yugoslav Republic of',
            code: 'MK'
          }, {
            name: 'Madagascar',
            code: 'MG'
          }, {
            name: 'Malawi',
            code: 'MW'
          }, {
            name: 'Malaysia',
            code: 'MY'
          }, {
            name: 'Maldives',
            code: 'MV'
          }, {
            name: 'Mali',
            code: 'ML'
          }, {
            name: 'Malta',
            code: 'MT'
          }, {
            name: 'Marshall Islands',
            code: 'MH'
          }, {
            name: 'Martinique',
            code: 'MQ'
          }, {
            name: 'Mauritania',
            code: 'MR'
          }, {
            name: 'Mauritius',
            code: 'MU'
          }, {
            name: 'Mayotte',
            code: 'YT'
          }, {
            name: 'Mexico',
            code: 'MX'
          }, {
            name: 'Micronesia, Federated States of',
            code: 'FM'
          }, {
            name: 'Moldova, Republic of',
            code: 'MD'
          }, {
            name: 'Monaco',
            code: 'MC'
          }, {
            name: 'Mongolia',
            code: 'MN'
          }, {
            name: 'Montserrat',
            code: 'MS'
          }, {
            name: 'Morocco',
            code: 'MA'
          }, {
            name: 'Mozambique',
            code: 'MZ'
          }, {
            name: 'Myanmar',
            code: 'MM'
          }, {
            name: 'Namibia',
            code: 'NA'
          }, {
            name: 'Nauru',
            code: 'NR'
          }, {
            name: 'Nepal',
            code: 'NP'
          }, {
            name: 'Netherlands',
            code: 'NL'
          }, {
            name: 'Netherlands Antilles',
            code: 'AN'
          }, {
            name: 'New Caledonia',
            code: 'NC'
          }, {
            name: 'New Zealand',
            code: 'NZ'
          }, {
            name: 'Nicaragua',
            code: 'NI'
          }, {
            name: 'Niger',
            code: 'NE'
          }, {
            name: 'Nigeria',
            code: 'NG'
          }, {
            name: 'Niue',
            code: 'NU'
          }, {
            name: 'Norfolk Island',
            code: 'NF'
          }, {
            name: 'Northern Mariana Islands',
            code: 'MP'
          }, {
            name: 'Norway',
            code: 'NO'
          }, {
            name: 'Oman',
            code: 'OM'
          }, {
            name: 'Pakistan',
            code: 'PK'
          }, {
            name: 'Palau',
            code: 'PW'
          }, {
            name: 'Palestinian Territory, Occupied',
            code: 'PS'
          }, {
            name: 'Panama',
            code: 'PA'
          }, {
            name: 'Papua New Guinea',
            code: 'PG'
          }, {
            name: 'Paraguay',
            code: 'PY'
          }, {
            name: 'Peru',
            code: 'PE'
          }, {
            name: 'Philippines',
            code: 'PH'
          }, {
            name: 'Pitcairn',
            code: 'PN'
          }, {
            name: 'Poland',
            code: 'PL'
          }, {
            name: 'Portugal',
            code: 'PT'
          }, {
            name: 'Puerto Rico',
            code: 'PR'
          }, {
            name: 'Qatar',
            code: 'QA'
          }, {
            name: 'Reunion',
            code: 'RE'
          }, {
            name: 'Romania',
            code: 'RO'
          }, {
            name: 'Russian Federation',
            code: 'RU'
          }, {
            name: 'RWANDA',
            code: 'RW'
          }, {
            name: 'Saint Helena',
            code: 'SH'
          }, {
            name: 'Saint Kitts and Nevis',
            code: 'KN'
          }, {
            name: 'Saint Lucia',
            code: 'LC'
          }, {
            name: 'Saint Pierre and Miquelon',
            code: 'PM'
          }, {
            name: 'Saint Vincent and the Grenadines',
            code: 'VC'
          }, {
            name: 'Samoa',
            code: 'WS'
          }, {
            name: 'San Marino',
            code: 'SM'
          }, {
            name: 'Sao Tome and Principe',
            code: 'ST'
          }, {
            name: 'Saudi Arabia',
            code: 'SA'
          }, {
            name: 'Senegal',
            code: 'SN'
          }, {
            name: 'Serbia and Montenegro',
            code: 'CS'
          }, {
            name: 'Seychelles',
            code: 'SC'
          }, {
            name: 'Sierra Leone',
            code: 'SL'
          }, {
            name: 'Singapore',
            code: 'SG'
          }, {
            name: 'Slovakia',
            code: 'SK'
          }, {
            name: 'Slovenia',
            code: 'SI'
          }, {
            name: 'Solomon Islands',
            code: 'SB'
          }, {
            name: 'Somalia',
            code: 'SO'
          }, {
            name: 'South Africa',
            code: 'ZA'
          }, {
            name: 'South Georgia and the South Sandwich Islands',
            code: 'GS'
          }, {
            name: 'Spain',
            code: 'ES'
          }, {
            name: 'Sri Lanka',
            code: 'LK'
          }, {
            name: 'Sudan',
            code: 'SD'
          }, {
            name: 'Suriname',
            code: 'SR'
          }, {
            name: 'Svalbard and Jan Mayen',
            code: 'SJ'
          }, {
            name: 'Swaziland',
            code: 'SZ'
          }, {
            name: 'Sweden',
            code: 'SE'
          }, {
            name: 'Switzerland',
            code: 'CH'
          }, {
            name: 'Syrian Arab Republic',
            code: 'SY'
          }, {
            name: 'Taiwan, Province of China',
            code: 'TW'
          }, {
            name: 'Tajikistan',
            code: 'TJ'
          }, {
            name: 'Tanzania, United Republic of',
            code: 'TZ'
          }, {
            name: 'Thailand',
            code: 'TH'
          }, {
            name: 'Timor-Leste',
            code: 'TL'
          }, {
            name: 'Togo',
            code: 'TG'
          }, {
            name: 'Tokelau',
            code: 'TK'
          }, {
            name: 'Tonga',
            code: 'TO'
          }, {
            name: 'Trinidad and Tobago',
            code: 'TT'
          }, {
            name: 'Tunisia',
            code: 'TN'
          }, {
            name: 'Turkey',
            code: 'TR'
          }, {
            name: 'Turkmenistan',
            code: 'TM'
          }, {
            name: 'Turks and Caicos Islands',
            code: 'TC'
          }, {
            name: 'Tuvalu',
            code: 'TV'
          }, {
            name: 'Uganda',
            code: 'UG'
          }, {
            name: 'Ukraine',
            code: 'UA'
          }, {
            name: 'United Arab Emirates',
            code: 'AE'
          }, {
            name: 'United Kingdom',
            code: 'GB'
          }, {
            name: 'United States',
            code: 'US'
          }, {
            name: 'United States Minor Outlying Islands',
            code: 'UM'
          }, {
            name: 'Uruguay',
            code: 'UY'
          }, {
            name: 'Uzbekistan',
            code: 'UZ'
          }, {
            name: 'Vanuatu',
            code: 'VU'
          }, {
            name: 'Venezuela',
            code: 'VE'
          }, {
            name: 'Viet Nam',
            code: 'VN'
          }, {
            name: 'Virgin Islands, British',
            code: 'VG'
          }, {
            name: 'Virgin Islands, U.S.',
            code: 'VI'
          }, {
            name: 'Wallis and Futuna',
            code: 'WF'
          }, {
            name: 'Western Sahara',
            code: 'EH'
          }, {
            name: 'Yemen',
            code: 'YE'
          }, {
            name: 'Zambia',
            code: 'ZM'
          }, {
            name: 'Zimbabwe',
            code: 'ZW'
          }];
        }
      }, {
        key: "getMonths",
        value: function getMonths() {
          return [{
            value: '01',
            name: 'January'
          }, {
            value: '02',
            name: 'February'
          }, {
            value: '03',
            name: 'March'
          }, {
            value: '04',
            name: 'April'
          }, {
            value: '05',
            name: 'May'
          }, {
            value: '06',
            name: 'June'
          }, {
            value: '07',
            name: 'July'
          }, {
            value: '08',
            name: 'August'
          }, {
            value: '09',
            name: 'September'
          }, {
            value: '10',
            name: 'October'
          }, {
            value: '11',
            name: 'November'
          }, {
            value: '12',
            name: 'December'
          }];
        }
      }, {
        key: "getYears",
        value: function getYears() {
          return ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
        }
      }, {
        key: "getDeliveryMethods",
        value: function getDeliveryMethods() {
          return [{
            value: 'free',
            name: 'Free Delivery',
            desc: '$0.00 / Delivery in 7 to 14 business Days'
          }, {
            value: 'standard',
            name: 'Standard Delivery',
            desc: '$7.99 / Delivery in 5 to 7 business Days'
          }, {
            value: 'express',
            name: 'Express Delivery',
            desc: '$29.99 / Delivery in 1 business Days'
          }];
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    AppService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], AppService);
    /***/
  },

  /***/
  "./src/app/app.settings.ts":
  /*!*********************************!*\
    !*** ./src/app/app.settings.ts ***!
    \*********************************/

  /*! exports provided: Settings, AppSettings */

  /***/
  function srcAppAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Settings = function Settings(name, theme, rtl) {
      _classCallCheck(this, Settings);

      this.name = name;
      this.theme = theme;
      this.rtl = rtl;
    };

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.settings = new Settings('Emporium', // theme name
      'green', // green, blue, red, pink, purple, grey
      false // true = rtl, false = ltr
      );
    };

    AppSettings = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AppSettings);
    /***/
  },

  /***/
  "./src/app/pages/catalog/catalog.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/catalog/catalog.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCatalogCatalogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/catalog/catalog.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/catalog/catalog.component.ts ***!
    \****************************************************/

  /*! exports provided: CatalogComponent */

  /***/
  function srcAppPagesCatalogCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
      return CatalogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CatalogComponent = /*#__PURE__*/function () {
      function CatalogComponent() {
        _classCallCheck(this, CatalogComponent);
      }

      _createClass(CatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CatalogComponent;
    }();

    CatalogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-catalog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./catalog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/catalog/catalog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./catalog.component.scss */
      "./src/app/pages/catalog/catalog.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], CatalogComponent);
    /***/
  },

  /***/
  "./src/app/pages/not-found/not-found.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  border-radius: 0;\n}\n.box .box-header {\n  height: 180px;\n}\n.box .box-header .error {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box .box-content {\n  position: relative;\n  height: 180px;\n}\n.box .box-content .box-content-inner {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n}\n.box .box-content .box-content-header {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box .box-content .box-content-header.server-error {\n  margin-bottom: 36px;\n}\n.box .box-content .box-text {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box .box-content .box-text::last-child {\n  margin-bottom: 15px;\n}\n.box .box-content .box-footer {\n  position: relative;\n  bottom: 16px;\n}\n.box .box-content .box-footer button {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0M6XFxVc2Vyc1xcc2Fsb25pXFxEZXNrdG9wXFxGaXJzdC1wcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxccGFnZXNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0daO0FERFE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FERlk7RUFDSSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0daO0FERlk7RUFDSSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLmJveC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAuZXJyb3J7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94LWNvbnRlbnR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7ICAgICBcclxuICAgICAgICAuYm94LWNvbnRlbnQtaW5uZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMzRweDtcclxuICAgICAgICAgICAgbGVmdDogMzRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtY29udGVudC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICAgICAgJi5zZXJ2ZXItZXJyb3J7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtdGV4dHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmOjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LWZvb3RlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5ib3ggLmJveC1oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLmJveCAuYm94LWhlYWRlciAuZXJyb3Ige1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uYm94IC5ib3gtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtY29udGVudC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzRweDtcbiAgbGVmdDogMzRweDtcbiAgcmlnaHQ6IDM0cHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LWNvbnRlbnQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC1jb250ZW50LWhlYWRlci5zZXJ2ZXItZXJyb3Ige1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC10ZXh0OjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDE2cHg7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LWZvb3RlciBidXR0b24ge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1hcmdpbjogMCAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/not-found/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent(router) {
        _classCallCheck(this, NotFoundComponent);

        this.router = router;
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['/']);
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NotFoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-not-found',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/pages/not-found/not-found.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.component.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/pages.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  min-height: 400px;\n  min-height: calc(100vh - 288px);\n  padding: 16px;\n}\n\n.sidenav {\n  width: 250px;\n  padding: 8px 16px;\n  position: fixed;\n}\n\n.sidenav .close {\n  margin-left: 178px;\n}\n\n.sidenav .divider {\n  margin: 8px 0;\n}\n\n.cart-items-count {\n  position: absolute;\n  top: -3px;\n  left: 26px;\n  background: #f44336;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  border-radius: 50%;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxhQUFBO0FDR1I7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjg4cHgpO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNzhweDtcclxuICAgIH1cclxuICAgIC5kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbn1cclxuLmNhcnQtaXRlbXMtY291bnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iLCIubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjg4cHgpO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5zaWRlbmF2IC5jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNzhweDtcbn1cbi5zaWRlbmF2IC5kaXZpZGVyIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmNhcnQtaXRlbXMtY291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMjZweDtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../theme/components/sidenav-menu/sidenav-menu.service */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PagesComponent = /*#__PURE__*/function () {
      function PagesComponent(appSettings, appService, sidenavMenuService, router) {
        _classCallCheck(this, PagesComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.showBackToTop = false;
        this.settings = this.appSettings.settings;
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
          this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this2 = this;

          this.appService.getCategories().subscribe(function (data) {
            _this2.categories = data;
            _this2.category = data[0];
            _this2.appService.Data.categories = data;
          });
        }
      }, {
        key: "changeCategory",
        value: function changeCategory(event) {
          if (event.target) {
            this.category = this.categories.filter(function (category) {
              return category.name == event.target.innerText;
            })[0];
          }

          if (window.innerWidth < 960) {
            this.stopClickPropagate(event);
          }
        }
      }, {
        key: "remove",
        value: function remove(product) {
          var index = this.appService.Data.cartList.indexOf(product);

          if (index !== -1) {
            this.appService.Data.cartList.splice(index, 1);
            this.appService.Data.totalPrice = this.appService.Data.totalPrice - product.newPrice * product.cartCount;
            this.appService.Data.totalCartCount = this.appService.Data.totalCartCount - product.cartCount;
            this.appService.resetProductCartCount(product);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this3 = this;

          this.appService.Data.cartList.forEach(function (product) {
            _this3.appService.resetProductCartCount(product);
          });
          this.appService.Data.cartList.length = 0;
          this.appService.Data.totalPrice = 0;
          this.appService.Data.totalCartCount = 0;
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.settings.theme = theme;
        }
      }, {
        key: "stopClickPropagate",
        value: function stopClickPropagate(event) {
          event.stopPropagation();
          event.preventDefault();
        }
      }, {
        key: "search",
        value: function search() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var scrollDuration = 200;
          var scrollStep = -window.pageYOffset / (scrollDuration / 20);
          var scrollInterval = setInterval(function () {
            if (window.pageYOffset != 0) {
              window.scrollBy(0, scrollStep);
            } else {
              clearInterval(scrollInterval);
            }
          }, 10);

          if (window.innerWidth <= 768) {
            setTimeout(function () {
              window.scrollTo(0, 0);
            });
          }
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll($event) {
          $event.target.documentElement.scrollTop > 300 ? this.showBackToTop = true : this.showBackToTop = false;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this4.sidenav.close();
            }
          });
          this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
          }
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', {
      "static": true
    }), __metadata("design:type", Object)], PagesComponent.prototype, "sidenav", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], PagesComponent.prototype, "onWindowScroll", null);

    PagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pages',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html"))["default"],
      providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/pages/pages.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], PagesComponent);
    /***/
  },

  /***/
  "./src/app/shared/banners/banners.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/banners/banners.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedBannersBannersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banners-container {\n  margin: 22px -8px;\n}\n.banners-container .banner {\n  position: relative;\n  margin: 8px;\n  padding: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  transition: 0.15s ease-in;\n}\n.banners-container .banner .info {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  padding: 90px 0;\n  transition: 0.15s ease-in;\n}\n.banners-container .banner .info h1 {\n  font-size: 36px;\n}\n.banners-container .banner .info .title {\n  font-weight: 500;\n  text-align: center;\n}\n.banners-container .banner .info .subtitle {\n  font-weight: normal;\n  font-style: italic;\n  text-align: center;\n}\n.banners-container .banner:hover .info {\n  background: rgba(0, 0, 0, 0.7);\n}\n@media (max-width: 959px) {\n  .banners-container .banner .info {\n    padding: 30px 0px;\n  }\n  .banners-container .banner .info h1 {\n    font-size: 24px;\n  }\n  .banners-container .banner .info h2 {\n    font-size: 16px;\n  }\n  .banners-container .banner .info h3 {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhbm5lcnMvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFxzaGFyZWRcXGJhbm5lcnNcXGJhbm5lcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9iYW5uZXJzL2Jhbm5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0FDSWhCO0FERlk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDSWhCO0FERlk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJaEI7QURBWTtFQUNJLDhCQUFBO0FDRWhCO0FES0E7RUFHWTtJQUNJLGlCQUFBO0VDSmQ7RURLYztJQUNJLGVBQUE7RUNIbEI7RURLYztJQUNJLGVBQUE7RUNIbEI7RURLYztJQUNJLGVBQUE7RUNIbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYW5uZXJzL2Jhbm5lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVycy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDIycHggLThweDtcclxuICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgICAgICAgIFxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbjtcclxuICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMDsgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkgeyBcclxuICAgIC5iYW5uZXJzLWNvbnRhaW5lcntcclxuICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJhbm5lcnMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMnB4IC04cHg7XG59XG4uYmFubmVycy1jb250YWluZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbjtcbn1cbi5iYW5uZXJzLWNvbnRhaW5lciAuYmFubmVyIC5pbmZvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOTBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluO1xufVxuLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8gaDEge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyAudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyAuc3VidGl0bGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYW5uZXJzLWNvbnRhaW5lciAuYmFubmVyOmhvdmVyIC5pbmZvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG4gIC5iYW5uZXJzLWNvbnRhaW5lciAuYmFubmVyIC5pbmZvIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmJhbm5lcnMtY29udGFpbmVyIC5iYW5uZXIgLmluZm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYmFubmVycy1jb250YWluZXIgLmJhbm5lciAuaW5mbyBoMyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/banners/banners.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/banners/banners.component.ts ***!
    \*****************************************************/

  /*! exports provided: BannersComponent */

  /***/
  function srcAppSharedBannersBannersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersComponent", function () {
      return BannersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BannersComponent = /*#__PURE__*/function () {
      function BannersComponent() {
        _classCallCheck(this, BannersComponent);

        this.banners = [];
      }

      _createClass(BannersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBanner",
        value: function getBanner(index) {
          return this.banners[index];
        }
      }, {
        key: "getBgImage",
        value: function getBgImage(index) {
          var bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
          };
          return bgImage;
        }
      }]);

      return BannersComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('banners'), __metadata("design:type", Array)], BannersComponent.prototype, "banners", void 0);

    BannersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-banners',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./banners.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/banners/banners.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./banners.component.scss */
      "./src/app/shared/banners/banners.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], BannersComponent);
    /***/
  },

  /***/
  "./src/app/shared/brands-carousel/brands-carousel.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/brands-carousel/brands-carousel.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedBrandsCarouselBrandsCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".brands-carousel {\n  background: rgba(0, 0, 0, 0.03);\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.brands-carousel .swiper-container {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.brands-carousel .swiper-container .brand-item {\n  height: 80px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n}\n.brands-carousel .swiper-container .brand-item img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n.brands-carousel .swiper-button-prev {\n  left: -10px;\n}\n.brands-carousel .swiper-button-next {\n  right: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyYW5kcy1jYXJvdXNlbC9DOlxcVXNlcnNcXHNhbG9uaVxcRGVza3RvcFxcRmlyc3QtcHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHNoYXJlZFxcYnJhbmRzLWNhcm91c2VsXFxicmFuZHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9icmFuZHMtY2Fyb3VzZWwvYnJhbmRzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSWhCO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmFuZHMtY2Fyb3VzZWwvYnJhbmRzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kcy1jYXJvdXNlbHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wMyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDJweDtcclxuICAgICAgICBtYXJnaW46IDAgMTRweDtcclxuICAgICAgICAuYnJhbmQtaXRlbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufSIsIi5icmFuZHMtY2Fyb3VzZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJyYW5kcy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweCAycHg7XG4gIG1hcmdpbjogMCAxNHB4O1xufVxuLmJyYW5kcy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuYnJhbmQtaXRlbSB7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5icmFuZHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmJyYW5kLWl0ZW0gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5icmFuZHMtY2Fyb3VzZWwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGxlZnQ6IC0xMHB4O1xufVxuLmJyYW5kcy1jYXJvdXNlbCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcmlnaHQ6IC0xMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/brands-carousel/brands-carousel.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/brands-carousel/brands-carousel.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BrandsCarouselComponent */

  /***/
  function srcAppSharedBrandsCarouselBrandsCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandsCarouselComponent", function () {
      return BrandsCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BrandsCarouselComponent = /*#__PURE__*/function () {
      function BrandsCarouselComponent() {
        _classCallCheck(this, BrandsCarouselComponent);

        this.brands = [];
        this.config = {};
      }

      _createClass(BrandsCarouselComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
              320: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 2
              },
              600: {
                slidesPerView: 3
              },
              960: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 5
              },
              1500: {
                slidesPerView: 6
              }
            }
          };
        }
      }]);

      return BrandsCarouselComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('brands'), __metadata("design:type", Array)], BrandsCarouselComponent.prototype, "brands", void 0);

    BrandsCarouselComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-brands-carousel',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./brands-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/brands-carousel/brands-carousel.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./brands-carousel.component.scss */
      "./src/app/shared/brands-carousel/brands-carousel.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], BrandsCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/category-list/category-list.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/category-list/category-list.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCategoryListCategoryListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/category-list/category-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/category-list/category-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CategoryListComponent */

  /***/
  function srcAppSharedCategoryListCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
      return CategoryListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CategoryListComponent = /*#__PURE__*/function () {
      function CategoryListComponent() {
        _classCallCheck(this, CategoryListComponent);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CategoryListComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this5 = this;

          if (this.categories && !this.mainCategories) {
            this.mainCategories = this.categories.filter(function (category) {
              return category.parentId == _this5.categoryParentId;
            });
          }
        }
      }, {
        key: "stopClickPropagate",
        value: function stopClickPropagate(event) {
          if (window.innerWidth < 960) {
            event.stopPropagation();
            event.preventDefault();
          }
        }
      }, {
        key: "changeCategory",
        value: function changeCategory(event) {
          this.change.emit(event);
        }
      }]);

      return CategoryListComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], CategoryListComponent.prototype, "categories", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], CategoryListComponent.prototype, "categoryParentId", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CategoryListComponent.prototype, "change", void 0);

    CategoryListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-category-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./category-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/category-list/category-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./category-list.component.scss */
      "./src/app/shared/category-list/category-list.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], CategoryListComponent);
    /***/
  },

  /***/
  "./src/app/shared/controls/controls.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/controls/controls.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedControlsControlsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250cm9scy9jb250cm9scy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/controls/controls.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/controls/controls.component.ts ***!
    \*******************************************************/

  /*! exports provided: ControlsComponent */

  /***/
  function srcAppSharedControlsControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
      return ControlsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.models */
    "./src/app/app.models.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlsComponent = /*#__PURE__*/function () {
      function ControlsComponent(appService, snackBar) {
        _classCallCheck(this, ControlsComponent);

        this.appService = appService;
        this.snackBar = snackBar;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onQuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 1;
        this.align = 'center center';
      }

      _createClass(ControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.product) {
            if (this.product.cartCount > 0) {
              this.count = this.product.cartCount;
            }
          }

          this.layoutAlign();
        }
      }, {
        key: "layoutAlign",
        value: function layoutAlign() {
          if (this.type == 'all') {
            this.align = 'space-between center';
          } else if (this.type == 'wish') {
            this.align = 'start center';
          } else {
            this.align = 'center center';
          }
        }
      }, {
        key: "increment",
        value: function increment(count) {
          if (this.count < this.product.availibilityCount) {
            this.count++;
            var obj = {
              productId: this.product.id,
              soldQuantity: this.count,
              total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
          } else {
            this.snackBar.open('You can not choose more items than available. In stock ' + this.count + ' items.', '×', {
              panelClass: 'error',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }, {
        key: "decrement",
        value: function decrement(count) {
          if (this.count > 1) {
            this.count--;
            var obj = {
              productId: this.product.id,
              soldQuantity: this.count,
              total: this.count * this.product.newPrice
            };
            this.changeQuantity(obj);
          }
        }
      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          this.appService.addToCompare(product);
        }
      }, {
        key: "addToWishList",
        value: function addToWishList(product) {
          this.appService.addToWishList(product);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          // console.log(product)
          var currentProduct = this.appService.Data.cartList.filter(function (item) {
            return item.id == product.id;
          })[0];

          if (currentProduct) {
            if (currentProduct.cartCount + this.count <= this.product.availibilityCount) {
              product.cartCount = currentProduct.cartCount + this.count;
            } else {
              this.snackBar.open('You can not add more items than available. In stock ' + this.product.availibilityCount + ' items and you already added ' + currentProduct.cartCount + ' item to your cart', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                duration: 5000
              });
              return false;
            }
          } else {
            product.cartCount = this.count;
          }

          this.appService.addToCart(product);
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(event) {
          this.onOpenProductDialog.emit(event);
        }
      }, {
        key: "changeQuantity",
        value: function changeQuantity(value) {
          this.onQuantityChange.emit(value);
        }
      }]);

      return ControlsComponent;
    }();

    ControlsComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"])], ControlsComponent.prototype, "product", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], ControlsComponent.prototype, "type", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], ControlsComponent.prototype, "onOpenProductDialog", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], ControlsComponent.prototype, "onQuantityChange", void 0);

    ControlsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-controls',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./controls.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/controls/controls.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./controls.component.scss */
      "./src/app/shared/controls/controls.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], ControlsComponent);
    /***/
  },

  /***/
  "./src/app/shared/main-carousel/main-carousel.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/main-carousel/main-carousel.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedMainCarouselMainCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-slider {\n  height: 500px;\n  margin-top: 14px;\n}\n.main-slider .slide-item {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.main-slider .slide-item .content {\n  height: 100%;\n  position: relative;\n  z-index: 9;\n}\n.main-slider .slide-item .content h1 {\n  font-size: 48px;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n.main-slider .slide-item .content h3 {\n  font-size: 36px;\n  text-align: center;\n  color: #fff;\n  margin-bottom: 30px;\n  font-weight: 300;\n  letter-spacing: 2px;\n}\n.main-slider .slide-item .mask {\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  z-index: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.main-slider .swiper-lazy-preloader {\n  top: 18%;\n}\n@media (max-width: 575px) {\n  .main-slider {\n    height: 280px;\n  }\n  .main-slider .slide-item .content h1 {\n    font-size: 24px;\n    letter-spacing: 3px;\n  }\n  .main-slider .slide-item .content h3 {\n    font-size: 18px;\n    margin-bottom: 10px;\n    letter-spacing: 2px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .main-slider {\n    height: 320px;\n  }\n  .main-slider .slide-item .content h1 {\n    font-size: 36px;\n    letter-spacing: 3px;\n  }\n  .main-slider .slide-item .content h3 {\n    font-size: 24px;\n    margin-bottom: 20px;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21haW4tY2Fyb3VzZWwvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFxzaGFyZWRcXG1haW4tY2Fyb3VzZWxcXG1haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYWluLWNhcm91c2VsL21haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0daO0FERlk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREZZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQ0daO0FEQUk7RUFDSSxRQUFBO0FDRVI7QURFQTtFQUNJO0lBQ0ksYUFBQTtFQ0NOO0VEQ1U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUNDZDtFRENVO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUNDZDtBQUNGO0FER0E7RUFDSTtJQUNJLGFBQUE7RUNETjtFREdVO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VDRGQ7RURHVTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VDRGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLWNhcm91c2VsL21haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zbGlkZXJ7IFxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAuc2xpZGUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWFza3tcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xyXG4gICAgICAgIHRvcDogMTglO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHsgXHJcbiAgICAubWFpbi1zbGlkZXJ7IFxyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgLnNsaWRlLWl0ZW0gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5tYWluLXNsaWRlcnsgXHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICAuc2xpZGUtaXRlbSAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn0iLCIubWFpbi1zbGlkZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLm1haW4tc2xpZGVyIC5zbGlkZS1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubWFpbi1zbGlkZXIgLnNsaWRlLWl0ZW0gLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbn1cbi5tYWluLXNsaWRlciAuc2xpZGUtaXRlbSAuY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5tYWluLXNsaWRlciAuc2xpZGUtaXRlbSAuY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5tYWluLXNsaWRlciAuc2xpZGUtaXRlbSAubWFzayB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ubWFpbi1zbGlkZXIgLnN3aXBlci1sYXp5LXByZWxvYWRlciB7XG4gIHRvcDogMTglO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm1haW4tc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5tYWluLXNsaWRlciAuc2xpZGUtaXRlbSAuY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cbiAgLm1haW4tc2xpZGVyIC5zbGlkZS1pdGVtIC5jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi1zbGlkZXIge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbiAgLm1haW4tc2xpZGVyIC5zbGlkZS1pdGVtIC5jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxuICAubWFpbi1zbGlkZXIgLnNsaWRlLWl0ZW0gLmNvbnRlbnQgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/main-carousel/main-carousel.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/main-carousel/main-carousel.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MainCarouselComponent */

  /***/
  function srcAppSharedMainCarouselMainCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function () {
      return MainCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MainCarouselComponent = /*#__PURE__*/function () {
      function MainCarouselComponent() {
        _classCallCheck(this, MainCarouselComponent);

        this.slides = [];
        this.config = {};
        this.pagination = {
          el: '.swiper-pagination',
          clickable: true
        };
      }

      _createClass(MainCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
          };
        }
      }]);

      return MainCarouselComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('slides'), __metadata("design:type", Array)], MainCarouselComponent.prototype, "slides", void 0);

    MainCarouselComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-main-carousel',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./main-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-carousel/main-carousel.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./main-carousel.component.scss */
      "./src/app/shared/main-carousel/main-carousel.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], MainCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedProductsCarouselProductDialogProductDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-dialog .mat-dialog-container {\n  overflow: visible !important;\n}\n.product-dialog .mat-dialog-container .close-btn-outer {\n  position: relative;\n}\n.product-dialog .mat-dialog-container .close-btn-outer button {\n  position: absolute;\n  right: -44px;\n  top: -44px;\n}\n.product-dialog .mat-dialog-container .swiper-slide {\n  text-align: center;\n}\n.product-dialog .mat-dialog-container .swiper-slide img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL0M6XFxVc2Vyc1xcc2Fsb25pXFxEZXNrdG9wXFxGaXJzdC1wcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxcc2hhcmVkXFxwcm9kdWN0cy1jYXJvdXNlbFxccHJvZHVjdC1kaWFsb2dcXHByb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHJvZHVjdHMtY2Fyb3VzZWwvcHJvZHVjdC1kaWFsb2cvcHJvZHVjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw0QkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRWhCO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxlQUFBO0FDRWhCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL3Byb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGlhbG9ne1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNsb3NlLWJ0bi1vdXRlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTQ0cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIucHJvZHVjdC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLmNsb3NlLWJ0bi1vdXRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLmNsb3NlLWJ0bi1vdXRlciBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNDRweDtcbiAgdG9wOiAtNDRweDtcbn1cbi5wcm9kdWN0LWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLnN3aXBlci1zbGlkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIgLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductDialogComponent */

  /***/
  function srcAppSharedProductsCarouselProductDialogProductDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function () {
      return ProductDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app.models */
    "./src/app/app.models.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProductDialogComponent = /*#__PURE__*/function () {
      function ProductDialogComponent(appService, dialogRef, product) {
        _classCallCheck(this, ProductDialogComponent);

        this.appService = appService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.config = {};
      }

      _createClass(ProductDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            effect: "fade",
            fadeEffect: {
              crossFade: true
            }
          };
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return ProductDialogComponent;
    }();

    ProductDialogComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ProductDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/product-dialog/product-dialog.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./product-dialog.component.scss */
      "./src/app/shared/products-carousel/product-dialog/product-dialog.component.scss"))["default"]]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _app_models__WEBPACK_IMPORTED_MODULE_3__["Product"]])], ProductDialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/products-carousel/products-carousel.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/products-carousel/products-carousel.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedProductsCarouselProductsCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swiper-container {\n  padding: 16px 2px 2px 2px;\n}\n.swiper-container .swiper-slide {\n  text-align: center;\n}\n.swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL0M6XFxVc2Vyc1xcc2Fsb25pXFxEZXNrdG9wXFxGaXJzdC1wcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxcc2hhcmVkXFxwcm9kdWN0cy1jYXJvdXNlbFxccHJvZHVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QURDQTs7RUFFSSxvQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDJweCAycHggMnB4O1xyXG4gICAgLnN3aXBlci1zbGlkZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLCBcclxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVke1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn0iLCIuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHggMnB4IDJweCAycHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/products-carousel/products-carousel.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/products-carousel/products-carousel.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductsCarouselComponent */

  /***/
  function srcAppSharedProductsCarouselProductsCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function () {
      return ProductsCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-dialog/product-dialog.component */
    "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProductsCarouselComponent = /*#__PURE__*/function () {
      function ProductsCarouselComponent(appSettings, appService, dialog, router) {
        _classCallCheck(this, ProductsCarouselComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.dialog = dialog;
        this.router = router;
        this.products = [];
        this.config = {};
        this.settings = this.appSettings.settings;
      }

      _createClass(ProductsCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 1,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              740: {
                slidesPerView: 2
              },
              960: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              },
              1500: {
                slidesPerView: 5
              }
            }
          };
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this6 = this;

          var dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog',
            direction: this.settings.rtl ? 'rtl' : 'ltr'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this6.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }]);

      return ProductsCarouselComponent;
    }();

    ProductsCarouselComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('products'), __metadata("design:type", Array)], ProductsCarouselComponent.prototype, "products", void 0);

    ProductsCarouselComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-products-carousel',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./products-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products-carousel/products-carousel.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./products-carousel.component.scss */
      "./src/app/shared/products-carousel/products-carousel.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], ProductsCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/rating/rating.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRatingRatingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ratings {\n  color: #fbc02d;\n}\n\n.ratings-count {\n  margin-left: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy9DOlxcVXNlcnNcXHNhbG9uaVxcRGVza3RvcFxcRmlyc3QtcHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHNoYXJlZFxccmF0aW5nXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nc3tcclxuICAgIGNvbG9yOiNmYmMwMmQ7XHJcbn1cclxuLnJhdGluZ3MtY291bnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iLCIucmF0aW5ncyB7XG4gIGNvbG9yOiAjZmJjMDJkO1xufVxuXG4ucmF0aW5ncy1jb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/rating/rating.component.ts ***!
    \***************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function srcAppSharedRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RatingComponent = /*#__PURE__*/function () {
      function RatingComponent() {
        _classCallCheck(this, RatingComponent);
      }

      _createClass(RatingComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ratingsCount && this.ratingsValue && !this.avg) {
            this.calculateAvgValue();
          }
        }
      }, {
        key: "rate",
        value: function rate(value) {// value = (value + 1)*20;
          // this.ratingsCount++;
          // this.ratingsValue = this.ratingsValue + value;
          // this.calculateAvgValue();
        }
      }, {
        key: "calculateAvgValue",
        value: function calculateAvgValue() {
          this.avg = this.ratingsValue / this.ratingsCount;

          switch (true) {
            case this.avg > 0 && this.avg < 20:
              {
                this.stars = ['star_half', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 20:
              {
                this.stars = ['star', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 20 && this.avg < 40:
              {
                this.stars = ['star', 'star_half', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 40:
              {
                this.stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 40 && this.avg < 60:
              {
                this.stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 60:
              {
                this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 60 && this.avg < 80:
              {
                this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
                break;
              }

            case this.avg == 80:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star_border'];
                break;
              }

            case this.avg > 80 && this.avg < 100:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star_half'];
                break;
              }

            case this.avg >= 100:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star'];
                break;
              }

            default:
              {
                this.stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }
          }
        }
      }]);

      return RatingComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "ratingsCount", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "ratingsValue", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], RatingComponent.prototype, "direction", void 0);

    RatingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-rating',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./rating.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./rating.component.scss */
      "./src/app/shared/rating/rating.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], RatingComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _rating_rating_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./rating/rating.component */
    "./src/app/shared/rating/rating.component.ts");
    /* harmony import */


    var _controls_controls_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./controls/controls.component */
    "./src/app/shared/controls/controls.component.ts");
    /* harmony import */


    var _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./main-carousel/main-carousel.component */
    "./src/app/shared/main-carousel/main-carousel.component.ts");
    /* harmony import */


    var _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./brands-carousel/brands-carousel.component */
    "./src/app/shared/brands-carousel/brands-carousel.component.ts");
    /* harmony import */


    var _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./products-carousel/products-carousel.component */
    "./src/app/shared/products-carousel/products-carousel.component.ts");
    /* harmony import */


    var _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./products-carousel/product-dialog/product-dialog.component */
    "./src/app/shared/products-carousel/product-dialog/product-dialog.component.ts");
    /* harmony import */


    var _banners_banners_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./banners/banners.component */
    "./src/app/shared/banners/banners.component.ts");
    /* harmony import */


    var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./category-list/category-list.component */
    "./src/app/shared/category-list/category-list.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      wheelPropagation: true,
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_35__["PerfectScrollbarModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_36__["PipesModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_35__["PerfectScrollbarModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_36__["PipesModule"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_37__["RatingComponent"], _controls_controls_component__WEBPACK_IMPORTED_MODULE_38__["ControlsComponent"], _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_39__["MainCarouselComponent"], _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_40__["BrandsCarouselComponent"], _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_41__["ProductsCarouselComponent"], _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_42__["ProductDialogComponent"], _banners_banners_component__WEBPACK_IMPORTED_MODULE_43__["BannersComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_44__["CategoryListComponent"]],
      declarations: [_rating_rating_component__WEBPACK_IMPORTED_MODULE_37__["RatingComponent"], _controls_controls_component__WEBPACK_IMPORTED_MODULE_38__["ControlsComponent"], _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_39__["MainCarouselComponent"], _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_40__["BrandsCarouselComponent"], _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_41__["ProductsCarouselComponent"], _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_42__["ProductDialogComponent"], _banners_banners_component__WEBPACK_IMPORTED_MODULE_43__["BannersComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_44__["CategoryListComponent"]],
      entryComponents: [_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_42__["ProductDialogComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_35__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/theme/components/breadcrumb/breadcrumb.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.breadcrumb {\n  padding: 8px 0;\n  box-shadow: none;\n  margin-bottom: 16px;\n}\n.breadcrumb a, .breadcrumb span {\n  font-size: 13px;\n  text-decoration: none;\n  color: inherit;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n  opacity: 0.7;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"»\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9DOlxcVXNlcnNcXHNhbG9uaVxcRGVza3RvcFxcRmlyc3QtcHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FERUo7QUNESTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QURHUjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURHUjtBQ0RJO0VBQ0kseUJBQUE7QURHUjtBQ0RJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBREdSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmJyZWFkY3J1bWIgYSwgLmJyZWFkY3J1bWIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5icmVhZGNydW1iIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbnRlbnQ6IFwiwrtcIjtcbn0iLCIuYnJlYWRjcnVtYntcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBhLCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgY29udGVudDogXCLCu1wiO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppThemeComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/components/sidenav-menu/sidenav-menu.service */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(appSettings, router, activatedRoute, title, sidenavMenuService) {
        var _this7 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.sidenavMenuService = sidenavMenuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this7.breadcrumbs = [];

            _this7.parseRoute(_this7.router.routerState.snapshot.root);

            _this7.pageTitle = "";

            _this7.breadcrumbs.forEach(function (breadcrumb) {
              _this7.pageTitle += ' > ' + breadcrumb.name;
            });

            _this7.title.setTitle(_this7.settings.name + _this7.pageTitle);
          }
        });
      }

      _createClass(BreadcrumbComponent, [{
        key: "parseRoute",
        value: function parseRoute(node) {
          if (node.data['breadcrumb']) {
            if (node.url.length) {
              var urlSegments = [];
              node.pathFromRoot.forEach(function (routerState) {
                urlSegments = urlSegments.concat(routerState.url);
              });
              var url = urlSegments.map(function (urlSegment) {
                return urlSegment.path;
              }).join('/');

              if (node.params.name) {
                this.breadcrumbs.push({
                  name: node.params.name,
                  url: '/' + url
                });
              } else {
                this.breadcrumbs.push({
                  name: node.data['breadcrumb'],
                  url: '/' + url
                });
              }
            }
          }

          if (node.firstChild) {
            this.parseRoute(node.firstChild);
          }
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
          }
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]
      }];
    };

    BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-breadcrumb',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html"))["default"],
      providers: [_theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/theme/components/breadcrumb/breadcrumb.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _theme_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]])], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/footer/footer.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/theme/components/footer/footer.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  min-height: 100px;\n  padding: 16px 16px 0;\n}\n.footer .subscribe-block {\n  padding: 16px 0 32px 0;\n  text-align: center;\n}\n.footer .subscribe-block h1, .footer .subscribe-block h3 {\n  line-height: 1;\n}\n.footer .subscribe-block h1 {\n  margin-bottom: 6px;\n}\n.footer .subscribe-block .subscribe-search-form {\n  height: 50px;\n  padding: 0 16px;\n}\n.footer .subscribe-block .subscribe-search-form input[type=text] {\n  border: 0;\n  outline: none;\n  padding: 0 25px;\n  font-size: 16px;\n}\n.footer .subscribe-block .subscribe-search-form button {\n  font-size: 16px;\n  padding: 0 24px;\n  border-radius: 0;\n}\n.footer .col-title {\n  font-weight: 600;\n}\n.footer .mat-icon {\n  height: 21px;\n  line-height: 21px;\n}\n.footer .link {\n  text-decoration: none;\n}\n.footer .link:hover {\n  text-decoration: underline;\n}\n.footer .contact-information .mat-icon {\n  margin-right: 10px;\n}\n.footer .copyright {\n  font-size: 13px;\n  font-weight: 300;\n}\n@media (max-width: 575px) {\n  .footer .subscribe-block .subscribe-search-form {\n    height: 40px;\n    margin-top: 16px;\n  }\n  .footer .subscribe-block .subscribe-search-form input[type=text] {\n    padding: 0 8px;\n    font-size: 14px;\n  }\n  .footer .subscribe-block .subscribe-search-form button {\n    font-size: 14px;\n    padding: 0 16px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .footer .subscribe-block .subscribe-search-form {\n    margin-top: 16px;\n  }\n}\n.sebm-google-map-container {\n  height: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxjQUFBO0FDR1o7QUREUTtFQUNJLGtCQUFBO0FDR1o7QUREUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDR1o7QURGWTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNJaEI7QURGWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJaEI7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FERFE7RUFDSSwwQkFBQTtBQ0daO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRElBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUNGVjtFREdVO0lBQ0ksY0FBQTtJQUNBLGVBQUE7RUNEZDtFREdVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUNEZDtBQUNGO0FETUE7RUFFUTtJQUNJLGdCQUFBO0VDTFY7QUFDRjtBRFNBO0VBQ0ksYUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDA7XHJcbiAgICAuc3Vic2NyaWJlLWJsb2Nre1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMCAzMnB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGgxLCBoM3tcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIH1cclxuICAgIC5saW5re1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1pbmZvcm1hdGlvbntcclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5mb290ZXIgLnN1YnNjcmliZS1ibG9ja3tcclxuICAgICAgICAuc3Vic2NyaWJlLXNlYXJjaC1mb3Jte1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7ICAgIFxyXG4gICAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2Nre1xyXG4gICAgICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm17XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG59IiwiLmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcbn1cbi5mb290ZXIgLnN1YnNjcmliZS1ibG9jayB7XG4gIHBhZGRpbmc6IDE2cHggMCAzMnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLnN1YnNjcmliZS1ibG9jayBoMSwgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIGgzIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgaDEge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSB7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5mb290ZXIgLmNvbC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZm9vdGVyIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uZm9vdGVyIC5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlciAubGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvb3RlciAuY29udGFjdC1pbmZvcm1hdGlvbiAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuZm9vdGVyIC5zdWJzY3JpYmUtYmxvY2sgLnN1YnNjcmliZS1zZWFyY2gtZm9ybSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5mb290ZXIgLnN1YnNjcmliZS1ibG9jayAuc3Vic2NyaWJlLXNlYXJjaC1mb3JtIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/theme/components/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/theme/components/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppThemeComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "subscribe",
        value: function subscribe() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/theme/components/footer/footer.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/theme/components/menu/menu.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/theme/components/menu/menu.component.ts ***!
    \*********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppThemeComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMegaMenu",
        value: function openMegaMenu() {
          var pane = document.getElementsByClassName('cdk-overlay-pane');
          [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
              if (el.children[0].classList.contains('mega-menu')) {
                el.classList.add('mega-menu-pane');
              }
            }
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/theme/components/menu/menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/options/options.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/options/options.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsOptionsOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options {\n  width: 60px;\n  height: 300px;\n  position: fixed;\n  top: 100px;\n  right: -62px;\n  z-index: 9999;\n}\n.options .options-icon {\n  padding: 0;\n  position: absolute;\n  top: 12px;\n  left: -36px;\n  min-width: 38px;\n  z-index: 1;\n  box-shadow: -2px 3px 1px -2px rgba(0, 0, 0, 0.2), -2px 2px 2px 0 rgba(0, 0, 0, 0.14), -2px 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.options .mat-card {\n  position: absolute;\n  padding: 14px;\n  width: 100%;\n  height: 100%;\n}\n.options.show {\n  right: -2px;\n}\n.options .skin-icon {\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n}\n.options .skin-icon.green {\n  background-color: #689f38;\n}\n.options .skin-icon.blue {\n  background-color: #1976d2;\n}\n.options .skin-icon.red {\n  background-color: #d32f2f;\n}\n.options .skin-icon.pink {\n  background-color: #c2185b;\n}\n.options .skin-icon.purple {\n  background-color: #7b1fa2;\n}\n.options .skin-icon.grey {\n  background-color: #455a64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9vcHRpb25zL0M6XFxVc2Vyc1xcc2Fsb25pXFxEZXNrdG9wXFxGaXJzdC1wcm9qZWN0XFxlbXBvcml1bS9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG9wdGlvbnNcXG9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx3SEFBQTtBQ0VSO0FERUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxXQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FSO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uc3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICByaWdodDogLTYycHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgLm9wdGlvbnMtaWNvbntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgbGVmdDogLTM2cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIFxyXG4gICAgICAgICAgICAgICAgICAgIC0ycHggMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgLTJweCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICByaWdodDogLTJweDtcclxuICAgIH1cclxuICAgIC5za2luLWljb257XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICAgICAgIFxyXG4gICAgICAgICYuZ3JlZW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODlmMzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYmx1ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucGlua3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5wdXJwbGV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZ3JleXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NWE2NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3B0aW9ucyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAtNjJweDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5vcHRpb25zIC5vcHRpb25zLWljb24ge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogLTM2cHg7XG4gIG1pbi13aWR0aDogMzhweDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogLTJweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAtMnB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAtMnB4IDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm9wdGlvbnMgLm1hdC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm9wdGlvbnMuc2hvdyB7XG4gIHJpZ2h0OiAtMnB4O1xufVxuLm9wdGlvbnMgLnNraW4taWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcHRpb25zIC5za2luLWljb24uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xufVxuLm9wdGlvbnMgLnNraW4taWNvbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbn1cbi5vcHRpb25zIC5za2luLWljb24ucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbn1cbi5vcHRpb25zIC5za2luLWljb24ucGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XG59XG4ub3B0aW9ucyAuc2tpbi1pY29uLnB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG59XG4ub3B0aW9ucyAuc2tpbi1pY29uLmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1YTY0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/options/options.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/components/options/options.component.ts ***!
    \***************************************************************/

  /*! exports provided: OptionsComponent */

  /***/
  function srcAppThemeComponentsOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
      return OptionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OptionsComponent = /*#__PURE__*/function () {
      function OptionsComponent(appSettings) {
        _classCallCheck(this, OptionsComponent);

        this.appSettings = appSettings;
        this.showOptions = false;
        this.settings = this.appSettings.settings;
      }

      _createClass(OptionsComponent, [{
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.settings.theme = theme;
        }
      }]);

      return OptionsComponent;
    }();

    OptionsComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    OptionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-options',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/options/options.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./options.component.scss */
      "./src/app/theme/components/options/options.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], OptionsComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsSidenavMenuSidenavMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 56px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 76px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 96px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 116px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 136px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 156px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 176px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 196px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 216px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 36px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcc2lkZW5hdi1tZW51XFxzaWRlbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZW5hdi1tZW51L3NpZGVuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvQzpcXFVzZXJzXFxzYWxvbmlcXERlc2t0b3BcXEZpcnN0LXByb2plY3RcXGVtcG9yaXVtL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7O0FES0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0ZSOztBRElZO0VBR0kseUJBQUE7QUNGaEI7O0FETUk7RUFDSSxrQkFBQTtBQ0pSOztBRFFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUNOSjs7QUN0QlE7RUFDSSxrQkFBQTtBRHdCWjs7QUN6QlE7RUFDSSxrQkFBQTtBRDJCWjs7QUM1QlE7RUFDSSxrQkFBQTtBRDhCWjs7QUMvQlE7RUFDSSxtQkFBQTtBRGlDWjs7QUNsQ1E7RUFDSSxtQkFBQTtBRG9DWjs7QUNyQ1E7RUFDSSxtQkFBQTtBRHVDWjs7QUN4Q1E7RUFDSSxtQkFBQTtBRDBDWjs7QUMzQ1E7RUFDSSxtQkFBQTtBRDZDWjs7QUM5Q1E7RUFDSSxtQkFBQTtBRGdEWjs7QURwQkk7RUFDSSxrQkFBQTtBQ3NCUjs7QURwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FDc0JSIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvc2lkZW5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiLm1lbnUtZXhwYW5kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24uZXhwYW5kZWQgLm1lbnUtZXhwYW5kLWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5tZW51LWl0ZW0gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnN1Yi1tZW51IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDc2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDk2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMTZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMzZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTU2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNzZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxOTZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjE2cHg7XG59XG4uc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG59XG4uc3ViLW1lbnUuc2hvdyB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCl7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4ICsgKDIwcHggKiAkaSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SidenavMenuComponent */

  /***/
  function srcAppThemeComponentsSidenavMenuSidenavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function () {
      return SidenavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidenav-menu.service */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SidenavMenuComponent = /*#__PURE__*/function () {
      function SidenavMenuComponent(sidenavMenuService) {
        _classCallCheck(this, SidenavMenuComponent);

        this.sidenavMenuService = sidenavMenuService;
      }

      _createClass(SidenavMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.parentMenu = this.menuItems.filter(function (item) {
            return item.parentId == _this8.menuParentId;
          });
        }
      }, {
        key: "onClick",
        value: function onClick(menuId) {
          this.sidenavMenuService.toggleMenuItem(menuId);
          this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
        }
      }]);

      return SidenavMenuComponent;
    }();

    SidenavMenuComponent.ctorParameters = function () {
      return [{
        type: _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'), __metadata("design:type", Object)], SidenavMenuComponent.prototype, "menuItems", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'), __metadata("design:type", Object)], SidenavMenuComponent.prototype, "menuParentId", void 0);

    SidenavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sidenav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidenav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav-menu/sidenav-menu.component.html"))["default"],
      providers: [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./sidenav-menu.component.scss */
      "./src/app/theme/components/sidenav-menu/sidenav-menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]])], SidenavMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts ***!
    \*********************************************************************/

  /*! exports provided: SidenavMenu */

  /***/
  function srcAppThemeComponentsSidenavMenuSidenavMenuModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavMenu", function () {
      return SidenavMenu;
    });

    var SidenavMenu = function SidenavMenu(id, title, routerLink, href, target, hasSubMenu, parentId) {
      _classCallCheck(this, SidenavMenu);

      this.id = id;
      this.title = title;
      this.routerLink = routerLink;
      this.href = href;
      this.target = target;
      this.hasSubMenu = hasSubMenu;
      this.parentId = parentId;
    };
    /***/

  },

  /***/
  "./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.service.ts ***!
    \***********************************************************************/

  /*! exports provided: SidenavMenuService */

  /***/
  function srcAppThemeComponentsSidenavMenuSidenavMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavMenuService", function () {
      return SidenavMenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidenav-menu */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var SidenavMenuService = /*#__PURE__*/function () {
      function SidenavMenuService(location, router) {
        _classCallCheck(this, SidenavMenuService);

        this.location = location;
        this.router = router;
      }

      _createClass(SidenavMenuService, [{
        key: "getSidenavMenuItems",
        value: function getSidenavMenuItems() {
          return _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"];
        }
      }, {
        key: "expandActiveSubMenu",
        value: function expandActiveSubMenu(menu) {
          var _this9 = this;

          var url = this.location.path();
          var routerLink = decodeURIComponent(url);
          var activeMenuItem = menu.filter(function (item) {
            return item.routerLink === routerLink;
          });

          if (activeMenuItem[0]) {
            (function () {
              var menuItem = activeMenuItem[0];

              while (menuItem.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) {
                  return item.id == menuItem.parentId;
                })[0];
                menuItem = parentMenuItem;

                _this9.toggleMenuItem(menuItem.id);
              }
            })();
          }
        }
      }, {
        key: "toggleMenuItem",
        value: function toggleMenuItem(menuId) {
          var menuItem = document.getElementById('menu-item-' + menuId);
          var subMenu = document.getElementById('sub-menu-' + menuId);

          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            } else {
              subMenu.classList.add('show');
              menuItem.classList.add('expanded');
            }
          }
        }
      }, {
        key: "closeOtherSubMenus",
        value: function closeOtherSubMenus(menu, menuId) {
          var currentMenuItem = menu.filter(function (item) {
            return item.id == menuId;
          })[0];
          menu.forEach(function (item) {
            if (item.id != menuId && item.parentId == currentMenuItem.parentId || currentMenuItem.parentId == 0 && item.id != menuId) {
              var subMenu = document.getElementById('sub-menu-' + item.id);
              var menuItem = document.getElementById('menu-item-' + item.id);

              if (subMenu) {
                if (subMenu.classList.contains('show')) {
                  subMenu.classList.remove('show');
                  menuItem.classList.remove('expanded');
                }
              }
            }
          });
        }
      }, {
        key: "closeAllSubMenus",
        value: function closeAllSubMenus() {
          _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"].forEach(function (item) {
            var subMenu = document.getElementById('sub-menu-' + item.id);
            var menuItem = document.getElementById('menu-item-' + item.id);

            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              }
            }
          });
        }
      }]);

      return SidenavMenuService;
    }();

    SidenavMenuService.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    SidenavMenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], SidenavMenuService);
    /***/
  },

  /***/
  "./src/app/theme/components/sidenav-menu/sidenav-menu.ts":
  /*!***************************************************************!*\
    !*** ./src/app/theme/components/sidenav-menu/sidenav-menu.ts ***!
    \***************************************************************/

  /*! exports provided: sidenavMenuItems */

  /***/
  function srcAppThemeComponentsSidenavMenuSidenavMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sidenavMenuItems", function () {
      return sidenavMenuItems;
    });
    /* harmony import */


    var _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidenav-menu.model */
    "./src/app/theme/components/sidenav-menu/sidenav-menu.model.ts");

    var sidenavMenuItems = [new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](1, 'Home', '/', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](2, 'Fashion', null, null, null, true, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](10, 'Women', null, null, null, true, 2), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](12, 'Jackets', '/products/jackets', null, null, false, 10), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](15, 'Knitwear', '/products/knitwear', null, null, false, 10), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](20, 'Men', null, null, null, true, 2), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](23, 'Jeans', '/products/jeans', null, null, false, 20), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](24, 'Coats', '/products/coats', null, null, false, 20), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](30, 'Kids', null, null, null, true, 2), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](31, 'Top', '/products/top', null, null, false, 30), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](33, 'Dresses', '/products/dresses', null, null, false, 30), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](34, 'Skirts', '/products/skirts', null, null, false, 30), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](35, 'Set & Body', '/products/set & body', null, null, false, 30), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](40, 'Accessories', null, null, null, true, 2), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](41, 'Watches', '/products/watches', null, null, false, 40), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](43, 'Sunglasses', '/products/sunglasses', null, null, false, 40), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](50, 'Jewellery', '/products/jewellery', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](51, 'Electronics', '/products/electronics', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Sports', '/products/sports', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Motors', '/products/motors', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](60, 'Pages', null, null, null, true, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](61, 'All products', '/products', null, null, false, 60), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](62, 'Product detail', '/products/2/PC All-in-One', null, null, false, 60), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](63, 'Sign in', '/sign-in', null, null, false, 60), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](64, '404 Error', '/404', null, null, false, 60), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](80, 'Contact', '/contact', null, null, false, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](140, 'Level 1', null, null, null, true, 0), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](141, 'Level 2', null, null, null, true, 140), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](142, 'Level 3', null, null, null, true, 141), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](143, 'Level 4', null, null, null, true, 142), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](144, 'Level 5', null, 'http://themeseason.com', null, false, 143), new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](200, 'External Link', null, 'http://themeseason.com', '_blank', false, 0)];
    /***/
  },

  /***/
  "./src/app/theme/components/top-menu/top-menu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/top-menu/top-menu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TopMenuComponent */

  /***/
  function srcAppThemeComponentsTopMenuTopMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function () {
      return TopMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TopMenuComponent = /*#__PURE__*/function () {
      function TopMenuComponent(appSettings, appService) {
        _classCallCheck(this, TopMenuComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.settings = this.appSettings.settings;
      }

      _createClass(TopMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return TopMenuComponent;
    }();

    TopMenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    TopMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-top-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./top-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/top-menu/top-menu.component.html"))["default"]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], TopMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/pipes/brand-search.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/pipes/brand-search.pipe.ts ***!
    \**************************************************/

  /*! exports provided: BrandSearchPipe */

  /***/
  function srcAppThemePipesBrandSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandSearchPipe", function () {
      return BrandSearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var BrandSearchPipe = /*#__PURE__*/function () {
      function BrandSearchPipe() {
        _classCallCheck(this, BrandSearchPipe);
      }

      _createClass(BrandSearchPipe, [{
        key: "transform",
        value: function transform(brands, args) {
          var searchText = new RegExp(args, 'ig');

          if (brands) {
            return brands.filter(function (brand) {
              if (brand.name) {
                return brand.name.search(searchText) !== -1;
              }
            });
          }
        }
      }]);

      return BrandSearchPipe;
    }();

    BrandSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'brandSearchPipe',
      pure: false
    })], BrandSearchPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/filter-brands.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/theme/pipes/filter-brands.pipe.ts ***!
    \***************************************************/

  /*! exports provided: FilterBrandsPipe */

  /***/
  function srcAppThemePipesFilterBrandsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterBrandsPipe", function () {
      return FilterBrandsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var FilterBrandsPipe = /*#__PURE__*/function () {
      function FilterBrandsPipe() {
        _classCallCheck(this, FilterBrandsPipe);
      }

      _createClass(FilterBrandsPipe, [{
        key: "transform",
        value: function transform(brands, firstLetter) {
          if (firstLetter == 'all') {
            return brands;
          } else {
            return brands.filter(function (brand) {
              return brand.name.charAt(0) == firstLetter.toLowerCase();
            });
          }
        }
      }]);

      return FilterBrandsPipe;
    }();

    FilterBrandsPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterBrands'
    })], FilterBrandsPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/filter-by-id.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
    \**************************************************/

  /*! exports provided: FilterByIdPipe */

  /***/
  function srcAppThemePipesFilterByIdPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterByIdPipe", function () {
      return FilterByIdPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var FilterByIdPipe = /*#__PURE__*/function () {
      function FilterByIdPipe() {
        _classCallCheck(this, FilterByIdPipe);
      }

      _createClass(FilterByIdPipe, [{
        key: "transform",
        value: function transform(items, id) {
          return items.filter(function (item) {
            return item.id == id;
          })[0];
        }
      }]);

      return FilterByIdPipe;
    }();

    FilterByIdPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterById'
    })], FilterByIdPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/pipes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/theme/pipes/pipes.module.ts ***!
    \*********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppThemePipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./filter-by-id.pipe */
    "./src/app/theme/pipes/filter-by-id.pipe.ts");
    /* harmony import */


    var _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter-brands.pipe */
    "./src/app/theme/pipes/filter-brands.pipe.ts");
    /* harmony import */


    var _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./brand-search.pipe */
    "./src/app/theme/pipes/brand-search.pipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      declarations: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"], _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"], _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"]],
      exports: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"], _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"], _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/theme/utils/app-interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/theme/utils/app-interceptor.ts ***!
    \************************************************/

  /*! exports provided: AppInterceptor */

  /***/
  function srcAppThemeUtilsAppInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptor", function () {
      return AppInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var AppInterceptor = /*#__PURE__*/function () {
      function AppInterceptor(spinner) {
        _classCallCheck(this, AppInterceptor);

        this.spinner = spinner;
      }

      _createClass(AppInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this10 = this;

          this.spinner.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this10.spinner.hide();
            }

            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            var started = Date.now();
            var elapsed = Date.now() - started;
            console.log("Request for ".concat(req.urlWithParams, " failed after ").concat(elapsed, " ms.")); // debugger;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return AppInterceptor;
    }();

    AppInterceptor.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    AppInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])], AppInterceptor);
    /***/
  },

  /***/
  "./src/app/theme/utils/custom-overlay-container.ts":
  /*!*********************************************************!*\
    !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
    \*********************************************************/

  /*! exports provided: CustomOverlayContainer */

  /***/
  function srcAppThemeUtilsCustomOverlayContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function () {
      return CustomOverlayContainer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var CustomOverlayContainer = /*#__PURE__*/function (_angular_cdk_overlay_) {
      _inherits(CustomOverlayContainer, _angular_cdk_overlay_);

      var _super = _createSuper(CustomOverlayContainer);

      function CustomOverlayContainer() {
        _classCallCheck(this, CustomOverlayContainer);

        return _super.apply(this, arguments);
      }

      _createClass(CustomOverlayContainer, [{
        key: "_createContainer",
        value: function _createContainer() {
          var container = document.createElement('div');
          container.classList.add('cdk-overlay-container');
          document.getElementById('app').appendChild(container);
          this._containerElement = container;
        }
      }]);

      return CustomOverlayContainer;
    }(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]);

    CustomOverlayContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CustomOverlayContainer);
    /***/
  },

  /***/
  "./src/app/theme/utils/scroll-strategy.ts":
  /*!************************************************!*\
    !*** ./src/app/theme/utils/scroll-strategy.ts ***!
    \************************************************/

  /*! exports provided: menuScrollStrategy */

  /***/
  function srcAppThemeUtilsScrollStrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "menuScrollStrategy", function () {
      return menuScrollStrategy;
    });

    function menuScrollStrategy(overlay) {
      return function () {
        return overlay.scrollStrategies.block();
      };
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\saloni\Desktop\First-project\emporium\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map