"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_pages_error-pages_error-pages_module_ts"],{

/***/ 1781:
/*!*****************************************************************!*\
  !*** ./src/app/pages/error-pages/error-pages-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPagesRoutingModule": () => (/* binding */ ErrorPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _error400_error400_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error400/error400.component */ 38539);
/* harmony import */ var _error401_error401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error401/error401.component */ 89820);
/* harmony import */ var _error403_error403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error403/error403.component */ 43655);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404/error404.component */ 39478);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error500/error500.component */ 89210);
/* harmony import */ var _error503_error503_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error503/error503.component */ 50464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: '',
        children: [
            {
                path: '400',
                component: _error400_error400_component__WEBPACK_IMPORTED_MODULE_0__.Error400Component,
            },
            {
                path: '401',
                component: _error401_error401_component__WEBPACK_IMPORTED_MODULE_1__.Error401Component
            },
            {
                path: '403',
                component: _error403_error403_component__WEBPACK_IMPORTED_MODULE_2__.Error403Component
            },
            {
                path: '404',
                component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_3__.Error404Component
            },
            {
                path: '500',
                component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_4__.Error500Component
            },
            {
                path: '503',
                component: _error503_error503_component__WEBPACK_IMPORTED_MODULE_5__.Error503Component
            }
        ]
    }
];
class ErrorPagesRoutingModule {
}
ErrorPagesRoutingModule.??fac = function ErrorPagesRoutingModule_Factory(t) { return new (t || ErrorPagesRoutingModule)(); };
ErrorPagesRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: ErrorPagesRoutingModule });
ErrorPagesRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](ErrorPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 84079:
/*!*********************************************************!*\
  !*** ./src/app/pages/error-pages/error-pages.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPagesModule": () => (/* binding */ ErrorPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-pages-routing.module */ 1781);
/* harmony import */ var _error400_error400_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error400/error400.component */ 38539);
/* harmony import */ var _error401_error401_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error401/error401.component */ 89820);
/* harmony import */ var _error403_error403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error403/error403.component */ 43655);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error404/error404.component */ 39478);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error500/error500.component */ 89210);
/* harmony import */ var _error503_error503_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error503/error503.component */ 50464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class ErrorPagesModule {
}
ErrorPagesModule.??fac = function ErrorPagesModule_Factory(t) { return new (t || ErrorPagesModule)(); };
ErrorPagesModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: ErrorPagesModule });
ErrorPagesModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorPagesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](ErrorPagesModule, { declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_1__.Error400Component, _error401_error401_component__WEBPACK_IMPORTED_MODULE_2__.Error401Component, _error403_error403_component__WEBPACK_IMPORTED_MODULE_3__.Error403Component, _error404_error404_component__WEBPACK_IMPORTED_MODULE_4__.Error404Component, _error500_error500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component, _error503_error503_component__WEBPACK_IMPORTED_MODULE_6__.Error503Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorPagesRoutingModule] }); })();


/***/ }),

/***/ 38539:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error400/error400.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error400Component": () => (/* binding */ Error400Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error400Component {
    constructor() { }
    ngOnInit() { }
}
Error400Component.??fac = function Error400Component_Factory(t) { return new (t || Error400Component)(); };
Error400Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error400Component, selectors: [["app-error400"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-info"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-info-gradien", "btn-lg", 3, "routerLink"]], template: function Error400Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89820:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error401/error401.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error401Component": () => (/* binding */ Error401Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error401Component {
    constructor() { }
    ngOnInit() { }
}
Error401Component.??fac = function Error401Component_Factory(t) { return new (t || Error401Component)(); };
Error401Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error401Component, selectors: [["app-error401"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-warning"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-warning-gradien", "btn-lg", 3, "routerLink"]], template: function Error401Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "401");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 43655:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error403/error403.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error403Component": () => (/* binding */ Error403Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error403Component {
    constructor() { }
    ngOnInit() { }
}
Error403Component.??fac = function Error403Component_Factory(t) { return new (t || Error403Component)(); };
Error403Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error403Component, selectors: [["app-error403"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-success"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-success-gradien", "btn-lg", 3, "routerLink"]], template: function Error403Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 39478:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error404/error404.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error404Component {
    constructor() { }
    ngOnInit() { }
}
Error404Component.??fac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-danger"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-danger-gradien", "btn-lg", 3, "routerLink"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89210:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error500/error500.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error500Component": () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error500Component {
    constructor() { }
    ngOnInit() { }
}
Error500Component.??fac = function Error500Component_Factory(t) { return new (t || Error500Component)(); };
Error500Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error500Component, selectors: [["app-error500"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-primary"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-primary-gradien", "btn-lg", 3, "routerLink"]], template: function Error500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 50464:
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error503/error503.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error503Component": () => (/* binding */ Error503Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class Error503Component {
    constructor() { }
    ngOnInit() { }
}
Error503Component.??fac = function Error503Component_Factory(t) { return new (t || Error503Component)(); };
Error503Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Error503Component, selectors: [["app-error503"]], decls: 12, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], [1, "headline", "font-secondary"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-secondary-gradien", "btn-lg", 3, "routerLink"]], template: function Error503Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "503");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_error-pages_error-pages_module_ts.js.map