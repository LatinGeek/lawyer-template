"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["common"],{

/***/ 85863:
/*!******************************************!*\
  !*** ./src/app/shared/data/todo/todo.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
var task = [{
        text: "Weekly Bigbazar Shopping",
        completed: false
    },
    {
        text: "Go Outside Picnic on Sunday",
        completed: false
    },
    {
        text: "Write a blog post",
        completed: true
    },
    {
        text: "Do the chicken dance",
        completed: true
    },
    {
        text: "Pay the electricity bills",
        completed: false
    }];


/***/ }),

/***/ 97321:
/*!********************************************************************************!*\
  !*** ./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountToDirective": () => (/* binding */ CountToDirective),
/* harmony export */   "CountToModule": () => (/* binding */ CountToModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class CountToDirective {
  /**
   * @param {?} el
   */
  constructor(el) {
    this.el = el;
    this.from = 0;
    this.duration = 4;
    this.e = this.el.nativeElement;
    this.refreshInterval = 30;
    this.step = 0;
  }
  /**
   * @return {?}
   */


  ngOnInit() {}
  /**
   * @return {?}
   */


  ngOnChanges() {
    if (this.CountTo) {
      this.start();
    }
  }
  /**
   * @return {?}
   */


  calculate() {
    this.duration = this.duration * 1000;
    this.steps = Math.ceil(this.duration / this.refreshInterval);
    this.increment = (this.CountTo - this.from) / this.steps;
    this.num = this.from;
  }
  /**
   * @return {?}
   */


  tick() {
    setTimeout(() => {
      this.num += this.increment;
      this.step++;

      if (this.step >= this.steps) {
        this.num = this.CountTo;
        this.e.textContent = this.CountTo;
      } else {
        this.e.textContent = Math.round(this.num);
        this.tick();
      }
    }, this.refreshInterval);
  }
  /**
   * @return {?}
   */


  start() {
    this.calculate();
    this.tick();
  }

}

CountToDirective.??fac = function CountToDirective_Factory(t) {
  return new (t || CountToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

CountToDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
  type: CountToDirective,
  selectors: [["", "CountTo", ""]],
  inputs: {
    from: "from",
    duration: "duration",
    CountTo: "CountTo"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
});
/**
 * @nocollapse
 */

CountToDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];

CountToDirective.propDecorators = {
  'CountTo': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  'from': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  'duration': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountToDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[CountTo]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    from: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    CountTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class CountToModule {
  /**
   * Use in AppModule
   * @return {?}
   */
  static forRoot() {
    return {
      ngModule: CountToModule,
      providers: []
    };
  }
  /**
   * Use in features modules with lazy loading
   * @return {?}
   */


  static forChild() {
    return {
      ngModule: CountToModule,
      providers: []
    };
  }

}

CountToModule.??fac = function CountToModule_Factory(t) {
  return new (t || CountToModule)();
};

CountToModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
  type: CountToModule
});
CountToModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({});
/**
 * @nocollapse
 */

CountToModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountToModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CountToDirective // Pipes.
      // Directives.
      ],
      exports: [CountToDirective // Pipes.
      // Directives.
      ]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CountToModule, {
    declarations: [CountToDirective],
    exports: [CountToDirective]
  });
})(); // Public classes.

/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-count-to
 */

/**
 * Entry point for all public APIs of the package.
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.??fac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.??pipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.??fac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.??fac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=common.js.map