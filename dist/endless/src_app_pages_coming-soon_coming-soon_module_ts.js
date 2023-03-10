"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_pages_coming-soon_coming-soon_module_ts"],{

/***/ 98182:
/*!*****************************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonRoutingModule": () => (/* binding */ ComingSoonRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple/simple.component */ 87812);
/* harmony import */ var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-with-video/page-with-video.component */ 16030);
/* harmony import */ var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-with-image/page-with-image.component */ 75152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        children: [
            {
                path: 'page',
                component: _simple_simple_component__WEBPACK_IMPORTED_MODULE_0__.SimpleComponent
            },
            {
                path: 'page/image',
                component: _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__.PageWithImageComponent
            },
            {
                path: 'page/video',
                component: _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_1__.PageWithVideoComponent
            }
        ]
    }
];
class ComingSoonRoutingModule {
}
ComingSoonRoutingModule.??fac = function ComingSoonRoutingModule_Factory(t) { return new (t || ComingSoonRoutingModule)(); };
ComingSoonRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ComingSoonRoutingModule });
ComingSoonRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ComingSoonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 15145:
/*!*********************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonModule": () => (/* binding */ ComingSoonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon-routing.module */ 98182);
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple/simple.component */ 87812);
/* harmony import */ var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-with-image/page-with-image.component */ 75152);
/* harmony import */ var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-with-video/page-with-video.component */ 16030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class ComingSoonModule {
}
ComingSoonModule.??fac = function ComingSoonModule_Factory(t) { return new (t || ComingSoonModule)(); };
ComingSoonModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ComingSoonModule });
ComingSoonModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ComingSoonModule, { declarations: [_simple_simple_component__WEBPACK_IMPORTED_MODULE_1__.SimpleComponent, _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_2__.PageWithImageComponent, _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__.PageWithVideoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule] }); })();


/***/ }),

/***/ 75152:
/*!********************************************************************************!*\
  !*** ./src/app/pages/coming-soon/page-with-image/page-with-image.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageWithImageComponent": () => (/* binding */ PageWithImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PageWithImageComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2022 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
PageWithImageComponent.??fac = function PageWithImageComponent_Factory(t) { return new (t || PageWithImageComponent)(); };
PageWithImageComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageWithImageComponent, selectors: [["app-page-with-image"]], decls: 24, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "comingsoon", "comingsoon-bgimg"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function PageWithImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4)(7, "ul")(8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16030:
/*!********************************************************************************!*\
  !*** ./src/app/pages/coming-soon/page-with-video/page-with-video.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageWithVideoComponent": () => (/* binding */ PageWithVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PageWithVideoComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2022 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
PageWithVideoComponent.??fac = function PageWithVideoComponent_Factory(t) { return new (t || PageWithVideoComponent)(); };
PageWithVideoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageWithVideoComponent, selectors: [["app-page-with-video"]], decls: 26, vars: 0, consts: [[1, "container-fluid", "p-0"], [1, "comingsoon", "auth-bg-video"], ["id", "bgvid", "poster", "assets/images/other-images/coming-soon-bg.jpg", "playsinline", "", "autoplay", "", "muted", "", "loop", "", 1, "bgvideo-comingsoon"], ["src", "assets/video/auth-bg.mp4", "type", "video/mp4"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function PageWithVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6)(9, "ul")(10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 87812:
/*!**************************************************************!*\
  !*** ./src/app/pages/coming-soon/simple/simple.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleComponent": () => (/* binding */ SimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// import { count } from 'rxjs/operators';
// export interface Time {
// }
class SimpleComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2022 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
SimpleComponent.??fac = function SimpleComponent_Factory(t) { return new (t || SimpleComponent)(); };
SimpleComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SimpleComponent, selectors: [["app-simple"]], decls: 24, vars: 0, consts: [[1, "container-fluid", "p-0"], [1, "comingsoon"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function SimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4)(7, "ul")(8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_coming-soon_coming-soon_module_ts.js.map