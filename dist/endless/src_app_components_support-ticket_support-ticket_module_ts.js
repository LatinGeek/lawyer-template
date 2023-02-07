"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_components_support-ticket_support-ticket_module_ts"],{

/***/ 22113:
/*!****************************************************************************!*\
  !*** ./src/app/components/support-ticket/support-ticket-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketRoutingModule": () => (/* binding */ SupportTicketRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-ticket.component */ 3586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__.SupportTicketComponent,
                data: {
                    title: "Support Ticket",
                    breadcrumb: ""
                }
            }
        ]
    }
];
class SupportTicketRoutingModule {
}
SupportTicketRoutingModule.ɵfac = function SupportTicketRoutingModule_Factory(t) { return new (t || SupportTicketRoutingModule)(); };
SupportTicketRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupportTicketRoutingModule });
SupportTicketRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportTicketRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3586:
/*!***********************************************************************!*\
  !*** ./src/app/components/support-ticket/support-ticket.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketComponent": () => (/* binding */ SupportTicketComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/NgbdSortableHeader */ 40961);
/* harmony import */ var src_app_shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/tables/support-ticket */ 98061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/table.service */ 28272);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);








const _c0 = function (a0) { return { "width": a0 }; };
function SupportTicketComponent_tr_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 17)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.office);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r1.skill)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, item_r1.progress));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.extn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.email);
} }
class SupportTicketComponent {
    constructor(service) {
        this.service = service;
        this.selected = [];
        this.tableItem$ = service.tableItem$;
        this.total$ = service.total$;
        this.service.setUserData(src_app_shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_1__.SUPPORTDB);
    }
    onSort({ column, direction }) {
        // resetting other headers
        this.headers.forEach((header) => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    onSelect(selected) {
        this.service.deleteSingleData(selected);
    }
    ngOnInit() {
        console.log("selected", this.tableItem$);
    }
}
SupportTicketComponent.ɵfac = function SupportTicketComponent_Factory(t) { return new (t || SupportTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_2__.TableService)); };
SupportTicketComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SupportTicketComponent, selectors: [["app-support-ticket"]], viewQuery: function SupportTicketComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, decls: 184, vars: 26, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-xl-4", "col-sm-6"], [1, "card", "ecommerce-widget"], [1, "card-body", "support-ticket-font"], [1, "col-5"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "col-7"], [1, "text-md-end"], [1, "product-stts", "txt-success", "ms-2"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "product-stts", "txt-danger", "ms-2"], [1, "icon-angle-down", "f-12", "ms-1"], [1, "progress-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], [1, "progress-showcase", "mt-4"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "table-responsive"], [1, "server-datatable"], [1, "custom-datatable", "product-list-custom"], [1, "custom-datatable"], [1, "table"], ["scope", "col", "sortable", "img", 3, "sort"], ["scope", "col", "sortable", "position", 3, "sort"], ["scope", "col", "sortable", "salary", 3, "sort"], ["scope", "col", "sortable", "office", 3, "sort"], ["scope", "col", "sortable", "skill", 3, "sort"], ["scope", "col", "sortable", "extn", 3, "sort"], ["scope", "col", "sortable", "email", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "pt-4"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["scope", "row"], [1, "d-flex"], [1, "rounded-circle", "img-30", "me-3", 3, "src"], [1, "media-body", "align-self-center"], ["role", "progressbar", 3, "ngClass", "ngStyle"]], template: function SupportTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Support Ticket List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "List of ticket opend by customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 1)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 1)(15, "div", 9)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "ul")(22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 17)(33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 6)(36, "div", 7)(37, "div", 8)(38, "div", 1)(39, "div", 9)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 11)(44, "div", 12)(45, "ul")(46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 17)(57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 6)(60, "div", 7)(61, "div", 8)(62, "div", 1)(63, "div", 9)(64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 11)(68, "div", 12)(69, "ul")(70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 21)(81, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 6)(84, "div", 7)(85, "div", 8)(86, "div", 1)(87, "div", 9)(88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Smooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 11)(92, "div", 12)(93, "ul")(94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 21)(105, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 6)(108, "div", 7)(109, "div", 8)(110, "div", 1)(111, "div", 9)(112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 11)(116, "div", 12)(117, "ul")(118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 21)(129, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 6)(132, "div", 7)(133, "div", 8)(134, "div", 1)(135, "div", 9)(136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 11)(140, "div", 12)(141, "ul")(142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](146, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 17)(153, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 26)(156, "div", 27)(157, "div", 26)(158, "div", 28)(159, "div", 26)(160, "div", 29)(161, "table", 30)(162, "thead")(163, "tr")(164, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_164_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_166_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_168_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_170_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_172_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_174_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Extend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_176_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](179, SupportTicketComponent_tr_179_Template, 20, 11, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](180, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "div", 39)(182, "ngb-pagination", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SupportTicketComponent_Template_ngb_pagination_pageChange_182_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](183, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 2563)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 8943)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 2500)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 2060)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 5600)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("CountTo", 2560)("from", 0)("duration", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](180, 22, ctx.tableItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](183, 24, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToDirective, src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ 35863:
/*!********************************************************************!*\
  !*** ./src/app/components/support-ticket/support-ticket.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportTicketModule": () => (/* binding */ SupportTicketModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support-ticket-routing.module */ 22113);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-ticket.component */ 3586);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class SupportTicketModule {
}
SupportTicketModule.ɵfac = function SupportTicketModule_Factory(t) { return new (t || SupportTicketModule)(); };
SupportTicketModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SupportTicketModule });
SupportTicketModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportTicketRoutingModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SupportTicketModule, { declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_2__.SupportTicketComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportTicketRoutingModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] }); })();


/***/ }),

/***/ 98061:
/*!******************************************************!*\
  !*** ./src/app/shared/data/tables/support-ticket.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUPPORTDB": () => (/* binding */ SUPPORTDB)
/* harmony export */ });
const SUPPORTDB = [
    {
        img: "assets/images/user/1.jpg",
        name: "Tiger",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "progress-bar custom-progress-width bg-danger w-70",
        progress: "70%",
        extn: 5421,
        email: "t.nixon@datatables.net"
    },
    {
        img: "assets/images/user/2.png",
        name: "Tiger",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "progress-bar custom-progress-width bg-secondary w-20",
        progress: "20%",
        extn: 5421,
        email: "t.nixon@datatables.net"
    },
    {
        img: "assets/images/user/3.jpg",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "progress-bar custom-progress-width bg-success w-50",
        progress: "50%",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "assets/images/user/4.jpg",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "progress-bar custom-progress-width bg-primary w-45",
        progress: "45%",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "assets/images/user/5.jpg",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "progress-bar custom-progress-width bg-danger w-57",
        progress: "57%",
        extn: 8422,
        email: "g.winters@datatables.net"
    },
    {
        img: "assets/images/user/6.jpg",
        name: "Ashton Cox",
        position: "Junior Technical Author",
        salary: "$86,000",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-success w-100",
        progress: "100%",
        extn: 1562,
        email: "a.cox@datatables.net"
    },
    {
        img: "assets/images/user/7.jpg",
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-secondary w-35",
        progress: "35%",
        extn: 6224,
        email: "c.kelly@datatables.net"
    },
    {
        img: "assets/images/user/8.jpg",
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-secondary w-76",
        progress: "76%",
        extn: 6224,
        email: "c.kelly@datatables.net"
    },
    {
        img: "assets/images/user/9.jpg",
        name: "Airi Satou",
        position: "Accountant",
        salary: "$162,700",
        office: "Tokyo",
        skill: "progress-bar custom-progress-width bg-success w-20",
        progress: "20%",
        extn: 5407,
        email: "a.satou@datatables.net"
    },
    {
        img: 'assets/images/user/10.jpg',
        name: "Airi Satou",
        position: "Integration Specialist",
        salary: "$372,000",
        office: "New York",
        skill: "progress-bar custom-progress-width bg-info w-30",
        progress: "30%",
        extn: 4804,
        email: "b.williamson@datatables.net"
    },
    {
        img: "assets/images/user/1.jpg",
        name: "Herrod Chandler",
        position: "Sales Assistant",
        salary: "$137,500",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-warning w-60",
        progress: "60%",
        extn: 9608,
        email: "h.chandler@datatables.net"
    },
    {
        img: 'assets/images/user/5.jpg',
        name: "Rhona Davidson",
        position: "Integration Specialist",
        salary: "$327,900",
        office: "Tokyo",
        skill: "progress-bar custom-progress-width bg-secondary w-50",
        progress: "50%",
        extn: 6200,
        email: "r.davidson@datatables.net"
    },
    {
        img: "assets/images/user/1.jpg",
        name: "Colleen Hurst",
        position: "Javascript Developer",
        salary: "$205,500",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-success w-25",
        progress: "25%",
        extn: 2360,
        email: "c.hurst@datatables.net"
    },
    {
        img: "assets/images/user/2.png",
        name: "Sonya Frost",
        position: "Software Engineer",
        salary: "$103,600",
        office: "Edinburgh",
        skill: "progress-bar custom-progress-width bg-primary w-40",
        progress: "40%",
        extn: 1667,
        email: "s.frost@datatables.net"
    },
    {
        img: "assets/images/user/3.jpg",
        name: "Jena Gaines",
        position: "Office Manager",
        salary: "$90,560",
        office: "London",
        skill: "progress-bar custom-progress-width bg-warning w-57",
        progress: "57%",
        extn: 3814,
        email: "j.gaines@datatables.net"
    },
    {
        img: "assets/images/user/4.jpg",
        name: "Quinn Flynn",
        position: "Support Lead",
        salary: "$342,000",
        office: "Edinburgh",
        skill: "progress-bar custom-progress-width bg-danger w-50",
        progress: "50%",
        extn: 9497,
        email: "q.flynn@datatables.net"
    },
    {
        img: "assets/images/user/5.jpg",
        name: "Charde Marshall",
        position: "Regional Director",
        salary: "$470,600",
        office: "San Francisco",
        skill: "progress-bar custom-progress-width bg-info w-27",
        progress: "27%",
        extn: 6741,
        email: "c.marshall@datatables.net"
    },
    {
        img: "assets/images/user/6.jpg",
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        salary: "$313,500",
        office: "London",
        skill: "progress-bar custom-progress-width bg-success w-35",
        progress: "35%",
        extn: 3597,
        email: "h.kennedy@datatables.net"
    },
    {
        img: "assets/images/user/7.jpg",
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        salary: "$385,750",
        office: "London",
        skill: "progress-bar custom-progress-width bg-warning w-80",
        progress: "80%",
        extn: 1965,
        email: "t.fitzpatrick@datatables.net"
    },
    {
        img: "assets/images/user/8.jpg",
        name: "Michael Silva",
        position: "Marketing Designer",
        salary: "$198,500",
        office: "London",
        skill: "progress-bar custom-progress-width bg-primary w-74",
        progress: "74%",
        extn: 1581,
        email: "m.silva@datatables.net"
    },
    {
        img: "assets/images/user/9.jpg",
        name: "Michael Silva",
        position: "Paul Byrd",
        salary: "Chief Financial Officer (CFO)",
        office: "$725,000",
        skill: "progress-bar custom-progress-width bg-ress-bar w-30 bg-success",
        progress: "30%",
        extn: 3059,
        email: "p.byrd@datatables.net"
    },
    {
        img: "assets/images/user/10.jpg",
        name: "Gloria Little",
        position: "Systems Administrator",
        salary: "$237,500",
        office: "New York",
        skill: "progress-bar custom-progress-width bg-success w-50",
        progress: "50%",
        extn: 1721,
        email: "g.little@datatables.net"
    },
    {
        img: "assets/images/user/2.png",
        name: "Bradley Greer",
        position: "Software Engineer",
        salary: "$132,000",
        office: "London",
        skill: "progress-bar custom-progress-width bg-primary w-30",
        progress: "30%",
        extn: 2558,
        email: "b.greer@datatables.net"
    },
    {
        img: "assets/images/user/5.jpg",
        name: "Michael Silva",
        position: "Dai Rios",
        salary: "Personnel Lead",
        office: "$217,500",
        skill: "progress-bar custom-progress-width  bg-warning w-40",
        progress: "40%",
        extn: 2290,
        email: "d.rios@datatables.net"
    },
    {
        img: "assets/images/user/1.jpg",
        name: "Jenette Caldwell",
        position: "Development Lead",
        salary: "$345,000",
        office: "New York",
        skill: "progress-bar custom-progress-width bg-primary w-30",
        progress: "80%",
        extn: 1937,
        email: "j.caldwell@datatables.net"
    },
    {
        img: "assets/images/user/2.png",
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        salary: "$675,000",
        office: "New York",
        skill: "progress-bar custom-progress-width bg-danger w-20",
        progress: "30%",
        extn: 6154,
        email: "y.berry@datatables.net"
    },
    {
        img: "assets/images/user/3.jpg",
        name: "C",
        position: "Pre-Sales Support",
        salary: "$106,450",
        office: "New York",
        skill: "progress-bar custom-progress-width bg-success w-10",
        progress: "70%",
        extn: 8330,
        email: "c.vance@datatables.net"
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_components_support-ticket_support-ticket_module_ts.js.map