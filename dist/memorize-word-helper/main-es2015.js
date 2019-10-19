(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-navbar></app-navbar>\n</div>\n<!-- Normal page -->\n<div *ngIf=\"!errMessage\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"container\">\n  <!-- when error occur -->\n  <div *ngIf=\"errMessage\" class=\"row\">\n    <div class=\"col\">\n      <div class=\"alert alert-danger\" role=\"alert\" style=\"margin:20px;\">\n        {{errMessage}}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-detail/group-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-detail/group-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid BackGround shadow rounded\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <!-- Show group name -->\n      <h1 *ngIf=\"renameGroupFlag === false\" class=\"text-truncate\" (click)=\"renameGroup()\">{{group}}</h1>\n\n      <!-- Rename group -->\n      <div *ngIf=\"renameGroupFlag === true\" class=\"input-group\">\n        <input #writeName type=\"text\" class=\"form-control\" placeholder=\"{{group}}\"\n          aria-label=\"Recipient's username with two button addons\" aria-describedby=\"button-addon4\">\n        <div class=\"input-group-append\" id=\"button-addon4\">\n          <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"renameOK(writeName.value)\">OK</button>\n          <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"renameCancel()\">CANCEL</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Save button -->\n    <div class=\"col text-right\">\n      <button class=\"btn btn-success btn-lg\" (click)=\"onSave()\">SAVE</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <!-- Add word button -->\n      <button id=\"AddNewBtn\" *ngIf=\"addWordFlag === false\" type=\"button\" class=\"btn btn-outline-primary btn-sm\"\n        (click)=\"addWordClick()\">Add new word</button>\n\n      <!-- Show when add word button is CLICK   -->\n      <div id=\"AddNewInput\" *ngIf=\"addWordFlag === true\" class=\"row\">\n        <div class=\"col\">\n          <input #newWord type=\"text\" class=\"form-control\" placeholder=\"Word\">\n        </div>\n        <div class=\"col\">\n          <input #newMean type=\"text\" class=\"form-control\" placeholder=\"Meaning\">\n        </div>\n        <input class=\"btn btn-warning\" type=\"submit\" (click)=\"addWordOk(newWord.value,newMean.value)\" value=\"Confirm\">\n        <input class=\"btn btn-secondary\" type=\"reset\" (click)=\"addWordCancel()\" value=\"Cancel\">\n      </div>\n\n      <!-- Delete button -->\n      <button *ngIf=\"addWordFlag === false\" type=\"button\" class=\"btn btn-outline-danger btn-sm\"\n        style=\"margin-left: 1rem;\" (click)=\"DeleteWordClick()\">Delete words</button>\n      <!-- Cancel delete button -->\n      <button *ngIf=\"addWordFlag === false && deleteWordFlag === true\" type=\"button\" class=\"btn btn-light btn-sm\"\n        style=\"margin-left: 1rem;\" (click)=\"CancelDeleteWordClick()\">End delete</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <!-- Table for show words in group -->\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">No.</th>\n            <th scope=\"col\">Word</th>\n            <th scope=\"col\">Meaning</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let word of words; let i = index\" (click)=\"EditClick(word, i)\"\n            [style.background-color]=\"(i===editIndex)?'#0275d8':''\" [style.color]=\"(i===editIndex)?'white':''\"\n            [ngClass]=\"{'DeleteSelected':(deleteWordFlag===true)}\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{word.word}}</td>\n            <td>{{word.mean}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list/group-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list/group-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid BackGround shadow rounded\">\n  <div class=\"text-center\">\n  <button class=\"btn btn-light btn-sm d-sm-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseShowGroups\"\n    aria-expanded=\"false\" aria-controls=\"collapseShowGroups\">\n    Show group\n  </button>\n</div>\n  <br>\n  <div class=\"collapse d-sm-block\" id=\"collapseShowGroups\">\n    <!-- Add new group button -->\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addGroup()\">Add new group</button>\n\n    <!-- List of groups -->\n    <div class=\"list-group\">\n      <a class=\"list-group-item list-group-item-action text-truncate\" [class.active]=\"activeIndex === i\"\n        (click)=\"onClick(i)\" *ngFor=\"let group of groups; let i = index\">\n        {{group}}\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/manage/manage.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/manage/manage.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-3\">\n      <app-group-list></app-group-list>\n    </div>\n    <div id=\"GroupDetail\" class=\"col\">\n      <app-group-detail></app-group-detail>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-dark bg-dark shadow rounded\">\n  <a class=\"navbar-brand\" style=\"color: white; padding-right: 1rem;\">MemorizeWordHelper</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" routerLink=\"/random\" routerLinkActive=\"active\" >Random</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/manage\" routerLinkActive=\"active\">Manage</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random/random.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/random/random.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div *ngIf=\"!startRandomFlag\" class=\"row BackGround shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"col\">\n\n      <h3>Select group</h3>\n      <div class=\"overflow-auto\" style=\"height: 200px;\">\n        <div *ngFor=\"let group of selectedGroups; let i = index\" class=\"form-check\">\n          <input [(ngModel)]=\"group.selected\" name=\"group.selected\" class=\"form-check-input\" type=\"checkbox\">\n          <label class=\"form-check-label\">\n            {{group.name}}\n          </label>\n        </div>\n      </div>\n      <hr>\n\n      <h3>Select Type</h3>\n      <div class=\"form-check\">\n        <input [(ngModel)]=\"selectedType\" class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\"\n          value=\"ShowWord\">\n        <label class=\"form-check-label\" for=\"gridRadios1\">\n          Show wording\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input [(ngModel)]=\"selectedType\" class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\"\n          value=\"ShowMean\">\n        <label class=\"form-check-label\" for=\"gridRadios2\">\n          Show meaning\n        </label>\n      </div>\n      <hr>\n\n      <button type=\"submit\" (click)=\"onStartRandom()\" class=\"btn btn-primary btn-lg btn-block\">Start Random</button>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"startRandomFlag\" class=\"row BackGround shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"col text-center\">\n      <div class=\"progress\">\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width: calPercent() + '%'}\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\">\n          {{progressCur}}/{{progressMax}}\n        </div>\n      </div>\n      <br>\n      <h1 class=\"display-4\">{{major}}</h1>\n      <br>\n      <hr>\n      <div class=\"collapse\" id=\"collapseExample\">\n        <h1 class=\"display-4\">{{minor}}</h1>\n      </div>\n      <br>\n      <p style=\"margin-bottom: 0px;\">\n        <a class=\"btn btn btn-light\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\"\n          aria-controls=\"collapseExample\">\n          Show\n        </a>\n      </p>\n      <br>\n      <hr>\n      <button type=\"button\" (click)=\"randomPopWord()\" class=\"btn btn-primary btn-lg btn-block\">NEXT</button>\n      <button type=\"button\" (click)=\"endRandom()\" class=\"btn btn-secondary btn-lg btn-block\">END</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_random_random_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/random/random.component */ "./src/app/components/random/random.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/components/manage/manage.component.ts");





const routes = [
    { path: 'random', component: _components_random_random_component__WEBPACK_IMPORTED_MODULE_3__["RandomComponent"] },
    { path: 'manage', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"] },
    { path: '', redirectTo: 'random', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/words.service */ "./src/app/services/words.service.ts");




let AppComponent = class AppComponent {
    constructor(errService, wordsService) {
        this.errService = errService;
        this.wordsService = wordsService;
        this.errMessage = '';
    }
    ngOnInit() {
        this.errService.reportError
            .subscribe((err) => this.errMessage = err);
        // this.wordsService.saveCompleteSignal
        //   .subscribe(_ => location.reload());
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"] },
    { type: _services_words_service__WEBPACK_IMPORTED_MODULE_3__["WordsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/group-list/group-list.component */ "./src/app/components/group-list/group-list.component.ts");
/* harmony import */ var _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/group-detail/group-detail.component */ "./src/app/components/group-detail/group-detail.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_random_random_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/random/random.component */ "./src/app/components/random/random.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/components/manage/manage.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_group_list_group_list_component__WEBPACK_IMPORTED_MODULE_8__["GroupListComponent"],
            _components_group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_9__["GroupDetailComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _components_random_random_component__WEBPACK_IMPORTED_MODULE_11__["RandomComponent"],
            _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/group-detail/group-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/group-detail/group-detail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BackGround {\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nh1:hover {\r\n  color: #0275d8;\r\n  text-shadow: 2px 2px 15px #3792e0bd;\r\n  transition: 0.2s;\r\n}\r\n\r\n.row {\r\n  margin-top: 1rem;\r\n  padding-top: 1rem;\r\n}\r\n\r\n#AddNewInput {\r\n  padding-top: 0rem;\r\n  margin-top: 0rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.EditSelected {\r\n  background-color: #0275d8;\r\n  color: white;\r\n  /*transition: 0.3s;*/\r\n}\r\n\r\n.DeleteSelected:hover {\r\n  background-color: #d9534f;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1kZXRhaWwvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CYWNrR3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5oMTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMjc1ZDg7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTVweCAjMzc5MmUwYmQ7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuI0FkZE5ld0lucHV0IHtcclxuICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5FZGl0U2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qdHJhbnNpdGlvbjogMC4zczsqL1xyXG59XHJcblxyXG4uRGVsZXRlU2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/group-detail/group-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/group-detail/group-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/words.service */ "./src/app/services/words.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");





let GroupDetailComponent = class GroupDetailComponent {
    constructor(wordsService, groupService, errorService) {
        this.wordsService = wordsService;
        this.groupService = groupService;
        this.errorService = errorService;
        this.words = []; // list of word from server
        this.newWords = []; // list of new adding word
        this.dltWords = [];
    }
    ngOnInit() {
        /** Get words in group when group is changed */
        this.memoSubsVar = this.groupService.groupUpdated.subscribe(update => {
            this.renameGroupFlag = false;
            this.addWordFlag = false;
            this.wordsService.getWords(update).subscribe(resWord => {
                this.words = resWord;
            }, err => {
                this.errorService.putError(err.message);
            });
            this.group = this.groupService.getActiveGroup();
        });
        /** Refresh when save to server complete */
        this.wordsService.saveCompleteSignal.subscribe(_ => location.reload());
    }
    ngOnDestroy() {
        if (this.memoSubsVar) {
            this.memoSubsVar.unsubscribe();
        }
    }
    renameGroup() {
        this.renameGroupFlag = true;
    }
    renameOK(newName) {
        if (newName) {
            this.renameFrom = this.group; // save name before change
            this.group = newName;
            this.renameTo = newName; // save for send to server if user save
            this.renameGroupFlag = false;
        }
    }
    renameCancel() {
        this.renameGroupFlag = false;
    }
    addWordClick() {
        this.addWordFlag = true;
        this.deleteWordFlag = false;
    }
    addWordCancel() {
        this.addWordFlag = false;
        this.editIndex = undefined;
    }
    addWordOk(newWord, newMean) {
        if (newWord && newMean) {
            const tmpWord = { group: this.group, word: newWord, mean: newMean };
            this.newWords.push(tmpWord);
            if (this.editWord) {
                this.dltWords.push(this.editWord);
                const tmpIndex = this.words.findIndex(word => word === this.editWord);
                this.words[tmpIndex] = tmpWord;
                this.editWord = undefined;
            }
            else {
                this.words.push(tmpWord);
            }
            this.addWordFlag = false;
            this.editIndex = undefined;
        }
    }
    EditClick(word, index) {
        if (this.deleteWordFlag !== true) {
            // For edit word
            this.editWord = word;
            this.editIndex = index;
            this.addWordFlag = true;
        }
        else {
            // For delete word
            this.dltWords.push(word);
            this.words.splice(index, 1);
            const findWord = this.newWords.find(i => i === word);
            if (findWord !== undefined) {
                this.newWords.splice(this.newWords.findIndex(i => i === findWord), 1);
            }
        }
    }
    DeleteWordClick() {
        this.deleteWordFlag = true;
        this.addWordFlag = false;
    }
    CancelDeleteWordClick() {
        this.deleteWordFlag = false;
    }
    onSave() {
        if (this.newWords.length !== 0 || this.renameTo || this.dltWords.length !== 0) {
            this.wordsService
                .addWordsDeltWordsRenameGroup(this.newWords, this.dltWords, this.renameFrom, this.renameTo);
        }
    }
};
GroupDetailComponent.ctorParameters = () => [
    { type: _services_words_service__WEBPACK_IMPORTED_MODULE_3__["WordsService"] },
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }
];
GroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-detail/group-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-detail.component.css */ "./src/app/components/group-detail/group-detail.component.css")).default]
    })
], GroupDetailComponent);



/***/ }),

/***/ "./src/app/components/group-list/group-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/group-list/group-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BackGround {\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  padding: 0rem 0rem;\r\n}\r\n\r\nbutton {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.text-center {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.list-group {\r\n  margin: 1rem;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  button.btn-light {\r\n    margin-top: 1rem;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CYWNrR3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDByZW0gMHJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGJ1dHRvbi5idG4tbGlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/group-list/group-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/group-list/group-list.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/words.service */ "./src/app/services/words.service.ts");





let GroupListComponent = class GroupListComponent {
    constructor(groupService, errorService, wordsService) {
        this.groupService = groupService;
        this.errorService = errorService;
        this.wordsService = wordsService;
    }
    ngOnInit() {
        this.activeIndex = 0; // start at group index 0
        // this.groups = this.groupService.getGroups();          // get list of groups from Service
        this.groups = [];
        this.groupService.getGroups().subscribe(groups => {
            this.groups = groups;
            this.groupService.setActiveGroup(this.groups[0]); // set active group to Service
        }, err => {
            this.errorService.putError(err.message);
        });
        /** Refresh when save to server complete */
        this.wordsService.saveCompleteSignal.subscribe(_ => location.reload());
    }
    /** When selected group */
    onClick(index) {
        this.activeIndex = index; // change active index to click point
        this.groupService.setActiveGroup(this.groups[index]); // set active group to Service
    }
    /** When Add new group */
    addGroup() {
        this.newGroup = 'new group'; // create new group with default name
        this.groups.unshift(this.newGroup); // add new group to top of list group
        this.groupService.setActiveGroup(this.newGroup); // set active new group to Service
    }
};
GroupListComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] },
    { type: _services_words_service__WEBPACK_IMPORTED_MODULE_4__["WordsService"] }
];
GroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/group-list/group-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-list.component.css */ "./src/app/components/group-list/group-list.component.css")).default]
    })
], GroupListComponent);



/***/ }),

/***/ "./src/app/components/manage/manage.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/manage/manage.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 576px) {\r\n  #GroupDetail {\r\n    padding-left: 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAjR3JvdXBEZXRhaWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/manage/manage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/manage/manage.component.ts ***!
  \*******************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageComponent = class ManageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/manage/manage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage.component.css */ "./src/app/components/manage/manage.component.css")).default]
    })
], ManageComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\r\n  font-size: 25px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .navbar-brand {\r\n    font-size: 18px;\r\n  }\r\n  .nav-item {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/random/random.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/random/random.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BackGround {\r\n  background-color: white;\r\n  margin-top: 1rem;\r\n  margin-left: 0rem;\r\n  margin-right: 0rem;\r\n  padding: 0rem 0rem;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.checkbox-lg .custom-control-label::before,\r\n.checkbox-lg .custom-control-label::after {\r\n  top: .8rem;\r\n  width: 1.55rem;\r\n  height: 1.55rem;\r\n}\r\n\r\n.checkbox-lg .custom-control-label {\r\n  padding-top: 13px;\r\n  padding-left: 6px;\r\n}\r\n\r\n.checkbox-xl .custom-control-label::before,\r\n.checkbox-xl .custom-control-label::after {\r\n  top: 1.2rem;\r\n  width: 1.85rem;\r\n  height: 1.85rem;\r\n}\r\n\r\n.checkbox-xl .custom-control-label {\r\n  padding-top: 23px;\r\n  padding-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYW5kb20vcmFuZG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RTs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUdBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JhbmRvbS9yYW5kb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CYWNrR3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICBwYWRkaW5nOiAwcmVtIDByZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmNoZWNrYm94LWxnIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxyXG4uY2hlY2tib3gtbGcgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgdG9wOiAuOHJlbTtcclxuICB3aWR0aDogMS41NXJlbTtcclxuICBoZWlnaHQ6IDEuNTVyZW07XHJcbn1cclxuXHJcbi5jaGVja2JveC1sZyAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG5cclxuLmNoZWNrYm94LXhsIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxyXG4uY2hlY2tib3gteGwgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgdG9wOiAxLjJyZW07XHJcbiAgd2lkdGg6IDEuODVyZW07XHJcbiAgaGVpZ2h0OiAxLjg1cmVtO1xyXG59XHJcblxyXG4uY2hlY2tib3gteGwgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogMjNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/random/random.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/random/random.component.ts ***!
  \*******************************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _services_words_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/words.service */ "./src/app/services/words.service.ts");





let RandomComponent = class RandomComponent {
    constructor(groupService, errorService, wordsService) {
        this.groupService = groupService;
        this.errorService = errorService;
        this.wordsService = wordsService;
        this.selectedType = 'ShowWord';
        this.selectedGroups = [];
        this.startRandomFlag = false;
        this.startRandomSignal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.groupService.getGroups()
            .subscribe(groups => {
            groups.forEach(group => this.selectedGroups.push({ name: group, selected: false }));
        }, err => {
            this.errorService.putError(err.message);
        });
        this.startRandomSignal.subscribe((flag) => {
            if (flag === true) {
                this.progressMax = this.selectedWords.length;
                this.randomPopWord();
            }
            this.startRandomFlag = flag;
        });
    }
    onStartRandom() {
        // Check if not select any group
        const checkSelectedGroup = this.selectedGroups.filter(i => i.selected === true);
        if (checkSelectedGroup.length !== 0) {
            this.wordsService.getWordsFromListGroup(checkSelectedGroup.map(({ name }) => name))
                .subscribe(respWords => {
                this.selectedWords = respWords;
                this.startRandomSignal.emit(true);
            });
        }
        else {
            alert('Please select any group');
        }
    }
    randomPopWord() {
        if (this.selectedWords.length !== 0) {
            this.currentWord = this.selectedWords.splice(Math.floor(Math.random() * this.selectedWords.length), 1).pop();
            this.progressCur = this.progressMax - this.selectedWords.length;
            if (this.selectedType === 'ShowWord') {
                this.major = this.currentWord.word;
                this.minor = this.currentWord.mean;
            }
            else if (this.selectedType === 'ShowMean') {
                this.major = this.currentWord.mean;
                this.minor = this.currentWord.word;
            }
        }
        else {
            this.endRandom();
        }
    }
    endRandom() {
        this.major = undefined;
        this.minor = undefined;
        this.selectedWords = undefined;
        this.currentWord = undefined;
        this.progressMax = undefined;
        this.progressCur = undefined;
        this.startRandomSignal.emit(false);
    }
    calPercent() {
        return Math.floor((this.progressCur / this.progressMax) * 100);
    }
};
RandomComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] },
    { type: _services_words_service__WEBPACK_IMPORTED_MODULE_4__["WordsService"] }
];
RandomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-random',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./random.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/random/random.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./random.component.css */ "./src/app/components/random/random.component.css")).default]
    })
], RandomComponent);



/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorService = class ErrorService {
    constructor() {
        this.reportError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    putError(error) {
        this.reportError.emit(error);
    }
};
ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ErrorService);



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





let GroupService = class GroupService {
    constructor(http, urlService) {
        this.http = http;
        this.urlService = urlService;
        this.groups = []; // store list of groups
        this.groupUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // store emitter for group changing
    }
    /** Get groups from Server */
    getGroups() {
        return this.http.get(this.urlService.reqGroupUrl());
    }
    /** Get current active group */
    getActiveGroup() {
        return this.activeGroup;
    }
    /** Set current active group */
    setActiveGroup(group) {
        this.activeGroup = group;
        this.groupUpdated.emit(this.activeGroup); // sent current group to who subscribe
    }
};
GroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] }
];
GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupService);



/***/ }),

/***/ "./src/app/services/url.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/url.service.ts ***!
  \*****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UrlService = class UrlService {
    constructor() {
        this.urlConnectServer = '/api/words';
    }
    reqGroupUrl() {
        return this.urlConnectServer;
    }
    reqWordsOfGroupUrl(reqGroup) {
        return `${this.urlConnectServer}/${reqGroup}`;
    }
    reqWordsOfListGroupUrl() {
        return `${this.urlConnectServer}/listgroup`;
    }
    reqRenameGroupUrl(oldName, newName) {
        return `${this.urlConnectServer}/renamegroup/${oldName}/${newName}`;
    }
    reqDeleteWordsUrl() {
        return `${this.urlConnectServer}/delete`;
    }
};
UrlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UrlService);



/***/ }),

/***/ "./src/app/services/words.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/words.service.ts ***!
  \*******************************************/
/*! exports provided: WordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsService", function() { return WordsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");







let WordsService = class WordsService {
    constructor(groupService, http, urlService) {
        this.groupService = groupService;
        this.http = http;
        this.urlService = urlService;
        this.words = []; // store list words of current group
        this.saveCompleteSignal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Foremit when save complete
    }
    /** Quary list words of current group from DataBase */
    getWordsFromActiveGroup() {
        // get current group from Service
        this.group = this.groupService.getActiveGroup();
        if (this.group) {
            // check group not empty
            this.words = []; // clear current list words
            return this.http.get(this.urlService.reqWordsOfGroupUrl(this.group));
        }
    }
    /** Get list words from req group */
    getWords(reqGroup) {
        if (reqGroup) {
            // Check req group is not empty
            this.words = []; // clear current list words
            return this.http.get(this.urlService.reqWordsOfGroupUrl(reqGroup));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    }
    /** Get list words from req list group */
    getWordsFromListGroup(reqListGroup) {
        if (reqListGroup) {
            return this.http.post(this.urlService.reqWordsOfListGroupUrl(), reqListGroup);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    }
    /** Add new words */
    addWord(newWords) {
        if (newWords) {
            return this.http.post(this.urlService.reqGroupUrl(), newWords);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('');
        }
    }
    /** Delete words */
    deleteWord(dltWords) {
        if (dltWords) {
            return this.http.post(this.urlService.reqDeleteWordsUrl(), dltWords);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('');
        }
    }
    /** Rename group */
    renameGroup(oldName, newName) {
        if (oldName && newName) {
            return this.http.put(this.urlService.reqRenameGroupUrl(oldName, newName), {});
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('');
        }
    }
    /** Add list of words & Rename group */
    addWordsDeltWordsRenameGroup(addWords, dltWords, oldName, newName) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.addWord(addWords), this.deleteWord(dltWords), this.renameGroup(oldName, newName)])
            .subscribe(respList => {
            // console.log(respList[0]);
            // console.log(respList[1]);
            // console.log(respList[2]);
            this.saveCompleteSignal.emit('Save complete');
        });
    }
};
WordsService.ctorParameters = () => [
    { type: _group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }
];
WordsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WordsService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web_practice\my-project\memorize-word-helper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map