"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_components_widgets_widgets_module_ts"],{

/***/ 49220:
/*!*************************************************************!*\
  !*** ./src/app/components/widgets/chart/chart.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/widgets-chart/chart-widget */ 62206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ 34706);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);






class ChartComponent {
    constructor() {
        this.isOpened = true;
        this.monthlydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutData;
        this.dailydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutData;
        this.chart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart1;
        this.chart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart2;
        this.chart3 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart3;
        this.WidgetBarChart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.WidgetBarChart1;
        this.WidgetBarChart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.WidgetBarChart2;
        this.liveProductChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.liveProductChart;
        this.turnOverChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.turnOverChart;
        this.monthlyChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlyChart;
        this.usesChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.usesChart;
        this.financeWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.financeWidget;
        this.orderStatusWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.orderStatusWidget;
        this.skillWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.skillWidget;
        // Doughnut Chart (Monthlt visitor chart)
        this.monthlydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartcolorScheme;
        this.monthlydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartShowLabels;
        this.monthlydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartGradient;
        // Doughnut Chart (Daily visitor chart)
        this.dailydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartcolorScheme;
        this.dailydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartShowLabels;
        this.dailydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartGradient;
        Object.assign(this, { monthlydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutData, dailydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutData });
    }
    ngOnInit() { }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 321, vars: 114, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4", "col-md-12"], [1, "card"], [1, "chart-widget-top"], [1, "row", "card-body"], [1, "col-5"], [1, "font-primary"], [1, "num"], [1, "counter"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "col-7", "text-end"], [1, "num", "total-value"], [1, "counter", 3, "CountTo", "from", "duration"], ["id", "chart-widget-top-first", 1, "flot-chart-placeholder"], [3, "data", "type", "options", "events"], [1, "col-7"], [1, "col-5", "text-end"], [1, "num", "total-value", "counter", 3, "CountTo", "from", "duration"], ["id", "chart-widget-top-second", 1, "flot-chart-placeholder"], [1, "col-8"], [1, "col-4", "text-end"], ["id", "chart-widget-top-third", 1, "flot-chart-placeholder"], [1, "col-xl-6", "col-md-12"], [1, "card", "o-hidden"], [1, "bar-chart-widget"], [1, "top-content", "bg-primary"], [1, "card-body", "pb-0"], [3, "data", "type", "options"], [1, "earning-details"], [1, "text-start"], [1, "mt-1", "num", "mb-0"], [1, "icon-announcement"], [1, "bottom-content", "card-body"], [1, "col-4", "b-r-light"], [1, "num", "font-primary"], [1, "text-muted", "mt-2", "mb-2", "block-bottom"], [1, "num", "m-0"], [1, "counter", "color-bottom", 3, "CountTo", "from", "duration"], [1, "col-4"], [1, "icofont", "icofont-coins"], [1, "xl-50", "col-md-6"], [1, "small-chart-widget"], [1, "card-header"], [1, "card-body", "bg-primary"], [1, "chart-container"], [1, "live-products"], [1, "live-products", 3, "data", "type", "options", "events"], [1, "card-body", "bg-secondary"], [1, "turnover"], [1, "monthly"], [3, "type", "data", "options"], [1, "uses"], [1, "uses", 3, "data", "type", "options"], [1, "col-xl-4", "col-lg-12"], [1, "status-widget"], [1, "col-9"], [1, "col-3", "text-sm-right"], ["data-feather", "navigation", 1, "text-muted"], [1, "card-body"], [1, "status-details"], [1, "col-4", "text-center"], [1, "counter", "mb-0", 3, "CountTo", "from", "duration"], [1, "mb-0"], [1, "status-chart", "bg-primary"], ["id", "finance-graph", 1, "flot-chart-placeholder"], ["data-feather", "shopping-bag", 1, "text-muted"], [1, "status-chart", "bg-secondary"], ["id", "order-graph", 1, "flot-chart-placeholder"], ["data-feather", "trending-up", 1, "text-muted"], [1, "flot-chart-placeholder", 3, "data", "type", "options"], [1, "col-sm-6"], [1, "donut-chart-widget"], [3, "scheme", "results", "explodeSlices", "labels", "arcWidth", "doughnut", "gradient"], ["id", "website-visiter-chart", 1, "flot-chart-placeholder"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "SALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, ".00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "div", 16)(27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 8)(30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div")(37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 2)(40, "div", 3)(41, "div", 4)(42, "div", 5)(43, "div", 20)(44, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 8)(47, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 21)(52, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div")(56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 1)(59, "div", 23)(60, "div", 24)(61, "div", 25)(62, "div", 26)(63, "div", 1)(64, "div", 16)(65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 6)(68, "div", 29)(69, "div", 30)(70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Marketing Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 33)(77, "div", 1)(78, "div", 34)(79, "div")(80, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 34)(89, "div")(90, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 39)(99, "div")(100, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Advertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 23)(109, "div", 24)(110, "div", 25)(111, "div", 26)(112, "div", 1)(113, "div", 16)(114, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 6)(117, "div", 29)(118, "div", 30)(119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 33)(126, "div", 1)(127, "div", 34)(128, "div")(129, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 34)(138, "div")(139, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 39)(148, "div")(149, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 1)(158, "div", 41)(159, "div", 42)(160, "div", 3)(161, "div", 43)(162, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Live Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 44)(165, "div", 45)(166, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "x-chartist", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 41)(169, "div", 42)(170, "div", 3)(171, "div", 43)(172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Turnover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 48)(175, "div", 45)(176, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 41)(179, "div", 42)(180, "div", 3)(181, "div", 43)(182, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 48)(185, "div", 45)(186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "x-chartist", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 41)(189, "div", 42)(190, "div", 3)(191, "div", 43)(192, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 44)(195, "div", 45)(196, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "x-chartist", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 1)(199, "div", 54)(200, "div", 55)(201, "div", 3)(202, "div", 43)(203, "div", 1)(204, "div", 56)(205, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 59)(210, "div", 60)(211, "div", 1)(212, "div", 61)(213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Investor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "h4", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 61)(217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 61)(223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 64)(229, "div", 45)(230, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 54)(233, "div", 55)(234, "div", 3)(235, "div", 43)(236, "div", 1)(237, "div", 56)(238, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div", 59)(243, "div", 60)(244, "div", 1)(245, "div", 61)(246, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 61)(252, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 61)(258, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 67)(264, "div", 45)(265, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "x-chartist", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "div", 54)(268, "div", 55)(269, "div", 3)(270, "div", 43)(271, "div", 1)(272, "div", 56)(273, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "Skill Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 59)(278, "div", 60)(279, "div", 1)(280, "div", 61)(281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "div", 61)(287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](290, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "div", 61)(293, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Converse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "h4", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](296, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "div", 64)(299, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](300, "x-chartist", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "div", 1)(302, "div", 71)(303, "div", 72)(304, "div", 3)(305, "div", 43)(306, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Browser Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "div", 59)(309, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "ngx-charts-pie-chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 71)(312, "div", 72)(313, "div", 3)(314, "div", 43)(315, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Website Visiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 59)(318, "div", 45)(319, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "ngx-charts-pie-chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3654)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chart1.data)("type", ctx.chart1.type)("options", ctx.chart1.options)("events", ctx.chart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 12569)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chart2.data)("type", ctx.chart2.type)("options", ctx.chart2.options)("events", ctx.chart2.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 93)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chart3.data)("type", ctx.chart3.type)("options", ctx.chart3.options)("events", ctx.chart3.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.WidgetBarChart1.data)("type", ctx.WidgetBarChart1.type)("options", ctx.WidgetBarChart1.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3654)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 9313)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 2314)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 4219)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.WidgetBarChart2.data)("type", ctx.WidgetBarChart2.type)("options", ctx.WidgetBarChart2.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3653)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 698)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 9361)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.liveProductChart.data)("type", ctx.liveProductChart.type)("options", ctx.liveProductChart.options)("events", ctx.liveProductChart.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.turnOverChart.data)("type", ctx.turnOverChart.type)("options", ctx.turnOverChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.monthlyChart.type)("data", ctx.monthlyChart.data)("options", ctx.monthlyChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.usesChart.data)("type", ctx.usesChart.type)("options", ctx.usesChart.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 362)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 86)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.financeWidget.data)("type", ctx.financeWidget.type)("options", ctx.financeWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 62)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 20)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.orderStatusWidget.data)("type", ctx.orderStatusWidget.type)("options", ctx.orderStatusWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 25)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 40)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 35)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.skillWidget.data)("type", ctx.skillWidget.type)("options", ctx.skillWidget.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.monthlydoughnutChartColorScheme)("results", ctx.monthlydoughnutData)("explodeSlices", true)("labels", ctx.monthlydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.monthlydoughnutChartGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.dailydoughnutChartColorScheme)("results", ctx.dailydoughnutData)("explodeSlices", true)("labels", ctx.dailydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.dailydoughnutChartGradient);
    } }, dependencies: [angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToDirective, ng_chartist__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.PieChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ 51641:
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/general/general.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralComponent": () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 61676);








function GeneralComponent_783_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.designation);
} }
function GeneralComponent_783_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GeneralComponent_783_ng_template_0_Template, 8, 4, "ng-template", 226);
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", data_r2.id);
} }
class GeneralComponent {
    constructor(calender) {
        this.calender = calender;
        this.time = new Date();
        this.jstoday = '';
        this.today = Date.now();
        this.owlcarousel = [
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            },
            {
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
                img: "assets/images/dashboard/boy-2.png",
                name: "Poio klot",
                designation: "Developer"
            }
        ];
        this.owlcarouselOptions = {
            loop: true,
            margin: 10,
            items: 1,
            nav: false,
            dots: false
        };
        this.model = calender.getToday();
        this.jstoday = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.time, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }
    setTime() {
        this.intmin = setInterval(function () {
            var second = new Date().getSeconds();
            var sdegree = second * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            var seconds = document.getElementById('sec').style.transform = srotate;
        }, 1000);
        this.intsec = setInterval(function () {
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            var minits = document.getElementById('min').style.transform = mrotate;
        }, 1000);
        this.inthour = setInterval(function () {
            var hour = new Date().getHours();
            var mints = new Date().getMinutes();
            var hdegree = hour * 30 + (mints / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            var hours = document.getElementById('hour').style.transform = hrotate;
        }, 1000);
    }
    ngOnInit() {
        const now = new Date();
        this.setTime();
    }
    ngOnDestroy() {
        if (this.intmin) {
            clearInterval(this.intmin);
        }
        if (this.intsec) {
            clearInterval(this.intsec);
        }
        if (this.inthour) {
            clearInterval(this.inthour);
        }
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCalendar)); };
GeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 808, vars: 110, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-xl-3", "col-lg-6"], [1, "card", "o-hidden"], [1, "bg-primary", "b-r-4", "card-body"], [1, "d-flex", "static-top-widget"], [1, "align-self-center", "text-center"], [3, "icon"], [1, "flex-grow-1", "mediaBody"], [1, "m-0"], [1, "mb-0", "counter", 3, "CountTo", "from", "duration"], ["data-feather", "navigation", 1, "icon-bg"], [1, "bg-secondary", "b-r-4", "card-body"], ["data-feather", "box", 1, "icon-bg"], ["data-feather", "message-square", 1, "icon-bg"], ["data-feather", "users", 1, "icon-bg"], [1, "col-xl-6", "xl-100"], [1, "widget-joins", "card"], [1, "col-sm-6", "pe-0"], [1, "d-flex", "mediaClass", "border-after-xs"], [1, "align-self-center", "me-3"], [1, "fa", "fa-angle-up", "ms-2"], [1, "flex-grow-1", "details", "ps-3"], [1, "mb-1"], [1, "mb-0", "counter", "digits", 3, "CountTo", "from", "duration"], [1, "flex-grow-1", "align-self-center"], ["data-feather", "shopping-bag", 1, "font-primary", "float-start", "ms-2"], [1, "col-sm-6", "ps-0"], [1, "d-flex", "mediaClass"], [1, "align-self-center", "me-3", "digits"], [1, "fa", "fa-angle-down", "ms-2"], ["data-feather", "layers", 1, "font-primary", "float-start", "ms-3"], [1, "flex-grow-1", "details", "ps-3", "pt-0"], ["data-feather", "shopping-cart", 1, "font-primary", "float-start", "ms-2"], ["data-feather", "dollar-sign", 1, "font-primary", "float-start", "ms-2"], [1, "widget-joins", "card", "widget-arrow"], [1, "align-self-center", "me-3", "text-start"], [1, "mb-0"], ["data-feather", "arrow-down", 1, "font-primary"], [1, "flex-grow-1"], [1, "counter", 3, "CountTo", "from", "duration"], ["data-feather", "arrow-up", 1, "font-primary"], [1, "flex-grow-1", "ps-2"], [1, "flex-grow-1", "align-self-center", "ps-3"], [1, "card"], [1, "cal-date-widget", "card-body"], [1, "col-xl-6", "col-xs-12", "col-md-6", "col-sm-6"], [1, "cal-info", "text-center"], [1, "d-inline-block", "mt-2"], [1, "b-r-dark", "mr-3", "pe-3"], [1, "ps-3"], [1, "mt-4", "f-16", "text-muted"], [1, "cal-datepicker", "custom-datepicker", "float-end"], ["data-language", "en", 1, "datepicker-here"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "col-xl-3", "xl-50", "col-sm-6"], [1, "weather-widget-two"], [1, "card-body"], [1, "d-flex"], ["id", "cloudDrizzleMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonAlt"], ["id", "cloudFillClip"], ["d", "M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"], ["id", "moonCloudFillClip"], ["d", "M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonAlt"], ["clip-path", "url(#cloudFillClip)"], ["clip-path", "url(#moonCloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-drizzle"], ["id", "Drizzle-Left_1_", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "flex-grow-1", "align-self-center", "text-white"], [1, "m-0", "f-w-600", "num"], [1, "m-0", "f-14"], ["id", "cloudRainMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainMoon"], ["id", "cloudFillClip1"], ["id", "moonCloudFillClip1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoon"], ["clip-path", "url(#cloudFillClip1)"], ["clip-path", "url(#moonCloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-rain"], ["d", "M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "left"], ["d", "M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "middle"], ["d", "M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "right"], ["clip-path", "url(#cloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["id", "cloudDrizzle", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzle"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzle"], ["d", "M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "top-bg-whether"], ["id", "cloudHailAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltFill"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-hailAlt"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-left"], ["cx", "42", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-middle"], ["cx", "49.999", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-right"], ["cx", "57.998", "cy", "65.498", "r", "2"], [1, "climacon_componentWrap", "climacon_componentWrap_cloud"], ["d", "M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["fill", "#FFFFFF", "d", "M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], [1, "bottom-whetherinfo"], [1, "col-6"], [1, "whether-content"], [1, "num", "mb-0"], [1, "mobile-clock-widget"], [1, "bg-svg"], ["id", "cloudLightningMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningMoon"], ["id", "moonCloudFillClipfill11"], ["id", "cloudFillClipfill19"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningMoon"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-lightning"], ["points", "48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 ", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_lightning"], ["d", "M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "clock", 1, "clock"], ["id", "hour", 1, "hour"], ["id", "min", 1, "min"], ["id", "sec", 1, "sec"], ["id", "date", 1, "date", "f-24", "mb-2"], [1, "m-0", "f-14", "text-light"], [1, "col-sm-6", "col-xl-3", "xl-50", "col-lg-6"], [1, "card", "social-widget-card"], ["data-label", "50%", 1, "redial-social-widget", "radial-bar-70"], [1, "fa", "fa-facebook", "font-primary"], [1, "b-b-light"], [1, "col", "text-center", "b-r-light"], [1, "counter", "mb-0", 3, "CountTo", "from", "duration"], [1, "col", "text-center"], [1, "fa", "fa-twitter", "font-primary"], [1, "fa", "fa-linkedin", "font-primary"], [1, "fa", "fa-google-plus", "font-primary"], [1, "col-md-4", "col-sm-12"], [1, "card", "browser-widget"], [1, "d-flex", "card-body"], [1, "media-img"], ["src", "assets/images/dashboard/chrome.png", "alt", ""], [1, "flex-grow-1", "align-self-center", "mediaClass"], ["src", "assets/images/dashboard/firefox.png", "alt", ""], ["src", "assets/images/dashboard/safari.png", "alt", ""], [1, "card-header"], [1, "user-status", "table-responsive"], [1, "table", "table-bordernone"], ["scope", "col"], [1, "digits"], [1, "font-primary"], [1, "font-secondary"], [1, "bd-t-none", "u-s-tb"], [1, "align-middle", "image-sm-size"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], [1, "text-muted", "digits"], [1, "progress-showcase"], [1, "progress", 2, "height", "8px"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "30%"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "60%"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "30%"], ["src", "assets/images/user/7.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "col-sm-12", "col-lg-6", "col-xl-4", "xl-50", "col-md-12"], [1, "calender-widget"], [1, "cal-img"], [1, "cal-date"], [1, "cal-desc", "text-center", "card-body"], [1, "f-w-600"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-sm-12", "col-lg-6", "col-xl-8", "xl-50", "col-md-12"], [1, "contact-form", "card-body"], [1, "theme-form"], [1, "form-icon"], [1, "icofont", "icofont-envelope-open"], [1, "form-group"], ["for", "exampleInputName"], ["id", "exampleInputName", "type", "text", "placeholder", "John Dio", 1, "form-control"], ["for", "exampleInputEmail1", 1, "col-form-label"], ["id", "exampleInputEmail1", "type", "email", "placeholder", "Demo@gmail.com", 1, "form-control"], ["rows", "3", "cols", "50", "placeholder", "Your Message", 1, "form-control", "textarea"], [1, "text-sm-right"], [1, "btn", "btn-primary-gradien"], [1, "col-xl-4", "col-lg-12"], [1, "text-uppercase"], [1, "crm-activity"], [1, "me-3", "font-primary"], [1, "align-self-center", "flex-grow-1", "m-l-15"], [1, "mt-0"], [1, "dates"], [1, "me-3", "font-secondary"], [1, "m-r-3", "font-primary"], [1, "col-xl-4"], [1, "card", "custom-card"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "card", "testimonial", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "card", "xl-none"], [1, "ecommerce-widget", "card-body"], [1, "total-num", "counter", 3, "CountTo", "from", "duration"], [1, "text-md-end"], [1, "product-stts", "font-primary", "ms-2"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "icon-angle-down", "f-12", "me-1"], [1, "progress", "lg-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["carouselSlide", "", "class", "item", 3, "id"], [1, "icon-quote-left"], ["alt", "", 1, "img-80", 3, "src"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "h4", 10)(12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 12)(16, "div", 5)(17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "9856");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2)(26, "div", 3)(27, "div", 4)(28, "div", 5)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8)(32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "893");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "div", 5)(41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 8)(44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "45631");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 16)(50, "div", 17)(51, "div", 1)(52, "div", 18)(53, "div", 19)(54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 22)(58, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "6982");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 27)(65, "div", 28)(66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 22)(70, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "783");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 18)(77, "div", 19)(78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 32)(82, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "3674");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 27)(89, "div", 28)(90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 32)(94, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 16)(100, "div", 35)(101, "div", 1)(102, "div", 18)(103, "div", 19)(104, "div", 36)(105, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 39)(112, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "-$2658(36%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 27)(118, "div", 28)(119, "div", 36)(120, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 42)(127, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "+$369(15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 18)(133, "div", 19)(134, "div", 36)(135, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 39)(142, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "+$69(65%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 27)(148, "div", 28)(149, "div", 36)(150, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 42)(157, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "+$3654(90%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 16)(163, "div", 44)(164, "div", 45)(165, "div", 1)(166, "div", 46)(167, "div", 47)(168, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 48)(171, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "There is no minimum donation, any sum is appreciated");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 46)(178, "div", 52)(179, "div", 53)(180, "ngb-datepicker", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeneralComponent_Template_ngb_datepicker_ngModelChange_180_listener($event) { return ctx.model = $event; })("navigate", function GeneralComponent_Template_ngb_datepicker_navigate_180_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 56)(183, "div", 44)(184, "div", 57)(185, "div", 58)(186, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "svg", 60)(188, "clippath", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "clippath", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "g", 65)(193, "g", 66)(194, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "path", 70)(198, "path", 71)(199, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 75)(203, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "25\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Newyork");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "svg", 78)(209, "clippath", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "clippath", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "g", 81)(214, "g", 82)(215, "g", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "g", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "path", 85)(219, "path", 86)(220, "path", 87)(221, "path", 85)(222, "path", 86)(223, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "g", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 75)(227, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "95\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Peris");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "svg", 89)(233, "g", 90)(234, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "path", 91)(236, "path", 92)(237, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 75)(241, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "50\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "svg", 97)(247, "g", 98)(248, "g", 99)(249, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](252, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "circle", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "circle", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "g", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](262, "path", 107)(263, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 109)(265, "div", 1)(266, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 110)(269, "div", 111)(270, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, "India, Surat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "h4", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "36\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 56)(275, "div", 44)(276, "div", 113)(277, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "svg", 115)(279, "clippath", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "clippath", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "g", 118)(284, "g", 66)(285, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "g", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "polygon", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](290, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div")(292, "ul", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](293, "li", 123)(294, "li", 124)(295, "li", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](298, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div")(300, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "kolkata, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 128)(303, "div", 129)(304, "div", 58)(305, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "div", 1)(310, "div", 133)(311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](313, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 135)(315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](317, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "div", 128)(319, "div", 129)(320, "div", 58)(321, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](322, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 1)(326, "div", 133)(327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](329, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "div", 135)(331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](333, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 128)(335, "div", 129)(336, "div", 58)(337, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](338, "i", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "div", 1)(342, "div", 133)(343, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 135)(347, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](349, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "div", 128)(351, "div", 129)(352, "div", 58)(353, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](354, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](356, "Google +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "div", 1)(358, "div", 133)(359, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](361, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "div", 135)(363, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](365, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "div", 139)(367, "div", 140)(368, "div", 141)(369, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](370, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "div", 144)(372, "div")(373, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div")(379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](382, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "div")(385, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](388, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "div", 139)(391, "div", 140)(392, "div", 141)(393, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](394, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "div", 144)(396, "div")(397, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](400, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "div")(403, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "div")(409, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](412, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 139)(415, "div", 140)(416, "div", 141)(417, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](418, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "div", 144)(420, "div")(421, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](422, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](424, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](425, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "div")(427, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](430, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "div")(433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](436, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "div", 16)(439, "div", 44)(440, "div", 147)(441, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "PRODUCTS CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "div", 58)(444, "div", 148)(445, "table", 149)(446, "thead")(447, "tr")(448, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](453, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "tbody")(457, "tr")(458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "Simply dummy text of the printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](463, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](465, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "tr")(467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](468, "Long established");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](470, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](472, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](474, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "tr")(476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](477, "sometimes by accident");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](479, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](481, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](483, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "tr")(485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](486, "Classical Latin literature");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](488, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](490, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "tr")(494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](495, "keep the site on the Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](497, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](499, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](501, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "tr")(503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](504, "Molestiae consequatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](506, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](508, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](509, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](510, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "tr")(512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](513, "Pain can procure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](514, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](515, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](517, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](519, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "div", 16)(521, "div", 44)(522, "div", 147)(523, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](524, "EMPLOYEE STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](525, "div", 58)(526, "div", 148)(527, "table", 149)(528, "thead")(529, "tr")(530, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](531, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](532, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](533, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](535, "Skill Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](536, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](537, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "tbody")(539, "tr")(540, "td", 154)(541, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](542, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "div", 157)(544, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](545, "John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](547, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](549, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "td")(551, "div", 159)(552, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](553, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](555, "2 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](556, "tr")(557, "td", 154)(558, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](559, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](560, "div", 157)(561, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](562, "Holio Mako ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](564, "(250+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](566, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "td")(568, "div", 159)(569, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](570, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](571, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](572, "3 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "tr")(574, "td", 154)(575, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](576, "img", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](577, "div", 157)(578, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](579, "Mohsib lara");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](580, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](581, "(99+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "Tester");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "td")(585, "div", 159)(586, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](587, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](588, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](589, "5 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](590, "tr")(591, "td", 154)(592, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](593, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](594, "div", 157)(595, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](596, "Hileri Soli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](598, "(150+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](600, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "td")(602, "div", 159)(603, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](604, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](605, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](606, "3 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](607, "tr")(608, "td", 154)(609, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](610, "img", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](611, "div", 157)(612, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](613, "Pusiz bia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](614, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](615, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](617, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](618, "td")(619, "div", 159)(620, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](621, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](622, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](623, "5 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](624, "div", 170)(625, "div", 44)(626, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](627, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](628, "div", 173)(629, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](630, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](631, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](632, "APRIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](633, "div", 174)(634, "h6", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](635, "I must explain to you how all this mistaken idea truth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "p", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](637, "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages, and more recently.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](638, "div", 177)(639, "div", 44)(640, "div", 147)(641, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](642, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](643, "div", 178)(644, "form", 179)(645, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](646, "i", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "div", 182)(648, "label", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](649, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](650, "input", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](651, "div", 182)(652, "label", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](653, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](654, "input", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](655, "div", 182)(656, "label", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](657, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](658, "textarea", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](659, "div", 188)(660, "button", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](661, "SEND IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](662, "div", 190)(663, "div")(664, "div", 44)(665, "div", 147)(666, "h5", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](667, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "div", 58)(669, "ul", 192)(670, "li", 59)(671, "span", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](672, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](673, "div", 194)(674, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](675, "Established fact that a reader will be distracted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](676, "ul", 196)(677, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](678, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](679, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](680, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](681, "li", 59)(682, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](683, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](684, "div", 194)(685, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](686, "Any desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](687, "ul", 196)(688, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](689, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](690, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](691, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](692, "li", 59)(693, "span", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](694, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](695, "div", 194)(696, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](697, "There isn't anything embarrassing hidden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](698, "ul", 196)(699, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](700, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](702, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](703, "li", 59)(704, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](705, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](706, "div", 194)(707, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](708, "Contrary to popular belief, Lorem Ipsum is not simply. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](709, "ul", 196)(710, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](711, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](712, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](713, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](714, "li", 59)(715, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](716, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](717, "div", 194)(718, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](719, "H-Code - A premium portfolio template from ThemeZaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](720, "ul", 196)(721, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](722, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](723, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](724, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](725, "li", 59)(726, "div", 194)(727, "ul", 196)(728, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](729, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](731, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](732, "div", 199)(733, "div", 200)(734, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](735, "img", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](736, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](737, "img", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](738, "ul", 204)(739, "li")(740, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](741, "i", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](742, "li")(743, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](744, "i", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](745, "li")(746, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](747, "i", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](748, "li")(749, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](750, "i", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](751, "li")(752, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](753, "i", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](754, "div", 211)(755, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](756, "Mark Jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](757, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](758, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](759, "div", 212)(760, "div", 213)(761, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](762, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](763, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](764, "9564");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](765, "div", 213)(766, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](767, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](768, "h3")(769, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](770, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](771, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](772, "div", 213)(773, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](774, "Total Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](775, "h3")(776, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](777, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](778, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](779, "div", 199)(780, "div", 214)(781, "div", 58)(782, "owl-carousel-o", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](783, GeneralComponent_783_Template, 1, 1, null, 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](784, "div", 217)(785, "div", 218)(786, "div", 1)(787, "div", 110)(788, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](789, "New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](790, "h3", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](791, "16665");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](792, "div", 110)(793, "div", 220)(794, "ul")(795, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](796, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](797, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](798, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](799, "i", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](800, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](801, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](802, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](803, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](804, "i", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](805, "div", 159)(806, "div", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](807, "div", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 6659)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "box");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 9856)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "message-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 893)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 45631)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 6982)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 783)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3674)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 69)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 25698)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 6954)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 63147)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 963198)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "cloud-drizzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](298, 108, ctx.today), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 6589)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 75269)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 6589)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 75269)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 1234)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 4369)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 369)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 3458)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 36)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 46)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 9564)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 49)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 96)("from", 0)("duration", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.owlcarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.owlcarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 16665)("from", 0)("duration", 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDatepicker, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });


/***/ }),

/***/ 55246:
/*!**************************************************************!*\
  !*** ./src/app/components/widgets/widgets-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsRoutingModule": () => (/* binding */ WidgetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/general.component */ 51641);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ 49220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        children: [
            {
                path: 'general',
                component: _general_general_component__WEBPACK_IMPORTED_MODULE_0__.GeneralComponent,
                data: {
                    title: "General",
                    breadcrumb: "General"
                }
            },
            {
                path: 'chart',
                component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,
                data: {
                    title: "Chart",
                    breadcrumb: "Chart"
                }
            },
        ]
    }
];
class WidgetsRoutingModule {
}
WidgetsRoutingModule.ɵfac = function WidgetsRoutingModule_Factory(t) { return new (t || WidgetsRoutingModule)(); };
WidgetsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WidgetsRoutingModule });
WidgetsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 25696:
/*!******************************************************!*\
  !*** ./src/app/components/widgets/widgets.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsModule": () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-routing.module */ 55246);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/general.component */ 51641);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/chart.component */ 49220);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-chartist */ 34706);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);













class WidgetsModule {
}
WidgetsModule.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); };
WidgetsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WidgetsModule });
WidgetsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WidgetsModule, { declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_1__.GeneralComponent, _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.NgxChartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 62206:
/*!***********************************************************!*\
  !*** ./src/app/shared/data/widgets-chart/chart-widget.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetBarChart1": () => (/* binding */ WidgetBarChart1),
/* harmony export */   "WidgetBarChart2": () => (/* binding */ WidgetBarChart2),
/* harmony export */   "chart1": () => (/* binding */ chart1),
/* harmony export */   "chart2": () => (/* binding */ chart2),
/* harmony export */   "chart3": () => (/* binding */ chart3),
/* harmony export */   "dailydoughnutChartGradient": () => (/* binding */ dailydoughnutChartGradient),
/* harmony export */   "dailydoughnutChartShowLabels": () => (/* binding */ dailydoughnutChartShowLabels),
/* harmony export */   "dailydoughnutChartcolorScheme": () => (/* binding */ dailydoughnutChartcolorScheme),
/* harmony export */   "dailydoughnutData": () => (/* binding */ dailydoughnutData),
/* harmony export */   "financeWidget": () => (/* binding */ financeWidget),
/* harmony export */   "liveProductChart": () => (/* binding */ liveProductChart),
/* harmony export */   "monthlyChart": () => (/* binding */ monthlyChart),
/* harmony export */   "monthlydoughnutChartGradient": () => (/* binding */ monthlydoughnutChartGradient),
/* harmony export */   "monthlydoughnutChartShowLabels": () => (/* binding */ monthlydoughnutChartShowLabels),
/* harmony export */   "monthlydoughnutChartcolorScheme": () => (/* binding */ monthlydoughnutChartcolorScheme),
/* harmony export */   "monthlydoughnutData": () => (/* binding */ monthlydoughnutData),
/* harmony export */   "orderStatusWidget": () => (/* binding */ orderStatusWidget),
/* harmony export */   "skillWidget": () => (/* binding */ skillWidget),
/* harmony export */   "turnOverChart": () => (/* binding */ turnOverChart),
/* harmony export */   "usesChart": () => (/* binding */ usesChart)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 97103);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Line Chart
var chart1 = {
    type: 'Line',
    data: {
        series: [
            [25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var chart2 = {
    type: 'Line',
    data: {
        series: [
            [25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var chart3 = {
    type: 'Line',
    data: {
        series: [
            [50, 100, 80, 60, 50, 60, 40, 80, 40, 50, 60, 40, 60, 70, 40, 50, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 100,
        showPoint: false,
    },
};
var WidgetBarChart1 = {
    type: 'Bar',
    data: {
        series: [
            [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30]
        ]
    },
    options: {
        labels: [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30],
        legend: {
            labels: { fontColor: 'white' }
        },
        axisX: {
            showGrid: false,
            showLabel: true,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: true,
            offset: 0,
        },
        tooltips: {
            disabled: true
        },
        toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
        chartPadding: {
            bottom: 0,
            top: 0,
            left: 0
        },
        responsive: true,
        height: 200
    },
};
var WidgetBarChart2 = {
    type: 'Bar',
    data: {
        series: [
            [60.00, 110.00, 20.00, 60.00, 100.00, 70, 30.00, 80.00, 80.00, 60.00, 20.00, 70, 0, 80]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            bottom: 0,
            top: 0,
            left: 0
        },
        showArea: true,
        fullWidth: true,
        height: 200
    },
};
var liveProductChart = {
    type: 'Line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1, 5, 2, 5, 4, 3, 6],
        ]
    },
    options: {
        low: 0,
        showArea: false,
        showPoint: false,
        fullWidth: true,
        height: 300,
    },
    events: {
        draw: (data) => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_0__.Svg.Easing.easeOutQuint
                    }
                });
            }
        }
    }
};
var turnOverChart = {
    type: 'Bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1.9, 4.4, 1.5, 5, 4.4, 3.4],
            [6.4, 5.7, 7, 4, 5.5, 3.5],
            [5, 2.3, 3.6, 6, 3.6, 2.3]
        ]
    },
    options: {
        height: 300,
    }
};
var monthlyChart = {
    type: 'Bar',
    data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
        series: [
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value) {
                return (value / 1000) + 'k';
            }
        },
        height: 300
    }
};
var usesChart = {
    type: 'Line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
            [1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],
            [5, 4, 3, 2, 1, 0.5]
        ]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        height: 300,
    }
};
var financeWidget = {
    type: 'Line',
    data: {
        series: [
            [5, 30, 27, 35, 30, 50, 70],
            [0, 5, 10, 7, 25, 20, 30]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var orderStatusWidget = {
    type: 'Line',
    data: {
        series: [
            [null],
            [40, 15, 25, 20, 15, 20, 10, 25, 35, 13, 35, 10, 30, 20, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var skillWidget = {
    type: 'Line',
    data: {
        series: [
            [null],
            [null],
            [5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20]
        ]
    },
    options: {
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0,
        },
        axisY: {
            showGrid: false,
            low: 0,
            showLabel: false,
            offset: 0,
        },
        chartPadding: {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        },
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
            tension: 0
        }),
        showArea: true,
        fullWidth: true,
        height: 200,
        showPoint: false,
    },
};
var monthlydoughnutData = [
    {
        value: 500,
        name: "Safari"
    },
    {
        value: 600,
        name: "Mozila Firefox"
    },
    {
        value: 400,
        name: "Google Crome"
    },
    {
        value: 700,
        name: "Opera Browser"
    }
];
//doughnut-Chart
//Monthly donught chart Options
var monthlydoughnutChartShowLabels = false;
var monthlydoughnutChartGradient = true;
var monthlydoughnutChartcolorScheme = {
    domain: [primary, secondary, primary, secondary],
};
var dailydoughnutData = [
    {
        value: 448,
        name: "India"
    },
    {
        value: 340,
        name: "USA"
    },
    {
        value: 270,
        name: "Canada"
    },
    {
        value: 359,
        name: "UK"
    }
];
//Monthly donught chart Options
var dailydoughnutChartShowLabels = false;
var dailydoughnutChartGradient = true;
var dailydoughnutChartcolorScheme = {
    domain: [primary, secondary, primary, secondary],
};


/***/ })

}]);
//# sourceMappingURL=src_app_components_widgets_widgets_module_ts.js.map