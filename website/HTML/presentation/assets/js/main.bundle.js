webpackJsonp([2,5],{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRefService;
}());
WindowRefService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRefService);

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(430);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_ref_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_objects__ = __webpack_require__(428);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(winRef) {
        this.winRef = winRef;
        var obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__make_objects__["a" /* default */])(winRef.nativeWindow);
        this.presentation = obj.presentation;
        this.slides = obj.slides;
        this.layout = obj.layout;
        this.palette = obj.palette;
        this.textFont = obj.textFont;
        this.headingFont = obj.headingFont;
        this.logoForLightBackgrounds = null;
        this.logoForDarkBackgrounds = null;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(752),
        styles: [__webpack_require__(664)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slidebean_render__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slidebean_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__slidebean_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__window_ref_service__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["TranslateModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__slidebean_render__["RenderModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__window_ref_service__["a" /* WindowRefService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidebean_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidebean_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__slidebean_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(429);
/* harmony export (immutable) */ __webpack_exports__["a"] = makePresentationObjects;


__WEBPACK_IMPORTED_MODULE_0__slidebean_core__["SlidebeanCore"].init(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].PARSE_APP_ID, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].PARSE_APP_KEY, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].PARSE_SERVER_URL);
var makePresentation = function (json) { return __WEBPACK_IMPORTED_MODULE_0__slidebean_core__["Presentation"].fromJSON(json); };
var makeSlides = function (json) { return json.map(makeSlide); };
var makeSlide = function (json) { return __WEBPACK_IMPORTED_MODULE_0__slidebean_core__["Slide"].fromJSON(json); };
var makeLayout = function (json) { return __WEBPACK_IMPORTED_MODULE_0__slidebean_core__["Layout"].fromJSON(json); };
var makePalete = function (json) { return __WEBPACK_IMPORTED_MODULE_0__slidebean_core__["Palette"].fromJSON(json); };
var makeFont = function (json) { return __WEBPACK_IMPORTED_MODULE_0__slidebean_core__["Font"].fromJSON(json); };
function makePresentationObjects(win) {
    var data = win.__sb__;
    var theJson = data.presentation;
    var theSlideJson = data.slides;
    return {
        presentation: makePresentation(theJson),
        slides: makeSlides(theSlideJson),
        layout: makeLayout(theJson.layoutStyle),
        palette: makePalete(theJson.colorPalette),
        textFont: makeFont(theJson.textFont),
        headingFont: makeFont(theJson.headingFont),
        logoForLightBackgrounds: null,
        logoForDarkBackgrounds: null
    };
}
//# sourceMappingURL=make-objects.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    PARSE_SERVER_URL: 'http://localhost:1337/parse',
    PARSE_APP_ID: 'gBimhftHUD2In6kWInrARPG19AZwuqVwsn78f4Fd',
    PARSE_APP_KEY: 'mW1CtW4JibgEYYiFrI7yc4D5GQWlaaY4eqb74caR'
};
/* harmony default export */ __webpack_exports__["a"] = config;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(188)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\nsb-slide-player {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 277,
	"./af.js": 277,
	"./ar": 284,
	"./ar-dz": 278,
	"./ar-dz.js": 278,
	"./ar-kw": 279,
	"./ar-kw.js": 279,
	"./ar-ly": 280,
	"./ar-ly.js": 280,
	"./ar-ma": 281,
	"./ar-ma.js": 281,
	"./ar-sa": 282,
	"./ar-sa.js": 282,
	"./ar-tn": 283,
	"./ar-tn.js": 283,
	"./ar.js": 284,
	"./az": 285,
	"./az.js": 285,
	"./be": 286,
	"./be.js": 286,
	"./bg": 287,
	"./bg.js": 287,
	"./bn": 288,
	"./bn.js": 288,
	"./bo": 289,
	"./bo.js": 289,
	"./br": 290,
	"./br.js": 290,
	"./bs": 291,
	"./bs.js": 291,
	"./ca": 292,
	"./ca.js": 292,
	"./cs": 293,
	"./cs.js": 293,
	"./cv": 294,
	"./cv.js": 294,
	"./cy": 295,
	"./cy.js": 295,
	"./da": 296,
	"./da.js": 296,
	"./de": 299,
	"./de-at": 297,
	"./de-at.js": 297,
	"./de-ch": 298,
	"./de-ch.js": 298,
	"./de.js": 299,
	"./dv": 300,
	"./dv.js": 300,
	"./el": 301,
	"./el.js": 301,
	"./en-au": 302,
	"./en-au.js": 302,
	"./en-ca": 303,
	"./en-ca.js": 303,
	"./en-gb": 304,
	"./en-gb.js": 304,
	"./en-ie": 305,
	"./en-ie.js": 305,
	"./en-nz": 306,
	"./en-nz.js": 306,
	"./eo": 307,
	"./eo.js": 307,
	"./es": 194,
	"./es-do": 308,
	"./es-do.js": 308,
	"./es.js": 194,
	"./et": 309,
	"./et.js": 309,
	"./eu": 310,
	"./eu.js": 310,
	"./fa": 311,
	"./fa.js": 311,
	"./fi": 312,
	"./fi.js": 312,
	"./fo": 313,
	"./fo.js": 313,
	"./fr": 316,
	"./fr-ca": 314,
	"./fr-ca.js": 314,
	"./fr-ch": 315,
	"./fr-ch.js": 315,
	"./fr.js": 316,
	"./fy": 317,
	"./fy.js": 317,
	"./gd": 318,
	"./gd.js": 318,
	"./gl": 319,
	"./gl.js": 319,
	"./gom-latn": 320,
	"./gom-latn.js": 320,
	"./he": 321,
	"./he.js": 321,
	"./hi": 322,
	"./hi.js": 322,
	"./hr": 323,
	"./hr.js": 323,
	"./hu": 324,
	"./hu.js": 324,
	"./hy-am": 325,
	"./hy-am.js": 325,
	"./id": 326,
	"./id.js": 326,
	"./is": 327,
	"./is.js": 327,
	"./it": 328,
	"./it.js": 328,
	"./ja": 329,
	"./ja.js": 329,
	"./jv": 330,
	"./jv.js": 330,
	"./ka": 331,
	"./ka.js": 331,
	"./kk": 332,
	"./kk.js": 332,
	"./km": 333,
	"./km.js": 333,
	"./kn": 334,
	"./kn.js": 334,
	"./ko": 335,
	"./ko.js": 335,
	"./ky": 336,
	"./ky.js": 336,
	"./lb": 337,
	"./lb.js": 337,
	"./lo": 338,
	"./lo.js": 338,
	"./lt": 339,
	"./lt.js": 339,
	"./lv": 340,
	"./lv.js": 340,
	"./me": 341,
	"./me.js": 341,
	"./mi": 342,
	"./mi.js": 342,
	"./mk": 343,
	"./mk.js": 343,
	"./ml": 344,
	"./ml.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 347,
	"./ms-my": 346,
	"./ms-my.js": 346,
	"./ms.js": 347,
	"./my": 348,
	"./my.js": 348,
	"./nb": 349,
	"./nb.js": 349,
	"./ne": 350,
	"./ne.js": 350,
	"./nl": 352,
	"./nl-be": 351,
	"./nl-be.js": 351,
	"./nl.js": 352,
	"./nn": 353,
	"./nn.js": 353,
	"./pa-in": 354,
	"./pa-in.js": 354,
	"./pl": 355,
	"./pl.js": 355,
	"./pt": 357,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 357,
	"./ro": 358,
	"./ro.js": 358,
	"./ru": 359,
	"./ru.js": 359,
	"./sd": 360,
	"./sd.js": 360,
	"./se": 361,
	"./se.js": 361,
	"./si": 362,
	"./si.js": 362,
	"./sk": 363,
	"./sk.js": 363,
	"./sl": 364,
	"./sl.js": 364,
	"./sq": 365,
	"./sq.js": 365,
	"./sr": 367,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 367,
	"./ss": 368,
	"./ss.js": 368,
	"./sv": 369,
	"./sv.js": 369,
	"./sw": 370,
	"./sw.js": 370,
	"./ta": 371,
	"./ta.js": 371,
	"./te": 372,
	"./te.js": 372,
	"./tet": 373,
	"./tet.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tl-ph": 375,
	"./tl-ph.js": 375,
	"./tlh": 376,
	"./tlh.js": 376,
	"./tr": 377,
	"./tr.js": 377,
	"./tzl": 378,
	"./tzl.js": 378,
	"./tzm": 380,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 380,
	"./uk": 381,
	"./uk.js": 381,
	"./ur": 382,
	"./ur.js": 382,
	"./uz": 384,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 384,
	"./vi": 385,
	"./vi.js": 385,
	"./x-pseudo": 386,
	"./x-pseudo.js": 386,
	"./yo": 387,
	"./yo.js": 387,
	"./zh-cn": 388,
	"./zh-cn.js": 388,
	"./zh-hk": 389,
	"./zh-hk.js": 389,
	"./zh-tw": 390,
	"./zh-tw.js": 390
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 729;


/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<sb-slide-player\n  [hiRes]=\"true\"\n  [keyboardEnabled]=\"true\"\n  [embedded]=\"true\"\n  [imgixEnabled]=\"false\"\n  [liveEnabled]=\"false\"\n  [upgradeBarEnabled]=\"false\"\n  [presentation]=\"presentation\"\n  [slides]=\"slides\"\n  [layout]=\"layout\"\n  [palette]=\"palette\"\n  [textFont]=\"textFont\"\n  [headingFont]=\"headingFont\"\n  [logoForLightBackgrounds]=\"logoForLightBackgrounds\"\n  [logoForDarkBackgrounds]=\"logoForDarkBackgrounds\"\n></sb-slide-player>\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ })

},[824]);
//# sourceMappingURL=main.bundle.js.map