"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_components_knowledge-base_knowledge-base_module_ts"],{

/***/ 10614:
/*!****************************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseRoutingModule": () => (/* binding */ KnowledgeBaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge-base.component */ 23358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseComponent,
                data: {
                    title: "Knowledge Base",
                    breadcrumb: ""
                }
            },
        ]
    }
];
class KnowledgeBaseRoutingModule {
}
KnowledgeBaseRoutingModule.ɵfac = function KnowledgeBaseRoutingModule_Factory(t) { return new (t || KnowledgeBaseRoutingModule)(); };
KnowledgeBaseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KnowledgeBaseRoutingModule });
KnowledgeBaseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KnowledgeBaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23358:
/*!***********************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseComponent": () => (/* binding */ KnowledgeBaseComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/knowledge-base/knowledge-base */ 61179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);







function KnowledgeBaseComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "h6")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-feather-icons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const kb_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](kb_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", kb_r2.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function KnowledgeBaseComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sorry, We didn't find any articles matching this search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
class KnowledgeBaseComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.Kb = _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__.KB_DB.Kb_Category;
    }
    ngOnInit() { }
}
KnowledgeBaseComponent.ɵfac = function KnowledgeBaseComponent_Factory(t) { return new (t || KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer)); };
KnowledgeBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: KnowledgeBaseComponent, selectors: [["app-knowledge-base"]], decls: 256, vars: 21, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4", "xl-50", "col-sm-6"], [1, "card", "bg-primary"], [1, "card-body"], [1, "d-flex", "faq-widgets"], [1, "flex-grow-1"], [3, "icon"], [1, "col-xl-4", "xl-100"], [1, "col-sm-12"], [1, "col-sm-6"], [1, "header-faq"], [1, "mb-0"], [1, "form-inline", "search-form", "pull-right", "search-knowledge"], [1, "form-group", "me-0"], ["name", "search", "type", "text", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelChange"], [1, "card"], [1, "card-header"], [1, "row", "browse"], ["class", "col-xl-4 xl-50", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-12"], [1, "col-xl-3", "xl-50"], [1, "card", "features-faq", "product-box"], [1, "faq-image", "product-img"], ["src", "assets/images/faq/1.jpg", "alt", "", 1, "img-fluid"], [1, "product-hover"], [1, "icon-link"], [1, "icon-import"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-star", "font-primary"], ["src", "assets/images/faq/2.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-o", "font-primary"], ["src", "assets/images/faq/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/faq/4.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-half-o", "font-primary"], [1, "col-xl-4", "col-md-6"], [1, "d-flex"], [1, "m-r-30", 3, "icon"], [1, "f-w-600"], [1, "col-xl-4"], [1, "col-xl-12", "col-md-6"], [1, "col-xl-12"], [1, "col-xl-4", "xl-50"], [1, "browse-articles", "browse-bottom"], [3, "innerHTML"], [1, "search-not-found", "knowledge-search-height", "text-center"], [1, ""], ["src", "assets/images/search-not-found.png", 1, "second-search"]], template: function KnowledgeBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Knowledge Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Ouch found swore much dear conductively hid submissively hatchet vexed far inanimately alongside candidly");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "div", 6)(17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Support center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Dear spryly growled much far jeepers vigilantly less and far hideous and some mannishly less jeepers less and and crud");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Articles and news");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Diabolically somberly astride crass one endearingly blatant depending peculiar antelope piquantly popularly adept");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9)(33, "div", 1)(34, "div", 10)(35, "div", 11)(36, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Browse articles by category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 10)(39, "form", 13)(40, "div", 14)(41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KnowledgeBaseComponent_Template_input_ngModelChange_41_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 9)(43, "div", 16)(44, "div", 17)(45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Browse Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 4)(48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, KnowledgeBaseComponent_div_49_Template, 7, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, KnowledgeBaseComponent_div_52_Template, 6, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 21)(55, "div", 11)(56, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Featured articles and tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 1)(59, "div", 22)(60, "div", 23)(61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 26)(64, "ul")(65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 4)(70, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "For ostrich much");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Some various less crept gecko the jeepers dear forewent far the ouch far a incompetent saucy wherever towards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 29)(75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "i", 31)(79, "i", 31)(80, "i", 31)(81, "i", 31)(82, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 22)(84, "div", 23)(85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 26)(88, "ul")(89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 4)(94, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Considering far");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Kookaburra so hey a less tritely far congratulated this winked some under had unblushing beyond sympathetic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 29)(99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 31)(103, "i", 31)(104, "i", 31)(105, "i", 31)(106, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 22)(108, "div", 23)(109, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 26)(112, "ul")(113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 4)(118, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Despite perversely");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Coming merits and was talent enough far. Sir joy northward sportsmen education. Put still any about manor heard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 29)(123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 31)(127, "i", 31)(128, "i", 31)(129, "i", 31)(130, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 22)(132, "div", 23)(133, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 26)(136, "ul")(137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 4)(142, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Helpfully stolidly");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Hippopotamus aside while a shrewdly this after kookaburra wow in haphazardly much salmon buoyantly sullen gosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 29)(147, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "i", 31)(151, "i", 31)(152, "i", 31)(153, "i", 31)(154, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 21)(156, "div", 11)(157, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Latest articles and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 1)(160, "div", 37)(161, "div", 1)(162, "div", 9)(163, "div", 16)(164, "div", 4)(165, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 6)(168, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Contemptibly bleakly");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Speechless far goodness bent as boa crud because vague far koala the that lantern alas sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 9)(173, "div", 16)(174, "div", 4)(175, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 6)(178, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Stretched flamboyant");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Some when foolhardy dangerous so less less aimlessly along hazardously oversaw much");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 9)(183, "div", 16)(184, "div", 4)(185, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 6)(188, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Bound befell well");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Since left before understandably much groomed along burped through dear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 37)(193, "div", 1)(194, "div", 9)(195, "div", 16)(196, "div", 4)(197, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 6)(200, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Blamelessly wow hence");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "A without walking some objective hiccupped some this overlay immorally crud and gosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 9)(205, "div", 16)(206, "div", 4)(207, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](208, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 6)(210, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Walking away fallaciously");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Ouch licentiously lackadaisical crud together began gregarious below near darn goodness");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 9)(215, "div", 16)(216, "div", 4)(217, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 6)(220, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Porcupine strict nodded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Left extravagant leered crab repaid outgrew said knelt hello astride within oh disbanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 41)(225, "div", 1)(226, "div", 42)(227, "div", 16)(228, "div", 4)(229, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 6)(232, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Manatee broadcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Some where indecently manta floated raptly youthful unlike swept dragonfly pulled moth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 42)(237, "div", 16)(238, "div", 4)(239, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 6)(242, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "Ducked ravenously dear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Reran sincere said monkey one slapped jeepers rubbed fleetly incongruously due yet llama");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 43)(247, "div", 16)(248, "div", 4)(249, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 6)(252, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Porcupine strict nodded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Left extravagant leered crab repaid outgrew said knelt hello astride within oh disbanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "book-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "aperture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](50, 15, ctx.Kb, ctx.term));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](53, 18, ctx.Kb, ctx.term).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "youtube");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UtYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 69190:
/*!********************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseModule": () => (/* binding */ KnowledgeBaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-base-routing.module */ 10614);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knowledge-base.component */ 23358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class KnowledgeBaseModule {
}
KnowledgeBaseModule.ɵfac = function KnowledgeBaseModule_Factory(t) { return new (t || KnowledgeBaseModule)(); };
KnowledgeBaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KnowledgeBaseModule });
KnowledgeBaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KnowledgeBaseModule, { declarations: [_knowledge_base_component__WEBPACK_IMPORTED_MODULE_3__.KnowledgeBaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 61179:
/*!**************************************************************!*\
  !*** ./src/app/shared/data/knowledge-base/knowledge-base.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KB_DB": () => (/* binding */ KB_DB)
/* harmony export */ });
class KB_DB {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
}
KB_DB.Kb_Category = [
    {
        title: 'Quick Questions are answered',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum is simply dummy text of the printing</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum has been the industry's standard dummy </span><span class="badge badge-primary pull-right">New</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>When an unknown printer took a galley </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>But also the leap into electronic typesetting, </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (40)</span></a></li>`,
    },
    {
        title: 'Integrating WordPress with Your Website',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It was popularised in the 1960s with the release</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Desktop publishing software like Aldus PageMaker </span><span class="badge badge-primary pull-right">Articles</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Making this the first true generator on the Internet.</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (90)</span></a></li>`,
    },
    {
        title: 'WordPress Site Maintenance',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Normal distribution of letters, as opposed to using </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum, you need to be sure there isn't anything  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Repetition, injected humour, or non-characteristic words etc</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (50)</span></a></li>`
    },
    {
        title: ' Meta Tags in WordPress',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Nemo enim ipsam voluptatem quia voluptas sit  </span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Ipsum quia dolor sit amet, consectetur</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Sed quia non numquam eius modi tempora incidunt</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (90)</span></a></li>`
    },
    {
        title: 'WordPress in Your Language',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Desktop publishing software like Aldus PageMaker</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It was popularised in the 1960s with the release</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Making this the first true generator on the Internet</span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (50)</span></a></li>`
    },
    {
        title: 'Know Your Sources',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The point of using Lorem Ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It has a more-or-less normal distribution of letters</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Et harum quidem rerum facilis est et expedita</span><span class="badge badge-primary pull-right">Article</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (26)</span></a></li>`
    },
    {
        title: 'Validating a Website',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>When our power of choice is untrammelled </span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It will frequently occur that pleasures  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>who fail in their duty through weakness </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span> At vero eos et accusamus et iusto </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (10)</span></a></li>`
    },
    {
        title: 'Quick Questions are answered',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Quis autem vel eum iure reprehenderit  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Ducimus  blanditiis praesentium voluptatum</span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Omnis voluptas assumenda est</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Produces no resultant pleasure</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (21)</span></a></li>`
    },
    {
        title: 'Integrating WordPress with Your Website',
        desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum passage, and going through</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The first line of Lorem Ipsum,  Lorem ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Thus comes from a line in section</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>First true generator on the Internet</span><span class="badge badge-primary pull-right">On hold</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (34)</span></a></li>`
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_components_knowledge-base_knowledge-base_module_ts.js.map