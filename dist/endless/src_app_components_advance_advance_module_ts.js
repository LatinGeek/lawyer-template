(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_components_advance_advance_module_ts"],{

/***/ 34699:
/*!**************************************************************!*\
  !*** ./src/app/components/advance/advance-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceRoutingModule": () => (/* binding */ AdvanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollable/scrollable.component */ 8884);
/* harmony import */ var _ngx_toastr_ngx_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-toastr/ngx-toastr.component */ 53331);
/* harmony import */ var _sweet_alert_sweet_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweet-alert/sweet-alert.component */ 65489);
/* harmony import */ var _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range-slider/range-slider.component */ 50174);
/* harmony import */ var _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-crop/image-crop.component */ 8713);
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ 9858);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload/upload.component */ 13021);
/* harmony import */ var _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sticky/sticky.component */ 67395);
/* harmony import */ var _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owl-carousel/owl-carousel.component */ 89888);
/* harmony import */ var _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngx-dropzone/ngx-dropzone.component */ 47781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: '',
        children: [
            {
                path: 'scrollable',
                component: _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_0__.ScrollableComponent,
                data: {
                    title: "Scrollable",
                    breadcrumb: "Scrollable"
                }
            },
            {
                path: 'toastr',
                component: _ngx_toastr_ngx_toastr_component__WEBPACK_IMPORTED_MODULE_1__.NgxToastrComponent,
                data: {
                    title: "Toastr",
                    breadcrumb: "Toastr"
                }
            },
            {
                path: 'sweetalert',
                component: _sweet_alert_sweet_alert_component__WEBPACK_IMPORTED_MODULE_2__.SweetAlertComponent,
                data: {
                    title: "Sweetalert",
                    breadcrumb: "Sweetalert"
                }
            },
            {
                path: 'range-slider',
                component: _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_3__.RangeSliderComponent,
                data: {
                    title: "Range-Slider",
                    breadcrumb: "Range-Slider"
                }
            },
            {
                path: 'crop',
                component: _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_4__.ImageCropComponent,
                data: {
                    title: "Cropper",
                    breadcrumb: "Cropper"
                }
            },
            {
                path: 'drag-drop',
                component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_5__.DragDropComponent,
                data: {
                    title: "Drag-Drop",
                    breadcrumb: "Drag-Drop"
                }
            },
            {
                path: 'upload',
                component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_6__.UploadComponent,
                data: {
                    title: "Upload",
                    breadcrumb: "Upload"
                }
            },
            {
                path: 'sticky',
                component: _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_7__.StickyComponent,
                data: {
                    title: "Sticky",
                    breadcrumb: "Sticky"
                }
            },
            {
                path: 'owl-carousel',
                component: _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_8__.OwlCarouselComponent,
                data: {
                    title: "Owl-Carousel",
                    breadcrumb: "Owl-Carousel"
                }
            },
            {
                path: 'dropzone',
                component: _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneComponent,
                data: {
                    title: "Dropzone",
                    breadcrumb: "Dropzone"
                }
            },
        ]
    }
];
class AdvanceRoutingModule {
}
AdvanceRoutingModule.??fac = function AdvanceRoutingModule_Factory(t) { return new (t || AdvanceRoutingModule)(); };
AdvanceRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AdvanceRoutingModule });
AdvanceRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AdvanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 41182:
/*!******************************************************!*\
  !*** ./src/app/components/advance/advance.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceModule": () => (/* binding */ AdvanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _advance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-routing.module */ 34699);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 8243);
/* harmony import */ var _image_crop_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-crop/image-cropper/image-cropper.module */ 47648);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-dragula */ 48370);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 897);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollable/scrollable.component */ 8884);
/* harmony import */ var _ngx_toastr_ngx_toastr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-toastr/ngx-toastr.component */ 53331);
/* harmony import */ var _sweet_alert_sweet_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sweet-alert/sweet-alert.component */ 65489);
/* harmony import */ var _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range-slider/range-slider.component */ 50174);
/* harmony import */ var _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-crop/image-crop.component */ 8713);
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload/upload.component */ 13021);
/* harmony import */ var _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sticky/sticky.component */ 67395);
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ 9858);
/* harmony import */ var _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./owl-carousel/owl-carousel.component */ 89888);
/* harmony import */ var _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngx-dropzone/ngx-dropzone.component */ 47781);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);

























const DEFAULT_DROPZONE_CONFIG = {
    maxFilesize: 50,
    url: 'https://httpbin.org/post',
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: false,
    wheelPropagation: false
};
class AdvanceModule {
}
AdvanceModule.??fac = function AdvanceModule_Factory(t) { return new (t || AdvanceModule)(); };
AdvanceModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({ type: AdvanceModule });
AdvanceModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({ providers: [
        { provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _advance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceRoutingModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _image_crop_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__.ImageCropperModule,
        ng2_dragula__WEBPACK_IMPORTED_MODULE_19__.DragulaModule.forRoot(),
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__.FileUploadModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DropzoneModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](AdvanceModule, { declarations: [_scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_4__.ScrollableComponent, _ngx_toastr_ngx_toastr_component__WEBPACK_IMPORTED_MODULE_5__.NgxToastrComponent, _sweet_alert_sweet_alert_component__WEBPACK_IMPORTED_MODULE_6__.SweetAlertComponent, _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_7__.RangeSliderComponent, _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_11__.DragDropComponent, _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__.UploadComponent, _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_10__.StickyComponent, _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_8__.ImageCropComponent, _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_12__.OwlCarouselComponent, _ngx_dropzone_ngx_dropzone_component__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _advance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceRoutingModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _image_crop_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__.ImageCropperModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_19__.DragulaModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__.FileUploadModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DropzoneModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 9858:
/*!*********************************************************************!*\
  !*** ./src/app/components/advance/drag-drop/drag-drop.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropComponent": () => (/* binding */ DragDropComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ 48370);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function DragDropComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const person_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, person_r5));
} }
function DragDropComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const person_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, person_r6));
} }
function DragDropComponent_div_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 27);
} if (rf & 2) {
    const text_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHtml", text_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function DragDropComponent_div_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 27);
} if (rf & 2) {
    const text_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHtml", text_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function DragDropComponent_div_240_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 27);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHtml", item_r11.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function DragDropComponent_div_240_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_div_240_Template_div_dragulaModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const group_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](group_r9.items = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DragDropComponent_div_240_div_4_Template, 1, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](group_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragulaModel", group_r9.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", group_r9.items);
} }
let personId = 0;
class Person {
    constructor(name) {
        this.name = name;
        this.id = personId++;
    }
}
class DragDropComponent {
    constructor(dragulaService) {
        this.dragulaService = dragulaService;
        this.BAG = "DRAGULA_EVENTS";
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.left = [
            new Person('Steven'),
            new Person('Paula'),
            new Person('Persephone'),
            new Person('Jacob'),
        ];
        this.right = [
            new Person('Delia'),
            new Person('Jackson'),
        ];
        this.MANY_ITEMS = 'MANY_ITEMS';
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        this.groups = [
            {
                name: 'Group A',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'Group B',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
        this.clicked = {
            'one': false,
            'two': false,
            'three': false,
            'four': false,
            'five': false,
            'six': false,
            'seven': false
        };
        this.subs.add(dragulaService.drag(this.BAG)
            .subscribe(({ el }) => {
            this.removeClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.drop(this.BAG)
            .subscribe(({ el }) => {
            this.addClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.over(this.BAG)
            .subscribe(({ el, container }) => {
            this.addClass(container, 'ex-over');
        }));
        this.subs.add(dragulaService.out(this.BAG)
            .subscribe(({ el, container }) => {
            this.removeClass(container, 'ex-over');
        }));
        //For drag and delete data from container
        dragulaService.createGroup("SPILL", {
            removeOnSpill: true
        });
        dragulaService.createGroup("REVERT", {
            revertOnSpill: true
        });
        //For copying item from one container to other
        dragulaService.createGroup('PERSON', {
            copy: (el, source) => {
                return source.id === 'left';
            },
            copyItem: (person) => {
                return new Person(person.name);
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            }
        });
        dragulaService.createGroup('COPYABLE', {
            copy: (el, source) => {
                return source.id === 'left';
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            }
        });
        dragulaService.createGroup("HANDLES", {
            moves: (el, container, handle) => {
                return handle.className === 'handle';
            }
        });
        this.dragulaService.createGroup("COLUMNS", {
            direction: 'horizontal',
            moves: (el, source, handle) => handle.className === "group-handle"
        });
    }
    ngOnInit() { }
    //onClick event on container
    onclick(key) {
        this.clicked[key] = true;
        setTimeout(() => {
            this.clicked[key] = false;
        }, 2000);
    }
    hasClass(el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    }
    addClass(el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    }
    removeClass(el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
        this.dragulaService.destroy('SPILL');
        this.dragulaService.destroy('REVERT');
        this.dragulaService.destroy('PERSON');
        this.dragulaService.destroy('COPYABLE');
        this.dragulaService.destroy('HANDLES');
        this.dragulaService.destroy('COLUMNS');
    }
}
DragDropComponent.??fac = function DragDropComponent_Factory(t) { return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_2__.DragulaService)); };
DragDropComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DragDropComponent, selectors: [["app-drag-drop"]], decls: 241, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "parent", "drag-n-drop"], [1, "wrapper"], ["dragula", "DRAGULA_FACTS", 1, "container"], ["dragula", "DRAGULA_EVENTS", 1, "container"], [1, "parent", "drag-n-drop", "spill-radius"], ["dragula", "SPILL", 1, "container"], ["dragula", "REVERT", 1, "container"], ["dragula", "COPYABLE", "id", "left", 1, "container"], ["dragula", "COPYABLE", "id", "right", 1, "container"], ["dragula", "PERSON", "id", "left", 1, "container", 3, "dragulaModel", "dragulaModelChange"], [4, "ngFor", "ngForOf"], ["dragula", "PERSON", "id", "right", 1, "container", 3, "dragulaModel", "dragulaModelChange"], ["dragula", "HANDLES", 1, "container"], [1, "handle"], ["dragula", "CLICKS", 1, "container"], [3, "click"], [1, "col-xl-6"], [1, "container", 3, "dragula", "dragulaModel", "dragulaModelChange"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["dragula", "COLUMNS", 1, "wrapper", 3, "dragulaModel", "dragulaModelChange"], ["class", "container", 4, "ngFor", "ngForOf"], [3, "innerHtml"], [1, "container"], [1, "group-handle"], ["dragula", "ITEMS", 1, "container", 3, "dragulaModel", "dragulaModelChange"]], template: function DragDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Basic Drag & Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "You can move these elements between these two containers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Moving them anywhere else isn't quite possible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "There's also the possibility of moving elements around in the same container, changing their position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8)(20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "This is the default use case. You only need to specify the containers you want to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "More interactive use cases lie ahead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Make sure to check out the documentation on GitHub!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Drag & Drop Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "There are plenty of events along the lifetime of a drag event. all of them in the docs!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 9)(37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "As soon as you start dragging an element, a drag event is fired");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Whenever an element is cloned because copy: true, a cloned event fires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "The shadow event fires whenever the placeholder showing where an element would be dropped is moved to a different container or position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "A drop event is fired whenever an element is dropped anywhere other than its origin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "(where it was initially dragged from)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 9)(48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "If the element gets removed from the DOM as a result of dropping outside of any containers, a remove event gets fired");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "A cancel event is fired when an element would be dropped onto an invalid target, but retains its original placement instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "The over event fires when you drag something over a container, and out fires when you drag it away from the container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Lastly, a dragend event is fired whenever a drag operation ends, regardless of whether it ends in a cancellation, removal, or drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 2)(57, "div", 3)(58, "div", 4)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Spill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily sort the items in any containers by just dragging and dropping.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 5)(64, "div", 10)(65, "div", 7)(66, "div", 11)(67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Banana Boat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Orange Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Cuban Cigar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Terrible Comedian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Anxious Cab Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Thriving Venture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Calm Clam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 2)(82, "div", 3)(83, "div", 4)(84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Revert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "By default, dropping an element outside of any known containers will keep the element in the last place it went over. You can make elements go back to origin if they're dropped outside of known containers, too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 5)(89, "div", 6)(90, "div", 7)(91, "div", 12)(92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Moving items between containers works as usual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "If you try to drop an item outside of any containers, though, it'll retain its original position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "When that happens, a cancel event will be raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 12)(99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Note that the dragged element will go back to the place you originally dragged it from, even if you move it over other containers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "This is useful if you want to ensure drop events only happen when the user intends for them to happen explicitly, avoiding surprises ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 2)(104, "div", 3)(105, "div", 4)(106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Copying stuff is common too, so we made it easy for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 5)(111, "div", 6)(112, "div", 7)(113, "div", 13)(114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "When elements are copyable, they can't be sorted in their origin container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Copying prevents original elements from being dragged. A copy gets created and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "that");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " gets dragged instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Whenever that happens, a cloned event is raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 14)(124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Note that the clones get destroyed if they're not dropped into another container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "You'll be dragging a copy, so when they're dropped into another container you'll see the duplication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 2)(129, "div", 3)(130, "div", 4)(131, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Copy Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "You must provide a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "copyItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " function if you're using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "[dragulaModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 5)(145, "div", 6)(146, "div", 7)(147, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_Template_div_dragulaModelChange_147_listener($event) { return ctx.left = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](148, DragDropComponent_div_148_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_Template_div_dragulaModelChange_149_listener($event) { return ctx.right = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](150, DragDropComponent_div_150_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 2)(152, "div", 3)(153, "div", 4)(154, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Drag handles float your cruise?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 5)(159, "div", 6)(160, "div", 7)(161, "div", 18)(162, "div")(163, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Move me, but you can use the plus sign to drag me around.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div")(167, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Note that handle element in the moves handler is just the original event target. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 18)(171, "div")(172, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "This might also be useful if you want multiple children of an element to be able to trigger a drag event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div")(176, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "You can also use the moves option to determine whether an element can be dragged at all from a container, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "drag handle or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 2)(183, "div", 3)(184, "div", 4)(185, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Click Or Drag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span")(188, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Click or Drag!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, " Fires a click when the mouse button is released before a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "mousemove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, " event, otherwise a drag event is fired. No extra configuration is necessary.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 5)(195, "div", 10)(196, "div", 7)(197, "div", 20)(198, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_198_listener() { return ctx.onclick("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_200_listener() { return ctx.onclick("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_202_listener() { return ctx.onclick("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_204_listener() { return ctx.onclick("four"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_206_listener() { return ctx.onclick("five"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_208_listener() { return ctx.onclick("six"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DragDropComponent_Template_div_click_210_listener() { return ctx.onclick("seven"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 22)(213, "div", 3)(214, "div", 4)(215, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Angular Ngfor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "span")(218, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Angular-specific example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, " Fancy some ngFor?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 5)(222, "div", 6)(223, "div", 7)(224, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_Template_div_dragulaModelChange_224_listener($event) { return ctx.many = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](225, DragDropComponent_div_225_Template, 1, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_Template_div_dragulaModelChange_226_listener($event) { return ctx.many2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](227, DragDropComponent_div_227_Template, 1, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 22)(229, "div", 3)(230, "div", 4)(231, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Nested");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "span")(234, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Angular-specific example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " Fancy some nested ngFor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 5)(238, "div", 6)(239, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragulaModelChange", function DragDropComponent_Template_div_dragulaModelChange_239_listener($event) { return ctx.groups = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](240, DragDropComponent_div_240_Template, 5, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragulaModel", ctx.left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.left);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragulaModel", ctx.right);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.right);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.clicked.one ? "Clicked!" : "Clicking on these elements triggers a regular click event you can listen to.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.clicked.two ? "Clicked!" : "Try dragging or clicking on this element.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.clicked.three ? "Clicked!" : "Note how you can click normally?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.clicked.four ? "Clicked!" : "Drags don't trigger click events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.clicked.five ? "Clicked!" : "Clicks don't end up in a drag, either.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.clicked.six ? "Clicked!" : "This is useful if you have elements that can be both clicked or dragged.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.clicked.seven ? "ZOMG, THAT TICKLES! PLEASE. STOP." : "Business as usual.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragula", ctx.MANY_ITEMS)("dragulaModel", ctx.many);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.many);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragula", ctx.MANY_ITEMS)("dragulaModel", ctx.many2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.many2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dragulaModel", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.groups);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng2_dragula__WEBPACK_IMPORTED_MODULE_2__.DragulaDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 8713:
/*!***********************************************************************!*\
  !*** ./src/app/components/advance/image-crop/image-crop.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropComponent": () => (/* binding */ ImageCropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _image_cropper_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-cropper/component/image-cropper.component */ 30086);


const _c0 = ["ImageCropperComponent"];
class ImageCropComponent {
    constructor() {
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    ngOnInit() { }
    // Display dummy cropped image 
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    //Display cropper on selected image
    imageLoaded() {
        this.showCropper = true;
    }
    //Select a file
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    //Rotate an image to left
    rotateLeft() {
        this.imageCropper.rotateLeft();
    }
    //Rotate an image to right
    rotateRight() {
        this.imageCropper.rotateRight();
    }
    //Flip an Image Horizontal
    flipHorizontal() {
        this.imageCropper.flipHorizontal();
    }
    //Flip an Image Vertical
    flipVertical() {
        this.imageCropper.flipVertical();
    }
    cropperReady() { }
    loadImageFailed() { }
}
ImageCropComponent.??fac = function ImageCropComponent_Factory(t) { return new (t || ImageCropComponent)(); };
ImageCropComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ImageCropComponent, selectors: [["app-image-crop"]], viewQuery: function ImageCropComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.imageCropper = _t.first);
    } }, decls: 22, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["format", "png", "outputType", "base64", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "text-center", "border-bottom", "pb-4"], [3, "src"], [1, "card-body", "btn-showcase"], [1, "image-cropper-btn"], ["type", "file", 1, "btn", "btn-outline-primary", 3, "change"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function ImageCropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Image Cropper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div")(8, "image-cropper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("imageCropped", function ImageCropComponent_Template_image_cropper_imageCropped_8_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function ImageCropComponent_Template_image_cropper_imageLoaded_8_listener() { return ctx.imageLoaded(); })("cropperReady", function ImageCropComponent_Template_image_cropper_cropperReady_8_listener() { return ctx.cropperReady(); })("loadImageFailed", function ImageCropComponent_Template_image_cropper_loadImageFailed_8_listener() { return ctx.loadImageFailed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8)(12, "div", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function ImageCropComponent_Template_input_change_13_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ImageCropComponent_Template_button_click_14_listener() { return ctx.rotateLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Rotate left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ImageCropComponent_Template_button_click_16_listener() { return ctx.rotateRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Rotate right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ImageCropComponent_Template_button_click_18_listener() { return ctx.flipHorizontal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Flip horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ImageCropComponent_Template_button_click_20_listener() { return ctx.flipVertical(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Flip vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("display", ctx.showCropper ? null : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 4 / 3)("resizeToWidth", 128)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    } }, dependencies: [_image_cropper_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_0__.ImageCropperComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1jcm9wLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 30086:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/advance/image-crop/image-cropper/component/image-cropper.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropperComponent": () => (/* binding */ ImageCropperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _utils_exif_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/exif.utils */ 82018);
/* harmony import */ var _utils_resize_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/resize.utils */ 47289);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






const _c0 = ["sourceImage"];
function ImageCropperComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r2.startMove($event, "move")); })("touchstart", function ImageCropperComponent_div_3_Template_div_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r4.startMove($event, "move")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r5.startMove($event, "resize", "topleft")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r6.startMove($event, "resize", "topleft")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r7.startMove($event, "resize", "topright")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r8.startMove($event, "resize", "topright")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r9.startMove($event, "resize", "bottomright")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r10.startMove($event, "resize", "bottomright")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r11.startMove($event, "resize", "bottomleft")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r12.startMove($event, "resize", "bottomleft")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r13.startMove($event, "resize", "top")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r14.startMove($event, "resize", "top")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r15.startMove($event, "resize", "right")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r16.startMove($event, "resize", "right")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r17.startMove($event, "resize", "bottom")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r18.startMove($event, "resize", "bottom")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mousedown", function ImageCropperComponent_div_3_Template_span_mousedown_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r19.startMove($event, "resize", "left")); })("touchstart", function ImageCropperComponent_div_3_Template_span_touchstart_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r20.startMove($event, "resize", "left")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("rounded", ctx_r1.roundCropper);
} }
class ImageCropperComponent {
    constructor(sanitizer, cd, zone) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.zone = zone;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.outputType = 'both';
        this.maintainAspectRatio = true;
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.cropperMinWidth = 0;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = 'center';
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.imageCroppedBase64 = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.imageCroppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.initCropper();
    }
    set imageFileChanged(file) {
        this.initCropper();
        if (file) {
            this.loadImageFile(file);
        }
    }
    set imageChangedEvent(event) {
        this.initCropper();
        if (event && event.target && event.target.files && event.target.files.length > 0) {
            this.loadImageFile(event.target.files[0]);
        }
    }
    set imageBase64(imageBase64) {
        this.initCropper();
        this.loadBase64Image(imageBase64);
    }
    ngOnChanges(changes) {
        if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
        }
        if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
        }
    }
    initCropper() {
        this.imageVisible = false;
        this.originalImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    }
    loadImageFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const imageType = file.type;
            if (this.isValidImageType(imageType)) {
                (0,_utils_exif_utils__WEBPACK_IMPORTED_MODULE_0__.resetExifOrientation)(event.target.result)
                    .then((resultBase64) => this.loadBase64Image(resultBase64))
                    .catch(() => this.loadImageFailed.emit());
            }
            else {
                this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(file);
    }
    isValidImageType(type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
    }
    loadBase64Image(imageBase64) {
        this.originalBase64 = imageBase64;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
        this.originalImage = new Image();
        this.originalImage.onload = () => {
            this.originalSize.width = this.originalImage.width;
            this.originalSize.height = this.originalImage.height;
            this.cd.markForCheck();
        };
        this.originalImage.src = imageBase64;
    }
    imageLoadedInView() {
        if (this.originalImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout(() => this.checkImageMaxSizeRecursively());
        }
    }
    checkImageMaxSizeRecursively() {
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit();
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout(() => {
                this.checkImageMaxSizeRecursively();
            }, 50);
        }
    }
    onResize() {
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
    }
    rotateLeft() {
        this.transformBase64(8);
    }
    rotateRight() {
        this.transformBase64(6);
    }
    flipHorizontal() {
        this.transformBase64(2);
    }
    flipVertical() {
        this.transformBase64(4);
    }
    transformBase64(exifOrientation) {
        if (this.originalBase64) {
            (0,_utils_exif_utils__WEBPACK_IMPORTED_MODULE_0__.transformBase64BasedOnExifRotation)(this.originalBase64, exifOrientation)
                .then((rotatedBase64) => this.loadBase64Image(rotatedBase64));
        }
    }
    resizeCropperPosition() {
        const sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    }
    resetCropperPosition() {
        const sourceImageElement = this.sourceImage.nativeElement;
        if (!this.maintainAspectRatio) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
        }
        else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            const cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
        }
        else {
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
            const cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
        }
        this.doAutoCrop();
        this.imageVisible = true;
    }
    startMove(event, moveType, position = null) {
        this.moveStart = Object.assign({ active: true, type: moveType, position: position, clientX: this.getClientX(event), clientY: this.getClientY(event) }, this.cropper);
    }
    moveImg(event) {
        if (this.moveStart.active) {
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    }
    setMaxSize() {
        const sourceImageElement = this.sourceImage.nativeElement;
        this.maxSize.width = sourceImageElement.offsetWidth;
        this.maxSize.height = sourceImageElement.offsetHeight;
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    }
    setCropperScaledMinSize() {
        if (this.originalImage && this.cropperMinWidth > 0) {
            this.cropperScaledMinWidth = Math.max(20, this.cropperMinWidth / this.originalImage.width * this.maxSize.width);
            this.cropperScaledMinHeight = this.maintainAspectRatio
                ? Math.max(20, this.cropperScaledMinWidth / this.aspectRatio)
                : 20;
        }
        else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
        }
    }
    checkCropperPosition(maintainSize = false) {
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    }
    moveStop() {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    }
    move(event) {
        const diffX = this.getClientX(event) - this.moveStart.clientX;
        const diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    }
    resize(event) {
        const diffX = this.getClientX(event) - this.moveStart.clientX;
        const diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    }
    checkAspectRatio() {
        let overflowX = 0;
        let overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
        }
    }
    doAutoCrop() {
        if (this.autoCrop) {
            this.crop();
        }
    }
    crop(outputType = this.outputType) {
        if (this.sourceImage.nativeElement && this.originalImage != null) {
            this.startCropImage.emit();
            const imagePosition = this.getImagePosition();
            const width = imagePosition.x2 - imagePosition.x1;
            const height = imagePosition.y2 - imagePosition.y1;
            const cropCanvas = document.createElement('canvas');
            cropCanvas.width = width;
            cropCanvas.height = height;
            const ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, imagePosition.x1, imagePosition.y1, width, height, 0, 0, width, height);
                const output = { width, height, imagePosition, cropperPosition: Object.assign({}, this.cropper) };
                const resizeRatio = this.getResizeRatio(width);
                if (resizeRatio !== 1) {
                    output.width = Math.floor(width * resizeRatio);
                    output.height = Math.floor(height * resizeRatio);
                    (0,_utils_resize_utils__WEBPACK_IMPORTED_MODULE_1__.resizeCanvas)(cropCanvas, output.width, output.height);
                }
                return this.cropToOutputType(outputType, cropCanvas, output);
            }
        }
        return null;
    }
    getImagePosition() {
        const sourceImageElement = this.sourceImage.nativeElement;
        const ratio = this.originalSize.width / sourceImageElement.offsetWidth;
        return {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.min(Math.round(this.cropper.x2 * ratio), this.originalSize.width),
            y2: Math.min(Math.round(this.cropper.y2 * ratio), this.originalSize.height)
        };
    }
    cropToOutputType(outputType, cropCanvas, output) {
        switch (outputType) {
            case 'file':
                return this.cropToFile(cropCanvas)
                    .then((result) => {
                    output.file = result;
                    this.imageCropped.emit(output);
                    return output;
                });
            case 'both':
                output.base64 = this.cropToBase64(cropCanvas);
                return this.cropToFile(cropCanvas)
                    .then((result) => {
                    output.file = result;
                    this.imageCropped.emit(output);
                    return output;
                });
            default:
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
        }
    }
    cropToBase64(cropCanvas) {
        const imageBase64 = cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        this.imageCroppedBase64.emit(imageBase64);
        return imageBase64;
    }
    cropToFile(cropCanvas) {
        return this.getCanvasBlob(cropCanvas)
            .then((result) => {
            if (result) {
                this.imageCroppedFile.emit(result);
            }
            return result;
        });
    }
    getCanvasBlob(cropCanvas) {
        return new Promise((resolve) => {
            cropCanvas.toBlob((result) => this.zone.run(() => resolve(result)), 'image/' + this.format, this.getQuality());
        });
    }
    getQuality() {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    }
    getResizeRatio(width) {
        return this.resizeToWidth > 0 && (!this.onlyScaleDown || width > this.resizeToWidth)
            ? this.resizeToWidth / width
            : 1;
    }
    getClientX(event) {
        return event.clientX || event.touches && event.touches[0] && event.touches[0].clientX;
    }
    getClientY(event) {
        return event.clientY || event.touches && event.touches[0] && event.touches[0].clientY;
    }
}
ImageCropperComponent.??fac = function ImageCropperComponent_Factory(t) { return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
ImageCropperComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ImageCropperComponent, selectors: [["image-cropper"]], viewQuery: function ImageCropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.sourceImage = _t.first);
    } }, hostVars: 2, hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("text-align", ctx.alignImage);
    } }, inputs: { imageFileChanged: "imageFileChanged", imageChangedEvent: "imageChangedEvent", imageBase64: "imageBase64", format: "format", outputType: "outputType", maintainAspectRatio: "maintainAspectRatio", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", cropperMinWidth: "cropperMinWidth", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", cropper: "cropper", alignImage: "alignImage" }, outputs: { startCropImage: "startCropImage", imageCropped: "imageCropped", imageCroppedBase64: "imageCroppedBase64", imageCroppedFile: "imageCroppedFile", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]], decls: 4, vars: 4, consts: [[1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["class", "cropper", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", 4, "ngIf"], [1, "cropper"], [1, "move", 3, "mousedown", "touchstart"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]], template: function ImageCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "img", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("load", function ImageCropperComponent_Template_img_load_1_listener() { return ctx.imageLoadedInView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, ImageCropperComponent_div_3_Template, 23, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("visibility", ctx.imageVisible ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.imageVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  padding: 5px;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  color: #53535C;\n  background: transparent;\n  outline-color: rgba(255, 255, 255, 0.3);\n  outline-width: 100vw;\n  outline-style: solid;\n  touch-action: none;\n}\n@media (orientation: portrait) {\n  [_nghost-%COMP%]   .cropper[_ngcontent-%COMP%] {\n    outline-width: 100vh;\n  }\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  border: dashed 1px;\n  opacity: 0.75;\n  color: inherit;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  line-height: 6px;\n  padding: 8px;\n  opacity: 0.85;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #53535C;\n  width: 6px;\n  height: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: content-box;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%] {\n  top: -12px;\n  left: -12px;\n  cursor: nwse-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%] {\n  top: -12px;\n  left: calc(50% - 12px);\n  cursor: ns-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%] {\n  top: -12px;\n  right: -12px;\n  cursor: nesw-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%] {\n  top: calc(50% - 12px);\n  right: -12px;\n  cursor: ew-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%] {\n  bottom: -12px;\n  right: -12px;\n  cursor: nwse-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%] {\n  bottom: -12px;\n  left: calc(50% - 12px);\n  cursor: ns-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%] {\n  bottom: -12px;\n  left: -12px;\n  cursor: nesw-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%] {\n  top: calc(50% - 12px);\n  left: -12px;\n  cursor: ew-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%] {\n  top: -11px;\n  left: 11px;\n  width: calc(100% - 22px);\n  height: 22px;\n  cursor: ns-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%] {\n  top: 11px;\n  right: -11px;\n  height: calc(100% - 22px);\n  width: 22px;\n  cursor: ew-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%] {\n  bottom: -11px;\n  left: 11px;\n  width: calc(100% - 22px);\n  height: 22px;\n  cursor: ns-resize;\n}\n[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%] {\n  top: 11px;\n  left: -11px;\n  height: calc(100% - 22px);\n  width: 22px;\n  cursor: ew-resize;\n}\n[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%] {\n  outline-color: transparent;\n}\n[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after {\n  border-radius: 100%;\n  box-shadow: 0 0 0 100vw rgba(255, 255, 255, 0.3);\n}\n@media (orientation: portrait) {\n  [_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after {\n    box-shadow: 0 0 0 100vh rgba(255, 255, 255, 0.3);\n  }\n}\n[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWNyb3BwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdRO0VBVko7SUFXUSxvQkFBQTtFQUFWO0FBQ0Y7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQVo7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFEWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRlo7QUFJWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7QUFGaEI7QUFLWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIaEI7QUFLWTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSGhCO0FBS1k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSGhCO0FBS1k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhoQjtBQUtZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhoQjtBQUtZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFIaEI7QUFLWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIaEI7QUFLWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSGhCO0FBT1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFMWjtBQU9ZO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQU9ZO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQU9ZO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQVNRO0VBQ0ksMEJBQUE7QUFQWjtBQVNZO0VBQ0ksbUJBQUE7RUFDQSxnREFBQTtBQVBoQjtBQVNnQjtFQUpKO0lBS1EsZ0RBQUE7RUFObEI7QUFDRjtBQVFZO0VBQ0ksbUJBQUE7QUFOaEIiLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBpbWcuc291cmNlLWltYWdlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3JvcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgY29sb3I6ICM1MzUzNUM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgICAgIG91dGxpbmUtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgb3V0bGluZS13aWR0aDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBkYXNoZWQgMXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNzU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVzaXplIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjg1O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLnNxdWFyZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM1MzVDO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudG9wbGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG53c2UtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50b3ByaWdodCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYm90dG9tcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbndzZS1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvdHRvbWxlZnQge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc2l6ZS1iYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTFweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjJweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5zLXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5yb3VuZGVkIHtcclxuICAgICAgICAgICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2dyByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2aCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 47648:
/*!*************************************************************************************!*\
  !*** ./src/app/components/advance/image-crop/image-cropper/image-cropper.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCropperModule": () => (/* binding */ ImageCropperModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_image_cropper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/image-cropper.component */ 30086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ImageCropperModule {
}
ImageCropperModule.??fac = function ImageCropperModule_Factory(t) { return new (t || ImageCropperModule)(); };
ImageCropperModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ImageCropperModule });
ImageCropperModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ImageCropperModule, { declarations: [_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_0__.ImageCropperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_0__.ImageCropperComponent] }); })();


/***/ }),

/***/ 82018:
/*!*********************************************************************************!*\
  !*** ./src/app/components/advance/image-crop/image-cropper/utils/exif.utils.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetExifOrientation": () => (/* binding */ resetExifOrientation),
/* harmony export */   "transformBase64BasedOnExifRotation": () => (/* binding */ transformBase64BasedOnExifRotation)
/* harmony export */ });
function resetExifOrientation(srcBase64) {
    try {
        const exifRotation = getExifRotation(srcBase64);
        if (exifRotation > 1) {
            return transformBase64BasedOnExifRotation(srcBase64, exifRotation);
        }
        else {
            return Promise.resolve(srcBase64);
        }
    }
    catch (ex) {
        return Promise.reject(ex);
    }
}
function transformBase64BasedOnExifRotation(srcBase64, exifRotation) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            const width = img.width;
            const height = img.height;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
                if (4 < exifRotation && exifRotation < 9) {
                    canvas.width = height;
                    canvas.height = width;
                }
                else {
                    canvas.width = width;
                    canvas.height = height;
                }
                transformCanvas(ctx, exifRotation, width, height);
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL());
            }
            else {
                reject(new Error('No context'));
            }
        };
        img.src = srcBase64;
    });
}
function getExifRotation(imageBase64) {
    const view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    const length = view.byteLength;
    let offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            const little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    const binaryString = atob(imageBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
function transformCanvas(ctx, orientation, width, height) {
    switch (orientation) {
        case 2:
            ctx.transform(-1, 0, 0, 1, width, 0);
            break;
        case 3:
            ctx.transform(-1, 0, 0, -1, width, height);
            break;
        case 4:
            ctx.transform(1, 0, 0, -1, 0, height);
            break;
        case 5:
            ctx.transform(0, 1, 1, 0, 0, 0);
            break;
        case 6:
            ctx.transform(0, 1, -1, 0, height, 0);
            break;
        case 7:
            ctx.transform(0, -1, -1, 0, height, width);
            break;
        case 8:
            ctx.transform(0, -1, 1, 0, 0, width);
            break;
    }
}


/***/ }),

/***/ 47289:
/*!***********************************************************************************!*\
  !*** ./src/app/components/advance/image-crop/image-cropper/utils/resize.utils.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeCanvas": () => (/* binding */ resizeCanvas)
/* harmony export */ });
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
function resizeCanvas(canvas, width, height, resizeCanvas = true) {
    const width_source = canvas.width;
    const height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    const ratio_w = width_source / width;
    const ratio_h = height_source / height;
    const ratio_w_half = Math.ceil(ratio_w / 2);
    const ratio_h_half = Math.ceil(ratio_h / 2);
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const img = ctx.getImageData(0, 0, width_source, height_source);
        const img2 = ctx.createImageData(width, height);
        const data = img.data;
        const data2 = img2.data;
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                const x2 = (i + j * width) * 4;
                const center_y = j * ratio_h;
                let weight = 0;
                let weights = 0;
                let weights_alpha = 0;
                let gx_r = 0;
                let gx_g = 0;
                let gx_b = 0;
                let gx_a = 0;
                const xx_start = Math.floor(i * ratio_w);
                const yy_start = Math.floor(j * ratio_h);
                let xx_stop = Math.ceil((i + 1) * ratio_w);
                let yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (let yy = yy_start; yy < yy_stop; yy++) {
                    const dy = Math.abs(center_y - yy) / ratio_h_half;
                    const center_x = i * ratio_w;
                    const w0 = dy * dy; //pre-calc part of w
                    for (let xx = xx_start; xx < xx_stop; xx++) {
                        const dx = Math.abs(center_x - xx) / ratio_w_half;
                        const w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        const pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        //clear and resize canvas
        if (resizeCanvas) {
            canvas.width = width;
            canvas.height = height;
        }
        else {
            ctx.clearRect(0, 0, width_source, height_source);
        }
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}


/***/ }),

/***/ 47781:
/*!***************************************************************************!*\
  !*** ./src/app/components/advance/ngx-dropzone/ngx-dropzone.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDropzoneComponent": () => (/* binding */ NgxDropzoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 897);


class NgxDropzoneComponent {
    constructor() {
        this.config1 = {
            clickable: true,
            maxFiles: 1,
            autoReset: null,
            errorReset: null,
            cancelReset: null
        };
        this.config2 = {
            clickable: true,
            maxFiles: 5,
            autoReset: null,
            errorReset: null,
            cancelReset: null
        };
        this.config3 = {
            clickable: true,
            maxFiles: 5,
            autoReset: null,
            errorReset: null,
            cancelReset: null,
            acceptedFiles: '.pdf'
        };
    }
    onUploadInit(args) { }
    onUploadError(args) { }
    onUploadSuccess(args) { }
    ngOnInit() {
    }
}
NgxDropzoneComponent.??fac = function NgxDropzoneComponent_Factory(t) { return new (t || NgxDropzoneComponent)(); };
NgxDropzoneComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzoneComponent, selectors: [["app-ngx-dropzone"]], decls: 50, vars: 3, consts: [[1, "container-fluid"], [1, "row", "dropzone-custom"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "dropzone", "dropzone-primary", 3, "error", "success"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"]], template: function NgxDropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Single File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("error", function NgxDropzoneComponent_Template_div_error_8_listener($event) { return ctx.onUploadError($event); })("success", function NgxDropzoneComponent_Template_div_success_8_listener($event) { return ctx.onUploadSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Drop files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Multi File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5)(24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("error", function NgxDropzoneComponent_Template_div_error_24_listener($event) { return ctx.onUploadError($event); })("success", function NgxDropzoneComponent_Template_div_success_24_listener($event) { return ctx.onUploadSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Drop files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4)(37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "File Type Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5)(40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("error", function NgxDropzoneComponent_Template_div_error_40_listener($event) { return ctx.onUploadError($event); })("success", function NgxDropzoneComponent_Template_div_success_40_listener($event) { return ctx.onUploadSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Drop only .pdf files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("dropzone", ctx.config1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("dropzone", ctx.config2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("dropzone", ctx.config3);
    } }, dependencies: [ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_1__.DropzoneDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtZHJvcHpvbmUuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 53331:
/*!***********************************************************************!*\
  !*** ./src/app/components/advance/ngx-toastr/ngx-toastr.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxToastrComponent": () => (/* binding */ NgxToastrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 34101);


class NgxToastrComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    ngOnInit() { }
    // Success Type
    success() {
        this.toastrService.success('You are awesome!', 'Success!');
    }
    // info Type
    info() {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    }
    // warning Type
    warning() {
        this.toastrService.warning('My name is John Dio. You killed my father, prepare to die!');
    }
    // danger Type
    danger() {
        this.toastrService.error('I do not think that word means what you think it means.', 'Inconceivable!');
    }
    // Timeout
    timeout() {
        this.toastrService.error('I do not think that word means what you think it means.', 'Timeout!', { timeOut: 2000 });
    }
    // Dismiss toastr on Click
    dismissToastOnClick() {
        this.toastrService.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { tapToDismiss: true });
    }
    // Show close button
    showCloseButton() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    }
    // Show Progressbar
    showProgressbar() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { progressBar: true });
    }
    // Title Class
    titleClass() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    }
    // Message Class
    messageClass() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    }
    // Enable HTML
    enableHtml() {
        this.toastrService.show('<p class="mb-0 mt-1">We do have the Kapua suite available.</p>', 'Custom', {
            enableHtml: true
        });
    }
    // custom position
    position() {
        this.toastrService.info('Have fun storming the castle!', 'Miracle Max Says', {
            positionClass: 'toast-top-center'
        });
    }
}
NgxToastrComponent.??fac = function NgxToastrComponent_Factory(t) { return new (t || NgxToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
NgxToastrComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxToastrComponent, selectors: [["app-ngx-toastr"]], decls: 48, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function NgxToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_8_listener() { return ctx.warning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_10_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_12_listener() { return ctx.info(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_14_listener() { return ctx.danger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Dissmiss Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5)(22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_22_listener() { return ctx.timeout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Show Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_24_listener() { return ctx.dismissToastOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Clear Toast On Click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Advanced Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5)(32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_32_listener() { return ctx.showCloseButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "With Close Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_34_listener() { return ctx.showProgressbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "With Progressbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_36_listener() { return ctx.titleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Title Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_38_listener() { return ctx.messageClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Message Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_40_listener() { return ctx.messageClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Message Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_42_listener() { return ctx.messageClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Message Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_44_listener() { return ctx.enableHtml(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "HTML Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxToastrComponent_Template_button_click_46_listener() { return ctx.position(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Toastr Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtdG9hc3RyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 89888:
/*!***************************************************************************!*\
  !*** ./src/app/components/advance/owl-carousel/owl-carousel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OwlCarouselComponent": () => (/* binding */ OwlCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 14978);



const _c0 = function (a0) { return [a0]; };
function OwlCarouselComponent_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r13.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_9_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r13.id);
} }
function OwlCarouselComponent_16_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r16.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_16_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r16.id);
} }
function OwlCarouselComponent_23_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r19.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_23_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r19.id);
} }
function OwlCarouselComponent_30_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r22.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_30_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r22.id);
} }
function OwlCarouselComponent_37_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r25.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_37_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r25.id);
} }
function OwlCarouselComponent_44_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r28.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_44_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r28.id);
} }
function OwlCarouselComponent_51_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r31.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_51_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r31.id);
} }
function OwlCarouselComponent_58_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r34.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_58_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r34.id);
} }
function OwlCarouselComponent_65_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r37.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_65_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r37.id);
} }
function OwlCarouselComponent_72_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r40.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_72_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r40.id);
} }
function OwlCarouselComponent_79_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r43.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_79_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r43.id);
} }
function OwlCarouselComponent_86_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r46.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_86_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r46.id);
} }
function OwlCarouselComponent_93_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 9);
} if (rf & 2) {
    const img_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, img_r49.img), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function OwlCarouselComponent_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OwlCarouselComponent_93_ng_template_0_Template, 1, 3, "ng-template", 8);
} if (rf & 2) {
    const img_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", img_r49.id);
} }
class OwlCarouselComponent {
    constructor() {
        this.owlcarousel1 = [
            { img: "assets/images/slider/1.jpg" },
            { img: "assets/images/slider/2.jpg" },
            { img: "assets/images/slider/3.jpg" },
            { img: "assets/images/slider/4.jpg" },
            { img: "assets/images/slider/5.jpg" },
            { img: "assets/images/slider/6.jpg" },
            { img: "assets/images/slider/7.jpg" },
            { img: "assets/images/slider/8.jpg" },
            { img: "assets/images/slider/9.jpg" },
            { img: "assets/images/slider/10.jpg" }
        ];
        //Options
        this.owlcarousel1Options = {
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        };
        this.owlcarousel2Options = {
            loop: true,
            margin: 10,
            items: 5,
            nav: false,
            responsive: {
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        };
        this.owlcarousel3Options = {
            center: true,
            items: 5,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        };
        this.owlcarousel4Options = {
            items: 5,
            loop: true,
            margin: 10,
            merge: true,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel5Options = {
            margin: 10,
            loop: true,
            autoWidth: true,
            items: 5,
            nav: false
        };
        this.owlcarousel6Options = {
            items: 5,
            loop: false,
            center: true,
            margin: 10,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel7Options = {
            stagePadding: 50,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel8Options = {
            stagePadding: 50,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel9Options = {
            rtl: true,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel10Options = {
            items: 5,
            lazyLoad: true,
            loop: true,
            margin: 5,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel12Options = {
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items: 5,
            margin: 30,
            stagePadding: 30,
            smartSpeed: 450,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel13Options = {
            items: 5,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel14Options = {
            items: 1,
            margin: 10,
            autoHeight: true,
            nav: false
        };
    }
    ngOnInit() { }
}
OwlCarouselComponent.??fac = function OwlCarouselComponent_Factory(t) { return new (t || OwlCarouselComponent)(); };
OwlCarouselComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OwlCarouselComponent, selectors: [["app-owl-carousel"]], decls: 94, vars: 26, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item", 3, "id"], ["alt", "", 3, "src"]], template: function OwlCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Basic Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, OwlCarouselComponent_9_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3)(11, "div", 4)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Responsive Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5)(15, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, OwlCarouselComponent_16_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3)(18, "div", 4)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Center Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5)(22, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, OwlCarouselComponent_23_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3)(25, "div", 4)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Merge Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 5)(29, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, OwlCarouselComponent_30_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3)(32, "div", 4)(33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Auto Width Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5)(36, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, OwlCarouselComponent_37_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 3)(39, "div", 4)(40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "URL Hash Navigations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5)(43, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, OwlCarouselComponent_44_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 3)(46, "div", 4)(47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 5)(50, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, OwlCarouselComponent_51_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 3)(53, "div", 4)(54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Stage Padding Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 5)(57, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, OwlCarouselComponent_58_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 3)(60, "div", 4)(61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Right to Left Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 5)(64, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, OwlCarouselComponent_65_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 3)(67, "div", 4)(68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Lazy load Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 5)(71, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, OwlCarouselComponent_72_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 3)(74, "div", 4)(75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Animate Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 5)(78, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, OwlCarouselComponent_79_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 3)(81, "div", 4)(82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Auto Play Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 5)(85, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, OwlCarouselComponent_86_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 3)(88, "div", 4)(89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Auto Height Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 5)(92, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](93, OwlCarouselComponent_93_Template, 1, 1, null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel1Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel2Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel3Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel4Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel5Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel6Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel7Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel8Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel9Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel10Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel12Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel13Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.owlcarousel14Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.owlcarousel1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvd2wtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50174:
/*!***************************************************************************!*\
  !*** ./src/app/components/advance/range-slider/range-slider.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeSliderComponent": () => (/* binding */ RangeSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng5-slider */ 8243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class RangeSliderComponent {
    constructor() {
        this.custMinValue = 10;
        this.custMaxValue = 90;
        this.noSwatchMinValue = 10;
        this.noSwatchMaxValue = 90;
        this.limitValue = 50;
        this.limitedMinValue = 40;
        this.limitedMaxValue = 60;
        this.pushRangeMinValue = 60;
        this.pushRangemaxValue = 70;
        this.stepValue = 12;
        this.customHtmlMinValue = 100;
        this.customHtmlMaxValue = 400;
        this.disabledMinValue = 10;
        this.disabledMaxValue = 90;
        this.readOnlyValue = 50;
        this.disabled = true;
        this.readOnly = true;
        this.dateRange = this.createDateRange();
        this.valueDateRange = this.dateRange[0].getTime();
        this.simpleSliderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(100);
        this.rangeSliderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            rangeSliderControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl([20, 80])
        });
        // Simple slider option
        this.simpleSliderOptions = {
            floor: 0,
            ceil: 250
        };
        // Range slider option
        this.rangeSliderOptions = {
            floor: 0,
            ceil: 100,
            step: 5
        };
        // Custom class slider
        this.custSlideroptions = {
            floor: 0,
            ceil: 100,
            step: 10,
            showTicks: true
        };
        // Slider limited to 10 through 90
        this.sliderLimitOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minLimit: 10,
            maxLimit: 90
        };
        // Range slider with noSwitching=true
        this.noSwatchOption = {
            floor: 0,
            ceil: 100,
            step: 1,
            noSwitching: true
        };
        // Range slider with the range limited to 10 through 50
        this.limitedOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            maxRange: 50
        };
        // Range slider with minimum range of 10, maximum of 30 and pushRange option
        this.pushRangeOptions = {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            maxRange: 30,
            pushRange: true
        };
        // Slider with custom step value
        this.stepSlideroptions = {
            floor: 10,
            ceil: 100,
            step: 5
        };
        // Slider with custom step value
        this.customHtmlSliderOptions = {
            floor: 0,
            ceil: 500,
            translate: (value, label) => {
                switch (label) {
                    case ng5_slider__WEBPACK_IMPORTED_MODULE_0__.LabelType.Low:
                        return '<b>Min price:</b> $' + value;
                    case ng5_slider__WEBPACK_IMPORTED_MODULE_0__.LabelType.High:
                        return '<b>Max price:</b> $' + value;
                    default:
                        return '$' + value;
                }
            }
        };
        // Range Slider With Date
        this.dateRangeOptions = {
            stepsArray: this.dateRange.map((date) => {
                return { value: date.getTime() };
            }),
            translate: (value, label) => {
                return new Date(value).toDateString();
            }
        };
        // Disabled Range Slider 
        this.disabledSliderOptions = {
            floor: 0,
            ceil: 100,
            step: 10,
            disabled: true,
            showTicks: true,
            draggableRange: true
        };
        // Read Only Range Slider 
        this.readOnlySliderOptions = {
            floor: 0,
            ceil: 100,
            readOnly: true
        };
        this.verticalSlider1 = {
            value: 0,
            options: {
                floor: 0,
                ceil: 10,
                vertical: true
            }
        };
        this.verticalSlider2 = {
            minValue: 20,
            maxValue: 80,
            options: {
                floor: 0,
                ceil: 100,
                vertical: true
            }
        };
        this.verticalSlider3 = {
            value: 5,
            options: {
                floor: 0,
                ceil: 10,
                vertical: true,
                showTicks: true
            }
        };
        this.verticalSlider4 = {
            minValue: 1,
            maxValue: 5,
            options: {
                floor: 0,
                ceil: 6,
                vertical: true,
                showTicksValues: true
            }
        };
        this.verticalSlider5 = {
            value: 50,
            options: {
                floor: 0,
                ceil: 100,
                vertical: true,
                showSelectionBar: true
            }
        };
        this.verticalSlider6 = {
            value: 6,
            options: {
                floor: 0,
                ceil: 6,
                vertical: true,
                showSelectionBar: true,
                showTicksValues: true,
                ticksValuesTooltip: (v) => {
                    return 'Tooltip for ' + v;
                }
            }
        };
    }
    ngOnInit() { }
    createDateRange() {
        const dates = [];
        for (let i = 1; i <= 31; i++) {
            dates.push(new Date(2018, 5, i));
        }
        return dates;
    }
    onChangeDisabled() {
        this.disabledSliderOptions = Object.assign({}, this.disabledSliderOptions, { disabled: this.disabled });
    }
    onChangeReadOnly() {
        this.readOnlySliderOptions = Object.assign({}, this.readOnlySliderOptions, { readOnly: this.readOnly });
    }
}
RangeSliderComponent.??fac = function RangeSliderComponent_Factory(t) { return new (t || RangeSliderComponent)(); };
RangeSliderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: RangeSliderComponent, selectors: [["app-range-slider"]], decls: 118, vars: 49, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "options", "formControl"], [3, "formGroup"], ["formControlName", "rangeSliderControl", 3, "options"], [1, "custom-slider"], [3, "value", "highValue", "options", "valueChange", "highValueChange"], [3, "value", "options", "valueChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-12", "col-xl-12"], [1, "row", "range-sliders", 2, "height", "300px"], [1, "col-2", "xs-slider", 2, "height", "100%"]], template: function RangeSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Simple slider in reactive form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "ng5-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 2)(12, "div", 3)(13, "div", 4)(14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Range slider in reactive form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 5)(17, "form", 7)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "ng5-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 2)(22, "div", 3)(23, "div", 4)(24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Slider with custom style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 5)(27, "div", 9)(28, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_28_listener($event) { return ctx.custMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_28_listener($event) { return ctx.custMaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 2)(30, "div", 3)(31, "div", 4)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Range slider with noSwitching=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 5)(35, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_35_listener($event) { return ctx.noSwatchMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_35_listener($event) { return ctx.noSwatchMaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Slider limited to 10 through 90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 5)(42, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_42_listener($event) { return ctx.limitValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "div", 2)(44, "div", 3)(45, "div", 4)(46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Range slider with the range limited to 10 through 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 5)(49, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_49_listener($event) { return ctx.limitedMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_49_listener($event) { return ctx.limitedMaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 2)(51, "div", 3)(52, "div", 4)(53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, "Range slider with min range of 10, max of 30 and pushRange option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "div", 5)(56, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_56_listener($event) { return ctx.pushRangeMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_56_listener($event) { return ctx.pushRangemaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 2)(58, "div", 3)(59, "div", 4)(60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Slider with custom step value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 5)(63, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_63_listener($event) { return ctx.stepValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "div", 2)(65, "div", 3)(66, "div", 4)(67, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Slider with custom display function using HTML formatting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "div", 5)(70, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_70_listener($event) { return ctx.customHtmlMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_70_listener($event) { return ctx.customHtmlMaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "div", 2)(72, "div", 3)(73, "div", 4)(74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "Slider with dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 5)(77, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_77_listener($event) { return ctx.valueDateRange = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "div", 2)(79, "div", 3)(80, "div", 4)(81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](82, "Disabled slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](83, "div", 5)(84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](85, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function RangeSliderComponent_Template_input_ngModelChange_86_listener($event) { return ctx.disabled = $event; })("change", function RangeSliderComponent_Template_input_change_86_listener() { return ctx.onChangeDisabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_87_listener($event) { return ctx.disabledMinValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_87_listener($event) { return ctx.disabledMaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 2)(89, "div", 3)(90, "div", 4)(91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](92, "Read-only slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](93, "div", 5)(94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](95, "Read-only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function RangeSliderComponent_Template_input_ngModelChange_96_listener($event) { return ctx.readOnly = $event; })("change", function RangeSliderComponent_Template_input_change_96_listener() { return ctx.onChangeReadOnly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_97_listener($event) { return ctx.readOnlyValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "div", 13)(99, "div", 3)(100, "div", 4)(101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](102, "Vertical sliders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "div", 5)(104, "div", 0)(105, "div", 14)(106, "div", 15)(107, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_107_listener($event) { return ctx.verticalSlider1.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](108, "div", 15)(109, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_109_listener($event) { return ctx.verticalSlider2.minValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_109_listener($event) { return ctx.verticalSlider2.maxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](110, "div", 15)(111, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_111_listener($event) { return ctx.verticalSlider3.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "div", 15)(113, "ng5-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_113_listener($event) { return ctx.verticalSlider4.minValue = $event; })("highValueChange", function RangeSliderComponent_Template_ng5_slider_highValueChange_113_listener($event) { return ctx.verticalSlider4.maxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "div", 15)(115, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_115_listener($event) { return ctx.verticalSlider5.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](116, "div", 15)(117, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function RangeSliderComponent_Template_ng5_slider_valueChange_117_listener($event) { return ctx.verticalSlider6.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Value: ", ctx.simpleSliderControl.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("options", ctx.simpleSliderOptions)("formControl", ctx.simpleSliderControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.rangeSliderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"]("Low value: ", ctx.rangeSliderForm.value.rangeSliderControl[0], " | High value: ", ctx.rangeSliderForm.value.rangeSliderControl[1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("options", ctx.rangeSliderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.custMinValue)("highValue", ctx.custMaxValue)("options", ctx.custSlideroptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.noSwatchMinValue)("highValue", ctx.noSwatchMaxValue)("options", ctx.noSwatchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.limitValue)("options", ctx.sliderLimitOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.limitedMinValue)("highValue", ctx.limitedMaxValue)("options", ctx.limitedOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.pushRangeMinValue)("highValue", ctx.pushRangemaxValue)("options", ctx.pushRangeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.stepValue)("options", ctx.stepSlideroptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.customHtmlMinValue)("highValue", ctx.customHtmlMaxValue)("options", ctx.customHtmlSliderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.valueDateRange)("options", ctx.dateRangeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.disabledMinValue)("highValue", ctx.disabledMaxValue)("options", ctx.disabledSliderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.readOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.readOnlyValue)("options", ctx.readOnlySliderOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider1.value)("options", ctx.verticalSlider1.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider2.minValue)("highValue", ctx.verticalSlider2.maxValue)("options", ctx.verticalSlider2.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider3.value)("options", ctx.verticalSlider3.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider4.minValue)("highValue", ctx.verticalSlider4.maxValue)("options", ctx.verticalSlider4.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider5.value)("options", ctx.verticalSlider5.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.verticalSlider6.value)("options", ctx.verticalSlider6.options);
    } }, dependencies: [ng5_slider__WEBPACK_IMPORTED_MODULE_0__["??a"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5nZS1zbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8884:
/*!***********************************************************************!*\
  !*** ./src/app/components/advance/scrollable/scrollable.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollableComponent": () => (/* binding */ ScrollableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);


class ScrollableComponent {
    constructor() {
        this.disabled = false;
        this.config = {
            suppressScrollX: false,
            wheelPropagation: false,
            useBothWheelAxes: true
        };
        this.configBothSideScroll = {
            suppressScrollX: false,
            wheelPropagation: false,
        };
        this.configX = {
            suppressScrollX: false,
            suppressScrollY: true,
        };
        this.configY = {
            suppressScrollX: true,
            suppressScrollY: false,
        };
    }
    ngOnInit() { }
}
ScrollableComponent.??fac = function ScrollableComponent_Factory(t) { return new (t || ScrollableComponent)(); };
ScrollableComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ScrollableComponent, selectors: [["app-scrollable"]], decls: 111, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "scroll-bar-wrap"], [1, "perfect-scrollbar-custom", 3, "config"], ["src", "assets/images/banner/3.jpg", "alt", "girl"], [1, "horz-scroll-content", 2, "width", "1600px"], [1, "col-sm-3"], [1, "visible-scroll", "always-visible"], [1, "vertical-scroll"]], template: function ScrollableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Click and Drag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "div", 6)(9, "perfect-scrollbar", 7)(10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Small Size Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5)(18, "div", 6)(19, "perfect-scrollbar", 7)(20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Both Side Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5)(28, "div", 6)(29, "perfect-scrollbar", 7)(30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2)(33, "div", 3)(34, "div", 4)(35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Horizontal Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 5)(38, "div", 6)(39, "perfect-scrollbar", 7)(40, "div", 9)(41, "div", 1)(42, "div", 10)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 10)(46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 10)(49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 10)(52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 2)(55, "div", 3)(56, "div", 4)(57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Always Visible Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 5)(60, "div", 6)(61, "div", 11)(62, "perfect-scrollbar", 7)(63, "div", 9)(64, "div", 1)(65, "div", 10)(66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 10)(73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10)(80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 10)(87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 2)(94, "div", 3)(95, "div", 4)(96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Vertical Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 5)(99, "div", 12)(100, "perfect-scrollbar", 7)(101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.configBothSideScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.configBothSideScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.configX);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.configBothSideScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("config", ctx.configY);
    } }, dependencies: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGxhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });


/***/ }),

/***/ 67395:
/*!***************************************************************!*\
  !*** ./src/app/components/advance/sticky/sticky.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StickyComponent": () => (/* binding */ StickyComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_sticky_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/sticky/sticky */ 36342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function StickyComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StickyComponent_div_11_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const note_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r2.deleteNote(note_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "textarea", 12)(5, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("display", note_r1.isDeleted ? "none" : "");
} }
class StickyComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.notes = _shared_data_sticky_sticky__WEBPACK_IMPORTED_MODULE_0__.sticky;
    }
    ngOnInit() { }
    //Add new sticky note
    addStickyNote() {
        this.notes.push({ id: this.notes.length + 1, isDeleted: false });
    }
    ;
    //Delete a particulr sticky note
    deleteNote(note) {
        note.isDeleted = true;
    }
}
StickyComponent.??fac = function StickyComponent_Factory(t) { return new (t || StickyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
StickyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: StickyComponent, selectors: [["app-sticky"]], decls: 12, vars: 1, consts: [[1, "container-fluid"], [1, "row", "sticky-header-main"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "pull-right", "m-l-10", 3, "click"], [1, "card-body"], ["id", "board", 1, "sticky-note"], ["class", "note ui-draggable ui-draggable-handle", "ng-style", "{'display': 'none'}", 3, "display", 4, "ngFor", "ngForOf"], ["ng-style", "{'display': 'none'}", 1, "note", "ui-draggable", "ui-draggable-handle"], ["href", "javascript:void(0);", 1, "button", "remove", 3, "click"], ["contenteditable", "true", 1, "note_cnt"], ["placeholder", "Enter note title", 1, "title", 2, "height", "64px"], ["placeholder", "Enter note description here", 1, "cnt", 2, "height", "200px"]], template: function StickyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Sticky Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function StickyComponent_Template_a_click_7_listener() { return ctx.addStickyNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Add New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, StickyComponent_div_11_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.notes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGlja3kuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 65489:
/*!*************************************************************************!*\
  !*** ./src/app/components/advance/sweet-alert/sweet-alert.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SweetAlertComponent": () => (/* binding */ SweetAlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const Swal = __webpack_require__(/*! sweetalert2 */ 60598);
class SweetAlertComponent {
    constructor() { }
    ngOnInit() { }
    // Basic Alert
    basicAlert() {
        Swal.fire('Any fool can use a computer');
    }
    // Alert Title
    withTitle() {
        Swal.fire('The Internet?', 'That thing is still around?', 'question');
    }
    // Alert with Image
    withImage() {
        Swal.fire({ imageUrl: './assets/images/endless-logo.png', imageHeight: 65, imageAlt: 'A Endless Logo' });
    }
    // A modal with a title, an error icon, a text, and a footer
    error() {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    }
    // A warning
    warning() {
        Swal.fire({
            type: 'warning',
            title: 'Warning',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    }
    // A warning
    success() {
        Swal.fire({
            type: 'success',
            title: 'Success',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    }
    // Info
    info() {
        Swal.fire({
            type: 'info',
            title: 'Info',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    }
    // Danger
    danger() {
        Swal.fire({
            type: 'error',
            title: 'Danger',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    }
    // Custom HTML description and buttons with ARIA labels
    customHTML() {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html: 'You can use <b>bold text</b>, ' +
                '<a href="//github.com">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        });
    }
    // custom position
    customPosition() {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    // Custom animation
    customAnimation() {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            animation: false,
            customClass: 'animated tada'
        });
    }
    // A Custom animation
    customAlert() {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 100,
            background: '#fff url(./assets/images/coming-soon-bg.jpg)',
            backdrop: `
            rgba(20, 72, 72, 0.48)
            center left
            no-repeat
          `,
            customClass: 'text-dark'
        });
    }
    // A warning message, with a function attached to the "Confirm"-button...
    withConfirmation() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    // A warning message, with a function attached to the "Confirm"-button and by passing a parameter, you can execute something else for "Cancel".
    withCancelled() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    // A message with auto close timer
    autoClose() {
        let timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('strong')
                        .textContent = Swal.getTimerLeft();
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer) {
            }
        });
    }
    // A Ajax request example
    withAjax() {
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                    .catch(error => {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });
    }
    // Chaining modals (queue) example
    stepsAlert() {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'All done!',
                    html: 'Your answers: <pre><code>' +
                        JSON.stringify(result.value) +
                        '</code></pre>',
                    confirmButtonText: 'Lovely!'
                });
            }
        });
    }
    // Dynamic queue example
    dynamicQueue() {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.queue([{
                title: 'Your public IP',
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' +
                    'via AJAX request',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return fetch(ipAPI)
                        .then(response => response.json())
                        .then(data => Swal.insertQueueStep(data.ip))
                        .catch(() => {
                        Swal.insertQueueStep({
                            type: 'error',
                            title: 'Unable to get your public IP'
                        });
                    });
                }
            }]);
    }
    //RTL Alert
    rtlAlert() {
        Swal.fire({
            title: '???? ???????? ????????????????????',
            type: 'question',
            customClass: {
                icon: 'swal2-arabic-question-mark'
            },
            confirmButtonText: '??????',
            cancelButtonText: '????',
            showCancelButton: true,
            showCloseButton: true
        });
    }
    //alter close after particular time
    customTimer() {
        let timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.<br/><br/>' +
                '<button id="increase" class="btn btn-warning">' +
                'I need 5 more seconds!' +
                '</button><br/>' +
                '<button id="stop" class="btn btn-danger">' +
                'Please stop the timer!!' +
                '</button><br/>' +
                '<button id="resume" class="btn btn-success" disabled>' +
                'Phew... you can restart now!' +
                '</button><br/>' +
                '<button id="toggle" class="btn btn-primary">' +
                'Toggle' +
                '</button>',
            timer: 10000,
            onBeforeOpen: () => {
                const content = Swal.getContent();
                const $ = content.querySelector.bind(content);
                const stop = $('#stop');
                const resume = $('#resume');
                const toggle = $('#toggle');
                const increase = $('#increase');
                Swal.showLoading();
                function toggleButtons() {
                    stop.disabled = !Swal.isTimerRunning();
                    resume.disabled = Swal.isTimerRunning();
                }
                stop.addEventListener('click', () => {
                    Swal.stopTimer();
                    toggleButtons();
                });
                resume.addEventListener('click', () => {
                    Swal.resumeTimer();
                    toggleButtons();
                });
                toggle.addEventListener('click', () => {
                    Swal.toggleTimer();
                    toggleButtons();
                });
                increase.addEventListener('click', () => {
                    Swal.increaseTimer(5000);
                });
                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('strong')
                        .textContent = (Swal.getTimerLeft() / 1000)
                        .toFixed(0);
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
}
SweetAlertComponent.??fac = function SweetAlertComponent_Factory(t) { return new (t || SweetAlertComponent)(); };
SweetAlertComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SweetAlertComponent, selectors: [["app-sweet-alert"]], decls: 66, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SweetAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_8_listener() { return ctx.basicAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_10_listener() { return ctx.withTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "With Title alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_12_listener() { return ctx.withImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "With Image alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_14_listener() { return ctx.error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5)(22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_22_listener() { return ctx.withConfirmation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "With Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_24_listener() { return ctx.withCancelled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "With Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_26_listener() { return ctx.autoClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Auto Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_28_listener() { return ctx.withAjax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "With Ajax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_30_listener() { return ctx.stepsAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Step Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_32_listener() { return ctx.dynamicQueue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Dynamic Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_34_listener() { return ctx.rtlAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "RTL Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_36_listener() { return ctx.customTimer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Custom Timer Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5)(44, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_44_listener() { return ctx.customAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Custom Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_46_listener() { return ctx.customHTML(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Custom HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_48_listener() { return ctx.customAnimation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Custom Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_50_listener() { return ctx.customPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Custom Positioned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 2)(53, "div", 3)(54, "div", 4)(55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 5)(58, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_58_listener() { return ctx.warning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_60_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_62_listener() { return ctx.info(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SweetAlertComponent_Template_button_click_64_listener() { return ctx.danger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2VldC1hbGVydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 13021:
/*!***************************************************************!*\
  !*** ./src/app/components/advance/upload/upload.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




const _c0 = function (a0) { return { "width": a0 }; };
function UploadComponent_tr_39_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td")(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c0, item_r1.progress + "%"));
} }
function UploadComponent_tr_39_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UploadComponent_tr_39_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UploadComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UploadComponent_tr_39_td_4_Template, 3, 3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UploadComponent_tr_39_span_6_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, UploadComponent_tr_39_span_7_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td", 24)(9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UploadComponent_tr_39_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const item_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](item_r1.upload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UploadComponent_tr_39_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const item_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](item_r1.remove()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1 == null ? null : item_r1.file == null ? null : item_r1.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.uploader.isHTML5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.isSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", item_r1.isReady || item_r1.isUploading || item_r1.isSuccess);
} }
const _c1 = function (a0) { return { "nv-file-over": a0 }; };
const _c2 = function (a0) { return { "another-file-over-class": a0 }; };
// const URL = '/api/';
const URL = 'https://httpbin.org/post';
class UploadComponent {
    constructor() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__.FileUploader({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    ngOnInit() { }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
}
UploadComponent.??fac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], decls: 51, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["ng2FileDrop", "", 1, "well", "my-drop-zone", 3, "uploader", "ngClass", "fileOver"], [1, "card-body", "upload-input"], [1, "col-md-6", "col-xl-3", "xl-40", "upload-space-sm"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 1, "mb-0", 3, "uploader"], [1, "col-xl-9", "col-md-6", "xl-60", "upload-table"], [1, "table-responsive"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "fill-progress"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", "me-1", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-trash"], [4, "ngIf"], ["nowrap", ""], ["type", "button", 1, "btn", "btn-success", "btn-xs", "me-1", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-xs", 3, "click"], [1, "progress", "mb-0"], [1, "fa", "fa-check-square-o"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Select files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("fileOver", function UploadComponent_Template_div_fileOver_8_listener($event) { return ctx.fileOverBase($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Base drop zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("fileOver", function UploadComponent_Template_div_fileOver_10_listener($event) { return ctx.fileOverAnother($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Another drop zone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Upload queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7)(18, "div", 1)(19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Multiple: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 9)(22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Single: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11)(26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12)(29, "table", 13)(30, "thead")(31, "tr")(32, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, UploadComponent_tr_39_Template, 15, 5, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div")(41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Queue progress: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UploadComponent_Template_button_click_45_listener() { return ctx.uploader.uploadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Upload all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UploadComponent_Template_button_click_48_listener() { return ctx.uploader.clearQueue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Remove all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c1, ctx.hasBaseDropZoneOver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c2, ctx.hasAnotherDropZoneOver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Queue length: ", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.uploader.queue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.uploader.progress + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.uploader.getNotUploadedItems().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.uploader.queue.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__.FileDropDirective, ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__.FileSelectDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 36342:
/*!**********************************************!*\
  !*** ./src/app/shared/data/sticky/sticky.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sticky": () => (/* binding */ sticky)
/* harmony export */ });
var sticky = [{
        id: 1,
        isDeleted: false
    },
    {
        id: 2,
        isDeleted: false
    },
    {
        id: 3,
        isDeleted: false
    },
    {
        id: 4,
        isDeleted: false
    }];


/***/ }),

/***/ 14132:
/*!************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.js ***!
  \************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(self, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        3099:
        /***/
        function (module) {
          module.exports = function (it) {
            if (typeof it != 'function') {
              throw TypeError(String(it) + ' is not a function');
            }

            return it;
          };
          /***/

        },

        /***/
        6077:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_876__) {
          var isObject = __nested_webpack_require_876__(111);

          module.exports = function (it) {
            if (!isObject(it) && it !== null) {
              throw TypeError("Can't set " + String(it) + ' as a prototype');
            }

            return it;
          };
          /***/

        },

        /***/
        1223:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_1294__) {
          var wellKnownSymbol = __nested_webpack_require_1294__(5112);

          var create = __nested_webpack_require_1294__(30);

          var definePropertyModule = __nested_webpack_require_1294__(3070);

          var UNSCOPABLES = wellKnownSymbol('unscopables');
          var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
          // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

          if (ArrayPrototype[UNSCOPABLES] == undefined) {
            definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
              configurable: true,
              value: create(null)
            });
          } // add a key to Array.prototype[@@unscopables]


          module.exports = function (key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
          };
          /***/

        },

        /***/
        1530:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_2208__) {
          "use strict";

          var charAt = __nested_webpack_require_2208__(8710).charAt; // `AdvanceStringIndex` abstract operation
          // https://tc39.es/ecma262/#sec-advancestringindex


          module.exports = function (S, index, unicode) {
            return index + (unicode ? charAt(S, index).length : 1);
          };
          /***/

        },

        /***/
        5787:
        /***/
        function (module) {
          module.exports = function (it, Constructor, name) {
            if (!(it instanceof Constructor)) {
              throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
            }

            return it;
          };
          /***/

        },

        /***/
        9670:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_3028__) {
          var isObject = __nested_webpack_require_3028__(111);

          module.exports = function (it) {
            if (!isObject(it)) {
              throw TypeError(String(it) + ' is not an object');
            }

            return it;
          };
          /***/

        },

        /***/
        4019:
        /***/
        function (module) {
          module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';
          /***/
        },

        /***/
        260:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_3613__) {
          "use strict";

          var NATIVE_ARRAY_BUFFER = __nested_webpack_require_3613__(4019);

          var DESCRIPTORS = __nested_webpack_require_3613__(9781);

          var global = __nested_webpack_require_3613__(7854);

          var isObject = __nested_webpack_require_3613__(111);

          var has = __nested_webpack_require_3613__(6656);

          var classof = __nested_webpack_require_3613__(648);

          var createNonEnumerableProperty = __nested_webpack_require_3613__(8880);

          var redefine = __nested_webpack_require_3613__(1320);

          var defineProperty = __nested_webpack_require_3613__(3070).f;

          var getPrototypeOf = __nested_webpack_require_3613__(9518);

          var setPrototypeOf = __nested_webpack_require_3613__(7674);

          var wellKnownSymbol = __nested_webpack_require_3613__(5112);

          var uid = __nested_webpack_require_3613__(9711);

          var Int8Array = global.Int8Array;
          var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
          var Uint8ClampedArray = global.Uint8ClampedArray;
          var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
          var TypedArray = Int8Array && getPrototypeOf(Int8Array);
          var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
          var ObjectPrototype = Object.prototype;
          var isPrototypeOf = ObjectPrototype.isPrototypeOf;
          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

          var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
          var TYPED_ARRAY_TAG_REQIRED = false;
          var NAME;
          var TypedArrayConstructorsList = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
          };
          var BigIntArrayConstructorsList = {
            BigInt64Array: 8,
            BigUint64Array: 8
          };

          var isView = function isView(it) {
            if (!isObject(it)) return false;
            var klass = classof(it);
            return klass === 'DataView' || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
          };

          var isTypedArray = function (it) {
            if (!isObject(it)) return false;
            var klass = classof(it);
            return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
          };

          var aTypedArray = function (it) {
            if (isTypedArray(it)) return it;
            throw TypeError('Target is not a typed array');
          };

          var aTypedArrayConstructor = function (C) {
            if (setPrototypeOf) {
              if (isPrototypeOf.call(TypedArray, C)) return C;
            } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
              var TypedArrayConstructor = global[ARRAY];

              if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
                return C;
              }
            }

            throw TypeError('Target is not a typed array constructor');
          };

          var exportTypedArrayMethod = function (KEY, property, forced) {
            if (!DESCRIPTORS) return;
            if (forced) for (var ARRAY in TypedArrayConstructorsList) {
              var TypedArrayConstructor = global[ARRAY];

              if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
                delete TypedArrayConstructor.prototype[KEY];
              }
            }

            if (!TypedArrayPrototype[KEY] || forced) {
              redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
            }
          };

          var exportTypedArrayStaticMethod = function (KEY, property, forced) {
            var ARRAY, TypedArrayConstructor;
            if (!DESCRIPTORS) return;

            if (setPrototypeOf) {
              if (forced) for (ARRAY in TypedArrayConstructorsList) {
                TypedArrayConstructor = global[ARRAY];

                if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
                  delete TypedArrayConstructor[KEY];
                }
              }

              if (!TypedArray[KEY] || forced) {
                // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
                try {
                  return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
                } catch (error) {
                  /* empty */
                }
              } else return;
            }

            for (ARRAY in TypedArrayConstructorsList) {
              TypedArrayConstructor = global[ARRAY];

              if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
                redefine(TypedArrayConstructor, KEY, property);
              }
            }
          };

          for (NAME in TypedArrayConstructorsList) {
            if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
          } // WebKit bug - typed arrays constructors prototype is Object.prototype


          if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
            // eslint-disable-next-line no-shadow -- safe
            TypedArray = function TypedArray() {
              throw TypeError('Incorrect invocation');
            };

            if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
              if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
            }
          }

          if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
            TypedArrayPrototype = TypedArray.prototype;
            if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
              if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
            }
          } // WebKit bug - one more object in Uint8ClampedArray prototype chain


          if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
            setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
          }

          if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
            TYPED_ARRAY_TAG_REQIRED = true;
            defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
              get: function () {
                return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
              }
            });

            for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
              createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
            }
          }

          module.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
            TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
            aTypedArray: aTypedArray,
            aTypedArrayConstructor: aTypedArrayConstructor,
            exportTypedArrayMethod: exportTypedArrayMethod,
            exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
            isView: isView,
            isTypedArray: isTypedArray,
            TypedArray: TypedArray,
            TypedArrayPrototype: TypedArrayPrototype
          };
          /***/
        },

        /***/
        3331:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_11388__) {
          "use strict";

          var global = __nested_webpack_require_11388__(7854);

          var DESCRIPTORS = __nested_webpack_require_11388__(9781);

          var NATIVE_ARRAY_BUFFER = __nested_webpack_require_11388__(4019);

          var createNonEnumerableProperty = __nested_webpack_require_11388__(8880);

          var redefineAll = __nested_webpack_require_11388__(2248);

          var fails = __nested_webpack_require_11388__(7293);

          var anInstance = __nested_webpack_require_11388__(5787);

          var toInteger = __nested_webpack_require_11388__(9958);

          var toLength = __nested_webpack_require_11388__(7466);

          var toIndex = __nested_webpack_require_11388__(7067);

          var IEEE754 = __nested_webpack_require_11388__(1179);

          var getPrototypeOf = __nested_webpack_require_11388__(9518);

          var setPrototypeOf = __nested_webpack_require_11388__(7674);

          var getOwnPropertyNames = __nested_webpack_require_11388__(8006).f;

          var defineProperty = __nested_webpack_require_11388__(3070).f;

          var arrayFill = __nested_webpack_require_11388__(1285);

          var setToStringTag = __nested_webpack_require_11388__(8003);

          var InternalStateModule = __nested_webpack_require_11388__(9909);

          var getInternalState = InternalStateModule.get;
          var setInternalState = InternalStateModule.set;
          var ARRAY_BUFFER = 'ArrayBuffer';
          var DATA_VIEW = 'DataView';
          var PROTOTYPE = 'prototype';
          var WRONG_LENGTH = 'Wrong length';
          var WRONG_INDEX = 'Wrong index';
          var NativeArrayBuffer = global[ARRAY_BUFFER];
          var $ArrayBuffer = NativeArrayBuffer;
          var $DataView = global[DATA_VIEW];
          var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
          var ObjectPrototype = Object.prototype;
          var RangeError = global.RangeError;
          var packIEEE754 = IEEE754.pack;
          var unpackIEEE754 = IEEE754.unpack;

          var packInt8 = function (number) {
            return [number & 0xFF];
          };

          var packInt16 = function (number) {
            return [number & 0xFF, number >> 8 & 0xFF];
          };

          var packInt32 = function (number) {
            return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
          };

          var unpackInt32 = function (buffer) {
            return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
          };

          var packFloat32 = function (number) {
            return packIEEE754(number, 23, 4);
          };

          var packFloat64 = function (number) {
            return packIEEE754(number, 52, 8);
          };

          var addGetter = function (Constructor, key) {
            defineProperty(Constructor[PROTOTYPE], key, {
              get: function () {
                return getInternalState(this)[key];
              }
            });
          };

          var get = function (view, count, index, isLittleEndian) {
            var intIndex = toIndex(index);
            var store = getInternalState(view);
            if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
            var bytes = getInternalState(store.buffer).bytes;
            var start = intIndex + store.byteOffset;
            var pack = bytes.slice(start, start + count);
            return isLittleEndian ? pack : pack.reverse();
          };

          var set = function (view, count, index, conversion, value, isLittleEndian) {
            var intIndex = toIndex(index);
            var store = getInternalState(view);
            if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
            var bytes = getInternalState(store.buffer).bytes;
            var start = intIndex + store.byteOffset;
            var pack = conversion(+value);

            for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
          };

          if (!NATIVE_ARRAY_BUFFER) {
            $ArrayBuffer = function ArrayBuffer(length) {
              anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
              var byteLength = toIndex(length);
              setInternalState(this, {
                bytes: arrayFill.call(new Array(byteLength), 0),
                byteLength: byteLength
              });
              if (!DESCRIPTORS) this.byteLength = byteLength;
            };

            $DataView = function DataView(buffer, byteOffset, byteLength) {
              anInstance(this, $DataView, DATA_VIEW);
              anInstance(buffer, $ArrayBuffer, DATA_VIEW);
              var bufferLength = getInternalState(buffer).byteLength;
              var offset = toInteger(byteOffset);
              if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
              byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
              if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
              setInternalState(this, {
                buffer: buffer,
                byteLength: byteLength,
                byteOffset: offset
              });

              if (!DESCRIPTORS) {
                this.buffer = buffer;
                this.byteLength = byteLength;
                this.byteOffset = offset;
              }
            };

            if (DESCRIPTORS) {
              addGetter($ArrayBuffer, 'byteLength');
              addGetter($DataView, 'buffer');
              addGetter($DataView, 'byteLength');
              addGetter($DataView, 'byteOffset');
            }

            redefineAll($DataView[PROTOTYPE], {
              getInt8: function getInt8(byteOffset) {
                return get(this, 1, byteOffset)[0] << 24 >> 24;
              },
              getUint8: function getUint8(byteOffset) {
                return get(this, 1, byteOffset)[0];
              },
              getInt16: function getInt16(byteOffset
              /* , littleEndian */
              ) {
                var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
                return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
              },
              getUint16: function getUint16(byteOffset
              /* , littleEndian */
              ) {
                var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
                return bytes[1] << 8 | bytes[0];
              },
              getInt32: function getInt32(byteOffset
              /* , littleEndian */
              ) {
                return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
              },
              getUint32: function getUint32(byteOffset
              /* , littleEndian */
              ) {
                return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
              },
              getFloat32: function getFloat32(byteOffset
              /* , littleEndian */
              ) {
                return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
              },
              getFloat64: function getFloat64(byteOffset
              /* , littleEndian */
              ) {
                return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
              },
              setInt8: function setInt8(byteOffset, value) {
                set(this, 1, byteOffset, packInt8, value);
              },
              setUint8: function setUint8(byteOffset, value) {
                set(this, 1, byteOffset, packInt8, value);
              },
              setInt16: function setInt16(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
              },
              setUint16: function setUint16(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
              },
              setInt32: function setInt32(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
              },
              setUint32: function setUint32(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
              },
              setFloat32: function setFloat32(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
              },
              setFloat64: function setFloat64(byteOffset, value
              /* , littleEndian */
              ) {
                set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
              }
            });
          } else {
            /* eslint-disable no-new -- required for testing */
            if (!fails(function () {
              NativeArrayBuffer(1);
            }) || !fails(function () {
              new NativeArrayBuffer(-1);
            }) || fails(function () {
              new NativeArrayBuffer();
              new NativeArrayBuffer(1.5);
              new NativeArrayBuffer(NaN);
              return NativeArrayBuffer.name != ARRAY_BUFFER;
            })) {
              /* eslint-enable no-new -- required for testing */
              $ArrayBuffer = function ArrayBuffer(length) {
                anInstance(this, $ArrayBuffer);
                return new NativeArrayBuffer(toIndex(length));
              };

              var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];

              for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
                if (!((key = keys[j++]) in $ArrayBuffer)) {
                  createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
                }
              }

              ArrayBufferPrototype.constructor = $ArrayBuffer;
            } // WebKit bug - the same parent prototype for typed arrays and data view


            if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
              setPrototypeOf($DataViewPrototype, ObjectPrototype);
            } // iOS Safari 7.x bug


            var testView = new $DataView(new $ArrayBuffer(2));
            var nativeSetInt8 = $DataViewPrototype.setInt8;
            testView.setInt8(0, 2147483648);
            testView.setInt8(1, 2147483649);
            if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
              setInt8: function setInt8(byteOffset, value) {
                nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
              },
              setUint8: function setUint8(byteOffset, value) {
                nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
              }
            }, {
              unsafe: true
            });
          }

          setToStringTag($ArrayBuffer, ARRAY_BUFFER);
          setToStringTag($DataView, DATA_VIEW);
          module.exports = {
            ArrayBuffer: $ArrayBuffer,
            DataView: $DataView
          };
          /***/
        },

        /***/
        1048:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_22901__) {
          "use strict";

          var toObject = __nested_webpack_require_22901__(7908);

          var toAbsoluteIndex = __nested_webpack_require_22901__(1400);

          var toLength = __nested_webpack_require_22901__(7466);

          var min = Math.min; // `Array.prototype.copyWithin` method implementation
          // https://tc39.es/ecma262/#sec-array.prototype.copywithin

          module.exports = [].copyWithin || function copyWithin(target
          /* = 0 */
          , start
          /* = 0, end = @length */
          ) {
            var O = toObject(this);
            var len = toLength(O.length);
            var to = toAbsoluteIndex(target, len);
            var from = toAbsoluteIndex(start, len);
            var end = arguments.length > 2 ? arguments[2] : undefined;
            var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
            var inc = 1;

            if (from < to && to < from + count) {
              inc = -1;
              from += count - 1;
              to += count - 1;
            }

            while (count-- > 0) {
              if (from in O) O[to] = O[from];else delete O[to];
              to += inc;
              from += inc;
            }

            return O;
          };
          /***/

        },

        /***/
        1285:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_24282__) {
          "use strict";

          var toObject = __nested_webpack_require_24282__(7908);

          var toAbsoluteIndex = __nested_webpack_require_24282__(1400);

          var toLength = __nested_webpack_require_24282__(7466); // `Array.prototype.fill` method implementation
          // https://tc39.es/ecma262/#sec-array.prototype.fill


          module.exports = function fill(value
          /* , start = 0, end = @length */
          ) {
            var O = toObject(this);
            var length = toLength(O.length);
            var argumentsLength = arguments.length;
            var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
            var end = argumentsLength > 2 ? arguments[2] : undefined;
            var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

            while (endPos > index) O[index++] = value;

            return O;
          };
          /***/

        },

        /***/
        8533:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_25311__) {
          "use strict";

          var $forEach = __nested_webpack_require_25311__(2092).forEach;

          var arrayMethodIsStrict = __nested_webpack_require_25311__(9341);

          var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
          // https://tc39.es/ecma262/#sec-array.prototype.foreach

          module.exports = !STRICT_METHOD ? function forEach(callbackfn
          /* , thisArg */
          ) {
            return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          } : [].forEach;
          /***/
        },

        /***/
        8457:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_26020__) {
          "use strict";

          var bind = __nested_webpack_require_26020__(9974);

          var toObject = __nested_webpack_require_26020__(7908);

          var callWithSafeIterationClosing = __nested_webpack_require_26020__(3411);

          var isArrayIteratorMethod = __nested_webpack_require_26020__(7659);

          var toLength = __nested_webpack_require_26020__(7466);

          var createProperty = __nested_webpack_require_26020__(6135);

          var getIteratorMethod = __nested_webpack_require_26020__(1246); // `Array.from` method implementation
          // https://tc39.es/ecma262/#sec-array.from


          module.exports = function from(arrayLike
          /* , mapfn = undefined, thisArg = undefined */
          ) {
            var O = toObject(arrayLike);
            var C = typeof this == 'function' ? this : Array;
            var argumentsLength = arguments.length;
            var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iteratorMethod = getIteratorMethod(O);
            var index = 0;
            var length, result, step, iterator, next, value;
            if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

            if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
              iterator = iteratorMethod.call(O);
              next = iterator.next;
              result = new C();

              for (; !(step = next.call(iterator)).done; index++) {
                value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                createProperty(result, index, value);
              }
            } else {
              length = toLength(O.length);
              result = new C(length);

              for (; length > index; index++) {
                value = mapping ? mapfn(O[index], index) : O[index];
                createProperty(result, index, value);
              }
            }

            result.length = index;
            return result;
          };
          /***/

        },

        /***/
        1318:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_28293__) {
          var toIndexedObject = __nested_webpack_require_28293__(5656);

          var toLength = __nested_webpack_require_28293__(7466);

          var toAbsoluteIndex = __nested_webpack_require_28293__(1400); // `Array.prototype.{ indexOf, includes }` methods implementation


          var createMethod = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
              var O = toIndexedObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value; // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare -- NaN check

              if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

                if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
              } else for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
              }
              return !IS_INCLUDES && -1;
            };
          };

          module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.es/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.es/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false)
          };
          /***/
        },

        /***/
        2092:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_29959__) {
          var bind = __nested_webpack_require_29959__(9974);

          var IndexedObject = __nested_webpack_require_29959__(8361);

          var toObject = __nested_webpack_require_29959__(7908);

          var toLength = __nested_webpack_require_29959__(7466);

          var arraySpeciesCreate = __nested_webpack_require_29959__(5417);

          var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

          var createMethod = function (TYPE) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var IS_FILTER_OUT = TYPE == 7;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            return function ($this, callbackfn, that, specificCreate) {
              var O = toObject($this);
              var self = IndexedObject(O);
              var boundFunction = bind(callbackfn, that, 3);
              var length = toLength(self.length);
              var index = 0;
              var create = specificCreate || arraySpeciesCreate;
              var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
              var value, result;

              for (; length > index; index++) if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);

                if (TYPE) {
                  if (IS_MAP) target[index] = result; // map
                  else if (result) switch (TYPE) {
                    case 3:
                      return true;
                    // some

                    case 5:
                      return value;
                    // find

                    case 6:
                      return index;
                    // findIndex

                    case 2:
                      push.call(target, value);
                    // filter
                  } else switch (TYPE) {
                    case 4:
                      return false;
                    // every

                    case 7:
                      push.call(target, value);
                    // filterOut
                  }
                }
              }

              return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
            };
          };

          module.exports = {
            // `Array.prototype.forEach` method
            // https://tc39.es/ecma262/#sec-array.prototype.foreach
            forEach: createMethod(0),
            // `Array.prototype.map` method
            // https://tc39.es/ecma262/#sec-array.prototype.map
            map: createMethod(1),
            // `Array.prototype.filter` method
            // https://tc39.es/ecma262/#sec-array.prototype.filter
            filter: createMethod(2),
            // `Array.prototype.some` method
            // https://tc39.es/ecma262/#sec-array.prototype.some
            some: createMethod(3),
            // `Array.prototype.every` method
            // https://tc39.es/ecma262/#sec-array.prototype.every
            every: createMethod(4),
            // `Array.prototype.find` method
            // https://tc39.es/ecma262/#sec-array.prototype.find
            find: createMethod(5),
            // `Array.prototype.findIndex` method
            // https://tc39.es/ecma262/#sec-array.prototype.findIndex
            findIndex: createMethod(6),
            // `Array.prototype.filterOut` method
            // https://github.com/tc39/proposal-array-filtering
            filterOut: createMethod(7)
          };
          /***/
        },

        /***/
        6583:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_33725__) {
          "use strict";

          var toIndexedObject = __nested_webpack_require_33725__(5656);

          var toInteger = __nested_webpack_require_33725__(9958);

          var toLength = __nested_webpack_require_33725__(7466);

          var arrayMethodIsStrict = __nested_webpack_require_33725__(9341);

          var min = Math.min;
          var nativeLastIndexOf = [].lastIndexOf;
          var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
          var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
          var FORCED = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation
          // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

          module.exports = FORCED ? function lastIndexOf(searchElement
          /* , fromIndex = @[*-1] */
          ) {
            // convert -0 to +0
            if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var index = length - 1;
            if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
            if (index < 0) index = length + index;

            for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

            return -1;
          } : nativeLastIndexOf;
          /***/
        },

        /***/
        1194:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_35199__) {
          var fails = __nested_webpack_require_35199__(7293);

          var wellKnownSymbol = __nested_webpack_require_35199__(5112);

          var V8_VERSION = __nested_webpack_require_35199__(7392);

          var SPECIES = wellKnownSymbol('species');

          module.exports = function (METHOD_NAME) {
            // We can't use this feature detection in V8 since it causes
            // deoptimization and serious performance degradation
            // https://github.com/zloirock/core-js/issues/677
            return V8_VERSION >= 51 || !fails(function () {
              var array = [];
              var constructor = array.constructor = {};

              constructor[SPECIES] = function () {
                return {
                  foo: 1
                };
              };

              return array[METHOD_NAME](Boolean).foo !== 1;
            });
          };
          /***/

        },

        /***/
        9341:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_36190__) {
          "use strict";

          var fails = __nested_webpack_require_36190__(7293);

          module.exports = function (METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return !!method && fails(function () {
              // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
              method.call(null, argument || function () {
                throw 1;
              }, 1);
            });
          };
          /***/

        },

        /***/
        3671:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_36798__) {
          var aFunction = __nested_webpack_require_36798__(3099);

          var toObject = __nested_webpack_require_36798__(7908);

          var IndexedObject = __nested_webpack_require_36798__(8361);

          var toLength = __nested_webpack_require_36798__(7466); // `Array.prototype.{ reduce, reduceRight }` methods implementation


          var createMethod = function (IS_RIGHT) {
            return function (that, callbackfn, argumentsLength, memo) {
              aFunction(callbackfn);
              var O = toObject(that);
              var self = IndexedObject(O);
              var length = toLength(O.length);
              var index = IS_RIGHT ? length - 1 : 0;
              var i = IS_RIGHT ? -1 : 1;
              if (argumentsLength < 2) while (true) {
                if (index in self) {
                  memo = self[index];
                  index += i;
                  break;
                }

                index += i;

                if (IS_RIGHT ? index < 0 : length <= index) {
                  throw TypeError('Reduce of empty array with no initial value');
                }
              }

              for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
                memo = callbackfn(memo, self[index], index, O);
              }

              return memo;
            };
          };

          module.exports = {
            // `Array.prototype.reduce` method
            // https://tc39.es/ecma262/#sec-array.prototype.reduce
            left: createMethod(false),
            // `Array.prototype.reduceRight` method
            // https://tc39.es/ecma262/#sec-array.prototype.reduceright
            right: createMethod(true)
          };
          /***/
        },

        /***/
        5417:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_38611__) {
          var isObject = __nested_webpack_require_38611__(111);

          var isArray = __nested_webpack_require_38611__(3157);

          var wellKnownSymbol = __nested_webpack_require_38611__(5112);

          var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
          // https://tc39.es/ecma262/#sec-arrayspeciescreate

          module.exports = function (originalArray, length) {
            var C;

            if (isArray(originalArray)) {
              C = originalArray.constructor; // cross-realm fallback

              if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }

            return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
          };
          /***/

        },

        /***/
        3411:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_39597__) {
          var anObject = __nested_webpack_require_39597__(9670);

          var iteratorClose = __nested_webpack_require_39597__(9212); // call something on iterator step with safe closing on error


          module.exports = function (iterator, fn, value, ENTRIES) {
            try {
              return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
            } catch (error) {
              iteratorClose(iterator);
              throw error;
            }
          };
          /***/

        },

        /***/
        7072:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_40249__) {
          var wellKnownSymbol = __nested_webpack_require_40249__(5112);

          var ITERATOR = wellKnownSymbol('iterator');
          var SAFE_CLOSING = false;

          try {
            var called = 0;
            var iteratorWithReturn = {
              next: function () {
                return {
                  done: !!called++
                };
              },
              'return': function () {
                SAFE_CLOSING = true;
              }
            };

            iteratorWithReturn[ITERATOR] = function () {
              return this;
            }; // eslint-disable-next-line no-throw-literal -- required for testing


            Array.from(iteratorWithReturn, function () {
              throw 2;
            });
          } catch (error) {
            /* empty */
          }

          module.exports = function (exec, SKIP_CLOSING) {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
            var ITERATION_SUPPORT = false;

            try {
              var object = {};

              object[ITERATOR] = function () {
                return {
                  next: function () {
                    return {
                      done: ITERATION_SUPPORT = true
                    };
                  }
                };
              };

              exec(object);
            } catch (error) {
              /* empty */
            }

            return ITERATION_SUPPORT;
          };
          /***/

        },

        /***/
        4326:
        /***/
        function (module) {
          var toString = {}.toString;

          module.exports = function (it) {
            return toString.call(it).slice(8, -1);
          };
          /***/

        },

        /***/
        648:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_42078__) {
          var TO_STRING_TAG_SUPPORT = __nested_webpack_require_42078__(1694);

          var classofRaw = __nested_webpack_require_42078__(4326);

          var wellKnownSymbol = __nested_webpack_require_42078__(5112);

          var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

          var CORRECT_ARGUMENTS = classofRaw(function () {
            return arguments;
          }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

          var tryGet = function (it, key) {
            try {
              return it[key];
            } catch (error) {
              /* empty */
            }
          }; // getting tag from ES6+ `Object.prototype.toString`


          module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
            var O, tag, result;
            return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
            : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
            : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
            : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
          };
          /***/
        },

        /***/
        9920:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_43390__) {
          var has = __nested_webpack_require_43390__(6656);

          var ownKeys = __nested_webpack_require_43390__(3887);

          var getOwnPropertyDescriptorModule = __nested_webpack_require_43390__(1236);

          var definePropertyModule = __nested_webpack_require_43390__(3070);

          module.exports = function (target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
          };
          /***/

        },

        /***/
        8544:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_44223__) {
          var fails = __nested_webpack_require_44223__(7293);

          module.exports = !fails(function () {
            function F() {
              /* empty */
            }

            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F()) !== F.prototype;
          });
          /***/
        },

        /***/
        4994:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_44659__) {
          "use strict";

          var IteratorPrototype = __nested_webpack_require_44659__(3383).IteratorPrototype;

          var create = __nested_webpack_require_44659__(30);

          var createPropertyDescriptor = __nested_webpack_require_44659__(9114);

          var setToStringTag = __nested_webpack_require_44659__(8003);

          var Iterators = __nested_webpack_require_44659__(7497);

          var returnThis = function () {
            return this;
          };

          module.exports = function (IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + ' Iterator';
            IteratorConstructor.prototype = create(IteratorPrototype, {
              next: createPropertyDescriptor(1, next)
            });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
          };
          /***/

        },

        /***/
        8880:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_45668__) {
          var DESCRIPTORS = __nested_webpack_require_45668__(9781);

          var definePropertyModule = __nested_webpack_require_45668__(3070);

          var createPropertyDescriptor = __nested_webpack_require_45668__(9114);

          module.exports = DESCRIPTORS ? function (object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
          } : function (object, key, value) {
            object[key] = value;
            return object;
          };
          /***/
        },

        /***/
        9114:
        /***/
        function (module) {
          module.exports = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value
            };
          };
          /***/

        },

        /***/
        6135:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_46639__) {
          "use strict";

          var toPrimitive = __nested_webpack_require_46639__(7593);

          var definePropertyModule = __nested_webpack_require_46639__(3070);

          var createPropertyDescriptor = __nested_webpack_require_46639__(9114);

          module.exports = function (object, key, value) {
            var propertyKey = toPrimitive(key);
            if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
          };
          /***/

        },

        /***/
        654:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_47272__) {
          "use strict";

          var $ = __nested_webpack_require_47272__(2109);

          var createIteratorConstructor = __nested_webpack_require_47272__(4994);

          var getPrototypeOf = __nested_webpack_require_47272__(9518);

          var setPrototypeOf = __nested_webpack_require_47272__(7674);

          var setToStringTag = __nested_webpack_require_47272__(8003);

          var createNonEnumerableProperty = __nested_webpack_require_47272__(8880);

          var redefine = __nested_webpack_require_47272__(1320);

          var wellKnownSymbol = __nested_webpack_require_47272__(5112);

          var IS_PURE = __nested_webpack_require_47272__(1913);

          var Iterators = __nested_webpack_require_47272__(7497);

          var IteratorsCore = __nested_webpack_require_47272__(3383);

          var IteratorPrototype = IteratorsCore.IteratorPrototype;
          var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
          var ITERATOR = wellKnownSymbol('iterator');
          var KEYS = 'keys';
          var VALUES = 'values';
          var ENTRIES = 'entries';

          var returnThis = function () {
            return this;
          };

          module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);

            var getIterationMethod = function (KIND) {
              if (KIND === DEFAULT && defaultIterator) return defaultIterator;
              if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

              switch (KIND) {
                case KEYS:
                  return function keys() {
                    return new IteratorConstructor(this, KIND);
                  };

                case VALUES:
                  return function values() {
                    return new IteratorConstructor(this, KIND);
                  };

                case ENTRIES:
                  return function entries() {
                    return new IteratorConstructor(this, KIND);
                  };
              }

              return function () {
                return new IteratorConstructor(this);
              };
            };

            var TO_STRING_TAG = NAME + ' Iterator';
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
            var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY; // fix native

            if (anyNativeIterator) {
              CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

              if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                  if (setPrototypeOf) {
                    setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                  } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                    createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                  }
                } // Set @@toStringTag to native iterators


                setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
              }
            } // fix Array#{values, @@iterator}.name in V8 / FF


            if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
              INCORRECT_VALUES_NAME = true;

              defaultIterator = function values() {
                return nativeIterator.call(this);
              };
            } // define iterator


            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
              createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
            }

            Iterators[NAME] = defaultIterator; // export additional methods

            if (DEFAULT) {
              methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES)
              };
              if (FORCED) for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              } else $({
                target: NAME,
                proto: true,
                forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
              }, methods);
            }

            return methods;
          };
          /***/

        },

        /***/
        9781:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_52346__) {
          var fails = __nested_webpack_require_52346__(7293); // Detect IE8's incomplete defineProperty implementation


          module.exports = !fails(function () {
            return Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              }
            })[1] != 7;
          });
          /***/
        },

        /***/
        317:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_52809__) {
          var global = __nested_webpack_require_52809__(7854);

          var isObject = __nested_webpack_require_52809__(111);

          var document = global.document; // typeof document.createElement is 'object' in old IE

          var EXISTS = isObject(document) && isObject(document.createElement);

          module.exports = function (it) {
            return EXISTS ? document.createElement(it) : {};
          };
          /***/

        },

        /***/
        8324:
        /***/
        function (module) {
          // iterable DOM collections
          // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
          module.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
          /***/
        },

        /***/
        8113:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_54554__) {
          var getBuiltIn = __nested_webpack_require_54554__(5005);

          module.exports = getBuiltIn('navigator', 'userAgent') || '';
          /***/
        },

        /***/
        7392:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_54825__) {
          var global = __nested_webpack_require_54825__(7854);

          var userAgent = __nested_webpack_require_54825__(8113);

          var process = global.process;
          var versions = process && process.versions;
          var v8 = versions && versions.v8;
          var match, version;

          if (v8) {
            match = v8.split('.');
            version = match[0] + match[1];
          } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);

            if (!match || match[1] >= 74) {
              match = userAgent.match(/Chrome\/(\d+)/);
              if (match) version = match[1];
            }
          }

          module.exports = version && +version;
          /***/
        },

        /***/
        748:
        /***/
        function (module) {
          // IE8- don't enum bug keys
          module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
          /***/
        },

        /***/
        2109:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_55928__) {
          var global = __nested_webpack_require_55928__(7854);

          var getOwnPropertyDescriptor = __nested_webpack_require_55928__(1236).f;

          var createNonEnumerableProperty = __nested_webpack_require_55928__(8880);

          var redefine = __nested_webpack_require_55928__(1320);

          var setGlobal = __nested_webpack_require_55928__(3505);

          var copyConstructorProperties = __nested_webpack_require_55928__(9920);

          var isForced = __nested_webpack_require_55928__(4705);
          /*
            options.target      - name of the target object
            options.global      - target is the global object
            options.stat        - export as static methods of target
            options.proto       - export as prototype methods of target
            options.real        - real prototype method for the `pure` version
            options.forced      - export even if the native feature is available
            options.bind        - bind methods to the target, required for the `pure` version
            options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
            options.unsafe      - use the simple assignment of property instead of delete + defineProperty
            options.sham        - add a flag to not completely full polyfills
            options.enumerable  - export as enumerable property
            options.noTargetGet - prevent calling a getter on target
          */


          module.exports = function (options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;

            if (GLOBAL) {
              target = global;
            } else if (STATIC) {
              target = global[TARGET] || setGlobal(TARGET, {});
            } else {
              target = (global[TARGET] || {}).prototype;
            }

            if (target) for (key in source) {
              sourceProperty = source[key];

              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];

              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              } // add a flag to not completely full polyfills


              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
              } // extend global


              redefine(target, key, sourceProperty, options);
            }
          };
          /***/

        },

        /***/
        7293:
        /***/
        function (module) {
          module.exports = function (exec) {
            try {
              return !!exec();
            } catch (error) {
              return true;
            }
          };
          /***/

        },

        /***/
        7007:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_59255__) {
          "use strict"; // TODO: Remove from `core-js@4` since it's moved to entry points

          __nested_webpack_require_59255__(4916);

          var redefine = __nested_webpack_require_59255__(1320);

          var fails = __nested_webpack_require_59255__(7293);

          var wellKnownSymbol = __nested_webpack_require_59255__(5112);

          var regexpExec = __nested_webpack_require_59255__(2261);

          var createNonEnumerableProperty = __nested_webpack_require_59255__(8880);

          var SPECIES = wellKnownSymbol('species');
          var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;

            re.exec = function () {
              var result = [];
              result.groups = {
                a: '7'
              };
              return result;
            };

            return ''.replace(re, '$<a>') !== '7';
          }); // IE <= 11 replaces $0 with the whole match, as if it was $&
          // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

          var REPLACE_KEEPS_$0 = function () {
            return 'a'.replace(/./, '$0') === '$0';
          }();

          var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

          var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
            if (/./[REPLACE]) {
              return /./[REPLACE]('a', '$0') === '';
            }

            return false;
          }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
          // Weex JS has frozen built-in prototypes, so use try / catch wrapper


          var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
            // eslint-disable-next-line regexp/no-empty-group -- required for testing
            var re = /(?:)/;
            var originalExec = re.exec;

            re.exec = function () {
              return originalExec.apply(this, arguments);
            };

            var result = 'ab'.split(re);
            return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
          });

          module.exports = function (KEY, length, exec, sham) {
            var SYMBOL = wellKnownSymbol(KEY);
            var DELEGATES_TO_SYMBOL = !fails(function () {
              // String methods call symbol-named RegEp methods
              var O = {};

              O[SYMBOL] = function () {
                return 7;
              };

              return ''[KEY](O) != 7;
            });
            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
              // Symbol-named RegExp methods call .exec
              var execCalled = false;
              var re = /a/;

              if (KEY === 'split') {
                // We can't use real regex here since it causes deoptimization
                // and serious performance degradation in V8
                // https://github.com/zloirock/core-js/issues/306
                re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
                // a new one. We need to return the patched regex when creating the new one.

                re.constructor = {};

                re.constructor[SPECIES] = function () {
                  return re;
                };

                re.flags = '';
                re[SYMBOL] = /./[SYMBOL];
              }

              re.exec = function () {
                execCalled = true;
                return null;
              };

              re[SYMBOL]('');
              return !execCalled;
            });

            if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
              var nativeRegExpMethod = /./[SYMBOL];
              var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
                if (regexp.exec === regexpExec) {
                  if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                    // The native String method already delegates to @@method (this
                    // polyfilled function), leasing to infinite recursion.
                    // We avoid it by directly calling the native @@method method.
                    return {
                      done: true,
                      value: nativeRegExpMethod.call(regexp, str, arg2)
                    };
                  }

                  return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                  };
                }

                return {
                  done: false
                };
              }, {
                REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
              });
              var stringMethod = methods[0];
              var regexMethod = methods[1];
              redefine(String.prototype, KEY, stringMethod);
              redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
              // 21.2.5.11 RegExp.prototype[@@split](string, limit)
              ? function (string, arg) {
                return regexMethod.call(string, this, arg);
              } // 21.2.5.6 RegExp.prototype[@@match](string)
              // 21.2.5.9 RegExp.prototype[@@search](string)
              : function (string) {
                return regexMethod.call(string, this);
              });
            }

            if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
          };
          /***/

        },

        /***/
        9974:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_65328__) {
          var aFunction = __nested_webpack_require_65328__(3099); // optional / simple context binding


          module.exports = function (fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;

            switch (length) {
              case 0:
                return function () {
                  return fn.call(that);
                };

              case 1:
                return function (a) {
                  return fn.call(that, a);
                };

              case 2:
                return function (a, b) {
                  return fn.call(that, a, b);
                };

              case 3:
                return function (a, b, c) {
                  return fn.call(that, a, b, c);
                };
            }

            return function
              /* ...args */
            () {
              return fn.apply(that, arguments);
            };
          };
          /***/

        },

        /***/
        5005:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_66397__) {
          var path = __nested_webpack_require_66397__(857);

          var global = __nested_webpack_require_66397__(7854);

          var aFunction = function (variable) {
            return typeof variable == 'function' ? variable : undefined;
          };

          module.exports = function (namespace, method) {
            return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
          };
          /***/

        },

        /***/
        1246:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_67045__) {
          var classof = __nested_webpack_require_67045__(648);

          var Iterators = __nested_webpack_require_67045__(7497);

          var wellKnownSymbol = __nested_webpack_require_67045__(5112);

          var ITERATOR = wellKnownSymbol('iterator');

          module.exports = function (it) {
            if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
          };
          /***/

        },

        /***/
        8554:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_67567__) {
          var anObject = __nested_webpack_require_67567__(9670);

          var getIteratorMethod = __nested_webpack_require_67567__(1246);

          module.exports = function (it) {
            var iteratorMethod = getIteratorMethod(it);

            if (typeof iteratorMethod != 'function') {
              throw TypeError(String(it) + ' is not iterable');
            }

            return anObject(iteratorMethod.call(it));
          };
          /***/

        },

        /***/
        647:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_68128__) {
          var toObject = __nested_webpack_require_68128__(7908);

          var floor = Math.floor;
          var replace = ''.replace;
          var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
          var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g; // https://tc39.es/ecma262/#sec-getsubstitution

          module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

            if (namedCaptures !== undefined) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }

            return replace.call(replacement, symbols, function (match, ch) {
              var capture;

              switch (ch.charAt(0)) {
                case '$':
                  return '$';

                case '&':
                  return matched;

                case '`':
                  return str.slice(0, position);

                case "'":
                  return str.slice(tailPos);

                case '<':
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;

                default:
                  // \d\d?
                  var n = +ch;
                  if (n === 0) return match;

                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }

                  capture = captures[n - 1];
              }

              return capture === undefined ? '' : capture;
            });
          };
          /***/

        },

        /***/
        7854:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_70085__) {
          var check = function (it) {
            return it && it.Math == Math && it;
          }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


          module.exports =
          /* global globalThis -- safe */
          check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof __nested_webpack_require_70085__.g == 'object' && __nested_webpack_require_70085__.g) || // eslint-disable-next-line no-new-func -- fallback
          function () {
            return this;
          }() || Function('return this')();
          /***/

        },

        /***/
        6656:
        /***/
        function (module) {
          var hasOwnProperty = {}.hasOwnProperty;

          module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
          };
          /***/

        },

        /***/
        3501:
        /***/
        function (module) {
          module.exports = {};
          /***/
        },

        /***/
        490:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_71234__) {
          var getBuiltIn = __nested_webpack_require_71234__(5005);

          module.exports = getBuiltIn('document', 'documentElement');
          /***/
        },

        /***/
        4664:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_71504__) {
          var DESCRIPTORS = __nested_webpack_require_71504__(9781);

          var fails = __nested_webpack_require_71504__(7293);

          var createElement = __nested_webpack_require_71504__(317); // Thank's IE8 for his funny defineProperty


          module.exports = !DESCRIPTORS && !fails(function () {
            return Object.defineProperty(createElement('div'), 'a', {
              get: function () {
                return 7;
              }
            }).a != 7;
          });
          /***/
        },

        /***/
        1179:
        /***/
        function (module) {
          // IEEE754 conversions based on https://github.com/feross/ieee754
          var abs = Math.abs;
          var pow = Math.pow;
          var floor = Math.floor;
          var log = Math.log;
          var LN2 = Math.LN2;

          var pack = function (number, mantissaLength, bytes) {
            var buffer = new Array(bytes);
            var exponentLength = bytes * 8 - mantissaLength - 1;
            var eMax = (1 << exponentLength) - 1;
            var eBias = eMax >> 1;
            var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
            var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
            var index = 0;
            var exponent, mantissa, c;
            number = abs(number); // eslint-disable-next-line no-self-compare -- NaN check

            if (number != number || number === Infinity) {
              // eslint-disable-next-line no-self-compare -- NaN check
              mantissa = number != number ? 1 : 0;
              exponent = eMax;
            } else {
              exponent = floor(log(number) / LN2);

              if (number * (c = pow(2, -exponent)) < 1) {
                exponent--;
                c *= 2;
              }

              if (exponent + eBias >= 1) {
                number += rt / c;
              } else {
                number += rt * pow(2, 1 - eBias);
              }

              if (number * c >= 2) {
                exponent++;
                c /= 2;
              }

              if (exponent + eBias >= eMax) {
                mantissa = 0;
                exponent = eMax;
              } else if (exponent + eBias >= 1) {
                mantissa = (number * c - 1) * pow(2, mantissaLength);
                exponent = exponent + eBias;
              } else {
                mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
                exponent = 0;
              }
            }

            for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);

            exponent = exponent << mantissaLength | mantissa;
            exponentLength += mantissaLength;

            for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);

            buffer[--index] |= sign * 128;
            return buffer;
          };

          var unpack = function (buffer, mantissaLength) {
            var bytes = buffer.length;
            var exponentLength = bytes * 8 - mantissaLength - 1;
            var eMax = (1 << exponentLength) - 1;
            var eBias = eMax >> 1;
            var nBits = exponentLength - 7;
            var index = bytes - 1;
            var sign = buffer[index--];
            var exponent = sign & 127;
            var mantissa;
            sign >>= 7;

            for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);

            mantissa = exponent & (1 << -nBits) - 1;
            exponent >>= -nBits;
            nBits += mantissaLength;

            for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);

            if (exponent === 0) {
              exponent = 1 - eBias;
            } else if (exponent === eMax) {
              return mantissa ? NaN : sign ? -Infinity : Infinity;
            } else {
              mantissa = mantissa + pow(2, mantissaLength);
              exponent = exponent - eBias;
            }

            return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
          };

          module.exports = {
            pack: pack,
            unpack: unpack
          };
          /***/
        },

        /***/
        8361:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_75826__) {
          var fails = __nested_webpack_require_75826__(7293);

          var classof = __nested_webpack_require_75826__(4326);

          var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

          module.exports = fails(function () {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins -- safe
            return !Object('z').propertyIsEnumerable(0);
          }) ? function (it) {
            return classof(it) == 'String' ? split.call(it, '') : Object(it);
          } : Object;
          /***/
        },

        /***/
        9587:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_76569__) {
          var isObject = __nested_webpack_require_76569__(111);

          var setPrototypeOf = __nested_webpack_require_76569__(7674); // makes subclassing work correct for wrapped built-ins


          module.exports = function ($this, dummy, Wrapper) {
            var NewTarget, NewTargetPrototype;
            if ( // it can work only with native `setPrototypeOf`
            setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
            return $this;
          };
          /***/

        },

        /***/
        2788:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_77442__) {
          var store = __nested_webpack_require_77442__(5465);

          var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

          if (typeof store.inspectSource != 'function') {
            store.inspectSource = function (it) {
              return functionToString.call(it);
            };
          }

          module.exports = store.inspectSource;
          /***/
        },

        /***/
        9909:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_77994__) {
          var NATIVE_WEAK_MAP = __nested_webpack_require_77994__(8536);

          var global = __nested_webpack_require_77994__(7854);

          var isObject = __nested_webpack_require_77994__(111);

          var createNonEnumerableProperty = __nested_webpack_require_77994__(8880);

          var objectHas = __nested_webpack_require_77994__(6656);

          var shared = __nested_webpack_require_77994__(5465);

          var sharedKey = __nested_webpack_require_77994__(6200);

          var hiddenKeys = __nested_webpack_require_77994__(3501);

          var WeakMap = global.WeakMap;
          var set, get, has;

          var enforce = function (it) {
            return has(it) ? get(it) : set(it, {});
          };

          var getterFor = function (TYPE) {
            return function (it) {
              var state;

              if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError('Incompatible receiver, ' + TYPE + ' required');
              }

              return state;
            };
          };

          if (NATIVE_WEAK_MAP) {
            var store = shared.state || (shared.state = new WeakMap());
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;

            set = function (it, metadata) {
              metadata.facade = it;
              wmset.call(store, it, metadata);
              return metadata;
            };

            get = function (it) {
              return wmget.call(store, it) || {};
            };

            has = function (it) {
              return wmhas.call(store, it);
            };
          } else {
            var STATE = sharedKey('state');
            hiddenKeys[STATE] = true;

            set = function (it, metadata) {
              metadata.facade = it;
              createNonEnumerableProperty(it, STATE, metadata);
              return metadata;
            };

            get = function (it) {
              return objectHas(it, STATE) ? it[STATE] : {};
            };

            has = function (it) {
              return objectHas(it, STATE);
            };
          }

          module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
          };
          /***/
        },

        /***/
        7659:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_80351__) {
          var wellKnownSymbol = __nested_webpack_require_80351__(5112);

          var Iterators = __nested_webpack_require_80351__(7497);

          var ITERATOR = wellKnownSymbol('iterator');
          var ArrayPrototype = Array.prototype; // check on default Array iterator

          module.exports = function (it) {
            return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
          };
          /***/

        },

        /***/
        3157:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_80905__) {
          var classof = __nested_webpack_require_80905__(4326); // `IsArray` abstract operation
          // https://tc39.es/ecma262/#sec-isarray


          module.exports = Array.isArray || function isArray(arg) {
            return classof(arg) == 'Array';
          };
          /***/

        },

        /***/
        4705:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_81311__) {
          var fails = __nested_webpack_require_81311__(7293);

          var replacement = /#|\.prototype\./;

          var isForced = function (feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
          };

          var normalize = isForced.normalize = function (string) {
            return String(string).replace(replacement, '.').toLowerCase();
          };

          var data = isForced.data = {};
          var NATIVE = isForced.NATIVE = 'N';
          var POLYFILL = isForced.POLYFILL = 'P';
          module.exports = isForced;
          /***/
        },

        /***/
        111:
        /***/
        function (module) {
          module.exports = function (it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
          };
          /***/

        },

        /***/
        1913:
        /***/
        function (module) {
          module.exports = false;
          /***/
        },

        /***/
        7850:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_82512__) {
          var isObject = __nested_webpack_require_82512__(111);

          var classof = __nested_webpack_require_82512__(4326);

          var wellKnownSymbol = __nested_webpack_require_82512__(5112);

          var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
          // https://tc39.es/ecma262/#sec-isregexp

          module.exports = function (it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
          };
          /***/

        },

        /***/
        9212:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_83151__) {
          var anObject = __nested_webpack_require_83151__(9670);

          module.exports = function (iterator) {
            var returnMethod = iterator['return'];

            if (returnMethod !== undefined) {
              return anObject(returnMethod.call(iterator)).value;
            }
          };
          /***/

        },

        /***/
        3383:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_83590__) {
          "use strict";

          var fails = __nested_webpack_require_83590__(7293);

          var getPrototypeOf = __nested_webpack_require_83590__(9518);

          var createNonEnumerableProperty = __nested_webpack_require_83590__(8880);

          var has = __nested_webpack_require_83590__(6656);

          var wellKnownSymbol = __nested_webpack_require_83590__(5112);

          var IS_PURE = __nested_webpack_require_83590__(1913);

          var ITERATOR = wellKnownSymbol('iterator');
          var BUGGY_SAFARI_ITERATORS = false;

          var returnThis = function () {
            return this;
          }; // `%IteratorPrototype%` object
          // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


          var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

          if ([].keys) {
            arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

            if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
              PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
              if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
          }

          var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
            var test = {}; // FF44- legacy iterators case

            return IteratorPrototype[ITERATOR].call(test) !== test;
          });
          if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

          if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
            createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
          }

          module.exports = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
          };
          /***/
        },

        /***/
        7497:
        /***/
        function (module) {
          module.exports = {};
          /***/
        },

        /***/
        133:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_85720__) {
          var fails = __nested_webpack_require_85720__(7293);

          module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
            // Chrome 38 Symbol has incorrect toString conversion

            /* global Symbol -- required for testing */
            return !String(Symbol());
          });
          /***/
        },

        /***/
        590:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_86171__) {
          var fails = __nested_webpack_require_86171__(7293);

          var wellKnownSymbol = __nested_webpack_require_86171__(5112);

          var IS_PURE = __nested_webpack_require_86171__(1913);

          var ITERATOR = wellKnownSymbol('iterator');
          module.exports = !fails(function () {
            var url = new URL('b?a=1&b=2&c=3', 'http://a');
            var searchParams = url.searchParams;
            var result = '';
            url.pathname = 'c%20d';
            searchParams.forEach(function (value, key) {
              searchParams['delete']('b');
              result += key + value;
            });
            return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR] // throws in Edge
            || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
            || new URL('http://????????').host !== 'xn--e1aybc' // not escaped in Chrome 62-
            || new URL('http://a#??').hash !== '#%D0%B1' // fails in Chrome 66-
            || result !== 'a1c3' // throws in Safari
            || new URL('http://x', undefined).host !== 'x';
          });
          /***/
        },

        /***/
        8536:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_87582__) {
          var global = __nested_webpack_require_87582__(7854);

          var inspectSource = __nested_webpack_require_87582__(2788);

          var WeakMap = global.WeakMap;
          module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
          /***/
        },

        /***/
        1574:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_87980__) {
          "use strict";

          var DESCRIPTORS = __nested_webpack_require_87980__(9781);

          var fails = __nested_webpack_require_87980__(7293);

          var objectKeys = __nested_webpack_require_87980__(1956);

          var getOwnPropertySymbolsModule = __nested_webpack_require_87980__(5181);

          var propertyIsEnumerableModule = __nested_webpack_require_87980__(5296);

          var toObject = __nested_webpack_require_87980__(7908);

          var IndexedObject = __nested_webpack_require_87980__(8361);

          var nativeAssign = Object.assign;
          var defineProperty = Object.defineProperty; // `Object.assign` method
          // https://tc39.es/ecma262/#sec-object.assign

          module.exports = !nativeAssign || fails(function () {
            // should have correct order of operations (Edge bug)
            if (DESCRIPTORS && nativeAssign({
              b: 1
            }, nativeAssign(defineProperty({}, 'a', {
              enumerable: true,
              get: function () {
                defineProperty(this, 'b', {
                  value: 3,
                  enumerable: false
                });
              }
            }), {
              b: 2
            })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

            var A = {};
            var B = {};
            /* global Symbol -- required for testing */

            var symbol = Symbol();
            var alphabet = 'abcdefghijklmnopqrst';
            A[symbol] = 7;
            alphabet.split('').forEach(function (chr) {
              B[chr] = chr;
            });
            return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
          }) ? function assign(target, source) {
            // eslint-disable-line no-unused-vars -- required for `.length`
            var T = toObject(target);
            var argumentsLength = arguments.length;
            var index = 1;
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            var propertyIsEnumerable = propertyIsEnumerableModule.f;

            while (argumentsLength > index) {
              var S = IndexedObject(arguments[index++]);
              var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
              var length = keys.length;
              var j = 0;
              var key;

              while (length > j) {
                key = keys[j++];
                if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
              }
            }

            return T;
          } : nativeAssign;
          /***/
        },

        /***/
        30:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_90712__) {
          var anObject = __nested_webpack_require_90712__(9670);

          var defineProperties = __nested_webpack_require_90712__(6048);

          var enumBugKeys = __nested_webpack_require_90712__(748);

          var hiddenKeys = __nested_webpack_require_90712__(3501);

          var html = __nested_webpack_require_90712__(490);

          var documentCreateElement = __nested_webpack_require_90712__(317);

          var sharedKey = __nested_webpack_require_90712__(6200);

          var GT = '>';
          var LT = '<';
          var PROTOTYPE = 'prototype';
          var SCRIPT = 'script';
          var IE_PROTO = sharedKey('IE_PROTO');

          var EmptyConstructor = function () {
            /* empty */
          };

          var scriptTag = function (content) {
            return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
          }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


          var NullProtoObjectViaActiveX = function (activeXDocument) {
            activeXDocument.write(scriptTag(''));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            activeXDocument = null; // avoid memory leak

            return temp;
          }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


          var NullProtoObjectViaIFrame = function () {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = documentCreateElement('iframe');
            var JS = 'java' + SCRIPT + ':';
            var iframeDocument;
            iframe.style.display = 'none';
            html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag('document.F=Object'));
            iframeDocument.close();
            return iframeDocument.F;
          }; // Check for document.domain and active x support
          // No need to use active x approach when document.domain is not set
          // see https://github.com/es-shims/es5-shim/issues/150
          // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
          // avoid IE GC bug


          var activeXDocument;

          var NullProtoObject = function () {
            try {
              /* global ActiveXObject -- old IE */
              activeXDocument = document.domain && new ActiveXObject('htmlfile');
            } catch (error) {
              /* ignore */
            }

            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            var length = enumBugKeys.length;

            while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

            return NullProtoObject();
          };

          hiddenKeys[IE_PROTO] = true; // `Object.create` method
          // https://tc39.es/ecma262/#sec-object.create

          module.exports = Object.create || function create(O, Properties) {
            var result;

            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

              result[IE_PROTO] = O;
            } else result = NullProtoObject();

            return Properties === undefined ? result : defineProperties(result, Properties);
          };
          /***/

        },

        /***/
        6048:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_94353__) {
          var DESCRIPTORS = __nested_webpack_require_94353__(9781);

          var definePropertyModule = __nested_webpack_require_94353__(3070);

          var anObject = __nested_webpack_require_94353__(9670);

          var objectKeys = __nested_webpack_require_94353__(1956); // `Object.defineProperties` method
          // https://tc39.es/ecma262/#sec-object.defineproperties


          module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;

            while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);

            return O;
          };
          /***/
        },

        /***/
        3070:
        /***/
        function (__unused_webpack_module, exports, __nested_webpack_require_95235__) {
          var DESCRIPTORS = __nested_webpack_require_95235__(9781);

          var IE8_DOM_DEFINE = __nested_webpack_require_95235__(4664);

          var anObject = __nested_webpack_require_95235__(9670);

          var toPrimitive = __nested_webpack_require_95235__(7593);

          var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
          // https://tc39.es/ecma262/#sec-object.defineproperty

          exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
              return nativeDefineProperty(O, P, Attributes);
            } catch (error) {
              /* empty */
            }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
          };
          /***/
        },

        /***/
        1236:
        /***/
        function (__unused_webpack_module, exports, __nested_webpack_require_96335__) {
          var DESCRIPTORS = __nested_webpack_require_96335__(9781);

          var propertyIsEnumerableModule = __nested_webpack_require_96335__(5296);

          var createPropertyDescriptor = __nested_webpack_require_96335__(9114);

          var toIndexedObject = __nested_webpack_require_96335__(5656);

          var toPrimitive = __nested_webpack_require_96335__(7593);

          var has = __nested_webpack_require_96335__(6656);

          var IE8_DOM_DEFINE = __nested_webpack_require_96335__(4664);

          var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
          // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

          exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
              return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {
              /* empty */
            }
            if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
          };
          /***/
        },

        /***/
        8006:
        /***/
        function (__unused_webpack_module, exports, __nested_webpack_require_97571__) {
          var internalObjectKeys = __nested_webpack_require_97571__(6324);

          var enumBugKeys = __nested_webpack_require_97571__(748);

          var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
          // https://tc39.es/ecma262/#sec-object.getownpropertynames

          exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };
          /***/

        },

        /***/
        5181:
        /***/
        function (__unused_webpack_module, exports) {
          exports.f = Object.getOwnPropertySymbols;
          /***/
        },

        /***/
        9518:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_98343__) {
          var has = __nested_webpack_require_98343__(6656);

          var toObject = __nested_webpack_require_98343__(7908);

          var sharedKey = __nested_webpack_require_98343__(6200);

          var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_98343__(8544);

          var IE_PROTO = sharedKey('IE_PROTO');
          var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
          // https://tc39.es/ecma262/#sec-object.getprototypeof

          module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];

            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
              return O.constructor.prototype;
            }

            return O instanceof Object ? ObjectPrototype : null;
          };
          /***/
        },

        /***/
        6324:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_99309__) {
          var has = __nested_webpack_require_99309__(6656);

          var toIndexedObject = __nested_webpack_require_99309__(5656);

          var indexOf = __nested_webpack_require_99309__(1318).indexOf;

          var hiddenKeys = __nested_webpack_require_99309__(3501);

          module.exports = function (object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;

            for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


            while (names.length > i) if (has(O, key = names[i++])) {
              ~indexOf(result, key) || result.push(key);
            }

            return result;
          };
          /***/

        },

        /***/
        1956:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_100151__) {
          var internalObjectKeys = __nested_webpack_require_100151__(6324);

          var enumBugKeys = __nested_webpack_require_100151__(748); // `Object.keys` method
          // https://tc39.es/ecma262/#sec-object.keys


          module.exports = Object.keys || function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };
          /***/

        },

        /***/
        5296:
        /***/
        function (__unused_webpack_module, exports) {
          "use strict";

          var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

          var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
            1: 2
          }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
          // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

          exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
          } : nativePropertyIsEnumerable;
          /***/
        },

        /***/
        7674:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_101443__) {
          /* eslint-disable no-proto -- safe */
          var anObject = __nested_webpack_require_101443__(9670);

          var aPossiblePrototype = __nested_webpack_require_101443__(6077); // `Object.setPrototypeOf` method
          // https://tc39.es/ecma262/#sec-object.setprototypeof
          // Works with __proto__ only. Old v8 can't work with null proto objects.


          module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
            var CORRECT_SETTER = false;
            var test = {};
            var setter;

            try {
              setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
              setter.call(test, []);
              CORRECT_SETTER = test instanceof Array;
            } catch (error) {
              /* empty */
            }

            return function setPrototypeOf(O, proto) {
              anObject(O);
              aPossiblePrototype(proto);
              if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
              return O;
            };
          }() : undefined);
          /***/
        },

        /***/
        288:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_102655__) {
          "use strict";

          var TO_STRING_TAG_SUPPORT = __nested_webpack_require_102655__(1694);

          var classof = __nested_webpack_require_102655__(648); // `Object.prototype.toString` method implementation
          // https://tc39.es/ecma262/#sec-object.prototype.tostring


          module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
            return '[object ' + classof(this) + ']';
          };
          /***/
        },

        /***/
        3887:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_103217__) {
          var getBuiltIn = __nested_webpack_require_103217__(5005);

          var getOwnPropertyNamesModule = __nested_webpack_require_103217__(8006);

          var getOwnPropertySymbolsModule = __nested_webpack_require_103217__(5181);

          var anObject = __nested_webpack_require_103217__(9670); // all object keys, includes non-enumerable and symbols


          module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
          };
          /***/

        },

        /***/
        857:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_103995__) {
          var global = __nested_webpack_require_103995__(7854);

          module.exports = global;
          /***/
        },

        /***/
        2248:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_104226__) {
          var redefine = __nested_webpack_require_104226__(1320);

          module.exports = function (target, src, options) {
            for (var key in src) redefine(target, key, src[key], options);

            return target;
          };
          /***/

        },

        /***/
        1320:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_104602__) {
          var global = __nested_webpack_require_104602__(7854);

          var createNonEnumerableProperty = __nested_webpack_require_104602__(8880);

          var has = __nested_webpack_require_104602__(6656);

          var setGlobal = __nested_webpack_require_104602__(3505);

          var inspectSource = __nested_webpack_require_104602__(2788);

          var InternalStateModule = __nested_webpack_require_104602__(9909);

          var getInternalState = InternalStateModule.get;
          var enforceInternalState = InternalStateModule.enforce;
          var TEMPLATE = String(String).split('String');
          (module.exports = function (O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            var state;

            if (typeof value == 'function') {
              if (typeof key == 'string' && !has(value, 'name')) {
                createNonEnumerableProperty(value, 'name', key);
              }

              state = enforceInternalState(value);

              if (!state.source) {
                state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
              }
            }

            if (O === global) {
              if (simple) O[key] = value;else setGlobal(key, value);
              return;
            } else if (!unsafe) {
              delete O[key];
            } else if (!noTargetGet && O[key]) {
              simple = true;
            }

            if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, 'toString', function toString() {
            return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
          });
          /***/
        },

        /***/
        7651:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_106616__) {
          var classof = __nested_webpack_require_106616__(4326);

          var regexpExec = __nested_webpack_require_106616__(2261); // `RegExpExec` abstract operation
          // https://tc39.es/ecma262/#sec-regexpexec


          module.exports = function (R, S) {
            var exec = R.exec;

            if (typeof exec === 'function') {
              var result = exec.call(R, S);

              if (typeof result !== 'object') {
                throw TypeError('RegExp exec method returned something other than an Object or null');
              }

              return result;
            }

            if (classof(R) !== 'RegExp') {
              throw TypeError('RegExp#exec called on incompatible receiver');
            }

            return regexpExec.call(R, S);
          };
          /***/

        },

        /***/
        2261:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_107529__) {
          "use strict";

          var regexpFlags = __nested_webpack_require_107529__(7066);

          var stickyHelpers = __nested_webpack_require_107529__(2999);

          var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
          // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
          // which loads this file before patching the method.

          var nativeReplace = String.prototype.replace;
          var patchedExec = nativeExec;

          var UPDATES_LAST_INDEX_WRONG = function () {
            var re1 = /a/;
            var re2 = /b*/g;
            nativeExec.call(re1, 'a');
            nativeExec.call(re2, 'a');
            return re1.lastIndex !== 0 || re2.lastIndex !== 0;
          }();

          var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.
          // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing

          var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
          var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

          if (PATCH) {
            patchedExec = function exec(str) {
              var re = this;
              var lastIndex, reCopy, match, i;
              var sticky = UNSUPPORTED_Y && re.sticky;
              var flags = regexpFlags.call(re);
              var source = re.source;
              var charsAdded = 0;
              var strCopy = str;

              if (sticky) {
                flags = flags.replace('y', '');

                if (flags.indexOf('g') === -1) {
                  flags += 'g';
                }

                strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

                if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
                  source = '(?: ' + source + ')';
                  strCopy = ' ' + strCopy;
                  charsAdded++;
                } // ^(? + rx + ) is needed, in combination with some str slicing, to
                // simulate the 'y' flag.


                reCopy = new RegExp('^(?:' + source + ')', flags);
              }

              if (NPCG_INCLUDED) {
                reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
              }

              if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
              match = nativeExec.call(sticky ? reCopy : re, strCopy);

              if (sticky) {
                if (match) {
                  match.input = match.input.slice(charsAdded);
                  match[0] = match[0].slice(charsAdded);
                  match.index = re.lastIndex;
                  re.lastIndex += match[0].length;
                } else re.lastIndex = 0;
              } else if (UPDATES_LAST_INDEX_WRONG && match) {
                re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
              }

              if (NPCG_INCLUDED && match && match.length > 1) {
                // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                nativeReplace.call(match[0], reCopy, function () {
                  for (i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === undefined) match[i] = undefined;
                  }
                });
              }

              return match;
            };
          }

          module.exports = patchedExec;
          /***/
        },

        /***/
        7066:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_111284__) {
          "use strict";

          var anObject = __nested_webpack_require_111284__(9670); // `RegExp.prototype.flags` getter implementation
          // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


          module.exports = function () {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.dotAll) result += 's';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
          };
          /***/

        },

        /***/
        2999:
        /***/
        function (__unused_webpack_module, exports, __nested_webpack_require_112049__) {
          "use strict";

          var fails = __nested_webpack_require_112049__(7293); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
          // so we use an intermediate function.


          function RE(s, f) {
            return RegExp(s, f);
          }

          exports.UNSUPPORTED_Y = fails(function () {
            // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
            var re = RE('a', 'y');
            re.lastIndex = 2;
            return re.exec('abcd') != null;
          });
          exports.BROKEN_CARET = fails(function () {
            // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
            var re = RE('^r', 'gy');
            re.lastIndex = 2;
            return re.exec('str') != null;
          });
          /***/
        },

        /***/
        4488:
        /***/
        function (module) {
          // `RequireObjectCoercible` abstract operation
          // https://tc39.es/ecma262/#sec-requireobjectcoercible
          module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on " + it);
            return it;
          };
          /***/

        },

        /***/
        3505:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_113365__) {
          var global = __nested_webpack_require_113365__(7854);

          var createNonEnumerableProperty = __nested_webpack_require_113365__(8880);

          module.exports = function (key, value) {
            try {
              createNonEnumerableProperty(global, key, value);
            } catch (error) {
              global[key] = value;
            }

            return value;
          };
          /***/

        },

        /***/
        6340:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_113885__) {
          "use strict";

          var getBuiltIn = __nested_webpack_require_113885__(5005);

          var definePropertyModule = __nested_webpack_require_113885__(3070);

          var wellKnownSymbol = __nested_webpack_require_113885__(5112);

          var DESCRIPTORS = __nested_webpack_require_113885__(9781);

          var SPECIES = wellKnownSymbol('species');

          module.exports = function (CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
            var defineProperty = definePropertyModule.f;

            if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
              defineProperty(Constructor, SPECIES, {
                configurable: true,
                get: function () {
                  return this;
                }
              });
            }
          };
          /***/

        },

        /***/
        8003:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_114809__) {
          var defineProperty = __nested_webpack_require_114809__(3070).f;

          var has = __nested_webpack_require_114809__(6656);

          var wellKnownSymbol = __nested_webpack_require_114809__(5112);

          var TO_STRING_TAG = wellKnownSymbol('toStringTag');

          module.exports = function (it, TAG, STATIC) {
            if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
              defineProperty(it, TO_STRING_TAG, {
                configurable: true,
                value: TAG
              });
            }
          };
          /***/

        },

        /***/
        6200:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_115479__) {
          var shared = __nested_webpack_require_115479__(2309);

          var uid = __nested_webpack_require_115479__(9711);

          var keys = shared('keys');

          module.exports = function (key) {
            return keys[key] || (keys[key] = uid(key));
          };
          /***/

        },

        /***/
        5465:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_115875__) {
          var global = __nested_webpack_require_115875__(7854);

          var setGlobal = __nested_webpack_require_115875__(3505);

          var SHARED = '__core-js_shared__';
          var store = global[SHARED] || setGlobal(SHARED, {});
          module.exports = store;
          /***/
        },

        /***/
        2309:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_116267__) {
          var IS_PURE = __nested_webpack_require_116267__(1913);

          var store = __nested_webpack_require_116267__(5465);

          (module.exports = function (key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
          })('versions', []).push({
            version: '3.9.0',
            mode: IS_PURE ? 'pure' : 'global',
            copyright: '?? 2021 Denis Pushkarev (zloirock.ru)'
          });
          /***/
        },

        /***/
        6707:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_116837__) {
          var anObject = __nested_webpack_require_116837__(9670);

          var aFunction = __nested_webpack_require_116837__(3099);

          var wellKnownSymbol = __nested_webpack_require_116837__(5112);

          var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
          // https://tc39.es/ecma262/#sec-speciesconstructor

          module.exports = function (O, defaultConstructor) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
          };
          /***/

        },

        /***/
        8710:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_117561__) {
          var toInteger = __nested_webpack_require_117561__(9958);

          var requireObjectCoercible = __nested_webpack_require_117561__(4488); // `String.prototype.{ codePointAt, at }` methods implementation


          var createMethod = function (CONVERT_TO_STRING) {
            return function ($this, pos) {
              var S = String(requireObjectCoercible($this));
              var position = toInteger(pos);
              var size = S.length;
              var first, second;
              if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
              first = S.charCodeAt(position);
              return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
            };
          };

          module.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.es/ecma262/#sec-string.prototype.codepointat
            codeAt: createMethod(false),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: createMethod(true)
          };
          /***/
        },

        /***/
        3197:
        /***/
        function (module) {
          "use strict"; // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js

          var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

          var base = 36;
          var tMin = 1;
          var tMax = 26;
          var skew = 38;
          var damp = 700;
          var initialBias = 72;
          var initialN = 128; // 0x80

          var delimiter = '-'; // '\x2D'

          var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

          var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

          var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
          var baseMinusTMin = base - tMin;
          var floor = Math.floor;
          var stringFromCharCode = String.fromCharCode;
          /**
           * Creates an array containing the numeric code points of each Unicode
           * character in the string. While JavaScript uses UCS-2 internally,
           * this function will convert a pair of surrogate halves (each of which
           * UCS-2 exposes as separate characters) into a single code point,
           * matching UTF-16.
           */

          var ucs2decode = function (string) {
            var output = [];
            var counter = 0;
            var length = string.length;

            while (counter < length) {
              var value = string.charCodeAt(counter++);

              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // It's a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);

                if ((extra & 0xFC00) == 0xDC00) {
                  // Low surrogate.
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  // It's an unmatched surrogate; only append this code unit, in case the
                  // next code unit is the high surrogate of a surrogate pair.
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }

            return output;
          };
          /**
           * Converts a digit/integer into a basic code point.
           */


          var digitToBasic = function (digit) {
            //  0..25 map to ASCII a..z or A..Z
            // 26..35 map to ASCII 0..9
            return digit + 22 + 75 * (digit < 26);
          };
          /**
           * Bias adaptation function as per section 3.4 of RFC 3492.
           * https://tools.ietf.org/html/rfc3492#section-3.4
           */


          var adapt = function (delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);

            for (; delta > baseMinusTMin * tMax >> 1; k += base) {
              delta = floor(delta / baseMinusTMin);
            }

            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
          };
          /**
           * Converts a string of Unicode symbols (e.g. a domain name label) to a
           * Punycode string of ASCII-only symbols.
           */
          // eslint-disable-next-line max-statements -- TODO


          var encode = function (input) {
            var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

            input = ucs2decode(input); // Cache the length.

            var inputLength = input.length; // Initialize the state.

            var n = initialN;
            var delta = 0;
            var bias = initialBias;
            var i, currentValue; // Handle the basic code points.

            for (i = 0; i < input.length; i++) {
              currentValue = input[i];

              if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
              }
            }

            var basicLength = output.length; // number of basic code points.

            var handledCPCount = basicLength; // number of code points that have been handled;
            // Finish the basic string with a delimiter unless it's empty.

            if (basicLength) {
              output.push(delimiter);
            } // Main encoding loop:


            while (handledCPCount < inputLength) {
              // All non-basic code points < n have been handled already. Find the next larger one:
              var m = maxInt;

              for (i = 0; i < input.length; i++) {
                currentValue = input[i];

                if (currentValue >= n && currentValue < m) {
                  m = currentValue;
                }
              } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


              var handledCPCountPlusOne = handledCPCount + 1;

              if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                throw RangeError(OVERFLOW_ERROR);
              }

              delta += (m - n) * handledCPCountPlusOne;
              n = m;

              for (i = 0; i < input.length; i++) {
                currentValue = input[i];

                if (currentValue < n && ++delta > maxInt) {
                  throw RangeError(OVERFLOW_ERROR);
                }

                if (currentValue == n) {
                  // Represent delta as a generalized variable-length integer.
                  var q = delta;

                  for (var k = base;; k += base) {
                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) break;
                    var qMinusT = q - t;
                    var baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                    q = floor(qMinusT / baseMinusT);
                  }

                  output.push(stringFromCharCode(digitToBasic(q)));
                  bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                  delta = 0;
                  ++handledCPCount;
                }
              }

              ++delta;
              ++n;
            }

            return output.join('');
          };

          module.exports = function (input) {
            var encoded = [];
            var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
            var i, label;

            for (i = 0; i < labels.length; i++) {
              label = labels[i];
              encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
            }

            return encoded.join('.');
          };
          /***/

        },

        /***/
        6091:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_125791__) {
          var fails = __nested_webpack_require_125791__(7293);

          var whitespaces = __nested_webpack_require_125791__(1361);

          var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
          // of whitespaces and has a correct name

          module.exports = function (METHOD_NAME) {
            return fails(function () {
              return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
            });
          };
          /***/

        },

        /***/
        3111:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_126437__) {
          var requireObjectCoercible = __nested_webpack_require_126437__(4488);

          var whitespaces = __nested_webpack_require_126437__(1361);

          var whitespace = '[' + whitespaces + ']';
          var ltrim = RegExp('^' + whitespace + whitespace + '*');
          var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

          var createMethod = function (TYPE) {
            return function ($this) {
              var string = String(requireObjectCoercible($this));
              if (TYPE & 1) string = string.replace(ltrim, '');
              if (TYPE & 2) string = string.replace(rtrim, '');
              return string;
            };
          };

          module.exports = {
            // `String.prototype.{ trimLeft, trimStart }` methods
            // https://tc39.es/ecma262/#sec-string.prototype.trimstart
            start: createMethod(1),
            // `String.prototype.{ trimRight, trimEnd }` methods
            // https://tc39.es/ecma262/#sec-string.prototype.trimend
            end: createMethod(2),
            // `String.prototype.trim` method
            // https://tc39.es/ecma262/#sec-string.prototype.trim
            trim: createMethod(3)
          };
          /***/
        },

        /***/
        1400:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_127848__) {
          var toInteger = __nested_webpack_require_127848__(9958);

          var max = Math.max;
          var min = Math.min; // Helper for a popular repeating case of the spec:
          // Let integer be ? ToInteger(index).
          // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

          module.exports = function (index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
          };
          /***/

        },

        /***/
        7067:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_128514__) {
          var toInteger = __nested_webpack_require_128514__(9958);

          var toLength = __nested_webpack_require_128514__(7466); // `ToIndex` abstract operation
          // https://tc39.es/ecma262/#sec-toindex


          module.exports = function (it) {
            if (it === undefined) return 0;
            var number = toInteger(it);
            var length = toLength(number);
            if (number !== length) throw RangeError('Wrong length or index');
            return length;
          };
          /***/

        },

        /***/
        5656:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_129138__) {
          // toObject with fallback for non-array-like ES3 strings
          var IndexedObject = __nested_webpack_require_129138__(8361);

          var requireObjectCoercible = __nested_webpack_require_129138__(4488);

          module.exports = function (it) {
            return IndexedObject(requireObjectCoercible(it));
          };
          /***/

        },

        /***/
        9958:
        /***/
        function (module) {
          var ceil = Math.ceil;
          var floor = Math.floor; // `ToInteger` abstract operation
          // https://tc39.es/ecma262/#sec-tointeger

          module.exports = function (argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
          };
          /***/

        },

        /***/
        7466:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_130002__) {
          var toInteger = __nested_webpack_require_130002__(9958);

          var min = Math.min; // `ToLength` abstract operation
          // https://tc39.es/ecma262/#sec-tolength

          module.exports = function (argument) {
            return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
          };
          /***/

        },

        /***/
        7908:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_130496__) {
          var requireObjectCoercible = __nested_webpack_require_130496__(4488); // `ToObject` abstract operation
          // https://tc39.es/ecma262/#sec-toobject


          module.exports = function (argument) {
            return Object(requireObjectCoercible(argument));
          };
          /***/

        },

        /***/
        4590:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_130917__) {
          var toPositiveInteger = __nested_webpack_require_130917__(3002);

          module.exports = function (it, BYTES) {
            var offset = toPositiveInteger(it);
            if (offset % BYTES) throw RangeError('Wrong offset');
            return offset;
          };
          /***/

        },

        /***/
        3002:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_131329__) {
          var toInteger = __nested_webpack_require_131329__(9958);

          module.exports = function (it) {
            var result = toInteger(it);
            if (result < 0) throw RangeError("The argument can't be less than 0");
            return result;
          };
          /***/

        },

        /***/
        7593:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_131735__) {
          var isObject = __nested_webpack_require_131735__(111); // `ToPrimitive` abstract operation
          // https://tc39.es/ecma262/#sec-toprimitive
          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string


          module.exports = function (input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
            if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
            if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
            throw TypeError("Can't convert object to primitive value");
          };
          /***/

        },

        /***/
        1694:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_132765__) {
          var wellKnownSymbol = __nested_webpack_require_132765__(5112);

          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          var test = {};
          test[TO_STRING_TAG] = 'z';
          module.exports = String(test) === '[object z]';
          /***/
        },

        /***/
        9843:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_133152__) {
          "use strict";

          var $ = __nested_webpack_require_133152__(2109);

          var global = __nested_webpack_require_133152__(7854);

          var DESCRIPTORS = __nested_webpack_require_133152__(9781);

          var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __nested_webpack_require_133152__(3832);

          var ArrayBufferViewCore = __nested_webpack_require_133152__(260);

          var ArrayBufferModule = __nested_webpack_require_133152__(3331);

          var anInstance = __nested_webpack_require_133152__(5787);

          var createPropertyDescriptor = __nested_webpack_require_133152__(9114);

          var createNonEnumerableProperty = __nested_webpack_require_133152__(8880);

          var toLength = __nested_webpack_require_133152__(7466);

          var toIndex = __nested_webpack_require_133152__(7067);

          var toOffset = __nested_webpack_require_133152__(4590);

          var toPrimitive = __nested_webpack_require_133152__(7593);

          var has = __nested_webpack_require_133152__(6656);

          var classof = __nested_webpack_require_133152__(648);

          var isObject = __nested_webpack_require_133152__(111);

          var create = __nested_webpack_require_133152__(30);

          var setPrototypeOf = __nested_webpack_require_133152__(7674);

          var getOwnPropertyNames = __nested_webpack_require_133152__(8006).f;

          var typedArrayFrom = __nested_webpack_require_133152__(7321);

          var forEach = __nested_webpack_require_133152__(2092).forEach;

          var setSpecies = __nested_webpack_require_133152__(6340);

          var definePropertyModule = __nested_webpack_require_133152__(3070);

          var getOwnPropertyDescriptorModule = __nested_webpack_require_133152__(1236);

          var InternalStateModule = __nested_webpack_require_133152__(9909);

          var inheritIfRequired = __nested_webpack_require_133152__(9587);

          var getInternalState = InternalStateModule.get;
          var setInternalState = InternalStateModule.set;
          var nativeDefineProperty = definePropertyModule.f;
          var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          var round = Math.round;
          var RangeError = global.RangeError;
          var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
          var DataView = ArrayBufferModule.DataView;
          var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
          var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
          var TypedArray = ArrayBufferViewCore.TypedArray;
          var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
          var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
          var isTypedArray = ArrayBufferViewCore.isTypedArray;
          var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
          var WRONG_LENGTH = 'Wrong length';

          var fromList = function (C, list) {
            var index = 0;
            var length = list.length;
            var result = new (aTypedArrayConstructor(C))(length);

            while (length > index) result[index] = list[index++];

            return result;
          };

          var addGetter = function (it, key) {
            nativeDefineProperty(it, key, {
              get: function () {
                return getInternalState(this)[key];
              }
            });
          };

          var isArrayBuffer = function (it) {
            var klass;
            return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
          };

          var isTypedArrayIndex = function (target, key) {
            return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
          };

          var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
            return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
          };

          var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
            if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, 'value') && !has(descriptor, 'get') && !has(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
            && !descriptor.configurable && (!has(descriptor, 'writable') || descriptor.writable) && (!has(descriptor, 'enumerable') || descriptor.enumerable)) {
              target[key] = descriptor.value;
              return target;
            }

            return nativeDefineProperty(target, key, descriptor);
          };

          if (DESCRIPTORS) {
            if (!NATIVE_ARRAY_BUFFER_VIEWS) {
              getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
              definePropertyModule.f = wrappedDefineProperty;
              addGetter(TypedArrayPrototype, 'buffer');
              addGetter(TypedArrayPrototype, 'byteOffset');
              addGetter(TypedArrayPrototype, 'byteLength');
              addGetter(TypedArrayPrototype, 'length');
            }

            $({
              target: 'Object',
              stat: true,
              forced: !NATIVE_ARRAY_BUFFER_VIEWS
            }, {
              getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
              defineProperty: wrappedDefineProperty
            });

            module.exports = function (TYPE, wrapper, CLAMPED) {
              var BYTES = TYPE.match(/\d+$/)[0] / 8;
              var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
              var GETTER = 'get' + TYPE;
              var SETTER = 'set' + TYPE;
              var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
              var TypedArrayConstructor = NativeTypedArrayConstructor;
              var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
              var exported = {};

              var getter = function (that, index) {
                var data = getInternalState(that);
                return data.view[GETTER](index * BYTES + data.byteOffset, true);
              };

              var setter = function (that, index, value) {
                var data = getInternalState(that);
                if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
                data.view[SETTER](index * BYTES + data.byteOffset, value, true);
              };

              var addElement = function (that, index) {
                nativeDefineProperty(that, index, {
                  get: function () {
                    return getter(this, index);
                  },
                  set: function (value) {
                    return setter(this, index, value);
                  },
                  enumerable: true
                });
              };

              if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
                  anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                  var index = 0;
                  var byteOffset = 0;
                  var buffer, byteLength, length;

                  if (!isObject(data)) {
                    length = toIndex(data);
                    byteLength = length * BYTES;
                    buffer = new ArrayBuffer(byteLength);
                  } else if (isArrayBuffer(data)) {
                    buffer = data;
                    byteOffset = toOffset(offset, BYTES);
                    var $len = data.byteLength;

                    if ($length === undefined) {
                      if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                      byteLength = $len - byteOffset;
                      if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                    } else {
                      byteLength = toLength($length) * BYTES;
                      if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
                    }

                    length = byteLength / BYTES;
                  } else if (isTypedArray(data)) {
                    return fromList(TypedArrayConstructor, data);
                  } else {
                    return typedArrayFrom.call(TypedArrayConstructor, data);
                  }

                  setInternalState(that, {
                    buffer: buffer,
                    byteOffset: byteOffset,
                    byteLength: byteLength,
                    length: length,
                    view: new DataView(buffer)
                  });

                  while (index < length) addElement(that, index++);
                });
                if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
                TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
              } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
                TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
                  anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                  return inheritIfRequired(function () {
                    if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                    if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                    if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                    return typedArrayFrom.call(TypedArrayConstructor, data);
                  }(), dummy, TypedArrayConstructor);
                });
                if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
                forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
                  if (!(key in TypedArrayConstructor)) {
                    createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
                  }
                });
                TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
              }

              if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
                createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
              }

              if (TYPED_ARRAY_TAG) {
                createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
              }

              exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
              $({
                global: true,
                forced: TypedArrayConstructor != NativeTypedArrayConstructor,
                sham: !NATIVE_ARRAY_BUFFER_VIEWS
              }, exported);

              if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
                createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
              }

              if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
                createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
              }

              setSpecies(CONSTRUCTOR_NAME);
            };
          } else module.exports = function () {
            /* empty */
          };
          /***/

        },

        /***/
        3832:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_144563__) {
          /* eslint-disable no-new -- required for testing */
          var global = __nested_webpack_require_144563__(7854);

          var fails = __nested_webpack_require_144563__(7293);

          var checkCorrectnessOfIteration = __nested_webpack_require_144563__(7072);

          var NATIVE_ARRAY_BUFFER_VIEWS = __nested_webpack_require_144563__(260).NATIVE_ARRAY_BUFFER_VIEWS;

          var ArrayBuffer = global.ArrayBuffer;
          var Int8Array = global.Int8Array;
          module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
            Int8Array(1);
          }) || !fails(function () {
            new Int8Array(-1);
          }) || !checkCorrectnessOfIteration(function (iterable) {
            new Int8Array();
            new Int8Array(null);
            new Int8Array(1.5);
            new Int8Array(iterable);
          }, true) || fails(function () {
            // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
            return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
          });
          /***/
        },

        /***/
        3074:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_145734__) {
          var aTypedArrayConstructor = __nested_webpack_require_145734__(260).aTypedArrayConstructor;

          var speciesConstructor = __nested_webpack_require_145734__(6707);

          module.exports = function (instance, list) {
            var C = speciesConstructor(instance, instance.constructor);
            var index = 0;
            var length = list.length;
            var result = new (aTypedArrayConstructor(C))(length);

            while (length > index) result[index] = list[index++];

            return result;
          };
          /***/

        },

        /***/
        7321:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_146398__) {
          var toObject = __nested_webpack_require_146398__(7908);

          var toLength = __nested_webpack_require_146398__(7466);

          var getIteratorMethod = __nested_webpack_require_146398__(1246);

          var isArrayIteratorMethod = __nested_webpack_require_146398__(7659);

          var bind = __nested_webpack_require_146398__(9974);

          var aTypedArrayConstructor = __nested_webpack_require_146398__(260).aTypedArrayConstructor;

          module.exports = function from(source
          /* , mapfn, thisArg */
          ) {
            var O = toObject(source);
            var argumentsLength = arguments.length;
            var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iteratorMethod = getIteratorMethod(O);
            var i, length, result, step, iterator, next;

            if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
              iterator = iteratorMethod.call(O);
              next = iterator.next;
              O = [];

              while (!(step = next.call(iterator)).done) {
                O.push(step.value);
              }
            }

            if (mapping && argumentsLength > 2) {
              mapfn = bind(mapfn, arguments[2], 2);
            }

            length = toLength(O.length);
            result = new (aTypedArrayConstructor(this))(length);

            for (i = 0; length > i; i++) {
              result[i] = mapping ? mapfn(O[i], i) : O[i];
            }

            return result;
          };
          /***/

        },

        /***/
        9711:
        /***/
        function (module) {
          var id = 0;
          var postfix = Math.random();

          module.exports = function (key) {
            return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
          };
          /***/

        },

        /***/
        3307:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_148363__) {
          var NATIVE_SYMBOL = __nested_webpack_require_148363__(133);

          module.exports = NATIVE_SYMBOL
          /* global Symbol -- safe */
          && !Symbol.sham && typeof Symbol.iterator == 'symbol';
          /***/
        },

        /***/
        5112:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_148709__) {
          var global = __nested_webpack_require_148709__(7854);

          var shared = __nested_webpack_require_148709__(2309);

          var has = __nested_webpack_require_148709__(6656);

          var uid = __nested_webpack_require_148709__(9711);

          var NATIVE_SYMBOL = __nested_webpack_require_148709__(133);

          var USE_SYMBOL_AS_UID = __nested_webpack_require_148709__(3307);

          var WellKnownSymbolsStore = shared('wks');
          var Symbol = global.Symbol;
          var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

          module.exports = function (name) {
            if (!has(WellKnownSymbolsStore, name)) {
              if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
            }

            return WellKnownSymbolsStore[name];
          };
          /***/

        },

        /***/
        1361:
        /***/
        function (module) {
          // a string of all valid unicode whitespaces
          module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
          /***/
        },

        /***/
        8264:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_150073__) {
          "use strict";

          var $ = __nested_webpack_require_150073__(2109);

          var global = __nested_webpack_require_150073__(7854);

          var arrayBufferModule = __nested_webpack_require_150073__(3331);

          var setSpecies = __nested_webpack_require_150073__(6340);

          var ARRAY_BUFFER = 'ArrayBuffer';
          var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
          var NativeArrayBuffer = global[ARRAY_BUFFER]; // `ArrayBuffer` constructor
          // https://tc39.es/ecma262/#sec-arraybuffer-constructor

          $({
            global: true,
            forced: NativeArrayBuffer !== ArrayBuffer
          }, {
            ArrayBuffer: ArrayBuffer
          });
          setSpecies(ARRAY_BUFFER);
          /***/
        },

        /***/
        2222:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_150927__) {
          "use strict";

          var $ = __nested_webpack_require_150927__(2109);

          var fails = __nested_webpack_require_150927__(7293);

          var isArray = __nested_webpack_require_150927__(3157);

          var isObject = __nested_webpack_require_150927__(111);

          var toObject = __nested_webpack_require_150927__(7908);

          var toLength = __nested_webpack_require_150927__(7466);

          var createProperty = __nested_webpack_require_150927__(6135);

          var arraySpeciesCreate = __nested_webpack_require_150927__(5417);

          var arrayMethodHasSpeciesSupport = __nested_webpack_require_150927__(1194);

          var wellKnownSymbol = __nested_webpack_require_150927__(5112);

          var V8_VERSION = __nested_webpack_require_150927__(7392);

          var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
          var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
          var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/679

          var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
          });
          var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

          var isConcatSpreadable = function (O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
          };

          var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
          // https://tc39.es/ecma262/#sec-array.prototype.concat
          // with adding support of @@isConcatSpreadable and @@species

          $({
            target: 'Array',
            proto: true,
            forced: FORCED
          }, {
            // eslint-disable-next-line no-unused-vars -- required for `.length`
            concat: function concat(arg) {
              var O = toObject(this);
              var A = arraySpeciesCreate(O, 0);
              var n = 0;
              var i, k, length, len, E;

              for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];

                if (isConcatSpreadable(E)) {
                  len = toLength(E.length);
                  if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

                  for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
                } else {
                  if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                  createProperty(A, n++, E);
                }
              }

              A.length = n;
              return A;
            }
          });
          /***/
        },

        /***/
        7327:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_153969__) {
          "use strict";

          var $ = __nested_webpack_require_153969__(2109);

          var $filter = __nested_webpack_require_153969__(2092).filter;

          var arrayMethodHasSpeciesSupport = __nested_webpack_require_153969__(1194);

          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          // with adding support of @@species

          $({
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT
          }, {
            filter: function filter(callbackfn
            /* , thisArg */
            ) {
              return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
          });
          /***/
        },

        /***/
        2772:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_154897__) {
          "use strict";

          var $ = __nested_webpack_require_154897__(2109);

          var $indexOf = __nested_webpack_require_154897__(1318).indexOf;

          var arrayMethodIsStrict = __nested_webpack_require_154897__(9341);

          var nativeIndexOf = [].indexOf;
          var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
          var STRICT_METHOD = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof

          $({
            target: 'Array',
            proto: true,
            forced: NEGATIVE_ZERO || !STRICT_METHOD
          }, {
            indexOf: function indexOf(searchElement
            /* , fromIndex = 0 */
            ) {
              return NEGATIVE_ZERO // convert -0 to +0
              ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
            }
          });
          /***/
        },

        /***/
        6992:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_155982__) {
          "use strict";

          var toIndexedObject = __nested_webpack_require_155982__(5656);

          var addToUnscopables = __nested_webpack_require_155982__(1223);

          var Iterators = __nested_webpack_require_155982__(7497);

          var InternalStateModule = __nested_webpack_require_155982__(9909);

          var defineIterator = __nested_webpack_require_155982__(654);

          var ARRAY_ITERATOR = 'Array Iterator';
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
          // https://tc39.es/ecma262/#sec-array.prototype.entries
          // `Array.prototype.keys` method
          // https://tc39.es/ecma262/#sec-array.prototype.keys
          // `Array.prototype.values` method
          // https://tc39.es/ecma262/#sec-array.prototype.values
          // `Array.prototype[@@iterator]` method
          // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
          // `CreateArrayIterator` internal method
          // https://tc39.es/ecma262/#sec-createarrayiterator

          module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
            setInternalState(this, {
              type: ARRAY_ITERATOR,
              target: toIndexedObject(iterated),
              // target
              index: 0,
              // next index
              kind: kind // kind

            }); // `%ArrayIteratorPrototype%.next` method
            // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
          }, function () {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;

            if (!target || index >= target.length) {
              state.target = undefined;
              return {
                value: undefined,
                done: true
              };
            }

            if (kind == 'keys') return {
              value: index,
              done: false
            };
            if (kind == 'values') return {
              value: target[index],
              done: false
            };
            return {
              value: [index, target[index]],
              done: false
            };
          }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
          // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
          // https://tc39.es/ecma262/#sec-createmappedargumentsobject

          Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

          addToUnscopables('keys');
          addToUnscopables('values');
          addToUnscopables('entries');
          /***/
        },

        /***/
        1249:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_158833__) {
          "use strict";

          var $ = __nested_webpack_require_158833__(2109);

          var $map = __nested_webpack_require_158833__(2092).map;

          var arrayMethodHasSpeciesSupport = __nested_webpack_require_158833__(1194);

          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          // with adding support of @@species

          $({
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT
          }, {
            map: function map(callbackfn
            /* , thisArg */
            ) {
              return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
          });
          /***/
        },

        /***/
        7042:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_159737__) {
          "use strict";

          var $ = __nested_webpack_require_159737__(2109);

          var isObject = __nested_webpack_require_159737__(111);

          var isArray = __nested_webpack_require_159737__(3157);

          var toAbsoluteIndex = __nested_webpack_require_159737__(1400);

          var toLength = __nested_webpack_require_159737__(7466);

          var toIndexedObject = __nested_webpack_require_159737__(5656);

          var createProperty = __nested_webpack_require_159737__(6135);

          var wellKnownSymbol = __nested_webpack_require_159737__(5112);

          var arrayMethodHasSpeciesSupport = __nested_webpack_require_159737__(1194);

          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
          var SPECIES = wellKnownSymbol('species');
          var nativeSlice = [].slice;
          var max = Math.max; // `Array.prototype.slice` method
          // https://tc39.es/ecma262/#sec-array.prototype.slice
          // fallback for not array-like ES3 strings and DOM objects

          $({
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT
          }, {
            slice: function slice(start, end) {
              var O = toIndexedObject(this);
              var length = toLength(O.length);
              var k = toAbsoluteIndex(start, length);
              var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

              var Constructor, result, n;

              if (isArray(O)) {
                Constructor = O.constructor; // cross-realm fallback

                if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
                  Constructor = undefined;
                } else if (isObject(Constructor)) {
                  Constructor = Constructor[SPECIES];
                  if (Constructor === null) Constructor = undefined;
                }

                if (Constructor === Array || Constructor === undefined) {
                  return nativeSlice.call(O, k, fin);
                }
              }

              result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

              for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

              result.length = n;
              return result;
            }
          });
          /***/
        },

        /***/
        561:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_162224__) {
          "use strict";

          var $ = __nested_webpack_require_162224__(2109);

          var toAbsoluteIndex = __nested_webpack_require_162224__(1400);

          var toInteger = __nested_webpack_require_162224__(9958);

          var toLength = __nested_webpack_require_162224__(7466);

          var toObject = __nested_webpack_require_162224__(7908);

          var arraySpeciesCreate = __nested_webpack_require_162224__(5417);

          var createProperty = __nested_webpack_require_162224__(6135);

          var arrayMethodHasSpeciesSupport = __nested_webpack_require_162224__(1194);

          var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
          var max = Math.max;
          var min = Math.min;
          var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
          var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
          // https://tc39.es/ecma262/#sec-array.prototype.splice
          // with adding support of @@species

          $({
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT
          }, {
            splice: function splice(start, deleteCount
            /* , ...items */
            ) {
              var O = toObject(this);
              var len = toLength(O.length);
              var actualStart = toAbsoluteIndex(start, len);
              var argumentsLength = arguments.length;
              var insertCount, actualDeleteCount, A, k, from, to;

              if (argumentsLength === 0) {
                insertCount = actualDeleteCount = 0;
              } else if (argumentsLength === 1) {
                insertCount = 0;
                actualDeleteCount = len - actualStart;
              } else {
                insertCount = argumentsLength - 2;
                actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
              }

              if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
                throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
              }

              A = arraySpeciesCreate(O, actualDeleteCount);

              for (k = 0; k < actualDeleteCount; k++) {
                from = actualStart + k;
                if (from in O) createProperty(A, k, O[from]);
              }

              A.length = actualDeleteCount;

              if (insertCount < actualDeleteCount) {
                for (k = actualStart; k < len - actualDeleteCount; k++) {
                  from = k + actualDeleteCount;
                  to = k + insertCount;
                  if (from in O) O[to] = O[from];else delete O[to];
                }

                for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
              } else if (insertCount > actualDeleteCount) {
                for (k = len - actualDeleteCount; k > actualStart; k--) {
                  from = k + actualDeleteCount - 1;
                  to = k + insertCount - 1;
                  if (from in O) O[to] = O[from];else delete O[to];
                }
              }

              for (k = 0; k < insertCount; k++) {
                O[k + actualStart] = arguments[k + 2];
              }

              O.length = len - actualDeleteCount + insertCount;
              return A;
            }
          });
          /***/
        },

        /***/
        8309:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_165604__) {
          var DESCRIPTORS = __nested_webpack_require_165604__(9781);

          var defineProperty = __nested_webpack_require_165604__(3070).f;

          var FunctionPrototype = Function.prototype;
          var FunctionPrototypeToString = FunctionPrototype.toString;
          var nameRE = /^\s*function ([^ (]*)/;
          var NAME = 'name'; // Function instances `.name` property
          // https://tc39.es/ecma262/#sec-function-instances-name

          if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
            defineProperty(FunctionPrototype, NAME, {
              configurable: true,
              get: function () {
                try {
                  return FunctionPrototypeToString.call(this).match(nameRE)[1];
                } catch (error) {
                  return '';
                }
              }
            });
          }
          /***/

        },

        /***/
        489:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_166599__) {
          var $ = __nested_webpack_require_166599__(2109);

          var fails = __nested_webpack_require_166599__(7293);

          var toObject = __nested_webpack_require_166599__(7908);

          var nativeGetPrototypeOf = __nested_webpack_require_166599__(9518);

          var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_166599__(8544);

          var FAILS_ON_PRIMITIVES = fails(function () {
            nativeGetPrototypeOf(1);
          }); // `Object.getPrototypeOf` method
          // https://tc39.es/ecma262/#sec-object.getprototypeof

          $({
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES,
            sham: !CORRECT_PROTOTYPE_GETTER
          }, {
            getPrototypeOf: function getPrototypeOf(it) {
              return nativeGetPrototypeOf(toObject(it));
            }
          });
          /***/
        },

        /***/
        1539:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_167561__) {
          var TO_STRING_TAG_SUPPORT = __nested_webpack_require_167561__(1694);

          var redefine = __nested_webpack_require_167561__(1320);

          var toString = __nested_webpack_require_167561__(288); // `Object.prototype.toString` method
          // https://tc39.es/ecma262/#sec-object.prototype.tostring


          if (!TO_STRING_TAG_SUPPORT) {
            redefine(Object.prototype, 'toString', toString, {
              unsafe: true
            });
          }
          /***/

        },

        /***/
        4916:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_168160__) {
          "use strict";

          var $ = __nested_webpack_require_168160__(2109);

          var exec = __nested_webpack_require_168160__(2261); // `RegExp.prototype.exec` method
          // https://tc39.es/ecma262/#sec-regexp.prototype.exec


          $({
            target: 'RegExp',
            proto: true,
            forced: /./.exec !== exec
          }, {
            exec: exec
          });
          /***/
        },

        /***/
        9714:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_168700__) {
          "use strict";

          var redefine = __nested_webpack_require_168700__(1320);

          var anObject = __nested_webpack_require_168700__(9670);

          var fails = __nested_webpack_require_168700__(7293);

          var flags = __nested_webpack_require_168700__(7066);

          var TO_STRING = 'toString';
          var RegExpPrototype = RegExp.prototype;
          var nativeToString = RegExpPrototype[TO_STRING];
          var NOT_GENERIC = fails(function () {
            return nativeToString.call({
              source: 'a',
              flags: 'b'
            }) != '/a/b';
          }); // FF44- RegExp#toString has a wrong name

          var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
          // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

          if (NOT_GENERIC || INCORRECT_NAME) {
            redefine(RegExp.prototype, TO_STRING, function toString() {
              var R = anObject(this);
              var p = String(R.source);
              var rf = R.flags;
              var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
              return '/' + p + '/' + f;
            }, {
              unsafe: true
            });
          }
          /***/

        },

        /***/
        8783:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_170103__) {
          "use strict";

          var charAt = __nested_webpack_require_170103__(8710).charAt;

          var InternalStateModule = __nested_webpack_require_170103__(9909);

          var defineIterator = __nested_webpack_require_170103__(654);

          var STRING_ITERATOR = 'String Iterator';
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
          // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

          defineIterator(String, 'String', function (iterated) {
            setInternalState(this, {
              type: STRING_ITERATOR,
              string: String(iterated),
              index: 0
            }); // `%StringIteratorPrototype%.next` method
            // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
          }, function next() {
            var state = getInternalState(this);
            var string = state.string;
            var index = state.index;
            var point;
            if (index >= string.length) return {
              value: undefined,
              done: true
            };
            point = charAt(string, index);
            state.index += point.length;
            return {
              value: point,
              done: false
            };
          });
          /***/
        },

        /***/
        4723:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_171595__) {
          "use strict";

          var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_171595__(7007);

          var anObject = __nested_webpack_require_171595__(9670);

          var toLength = __nested_webpack_require_171595__(7466);

          var requireObjectCoercible = __nested_webpack_require_171595__(4488);

          var advanceStringIndex = __nested_webpack_require_171595__(1530);

          var regExpExec = __nested_webpack_require_171595__(7651); // @@match logic


          fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
            return [// `String.prototype.match` method
            // https://tc39.es/ecma262/#sec-string.prototype.match
            function match(regexp) {
              var O = requireObjectCoercible(this);
              var matcher = regexp == undefined ? undefined : regexp[MATCH];
              return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
            }, // `RegExp.prototype[@@match]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
            function (regexp) {
              var res = maybeCallNative(nativeMatch, regexp, this);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              if (!rx.global) return regExpExec(rx, S);
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
              var A = [];
              var n = 0;
              var result;

              while ((result = regExpExec(rx, S)) !== null) {
                var matchStr = String(result[0]);
                A[n] = matchStr;
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
              }

              return n === 0 ? null : A;
            }];
          });
          /***/
        },

        /***/
        5306:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_173584__) {
          "use strict";

          var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_173584__(7007);

          var anObject = __nested_webpack_require_173584__(9670);

          var toLength = __nested_webpack_require_173584__(7466);

          var toInteger = __nested_webpack_require_173584__(9958);

          var requireObjectCoercible = __nested_webpack_require_173584__(4488);

          var advanceStringIndex = __nested_webpack_require_173584__(1530);

          var getSubstitution = __nested_webpack_require_173584__(647);

          var regExpExec = __nested_webpack_require_173584__(7651);

          var max = Math.max;
          var min = Math.min;

          var maybeToString = function (it) {
            return it === undefined ? it : String(it);
          }; // @@replace logic


          fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
            var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
            var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
            var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
            return [// `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function replace(searchValue, replaceValue) {
              var O = requireObjectCoercible(this);
              var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
              return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
            }, // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function (regexp, replaceValue) {
              if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done) return res.value;
              }

              var rx = anObject(regexp);
              var S = String(this);
              var functionalReplace = typeof replaceValue === 'function';
              if (!functionalReplace) replaceValue = String(replaceValue);
              var global = rx.global;

              if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }

              var results = [];

              while (true) {
                var result = regExpExec(rx, S);
                if (result === null) break;
                results.push(result);
                if (!global) break;
                var matchStr = String(result[0]);
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              }

              var accumulatedResult = '';
              var nextSourcePosition = 0;

              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = []; // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

                for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

                var namedCaptures = result.groups;

                if (functionalReplace) {
                  var replacerArgs = [matched].concat(captures, position, S);
                  if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                  var replacement = String(replaceValue.apply(undefined, replacerArgs));
                } else {
                  replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                }

                if (position >= nextSourcePosition) {
                  accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }

              return accumulatedResult + S.slice(nextSourcePosition);
            }];
          });
          /***/
        },

        /***/
        3123:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_178268__) {
          "use strict";

          var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_178268__(7007);

          var isRegExp = __nested_webpack_require_178268__(7850);

          var anObject = __nested_webpack_require_178268__(9670);

          var requireObjectCoercible = __nested_webpack_require_178268__(4488);

          var speciesConstructor = __nested_webpack_require_178268__(6707);

          var advanceStringIndex = __nested_webpack_require_178268__(1530);

          var toLength = __nested_webpack_require_178268__(7466);

          var callRegExpExec = __nested_webpack_require_178268__(7651);

          var regexpExec = __nested_webpack_require_178268__(2261);

          var fails = __nested_webpack_require_178268__(7293);

          var arrayPush = [].push;
          var min = Math.min;
          var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

          var SUPPORTS_Y = !fails(function () {
            return !RegExp(MAX_UINT32, 'y');
          }); // @@split logic

          fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
            var internalSplit;

            if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
            'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
            '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
              // based on es5-shim implementation, need to rework it
              internalSplit = function (separator, limit) {
                var string = String(requireObjectCoercible(this));
                var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

                if (!isRegExp(separator)) {
                  return nativeSplit.call(string, separator, lim);
                }

                var output = [];
                var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
                var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

                var separatorCopy = new RegExp(separator.source, flags + 'g');
                var match, lastIndex, lastLength;

                while (match = regexpExec.call(separatorCopy, string)) {
                  lastIndex = separatorCopy.lastIndex;

                  if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= lim) break;
                  }

                  if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
                }

                if (lastLastIndex === string.length) {
                  if (lastLength || !separatorCopy.test('')) output.push('');
                } else output.push(string.slice(lastLastIndex));

                return output.length > lim ? output.slice(0, lim) : output;
              }; // Chakra, V8

            } else if ('0'.split(undefined, 0).length) {
              internalSplit = function (separator, limit) {
                return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
              };
            } else internalSplit = nativeSplit;

            return [// `String.prototype.split` method
            // https://tc39.es/ecma262/#sec-string.prototype.split
            function split(separator, limit) {
              var O = requireObjectCoercible(this);
              var splitter = separator == undefined ? undefined : separator[SPLIT];
              return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
            }, // `RegExp.prototype[@@split]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
            //
            // NOTE: This cannot be properly polyfilled in engines that don't support
            // the 'y' flag.
            function (regexp, limit) {
              var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
              if (res.done) return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              var C = speciesConstructor(rx, RegExp);
              var unicodeMatching = rx.unicode;
              var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
              // simulate the 'y' flag.

              var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
              var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
              if (lim === 0) return [];
              if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
              var p = 0;
              var q = 0;
              var A = [];

              while (q < S.length) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;

                if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                  q = advanceStringIndex(S, q, unicodeMatching);
                } else {
                  A.push(S.slice(p, q));
                  if (A.length === lim) return A;

                  for (var i = 1; i <= z.length - 1; i++) {
                    A.push(z[i]);
                    if (A.length === lim) return A;
                  }

                  q = p = e;
                }
              }

              A.push(S.slice(p));
              return A;
            }];
          }, !SUPPORTS_Y);
          /***/
        },

        /***/
        3210:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_184679__) {
          "use strict";

          var $ = __nested_webpack_require_184679__(2109);

          var $trim = __nested_webpack_require_184679__(3111).trim;

          var forcedStringTrimMethod = __nested_webpack_require_184679__(6091); // `String.prototype.trim` method
          // https://tc39.es/ecma262/#sec-string.prototype.trim


          $({
            target: 'String',
            proto: true,
            forced: forcedStringTrimMethod('trim')
          }, {
            trim: function trim() {
              return $trim(this);
            }
          });
          /***/
        },

        /***/
        2990:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_185366__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_185366__(260);

          var $copyWithin = __nested_webpack_require_185366__(1048);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

          exportTypedArrayMethod('copyWithin', function copyWithin(target, start
          /* , end */
          ) {
            return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
          });
          /***/
        },

        /***/
        8927:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_186190__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_186190__(260);

          var $every = __nested_webpack_require_186190__(2092).every;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

          exportTypedArrayMethod('every', function every(callbackfn
          /* , thisArg */
          ) {
            return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        3105:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_186983__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_186983__(260);

          var $fill = __nested_webpack_require_186983__(1285);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
          // eslint-disable-next-line no-unused-vars -- required for `.length`

          exportTypedArrayMethod('fill', function fill(value
          /* , start, end */
          ) {
            return $fill.apply(aTypedArray(this), arguments);
          });
          /***/
        },

        /***/
        5035:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_187797__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_187797__(260);

          var $filter = __nested_webpack_require_187797__(2092).filter;

          var fromSpeciesAndList = __nested_webpack_require_187797__(3074);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

          exportTypedArrayMethod('filter', function filter(callbackfn
          /* , thisArg */
          ) {
            var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            return fromSpeciesAndList(this, list);
          });
          /***/
        },

        /***/
        7174:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_188715__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_188715__(260);

          var $findIndex = __nested_webpack_require_188715__(2092).findIndex;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

          exportTypedArrayMethod('findIndex', function findIndex(predicate
          /* , thisArg */
          ) {
            return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        4345:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_189534__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_189534__(260);

          var $find = __nested_webpack_require_189534__(2092).find;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

          exportTypedArrayMethod('find', function find(predicate
          /* , thisArg */
          ) {
            return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        2846:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_190318__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_190318__(260);

          var $forEach = __nested_webpack_require_190318__(2092).forEach;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

          exportTypedArrayMethod('forEach', function forEach(callbackfn
          /* , thisArg */
          ) {
            $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        4731:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_191118__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_191118__(260);

          var $includes = __nested_webpack_require_191118__(1318).includes;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

          exportTypedArrayMethod('includes', function includes(searchElement
          /* , fromIndex */
          ) {
            return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        7209:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_191940__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_191940__(260);

          var $indexOf = __nested_webpack_require_191940__(1318).indexOf;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

          exportTypedArrayMethod('indexOf', function indexOf(searchElement
          /* , fromIndex */
          ) {
            return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        6319:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_192755__) {
          "use strict";

          var global = __nested_webpack_require_192755__(7854);

          var ArrayBufferViewCore = __nested_webpack_require_192755__(260);

          var ArrayIterators = __nested_webpack_require_192755__(6992);

          var wellKnownSymbol = __nested_webpack_require_192755__(5112);

          var ITERATOR = wellKnownSymbol('iterator');
          var Uint8Array = global.Uint8Array;
          var arrayValues = ArrayIterators.values;
          var arrayKeys = ArrayIterators.keys;
          var arrayEntries = ArrayIterators.entries;
          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];
          var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

          var typedArrayValues = function values() {
            return arrayValues.call(aTypedArray(this));
          }; // `%TypedArray%.prototype.entries` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


          exportTypedArrayMethod('entries', function entries() {
            return arrayEntries.call(aTypedArray(this));
          }); // `%TypedArray%.prototype.keys` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

          exportTypedArrayMethod('keys', function keys() {
            return arrayKeys.call(aTypedArray(this));
          }); // `%TypedArray%.prototype.values` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

          exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

          exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);
          /***/
        },

        /***/
        8867:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_194830__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_194830__(260);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var $join = [].join; // `%TypedArray%.prototype.join` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
          // eslint-disable-next-line no-unused-vars -- required for `.length`

          exportTypedArrayMethod('join', function join(separator) {
            return $join.apply(aTypedArray(this), arguments);
          });
          /***/
        },

        /***/
        7789:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_195589__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_195589__(260);

          var $lastIndexOf = __nested_webpack_require_195589__(6583);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
          // eslint-disable-next-line no-unused-vars -- required for `.length`

          exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement
          /* , fromIndex */
          ) {
            return $lastIndexOf.apply(aTypedArray(this), arguments);
          });
          /***/
        },

        /***/
        3739:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_196452__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_196452__(260);

          var $map = __nested_webpack_require_196452__(2092).map;

          var speciesConstructor = __nested_webpack_require_196452__(6707);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

          exportTypedArrayMethod('map', function map(mapfn
          /* , thisArg */
          ) {
            return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
              return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
            });
          });
          /***/
        },

        /***/
        4483:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_197502__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_197502__(260);

          var $reduceRight = __nested_webpack_require_197502__(3671).right;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

          exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn
          /* , initialValue */
          ) {
            return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        9368:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_198354__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_198354__(260);

          var $reduce = __nested_webpack_require_198354__(3671).left;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

          exportTypedArrayMethod('reduce', function reduce(callbackfn
          /* , initialValue */
          ) {
            return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        2056:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_199175__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_199175__(260);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var floor = Math.floor; // `%TypedArray%.prototype.reverse` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

          exportTypedArrayMethod('reverse', function reverse() {
            var that = this;
            var length = aTypedArray(that).length;
            var middle = floor(length / 2);
            var index = 0;
            var value;

            while (index < middle) {
              value = that[index];
              that[index++] = that[--length];
              that[length] = value;
            }

            return that;
          });
          /***/
        },

        /***/
        3462:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_200168__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_200168__(260);

          var toLength = __nested_webpack_require_200168__(7466);

          var toOffset = __nested_webpack_require_200168__(4590);

          var toObject = __nested_webpack_require_200168__(7908);

          var fails = __nested_webpack_require_200168__(7293);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var FORCED = fails(function () {
            /* global Int8Array -- safe */
            new Int8Array(1).set({});
          }); // `%TypedArray%.prototype.set` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

          exportTypedArrayMethod('set', function set(arrayLike
          /* , offset */
          ) {
            aTypedArray(this);
            var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
            var length = this.length;
            var src = toObject(arrayLike);
            var len = toLength(src.length);
            var index = 0;
            if (len + offset > length) throw RangeError('Wrong length');

            while (index < len) this[offset + index] = src[index++];
          }, FORCED);
          /***/
        },

        /***/
        678:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_201554__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_201554__(260);

          var speciesConstructor = __nested_webpack_require_201554__(6707);

          var fails = __nested_webpack_require_201554__(7293);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var $slice = [].slice;
          var FORCED = fails(function () {
            /* global Int8Array -- safe */
            new Int8Array(1).slice();
          }); // `%TypedArray%.prototype.slice` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

          exportTypedArrayMethod('slice', function slice(start, end) {
            var list = $slice.call(aTypedArray(this), start, end);
            var C = speciesConstructor(this, this.constructor);
            var index = 0;
            var length = list.length;
            var result = new (aTypedArrayConstructor(C))(length);

            while (length > index) result[index] = list[index++];

            return result;
          }, FORCED);
          /***/
        },

        /***/
        7462:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_202878__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_202878__(260);

          var $some = __nested_webpack_require_202878__(2092).some;

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

          exportTypedArrayMethod('some', function some(callbackfn
          /* , thisArg */
          ) {
            return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          });
          /***/
        },

        /***/
        3824:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_203664__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_203664__(260);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var $sort = [].sort; // `%TypedArray%.prototype.sort` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort

          exportTypedArrayMethod('sort', function sort(comparefn) {
            return $sort.call(aTypedArray(this), comparefn);
          });
          /***/
        },

        /***/
        5021:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_204343__) {
          "use strict";

          var ArrayBufferViewCore = __nested_webpack_require_204343__(260);

          var toLength = __nested_webpack_require_204343__(7466);

          var toAbsoluteIndex = __nested_webpack_require_204343__(1400);

          var speciesConstructor = __nested_webpack_require_204343__(6707);

          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray

          exportTypedArrayMethod('subarray', function subarray(begin, end) {
            var O = aTypedArray(this);
            var length = O.length;
            var beginIndex = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
          });
          /***/
        },

        /***/
        2974:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_205464__) {
          "use strict";

          var global = __nested_webpack_require_205464__(7854);

          var ArrayBufferViewCore = __nested_webpack_require_205464__(260);

          var fails = __nested_webpack_require_205464__(7293);

          var Int8Array = global.Int8Array;
          var aTypedArray = ArrayBufferViewCore.aTypedArray;
          var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
          var $toLocaleString = [].toLocaleString;
          var $slice = [].slice; // iOS Safari 6.x fails here

          var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
            $toLocaleString.call(new Int8Array(1));
          });
          var FORCED = fails(function () {
            return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
          }) || !fails(function () {
            Int8Array.prototype.toLocaleString.call([1, 2]);
          }); // `%TypedArray%.prototype.toLocaleString` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

          exportTypedArrayMethod('toLocaleString', function toLocaleString() {
            return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
          }, FORCED);
          /***/
        },

        /***/
        5016:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_206856__) {
          "use strict";

          var exportTypedArrayMethod = __nested_webpack_require_206856__(260).exportTypedArrayMethod;

          var fails = __nested_webpack_require_206856__(7293);

          var global = __nested_webpack_require_206856__(7854);

          var Uint8Array = global.Uint8Array;
          var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
          var arrayToString = [].toString;
          var arrayJoin = [].join;

          if (fails(function () {
            arrayToString.call({});
          })) {
            arrayToString = function toString() {
              return arrayJoin.call(this);
            };
          }

          var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
          // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

          exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);
          /***/
        },

        /***/
        2472:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_207927__) {
          var createTypedArrayConstructor = __nested_webpack_require_207927__(9843); // `Uint8Array` constructor
          // https://tc39.es/ecma262/#sec-typedarray-objects


          createTypedArrayConstructor('Uint8', function (init) {
            return function Uint8Array(data, byteOffset, length) {
              return init(this, data, byteOffset, length);
            };
          });
          /***/
        },

        /***/
        4747:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_208471__) {
          var global = __nested_webpack_require_208471__(7854);

          var DOMIterables = __nested_webpack_require_208471__(8324);

          var forEach = __nested_webpack_require_208471__(8533);

          var createNonEnumerableProperty = __nested_webpack_require_208471__(8880);

          for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

            if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
              createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
          }
          /***/

        },

        /***/
        3948:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_209398__) {
          var global = __nested_webpack_require_209398__(7854);

          var DOMIterables = __nested_webpack_require_209398__(8324);

          var ArrayIteratorMethods = __nested_webpack_require_209398__(6992);

          var createNonEnumerableProperty = __nested_webpack_require_209398__(8880);

          var wellKnownSymbol = __nested_webpack_require_209398__(5112);

          var ITERATOR = wellKnownSymbol('iterator');
          var TO_STRING_TAG = wellKnownSymbol('toStringTag');
          var ArrayValues = ArrayIteratorMethods.values;

          for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype;

            if (CollectionPrototype) {
              // some Chrome versions have non-configurable methods on DOMTokenList
              if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }

              if (!CollectionPrototype[TO_STRING_TAG]) {
                createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
              }

              if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
                // some Chrome versions have non-configurable methods on DOMTokenList
                if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                  createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                } catch (error) {
                  CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                }
              }
            }
          }
          /***/

        },

        /***/
        1637:
        /***/
        function (module, __unused_webpack_exports, __nested_webpack_require_211350__) {
          "use strict"; // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

          __nested_webpack_require_211350__(6992);

          var $ = __nested_webpack_require_211350__(2109);

          var getBuiltIn = __nested_webpack_require_211350__(5005);

          var USE_NATIVE_URL = __nested_webpack_require_211350__(590);

          var redefine = __nested_webpack_require_211350__(1320);

          var redefineAll = __nested_webpack_require_211350__(2248);

          var setToStringTag = __nested_webpack_require_211350__(8003);

          var createIteratorConstructor = __nested_webpack_require_211350__(4994);

          var InternalStateModule = __nested_webpack_require_211350__(9909);

          var anInstance = __nested_webpack_require_211350__(5787);

          var hasOwn = __nested_webpack_require_211350__(6656);

          var bind = __nested_webpack_require_211350__(9974);

          var classof = __nested_webpack_require_211350__(648);

          var anObject = __nested_webpack_require_211350__(9670);

          var isObject = __nested_webpack_require_211350__(111);

          var create = __nested_webpack_require_211350__(30);

          var createPropertyDescriptor = __nested_webpack_require_211350__(9114);

          var getIterator = __nested_webpack_require_211350__(8554);

          var getIteratorMethod = __nested_webpack_require_211350__(1246);

          var wellKnownSymbol = __nested_webpack_require_211350__(5112);

          var $fetch = getBuiltIn('fetch');
          var Headers = getBuiltIn('Headers');
          var ITERATOR = wellKnownSymbol('iterator');
          var URL_SEARCH_PARAMS = 'URLSearchParams';
          var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
          var setInternalState = InternalStateModule.set;
          var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
          var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
          var plus = /\+/g;
          var sequences = Array(4);

          var percentSequence = function (bytes) {
            return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
          };

          var percentDecode = function (sequence) {
            try {
              return decodeURIComponent(sequence);
            } catch (error) {
              return sequence;
            }
          };

          var deserialize = function (it) {
            var result = it.replace(plus, ' ');
            var bytes = 4;

            try {
              return decodeURIComponent(result);
            } catch (error) {
              while (bytes) {
                result = result.replace(percentSequence(bytes--), percentDecode);
              }

              return result;
            }
          };

          var find = /[!'()~]|%20/g;
          var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+'
          };

          var replacer = function (match) {
            return replace[match];
          };

          var serialize = function (it) {
            return encodeURIComponent(it).replace(find, replacer);
          };

          var parseSearchParams = function (result, query) {
            if (query) {
              var attributes = query.split('&');
              var index = 0;
              var attribute, entry;

              while (index < attributes.length) {
                attribute = attributes[index++];

                if (attribute.length) {
                  entry = attribute.split('=');
                  result.push({
                    key: deserialize(entry.shift()),
                    value: deserialize(entry.join('='))
                  });
                }
              }
            }
          };

          var updateSearchParams = function (query) {
            this.entries.length = 0;
            parseSearchParams(this.entries, query);
          };

          var validateArgumentsLength = function (passed, required) {
            if (passed < required) throw TypeError('Not enough arguments');
          };

          var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
            setInternalState(this, {
              type: URL_SEARCH_PARAMS_ITERATOR,
              iterator: getIterator(getInternalParamsState(params).entries),
              kind: kind
            });
          }, 'Iterator', function next() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var step = state.iterator.next();
            var entry = step.value;

            if (!step.done) {
              step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
            }

            return step;
          }); // `URLSearchParams` constructor
          // https://url.spec.whatwg.org/#interface-urlsearchparams

          var URLSearchParamsConstructor = function
            /* init */
          URLSearchParams() {
            anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
            var init = arguments.length > 0 ? arguments[0] : undefined;
            var that = this;
            var entries = [];
            var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
            setInternalState(that, {
              type: URL_SEARCH_PARAMS,
              entries: entries,
              updateURL: function () {
                /* empty */
              },
              updateSearchParams: updateSearchParams
            });

            if (init !== undefined) {
              if (isObject(init)) {
                iteratorMethod = getIteratorMethod(init);

                if (typeof iteratorMethod === 'function') {
                  iterator = iteratorMethod.call(init);
                  next = iterator.next;

                  while (!(step = next.call(iterator)).done) {
                    entryIterator = getIterator(anObject(step.value));
                    entryNext = entryIterator.next;
                    if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
                    entries.push({
                      key: first.value + '',
                      value: second.value + ''
                    });
                  }
                } else for (key in init) if (hasOwn(init, key)) entries.push({
                  key: key,
                  value: init[key] + ''
                });
              } else {
                parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
              }
            }
          };

          var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
          redefineAll(URLSearchParamsPrototype, {
            // `URLSearchParams.prototype.append` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-append
            append: function append(name, value) {
              validateArgumentsLength(arguments.length, 2);
              var state = getInternalParamsState(this);
              state.entries.push({
                key: name + '',
                value: value + ''
              });
              state.updateURL();
            },
            // `URLSearchParams.prototype.delete` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
            'delete': function (name) {
              validateArgumentsLength(arguments.length, 1);
              var state = getInternalParamsState(this);
              var entries = state.entries;
              var key = name + '';
              var index = 0;

              while (index < entries.length) {
                if (entries[index].key === key) entries.splice(index, 1);else index++;
              }

              state.updateURL();
            },
            // `URLSearchParams.prototype.get` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-get
            get: function get(name) {
              validateArgumentsLength(arguments.length, 1);
              var entries = getInternalParamsState(this).entries;
              var key = name + '';
              var index = 0;

              for (; index < entries.length; index++) {
                if (entries[index].key === key) return entries[index].value;
              }

              return null;
            },
            // `URLSearchParams.prototype.getAll` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
            getAll: function getAll(name) {
              validateArgumentsLength(arguments.length, 1);
              var entries = getInternalParamsState(this).entries;
              var key = name + '';
              var result = [];
              var index = 0;

              for (; index < entries.length; index++) {
                if (entries[index].key === key) result.push(entries[index].value);
              }

              return result;
            },
            // `URLSearchParams.prototype.has` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-has
            has: function has(name) {
              validateArgumentsLength(arguments.length, 1);
              var entries = getInternalParamsState(this).entries;
              var key = name + '';
              var index = 0;

              while (index < entries.length) {
                if (entries[index++].key === key) return true;
              }

              return false;
            },
            // `URLSearchParams.prototype.set` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-set
            set: function set(name, value) {
              validateArgumentsLength(arguments.length, 1);
              var state = getInternalParamsState(this);
              var entries = state.entries;
              var found = false;
              var key = name + '';
              var val = value + '';
              var index = 0;
              var entry;

              for (; index < entries.length; index++) {
                entry = entries[index];

                if (entry.key === key) {
                  if (found) entries.splice(index--, 1);else {
                    found = true;
                    entry.value = val;
                  }
                }
              }

              if (!found) entries.push({
                key: key,
                value: val
              });
              state.updateURL();
            },
            // `URLSearchParams.prototype.sort` method
            // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
            sort: function sort() {
              var state = getInternalParamsState(this);
              var entries = state.entries; // Array#sort is not stable in some engines

              var slice = entries.slice();
              var entry, entriesIndex, sliceIndex;
              entries.length = 0;

              for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
                entry = slice[sliceIndex];

                for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
                  if (entries[entriesIndex].key > entry.key) {
                    entries.splice(entriesIndex, 0, entry);
                    break;
                  }
                }

                if (entriesIndex === sliceIndex) entries.push(entry);
              }

              state.updateURL();
            },
            // `URLSearchParams.prototype.forEach` method
            forEach: function forEach(callback
            /* , thisArg */
            ) {
              var entries = getInternalParamsState(this).entries;
              var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
              var index = 0;
              var entry;

              while (index < entries.length) {
                entry = entries[index++];
                boundFunction(entry.value, entry.key, this);
              }
            },
            // `URLSearchParams.prototype.keys` method
            keys: function keys() {
              return new URLSearchParamsIterator(this, 'keys');
            },
            // `URLSearchParams.prototype.values` method
            values: function values() {
              return new URLSearchParamsIterator(this, 'values');
            },
            // `URLSearchParams.prototype.entries` method
            entries: function entries() {
              return new URLSearchParamsIterator(this, 'entries');
            }
          }, {
            enumerable: true
          }); // `URLSearchParams.prototype[@@iterator]` method

          redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries); // `URLSearchParams.prototype.toString` method
          // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

          redefine(URLSearchParamsPrototype, 'toString', function toString() {
            var entries = getInternalParamsState(this).entries;
            var result = [];
            var index = 0;
            var entry;

            while (index < entries.length) {
              entry = entries[index++];
              result.push(serialize(entry.key) + '=' + serialize(entry.value));
            }

            return result.join('&');
          }, {
            enumerable: true
          });
          setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
          $({
            global: true,
            forced: !USE_NATIVE_URL
          }, {
            URLSearchParams: URLSearchParamsConstructor
          }); // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
          // https://github.com/zloirock/core-js/issues/674

          if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
            $({
              global: true,
              enumerable: true,
              forced: true
            }, {
              fetch: function fetch(input
              /* , init */
              ) {
                var args = [input];
                var init, body, headers;

                if (arguments.length > 1) {
                  init = arguments[1];

                  if (isObject(init)) {
                    body = init.body;

                    if (classof(body) === URL_SEARCH_PARAMS) {
                      headers = init.headers ? new Headers(init.headers) : new Headers();

                      if (!headers.has('content-type')) {
                        headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                      }

                      init = create(init, {
                        body: createPropertyDescriptor(0, String(body)),
                        headers: createPropertyDescriptor(0, headers)
                      });
                    }
                  }

                  args.push(init);
                }

                return $fetch.apply(this, args);
              }
            });
          }

          module.exports = {
            URLSearchParams: URLSearchParamsConstructor,
            getState: getInternalParamsState
          };
          /***/
        },

        /***/
        285:
        /***/
        function (__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_226712__) {
          "use strict"; // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

          __nested_webpack_require_226712__(8783);

          var $ = __nested_webpack_require_226712__(2109);

          var DESCRIPTORS = __nested_webpack_require_226712__(9781);

          var USE_NATIVE_URL = __nested_webpack_require_226712__(590);

          var global = __nested_webpack_require_226712__(7854);

          var defineProperties = __nested_webpack_require_226712__(6048);

          var redefine = __nested_webpack_require_226712__(1320);

          var anInstance = __nested_webpack_require_226712__(5787);

          var has = __nested_webpack_require_226712__(6656);

          var assign = __nested_webpack_require_226712__(1574);

          var arrayFrom = __nested_webpack_require_226712__(8457);

          var codeAt = __nested_webpack_require_226712__(8710).codeAt;

          var toASCII = __nested_webpack_require_226712__(3197);

          var setToStringTag = __nested_webpack_require_226712__(8003);

          var URLSearchParamsModule = __nested_webpack_require_226712__(1637);

          var InternalStateModule = __nested_webpack_require_226712__(9909);

          var NativeURL = global.URL;
          var URLSearchParams = URLSearchParamsModule.URLSearchParams;
          var getInternalSearchParamsState = URLSearchParamsModule.getState;
          var setInternalState = InternalStateModule.set;
          var getInternalURLState = InternalStateModule.getterFor('URL');
          var floor = Math.floor;
          var pow = Math.pow;
          var INVALID_AUTHORITY = 'Invalid authority';
          var INVALID_SCHEME = 'Invalid scheme';
          var INVALID_HOST = 'Invalid host';
          var INVALID_PORT = 'Invalid port';
          var ALPHA = /[A-Za-z]/;
          var ALPHANUMERIC = /[\d+-.A-Za-z]/;
          var DIGIT = /\d/;
          var HEX_START = /^(0x|0X)/;
          var OCT = /^[0-7]+$/;
          var DEC = /^\d+$/;
          var HEX = /^[\dA-Fa-f]+$/;
          /* eslint-disable no-control-regex -- safe */

          var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
          var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
          var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
          var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
          /* eslint-enable no-control-regex -- safe */

          var EOF;

          var parseHost = function (url, input) {
            var result, codePoints, index;

            if (input.charAt(0) == '[') {
              if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
              result = parseIPv6(input.slice(1, -1));
              if (!result) return INVALID_HOST;
              url.host = result; // opaque host
            } else if (!isSpecial(url)) {
              if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
              result = '';
              codePoints = arrayFrom(input);

              for (index = 0; index < codePoints.length; index++) {
                result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
              }

              url.host = result;
            } else {
              input = toASCII(input);
              if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
              result = parseIPv4(input);
              if (result === null) return INVALID_HOST;
              url.host = result;
            }
          };

          var parseIPv4 = function (input) {
            var parts = input.split('.');
            var partsLength, numbers, index, part, radix, number, ipv4;

            if (parts.length && parts[parts.length - 1] == '') {
              parts.pop();
            }

            partsLength = parts.length;
            if (partsLength > 4) return input;
            numbers = [];

            for (index = 0; index < partsLength; index++) {
              part = parts[index];
              if (part == '') return input;
              radix = 10;

              if (part.length > 1 && part.charAt(0) == '0') {
                radix = HEX_START.test(part) ? 16 : 8;
                part = part.slice(radix == 8 ? 1 : 2);
              }

              if (part === '') {
                number = 0;
              } else {
                if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
                number = parseInt(part, radix);
              }

              numbers.push(number);
            }

            for (index = 0; index < partsLength; index++) {
              number = numbers[index];

              if (index == partsLength - 1) {
                if (number >= pow(256, 5 - partsLength)) return null;
              } else if (number > 255) return null;
            }

            ipv4 = numbers.pop();

            for (index = 0; index < numbers.length; index++) {
              ipv4 += numbers[index] * pow(256, 3 - index);
            }

            return ipv4;
          }; // eslint-disable-next-line max-statements -- TODO


          var parseIPv6 = function (input) {
            var address = [0, 0, 0, 0, 0, 0, 0, 0];
            var pieceIndex = 0;
            var compress = null;
            var pointer = 0;
            var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

            var char = function () {
              return input.charAt(pointer);
            };

            if (char() == ':') {
              if (input.charAt(1) != ':') return;
              pointer += 2;
              pieceIndex++;
              compress = pieceIndex;
            }

            while (char()) {
              if (pieceIndex == 8) return;

              if (char() == ':') {
                if (compress !== null) return;
                pointer++;
                pieceIndex++;
                compress = pieceIndex;
                continue;
              }

              value = length = 0;

              while (length < 4 && HEX.test(char())) {
                value = value * 16 + parseInt(char(), 16);
                pointer++;
                length++;
              }

              if (char() == '.') {
                if (length == 0) return;
                pointer -= length;
                if (pieceIndex > 6) return;
                numbersSeen = 0;

                while (char()) {
                  ipv4Piece = null;

                  if (numbersSeen > 0) {
                    if (char() == '.' && numbersSeen < 4) pointer++;else return;
                  }

                  if (!DIGIT.test(char())) return;

                  while (DIGIT.test(char())) {
                    number = parseInt(char(), 10);
                    if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
                    if (ipv4Piece > 255) return;
                    pointer++;
                  }

                  address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                  numbersSeen++;
                  if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
                }

                if (numbersSeen != 4) return;
                break;
              } else if (char() == ':') {
                pointer++;
                if (!char()) return;
              } else if (char()) return;

              address[pieceIndex++] = value;
            }

            if (compress !== null) {
              swaps = pieceIndex - compress;
              pieceIndex = 7;

              while (pieceIndex != 0 && swaps > 0) {
                swap = address[pieceIndex];
                address[pieceIndex--] = address[compress + swaps - 1];
                address[compress + --swaps] = swap;
              }
            } else if (pieceIndex != 8) return;

            return address;
          };

          var findLongestZeroSequence = function (ipv6) {
            var maxIndex = null;
            var maxLength = 1;
            var currStart = null;
            var currLength = 0;
            var index = 0;

            for (; index < 8; index++) {
              if (ipv6[index] !== 0) {
                if (currLength > maxLength) {
                  maxIndex = currStart;
                  maxLength = currLength;
                }

                currStart = null;
                currLength = 0;
              } else {
                if (currStart === null) currStart = index;
                ++currLength;
              }
            }

            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }

            return maxIndex;
          };

          var serializeHost = function (host) {
            var result, index, compress, ignore0; // ipv4

            if (typeof host == 'number') {
              result = [];

              for (index = 0; index < 4; index++) {
                result.unshift(host % 256);
                host = floor(host / 256);
              }

              return result.join('.'); // ipv6
            } else if (typeof host == 'object') {
              result = '';
              compress = findLongestZeroSequence(host);

              for (index = 0; index < 8; index++) {
                if (ignore0 && host[index] === 0) continue;
                if (ignore0) ignore0 = false;

                if (compress === index) {
                  result += index ? ':' : '::';
                  ignore0 = true;
                } else {
                  result += host[index].toString(16);
                  if (index < 7) result += ':';
                }
              }

              return '[' + result + ']';
            }

            return host;
          };

          var C0ControlPercentEncodeSet = {};
          var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
            ' ': 1,
            '"': 1,
            '<': 1,
            '>': 1,
            '`': 1
          });
          var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
            '#': 1,
            '?': 1,
            '{': 1,
            '}': 1
          });
          var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
            '/': 1,
            ':': 1,
            ';': 1,
            '=': 1,
            '@': 1,
            '[': 1,
            '\\': 1,
            ']': 1,
            '^': 1,
            '|': 1
          });

          var percentEncode = function (char, set) {
            var code = codeAt(char, 0);
            return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
          };

          var specialSchemes = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
          };

          var isSpecial = function (url) {
            return has(specialSchemes, url.scheme);
          };

          var includesCredentials = function (url) {
            return url.username != '' || url.password != '';
          };

          var cannotHaveUsernamePasswordPort = function (url) {
            return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
          };

          var isWindowsDriveLetter = function (string, normalized) {
            var second;
            return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
          };

          var startsWithWindowsDriveLetter = function (string) {
            var third;
            return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
          };

          var shortenURLsPath = function (url) {
            var path = url.path;
            var pathSize = path.length;

            if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
              path.pop();
            }
          };

          var isSingleDot = function (segment) {
            return segment === '.' || segment.toLowerCase() === '%2e';
          };

          var isDoubleDot = function (segment) {
            segment = segment.toLowerCase();
            return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
          }; // States:


          var SCHEME_START = {};
          var SCHEME = {};
          var NO_SCHEME = {};
          var SPECIAL_RELATIVE_OR_AUTHORITY = {};
          var PATH_OR_AUTHORITY = {};
          var RELATIVE = {};
          var RELATIVE_SLASH = {};
          var SPECIAL_AUTHORITY_SLASHES = {};
          var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
          var AUTHORITY = {};
          var HOST = {};
          var HOSTNAME = {};
          var PORT = {};
          var FILE = {};
          var FILE_SLASH = {};
          var FILE_HOST = {};
          var PATH_START = {};
          var PATH = {};
          var CANNOT_BE_A_BASE_URL_PATH = {};
          var QUERY = {};
          var FRAGMENT = {}; // eslint-disable-next-line max-statements -- TODO

          var parseURL = function (url, input, stateOverride, base) {
            var state = stateOverride || SCHEME_START;
            var pointer = 0;
            var buffer = '';
            var seenAt = false;
            var seenBracket = false;
            var seenPasswordToken = false;
            var codePoints, char, bufferCodePoints, failure;

            if (!stateOverride) {
              url.scheme = '';
              url.username = '';
              url.password = '';
              url.host = null;
              url.port = null;
              url.path = [];
              url.query = null;
              url.fragment = null;
              url.cannotBeABaseURL = false;
              input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
            }

            input = input.replace(TAB_AND_NEW_LINE, '');
            codePoints = arrayFrom(input);

            while (pointer <= codePoints.length) {
              char = codePoints[pointer];

              switch (state) {
                case SCHEME_START:
                  if (char && ALPHA.test(char)) {
                    buffer += char.toLowerCase();
                    state = SCHEME;
                  } else if (!stateOverride) {
                    state = NO_SCHEME;
                    continue;
                  } else return INVALID_SCHEME;

                  break;

                case SCHEME:
                  if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
                    buffer += char.toLowerCase();
                  } else if (char == ':') {
                    if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
                    url.scheme = buffer;

                    if (stateOverride) {
                      if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                      return;
                    }

                    buffer = '';

                    if (url.scheme == 'file') {
                      state = FILE;
                    } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                      state = SPECIAL_RELATIVE_OR_AUTHORITY;
                    } else if (isSpecial(url)) {
                      state = SPECIAL_AUTHORITY_SLASHES;
                    } else if (codePoints[pointer + 1] == '/') {
                      state = PATH_OR_AUTHORITY;
                      pointer++;
                    } else {
                      url.cannotBeABaseURL = true;
                      url.path.push('');
                      state = CANNOT_BE_A_BASE_URL_PATH;
                    }
                  } else if (!stateOverride) {
                    buffer = '';
                    state = NO_SCHEME;
                    pointer = 0;
                    continue;
                  } else return INVALID_SCHEME;

                  break;

                case NO_SCHEME:
                  if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;

                  if (base.cannotBeABaseURL && char == '#') {
                    url.scheme = base.scheme;
                    url.path = base.path.slice();
                    url.query = base.query;
                    url.fragment = '';
                    url.cannotBeABaseURL = true;
                    state = FRAGMENT;
                    break;
                  }

                  state = base.scheme == 'file' ? FILE : RELATIVE;
                  continue;

                case SPECIAL_RELATIVE_OR_AUTHORITY:
                  if (char == '/' && codePoints[pointer + 1] == '/') {
                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    pointer++;
                  } else {
                    state = RELATIVE;
                    continue;
                  }

                  break;

                case PATH_OR_AUTHORITY:
                  if (char == '/') {
                    state = AUTHORITY;
                    break;
                  } else {
                    state = PATH;
                    continue;
                  }

                case RELATIVE:
                  url.scheme = base.scheme;

                  if (char == EOF) {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = base.query;
                  } else if (char == '/' || char == '\\' && isSpecial(url)) {
                    state = RELATIVE_SLASH;
                  } else if (char == '?') {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = '';
                    state = QUERY;
                  } else if (char == '#') {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.query = base.query;
                    url.fragment = '';
                    state = FRAGMENT;
                  } else {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    url.path = base.path.slice();
                    url.path.pop();
                    state = PATH;
                    continue;
                  }

                  break;

                case RELATIVE_SLASH:
                  if (isSpecial(url) && (char == '/' || char == '\\')) {
                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                  } else if (char == '/') {
                    state = AUTHORITY;
                  } else {
                    url.username = base.username;
                    url.password = base.password;
                    url.host = base.host;
                    url.port = base.port;
                    state = PATH;
                    continue;
                  }

                  break;

                case SPECIAL_AUTHORITY_SLASHES:
                  state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                  if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
                  pointer++;
                  break;

                case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                  if (char != '/' && char != '\\') {
                    state = AUTHORITY;
                    continue;
                  }

                  break;

                case AUTHORITY:
                  if (char == '@') {
                    if (seenAt) buffer = '%40' + buffer;
                    seenAt = true;
                    bufferCodePoints = arrayFrom(buffer);

                    for (var i = 0; i < bufferCodePoints.length; i++) {
                      var codePoint = bufferCodePoints[i];

                      if (codePoint == ':' && !seenPasswordToken) {
                        seenPasswordToken = true;
                        continue;
                      }

                      var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                      if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
                    }

                    buffer = '';
                  } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                    if (seenAt && buffer == '') return INVALID_AUTHORITY;
                    pointer -= arrayFrom(buffer).length + 1;
                    buffer = '';
                    state = HOST;
                  } else buffer += char;

                  break;

                case HOST:
                case HOSTNAME:
                  if (stateOverride && url.scheme == 'file') {
                    state = FILE_HOST;
                    continue;
                  } else if (char == ':' && !seenBracket) {
                    if (buffer == '') return INVALID_HOST;
                    failure = parseHost(url, buffer);
                    if (failure) return failure;
                    buffer = '';
                    state = PORT;
                    if (stateOverride == HOSTNAME) return;
                  } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
                    if (isSpecial(url) && buffer == '') return INVALID_HOST;
                    if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                    failure = parseHost(url, buffer);
                    if (failure) return failure;
                    buffer = '';
                    state = PATH_START;
                    if (stateOverride) return;
                    continue;
                  } else {
                    if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
                    buffer += char;
                  }

                  break;

                case PORT:
                  if (DIGIT.test(char)) {
                    buffer += char;
                  } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
                    if (buffer != '') {
                      var port = parseInt(buffer, 10);
                      if (port > 0xFFFF) return INVALID_PORT;
                      url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                      buffer = '';
                    }

                    if (stateOverride) return;
                    state = PATH_START;
                    continue;
                  } else return INVALID_PORT;

                  break;

                case FILE:
                  url.scheme = 'file';
                  if (char == '/' || char == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
                    if (char == EOF) {
                      url.host = base.host;
                      url.path = base.path.slice();
                      url.query = base.query;
                    } else if (char == '?') {
                      url.host = base.host;
                      url.path = base.path.slice();
                      url.query = '';
                      state = QUERY;
                    } else if (char == '#') {
                      url.host = base.host;
                      url.path = base.path.slice();
                      url.query = base.query;
                      url.fragment = '';
                      state = FRAGMENT;
                    } else {
                      if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                        url.host = base.host;
                        url.path = base.path.slice();
                        shortenURLsPath(url);
                      }

                      state = PATH;
                      continue;
                    }
                  } else {
                    state = PATH;
                    continue;
                  }
                  break;

                case FILE_SLASH:
                  if (char == '/' || char == '\\') {
                    state = FILE_HOST;
                    break;
                  }

                  if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                    if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
                  }

                  state = PATH;
                  continue;

                case FILE_HOST:
                  if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
                    if (!stateOverride && isWindowsDriveLetter(buffer)) {
                      state = PATH;
                    } else if (buffer == '') {
                      url.host = '';
                      if (stateOverride) return;
                      state = PATH_START;
                    } else {
                      failure = parseHost(url, buffer);
                      if (failure) return failure;
                      if (url.host == 'localhost') url.host = '';
                      if (stateOverride) return;
                      buffer = '';
                      state = PATH_START;
                    }

                    continue;
                  } else buffer += char;

                  break;

                case PATH_START:
                  if (isSpecial(url)) {
                    state = PATH;
                    if (char != '/' && char != '\\') continue;
                  } else if (!stateOverride && char == '?') {
                    url.query = '';
                    state = QUERY;
                  } else if (!stateOverride && char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                  } else if (char != EOF) {
                    state = PATH;
                    if (char != '/') continue;
                  }

                  break;

                case PATH:
                  if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
                    if (isDoubleDot(buffer)) {
                      shortenURLsPath(url);

                      if (char != '/' && !(char == '\\' && isSpecial(url))) {
                        url.path.push('');
                      }
                    } else if (isSingleDot(buffer)) {
                      if (char != '/' && !(char == '\\' && isSpecial(url))) {
                        url.path.push('');
                      }
                    } else {
                      if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                        if (url.host) url.host = '';
                        buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
                      }

                      url.path.push(buffer);
                    }

                    buffer = '';

                    if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
                      while (url.path.length > 1 && url.path[0] === '') {
                        url.path.shift();
                      }
                    }

                    if (char == '?') {
                      url.query = '';
                      state = QUERY;
                    } else if (char == '#') {
                      url.fragment = '';
                      state = FRAGMENT;
                    }
                  } else {
                    buffer += percentEncode(char, pathPercentEncodeSet);
                  }

                  break;

                case CANNOT_BE_A_BASE_URL_PATH:
                  if (char == '?') {
                    url.query = '';
                    state = QUERY;
                  } else if (char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                  } else if (char != EOF) {
                    url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                  }

                  break;

                case QUERY:
                  if (!stateOverride && char == '#') {
                    url.fragment = '';
                    state = FRAGMENT;
                  } else if (char != EOF) {
                    if (char == "'" && isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += percentEncode(char, C0ControlPercentEncodeSet);
                  }

                  break;

                case FRAGMENT:
                  if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                  break;
              }

              pointer++;
            }
          }; // `URL` constructor
          // https://url.spec.whatwg.org/#url-class


          var URLConstructor = function URL(url
          /* , base */
          ) {
            var that = anInstance(this, URLConstructor, 'URL');
            var base = arguments.length > 1 ? arguments[1] : undefined;
            var urlString = String(url);
            var state = setInternalState(that, {
              type: 'URL'
            });
            var baseState, failure;

            if (base !== undefined) {
              if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
                failure = parseURL(baseState = {}, String(base));
                if (failure) throw TypeError(failure);
              }
            }

            failure = parseURL(state, urlString, null, baseState);
            if (failure) throw TypeError(failure);
            var searchParams = state.searchParams = new URLSearchParams();
            var searchParamsState = getInternalSearchParamsState(searchParams);
            searchParamsState.updateSearchParams(state.query);

            searchParamsState.updateURL = function () {
              state.query = String(searchParams) || null;
            };

            if (!DESCRIPTORS) {
              that.href = serializeURL.call(that);
              that.origin = getOrigin.call(that);
              that.protocol = getProtocol.call(that);
              that.username = getUsername.call(that);
              that.password = getPassword.call(that);
              that.host = getHost.call(that);
              that.hostname = getHostname.call(that);
              that.port = getPort.call(that);
              that.pathname = getPathname.call(that);
              that.search = getSearch.call(that);
              that.searchParams = getSearchParams.call(that);
              that.hash = getHash.call(that);
            }
          };

          var URLPrototype = URLConstructor.prototype;

          var serializeURL = function () {
            var url = getInternalURLState(this);
            var scheme = url.scheme;
            var username = url.username;
            var password = url.password;
            var host = url.host;
            var port = url.port;
            var path = url.path;
            var query = url.query;
            var fragment = url.fragment;
            var output = scheme + ':';

            if (host !== null) {
              output += '//';

              if (includesCredentials(url)) {
                output += username + (password ? ':' + password : '') + '@';
              }

              output += serializeHost(host);
              if (port !== null) output += ':' + port;
            } else if (scheme == 'file') output += '//';

            output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
            if (query !== null) output += '?' + query;
            if (fragment !== null) output += '#' + fragment;
            return output;
          };

          var getOrigin = function () {
            var url = getInternalURLState(this);
            var scheme = url.scheme;
            var port = url.port;
            if (scheme == 'blob') try {
              return new URL(scheme.path[0]).origin;
            } catch (error) {
              return 'null';
            }
            if (scheme == 'file' || !isSpecial(url)) return 'null';
            return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
          };

          var getProtocol = function () {
            return getInternalURLState(this).scheme + ':';
          };

          var getUsername = function () {
            return getInternalURLState(this).username;
          };

          var getPassword = function () {
            return getInternalURLState(this).password;
          };

          var getHost = function () {
            var url = getInternalURLState(this);
            var host = url.host;
            var port = url.port;
            return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
          };

          var getHostname = function () {
            var host = getInternalURLState(this).host;
            return host === null ? '' : serializeHost(host);
          };

          var getPort = function () {
            var port = getInternalURLState(this).port;
            return port === null ? '' : String(port);
          };

          var getPathname = function () {
            var url = getInternalURLState(this);
            var path = url.path;
            return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
          };

          var getSearch = function () {
            var query = getInternalURLState(this).query;
            return query ? '?' + query : '';
          };

          var getSearchParams = function () {
            return getInternalURLState(this).searchParams;
          };

          var getHash = function () {
            var fragment = getInternalURLState(this).fragment;
            return fragment ? '#' + fragment : '';
          };

          var accessorDescriptor = function (getter, setter) {
            return {
              get: getter,
              set: setter,
              configurable: true,
              enumerable: true
            };
          };

          if (DESCRIPTORS) {
            defineProperties(URLPrototype, {
              // `URL.prototype.href` accessors pair
              // https://url.spec.whatwg.org/#dom-url-href
              href: accessorDescriptor(serializeURL, function (href) {
                var url = getInternalURLState(this);
                var urlString = String(href);
                var failure = parseURL(url, urlString);
                if (failure) throw TypeError(failure);
                getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
              }),
              // `URL.prototype.origin` getter
              // https://url.spec.whatwg.org/#dom-url-origin
              origin: accessorDescriptor(getOrigin),
              // `URL.prototype.protocol` accessors pair
              // https://url.spec.whatwg.org/#dom-url-protocol
              protocol: accessorDescriptor(getProtocol, function (protocol) {
                var url = getInternalURLState(this);
                parseURL(url, String(protocol) + ':', SCHEME_START);
              }),
              // `URL.prototype.username` accessors pair
              // https://url.spec.whatwg.org/#dom-url-username
              username: accessorDescriptor(getUsername, function (username) {
                var url = getInternalURLState(this);
                var codePoints = arrayFrom(String(username));
                if (cannotHaveUsernamePasswordPort(url)) return;
                url.username = '';

                for (var i = 0; i < codePoints.length; i++) {
                  url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                }
              }),
              // `URL.prototype.password` accessors pair
              // https://url.spec.whatwg.org/#dom-url-password
              password: accessorDescriptor(getPassword, function (password) {
                var url = getInternalURLState(this);
                var codePoints = arrayFrom(String(password));
                if (cannotHaveUsernamePasswordPort(url)) return;
                url.password = '';

                for (var i = 0; i < codePoints.length; i++) {
                  url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                }
              }),
              // `URL.prototype.host` accessors pair
              // https://url.spec.whatwg.org/#dom-url-host
              host: accessorDescriptor(getHost, function (host) {
                var url = getInternalURLState(this);
                if (url.cannotBeABaseURL) return;
                parseURL(url, String(host), HOST);
              }),
              // `URL.prototype.hostname` accessors pair
              // https://url.spec.whatwg.org/#dom-url-hostname
              hostname: accessorDescriptor(getHostname, function (hostname) {
                var url = getInternalURLState(this);
                if (url.cannotBeABaseURL) return;
                parseURL(url, String(hostname), HOSTNAME);
              }),
              // `URL.prototype.port` accessors pair
              // https://url.spec.whatwg.org/#dom-url-port
              port: accessorDescriptor(getPort, function (port) {
                var url = getInternalURLState(this);
                if (cannotHaveUsernamePasswordPort(url)) return;
                port = String(port);
                if (port == '') url.port = null;else parseURL(url, port, PORT);
              }),
              // `URL.prototype.pathname` accessors pair
              // https://url.spec.whatwg.org/#dom-url-pathname
              pathname: accessorDescriptor(getPathname, function (pathname) {
                var url = getInternalURLState(this);
                if (url.cannotBeABaseURL) return;
                url.path = [];
                parseURL(url, pathname + '', PATH_START);
              }),
              // `URL.prototype.search` accessors pair
              // https://url.spec.whatwg.org/#dom-url-search
              search: accessorDescriptor(getSearch, function (search) {
                var url = getInternalURLState(this);
                search = String(search);

                if (search == '') {
                  url.query = null;
                } else {
                  if ('?' == search.charAt(0)) search = search.slice(1);
                  url.query = '';
                  parseURL(url, search, QUERY);
                }

                getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
              }),
              // `URL.prototype.searchParams` getter
              // https://url.spec.whatwg.org/#dom-url-searchparams
              searchParams: accessorDescriptor(getSearchParams),
              // `URL.prototype.hash` accessors pair
              // https://url.spec.whatwg.org/#dom-url-hash
              hash: accessorDescriptor(getHash, function (hash) {
                var url = getInternalURLState(this);
                hash = String(hash);

                if (hash == '') {
                  url.fragment = null;
                  return;
                }

                if ('#' == hash.charAt(0)) hash = hash.slice(1);
                url.fragment = '';
                parseURL(url, hash, FRAGMENT);
              })
            });
          } // `URL.prototype.toJSON` method
          // https://url.spec.whatwg.org/#dom-url-tojson


          redefine(URLPrototype, 'toJSON', function toJSON() {
            return serializeURL.call(this);
          }, {
            enumerable: true
          }); // `URL.prototype.toString` method
          // https://url.spec.whatwg.org/#URL-stringification-behavior

          redefine(URLPrototype, 'toString', function toString() {
            return serializeURL.call(this);
          }, {
            enumerable: true
          });

          if (NativeURL) {
            var nativeCreateObjectURL = NativeURL.createObjectURL;
            var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
            // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
            // eslint-disable-next-line no-unused-vars -- required for `.length`

            if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
              return nativeCreateObjectURL.apply(NativeURL, arguments);
            }); // `URL.revokeObjectURL` method
            // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
            // eslint-disable-next-line no-unused-vars -- required for `.length`

            if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
              return nativeRevokeObjectURL.apply(NativeURL, arguments);
            });
          }

          setToStringTag(URLConstructor, 'URL');
          $({
            global: true,
            forced: !USE_NATIVE_URL,
            sham: !DESCRIPTORS
          }, {
            URL: URLConstructor
          });
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_268766__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (__webpack_module_cache__[moduleId]) {
          /******/
          return __webpack_module_cache__[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_268766__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      !function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_268766__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_268766__.o(definition, key) && !__nested_webpack_require_268766__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/global */

      /******/

      !function () {
        /******/
        __nested_webpack_require_268766__.g = function () {
          /******/
          if (typeof globalThis === 'object') return globalThis;
          /******/

          try {
            /******/
            return this || new Function('return this')();
            /******/
          } catch (e) {
            /******/
            if (typeof window === 'object') return window;
            /******/
          }
          /******/

        }();
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      !function () {
        /******/
        __nested_webpack_require_268766__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/

      !function () {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_268766__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict"; // ESM COMPAT FLAG

        __nested_webpack_require_268766__.r(__webpack_exports__); // EXPORTS


        __nested_webpack_require_268766__.d(__webpack_exports__, {
          "Dropzone": function () {
            return (
              /* reexport */
              Dropzone
            );
          },
          "default": function () {
            return (
              /* binding */
              dropzone_dist
            );
          }
        }); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js


        var es_array_concat = __nested_webpack_require_268766__(2222); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js


        var es_array_filter = __nested_webpack_require_268766__(7327); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js


        var es_array_index_of = __nested_webpack_require_268766__(2772); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js


        var es_array_iterator = __nested_webpack_require_268766__(6992); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js


        var es_array_map = __nested_webpack_require_268766__(1249); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js


        var es_array_slice = __nested_webpack_require_268766__(7042); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js


        var es_array_splice = __nested_webpack_require_268766__(561); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.constructor.js


        var es_array_buffer_constructor = __nested_webpack_require_268766__(8264); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js


        var es_function_name = __nested_webpack_require_268766__(8309); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js


        var es_object_get_prototype_of = __nested_webpack_require_268766__(489); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js


        var es_object_to_string = __nested_webpack_require_268766__(1539); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js


        var es_regexp_exec = __nested_webpack_require_268766__(4916); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js


        var es_regexp_to_string = __nested_webpack_require_268766__(9714); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js


        var es_string_iterator = __nested_webpack_require_268766__(8783); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js


        var es_string_match = __nested_webpack_require_268766__(4723); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js


        var es_string_replace = __nested_webpack_require_268766__(5306); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js


        var es_string_split = __nested_webpack_require_268766__(3123); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js


        var es_string_trim = __nested_webpack_require_268766__(3210); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js


        var es_typed_array_uint8_array = __nested_webpack_require_268766__(2472); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js


        var es_typed_array_copy_within = __nested_webpack_require_268766__(2990); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js


        var es_typed_array_every = __nested_webpack_require_268766__(8927); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js


        var es_typed_array_fill = __nested_webpack_require_268766__(3105); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js


        var es_typed_array_filter = __nested_webpack_require_268766__(5035); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js


        var es_typed_array_find = __nested_webpack_require_268766__(4345); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js


        var es_typed_array_find_index = __nested_webpack_require_268766__(7174); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js


        var es_typed_array_for_each = __nested_webpack_require_268766__(2846); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js


        var es_typed_array_includes = __nested_webpack_require_268766__(4731); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js


        var es_typed_array_index_of = __nested_webpack_require_268766__(7209); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js


        var es_typed_array_iterator = __nested_webpack_require_268766__(6319); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js


        var es_typed_array_join = __nested_webpack_require_268766__(8867); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js


        var es_typed_array_last_index_of = __nested_webpack_require_268766__(7789); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js


        var es_typed_array_map = __nested_webpack_require_268766__(3739); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js


        var es_typed_array_reduce = __nested_webpack_require_268766__(9368); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js


        var es_typed_array_reduce_right = __nested_webpack_require_268766__(4483); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js


        var es_typed_array_reverse = __nested_webpack_require_268766__(2056); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js


        var es_typed_array_set = __nested_webpack_require_268766__(3462); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js


        var es_typed_array_slice = __nested_webpack_require_268766__(678); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js


        var es_typed_array_some = __nested_webpack_require_268766__(7462); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js


        var es_typed_array_sort = __nested_webpack_require_268766__(3824); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js


        var es_typed_array_subarray = __nested_webpack_require_268766__(5021); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js


        var es_typed_array_to_locale_string = __nested_webpack_require_268766__(2974); // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js


        var es_typed_array_to_string = __nested_webpack_require_268766__(5016); // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js


        var web_dom_collections_for_each = __nested_webpack_require_268766__(4747); // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js


        var web_dom_collections_iterator = __nested_webpack_require_268766__(3948); // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js


        var web_url = __nested_webpack_require_268766__(285);

        ; // CONCATENATED MODULE: ./src/emitter.js

        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it;

          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;

              var F = function F() {};

              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var normalCompletion = true,
              didErr = false,
              err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        } // The Emitter class provides the ability to call `.on()` on Dropzone to listen
        // to events.
        // It is strongly based on component's emitter class, and I removed the
        // functionality because of the dependency hell with different frameworks.


        var Emitter = /*#__PURE__*/function () {
          function Emitter() {
            _classCallCheck(this, Emitter);
          }

          _createClass(Emitter, [{
            key: "on",
            value: // Add an event listener for given event
            function on(event, fn) {
              this._callbacks = this._callbacks || {}; // Create namespace for this event

              if (!this._callbacks[event]) {
                this._callbacks[event] = [];
              }

              this._callbacks[event].push(fn);

              return this;
            }
          }, {
            key: "emit",
            value: function emit(event) {
              this._callbacks = this._callbacks || {};
              var callbacks = this._callbacks[event];

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              if (callbacks) {
                var _iterator = _createForOfIteratorHelper(callbacks, true),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var callback = _step.value;
                    callback.apply(this, args);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } // trigger a corresponding DOM event


              if (this.element) {
                this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
                  args: args
                }));
              }

              return this;
            }
          }, {
            key: "makeEvent",
            value: function makeEvent(eventName, detail) {
              var params = {
                bubbles: true,
                cancelable: true,
                detail: detail
              };

              if (typeof window.CustomEvent === "function") {
                return new CustomEvent(eventName, params);
              } else {
                // IE 11 support
                // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
                return evt;
              }
            } // Remove event listener for given event. If fn is not provided, all event
            // listeners for that event will be removed. If neither is provided, all
            // event listeners will be removed.

          }, {
            key: "off",
            value: function off(event, fn) {
              if (!this._callbacks || arguments.length === 0) {
                this._callbacks = {};
                return this;
              } // specific event


              var callbacks = this._callbacks[event];

              if (!callbacks) {
                return this;
              } // remove all handlers


              if (arguments.length === 1) {
                delete this._callbacks[event];
                return this;
              } // remove specific handler


              for (var i = 0; i < callbacks.length; i++) {
                var callback = callbacks[i];

                if (callback === fn) {
                  callbacks.splice(i, 1);
                  break;
                }
              }

              return this;
            }
          }]);

          return Emitter;
        }();

        ; // CONCATENATED MODULE: ./src/preview-template.html
        // Module

        var code = "<div class=\"dz-preview dz-file-preview\"> <div class=\"dz-image\"><img data-dz-thumbnail/></div> <div class=\"dz-details\"> <div class=\"dz-size\"><span data-dz-size></span></div> <div class=\"dz-filename\"><span data-dz-name></span></div> </div> <div class=\"dz-progress\"> <span class=\"dz-upload\" data-dz-uploadprogress></span> </div> <div class=\"dz-error-message\"><span data-dz-errormessage></span></div> <div class=\"dz-success-mark\"> <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <title>Check</title> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path> </g> </svg> </div> <div class=\"dz-error-mark\"> <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <title>Error</title> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\"> <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path> </g> </g> </svg> </div> </div> "; // Exports

        /* harmony default export */

        var preview_template = code;
        ; // CONCATENATED MODULE: ./src/options.js

        function options_createForOfIteratorHelper(o, allowArrayLike) {
          var it;

          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;

              var F = function F() {};

              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var normalCompletion = true,
              didErr = false,
              err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }

        function options_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return options_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return options_arrayLikeToArray(o, minLen);
        }

        function options_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        var defaultOptions = {
          /**
           * Has to be specified on elements other than form (or when the form
           * doesn't have an `action` attribute). You can also
           * provide a function that will be called with `files` and
           * must return the url (since `v3.12.0`)
           */
          url: null,

          /**
           * Can be changed to `"put"` if necessary. You can also provide a function
           * that will be called with `files` and must return the method (since `v3.12.0`).
           */
          method: "post",

          /**
           * Will be set on the XHRequest.
           */
          withCredentials: false,

          /**
           * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
           * If set to null or 0, no timeout is going to be set.
           */
          timeout: null,

          /**
           * How many file uploads to process in parallel (See the
           * Enqueuing file uploads documentation section for more info)
           */
          parallelUploads: 2,

          /**
           * Whether to send multiple files in one request. If
           * this it set to true, then the fallback file input element will
           * have the `multiple` attribute as well. This option will
           * also trigger additional events (like `processingmultiple`). See the events
           * documentation section for more information.
           */
          uploadMultiple: false,

          /**
           * Whether you want files to be uploaded in chunks to your server. This can't be
           * used in combination with `uploadMultiple`.
           *
           * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
           */
          chunking: false,

          /**
           * If `chunking` is enabled, this defines whether **every** file should be chunked,
           * even if the file size is below chunkSize. This means, that the additional chunk
           * form data will be submitted and the `chunksUploaded` callback will be invoked.
           */
          forceChunking: false,

          /**
           * If `chunking` is `true`, then this defines the chunk size in bytes.
           */
          chunkSize: 2000000,

          /**
           * If `true`, the individual chunks of a file are being uploaded simultaneously.
           */
          parallelChunkUploads: false,

          /**
           * Whether a chunk should be retried if it fails.
           */
          retryChunks: false,

          /**
           * If `retryChunks` is true, how many times should it be retried.
           */
          retryChunksLimit: 3,

          /**
           * The maximum filesize (in bytes) that is allowed to be uploaded.
           */
          maxFilesize: 256,

          /**
           * The name of the file param that gets transferred.
           * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
           * Dropzone will append `[]` to the name.
           */
          paramName: "file",

          /**
           * Whether thumbnails for images should be generated
           */
          createImageThumbnails: true,

          /**
           * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
           */
          maxThumbnailFilesize: 10,

          /**
           * If `null`, the ratio of the image will be used to calculate it.
           */
          thumbnailWidth: 120,

          /**
           * The same as `thumbnailWidth`. If both are null, images will not be resized.
           */
          thumbnailHeight: 120,

          /**
           * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
           * Can be either `contain` or `crop`.
           */
          thumbnailMethod: "crop",

          /**
           * If set, images will be resized to these dimensions before being **uploaded**.
           * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
           * ratio of the file will be preserved.
           *
           * The `options.transformFile` function uses these options, so if the `transformFile` function
           * is overridden, these options don't do anything.
           */
          resizeWidth: null,

          /**
           * See `resizeWidth`.
           */
          resizeHeight: null,

          /**
           * The mime type of the resized image (before it gets uploaded to the server).
           * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
           * See `resizeWidth` for more information.
           */
          resizeMimeType: null,

          /**
           * The quality of the resized images. See `resizeWidth`.
           */
          resizeQuality: 0.8,

          /**
           * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
           * Can be either `contain` or `crop`.
           */
          resizeMethod: "contain",

          /**
           * The base that is used to calculate the **displayed** filesize. You can
           * change this to 1024 if you would rather display kibibytes, mebibytes,
           * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
           * not `1 kilobyte`. You can change this to `1024` if you don't care about
           * validity.
           */
          filesizeBase: 1000,

          /**
           * If not `null` defines how many files this Dropzone handles. If it exceeds,
           * the event `maxfilesexceeded` will be called. The dropzone element gets the
           * class `dz-max-files-reached` accordingly so you can provide visual
           * feedback.
           */
          maxFiles: null,

          /**
           * An optional object to send additional headers to the server. Eg:
           * `{ "My-Awesome-Header": "header value" }`
           */
          headers: null,

          /**
           * If `true`, the dropzone element itself will be clickable, if `false`
           * nothing will be clickable.
           *
           * You can also pass an HTML element, a CSS selector (for multiple elements)
           * or an array of those. In that case, all of those elements will trigger an
           * upload when clicked.
           */
          clickable: true,

          /**
           * Whether hidden files in directories should be ignored.
           */
          ignoreHiddenFiles: true,

          /**
           * The default implementation of `accept` checks the file's mime type or
           * extension against this list. This is a comma separated list of mime
           * types or file extensions.
           *
           * Eg.: `image/*,application/pdf,.psd`
           *
           * If the Dropzone is `clickable` this option will also be used as
           * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
           * parameter on the hidden file input as well.
           */
          acceptedFiles: null,

          /**
           * **Deprecated!**
           * Use acceptedFiles instead.
           */
          acceptedMimeTypes: null,

          /**
           * If false, files will be added to the queue but the queue will not be
           * processed automatically.
           * This can be useful if you need some additional user input before sending
           * files (or if you want want all files sent at once).
           * If you're ready to send the file simply call `myDropzone.processQueue()`.
           *
           * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
           * section for more information.
           */
          autoProcessQueue: true,

          /**
           * If false, files added to the dropzone will not be queued by default.
           * You'll have to call `enqueueFile(file)` manually.
           */
          autoQueue: true,

          /**
           * If `true`, this will add a link to every file preview to remove or cancel (if
           * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
           * and `dictRemoveFile` options are used for the wording.
           */
          addRemoveLinks: false,

          /**
           * Defines where to display the file previews ??? if `null` the
           * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
           * selector. The element should have the `dropzone-previews` class so
           * the previews are displayed properly.
           */
          previewsContainer: null,

          /**
           * Set this to `true` if you don't want previews to be shown.
           */
          disablePreviews: false,

          /**
           * This is the element the hidden input field (which is used when clicking on the
           * dropzone to trigger file selection) will be appended to. This might
           * be important in case you use frameworks to switch the content of your page.
           *
           * Can be a selector string, or an element directly.
           */
          hiddenInputContainer: "body",

          /**
           * If null, no capture type will be specified
           * If camera, mobile devices will skip the file selection and choose camera
           * If microphone, mobile devices will skip the file selection and choose the microphone
           * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
           * On apple devices multiple must be set to false.  AcceptedFiles may need to
           * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
           */
          capture: null,

          /**
           * **Deprecated**. Use `renameFile` instead.
           */
          renameFilename: null,

          /**
           * A function that is invoked before the file is uploaded to the server and renames the file.
           * This function gets the `File` as argument and can use the `file.name`. The actual name of the
           * file that gets used during the upload can be accessed through `file.upload.filename`.
           */
          renameFile: null,

          /**
           * If `true` the fallback will be forced. This is very useful to test your server
           * implementations first and make sure that everything works as
           * expected without dropzone if you experience problems, and to test
           * how your fallbacks will look.
           */
          forceFallback: false,

          /**
           * The text used before any files are dropped.
           */
          dictDefaultMessage: "Drop files here to upload",

          /**
           * The text that replaces the default message text it the browser is not supported.
           */
          dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

          /**
           * The text that will be added before the fallback form.
           * If you provide a  fallback element yourself, or if this option is `null` this will
           * be ignored.
           */
          dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

          /**
           * If the filesize is too big.
           * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
           */
          dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

          /**
           * If the file doesn't match the file type.
           */
          dictInvalidFileType: "You can't upload files of this type.",

          /**
           * If the server response was invalid.
           * `{{statusCode}}` will be replaced with the servers status code.
           */
          dictResponseError: "Server responded with {{statusCode}} code.",

          /**
           * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
           */
          dictCancelUpload: "Cancel upload",

          /**
           * The text that is displayed if an upload was manually canceled
           */
          dictUploadCanceled: "Upload canceled.",

          /**
           * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
           */
          dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

          /**
           * If `addRemoveLinks` is true, the text to be used to remove a file.
           */
          dictRemoveFile: "Remove file",

          /**
           * If this is not null, then the user will be prompted before removing a file.
           */
          dictRemoveFileConfirmation: null,

          /**
           * Displayed if `maxFiles` is st and exceeded.
           * The string `{{maxFiles}}` will be replaced by the configuration value.
           */
          dictMaxFilesExceeded: "You can not upload any more files.",

          /**
           * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
           * `b` for bytes.
           */
          dictFileSizeUnits: {
            tb: "TB",
            gb: "GB",
            mb: "MB",
            kb: "KB",
            b: "b"
          },

          /**
           * Called when dropzone initialized
           * You can add event listeners here
           */
          init: function init() {},

          /**
           * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
           * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
           * of a function, this needs to return a map.
           *
           * The default implementation does nothing for normal uploads, but adds relevant information for
           * chunked uploads.
           *
           * This is the same as adding hidden input fields in the form element.
           */
          params: function params(files, xhr, chunk) {
            if (chunk) {
              return {
                dzuuid: chunk.file.upload.uuid,
                dzchunkindex: chunk.index,
                dztotalfilesize: chunk.file.size,
                dzchunksize: this.options.chunkSize,
                dztotalchunkcount: chunk.file.upload.totalChunkCount,
                dzchunkbyteoffset: chunk.index * this.options.chunkSize
              };
            }
          },

          /**
           * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
           * and a `done` function as parameters.
           *
           * If the done function is invoked without arguments, the file is "accepted" and will
           * be processed. If you pass an error message, the file is rejected, and the error
           * message will be displayed.
           * This function will not be called if the file is too big or doesn't match the mime types.
           */
          accept: function accept(file, done) {
            return done();
          },

          /**
           * The callback that will be invoked when all chunks have been uploaded for a file.
           * It gets the file for which the chunks have been uploaded as the first parameter,
           * and the `done` function as second. `done()` needs to be invoked when everything
           * needed to finish the upload process is done.
           */
          chunksUploaded: function chunksUploaded(file, done) {
            done();
          },

          /**
           * Gets called when the browser is not supported.
           * The default implementation shows the fallback input field and adds
           * a text.
           */
          fallback: function fallback() {
            // This code should pass in IE7... :(
            var messageElement;
            this.element.className = "".concat(this.element.className, " dz-browser-not-supported");

            var _iterator = options_createForOfIteratorHelper(this.element.getElementsByTagName("div"), true),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;

                if (/(^| )dz-message($| )/.test(child.className)) {
                  messageElement = child;
                  child.className = "dz-message"; // Removes the 'dz-default' class

                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (!messageElement) {
              messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>');
              this.element.appendChild(messageElement);
            }

            var span = messageElement.getElementsByTagName("span")[0];

            if (span) {
              if (span.textContent != null) {
                span.textContent = this.options.dictFallbackMessage;
              } else if (span.innerText != null) {
                span.innerText = this.options.dictFallbackMessage;
              }
            }

            return this.element.appendChild(this.getFallbackForm());
          },

          /**
           * Gets called to calculate the thumbnail dimensions.
           *
           * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
           *
           *  - `srcWidth` & `srcHeight` (required)
           *  - `trgWidth` & `trgHeight` (required)
           *  - `srcX` & `srcY` (optional, default `0`)
           *  - `trgX` & `trgY` (optional, default `0`)
           *
           * Those values are going to be used by `ctx.drawImage()`.
           */
          resize: function resize(file, width, height, resizeMethod) {
            var info = {
              srcX: 0,
              srcY: 0,
              srcWidth: file.width,
              srcHeight: file.height
            };
            var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

            if (width == null && height == null) {
              width = info.srcWidth;
              height = info.srcHeight;
            } else if (width == null) {
              width = height * srcRatio;
            } else if (height == null) {
              height = width / srcRatio;
            } // Make sure images aren't upscaled


            width = Math.min(width, info.srcWidth);
            height = Math.min(height, info.srcHeight);
            var trgRatio = width / height;

            if (info.srcWidth > width || info.srcHeight > height) {
              // Image is bigger and needs rescaling
              if (resizeMethod === "crop") {
                if (srcRatio > trgRatio) {
                  info.srcHeight = file.height;
                  info.srcWidth = info.srcHeight * trgRatio;
                } else {
                  info.srcWidth = file.width;
                  info.srcHeight = info.srcWidth / trgRatio;
                }
              } else if (resizeMethod === "contain") {
                // Method 'contain'
                if (srcRatio > trgRatio) {
                  height = width / srcRatio;
                } else {
                  width = height * srcRatio;
                }
              } else {
                throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
              }
            }

            info.srcX = (file.width - info.srcWidth) / 2;
            info.srcY = (file.height - info.srcHeight) / 2;
            info.trgWidth = width;
            info.trgHeight = height;
            return info;
          },

          /**
           * Can be used to transform the file (for example, resize an image if necessary).
           *
           * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
           * images according to those dimensions.
           *
           * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
           * to be invoked with the file when the transformation is done.
           */
          transformFile: function transformFile(file, done) {
            if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
              return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
            } else {
              return done(file);
            }
          },

          /**
           * A string that contains the template used for each dropped
           * file. Change it to fulfill your needs but make sure to properly
           * provide all elements.
           *
           * If you want to use an actual HTML element instead of providing a String
           * as a config option, you could create a div with the id `tpl`,
           * put the template inside it and provide the element like this:
           *
           *     document
           *       .querySelector('#tpl')
           *       .innerHTML
           *
           */
          previewTemplate: preview_template,

          /*
           Those functions register themselves to the events on init and handle all
           the user interface specific stuff. Overwriting them won't break the upload
           but can break the way it's displayed.
           You can overwrite them if you don't like the default behavior. If you just
           want to add an additional event handler, register it on the dropzone object
           and don't overwrite those options.
           */
          // Those are self explanatory and simply concern the DragnDrop.
          drop: function drop(e) {
            return this.element.classList.remove("dz-drag-hover");
          },
          dragstart: function dragstart(e) {},
          dragend: function dragend(e) {
            return this.element.classList.remove("dz-drag-hover");
          },
          dragenter: function dragenter(e) {
            return this.element.classList.add("dz-drag-hover");
          },
          dragover: function dragover(e) {
            return this.element.classList.add("dz-drag-hover");
          },
          dragleave: function dragleave(e) {
            return this.element.classList.remove("dz-drag-hover");
          },
          paste: function paste(e) {},
          // Called whenever there are no files left in the dropzone anymore, and the
          // dropzone should be displayed as if in the initial state.
          reset: function reset() {
            return this.element.classList.remove("dz-started");
          },
          // Called when a file is added to the queue
          // Receives `file`
          addedfile: function addedfile(file) {
            var _this = this;

            if (this.element === this.previewsContainer) {
              this.element.classList.add("dz-started");
            }

            if (this.previewsContainer && !this.options.disablePreviews) {
              file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
              file.previewTemplate = file.previewElement; // Backwards compatibility

              this.previewsContainer.appendChild(file.previewElement);

              var _iterator2 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]"), true),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var node = _step2.value;
                  node.textContent = file.name;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              var _iterator3 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]"), true),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  node = _step3.value;
                  node.innerHTML = this.filesize(file.size);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (this.options.addRemoveLinks) {
                file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
                file.previewElement.appendChild(file._removeLink);
              }

              var removeFileEvent = function removeFileEvent(e) {
                e.preventDefault();
                e.stopPropagation();

                if (file.status === Dropzone.UPLOADING) {
                  return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function () {
                    return _this.removeFile(file);
                  });
                } else {
                  if (_this.options.dictRemoveFileConfirmation) {
                    return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function () {
                      return _this.removeFile(file);
                    });
                  } else {
                    return _this.removeFile(file);
                  }
                }
              };

              var _iterator4 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]"), true),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var removeLink = _step4.value;
                  removeLink.addEventListener("click", removeFileEvent);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          },
          // Called whenever a file is removed.
          removedfile: function removedfile(file) {
            if (file.previewElement != null && file.previewElement.parentNode != null) {
              file.previewElement.parentNode.removeChild(file.previewElement);
            }

            return this._updateMaxFilesReachedClass();
          },
          // Called when a thumbnail has been generated
          // Receives `file` and `dataUrl`
          thumbnail: function thumbnail(file, dataUrl) {
            if (file.previewElement) {
              file.previewElement.classList.remove("dz-file-preview");

              var _iterator5 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]"), true),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var thumbnailElement = _step5.value;
                  thumbnailElement.alt = file.name;
                  thumbnailElement.src = dataUrl;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              return setTimeout(function () {
                return file.previewElement.classList.add("dz-image-preview");
              }, 1);
            }
          },
          // Called whenever an error occurs
          // Receives `file` and `message`
          error: function error(file, message) {
            if (file.previewElement) {
              file.previewElement.classList.add("dz-error");

              if (typeof message !== "string" && message.error) {
                message = message.error;
              }

              var _iterator6 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]"), true),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var node = _step6.value;
                  node.textContent = message;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          },
          errormultiple: function errormultiple() {},
          // Called when a file gets processed. Since there is a cue, not all added
          // files are processed immediately.
          // Receives `file`
          processing: function processing(file) {
            if (file.previewElement) {
              file.previewElement.classList.add("dz-processing");

              if (file._removeLink) {
                return file._removeLink.innerHTML = this.options.dictCancelUpload;
              }
            }
          },
          processingmultiple: function processingmultiple() {},
          // Called whenever the upload progress gets updated.
          // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
          // To get the total number of bytes of the file, use `file.size`
          uploadprogress: function uploadprogress(file, progress, bytesSent) {
            if (file.previewElement) {
              var _iterator7 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), true),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var node = _step7.value;
                  node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = "".concat(progress, "%");
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          },
          // Called whenever the total upload progress gets updated.
          // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
          totaluploadprogress: function totaluploadprogress() {},
          // Called just before the file is sent. Gets the `xhr` object as second
          // parameter, so you can modify it (for example to add a CSRF token) and a
          // `formData` object to add additional information.
          sending: function sending() {},
          sendingmultiple: function sendingmultiple() {},
          // When the complete upload is finished and successful
          // Receives `file`
          success: function success(file) {
            if (file.previewElement) {
              return file.previewElement.classList.add("dz-success");
            }
          },
          successmultiple: function successmultiple() {},
          // When the upload is canceled.
          canceled: function canceled(file) {
            return this.emit("error", file, this.options.dictUploadCanceled);
          },
          canceledmultiple: function canceledmultiple() {},
          // When the upload is finished, either with success or an error.
          // Receives `file`
          complete: function complete(file) {
            if (file._removeLink) {
              file._removeLink.innerHTML = this.options.dictRemoveFile;
            }

            if (file.previewElement) {
              return file.previewElement.classList.add("dz-complete");
            }
          },
          completemultiple: function completemultiple() {},
          maxfilesexceeded: function maxfilesexceeded() {},
          maxfilesreached: function maxfilesreached() {},
          queuecomplete: function queuecomplete() {},
          addedfiles: function addedfiles() {}
        };
        /* harmony default export */

        var src_options = defaultOptions;
        ; // CONCATENATED MODULE: ./src/dropzone.js

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function dropzone_createForOfIteratorHelper(o, allowArrayLike) {
          var it;

          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = dropzone_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;

              var F = function F() {};

              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var normalCompletion = true,
              didErr = false,
              err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }

        function dropzone_unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return dropzone_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropzone_arrayLikeToArray(o, minLen);
        }

        function dropzone_arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        function dropzone_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function dropzone_defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function dropzone_createClass(Constructor, protoProps, staticProps) {
          if (protoProps) dropzone_defineProperties(Constructor.prototype, protoProps);
          if (staticProps) dropzone_defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();

          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        var Dropzone = /*#__PURE__*/function (_Emitter) {
          _inherits(Dropzone, _Emitter);

          var _super = _createSuper(Dropzone);

          function Dropzone(el, options) {
            var _this;

            dropzone_classCallCheck(this, Dropzone);
            _this = _super.call(this);
            var fallback, left;
            _this.element = el; // For backwards compatibility since the version was in the prototype previously

            _this.version = Dropzone.version;
            _this.clickableElements = [];
            _this.listeners = [];
            _this.files = []; // All files

            if (typeof _this.element === "string") {
              _this.element = document.querySelector(_this.element);
            } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


            if (!_this.element || _this.element.nodeType == null) {
              throw new Error("Invalid dropzone element.");
            }

            if (_this.element.dropzone) {
              throw new Error("Dropzone already attached.");
            } // Now add this dropzone to the instances.


            Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

            _this.element.dropzone = _assertThisInitialized(_this);
            var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
            _this.options = Dropzone.extend({}, src_options, elementOptions, options != null ? options : {});
            _this.options.previewTemplate = _this.options.previewTemplate.replace(/\n*/g, ""); // If the browser failed, just call the fallback and leave

            if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
              return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
            } // @options.url = @element.getAttribute "action" unless @options.url?


            if (_this.options.url == null) {
              _this.options.url = _this.element.getAttribute("action");
            }

            if (!_this.options.url) {
              throw new Error("No URL provided.");
            }

            if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
              throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            }

            if (_this.options.uploadMultiple && _this.options.chunking) {
              throw new Error("You cannot set both: uploadMultiple and chunking.");
            } // Backwards compatibility


            if (_this.options.acceptedMimeTypes) {
              _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
              delete _this.options.acceptedMimeTypes;
            } // Backwards compatibility


            if (_this.options.renameFilename != null) {
              _this.options.renameFile = function (file) {
                return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
              };
            }

            if (typeof _this.options.method === "string") {
              _this.options.method = _this.options.method.toUpperCase();
            }

            if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
              // Remove the fallback
              fallback.parentNode.removeChild(fallback);
            } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


            if (_this.options.previewsContainer !== false) {
              if (_this.options.previewsContainer) {
                _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
              } else {
                _this.previewsContainer = _this.element;
              }
            }

            if (_this.options.clickable) {
              if (_this.options.clickable === true) {
                _this.clickableElements = [_this.element];
              } else {
                _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
              }
            }

            _this.init();

            return _this;
          } // Returns all files that have been accepted


          dropzone_createClass(Dropzone, [{
            key: "getAcceptedFiles",
            value: function getAcceptedFiles() {
              return this.files.filter(function (file) {
                return file.accepted;
              }).map(function (file) {
                return file;
              });
            } // Returns all files that have been rejected
            // Not sure when that's going to be useful, but added for completeness.

          }, {
            key: "getRejectedFiles",
            value: function getRejectedFiles() {
              return this.files.filter(function (file) {
                return !file.accepted;
              }).map(function (file) {
                return file;
              });
            }
          }, {
            key: "getFilesWithStatus",
            value: function getFilesWithStatus(status) {
              return this.files.filter(function (file) {
                return file.status === status;
              }).map(function (file) {
                return file;
              });
            } // Returns all files that are in the queue

          }, {
            key: "getQueuedFiles",
            value: function getQueuedFiles() {
              return this.getFilesWithStatus(Dropzone.QUEUED);
            }
          }, {
            key: "getUploadingFiles",
            value: function getUploadingFiles() {
              return this.getFilesWithStatus(Dropzone.UPLOADING);
            }
          }, {
            key: "getAddedFiles",
            value: function getAddedFiles() {
              return this.getFilesWithStatus(Dropzone.ADDED);
            } // Files that are either queued or uploading

          }, {
            key: "getActiveFiles",
            value: function getActiveFiles() {
              return this.files.filter(function (file) {
                return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
              }).map(function (file) {
                return file;
              });
            } // The function that gets called when Dropzone is initialized. You
            // can (and should) setup event listeners inside this function.

          }, {
            key: "init",
            value: function init() {
              var _this2 = this; // In case it isn't set already


              if (this.element.tagName === "form") {
                this.element.setAttribute("enctype", "multipart/form-data");
              }

              if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
              }

              if (this.clickableElements.length) {
                var setupHiddenFileInput = function setupHiddenFileInput() {
                  if (_this2.hiddenFileInput) {
                    _this2.hiddenFileInput.parentNode.removeChild(_this2.hiddenFileInput);
                  }

                  _this2.hiddenFileInput = document.createElement("input");

                  _this2.hiddenFileInput.setAttribute("type", "file");

                  if (_this2.options.maxFiles === null || _this2.options.maxFiles > 1) {
                    _this2.hiddenFileInput.setAttribute("multiple", "multiple");
                  }

                  _this2.hiddenFileInput.className = "dz-hidden-input";

                  if (_this2.options.acceptedFiles !== null) {
                    _this2.hiddenFileInput.setAttribute("accept", _this2.options.acceptedFiles);
                  }

                  if (_this2.options.capture !== null) {
                    _this2.hiddenFileInput.setAttribute("capture", _this2.options.capture);
                  } // Making sure that no one can "tab" into this field.


                  _this2.hiddenFileInput.setAttribute("tabindex", "-1"); // Not setting `display="none"` because some browsers don't accept clicks
                  // on elements that aren't displayed.


                  _this2.hiddenFileInput.style.visibility = "hidden";
                  _this2.hiddenFileInput.style.position = "absolute";
                  _this2.hiddenFileInput.style.top = "0";
                  _this2.hiddenFileInput.style.left = "0";
                  _this2.hiddenFileInput.style.height = "0";
                  _this2.hiddenFileInput.style.width = "0";
                  Dropzone.getElement(_this2.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this2.hiddenFileInput);

                  _this2.hiddenFileInput.addEventListener("change", function () {
                    var files = _this2.hiddenFileInput.files;

                    if (files.length) {
                      var _iterator = dropzone_createForOfIteratorHelper(files, true),
                          _step;

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var file = _step.value;

                          _this2.addFile(file);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                    _this2.emit("addedfiles", files);

                    setupHiddenFileInput();
                  });
                };

                setupHiddenFileInput();
              }

              this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
              // They're not in @setupEventListeners() because they shouldn't be removed
              // again when the dropzone gets disabled.

              var _iterator2 = dropzone_createForOfIteratorHelper(this.events, true),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var eventName = _step2.value;
                  this.on(eventName, this.options[eventName]);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.on("uploadprogress", function () {
                return _this2.updateTotalUploadProgress();
              });
              this.on("removedfile", function () {
                return _this2.updateTotalUploadProgress();
              });
              this.on("canceled", function (file) {
                return _this2.emit("complete", file);
              }); // Emit a `queuecomplete` event if all files finished uploading.

              this.on("complete", function (file) {
                if (_this2.getAddedFiles().length === 0 && _this2.getUploadingFiles().length === 0 && _this2.getQueuedFiles().length === 0) {
                  // This needs to be deferred so that `queuecomplete` really triggers after `complete`
                  return setTimeout(function () {
                    return _this2.emit("queuecomplete");
                  }, 0);
                }
              });

              var containsFiles = function containsFiles(e) {
                if (e.dataTransfer.types) {
                  // Because e.dataTransfer.types is an Object in
                  // IE, we need to iterate like this instead of
                  // using e.dataTransfer.types.some()
                  for (var i = 0; i < e.dataTransfer.types.length; i++) {
                    if (e.dataTransfer.types[i] === "Files") return true;
                  }
                }

                return false;
              };

              var noPropagation = function noPropagation(e) {
                // If there are no files, we don't want to stop
                // propagation so we don't interfere with other
                // drag and drop behaviour.
                if (!containsFiles(e)) return;
                e.stopPropagation();

                if (e.preventDefault) {
                  return e.preventDefault();
                } else {
                  return e.returnValue = false;
                }
              }; // Create the listeners


              this.listeners = [{
                element: this.element,
                events: {
                  dragstart: function dragstart(e) {
                    return _this2.emit("dragstart", e);
                  },
                  dragenter: function dragenter(e) {
                    noPropagation(e);
                    return _this2.emit("dragenter", e);
                  },
                  dragover: function dragover(e) {
                    // Makes it possible to drag files from chrome's download bar
                    // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                    // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                    var efct;

                    try {
                      efct = e.dataTransfer.effectAllowed;
                    } catch (error) {}

                    e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                    noPropagation(e);
                    return _this2.emit("dragover", e);
                  },
                  dragleave: function dragleave(e) {
                    return _this2.emit("dragleave", e);
                  },
                  drop: function drop(e) {
                    noPropagation(e);
                    return _this2.drop(e);
                  },
                  dragend: function dragend(e) {
                    return _this2.emit("dragend", e);
                  }
                } // This is disabled right now, because the browsers don't implement it properly.
                // "paste": (e) =>
                //   noPropagation e
                //   @paste e

              }];
              this.clickableElements.forEach(function (clickableElement) {
                return _this2.listeners.push({
                  element: clickableElement,
                  events: {
                    click: function click(evt) {
                      // Only the actual dropzone or the message element should trigger file selection
                      if (clickableElement !== _this2.element || evt.target === _this2.element || Dropzone.elementInside(evt.target, _this2.element.querySelector(".dz-message"))) {
                        _this2.hiddenFileInput.click(); // Forward the click

                      }

                      return true;
                    }
                  }
                });
              });
              this.enable();
              return this.options.init.call(this);
            } // Not fully tested yet

          }, {
            key: "destroy",
            value: function destroy() {
              this.disable();
              this.removeAllFiles(true);

              if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null;
              }

              delete this.element.dropzone;
              return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
            }
          }, {
            key: "updateTotalUploadProgress",
            value: function updateTotalUploadProgress() {
              var totalUploadProgress;
              var totalBytesSent = 0;
              var totalBytes = 0;
              var activeFiles = this.getActiveFiles();

              if (activeFiles.length) {
                var _iterator3 = dropzone_createForOfIteratorHelper(this.getActiveFiles(), true),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var file = _step3.value;
                    totalBytesSent += file.upload.bytesSent;
                    totalBytes += file.upload.total;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                totalUploadProgress = 100 * totalBytesSent / totalBytes;
              } else {
                totalUploadProgress = 100;
              }

              return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
            } // @options.paramName can be a function taking one parameter rather than a string.
            // A parameter name for a file is obtained simply by calling this with an index number.

          }, {
            key: "_getParamName",
            value: function _getParamName(n) {
              if (typeof this.options.paramName === "function") {
                return this.options.paramName(n);
              } else {
                return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
              }
            } // If @options.renameFile is a function,
            // the function will be used to rename the file.name before appending it to the formData

          }, {
            key: "_renameFile",
            value: function _renameFile(file) {
              if (typeof this.options.renameFile !== "function") {
                return file.name;
              }

              return this.options.renameFile(file);
            } // Returns a form that can be used as fallback if the browser does not support DragnDrop
            //
            // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
            // This code has to pass in IE7 :(

          }, {
            key: "getFallbackForm",
            value: function getFallbackForm() {
              var existingFallback, form;

              if (existingFallback = this.getExistingFallback()) {
                return existingFallback;
              }

              var fieldsString = '<div class="dz-fallback">';

              if (this.options.dictFallbackText) {
                fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
              }

              fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
              var fields = Dropzone.createElement(fieldsString);

              if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
                form.appendChild(fields);
              } else {
                // Make sure that the enctype and method attributes are set properly
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method);
              }

              return form != null ? form : fields;
            } // Returns the fallback elements if they exist already
            //
            // This code has to pass in IE7 :(

          }, {
            key: "getExistingFallback",
            value: function getExistingFallback() {
              var getFallback = function getFallback(elements) {
                var _iterator4 = dropzone_createForOfIteratorHelper(elements, true),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var el = _step4.value;

                    if (/(^| )fallback($| )/.test(el.className)) {
                      return el;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              };

              for (var _i = 0, _arr = ["div", "form"]; _i < _arr.length; _i++) {
                var tagName = _arr[_i];
                var fallback;

                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                  return fallback;
                }
              }
            } // Activates all listeners stored in @listeners

          }, {
            key: "setupEventListeners",
            value: function setupEventListeners() {
              return this.listeners.map(function (elementListeners) {
                return function () {
                  var result = [];

                  for (var event in elementListeners.events) {
                    var listener = elementListeners.events[event];
                    result.push(elementListeners.element.addEventListener(event, listener, false));
                  }

                  return result;
                }();
              });
            } // Deactivates all listeners stored in @listeners

          }, {
            key: "removeEventListeners",
            value: function removeEventListeners() {
              return this.listeners.map(function (elementListeners) {
                return function () {
                  var result = [];

                  for (var event in elementListeners.events) {
                    var listener = elementListeners.events[event];
                    result.push(elementListeners.element.removeEventListener(event, listener, false));
                  }

                  return result;
                }();
              });
            } // Removes all event listeners and cancels all files in the queue or being processed.

          }, {
            key: "disable",
            value: function disable() {
              var _this3 = this;

              this.clickableElements.forEach(function (element) {
                return element.classList.remove("dz-clickable");
              });
              this.removeEventListeners();
              this.disabled = true;
              return this.files.map(function (file) {
                return _this3.cancelUpload(file);
              });
            }
          }, {
            key: "enable",
            value: function enable() {
              delete this.disabled;
              this.clickableElements.forEach(function (element) {
                return element.classList.add("dz-clickable");
              });
              return this.setupEventListeners();
            } // Returns a nicely formatted filesize

          }, {
            key: "filesize",
            value: function filesize(size) {
              var selectedSize = 0;
              var selectedUnit = "b";

              if (size > 0) {
                var units = ["tb", "gb", "mb", "kb", "b"];

                for (var i = 0; i < units.length; i++) {
                  var unit = units[i];
                  var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

                  if (size >= cutoff) {
                    selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                    selectedUnit = unit;
                    break;
                  }
                }

                selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
              }

              return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
            } // Adds or removes the `dz-max-files-reached` class from the form.

          }, {
            key: "_updateMaxFilesReachedClass",
            value: function _updateMaxFilesReachedClass() {
              if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                  this.emit("maxfilesreached", this.files);
                }

                return this.element.classList.add("dz-max-files-reached");
              } else {
                return this.element.classList.remove("dz-max-files-reached");
              }
            }
          }, {
            key: "drop",
            value: function drop(e) {
              if (!e.dataTransfer) {
                return;
              }

              this.emit("drop", e); // Convert the FileList to an Array
              // This is necessary for IE11

              var files = [];

              for (var i = 0; i < e.dataTransfer.files.length; i++) {
                files[i] = e.dataTransfer.files[i];
              } // Even if it's a folder, files.length will contain the folders.


              if (files.length) {
                var items = e.dataTransfer.items;

                if (items && items.length && items[0].webkitGetAsEntry != null) {
                  // The browser supports dropping of folders, so handle items instead of files
                  this._addFilesFromItems(items);
                } else {
                  this.handleFiles(files);
                }
              }

              this.emit("addedfiles", files);
            }
          }, {
            key: "paste",
            value: function paste(e) {
              if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
                return x.items;
              }) == null) {
                return;
              }

              this.emit("paste", e);
              var items = e.clipboardData.items;

              if (items.length) {
                return this._addFilesFromItems(items);
              }
            }
          }, {
            key: "handleFiles",
            value: function handleFiles(files) {
              var _iterator5 = dropzone_createForOfIteratorHelper(files, true),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var file = _step5.value;
                  this.addFile(file);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            } // When a folder is dropped (or files are pasted), items must be handled
            // instead of files.

          }, {
            key: "_addFilesFromItems",
            value: function _addFilesFromItems(items) {
              var _this4 = this;

              return function () {
                var result = [];

                var _iterator6 = dropzone_createForOfIteratorHelper(items, true),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var item = _step6.value;
                    var entry;

                    if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                      if (entry.isFile) {
                        result.push(_this4.addFile(item.getAsFile()));
                      } else if (entry.isDirectory) {
                        // Append all files from that directory to files
                        result.push(_this4._addFilesFromDirectory(entry, entry.name));
                      } else {
                        result.push(undefined);
                      }
                    } else if (item.getAsFile != null) {
                      if (item.kind == null || item.kind === "file") {
                        result.push(_this4.addFile(item.getAsFile()));
                      } else {
                        result.push(undefined);
                      }
                    } else {
                      result.push(undefined);
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                return result;
              }();
            } // Goes through the directory, and adds each file it finds recursively

          }, {
            key: "_addFilesFromDirectory",
            value: function _addFilesFromDirectory(directory, path) {
              var _this5 = this;

              var dirReader = directory.createReader();

              var errorHandler = function errorHandler(error) {
                return __guardMethod__(console, "log", function (o) {
                  return o.log(error);
                });
              };

              var readEntries = function readEntries() {
                return dirReader.readEntries(function (entries) {
                  if (entries.length > 0) {
                    var _iterator7 = dropzone_createForOfIteratorHelper(entries, true),
                        _step7;

                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var entry = _step7.value;

                        if (entry.isFile) {
                          entry.file(function (file) {
                            if (_this5.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") {
                              return;
                            }

                            file.fullPath = "".concat(path, "/").concat(file.name);
                            return _this5.addFile(file);
                          });
                        } else if (entry.isDirectory) {
                          _this5._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                        }
                      } // Recursively call readEntries() again, since browser only handle
                      // the first 100 entries.
                      // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }

                    readEntries();
                  }

                  return null;
                }, errorHandler);
              };

              return readEntries();
            } // If `done()` is called without argument the file is accepted
            // If you call it with an error message, the file is rejected
            // (This allows for asynchronous validation)
            //
            // This function checks the filesize, and if the file.type passes the
            // `acceptedFiles` check.

          }, {
            key: "accept",
            value: function accept(file, done) {
              if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
                done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
              } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                done(this.options.dictInvalidFileType);
              } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                this.emit("maxfilesexceeded", file);
              } else {
                this.options.accept.call(this, file, done);
              }
            }
          }, {
            key: "addFile",
            value: function addFile(file) {
              var _this6 = this;

              file.upload = {
                uuid: Dropzone.uuidv4(),
                progress: 0,
                // Setting the total upload size to file.size for the beginning
                // It's actual different than the size to be transmitted.
                total: file.size,
                bytesSent: 0,
                filename: this._renameFile(file) // Not setting chunking information here, because the acutal data ??? and
                // thus the chunks ??? might change if `options.transformFile` is set
                // and does something to the data.

              };
              this.files.push(file);
              file.status = Dropzone.ADDED;
              this.emit("addedfile", file);

              this._enqueueThumbnail(file);

              this.accept(file, function (error) {
                if (error) {
                  file.accepted = false;

                  _this6._errorProcessing([file], error); // Will set the file.status

                } else {
                  file.accepted = true;

                  if (_this6.options.autoQueue) {
                    _this6.enqueueFile(file);
                  } // Will set .accepted = true

                }

                _this6._updateMaxFilesReachedClass();
              });
            } // Wrapper for enqueueFile

          }, {
            key: "enqueueFiles",
            value: function enqueueFiles(files) {
              var _iterator8 = dropzone_createForOfIteratorHelper(files, true),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var file = _step8.value;
                  this.enqueueFile(file);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return null;
            }
          }, {
            key: "enqueueFile",
            value: function enqueueFile(file) {
              var _this7 = this;

              if (file.status === Dropzone.ADDED && file.accepted === true) {
                file.status = Dropzone.QUEUED;

                if (this.options.autoProcessQueue) {
                  return setTimeout(function () {
                    return _this7.processQueue();
                  }, 0); // Deferring the call
                }
              } else {
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
              }
            }
          }, {
            key: "_enqueueThumbnail",
            value: function _enqueueThumbnail(file) {
              var _this8 = this;

              if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                this._thumbnailQueue.push(file);

                return setTimeout(function () {
                  return _this8._processThumbnailQueue();
                }, 0); // Deferring the call
              }
            }
          }, {
            key: "_processThumbnailQueue",
            value: function _processThumbnailQueue() {
              var _this9 = this;

              if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                return;
              }

              this._processingThumbnail = true;

              var file = this._thumbnailQueue.shift();

              return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
                _this9.emit("thumbnail", file, dataUrl);

                _this9._processingThumbnail = false;
                return _this9._processThumbnailQueue();
              });
            } // Can be called by the user to remove a file

          }, {
            key: "removeFile",
            value: function removeFile(file) {
              if (file.status === Dropzone.UPLOADING) {
                this.cancelUpload(file);
              }

              this.files = without(this.files, file);
              this.emit("removedfile", file);

              if (this.files.length === 0) {
                return this.emit("reset");
              }
            } // Removes all files that aren't currently processed from the list

          }, {
            key: "removeAllFiles",
            value: function removeAllFiles(cancelIfNecessary) {
              // Create a copy of files since removeFile() changes the @files array.
              if (cancelIfNecessary == null) {
                cancelIfNecessary = false;
              }

              var _iterator9 = dropzone_createForOfIteratorHelper(this.files.slice(), true),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var file = _step9.value;

                  if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                    this.removeFile(file);
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              return null;
            } // Resizes an image before it gets sent to the server. This function is the default behavior of
            // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
            // the resized blob.

          }, {
            key: "resizeImage",
            value: function resizeImage(file, width, height, resizeMethod, callback) {
              var _this10 = this;

              return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
                if (canvas == null) {
                  // The image has not been resized
                  return callback(file);
                } else {
                  var resizeMimeType = _this10.options.resizeMimeType;

                  if (resizeMimeType == null) {
                    resizeMimeType = file.type;
                  }

                  var resizedDataURL = canvas.toDataURL(resizeMimeType, _this10.options.resizeQuality);

                  if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") {
                    // Now add the original EXIF information
                    resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                  }

                  return callback(Dropzone.dataURItoBlob(resizedDataURL));
                }
              });
            }
          }, {
            key: "createThumbnail",
            value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
              var _this11 = this;

              var fileReader = new FileReader();

              fileReader.onload = function () {
                file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

                if (file.type === "image/svg+xml") {
                  if (callback != null) {
                    callback(fileReader.result);
                  }

                  return;
                }

                _this11.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
              };

              fileReader.readAsDataURL(file);
            } // `mockFile` needs to have these attributes:
            //
            //     { name: 'name', size: 12345, imageUrl: '' }
            //
            // `callback` will be invoked when the image has been downloaded and displayed.
            // `crossOrigin` will be added to the `img` tag when accessing the file.

          }, {
            key: "displayExistingFile",
            value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
              var _this12 = this;

              var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
              this.emit("addedfile", mockFile);
              this.emit("complete", mockFile);

              if (!resizeThumbnail) {
                this.emit("thumbnail", mockFile, imageUrl);
                if (callback) callback();
              } else {
                var onDone = function onDone(thumbnail) {
                  _this12.emit("thumbnail", mockFile, thumbnail);

                  if (callback) callback();
                };

                mockFile.dataURL = imageUrl;
                this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
              }
            }
          }, {
            key: "createThumbnailFromUrl",
            value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
              var _this13 = this; // Not using `new Image` here because of a bug in latest Chrome versions.
              // See https://github.com/enyo/dropzone/pull/226


              var img = document.createElement("img");

              if (crossOrigin) {
                img.crossOrigin = crossOrigin;
              } // fixOrientation is not needed anymore with browsers handling imageOrientation


              fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;

              img.onload = function () {
                var loadExif = function loadExif(callback) {
                  return callback(1);
                };

                if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) {
                  loadExif = function loadExif(callback) {
                    return EXIF.getData(img, function () {
                      return callback(EXIF.getTag(this, "Orientation"));
                    });
                  };
                }

                return loadExif(function (orientation) {
                  file.width = img.width;
                  file.height = img.height;

                  var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);

                  var canvas = document.createElement("canvas");
                  var ctx = canvas.getContext("2d");
                  canvas.width = resizeInfo.trgWidth;
                  canvas.height = resizeInfo.trgHeight;

                  if (orientation > 4) {
                    canvas.width = resizeInfo.trgHeight;
                    canvas.height = resizeInfo.trgWidth;
                  }

                  switch (orientation) {
                    case 2:
                      // horizontal flip
                      ctx.translate(canvas.width, 0);
                      ctx.scale(-1, 1);
                      break;

                    case 3:
                      // 180?? rotate left
                      ctx.translate(canvas.width, canvas.height);
                      ctx.rotate(Math.PI);
                      break;

                    case 4:
                      // vertical flip
                      ctx.translate(0, canvas.height);
                      ctx.scale(1, -1);
                      break;

                    case 5:
                      // vertical flip + 90 rotate right
                      ctx.rotate(0.5 * Math.PI);
                      ctx.scale(1, -1);
                      break;

                    case 6:
                      // 90?? rotate right
                      ctx.rotate(0.5 * Math.PI);
                      ctx.translate(0, -canvas.width);
                      break;

                    case 7:
                      // horizontal flip + 90 rotate right
                      ctx.rotate(0.5 * Math.PI);
                      ctx.translate(canvas.height, -canvas.width);
                      ctx.scale(-1, 1);
                      break;

                    case 8:
                      // 90?? rotate left
                      ctx.rotate(-0.5 * Math.PI);
                      ctx.translate(-canvas.height, 0);
                      break;
                  } // This is a bugfix for iOS' scaling bug.


                  drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                  var thumbnail = canvas.toDataURL("image/png");

                  if (callback != null) {
                    return callback(thumbnail, canvas);
                  }
                });
              };

              if (callback != null) {
                img.onerror = callback;
              }

              return img.src = file.dataURL;
            } // Goes through the queue and processes files if there aren't too many already.

          }, {
            key: "processQueue",
            value: function processQueue() {
              var parallelUploads = this.options.parallelUploads;
              var processingLength = this.getUploadingFiles().length;
              var i = processingLength; // There are already at least as many files uploading than should be

              if (processingLength >= parallelUploads) {
                return;
              }

              var queuedFiles = this.getQueuedFiles();

              if (!(queuedFiles.length > 0)) {
                return;
              }

              if (this.options.uploadMultiple) {
                // The files should be uploaded in one request
                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
              } else {
                while (i < parallelUploads) {
                  if (!queuedFiles.length) {
                    return;
                  } // Nothing left to process


                  this.processFile(queuedFiles.shift());
                  i++;
                }
              }
            } // Wrapper for `processFiles`

          }, {
            key: "processFile",
            value: function processFile(file) {
              return this.processFiles([file]);
            } // Loads the file, then calls finishedLoading()

          }, {
            key: "processFiles",
            value: function processFiles(files) {
              var _iterator10 = dropzone_createForOfIteratorHelper(files, true),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var file = _step10.value;
                  file.processing = true; // Backwards compatibility

                  file.status = Dropzone.UPLOADING;
                  this.emit("processing", file);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              if (this.options.uploadMultiple) {
                this.emit("processingmultiple", files);
              }

              return this.uploadFiles(files);
            }
          }, {
            key: "_getFilesWithXhr",
            value: function _getFilesWithXhr(xhr) {
              var files;
              return files = this.files.filter(function (file) {
                return file.xhr === xhr;
              }).map(function (file) {
                return file;
              });
            } // Cancels the file upload and sets the status to CANCELED
            // **if** the file is actually being uploaded.
            // If it's still in the queue, the file is being removed from it and the status
            // set to CANCELED.

          }, {
            key: "cancelUpload",
            value: function cancelUpload(file) {
              if (file.status === Dropzone.UPLOADING) {
                var groupedFiles = this._getFilesWithXhr(file.xhr);

                var _iterator11 = dropzone_createForOfIteratorHelper(groupedFiles, true),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var groupedFile = _step11.value;
                    groupedFile.status = Dropzone.CANCELED;
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                if (typeof file.xhr !== "undefined") {
                  file.xhr.abort();
                }

                var _iterator12 = dropzone_createForOfIteratorHelper(groupedFiles, true),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _groupedFile = _step12.value;
                    this.emit("canceled", _groupedFile);
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                if (this.options.uploadMultiple) {
                  this.emit("canceledmultiple", groupedFiles);
                }
              } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);

                if (this.options.uploadMultiple) {
                  this.emit("canceledmultiple", [file]);
                }
              }

              if (this.options.autoProcessQueue) {
                return this.processQueue();
              }
            }
          }, {
            key: "resolveOption",
            value: function resolveOption(option) {
              if (typeof option === "function") {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }

                return option.apply(this, args);
              }

              return option;
            }
          }, {
            key: "uploadFile",
            value: function uploadFile(file) {
              return this.uploadFiles([file]);
            }
          }, {
            key: "uploadFiles",
            value: function uploadFiles(files) {
              var _this14 = this;

              this._transformFiles(files, function (transformedFiles) {
                if (_this14.options.chunking) {
                  // Chunking is not allowed to be used with `uploadMultiple` so we know
                  // that there is only __one__file.
                  var transformedFile = transformedFiles[0];
                  files[0].upload.chunked = _this14.options.chunking && (_this14.options.forceChunking || transformedFile.size > _this14.options.chunkSize);
                  files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this14.options.chunkSize);
                }

                if (files[0].upload.chunked) {
                  // This file should be sent in chunks!
                  // If the chunking option is set, we **know** that there can only be **one** file, since
                  // uploadMultiple is not allowed with this option.
                  var file = files[0];
                  var _transformedFile = transformedFiles[0];
                  var startedChunkCount = 0;
                  file.upload.chunks = [];

                  var handleNextChunk = function handleNextChunk() {
                    var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

                    while (file.upload.chunks[chunkIndex] !== undefined) {
                      chunkIndex++;
                    } // This means, that all chunks have already been started.


                    if (chunkIndex >= file.upload.totalChunkCount) return;
                    startedChunkCount++;
                    var start = chunkIndex * _this14.options.chunkSize;
                    var end = Math.min(start + _this14.options.chunkSize, _transformedFile.size);
                    var dataBlock = {
                      name: _this14._getParamName(0),
                      data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
                      filename: file.upload.filename,
                      chunkIndex: chunkIndex
                    };
                    file.upload.chunks[chunkIndex] = {
                      file: file,
                      index: chunkIndex,
                      dataBlock: dataBlock,
                      // In case we want to retry.
                      status: Dropzone.UPLOADING,
                      progress: 0,
                      retries: 0 // The number of times this block has been retried.

                    };

                    _this14._uploadData(files, [dataBlock]);
                  };

                  file.upload.finishedChunkUpload = function (chunk, response) {
                    var allFinished = true;
                    chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

                    chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

                    chunk.xhr = null;

                    for (var i = 0; i < file.upload.totalChunkCount; i++) {
                      if (file.upload.chunks[i] === undefined) {
                        return handleNextChunk();
                      }

                      if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                        allFinished = false;
                      }
                    }

                    if (allFinished) {
                      _this14.options.chunksUploaded(file, function () {
                        _this14._finished(files, response, null);
                      });
                    }
                  };

                  if (_this14.options.parallelChunkUploads) {
                    for (var i = 0; i < file.upload.totalChunkCount; i++) {
                      handleNextChunk();
                    }
                  } else {
                    handleNextChunk();
                  }
                } else {
                  var dataBlocks = [];

                  for (var _i2 = 0; _i2 < files.length; _i2++) {
                    dataBlocks[_i2] = {
                      name: _this14._getParamName(_i2),
                      data: transformedFiles[_i2],
                      filename: files[_i2].upload.filename
                    };
                  }

                  _this14._uploadData(files, dataBlocks);
                }
              });
            } /// Returns the right chunk for given file and xhr

          }, {
            key: "_getChunk",
            value: function _getChunk(file, xhr) {
              for (var i = 0; i < file.upload.totalChunkCount; i++) {
                if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
                  return file.upload.chunks[i];
                }
              }
            } // This function actually uploads the file(s) to the server.
            // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
            // files, or individual chunks for chunked upload).

          }, {
            key: "_uploadData",
            value: function _uploadData(files, dataBlocks) {
              var _this15 = this;

              var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

              var _iterator13 = dropzone_createForOfIteratorHelper(files, true),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var file = _step13.value;
                  file.xhr = xhr;
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              if (files[0].upload.chunked) {
                // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
                files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
              }

              var method = this.resolveOption(this.options.method, files);
              var url = this.resolveOption(this.options.url, files);
              xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

              var timeout = this.resolveOption(this.options.timeout, files);
              if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

              xhr.withCredentials = !!this.options.withCredentials;

              xhr.onload = function (e) {
                _this15._finishedUploading(files, xhr, e);
              };

              xhr.ontimeout = function () {
                _this15._handleUploadError(files, xhr, "Request timedout after ".concat(_this15.options.timeout / 1000, " seconds"));
              };

              xhr.onerror = function () {
                _this15._handleUploadError(files, xhr);
              }; // Some browsers do not have the .upload property


              var progressObj = xhr.upload != null ? xhr.upload : xhr;

              progressObj.onprogress = function (e) {
                return _this15._updateFilesUploadProgress(files, xhr, e);
              };

              var headers = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
              };

              if (this.options.headers) {
                Dropzone.extend(headers, this.options.headers);
              }

              for (var headerName in headers) {
                var headerValue = headers[headerName];

                if (headerValue) {
                  xhr.setRequestHeader(headerName, headerValue);
                }
              }

              var formData = new FormData(); // Adding all @options parameters

              if (this.options.params) {
                var additionalParams = this.options.params;

                if (typeof additionalParams === "function") {
                  additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                }

                for (var key in additionalParams) {
                  var value = additionalParams[key];

                  if (Array.isArray(value)) {
                    // The additional parameter contains an array,
                    // so lets iterate over it to attach each value
                    // individually.
                    for (var i = 0; i < value.length; i++) {
                      formData.append(key, value[i]);
                    }
                  } else {
                    formData.append(key, value);
                  }
                }
              } // Let the user add additional data if necessary


              var _iterator14 = dropzone_createForOfIteratorHelper(files, true),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _file = _step14.value;
                  this.emit("sending", _file, xhr, formData);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              if (this.options.uploadMultiple) {
                this.emit("sendingmultiple", files, xhr, formData);
              }

              this._addFormElementData(formData); // Finally add the files
              // Has to be last because some servers (eg: S3) expect the file to be the last parameter


              for (var _i3 = 0; _i3 < dataBlocks.length; _i3++) {
                var dataBlock = dataBlocks[_i3];
                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
              }

              this.submitRequest(xhr, formData, files);
            } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

          }, {
            key: "_transformFiles",
            value: function _transformFiles(files, done) {
              var _this16 = this;

              var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

              var doneCounter = 0;

              var _loop = function _loop(i) {
                _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
                  transformedFiles[i] = transformedFile;

                  if (++doneCounter === files.length) {
                    done(transformedFiles);
                  }
                });
              };

              for (var i = 0; i < files.length; i++) {
                _loop(i);
              }
            } // Takes care of adding other input elements of the form to the AJAX request

          }, {
            key: "_addFormElementData",
            value: function _addFormElementData(formData) {
              // Take care of other input elements
              if (this.element.tagName === "FORM") {
                var _iterator15 = dropzone_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"), true),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var input = _step15.value;
                    var inputName = input.getAttribute("name");
                    var inputType = input.getAttribute("type");
                    if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

                    if (typeof inputName === "undefined" || inputName === null) continue;

                    if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                      // Possibly multiple values
                      var _iterator16 = dropzone_createForOfIteratorHelper(input.options, true),
                          _step16;

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          var option = _step16.value;

                          if (option.selected) {
                            formData.append(inputName, option.value);
                          }
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }
                    } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
                      formData.append(inputName, input.value);
                    }
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
            } // Invoked when there is new progress information about given files.
            // If e is not provided, it is assumed that the upload is finished.

          }, {
            key: "_updateFilesUploadProgress",
            value: function _updateFilesUploadProgress(files, xhr, e) {
              if (!files[0].upload.chunked) {
                // Handle file uploads without chunking
                var _iterator17 = dropzone_createForOfIteratorHelper(files, true),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var file = _step17.value;

                    if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) {
                      // If both, the `total` and `bytesSent` have already been set, and
                      // they are equal (meaning progress is at 100%), we can skip this
                      // file, since an upload progress shouldn't go down.
                      continue;
                    }

                    if (e) {
                      file.upload.progress = 100 * e.loaded / e.total;
                      file.upload.total = e.total;
                      file.upload.bytesSent = e.loaded;
                    } else {
                      // No event, so we're at 100%
                      file.upload.progress = 100;
                      file.upload.bytesSent = file.upload.total;
                    }

                    this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              } else {
                // Handle chunked file uploads
                // Chunked upload is not compatible with uploading multiple files in one
                // request, so we know there's only one file.
                var _file2 = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk
                // progress.

                var chunk = this._getChunk(_file2, xhr);

                if (e) {
                  chunk.progress = 100 * e.loaded / e.total;
                  chunk.total = e.total;
                  chunk.bytesSent = e.loaded;
                } else {
                  // No event, so we're at 100%
                  chunk.progress = 100;
                  chunk.bytesSent = chunk.total;
                } // Now tally the *file* upload progress from its individual chunks


                _file2.upload.progress = 0;
                _file2.upload.total = 0;
                _file2.upload.bytesSent = 0;

                for (var i = 0; i < _file2.upload.totalChunkCount; i++) {
                  if (_file2.upload.chunks[i] && typeof _file2.upload.chunks[i].progress !== "undefined") {
                    _file2.upload.progress += _file2.upload.chunks[i].progress;
                    _file2.upload.total += _file2.upload.chunks[i].total;
                    _file2.upload.bytesSent += _file2.upload.chunks[i].bytesSent;
                  }
                } // Since the process is a percentage, we need to divide by the amount of
                // chunks we've used.


                _file2.upload.progress = _file2.upload.progress / _file2.upload.totalChunkCount;
                this.emit("uploadprogress", _file2, _file2.upload.progress, _file2.upload.bytesSent);
              }
            }
          }, {
            key: "_finishedUploading",
            value: function _finishedUploading(files, xhr, e) {
              var response;

              if (files[0].status === Dropzone.CANCELED) {
                return;
              }

              if (xhr.readyState !== 4) {
                return;
              }

              if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
                response = xhr.responseText;

                if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                  try {
                    response = JSON.parse(response);
                  } catch (error) {
                    e = error;
                    response = "Invalid JSON response from server.";
                  }
                }
              }

              this._updateFilesUploadProgress(files, xhr);

              if (!(200 <= xhr.status && xhr.status < 300)) {
                this._handleUploadError(files, xhr, response);
              } else {
                if (files[0].upload.chunked) {
                  files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
                } else {
                  this._finished(files, response, e);
                }
              }
            }
          }, {
            key: "_handleUploadError",
            value: function _handleUploadError(files, xhr, response) {
              if (files[0].status === Dropzone.CANCELED) {
                return;
              }

              if (files[0].upload.chunked && this.options.retryChunks) {
                var chunk = this._getChunk(files[0], xhr);

                if (chunk.retries++ < this.options.retryChunksLimit) {
                  this._uploadData(files, [chunk.dataBlock]);

                  return;
                } else {
                  console.warn("Retried this chunk too often. Giving up.");
                }
              }

              this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
            }
          }, {
            key: "submitRequest",
            value: function submitRequest(xhr, formData, files) {
              if (xhr.readyState != 1) {
                console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
                return;
              }

              xhr.send(formData);
            } // Called internally when processing is finished.
            // Individual callbacks have to be called in the appropriate sections.

          }, {
            key: "_finished",
            value: function _finished(files, responseText, e) {
              var _iterator18 = dropzone_createForOfIteratorHelper(files, true),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var file = _step18.value;
                  file.status = Dropzone.SUCCESS;
                  this.emit("success", file, responseText, e);
                  this.emit("complete", file);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }

              if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files);
              }

              if (this.options.autoProcessQueue) {
                return this.processQueue();
              }
            } // Called internally when processing is finished.
            // Individual callbacks have to be called in the appropriate sections.

          }, {
            key: "_errorProcessing",
            value: function _errorProcessing(files, message, xhr) {
              var _iterator19 = dropzone_createForOfIteratorHelper(files, true),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var file = _step19.value;
                  file.status = Dropzone.ERROR;
                  this.emit("error", file, message, xhr);
                  this.emit("complete", file);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files);
              }

              if (this.options.autoProcessQueue) {
                return this.processQueue();
              }
            }
          }], [{
            key: "initClass",
            value: function initClass() {
              // Exposing the emitter class, mainly for tests
              this.prototype.Emitter = Emitter;
              /*
               This is a list of all available events you can register on a dropzone object.
                You can register an event handler like this:
                dropzone.on("dragEnter", function() { });
                */

              this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
              this.prototype._thumbnailQueue = [];
              this.prototype._processingThumbnail = false;
            } // global utility

          }, {
            key: "extend",
            value: function extend(target) {
              for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                objects[_key2 - 1] = arguments[_key2];
              }

              for (var _i4 = 0, _objects = objects; _i4 < _objects.length; _i4++) {
                var object = _objects[_i4];

                for (var key in object) {
                  var val = object[key];
                  target[key] = val;
                }
              }

              return target;
            }
          }, {
            key: "uuidv4",
            value: function uuidv4() {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c === "x" ? r : r & 0x3 | 0x8;
                return v.toString(16);
              });
            }
          }]);
          return Dropzone;
        }(Emitter);

        Dropzone.initClass();
        Dropzone.version = "5.9.3"; // This is a map of options for your different dropzones. Add configurations
        // to this object for your different dropzone elemens.
        //
        // Example:
        //
        //     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
        //
        // To disable autoDiscover for a specific element, you can set `false` as an option:
        //
        //     Dropzone.options.myDisabledElementId = false;
        //
        // And in html:
        //
        //     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

        Dropzone.options = {}; // Returns the options for an element or undefined if none available.

        Dropzone.optionsForElement = function (element) {
          // Get the `Dropzone.options.elementId` for this element if it exists
          if (element.getAttribute("id")) {
            return Dropzone.options[camelize(element.getAttribute("id"))];
          } else {
            return undefined;
          }
        }; // Holds a list of all dropzone instances


        Dropzone.instances = []; // Returns the dropzone for given element if any

        Dropzone.forElement = function (element) {
          if (typeof element === "string") {
            element = document.querySelector(element);
          }

          if ((element != null ? element.dropzone : undefined) == null) {
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
          }

          return element.dropzone;
        }; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


        Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

        Dropzone.discover = function () {
          var dropzones;

          if (document.querySelectorAll) {
            dropzones = document.querySelectorAll(".dropzone");
          } else {
            dropzones = []; // IE :(

            var checkElements = function checkElements(elements) {
              return function () {
                var result = [];

                var _iterator20 = dropzone_createForOfIteratorHelper(elements, true),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var el = _step20.value;

                    if (/(^| )dropzone($| )/.test(el.className)) {
                      result.push(dropzones.push(el));
                    } else {
                      result.push(undefined);
                    }
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                return result;
              }();
            };

            checkElements(document.getElementsByTagName("div"));
            checkElements(document.getElementsByTagName("form"));
          }

          return function () {
            var result = [];

            var _iterator21 = dropzone_createForOfIteratorHelper(dropzones, true),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var dropzone = _step21.value; // Create a dropzone unless auto discover has been disabled for specific element

                if (Dropzone.optionsForElement(dropzone) !== false) {
                  result.push(new Dropzone(dropzone));
                } else {
                  result.push(undefined);
                }
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            return result;
          }();
        }; // Some browsers support drag and drog functionality, but not correctly.
        //
        // So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
        // But what to do when browsers *theoretically* support an API, but crash
        // when using it.
        //
        // This is a list of regular expressions tested against navigator.userAgent
        //
        // ** It should only be used on browser that *do* support the API, but
        // incorrectly **


        Dropzone.blockedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
        /opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

        Dropzone.isBrowserSupported = function () {
          var capableBrowser = true;

          if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
            if (!("classList" in document.createElement("a"))) {
              capableBrowser = false;
            } else {
              if (Dropzone.blacklistedBrowsers !== undefined) {
                // Since this has been renamed, this makes sure we don't break older
                // configuration.
                Dropzone.blockedBrowsers = Dropzone.blacklistedBrowsers;
              } // The browser supports the API, but may be blocked.


              var _iterator22 = dropzone_createForOfIteratorHelper(Dropzone.blockedBrowsers, true),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var regex = _step22.value;

                  if (regex.test(navigator.userAgent)) {
                    capableBrowser = false;
                    continue;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }
          } else {
            capableBrowser = false;
          }

          return capableBrowser;
        };

        Dropzone.dataURItoBlob = function (dataURI) {
          // convert base64 to raw binary data held in a string
          // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
          var byteString = atob(dataURI.split(",")[1]); // separate out the mime component

          var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // write the bytes of the string to an ArrayBuffer

          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
            ia[i] = byteString.charCodeAt(i);
          } // write the ArrayBuffer to a blob


          return new Blob([ab], {
            type: mimeString
          });
        }; // Returns an array without the rejected item


        var without = function without(list, rejectedItem) {
          return list.filter(function (item) {
            return item !== rejectedItem;
          }).map(function (item) {
            return item;
          });
        }; // abc-def_ghi -> abcDefGhi


        var camelize = function camelize(str) {
          return str.replace(/[\-_](\w)/g, function (match) {
            return match.charAt(1).toUpperCase();
          });
        }; // Creates an element from string


        Dropzone.createElement = function (string) {
          var div = document.createElement("div");
          div.innerHTML = string;
          return div.childNodes[0];
        }; // Tests if given element is inside (or simply is) the container


        Dropzone.elementInside = function (element, container) {
          if (element === container) {
            return true;
          } // Coffeescript doesn't support do/while loops


          while (element = element.parentNode) {
            if (element === container) {
              return true;
            }
          }

          return false;
        };

        Dropzone.getElement = function (el, name) {
          var element;

          if (typeof el === "string") {
            element = document.querySelector(el);
          } else if (el.nodeType != null) {
            element = el;
          }

          if (element == null) {
            throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
          }

          return element;
        };

        Dropzone.getElements = function (els, name) {
          var el, elements;

          if (els instanceof Array) {
            elements = [];

            try {
              var _iterator23 = dropzone_createForOfIteratorHelper(els, true),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  el = _step23.value;
                  elements.push(this.getElement(el, name));
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            } catch (e) {
              elements = null;
            }
          } else if (typeof els === "string") {
            elements = [];

            var _iterator24 = dropzone_createForOfIteratorHelper(document.querySelectorAll(els), true),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                el = _step24.value;
                elements.push(el);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          } else if (els.nodeType != null) {
            elements = [els];
          }

          if (elements == null || !elements.length) {
            throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
          }

          return elements;
        }; // Asks the user the question and calls accepted or rejected accordingly
        //
        // The default implementation just uses `window.confirm` and then calls the
        // appropriate callback.


        Dropzone.confirm = function (question, accepted, rejected) {
          if (window.confirm(question)) {
            return accepted();
          } else if (rejected != null) {
            return rejected();
          }
        }; // Validates the mime type like this:
        //
        // https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


        Dropzone.isValidFile = function (file, acceptedFiles) {
          if (!acceptedFiles) {
            return true;
          } // If there are no accepted mime types, it's OK


          acceptedFiles = acceptedFiles.split(",");
          var mimeType = file.type;
          var baseMimeType = mimeType.replace(/\/.*$/, "");

          var _iterator25 = dropzone_createForOfIteratorHelper(acceptedFiles, true),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var validType = _step25.value;
              validType = validType.trim();

              if (validType.charAt(0) === ".") {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                  return true;
                }
              } else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                if (baseMimeType === validType.replace(/\/.*$/, "")) {
                  return true;
                }
              } else {
                if (mimeType === validType) {
                  return true;
                }
              }
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          return false;
        }; // Augment jQuery


        if (typeof jQuery !== "undefined" && jQuery !== null) {
          jQuery.fn.dropzone = function (options) {
            return this.each(function () {
              return new Dropzone(this, options);
            });
          };
        } // Dropzone file status codes


        Dropzone.ADDED = "added";
        Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
        // or uploading.

        Dropzone.ACCEPTED = Dropzone.QUEUED;
        Dropzone.UPLOADING = "uploading";
        Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

        Dropzone.CANCELED = "canceled";
        Dropzone.ERROR = "error";
        Dropzone.SUCCESS = "success";
        /*
        
         Bugfix for iOS 6 and 7
         Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
         based on the work of https://github.com/stomita/ios-imagefile-megapixel
        
         */
        // Detecting vertical squash in loaded image.
        // Fixes a bug which squash image vertically while drawing into canvas for some images.
        // This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

        var detectVerticalSquash = function detectVerticalSquash(img) {
          var iw = img.naturalWidth;
          var ih = img.naturalHeight;
          var canvas = document.createElement("canvas");
          canvas.width = 1;
          canvas.height = ih;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
              data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.


          var sy = 0;
          var ey = ih;
          var py = ih;

          while (py > sy) {
            var alpha = data[(py - 1) * 4 + 3];

            if (alpha === 0) {
              ey = py;
            } else {
              sy = py;
            }

            py = ey + sy >> 1;
          }

          var ratio = py / ih;

          if (ratio === 0) {
            return 1;
          } else {
            return ratio;
          }
        }; // A replacement for context.drawImage
        // (args are for source and destination).


        var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
          var vertSquashRatio = detectVerticalSquash(img);
          return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        }; // Based on MinifyJpeg
        // Source: http://www.perry.cz/files/ExifRestorer.js
        // http://elicon.blog57.fc2.com/blog-entry-206.html


        var ExifRestore = /*#__PURE__*/function () {
          function ExifRestore() {
            dropzone_classCallCheck(this, ExifRestore);
          }

          dropzone_createClass(ExifRestore, null, [{
            key: "initClass",
            value: function initClass() {
              this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            }
          }, {
            key: "encode64",
            value: function encode64(input) {
              var output = "";
              var chr1 = undefined;
              var chr2 = undefined;
              var chr3 = "";
              var enc1 = undefined;
              var enc2 = undefined;
              var enc3 = undefined;
              var enc4 = "";
              var i = 0;

              while (true) {
                chr1 = input[i++];
                chr2 = input[i++];
                chr3 = input[i++];
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                  enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                  enc4 = 64;
                }

                output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

                if (!(i < input.length)) {
                  break;
                }
              }

              return output;
            }
          }, {
            key: "restore",
            value: function restore(origFileBase64, resizedFileBase64) {
              if (!origFileBase64.match("data:image/jpeg;base64,")) {
                return resizedFileBase64;
              }

              var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
              var segments = this.slice2Segments(rawImage);
              var image = this.exifManipulation(resizedFileBase64, segments);
              return "data:image/jpeg;base64,".concat(this.encode64(image));
            }
          }, {
            key: "exifManipulation",
            value: function exifManipulation(resizedFileBase64, segments) {
              var exifArray = this.getExifArray(segments);
              var newImageArray = this.insertExif(resizedFileBase64, exifArray);
              var aBuffer = new Uint8Array(newImageArray);
              return aBuffer;
            }
          }, {
            key: "getExifArray",
            value: function getExifArray(segments) {
              var seg = undefined;
              var x = 0;

              while (x < segments.length) {
                seg = segments[x];

                if (seg[0] === 255 & seg[1] === 225) {
                  return seg;
                }

                x++;
              }

              return [];
            }
          }, {
            key: "insertExif",
            value: function insertExif(resizedFileBase64, exifArray) {
              var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
              var buf = this.decode64(imageData);
              var separatePoint = buf.indexOf(255, 3);
              var mae = buf.slice(0, separatePoint);
              var ato = buf.slice(separatePoint);
              var array = mae;
              array = array.concat(exifArray);
              array = array.concat(ato);
              return array;
            }
          }, {
            key: "slice2Segments",
            value: function slice2Segments(rawImageArray) {
              var head = 0;
              var segments = [];

              while (true) {
                var length;

                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
                  break;
                }

                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
                  head += 2;
                } else {
                  length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                  var endPoint = head + length + 2;
                  var seg = rawImageArray.slice(head, endPoint);
                  segments.push(seg);
                  head = endPoint;
                }

                if (head > rawImageArray.length) {
                  break;
                }
              }

              return segments;
            }
          }, {
            key: "decode64",
            value: function decode64(input) {
              var output = "";
              var chr1 = undefined;
              var chr2 = undefined;
              var chr3 = "";
              var enc1 = undefined;
              var enc2 = undefined;
              var enc3 = undefined;
              var enc4 = "";
              var i = 0;
              var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

              var base64test = /[^A-Za-z0-9\+\/\=]/g;

              if (base64test.exec(input)) {
                console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
              }

              input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

              while (true) {
                enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                buf.push(chr1);

                if (enc3 !== 64) {
                  buf.push(chr2);
                }

                if (enc4 !== 64) {
                  buf.push(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

                if (!(i < input.length)) {
                  break;
                }
              }

              return buf;
            }
          }]);
          return ExifRestore;
        }();

        ExifRestore.initClass();
        /*
         * contentloaded.js
         *
         * Author: Diego Perini (diego.perini at gmail.com)
         * Summary: cross-browser wrapper for DOMContentLoaded
         * Updated: 20101020
         * License: MIT
         * Version: 1.2
         *
         * URL:
         * http://javascript.nwbox.com/ContentLoaded/
         * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
         */
        // @win window reference
        // @fn function reference

        var contentLoaded = function contentLoaded(win, fn) {
          var done = false;
          var top = true;
          var doc = win.document;
          var root = doc.documentElement;
          var add = doc.addEventListener ? "addEventListener" : "attachEvent";
          var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
          var pre = doc.addEventListener ? "" : "on";

          var init = function init(e) {
            if (e.type === "readystatechange" && doc.readyState !== "complete") {
              return;
            }

            (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);

            if (!done && (done = true)) {
              return fn.call(win, e.type || e);
            }
          };

          var poll = function poll() {
            try {
              root.doScroll("left");
            } catch (e) {
              setTimeout(poll, 50);
              return;
            }

            return init("poll");
          };

          if (doc.readyState !== "complete") {
            if (doc.createEventObject && root.doScroll) {
              try {
                top = !win.frameElement;
              } catch (error) {}

              if (top) {
                poll();
              }
            }

            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            return win[add](pre + "load", init, false);
          }
        }; // As a single function to be able to write tests.


        Dropzone._autoDiscoverFunction = function () {
          if (Dropzone.autoDiscover) {
            return Dropzone.discover();
          }
        };

        contentLoaded(window, Dropzone._autoDiscoverFunction);

        function __guard__(value, transform) {
          return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
        }

        function __guardMethod__(obj, methodName, transform) {
          if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") {
            return transform(obj, methodName);
          } else {
            return undefined;
          }
        }

        ; // CONCATENATED MODULE: ./tool/dropzone.dist.js
        /// Make Dropzone a global variable.

        window.Dropzone = Dropzone;
        /* harmony default export */

        var dropzone_dist = Dropzone;
      }();
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ 58356:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDropDirective": () => (/* binding */ FileDropDirective),
/* harmony export */   "FileItem": () => (/* binding */ FileItem),
/* harmony export */   "FileLikeObject": () => (/* binding */ FileLikeObject),
/* harmony export */   "FileSelectDirective": () => (/* binding */ FileSelectDirective),
/* harmony export */   "FileUploadModule": () => (/* binding */ FileUploadModule),
/* harmony export */   "FileUploader": () => (/* binding */ FileUploader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} node
 * @return {?}
 */



function isElement(node) {
  return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}

class FileLikeObject {
  /**
   * @param {?} fileOrInput
   */
  constructor(fileOrInput) {
    this.rawFile = fileOrInput;
    /** @type {?} */

    let isInput = isElement(fileOrInput);
    /** @type {?} */

    let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
    /** @type {?} */

    let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
    /** @type {?} */

    let method = '_createFrom' + postfix;

    /** @type {?} */
    this[method](fakePathOrObject);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  _createFromFakePath(path) {
    this.lastModifiedDate = void 0;
    this.size = void 0;
    this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
    this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
  }
  /**
   * @param {?} object
   * @return {?}
   */


  _createFromObject(object) {
    this.size = object.size;
    this.type = object.type;
    this.name = object.name;
  }

}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class FileItem {
  /**
   * @param {?} uploader
   * @param {?} some
   * @param {?} options
   */
  constructor(uploader, some, options) {
    this.url = '/';
    this.headers = [];
    this.withCredentials = true;
    this.formData = [];
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
    this.uploader = uploader;
    this.some = some;
    this.options = options;
    this.file = new FileLikeObject(some);
    this._file = some;

    if (uploader.options) {
      this.method = uploader.options.method || 'POST';
      this.alias = uploader.options.itemAlias || 'file';
    }

    this.url = uploader.options.url;
  }
  /**
   * @return {?}
   */


  upload() {
    try {
      this.uploader.uploadItem(this);
    } catch (e) {
      this.uploader._onCompleteItem(this, '', 0, {});

      this.uploader._onErrorItem(this, '', 0, {});
    }
  }
  /**
   * @return {?}
   */


  cancel() {
    this.uploader.cancelItem(this);
  }
  /**
   * @return {?}
   */


  remove() {
    this.uploader.removeFromQueue(this);
  }
  /**
   * @return {?}
   */


  onBeforeUpload() {
    return void 0;
  }
  /**
   * @param {?} form
   * @return {?}
   */


  onBuildForm(form) {
    return {
      form
    };
  }
  /**
   * @param {?} progress
   * @return {?}
   */


  onProgress(progress) {
    return {
      progress
    };
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onSuccess(response, status, headers) {
    return {
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onError(response, status, headers) {
    return {
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onCancel(response, status, headers) {
    return {
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onComplete(response, status, headers) {
    return {
      response,
      status,
      headers
    };
  }
  /**
   * @return {?}
   */


  _onBeforeUpload() {
    this.isReady = true;
    this.isUploading = true;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
    this.onBeforeUpload();
  }
  /**
   * @param {?} form
   * @return {?}
   */


  _onBuildForm(form) {
    this.onBuildForm(form);
  }
  /**
   * @param {?} progress
   * @return {?}
   */


  _onProgress(progress) {
    this.progress = progress;
    this.onProgress(progress);
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onSuccess(response, status, headers) {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = true;
    this.isCancel = false;
    this.isError = false;
    this.progress = 100;
    this.index = void 0;
    this.onSuccess(response, status, headers);
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onError(response, status, headers) {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = true;
    this.progress = 0;
    this.index = void 0;
    this.onError(response, status, headers);
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onCancel(response, status, headers) {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = true;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
    this.onCancel(response, status, headers);
  }
  /**
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onComplete(response, status, headers) {
    this.onComplete(response, status, headers);

    if (this.uploader.options.removeAfterUpload) {
      this.remove();
    }
  }
  /**
   * @return {?}
   */


  _prepareToUploading() {
    this.index = this.index || ++this.uploader._nextIndex;
    this.isReady = true;
  }

}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class FileType {
  /**
   * @param {?} file
   * @return {?}
   */
  static getMimeClass(file) {
    /** @type {?} */
    let mimeClass = 'application';

    if (this.mime_psd.indexOf(file.type) !== -1) {
      mimeClass = 'image';
    } else if (file.type.match('image.*')) {
      mimeClass = 'image';
    } else if (file.type.match('video.*')) {
      mimeClass = 'video';
    } else if (file.type.match('audio.*')) {
      mimeClass = 'audio';
    } else if (file.type === 'application/pdf') {
      mimeClass = 'pdf';
    } else if (this.mime_compress.indexOf(file.type) !== -1) {
      mimeClass = 'compress';
    } else if (this.mime_doc.indexOf(file.type) !== -1) {
      mimeClass = 'doc';
    } else if (this.mime_xsl.indexOf(file.type) !== -1) {
      mimeClass = 'xls';
    } else if (this.mime_ppt.indexOf(file.type) !== -1) {
      mimeClass = 'ppt';
    }

    if (mimeClass === 'application') {
      mimeClass = this.fileTypeDetection(file.name);
    }

    return mimeClass;
  }
  /**
   * @param {?} inputFilename
   * @return {?}
   */


  static fileTypeDetection(inputFilename) {
    /** @type {?} */
    let types = {
      'jpg': 'image',
      'jpeg': 'image',
      'tif': 'image',
      'psd': 'image',
      'bmp': 'image',
      'png': 'image',
      'nef': 'image',
      'tiff': 'image',
      'cr2': 'image',
      'dwg': 'image',
      'cdr': 'image',
      'ai': 'image',
      'indd': 'image',
      'pin': 'image',
      'cdp': 'image',
      'skp': 'image',
      'stp': 'image',
      '3dm': 'image',
      'mp3': 'audio',
      'wav': 'audio',
      'wma': 'audio',
      'mod': 'audio',
      'm4a': 'audio',
      'compress': 'compress',
      'zip': 'compress',
      'rar': 'compress',
      '7z': 'compress',
      'lz': 'compress',
      'z01': 'compress',
      'bz2': 'compress',
      'gz': 'compress',
      'pdf': 'pdf',
      'xls': 'xls',
      'xlsx': 'xls',
      'ods': 'xls',
      'mp4': 'video',
      'avi': 'video',
      'wmv': 'video',
      'mpg': 'video',
      'mts': 'video',
      'flv': 'video',
      '3gp': 'video',
      'vob': 'video',
      'm4v': 'video',
      'mpeg': 'video',
      'm2ts': 'video',
      'mov': 'video',
      'doc': 'doc',
      'docx': 'doc',
      'eps': 'doc',
      'txt': 'doc',
      'odt': 'doc',
      'rtf': 'doc',
      'ppt': 'ppt',
      'pptx': 'ppt',
      'pps': 'ppt',
      'ppsx': 'ppt',
      'odp': 'ppt'
    };
    /** @type {?} */

    let chunks = inputFilename.split('.');

    if (chunks.length < 2) {
      return 'application';
    }
    /** @type {?} */


    let extension = chunks[chunks.length - 1].toLowerCase();

    if (types[extension] === undefined) {
      return 'application';
    } else {
      return types[extension];
    }
  }

}
/*  MS office  */


FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
/* PSD */

FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
/* Compressed files */

FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @return {?}
 */


function isFile(value) {
  return File && value instanceof File;
}
/**
 * @record
 */


function Headers() {}

if (false) {}
/**
 * @record
 */


function FileUploaderOptions() {}

if (false) {}

class FileUploader {
  /**
   * @param {?} options
   */
  constructor(options) {
    this.isUploading = false;
    this.queue = [];
    this.progress = 0;
    this._nextIndex = 0;
    this.options = {
      autoUpload: false,
      isHTML5: true,
      filters: [],
      removeAfterUpload: false,
      disableMultipart: false,
      formatDataFunction:
      /**
      * @param {?} item
      * @return {?}
      */
      item => item._file,
      formatDataFunctionIsAsync: false
    };
    this.setOptions(options);
    this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * @param {?} options
   * @return {?}
   */


  setOptions(options) {
    this.options = Object.assign(this.options, options);
    this.authToken = this.options.authToken;
    this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
    this.autoUpload = this.options.autoUpload;
    this.options.filters.unshift({
      name: 'queueLimit',
      fn: this._queueLimitFilter
    });

    if (this.options.maxFileSize) {
      this.options.filters.unshift({
        name: 'fileSize',
        fn: this._fileSizeFilter
      });
    }

    if (this.options.allowedFileType) {
      this.options.filters.unshift({
        name: 'fileType',
        fn: this._fileTypeFilter
      });
    }

    if (this.options.allowedMimeType) {
      this.options.filters.unshift({
        name: 'mimeType',
        fn: this._mimeTypeFilter
      });
    }

    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i].url = this.options.url;
    }
  }
  /**
   * @param {?} files
   * @param {?=} options
   * @param {?=} filters
   * @return {?}
   */


  addToQueue(files, options, filters) {
    /** @type {?} */
    let list = [];

    for (let file of files) {
      list.push(file);
    }
    /** @type {?} */


    let arrayOfFilters = this._getFilters(filters);
    /** @type {?} */


    let count = this.queue.length;
    /** @type {?} */

    let addedFileItems = [];
    list.map(
    /**
    * @param {?} some
    * @return {?}
    */
    some => {
      if (!options) {
        options = this.options;
      }
      /** @type {?} */


      let temp = new FileLikeObject(some);

      if (this._isValidFile(temp, arrayOfFilters, options)) {
        /** @type {?} */
        let fileItem = new FileItem(this, some, options);
        addedFileItems.push(fileItem);
        this.queue.push(fileItem);

        this._onAfterAddingFile(fileItem);
      } else {
        /** @type {?} */
        let filter = arrayOfFilters[this._failFilterIndex];

        this._onWhenAddingFileFailed(temp, filter, options);
      }
    });

    if (this.queue.length !== count) {
      this._onAfterAddingAll(addedFileItems);

      this.progress = this._getTotalProgress();
    }

    this._render();

    if (this.options.autoUpload) {
      this.uploadAll();
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */


  removeFromQueue(value) {
    /** @type {?} */
    let index = this.getIndexOfItem(value);
    /** @type {?} */

    let item = this.queue[index];

    if (item.isUploading) {
      item.cancel();
    }

    this.queue.splice(index, 1);
    this.progress = this._getTotalProgress();
  }
  /**
   * @return {?}
   */


  clearQueue() {
    while (this.queue.length) {
      this.queue[0].remove();
    }

    this.progress = 0;
  }
  /**
   * @param {?} value
   * @return {?}
   */


  uploadItem(value) {
    /** @type {?} */
    let index = this.getIndexOfItem(value);
    /** @type {?} */

    let item = this.queue[index];
    /** @type {?} */

    let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

    item._prepareToUploading();

    if (this.isUploading) {
      return;
    }

    this.isUploading = true;

    /** @type {?} */
    this[transport](item);
  }
  /**
   * @param {?} value
   * @return {?}
   */


  cancelItem(value) {
    /** @type {?} */
    let index = this.getIndexOfItem(value);
    /** @type {?} */

    let item = this.queue[index];
    /** @type {?} */

    let prop = this.options.isHTML5 ? item._xhr : item._form;

    if (item && item.isUploading) {
      prop.abort();
    }
  }
  /**
   * @return {?}
   */


  uploadAll() {
    /** @type {?} */
    let items = this.getNotUploadedItems().filter(
    /**
    * @param {?} item
    * @return {?}
    */
    item => !item.isUploading);

    if (!items.length) {
      return;
    }

    items.map(
    /**
    * @param {?} item
    * @return {?}
    */
    item => item._prepareToUploading());
    items[0].upload();
  }
  /**
   * @return {?}
   */


  cancelAll() {
    /** @type {?} */
    let items = this.getNotUploadedItems();
    items.map(
    /**
    * @param {?} item
    * @return {?}
    */
    item => item.cancel());
  }
  /**
   * @param {?} value
   * @return {?}
   */


  isFile(value) {
    return isFile(value);
  }
  /**
   * @param {?} value
   * @return {?}
   */


  isFileLikeObject(value) {
    return value instanceof FileLikeObject;
  }
  /**
   * @param {?} value
   * @return {?}
   */


  getIndexOfItem(value) {
    return typeof value === 'number' ? value : this.queue.indexOf(value);
  }
  /**
   * @return {?}
   */


  getNotUploadedItems() {
    return this.queue.filter(
    /**
    * @param {?} item
    * @return {?}
    */
    item => !item.isUploaded);
  }
  /**
   * @return {?}
   */


  getReadyItems() {
    return this.queue.filter(
    /**
    * @param {?} item
    * @return {?}
    */
    item => item.isReady && !item.isUploading).sort(
    /**
    * @param {?} item1
    * @param {?} item2
    * @return {?}
    */
    (item1, item2) => item1.index - item2.index);
  }
  /**
   * @return {?}
   */


  destroy() {
    return void 0;
  }
  /**
   * @param {?} fileItems
   * @return {?}
   */


  onAfterAddingAll(fileItems) {
    return {
      fileItems
    };
  }
  /**
   * @param {?} fileItem
   * @param {?} form
   * @return {?}
   */


  onBuildItemForm(fileItem, form) {
    return {
      fileItem,
      form
    };
  }
  /**
   * @param {?} fileItem
   * @return {?}
   */


  onAfterAddingFile(fileItem) {
    return {
      fileItem
    };
  }
  /**
   * @param {?} item
   * @param {?} filter
   * @param {?} options
   * @return {?}
   */


  onWhenAddingFileFailed(item, filter, options) {
    return {
      item,
      filter,
      options
    };
  }
  /**
   * @param {?} fileItem
   * @return {?}
   */


  onBeforeUploadItem(fileItem) {
    return {
      fileItem
    };
  }
  /**
   * @param {?} fileItem
   * @param {?} progress
   * @return {?}
   */


  onProgressItem(fileItem, progress) {
    return {
      fileItem,
      progress
    };
  }
  /**
   * @param {?} progress
   * @return {?}
   */


  onProgressAll(progress) {
    return {
      progress
    };
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onSuccessItem(item, response, status, headers) {
    return {
      item,
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onErrorItem(item, response, status, headers) {
    return {
      item,
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onCancelItem(item, response, status, headers) {
    return {
      item,
      response,
      status,
      headers
    };
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  onCompleteItem(item, response, status, headers) {
    return {
      item,
      response,
      status,
      headers
    };
  }
  /**
   * @return {?}
   */


  onCompleteAll() {
    return void 0;
  }
  /**
   * @param {?} item
   * @return {?}
   */


  _mimeTypeFilter(item) {
    return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
  }
  /**
   * @param {?} item
   * @return {?}
   */


  _fileSizeFilter(item) {
    return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
  }
  /**
   * @param {?} item
   * @return {?}
   */


  _fileTypeFilter(item) {
    return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onErrorItem(item, response, status, headers) {
    item._onError(response, status, headers);

    this.onErrorItem(item, response, status, headers);
  }
  /**
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onCompleteItem(item, response, status, headers) {
    item._onComplete(response, status, headers);

    this.onCompleteItem(item, response, status, headers);
    /** @type {?} */

    let nextItem = this.getReadyItems()[0];
    this.isUploading = false;

    if (nextItem) {
      nextItem.upload();
      return;
    }

    this.onCompleteAll();
    this.progress = this._getTotalProgress();

    this._render();
  }
  /**
   * @protected
   * @param {?} parsedHeaders
   * @return {?}
   */


  _headersGetter(parsedHeaders) {
    return (
      /**
      * @param {?} name
      * @return {?}
      */
      name => {
        if (name) {
          return parsedHeaders[name.toLowerCase()] || void 0;
        }

        return parsedHeaders;
      }
    );
  }
  /**
   * @protected
   * @param {?} item
   * @return {?}
   */


  _xhrTransport(item) {
    /** @type {?} */
    let that = this;
    /** @type {?} */

    let xhr = item._xhr = new XMLHttpRequest();
    /** @type {?} */

    let sendable;

    this._onBeforeUploadItem(item);

    if (typeof item._file.size !== 'number') {
      throw new TypeError('The file specified is no longer valid');
    }

    if (!this.options.disableMultipart) {
      sendable = new FormData();

      this._onBuildItemForm(item, sendable);
      /** @type {?} */


      const appendFile =
      /**
      * @return {?}
      */
      () => sendable.append(item.alias, item._file, item.file.name);

      if (!this.options.parametersBeforeFiles) {
        appendFile();
      } // For AWS, Additional Parameters must come BEFORE Files


      if (this.options.additionalParameter !== undefined) {
        Object.keys(this.options.additionalParameter).forEach(
        /**
        * @param {?} key
        * @return {?}
        */
        key => {
          /** @type {?} */
          let paramVal = this.options.additionalParameter[key]; // Allow an additional parameter to include the filename

          if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
            paramVal = paramVal.replace('{{file_name}}', item.file.name);
          }

          sendable.append(key, paramVal);
        });
      }

      if (this.options.parametersBeforeFiles) {
        appendFile();
      }
    } else {
      sendable = this.options.formatDataFunction(item);
    }

    xhr.upload.onprogress =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      /** @type {?} */
      let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

      this._onProgressItem(item, progress);
    };

    xhr.onload =
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      let headers = this._parseHeaders(xhr.getAllResponseHeaders());
      /** @type {?} */


      let response = this._transformResponse(xhr.response, headers);
      /** @type {?} */


      let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
      /** @type {?} */

      let method = '_on' + gist + 'Item';

      /** @type {?} */
      this[method](item, response, xhr.status, headers);

      this._onCompleteItem(item, response, xhr.status, headers);
    };

    xhr.onerror =
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      let headers = this._parseHeaders(xhr.getAllResponseHeaders());
      /** @type {?} */


      let response = this._transformResponse(xhr.response, headers);

      this._onErrorItem(item, response, xhr.status, headers);

      this._onCompleteItem(item, response, xhr.status, headers);
    };

    xhr.onabort =
    /**
    * @return {?}
    */
    () => {
      /** @type {?} */
      let headers = this._parseHeaders(xhr.getAllResponseHeaders());
      /** @type {?} */


      let response = this._transformResponse(xhr.response, headers);

      this._onCancelItem(item, response, xhr.status, headers);

      this._onCompleteItem(item, response, xhr.status, headers);
    };

    xhr.open(item.method, item.url, true);
    xhr.withCredentials = item.withCredentials;

    if (this.options.headers) {
      for (let header of this.options.headers) {
        xhr.setRequestHeader(header.name, header.value);
      }
    }

    if (item.headers.length) {
      for (let header of item.headers) {
        xhr.setRequestHeader(header.name, header.value);
      }
    }

    if (this.authToken) {
      xhr.setRequestHeader(this.authTokenHeader, this.authToken);
    }

    xhr.onreadystatechange =
    /**
    * @return {?}
    */
    function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        that.response.emit(xhr.responseText);
      }
    };

    if (this.options.formatDataFunctionIsAsync) {
      sendable.then(
      /**
      * @param {?} result
      * @return {?}
      */
      result => xhr.send(JSON.stringify(result)));
    } else {
      xhr.send(sendable);
    }

    this._render();
  }
  /**
   * @protected
   * @param {?=} value
   * @return {?}
   */


  _getTotalProgress(value = 0) {
    if (this.options.removeAfterUpload) {
      return value;
    }
    /** @type {?} */


    let notUploaded = this.getNotUploadedItems().length;
    /** @type {?} */

    let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
    /** @type {?} */

    let ratio = 100 / this.queue.length;
    /** @type {?} */

    let current = value * ratio / 100;
    return Math.round(uploaded * ratio + current);
  }
  /**
   * @protected
   * @param {?} filters
   * @return {?}
   */


  _getFilters(filters) {
    if (!filters) {
      return this.options.filters;
    }

    if (Array.isArray(filters)) {
      return filters;
    }

    if (typeof filters === 'string') {
      /** @type {?} */
      let names = filters.match(/[^\s,]+/g);
      return this.options.filters.filter(
      /**
      * @param {?} filter
      * @return {?}
      */
      filter => names.indexOf(filter.name) !== -1);
    }

    return this.options.filters;
  }
  /**
   * @protected
   * @return {?}
   */


  _render() {
    return void 0;
  }
  /**
   * @protected
   * @return {?}
   */


  _queueLimitFilter() {
    return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
  }
  /**
   * @protected
   * @param {?} file
   * @param {?} filters
   * @param {?} options
   * @return {?}
   */


  _isValidFile(file, filters, options) {
    this._failFilterIndex = -1;
    return !filters.length ? true : filters.every(
    /**
    * @param {?} filter
    * @return {?}
    */
    filter => {
      this._failFilterIndex++;
      return filter.fn.call(this, file, options);
    });
  }
  /**
   * @protected
   * @param {?} status
   * @return {?}
   */


  _isSuccessCode(status) {
    return status >= 200 && status < 300 || status === 304;
  }
  /**
   * @protected
   * @param {?} response
   * @param {?} headers
   * @return {?}
   */


  _transformResponse(response, headers) {
    return response;
  }
  /**
   * @protected
   * @param {?} headers
   * @return {?}
   */


  _parseHeaders(headers) {
    /** @type {?} */
    let parsed = {};
    /** @type {?} */

    let key;
    /** @type {?} */

    let val;
    /** @type {?} */

    let i;

    if (!headers) {
      return parsed;
    }

    headers.split('\n').map(
    /**
    * @param {?} line
    * @return {?}
    */
    line => {
      i = line.indexOf(':');
      key = line.slice(0, i).trim().toLowerCase();
      val = line.slice(i + 1).trim();

      if (key) {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });
    return parsed;
  }
  /**
   * @protected
   * @param {?} item
   * @param {?} filter
   * @param {?} options
   * @return {?}
   */


  _onWhenAddingFileFailed(item, filter, options) {
    this.onWhenAddingFileFailed(item, filter, options);
  }
  /**
   * @protected
   * @param {?} item
   * @return {?}
   */


  _onAfterAddingFile(item) {
    this.onAfterAddingFile(item);
  }
  /**
   * @protected
   * @param {?} items
   * @return {?}
   */


  _onAfterAddingAll(items) {
    this.onAfterAddingAll(items);
  }
  /**
   * @protected
   * @param {?} item
   * @return {?}
   */


  _onBeforeUploadItem(item) {
    item._onBeforeUpload();

    this.onBeforeUploadItem(item);
  }
  /**
   * @protected
   * @param {?} item
   * @param {?} form
   * @return {?}
   */


  _onBuildItemForm(item, form) {
    item._onBuildForm(form);

    this.onBuildItemForm(item, form);
  }
  /**
   * @protected
   * @param {?} item
   * @param {?} progress
   * @return {?}
   */


  _onProgressItem(item, progress) {
    /** @type {?} */
    let total = this._getTotalProgress(progress);

    this.progress = total;

    item._onProgress(progress);

    this.onProgressItem(item, progress);
    this.onProgressAll(total);

    this._render();
  }
  /**
   * @protected
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onSuccessItem(item, response, status, headers) {
    item._onSuccess(response, status, headers);

    this.onSuccessItem(item, response, status, headers);
  }
  /**
   * @protected
   * @param {?} item
   * @param {?} response
   * @param {?} status
   * @param {?} headers
   * @return {?}
   */


  _onCancelItem(item, response, status, headers) {
    item._onCancel(response, status, headers);

    this.onCancelItem(item, response, status, headers);
  }

}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class FileSelectDirective {
  /**
   * @param {?} element
   */
  constructor(element) {
    this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */


  getOptions() {
    return this.uploader.options;
  }
  /**
   * @return {?}
   */


  getFilters() {
    return {};
  }
  /**
   * @return {?}
   */


  isEmptyAfterSelection() {
    return !!this.element.nativeElement.attributes.multiple;
  }
  /**
   * @return {?}
   */


  onChange() {
    /** @type {?} */
    let files = this.element.nativeElement.files;
    /** @type {?} */

    let options = this.getOptions();
    /** @type {?} */

    let filters = this.getFilters();
    this.uploader.addToQueue(files, options, filters);
    this.onFileSelected.emit(files);

    if (this.isEmptyAfterSelection()) {
      this.element.nativeElement.value = '';
    }
  }

}

FileSelectDirective.??fac = function FileSelectDirective_Factory(t) {
  return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

FileSelectDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: FileSelectDirective,
  selectors: [["", "ng2FileSelect", ""]],
  hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function FileSelectDirective_change_HostBindingHandler() {
        return ctx.onChange();
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    onFileSelected: "onFileSelected"
  }
});
/** @nocollapse */

FileSelectDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];

FileSelectDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  onFileSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['change']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileSelectDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng2FileSelect]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    onFileSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],

    /**
     * @return {?}
     */
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['change']
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class FileDropDirective {
  /**
   * @param {?} element
   */
  constructor(element) {
    this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.element = element;
  }
  /**
   * @return {?}
   */


  getOptions() {
    return this.uploader.options;
  }
  /**
   * @return {?}
   */


  getFilters() {
    return {};
  }
  /**
   * @param {?} event
   * @return {?}
   */


  onDrop(event) {
    /** @type {?} */
    let transfer = this._getTransfer(event);

    if (!transfer) {
      return;
    }
    /** @type {?} */


    let options = this.getOptions();
    /** @type {?} */

    let filters = this.getFilters();

    this._preventAndStop(event);

    this.uploader.addToQueue(transfer.files, options, filters);
    this.fileOver.emit(false);
    this.onFileDrop.emit(transfer.files);
  }
  /**
   * @param {?} event
   * @return {?}
   */


  onDragOver(event) {
    /** @type {?} */
    let transfer = this._getTransfer(event);

    if (!this._haveFiles(transfer.types)) {
      return;
    }

    transfer.dropEffect = 'copy';

    this._preventAndStop(event);

    this.fileOver.emit(true);
  }
  /**
   * @param {?} event
   * @return {?}
   */


  onDragLeave(event) {
    if (
    /** @type {?} */
    this.element) {
      if (event.currentTarget ===
      /** @type {?} */
      this.element[0]) {
        return;
      }
    }

    this._preventAndStop(event);

    this.fileOver.emit(false);
  }
  /**
   * @protected
   * @param {?} event
   * @return {?}
   */


  _getTransfer(event) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
  }
  /**
   * @protected
   * @param {?} event
   * @return {?}
   */


  _preventAndStop(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * @protected
   * @param {?} types
   * @return {?}
   */


  _haveFiles(types) {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    } else if (types.contains) {
      return types.contains('Files');
    } else {
      return false;
    }
  }

}

FileDropDirective.??fac = function FileDropDirective_Factory(t) {
  return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

FileDropDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: FileDropDirective,
  selectors: [["", "ng2FileDrop", ""]],
  hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
        return ctx.onDragLeave($event);
      });
    }
  },
  inputs: {
    uploader: "uploader"
  },
  outputs: {
    fileOver: "fileOver",
    onFileDrop: "onFileDrop"
  }
});
/** @nocollapse */

FileDropDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];

FileDropDirective.propDecorators = {
  uploader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  fileOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onFileDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['drop', ['$event']]
  }],
  onDragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['dragover', ['$event']]
  }],
  onDragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['dragleave', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileDropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng2FileDrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    fileOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFileDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['drop', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dragover', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dragleave', ['$event']]
    }],
    uploader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class FileUploadModule {}

FileUploadModule.??fac = function FileUploadModule_Factory(t) {
  return new (t || FileUploadModule)();
};

FileUploadModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
  type: FileUploadModule
});
FileUploadModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileUploadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [FileDropDirective, FileSelectDirective],
      exports: [FileDropDirective, FileSelectDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FileUploadModule, {
    declarations: function () {
      return [FileDropDirective, FileSelectDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
    },
    exports: function () {
      return [FileDropDirective, FileSelectDirective];
    }
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ 15375:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "PERFECT_SCROLLBAR_CONFIG": () => (/* binding */ PERFECT_SCROLLBAR_CONFIG),
/* harmony export */   "PerfectScrollbarComponent": () => (/* binding */ PerfectScrollbarComponent),
/* harmony export */   "PerfectScrollbarConfig": () => (/* binding */ PerfectScrollbarConfig),
/* harmony export */   "PerfectScrollbarDirective": () => (/* binding */ PerfectScrollbarDirective),
/* harmony export */   "PerfectScrollbarModule": () => (/* binding */ PerfectScrollbarModule),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "??a": () => (/* binding */ ForceNativeScrollDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 30998);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 73);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 48623);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ 79674);









function PerfectScrollbarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
  }
}

const _c0 = ["*"];
const PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('PERFECT_SCROLLBAR_CONFIG');

class Geometry {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

}

const PerfectScrollbarEvents = ['psScrollY', 'psScrollX', 'psScrollUp', 'psScrollDown', 'psScrollLeft', 'psScrollRight', 'psYReachEnd', 'psYReachStart', 'psXReachEnd', 'psXReachStart'];

class PerfectScrollbarConfig {
  constructor(config = {}) {
    this.assign(config);
  }

  assign(config = {}) {
    for (const key in config) {
      this[key] = config[key];
    }
  }

}

class PerfectScrollbarDirective {
  constructor(zone, differs, elementRef, platformId, defaults) {
    this.zone = zone;
    this.differs = differs;
    this.elementRef = elementRef;
    this.platformId = platformId;
    this.defaults = defaults;
    this.instance = null;
    this.ro = null;
    this.timeout = null;
    this.animation = null;
    this.configDiff = null;
    this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.disabled = false;
    this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    if (!this.disabled && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      const config = new PerfectScrollbarConfig(this.defaults);
      config.assign(this.config); // Custom configuration

      this.zone.runOutsideAngular(() => {
        this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this.elementRef.nativeElement, config);
      });

      if (!this.configDiff) {
        this.configDiff = this.differs.find(this.config || {}).create();
        this.configDiff.diff(this.config || {});
      }

      this.zone.runOutsideAngular(() => {
        this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](() => {
          this.update();
        });

        if (this.elementRef.nativeElement.children[0]) {
          this.ro.observe(this.elementRef.nativeElement.children[0]);
        }

        this.ro.observe(this.elementRef.nativeElement);
      });
      this.zone.runOutsideAngular(() => {
        PerfectScrollbarEvents.forEach(eventName => {
          const eventType = eventName.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);
          (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.elementRef.nativeElement, eventType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy)).subscribe(event => {
            this[eventName].emit(event);
          });
        });
      });
    }
  }

  ngOnDestroy() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      this.ngDestroy.next();
      this.ngDestroy.complete();

      if (this.ro) {
        this.ro.disconnect();
      }

      if (this.timeout && typeof window !== 'undefined') {
        window.clearTimeout(this.timeout);
      }

      this.zone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
        }
      });
      this.instance = null;
    }
  }

  ngDoCheck() {
    if (!this.disabled && this.configDiff && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      const changes = this.configDiff.diff(this.config || {});

      if (changes) {
        this.ngOnDestroy();
        this.ngOnInit();
      }
    }
  }

  ngOnChanges(changes) {
    if (changes['disabled'] && !changes['disabled'].isFirstChange() && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
        if (changes['disabled'].currentValue === true) {
          this.ngOnDestroy();
        } else if (changes['disabled'].currentValue === false) {
          this.ngOnInit();
        }
      }
    }
  }

  ps() {
    return this.instance;
  }

  update() {
    if (typeof window !== 'undefined') {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout(() => {
        if (!this.disabled && this.configDiff) {
          try {
            this.zone.runOutsideAngular(() => {
              if (this.instance) {
                this.instance.update();
              }
            });
          } catch (error) {// Update can be finished after destroy so catch errors
          }
        }
      }, 0);
    }
  }

  geometry(prefix = 'scroll') {
    return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
  }

  position(absolute = false) {
    if (!absolute && this.instance) {
      return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
    } else {
      return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
    }
  }

  scrollable(direction = 'any') {
    const element = this.elementRef.nativeElement;

    if (direction === 'any') {
      return element.classList.contains('ps--active-x') || element.classList.contains('ps--active-y');
    } else if (direction === 'both') {
      return element.classList.contains('ps--active-x') && element.classList.contains('ps--active-y');
    } else {
      return element.classList.contains('ps--active-' + direction);
    }
  }

  scrollTo(x, y, speed) {
    if (!this.disabled) {
      if (y == null && speed == null) {
        this.animateScrolling('scrollTop', x, speed);
      } else {
        if (x != null) {
          this.animateScrolling('scrollLeft', x, speed);
        }

        if (y != null) {
          this.animateScrolling('scrollTop', y, speed);
        }
      }
    }
  }

  scrollToX(x, speed) {
    this.animateScrolling('scrollLeft', x, speed);
  }

  scrollToY(y, speed) {
    this.animateScrolling('scrollTop', y, speed);
  }

  scrollToTop(offset, speed) {
    this.animateScrolling('scrollTop', offset || 0, speed);
  }

  scrollToLeft(offset, speed) {
    this.animateScrolling('scrollLeft', offset || 0, speed);
  }

  scrollToRight(offset, speed) {
    const left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
    this.animateScrolling('scrollLeft', left - (offset || 0), speed);
  }

  scrollToBottom(offset, speed) {
    const top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
    this.animateScrolling('scrollTop', top - (offset || 0), speed);
  }

  scrollToElement(element, offset, speed) {
    if (typeof element === 'string') {
      element = this.elementRef.nativeElement.querySelector(element);
    }

    if (element) {
      const elementPos = element.getBoundingClientRect();
      const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

      if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
        const currentPos = this.elementRef.nativeElement['scrollLeft'];
        const position = elementPos.left - scrollerPos.left + currentPos;
        this.animateScrolling('scrollLeft', position + (offset || 0), speed);
      }

      if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
        const currentPos = this.elementRef.nativeElement['scrollTop'];
        const position = elementPos.top - scrollerPos.top + currentPos;
        this.animateScrolling('scrollTop', position + (offset || 0), speed);
      }
    }
  }

  animateScrolling(target, value, speed) {
    if (this.animation) {
      window.cancelAnimationFrame(this.animation);
      this.animation = null;
    }

    if (!speed || typeof window === 'undefined') {
      this.elementRef.nativeElement[target] = value;
    } else if (value !== this.elementRef.nativeElement[target]) {
      let newValue = 0;
      let scrollCount = 0;
      let oldTimestamp = performance.now();
      let oldValue = this.elementRef.nativeElement[target];
      const cosParameter = (oldValue - value) / 2;

      const step = newTimestamp => {
        scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
        newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount)); // Only continue animation if scroll position has not changed

        if (this.elementRef.nativeElement[target] === oldValue) {
          if (scrollCount >= Math.PI) {
            this.animateScrolling(target, value, 0);
          } else {
            this.elementRef.nativeElement[target] = newValue; // On a zoomed out page the resulting offset may differ

            oldValue = this.elementRef.nativeElement[target];
            oldTimestamp = newTimestamp;
            this.animation = window.requestAnimationFrame(step);
          }
        }
      };

      window.requestAnimationFrame(step);
    }
  }

}

PerfectScrollbarDirective.??fac = function PerfectScrollbarDirective_Factory(t) {
  return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](PERFECT_SCROLLBAR_CONFIG, 8));
};

PerfectScrollbarDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({
  type: PerfectScrollbarDirective,
  selectors: [["", "perfectScrollbar", ""]],
  inputs: {
    disabled: "disabled",
    config: ["perfectScrollbar", "config"]
  },
  outputs: {
    psScrollY: "psScrollY",
    psScrollX: "psScrollX",
    psScrollUp: "psScrollUp",
    psScrollDown: "psScrollDown",
    psScrollLeft: "psScrollLeft",
    psScrollRight: "psScrollRight",
    psYReachEnd: "psYReachEnd",
    psYReachStart: "psYReachStart",
    psXReachEnd: "psXReachEnd",
    psXReachStart: "psXReachStart"
  },
  exportAs: ["ngxPerfectScrollbar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]]
});

PerfectScrollbarDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
}, {
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
    args: [PERFECT_SCROLLBAR_CONFIG]
  }]
}];

PerfectScrollbarDirective.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
    args: ['perfectScrollbar']
  }],
  psScrollY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollRight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psYReachEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psYReachStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psXReachEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psXReachStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[perfectScrollbar]',
      exportAs: 'ngxPerfectScrollbar'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [PERFECT_SCROLLBAR_CONFIG]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    psScrollY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psYReachEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psYReachStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psXReachEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psXReachStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['perfectScrollbar']
    }]
  });
})();

class PerfectScrollbarComponent {
  constructor(zone, cdRef, platformId) {
    this.zone = zone;
    this.cdRef = cdRef;
    this.platformId = platformId;
    this.states = {};
    this.indicatorX = false;
    this.indicatorY = false;
    this.interaction = false;
    this.scrollPositionX = 0;
    this.scrollPositionY = 0;
    this.scrollDirectionX = 0;
    this.scrollDirectionY = 0;
    this.usePropagationX = false;
    this.usePropagationY = false;
    this.allowPropagationX = false;
    this.allowPropagationY = false;
    this.stateTimeout = null;
    this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.disabled = false;
    this.usePSClass = true;
    this.autoPropagation = false;
    this.scrollIndicators = false;
    this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      this.stateUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)((a, b) => a === b && !this.stateTimeout)).subscribe(state => {
        if (this.stateTimeout && typeof window !== 'undefined') {
          window.clearTimeout(this.stateTimeout);
          this.stateTimeout = null;
        }

        if (state === 'x' || state === 'y') {
          this.interaction = false;

          if (state === 'x') {
            this.indicatorX = false;
            this.states.left = false;
            this.states.right = false;

            if (this.autoPropagation && this.usePropagationX) {
              this.allowPropagationX = false;
            }
          } else if (state === 'y') {
            this.indicatorY = false;
            this.states.top = false;
            this.states.bottom = false;

            if (this.autoPropagation && this.usePropagationY) {
              this.allowPropagationY = false;
            }
          }
        } else {
          if (state === 'left' || state === 'right') {
            this.states.left = false;
            this.states.right = false;
            this.states[state] = true;

            if (this.autoPropagation && this.usePropagationX) {
              this.indicatorX = true;
            }
          } else if (state === 'top' || state === 'bottom') {
            this.states.top = false;
            this.states.bottom = false;
            this.states[state] = true;

            if (this.autoPropagation && this.usePropagationY) {
              this.indicatorY = true;
            }
          }

          if (this.autoPropagation && typeof window !== 'undefined') {
            this.stateTimeout = window.setTimeout(() => {
              this.indicatorX = false;
              this.indicatorY = false;
              this.stateTimeout = null;

              if (this.interaction && (this.states.left || this.states.right)) {
                this.allowPropagationX = true;
              }

              if (this.interaction && (this.states.top || this.states.bottom)) {
                this.allowPropagationY = true;
              }

              this.cdRef.markForCheck();
            }, 500);
          }
        }

        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
      });
      this.zone.runOutsideAngular(() => {
        if (this.directiveRef) {
          const element = this.directiveRef.elementRef.nativeElement;
          (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'wheel').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy)).subscribe(event => {
            if (!this.disabled && this.autoPropagation) {
              const scrollDeltaX = event.deltaX;
              const scrollDeltaY = event.deltaY;
              this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
            }
          });
          (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'touchmove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy)).subscribe(event => {
            if (!this.disabled && this.autoPropagation) {
              const scrollPositionX = event.touches[0].clientX;
              const scrollPositionY = event.touches[0].clientY;
              const scrollDeltaX = scrollPositionX - this.scrollPositionX;
              const scrollDeltaY = scrollPositionY - this.scrollPositionY;
              this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
              this.scrollPositionX = scrollPositionX;
              this.scrollPositionY = scrollPositionY;
            }
          });
          (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-x').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('x')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-y').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('y')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-end').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('right')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-end').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('bottom')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-start').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('left')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-start').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mapTo)('top'))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy)).subscribe(state => {
            if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
              this.stateUpdate.next(state);
            }
          });
        }
      });
      window.setTimeout(() => {
        PerfectScrollbarEvents.forEach(eventName => {
          if (this.directiveRef) {
            this.directiveRef[eventName] = this[eventName];
          }
        });
      }, 0);
    }
  }

  ngOnDestroy() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      this.ngDestroy.next();
      this.ngDestroy.unsubscribe();

      if (this.stateTimeout && typeof window !== 'undefined') {
        window.clearTimeout(this.stateTimeout);
      }
    }
  }

  ngDoCheck() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      if (!this.disabled && this.autoPropagation && this.directiveRef) {
        const element = this.directiveRef.elementRef.nativeElement;
        this.usePropagationX = element.classList.contains('ps--active-x');
        this.usePropagationY = element.classList.contains('ps--active-y');
      }
    }
  }

  checkPropagation(event, deltaX, deltaY) {
    this.interaction = true;
    const scrollDirectionX = deltaX < 0 ? -1 : 1;
    const scrollDirectionY = deltaY < 0 ? -1 : 1;

    if (this.usePropagationX && this.usePropagationY || this.usePropagationX && (!this.allowPropagationX || this.scrollDirectionX !== scrollDirectionX) || this.usePropagationY && (!this.allowPropagationY || this.scrollDirectionY !== scrollDirectionY)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!!deltaX) {
      this.scrollDirectionX = scrollDirectionX;
    }

    if (!!deltaY) {
      this.scrollDirectionY = scrollDirectionY;
    }

    this.stateUpdate.next('interaction');
    this.cdRef.detectChanges();
  }

}

PerfectScrollbarComponent.??fac = function PerfectScrollbarComponent_Factory(t) {
  return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
};

PerfectScrollbarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: PerfectScrollbarComponent,
  selectors: [["perfect-scrollbar"]],
  viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](PerfectScrollbarDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    }
  },
  inputs: {
    disabled: "disabled",
    usePSClass: "usePSClass",
    autoPropagation: "autoPropagation",
    scrollIndicators: "scrollIndicators",
    config: "config"
  },
  outputs: {
    psScrollY: "psScrollY",
    psScrollX: "psScrollX",
    psScrollUp: "psScrollUp",
    psScrollDown: "psScrollDown",
    psScrollLeft: "psScrollLeft",
    psScrollRight: "psScrollRight",
    psYReachEnd: "psYReachEnd",
    psYReachStart: "psYReachStart",
    psXReachEnd: "psXReachEnd",
    psXReachStart: "psXReachStart"
  },
  exportAs: ["ngxPerfectScrollbar"],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 5,
  consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]],
  template: function PerfectScrollbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps", ctx.usePSClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.scrollIndicators);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, PerfectScrollbarDirective],
  styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"],
  encapsulation: 2
});

PerfectScrollbarComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
}, {
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
  }]
}];

PerfectScrollbarComponent.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  usePSClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  autoPropagation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
    args: ['class.ps-show-limits']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  scrollIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
    args: ['class.ps-show-active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  psScrollY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollUp: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psScrollRight: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psYReachEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psYReachStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psXReachEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  psXReachStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  directiveRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
    args: [PerfectScrollbarDirective, {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'perfect-scrollbar',
      exportAs: 'ngxPerfectScrollbar',
      template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    usePSClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    autoPropagation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['class.ps-show-limits']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scrollIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['class.ps-show-active']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    psScrollY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psScrollRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psYReachEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psYReachStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psXReachEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    psXReachStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    directiveRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [PerfectScrollbarDirective, {
        static: true
      }]
    }]
  });
})();

class ForceNativeScrollDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    ['ps__child', 'ps__child--consume'].forEach(className => {
      this.renderer.addClass(el === null || el === void 0 ? void 0 : el.nativeElement, className);
    });
  }

}

ForceNativeScrollDirective.??fac = function ForceNativeScrollDirective_Factory(t) {
  return new (t || ForceNativeScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};

ForceNativeScrollDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({
  type: ForceNativeScrollDirective,
  selectors: [["", "forceNativeScrolling", ""]]
});

ForceNativeScrollDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
}];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](ForceNativeScrollDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[forceNativeScrolling]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }];
  }, null);
})();

class PerfectScrollbarModule {}

PerfectScrollbarModule.??fac = function PerfectScrollbarModule_Factory(t) {
  return new (t || PerfectScrollbarModule)();
};

PerfectScrollbarModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
  type: PerfectScrollbarModule
});
PerfectScrollbarModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](PerfectScrollbarModule, {
    declarations: function () {
      return [PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule];
    },
    exports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 48623:
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];

    if (typeof val === 'number') {
      val = val + "px";
    }

    element.style[key] = val;
  }

  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) {
    return matches(child, selector);
  });
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) {
      return "ps__thumb-" + x;
    },
    rail: function (x) {
      return "ps__rail-" + x;
    },
    consuming: 'ps__child--consume'
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) {
      return "ps--active-" + x;
    },
    scrolling: function (x) {
      return "ps--scrolling-" + x;
    }
  }
};
/*
 * Helper methods
 */

var scrollingClassTimeout = {
  x: null,
  y: null
};

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(function () {
    return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
  }, i.settings.scrollingThreshold);
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = {
  isEmpty: {
    configurable: true
  }
};

EventElement.prototype.bind = function bind(eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }

  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind(eventName, target) {
  var this$1 = this;
  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }

    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll() {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
  var this$1 = this;
  return Object.keys(this.handlers).every(function (key) {
    return this$1.handlers[key].length === 0;
  });
};

Object.defineProperties(EventElement.prototype, prototypeAccessors);

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement(element) {
  var ee = this.eventElements.filter(function (ee) {
    return ee.element === element;
  })[0];

  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }

  return ee;
};

EventManager.prototype.bind = function bind(element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind(element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll() {
  this.eventElements.forEach(function (e) {
    return e.unbindAll();
  });
  this.eventElements = [];
};

EventManager.prototype.once = function once(element, eventName, handler) {
  var ee = this.eventElement(element);

  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };

  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var fields;

  if (axis === 'top') {
    fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
  } else if (axis === 'left') {
    fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var element = i.element; // reset reach

  i.reach[y] = null; // 1 for subpixel rounding

  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  } // 1 for subpixel rounding


  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent("ps-scroll-" + y));

    if (diff < 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + up));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + down));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
}

function outerWidth(element) {
  var styles = get(element);
  return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
}

var env = {
  isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
  supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();
  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarXRail);
  }

  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarYRail);
  }

  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }

  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }

  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }

  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }

  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }

  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = {
    width: i.railXWidth
  };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }

  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }

  set(i.scrollbarXRail, xRailOffset);
  var yRailOffset = {
    top: roundedScrollTop,
    height: i.railYHeight
  };

  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }

  set(i.scrollbarYRail, yRailOffset);
  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth
  });
}

function clickRail(i) {
  var element = i.element;
  i.event.bind(i.scrollbarY, 'mousedown', function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;
    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);
    e.stopPropagation();
  });
  i.event.bind(i.scrollbarX, 'mousedown', function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);
    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
  bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
}

function bindMouseScrollHandler(i, ref) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];
  var element = i.element;
  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }

    element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);
    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];

    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }

    startingMousePageY = e[pageY];
    scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);
    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () {
    return matches(element, ':hover');
  };

  var scrollbarFocused = function () {
    return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
  };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);

    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }

      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;

    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }

      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }

    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }

      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37:
        // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }

        break;

      case 38:
        // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }

        break;

      case 39:
        // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }

        break;

      case 40:
        // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }

        break;

      case 32:
        // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }

        break;

      case 33:
        // page up
        deltaY = i.containerHeight;
        break;

      case 34:
        // page down
        deltaY = -i.containerHeight;
        break;

      case 36:
        // home
        deltaY = i.contentHeight;
        break;

      case 35:
        // end
        deltaY = -i.contentHeight;
        break;

      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }

    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
    var hitsBound; // pick axis with primary direction

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY
    /* NaN checks */
    ) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }

    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor); // if deltaY && vertical scrollable

      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      } // if deltaX && horizontal scrollable


      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;

    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }

      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }

      shouldPrevent = true;
    }

    updateGeometry(i);
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page
      if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page
      if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;
    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }

    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }

    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }

    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);
    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;
    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor); // if deltaY && vertical scrollable

      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      } // if deltaX && horizontal scrollable


      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);
      var currentOffset = {
        pageX: touch.pageX,
        pageY: touch.pageY
      };
      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;
      var currentTime = new Date().getTime();
      var timeGap = currentTime - startTime;

      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }

  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);
        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () {
  return {
    handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1000,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if (userSettings === void 0) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;
  element.classList.add(cls.main);
  this.settings = defaultSettings();

  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () {
    return element.classList.add(cls.state.focus);
  };

  var blur = function () {
    return element.classList.remove(cls.state.focus);
  };

  this.isRtl = get(element).direction === 'rtl';

  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }

  this.isNegativeScroll = function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  }();

  this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;
  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }

  this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

  set(this.scrollbarXRail, {
    display: 'block'
  });
  this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, {
    display: ''
  });
  this.railXWidth = null;
  this.railXRatio = null;
  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);

  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }

  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, {
    display: 'block'
  });
  this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, {
    display: ''
  });
  this.railYHeight = null;
  this.railYRatio = null;
  this.reach = {
    x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
    y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
  };
  this.isAlive = true;
  this.settings.handlers.forEach(function (handlerName) {
    return handlers[handlerName](this$1);
  });
  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

  this.lastScrollLeft = element.scrollLeft; // for onScroll only

  this.event.bind(this.element, 'scroll', function (e) {
    return this$1.onScroll(e);
  });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update() {
  if (!this.isAlive) {
    return;
  } // Recalcuate negative scrollLeft adjustment


  this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

  set(this.scrollbarXRail, {
    display: 'block'
  });
  set(this.scrollbarYRail, {
    display: 'block'
  });
  this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

  set(this.scrollbarXRail, {
    display: 'none'
  });
  set(this.scrollbarYRail, {
    display: 'none'
  });
  updateGeometry(this);
  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);
  set(this.scrollbarXRail, {
    display: ''
  });
  set(this.scrollbarYRail, {
    display: ''
  });
};

PerfectScrollbar.prototype.onScroll = function onScroll(e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy() {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses(); // unset elements

  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;
  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
  this.element.className = this.element.className.split(' ').filter(function (name) {
    return !name.match(/^ps([-_].+|)$/);
  }).join(' ');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfectScrollbar);

/***/ }),

/***/ 79674:
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */

/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */


  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }

  return (
    /** @class */
    function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */

      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */


      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);

        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);

        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */


      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */


      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }

        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };

      return class_1;
    }()
  );
}();
/**
 * Detects whether window and document objects are available in current environment.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }

  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  } // eslint-disable-next-line no-new-func


  return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */


var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }

  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}(); // Defines minimum timeout before adding a trailing call.


var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */

  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }

    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */


  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */


  function proxy() {
    var timeStamp = Date.now();

    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      } // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.


      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }

    lastCallTime = timeStamp;
  }

  return proxy;
} // Minimum delay before invoking the update of observers.


var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */

var ResizeObserverController =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */

    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */

    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    } // Add listeners if they haven't been added yet.


    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */


  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

    if (~index) {
      observers.splice(index, 1);
    } // Remove listeners if controller has no connected observers.


    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */


  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.

    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */


  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    }); // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.

    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    } // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.


    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */


  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */


  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */


var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }

  return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */


var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
  // provided element.

  return ownerGlobal || global$1;
}; // Placeholder of an empty content rectangle.


var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */


function getBordersSize(styles) {
  var positions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }

  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */


function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};

  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }

  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */


function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */


function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.

  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }

  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.

  var width = toFloat(styles.width),
      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).

  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }

    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  } // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.


  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  } // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens


  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */


function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }

  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */


function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */


function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */


var ResizeObservation =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */

    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */

    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */


  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };

  return ResizeObservation;
}();

var ResizeObserverEntry =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.

    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }

  return ResizeObserverEntry;
}();

var ResizeObserverSPI =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */

    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is already being observed.

    if (observations.has(target)) {
      return;
    }

    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this); // Force the update of observations.

    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is not being observed.

    if (!observations.has(target)) {
      return;
    }

    observations.delete(target);

    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;

    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }

    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */


  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  return ResizeObserverSPI;
}(); // Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.


var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */

var ResizeObserver =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }

    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }

  return ResizeObserver;
}(); // Expose public methods of ResizeObserver.


['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;

    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }

  return ResizeObserver;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ 897:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-dropzone-wrapper/fesm2015/ngx-dropzone-wrapper.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DROPZONE_CONFIG": () => (/* binding */ DROPZONE_CONFIG),
/* harmony export */   "DropzoneComponent": () => (/* binding */ DropzoneComponent),
/* harmony export */   "DropzoneConfig": () => (/* binding */ DropzoneConfig),
/* harmony export */   "DropzoneDirective": () => (/* binding */ DropzoneDirective),
/* harmony export */   "DropzoneModule": () => (/* binding */ DropzoneModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ 14132);






function DropzoneComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 4);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-image", ctx_r0.getPlaceholder());
  }
}

const _c0 = ["*"];
const DROPZONE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DROPZONE_CONFIG');
const DropzoneEvents = ['error', 'success', 'sending', 'canceled', 'complete', 'processing', 'drop', 'dragStart', 'dragEnd', 'dragEnter', 'dragOver', 'dragLeave', 'thumbnail', 'addedFile', 'addedFiles', 'removedFile', 'uploadProgress', 'maxFilesReached', 'maxFilesExceeded', 'errorMultiple', 'successMultiple', 'sendingMultiple', 'canceledMultiple', 'completeMultiple', 'processingMultiple', 'reset', 'queueComplete', 'totalUploadProgress'];

class DropzoneConfig {
  constructor(config = {}) {
    this.assign(config);
  }

  assign(config = {}, target) {
    target = target || this;

    for (const key in config) {
      if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' && !(config[key] instanceof HTMLElement)) {
        target[key] = {};
        this.assign(config[key], target[key]);
      } else {
        target[key] = config[key];
      }
    }
  }

}

class DropzoneDirective {
  constructor(zone, renderer, elementRef, differs, platformId, defaults) {
    this.zone = zone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.differs = differs;
    this.platformId = platformId;
    this.defaults = defaults;
    this.configDiff = null;
    this.disabled = false;
    this.DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ADDEDFILES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ERRORMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    const dz = dropzone__WEBPACK_IMPORTED_MODULE_0__;
    dz.autoDiscover = false;
  }

  ngOnInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      return;
    }

    const params = new DropzoneConfig(this.defaults);
    params.assign(this.config); // Custom configuration

    this.renderer.addClass(this.elementRef.nativeElement, params.maxFiles === 1 ? 'dz-single' : 'dz-multiple');
    this.renderer.removeClass(this.elementRef.nativeElement, params.maxFiles === 1 ? 'dz-multiple' : 'dz-single');
    this.zone.runOutsideAngular(() => {
      this.instance = new dropzone__WEBPACK_IMPORTED_MODULE_0__(this.elementRef.nativeElement, params);
    });

    if (this.disabled) {
      this.instance.disable();
    }

    if (this.DZ_INIT.observers.length) {
      this.zone.run(() => {
        this.DZ_INIT.emit(this.instance);
      });
    } // Add auto reset handling for events


    this.instance.on('success', () => {
      if (params.autoReset != null) {
        setTimeout(() => this.reset(), params.autoReset);
      }
    });
    this.instance.on('error', () => {
      if (params.errorReset != null) {
        setTimeout(() => this.reset(), params.errorReset);
      }
    });
    this.instance.on('canceled', () => {
      if (params.cancelReset != null) {
        setTimeout(() => this.reset(), params.cancelReset);
      }
    }); // Add native Dropzone event handling

    DropzoneEvents.forEach(eventName => {
      this.instance.on(eventName.toLowerCase(), (...args) => {
        args = args.length === 1 ? args[0] : args;
        const output = `DZ_${eventName.toUpperCase()}`;
        const emitter = this[output];

        if (emitter.observers.length > 0) {
          this.zone.run(() => {
            emitter.emit(args);
          });
        }
      });
    });

    if (!this.configDiff) {
      this.configDiff = this.differs.find(this.config || {}).create();
      this.configDiff.diff(this.config || {});
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.destroy();
      });
      this.instance = null;
    }
  }

  ngDoCheck() {
    if (!this.disabled && this.configDiff) {
      const changes = this.configDiff.diff(this.config || {});

      if (changes && this.instance) {
        this.ngOnDestroy();
        this.ngOnInit();
      }
    }
  }

  ngOnChanges(changes) {
    if (this.instance && changes['disabled']) {
      if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
        if (changes['disabled'].currentValue === false) {
          this.zone.runOutsideAngular(() => {
            this.instance.enable();
          });
        } else if (changes['disabled'].currentValue === true) {
          this.zone.runOutsideAngular(() => {
            this.instance.disable();
          });
        }
      }
    }
  }

  dropzone() {
    return this.instance;
  }

  reset(cancel) {
    if (this.instance) {
      this.zone.runOutsideAngular(() => {
        this.instance.removeAllFiles(cancel);
      });
    }
  }

}

DropzoneDirective.??fac = function DropzoneDirective_Factory(t) {
  return new (t || DropzoneDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](DROPZONE_CONFIG, 8));
};

DropzoneDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
  type: DropzoneDirective,
  selectors: [["", "dropzone", ""]],
  inputs: {
    disabled: "disabled",
    config: ["dropzone", "config"]
  },
  outputs: {
    DZ_INIT: "init",
    DZ_ERROR: "error",
    DZ_SUCCESS: "success",
    DZ_SENDING: "sending",
    DZ_CANCELED: "canceled",
    DZ_COMPLETE: "complete",
    DZ_PROCESSING: "processing",
    DZ_DROP: "drop",
    DZ_DRAGSTART: "dragStart",
    DZ_DRAGEND: "dragEnd",
    DZ_DRAGENTER: "dragEnter",
    DZ_DRAGOVER: "dragOver",
    DZ_DRAGLEAVE: "dragLeave",
    DZ_THUMBNAIL: "thumbnail",
    DZ_ADDEDFILE: "addedFile",
    DZ_ADDEDFILES: "addedFiles",
    DZ_REMOVEDFILE: "removedFile",
    DZ_UPLOADPROGRESS: "uploadProgress",
    DZ_MAXFILESREACHED: "maxFilesReached",
    DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
    DZ_ERRORMULTIPLE: "errorMultiple",
    DZ_SUCCESSMULTIPLE: "successMultiple",
    DZ_SENDINGMULTIPLE: "sendingMultiple",
    DZ_CANCELEDMULTIPLE: "canceledMultiple",
    DZ_COMPLETEMULTIPLE: "completeMultiple",
    DZ_PROCESSINGMULTIPLE: "processingMultiple",
    DZ_RESET: "reset",
    DZ_QUEUECOMPLETE: "queueComplete",
    DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
  },
  exportAs: ["ngxDropzone"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DropzoneDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[dropzone]',
      exportAs: 'ngxDropzone'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [DROPZONE_CONFIG]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['dropzone']
    }],
    DZ_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['init']
    }],
    DZ_ERROR: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['error']
    }],
    DZ_SUCCESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['success']
    }],
    DZ_SENDING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sending']
    }],
    DZ_CANCELED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceled']
    }],
    DZ_COMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['complete']
    }],
    DZ_PROCESSING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processing']
    }],
    DZ_DROP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['drop']
    }],
    DZ_DRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragStart']
    }],
    DZ_DRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnd']
    }],
    DZ_DRAGENTER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnter']
    }],
    DZ_DRAGOVER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragOver']
    }],
    DZ_DRAGLEAVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragLeave']
    }],
    DZ_THUMBNAIL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['thumbnail']
    }],
    DZ_ADDEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFile']
    }],
    DZ_ADDEDFILES: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFiles']
    }],
    DZ_REMOVEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['removedFile']
    }],
    DZ_UPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['uploadProgress']
    }],
    DZ_MAXFILESREACHED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesReached']
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesExceeded']
    }],
    DZ_ERRORMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['errorMultiple']
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['successMultiple']
    }],
    DZ_SENDINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sendingMultiple']
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceledMultiple']
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['completeMultiple']
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processingMultiple']
    }],
    DZ_RESET: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['reset']
    }],
    DZ_QUEUECOMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['queueComplete']
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['totalUploadProgress']
    }]
  });
})();

class DropzoneComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.disabled = false;
    this.message = 'Click or drag files to upload';
    this.placeholder = '';
    this.useDropzoneClass = true;
    this.DZ_INIT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SUCCESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SENDING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_CANCELED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_COMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_PROCESSING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DROP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGSTART = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGENTER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGOVER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_DRAGLEAVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_THUMBNAIL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ADDEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ADDEDFILES = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_REMOVEDFILE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_UPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_MAXFILESREACHED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_MAXFILESEXCEEDED = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_ERRORMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SUCCESSMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_SENDINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_CANCELEDMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_COMPLETEMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_PROCESSINGMULTIPLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_RESET = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_QUEUECOMPLETE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.DZ_TOTALUPLOADPROGRESS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngOnInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      return;
    }

    window.setTimeout(() => {
      DropzoneEvents.forEach(eventName => {
        if (this.directiveRef) {
          const output = `DZ_${eventName.toUpperCase()}`;
          const directiveOutput = output;
          const componentOutput = output;
          this.directiveRef[directiveOutput] = this[componentOutput];
        }
      });
    }, 0);
  }

  getPlaceholder() {
    return 'url(' + encodeURI(this.placeholder) + ')';
  }

}

DropzoneComponent.??fac = function DropzoneComponent_Factory(t) {
  return new (t || DropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

DropzoneComponent.??cmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
  type: DropzoneComponent,
  selectors: [["dropzone"]],
  viewQuery: function DropzoneComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](DropzoneDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  inputs: {
    disabled: "disabled",
    config: "config",
    message: "message",
    placeholder: "placeholder",
    useDropzoneClass: "useDropzoneClass"
  },
  outputs: {
    DZ_INIT: "init",
    DZ_ERROR: "error",
    DZ_SUCCESS: "success",
    DZ_SENDING: "sending",
    DZ_CANCELED: "canceled",
    DZ_COMPLETE: "complete",
    DZ_PROCESSING: "processing",
    DZ_DROP: "drop",
    DZ_DRAGSTART: "dragStart",
    DZ_DRAGEND: "dragEnd",
    DZ_DRAGENTER: "dragEnter",
    DZ_DRAGOVER: "dragOver",
    DZ_DRAGLEAVE: "dragLeave",
    DZ_THUMBNAIL: "thumbnail",
    DZ_ADDEDFILE: "addedFile",
    DZ_ADDEDFILES: "addedFiles",
    DZ_REMOVEDFILE: "removedFile",
    DZ_UPLOADPROGRESS: "uploadProgress",
    DZ_MAXFILESREACHED: "maxFilesReached",
    DZ_MAXFILESEXCEEDED: "maxFilesExceeded",
    DZ_ERRORMULTIPLE: "errorMultiple",
    DZ_SUCCESSMULTIPLE: "successMultiple",
    DZ_SENDINGMULTIPLE: "sendingMultiple",
    DZ_CANCELEDMULTIPLE: "canceledMultiple",
    DZ_COMPLETEMULTIPLE: "completeMultiple",
    DZ_PROCESSINGMULTIPLE: "processingMultiple",
    DZ_RESET: "reset",
    DZ_QUEUECOMPLETE: "queueComplete",
    DZ_TOTALUPLOADPROGRESS: "totalUploadProgress"
  },
  exportAs: ["ngxDropzone"],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 10,
  consts: [[1, "dz-wrapper", 3, "dropzone", "disabled", "init"], [1, "dz-message"], [1, "dz-text", 3, "innerHTML"], ["class", "dz-image", 3, "background-image", 4, "ngIf"], [1, "dz-image"]],
  template: function DropzoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("init", function DropzoneComponent_Template_div_init_0_listener($event) {
        return ctx.DZ_INIT.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, DropzoneComponent_div_3_Template, 1, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("dropzone", ctx.useDropzoneClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dropzone", ctx.config)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("disabled", ctx.disabled)("dz-placeholder", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", (ctx.config == null ? null : ctx.config.dictDefaultMessage) || ctx.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.placeholder);
    }
  },
  dependencies: [DropzoneDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["dropzone{display:block;width:100%;height:auto}dropzone[fxflex]{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone[fxflex]>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone[fxlayout]{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", "@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DropzoneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dropzone',
      exportAs: 'ngxDropzone',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<div class=\"dz-wrapper\" [class.dropzone]=\"useDropzoneClass\" [dropzone]=\"config\" [disabled]=\"disabled\" (init)=\"DZ_INIT.emit($event)\">\n  <div class=\"dz-message\" [class.disabled]=\"disabled\" [class.dz-placeholder]=\"placeholder\">\n    <div class=\"dz-text\" [innerHTML]=\"config?.dictDefaultMessage || message\"></div>\n\n    <div *ngIf=\"placeholder\" class=\"dz-image\" [style.background-image]=\"getPlaceholder()\"></div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n",
      styles: ["dropzone{display:block;width:100%;height:auto}dropzone[fxflex]{display:flex;flex-direction:inherit;min-width:0;min-height:0}dropzone[fxflex]>.dropzone.dz-wrapper{flex:1 1 auto;min-width:0;min-height:0;-webkit-box-flex:1}dropzone[fxlayout]{align-items:inherit;align-content:inherit;justify-content:inherit;-webkit-box-align:inherit;-webkit-box-pack:inherit}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-single{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center;-webkit-box-align:center;-webkit-box-pack:center}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-multiple{display:flex;flex-flow:row wrap;align-items:flex-start;align-content:flex-start;justify-content:space-between;-webkit-box-align:flex-start;-webkit-box-pack:flex-start}dropzone>.dropzone.dz-wrapper{position:relative;overflow:auto;width:100%;min-height:0;max-height:100%;padding:0;border:none;color:#666;background:transparent}dropzone>.dropzone.dz-wrapper .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background-color:#eee}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{position:absolute;top:50%;width:100%;padding:8px 16px;text-align:center;transform:translateY(-50%)}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background-color:rgba(#fff,.5);transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{width:100%;height:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{width:calc(100% - 16px);height:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{top:50%;left:50%;transform:translate(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}\n", "@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:#000000e6;line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:#fffc}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:#fff6;padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n"]
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useDropzoneClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    DZ_INIT: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['init']
    }],
    DZ_ERROR: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['error']
    }],
    DZ_SUCCESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['success']
    }],
    DZ_SENDING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sending']
    }],
    DZ_CANCELED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceled']
    }],
    DZ_COMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['complete']
    }],
    DZ_PROCESSING: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processing']
    }],
    DZ_DROP: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['drop']
    }],
    DZ_DRAGSTART: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragStart']
    }],
    DZ_DRAGEND: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnd']
    }],
    DZ_DRAGENTER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragEnter']
    }],
    DZ_DRAGOVER: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragOver']
    }],
    DZ_DRAGLEAVE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['dragLeave']
    }],
    DZ_THUMBNAIL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['thumbnail']
    }],
    DZ_ADDEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFile']
    }],
    DZ_ADDEDFILES: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['addedFiles']
    }],
    DZ_REMOVEDFILE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['removedFile']
    }],
    DZ_UPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['uploadProgress']
    }],
    DZ_MAXFILESREACHED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesReached']
    }],
    DZ_MAXFILESEXCEEDED: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['maxFilesExceeded']
    }],
    DZ_ERRORMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['errorMultiple']
    }],
    DZ_SUCCESSMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['successMultiple']
    }],
    DZ_SENDINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['sendingMultiple']
    }],
    DZ_CANCELEDMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['canceledMultiple']
    }],
    DZ_COMPLETEMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['completeMultiple']
    }],
    DZ_PROCESSINGMULTIPLE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['processingMultiple']
    }],
    DZ_RESET: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['reset']
    }],
    DZ_QUEUECOMPLETE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['queueComplete']
    }],
    DZ_TOTALUPLOADPROGRESS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['totalUploadProgress']
    }],
    directiveRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [DropzoneDirective, {
        static: true
      }]
    }]
  });
})();

class DropzoneModule {}

DropzoneModule.??fac = function DropzoneModule_Factory(t) {
  return new (t || DropzoneModule)();
};

DropzoneModule.??mod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
  type: DropzoneModule
});
DropzoneModule.??inj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DropzoneModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [DropzoneComponent, DropzoneDirective],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, DropzoneComponent, DropzoneDirective]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_components_advance_advance_module_ts.js.map