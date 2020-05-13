webpackJsonp([35783957827783],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var MoveDirection_1 = __webpack_require__(60);
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.clamp = function (num, min, max) {
	        return Math.min(Math.max(num, min), max);
	    };
	    Utils.isInArray = function (value, array) {
	        return value === array || (array instanceof Array && array.indexOf(value) > -1);
	    };
	    Utils.mix = function (comp1, comp2, weight1, weight2) {
	        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
	    };
	    Utils.getParticleBaseVelocity = function (particle) {
	        var velocityBase;
	        switch (particle.direction) {
	            case MoveDirection_1.MoveDirection.top:
	                velocityBase = { x: 0, y: -1 };
	                break;
	            case MoveDirection_1.MoveDirection.topRight:
	                velocityBase = { x: 0.5, y: -0.5 };
	                break;
	            case MoveDirection_1.MoveDirection.right:
	                velocityBase = { x: 1, y: -0 };
	                break;
	            case MoveDirection_1.MoveDirection.bottomRight:
	                velocityBase = { x: 0.5, y: 0.5 };
	                break;
	            case MoveDirection_1.MoveDirection.bottom:
	                velocityBase = { x: 0, y: 1 };
	                break;
	            case MoveDirection_1.MoveDirection.bottomLeft:
	                velocityBase = { x: -0.5, y: 1 };
	                break;
	            case MoveDirection_1.MoveDirection.left:
	                velocityBase = { x: -1, y: 0 };
	                break;
	            case MoveDirection_1.MoveDirection.topLeft:
	                velocityBase = { x: -0.5, y: -0.5 };
	                break;
	            default:
	                velocityBase = { x: 0, y: 0 };
	                break;
	        }
	        return velocityBase;
	    };
	    Utils.getDistance = function (pointA, pointB) {
	        var dx = pointA.x - pointB.x;
	        var dy = pointA.y - pointB.y;
	        return Math.sqrt(dx * dx + dy * dy);
	    };
	    Utils.loadFont = function (character) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var _a;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        _b.trys.push([0, 2, , 3]);
	                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
	                    case 1:
	                        _b.sent();
	                        return [3, 3];
	                    case 2:
	                        _a = _b.sent();
	                        return [3, 3];
	                    case 3: return [2];
	                }
	            });
	        });
	    };
	    Utils.arrayRandomIndex = function (array) {
	        return Math.floor(Math.random() * array.length);
	    };
	    Utils.itemFromArray = function (array, index) {
	        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
	    };
	    Utils.randomInRange = function (min, max) {
	        return (Math.random() * (max - min)) + min;
	    };
	    Utils.isPointInside = function (point, size, radius) {
	        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
	    };
	    Utils.areBoundsInside = function (bounds, size) {
	        return bounds.left < size.width && bounds.right > 0
	            && bounds.top < size.height && bounds.bottom > 0;
	    };
	    Utils.calculateBounds = function (point, radius) {
	        return {
	            bottom: point.y + radius,
	            left: point.x - radius,
	            right: point.x + radius,
	            top: point.y - radius,
	        };
	    };
	    Utils.loadImage = function (source) {
	        return new Promise(function (resolve, reject) {
	            var image = {
	                source: source,
	                type: source.substr(source.length - 3),
	            };
	            if (source) {
	                var img_1 = new Image();
	                img_1.addEventListener("load", function () {
	                    image.element = img_1;
	                    resolve(image);
	                });
	                img_1.addEventListener("error", function () {
	                    reject("Error tsParticles - loading image: " + source);
	                });
	                img_1.src = source;
	            }
	            else {
	                reject("Error tsParticles - No image.src");
	            }
	        });
	    };
	    Utils.deepExtend = function (destination, source) {
	        var _a;
	        destination = destination !== null && destination !== void 0 ? destination : {};
	        for (var property in source) {
	            if (source[property] && source[property].constructor && source[property].constructor === Object) {
	                destination[property] = (_a = destination[property]) !== null && _a !== void 0 ? _a : {};
	                Utils.deepExtend(destination[property], source[property]);
	            }
	            else {
	                destination[property] = source[property];
	            }
	        }
	        return destination;
	    };
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __spreadArrays;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	var __classPrivateFieldGet;
	var __classPrivateFieldSet;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        if (exports !== root) {
	            if (typeof Object.create === "function") {
	                Object.defineProperty(exports, "__esModule", { value: true });
	            }
	            else {
	                exports.__esModule = true;
	            }
	        }
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	
	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	
	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                    t[p[i]] = s[p[i]];
	            }
	        return t;
	    };
	
	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };
	
	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };
	
	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };
	
	    __awaiter = function (thisArg, _arguments, P, generator) {
	        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };
	
	    __generator = function (thisArg, body) {
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
	    };
	
	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };
	
	    __values = function (o) {
	        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	        if (m) return m.call(o);
	        if (o && typeof o.length === "number") return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	    };
	
	    __read = function (o, n) {
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
	    };
	
	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };
	
	    __spreadArrays = function () {
	        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	        for (var r = Array(s), k = 0, i = 0; i < il; i++)
	            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	                r[k] = a[j];
	        return r;
	    };
	
	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };
	
	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };
	
	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	    };
	
	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator], i;
	        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	    };
	
	    __makeTemplateObject = function (cooked, raw) {
	        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	        return cooked;
	    };
	
	    __importStar = function (mod) {
	        if (mod && mod.__esModule) return mod;
	        var result = {};
	        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	        result["default"] = mod;
	        return result;
	    };
	
	    __importDefault = function (mod) {
	        return (mod && mod.__esModule) ? mod : { "default": mod };
	    };
	
	    __classPrivateFieldGet = function (receiver, privateMap) {
	        if (!privateMap.has(receiver)) {
	            throw new TypeError("attempted to get private field on non-instance");
	        }
	        return privateMap.get(receiver);
	    };
	
	    __classPrivateFieldSet = function (receiver, privateMap, value) {
	        if (!privateMap.has(receiver)) {
	            throw new TypeError("attempted to set private field on non-instance");
	        }
	        privateMap.set(receiver, value);
	        return value;
	    }
	
	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__spreadArrays", __spreadArrays);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	    exporter("__makeTemplateObject", __makeTemplateObject);
	    exporter("__importStar", __importStar);
	    exporter("__importDefault", __importDefault);
	    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
	    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor = (function () {
	    function OptionsColor() {
	        this.value = "#fff";
	    }
	    OptionsColor.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    OptionsColor.create = function (source, data) {
	        var color = source !== null && source !== void 0 ? source : new OptionsColor();
	        if (data !== undefined) {
	            color.load(typeof data === "string" ? { value: data } : data);
	        }
	        return color;
	    };
	    return OptionsColor;
	}());
	exports.OptionsColor = OptionsColor;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(141);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClickMode;
	(function (ClickMode) {
	    ClickMode["bubble"] = "bubble";
	    ClickMode["push"] = "push";
	    ClickMode["remove"] = "remove";
	    ClickMode["repulse"] = "repulse";
	    ClickMode["emitter"] = "emitter";
	    ClickMode["absorber"] = "absorber";
	})(ClickMode = exports.ClickMode || (exports.ClickMode = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Constants = (function () {
	    function Constants() {
	    }
	    Constants.canvasClass = "tsparticles-canvas-el";
	    Constants.randomColorValue = "random";
	    Constants.midColorValue = "mid";
	    Constants.touchEndEvent = "touchend";
	    Constants.mouseUpEvent = "mouseup";
	    Constants.mouseMoveEvent = "mousemove";
	    Constants.touchStartEvent = "touchstart";
	    Constants.touchMoveEvent = "touchmove";
	    Constants.mouseLeaveEvent = "mouseleave";
	    Constants.touchCancelEvent = "touchcancel";
	    Constants.resizeEvent = "resize";
	    Constants.visibilityChangeEvent = "visibilitychange";
	    Constants.noPolygonDataLoaded = "No polygon data loaded.";
	    Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
	    return Constants;
	}());
	exports.Constants = Constants;


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Range_1 = __webpack_require__(179);
	var Circle = (function (_super) {
	    tslib_1.__extends(Circle, _super);
	    function Circle(x, y, radius) {
	        var _this = _super.call(this, x, y) || this;
	        _this.radius = radius;
	        return _this;
	    }
	    Circle.prototype.contains = function (point) {
	        var d = Math.pow((point.x - this.position.x), 2) + Math.pow((point.y - this.position.y), 2);
	        return d <= this.radius * this.radius;
	    };
	    Circle.prototype.intersects = function (range) {
	        var rect = range;
	        var circle = range;
	        var pos1 = this.position;
	        var pos2 = range.position;
	        var xDist = Math.abs(pos2.x - pos1.x);
	        var yDist = Math.abs(pos2.y - pos1.y);
	        var r = this.radius;
	        if (circle.radius !== undefined) {
	            var r2 = circle.radius;
	            var rSum = r + r2;
	            var dist = Math.sqrt(xDist * xDist + yDist + yDist);
	            return rSum > dist;
	        }
	        else if (rect.size !== undefined) {
	            var w = rect.size.width;
	            var h = rect.size.height;
	            var edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);
	            if (xDist > (r + w) || yDist > (r + h)) {
	                return false;
	            }
	            if (xDist <= w || yDist <= h) {
	                return true;
	            }
	            return edges <= r * r;
	        }
	        return false;
	    };
	    return Circle;
	}(Range_1.Range));
	exports.Circle = Circle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Utils_1 = __webpack_require__(2);
	var Constants_1 = __webpack_require__(10);
	var ColorUtils = (function () {
	    function ColorUtils() {
	    }
	    ColorUtils.colorToRgb = function (color) {
	        var _a, _b;
	        var res;
	        if (typeof (color.value) === "string") {
	            if (color.value === Constants_1.Constants.randomColorValue) {
	                res = {
	                    b: Math.floor(Math.random() * 256),
	                    g: Math.floor(Math.random() * 256),
	                    r: Math.floor(Math.random() * 256),
	                };
	            }
	            else {
	                res = ColorUtils.stringToRgb(color.value);
	            }
	        }
	        else {
	            if (color.value instanceof Array) {
	                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
	                res = ColorUtils.stringToRgb(colorSelected);
	            }
	            else {
	                var colorValue = color.value;
	                var rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
	                if (rgbColor.r !== undefined) {
	                    res = rgbColor;
	                }
	                else {
	                    var hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
	                    if (hslColor.h !== undefined) {
	                        res = ColorUtils.hslToRgb(hslColor);
	                    }
	                }
	            }
	        }
	        return res;
	    };
	    ColorUtils.stringToAlpha = function (input) {
	        var _a;
	        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
	    };
	    ColorUtils.stringToRgb = function (input) {
	        return ColorUtils.stringToRgba(input);
	    };
	    ColorUtils.hslToRgb = function (hsl) {
	        var result = { b: 0, g: 0, r: 0 };
	        var hslPercent = {
	            h: hsl.h > 1 ? hsl.h / 360 : hsl.h,
	            l: hsl.l > 1 ? hsl.l / 100 : hsl.l,
	            s: hsl.s > 1 ? hsl.s / 100 : hsl.s,
	        };
	        if (hslPercent.s === 0) {
	            result.b = hslPercent.l;
	            result.g = hslPercent.l;
	            result.r = hslPercent.l;
	        }
	        else {
	            var q = hslPercent.l < 0.5 ?
	                hslPercent.l * (1 + hslPercent.s) :
	                hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
	            var p = 2 * hslPercent.l - q;
	            result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
	            result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
	            result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
	        }
	        result.r = Math.floor(result.r * 255);
	        result.g = Math.floor(result.g * 255);
	        result.b = Math.floor(result.b * 255);
	        return result;
	    };
	    ColorUtils.hslaToRgba = function (hsla) {
	        var rgbResult = ColorUtils.hslToRgb(hsla);
	        return {
	            a: hsla.a,
	            b: rgbResult.b,
	            g: rgbResult.g,
	            r: rgbResult.r,
	        };
	    };
	    ColorUtils.getRandomRgbColor = function (min) {
	        var _a;
	        var fixedMin = min || 0;
	        var minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
	        var factor = minColor ^ 0xFFFFFF;
	        var randomColor = Math.floor(((Math.random() * factor) | minColor)).toString(16);
	        return (_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
	            b: 0,
	            g: 0,
	            r: 0,
	        };
	    };
	    ColorUtils.getStyleFromColor = function (color, opacity) {
	        var opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
	        return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + opacityValue + ")";
	    };
	    ColorUtils.mix = function (color1, color2, size1, size2) {
	        return {
	            b: Utils_1.Utils.mix(color1.b, color2.b, size1, size2),
	            g: Utils_1.Utils.mix(color1.g, color2.g, size1, size2),
	            r: Utils_1.Utils.mix(color1.r, color2.r, size1, size2),
	        };
	    };
	    ColorUtils.hue2rgb = function (p, q, t) {
	        var tCalc = t;
	        if (tCalc < 0) {
	            tCalc += 1;
	        }
	        if (tCalc > 1) {
	            tCalc -= 1;
	        }
	        if (tCalc < 1 / 6) {
	            return p + (q - p) * 6 * tCalc;
	        }
	        if (tCalc < 1 / 2) {
	            return q;
	        }
	        if (tCalc < 2 / 3) {
	            return p + (q - p) * (2 / 3 - tCalc) * 6;
	        }
	        return p;
	    };
	    ColorUtils.stringToRgba = function (input) {
	        if (input.startsWith('rgb')) {
	            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
	            var result = regex.exec(input);
	            return result ? {
	                a: result.length > 4 ? parseFloat(result[5]) : 1,
	                b: parseInt(result[3], 10),
	                g: parseInt(result[2], 10),
	                r: parseInt(result[1], 10),
	            } : undefined;
	        }
	        else if (input.startsWith('hsl')) {
	            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
	            var result = regex.exec(input);
	            return result ? ColorUtils.hslaToRgba({
	                a: result.length > 4 ? parseFloat(result[5]) : 1,
	                h: parseInt(result[1], 10),
	                l: parseInt(result[3], 10),
	                s: parseInt(result[2], 10),
	            }) : undefined;
	        }
	        else {
	            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
	            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
	                return r + r + g + g + b + b + (a !== undefined ? a + a : "");
	            });
	            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
	            var result = regex.exec(hexFixed);
	            return result ? {
	                a: result[4] !== undefined ? parseInt(result[4], 16) / 0xFF : 1,
	                b: parseInt(result[3], 16),
	                g: parseInt(result[2], 16),
	                r: parseInt(result[1], 16),
	            } : undefined;
	        }
	    };
	    return ColorUtils;
	}());
	exports.ColorUtils = ColorUtils;


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(334),
	    getValue = __webpack_require__(347);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var HoverMode;
	(function (HoverMode) {
	    HoverMode["bubble"] = "bubble";
	    HoverMode["connect"] = "connect";
	    HoverMode["grab"] = "grab";
	    HoverMode["repulse"] = "repulse";
	    HoverMode["slow"] = "slow";
	})(HoverMode = exports.HoverMode || (exports.HoverMode = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ShapeType;
	(function (ShapeType) {
	    ShapeType["char"] = "char";
	    ShapeType["character"] = "character";
	    ShapeType["circle"] = "circle";
	    ShapeType["edge"] = "edge";
	    ShapeType["image"] = "image";
	    ShapeType["images"] = "images";
	    ShapeType["line"] = "line";
	    ShapeType["polygon"] = "polygon";
	    ShapeType["square"] = "square";
	    ShapeType["star"] = "star";
	    ShapeType["triangle"] = "triangle";
	})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
	 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	 */
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.fontawesome = {})));
	}(this, (function (exports) { 'use strict';
	
	var noop = function noop() {};
	
	var _WINDOW = {};
	var _DOCUMENT = {};
	var _MUTATION_OBSERVER$1 = null;
	var _PERFORMANCE = { mark: noop, measure: noop };
	
	try {
	  if (typeof window !== 'undefined') _WINDOW = window;
	  if (typeof document !== 'undefined') _DOCUMENT = document;
	  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
	  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
	} catch (e) {}
	
	var _ref = _WINDOW.navigator || {};
	var _ref$userAgent = _ref.userAgent;
	var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;
	
	var WINDOW = _WINDOW;
	var DOCUMENT = _DOCUMENT;
	var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
	var PERFORMANCE = _PERFORMANCE;
	var IS_BROWSER = !!WINDOW.document;
	var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
	var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
	
	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
	var UNITS_IN_GRID = 16;
	var DEFAULT_FAMILY_PREFIX = 'fa';
	var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
	var DATA_FA_I2SVG = 'data-fa-i2svg';
	var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
	var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
	
	var PRODUCTION = function () {
	  try {
	    return ("production") === 'production';
	  } catch (e) {
	    return false;
	  }
	}();
	
	var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	
	var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
	
	var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
	  return n + 'x';
	})).concat(oneToTwenty.map(function (n) {
	  return 'w-' + n;
	}));
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	var initial = WINDOW.FontAwesomeConfig || {};
	var initialKeys = Object.keys(initial);
	
	var _default = _extends({
	  familyPrefix: DEFAULT_FAMILY_PREFIX,
	  replacementClass: DEFAULT_REPLACEMENT_CLASS,
	  autoReplaceSvg: true,
	  autoAddCss: true,
	  autoA11y: true,
	  searchPseudoElements: false,
	  observeMutations: true,
	  keepOriginalSource: true,
	  measurePerformance: false,
	  showMissingIcons: true
	}, initial);
	
	if (!_default.autoReplaceSvg) _default.observeMutations = false;
	
	var config$1 = _extends({}, _default);
	
	WINDOW.FontAwesomeConfig = config$1;
	
	function update(newConfig) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$asNewDefault = params.asNewDefault,
	      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;
	
	  var validKeys = Object.keys(config$1);
	  var ok = asNewDefault ? function (k) {
	    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
	  } : function (k) {
	    return ~validKeys.indexOf(k);
	  };
	
	  Object.keys(newConfig).forEach(function (configKey) {
	    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
	  });
	}
	
	function auto(value) {
	  update({
	    autoReplaceSvg: value,
	    observeMutations: value
	  });
	}
	
	var w = WINDOW || {};
	
	if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
	if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
	if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
	if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
	
	var namespace = w[NAMESPACE_IDENTIFIER];
	
	var functions = [];
	var listener = function listener() {
	  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
	  loaded = 1;
	  functions.map(function (fn) {
	    return fn();
	  });
	};
	
	var loaded = false;
	
	if (IS_DOM) {
	  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
	
	  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
	}
	
	var domready = function (fn) {
	  if (!IS_DOM) return;
	  loaded ? setTimeout(fn, 0) : functions.push(fn);
	};
	
	var d = UNITS_IN_GRID;
	
	var meaninglessTransform = {
	  size: 16,
	  x: 0,
	  y: 0,
	  rotate: 0,
	  flipX: false,
	  flipY: false
	};
	
	function isReserved(name) {
	  return ~RESERVED_CLASSES.indexOf(name);
	}
	
	function bunker(fn) {
	  try {
	    fn();
	  } catch (e) {
	    if (!PRODUCTION) {
	      throw e;
	    }
	  }
	}
	
	function insertCss(css) {
	  if (!css || !IS_DOM) {
	    return;
	  }
	
	  var style = DOCUMENT.createElement('style');
	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;
	
	  var headChildren = DOCUMENT.head.childNodes;
	  var beforeChild = null;
	
	  for (var i = headChildren.length - 1; i > -1; i--) {
	    var child = headChildren[i];
	    var tagName = (child.tagName || '').toUpperCase();
	    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
	      beforeChild = child;
	    }
	  }
	
	  DOCUMENT.head.insertBefore(style, beforeChild);
	
	  return css;
	}
	
	var _uniqueId = 0;
	
	function nextUniqueId() {
	  _uniqueId++;
	
	  return _uniqueId;
	}
	
	function toArray(obj) {
	  var array = [];
	
	  for (var i = (obj || []).length >>> 0; i--;) {
	    array[i] = obj[i];
	  }
	
	  return array;
	}
	
	function classArray(node) {
	  if (node.classList) {
	    return toArray(node.classList);
	  } else {
	    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
	      return i;
	    });
	  }
	}
	
	function getIconName(familyPrefix, cls) {
	  var parts = cls.split('-');
	  var prefix = parts[0];
	  var iconName = parts.slice(1).join('-');
	
	  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
	    return iconName;
	  } else {
	    return null;
	  }
	}
	
	function htmlEscape(str) {
	  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
	
	function joinAttributes(attributes) {
	  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
	    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
	  }, '').trim();
	}
	
	function joinStyles(styles) {
	  return Object.keys(styles || {}).reduce(function (acc, styleName) {
	    return acc + (styleName + ': ' + styles[styleName] + ';');
	  }, '');
	}
	
	function transformIsMeaningful(transform) {
	  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
	}
	
	function transformForSvg(_ref) {
	  var transform = _ref.transform,
	      containerWidth = _ref.containerWidth,
	      iconWidth = _ref.iconWidth;
	
	  var outer = {
	    transform: 'translate(' + containerWidth / 2 + ' 256)'
	  };
	  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
	  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
	  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
	  var inner = {
	    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
	  };
	  var path = {
	    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
	  };
	  return {
	    outer: outer,
	    inner: inner,
	    path: path
	  };
	}
	
	function transformForCss(_ref2) {
	  var transform = _ref2.transform,
	      _ref2$width = _ref2.width,
	      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
	      _ref2$height = _ref2.height,
	      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
	      _ref2$startCentered = _ref2.startCentered,
	      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;
	
	  var val = '';
	
	  if (startCentered && IS_IE) {
	    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
	  } else if (startCentered) {
	    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
	  } else {
	    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
	  }
	
	  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
	  val += 'rotate(' + transform.rotate + 'deg) ';
	
	  return val;
	}
	
	var ALL_SPACE = {
	  x: 0,
	  y: 0,
	  width: '100%',
	  height: '100%'
	};
	
	var makeIconMasking = function (_ref) {
	  var children = _ref.children,
	      attributes = _ref.attributes,
	      main = _ref.main,
	      mask = _ref.mask,
	      transform = _ref.transform;
	  var mainWidth = main.width,
	      mainPath = main.icon;
	  var maskWidth = mask.width,
	      maskPath = mask.icon;
	
	
	  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });
	
	  var maskRect = {
	    tag: 'rect',
	    attributes: _extends({}, ALL_SPACE, {
	      fill: 'white'
	    })
	  };
	  var maskInnerGroup = {
	    tag: 'g',
	    attributes: _extends({}, trans.inner),
	    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
	  };
	  var maskOuterGroup = {
	    tag: 'g',
	    attributes: _extends({}, trans.outer),
	    children: [maskInnerGroup]
	  };
	  var maskId = 'mask-' + nextUniqueId();
	  var clipId = 'clip-' + nextUniqueId();
	  var maskTag = {
	    tag: 'mask',
	    attributes: _extends({}, ALL_SPACE, {
	      id: maskId,
	      maskUnits: 'userSpaceOnUse',
	      maskContentUnits: 'userSpaceOnUse'
	    }),
	    children: [maskRect, maskOuterGroup]
	  };
	  var defs = {
	    tag: 'defs',
	    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
	  };
	
	  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });
	
	  return {
	    children: children,
	    attributes: attributes
	  };
	};
	
	var makeIconStandard = function (_ref) {
	  var children = _ref.children,
	      attributes = _ref.attributes,
	      main = _ref.main,
	      transform = _ref.transform,
	      styles = _ref.styles;
	
	  var styleString = joinStyles(styles);
	
	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }
	
	  if (transformIsMeaningful(transform)) {
	    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
	    children.push({
	      tag: 'g',
	      attributes: _extends({}, trans.outer),
	      children: [{
	        tag: 'g',
	        attributes: _extends({}, trans.inner),
	        children: [{
	          tag: main.icon.tag,
	          children: main.icon.children,
	          attributes: _extends({}, main.icon.attributes, trans.path)
	        }]
	      }]
	    });
	  } else {
	    children.push(main.icon);
	  }
	
	  return {
	    children: children,
	    attributes: attributes
	  };
	};
	
	var asIcon = function (_ref) {
	  var children = _ref.children,
	      main = _ref.main,
	      mask = _ref.mask,
	      attributes = _ref.attributes,
	      styles = _ref.styles,
	      transform = _ref.transform;
	
	  if (transformIsMeaningful(transform) && main.found && !mask.found) {
	    var width = main.width,
	        height = main.height;
	
	    var offset = {
	      x: width / height / 2,
	      y: 0.5
	    };
	    attributes['style'] = joinStyles(_extends({}, styles, {
	      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
	    }));
	  }
	
	  return [{
	    tag: 'svg',
	    attributes: attributes,
	    children: children
	  }];
	};
	
	var asSymbol = function (_ref) {
	  var prefix = _ref.prefix,
	      iconName = _ref.iconName,
	      children = _ref.children,
	      attributes = _ref.attributes,
	      symbol = _ref.symbol;
	
	  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;
	
	  return [{
	    tag: 'svg',
	    attributes: {
	      style: 'display: none;'
	    },
	    children: [{
	      tag: 'symbol',
	      attributes: _extends({}, attributes, { id: id }),
	      children: children
	    }]
	  }];
	};
	
	function makeInlineSvgAbstract(params) {
	  var _params$icons = params.icons,
	      main = _params$icons.main,
	      mask = _params$icons.mask,
	      prefix = params.prefix,
	      iconName = params.iconName,
	      transform = params.transform,
	      symbol = params.symbol,
	      title = params.title,
	      extra = params.extra,
	      _params$watchable = params.watchable,
	      watchable = _params$watchable === undefined ? false : _params$watchable;
	
	  var _ref = mask.found ? mask : main,
	      width = _ref.width,
	      height = _ref.height;
	
	  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
	  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');
	
	  var content = {
	    children: [],
	    attributes: _extends({}, extra.attributes, {
	      'data-prefix': prefix,
	      'data-icon': iconName,
	      'class': attrClass,
	      'role': 'img',
	      'xmlns': 'http://www.w3.org/2000/svg',
	      'viewBox': '0 0 ' + width + ' ' + height
	    })
	  };
	
	  if (watchable) {
	    content.attributes[DATA_FA_I2SVG] = '';
	  }
	
	  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });
	
	  var args = _extends({}, content, {
	    prefix: prefix,
	    iconName: iconName,
	    main: main,
	    mask: mask,
	    transform: transform,
	    symbol: symbol,
	    styles: extra.styles
	  });
	
	  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
	      children = _ref2.children,
	      attributes = _ref2.attributes;
	
	  args.children = children;
	  args.attributes = attributes;
	
	  if (symbol) {
	    return asSymbol(args);
	  } else {
	    return asIcon(args);
	  }
	}
	
	function makeLayersTextAbstract(params) {
	  var content = params.content,
	      width = params.width,
	      height = params.height,
	      transform = params.transform,
	      title = params.title,
	      extra = params.extra,
	      _params$watchable2 = params.watchable,
	      watchable = _params$watchable2 === undefined ? false : _params$watchable2;
	
	
	  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
	    'class': extra.classes.join(' ')
	  });
	
	  if (watchable) {
	    attributes[DATA_FA_I2SVG] = '';
	  }
	
	  var styles = _extends({}, extra.styles);
	
	  if (transformIsMeaningful(transform)) {
	    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
	    styles['-webkit-transform'] = styles['transform'];
	  }
	
	  var styleString = joinStyles(styles);
	
	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }
	
	  var val = [];
	
	  val.push({
	    tag: 'span',
	    attributes: attributes,
	    children: [content]
	  });
	
	  if (title) {
	    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
	  }
	
	  return val;
	}
	
	var noop$2 = function noop() {};
	var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
	var preamble = 'FA "5.0.13"';
	
	var begin = function begin(name) {
	  p.mark(preamble + ' ' + name + ' begins');
	  return function () {
	    return end(name);
	  };
	};
	
	var end = function end(name) {
	  p.mark(preamble + ' ' + name + ' ends');
	  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
	};
	
	var perf = { begin: begin, end: end };
	
	'use strict';
	
	/**
	 * Internal helper to bind a function known to have 4 arguments
	 * to a given context.
	 */
	var bindInternal4 = function bindInternal4 (func, thisContext) {
	  return function (a, b, c, d) {
	    return func.call(thisContext, a, b, c, d);
	  };
	};
	
	'use strict';
	
	
	
	/**
	 * # Reduce
	 *
	 * A fast object `.reduce()` implementation.
	 *
	 * @param  {Object}   subject      The object to reduce over.
	 * @param  {Function} fn           The reducer function.
	 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}   thisContext  The context for the reducer.
	 * @return {mixed}                 The final result.
	 */
	var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
	  var keys = Object.keys(subject),
	      length = keys.length,
	      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
	      i, key, result;
	
	  if (initialValue === undefined) {
	    i = 1;
	    result = subject[keys[0]];
	  }
	  else {
	    i = 0;
	    result = initialValue;
	  }
	
	  for (; i < length; i++) {
	    key = keys[i];
	    result = iterator(result, subject[key], key, subject);
	  }
	
	  return result;
	};
	
	var styles$2 = namespace.styles;
	var shims = namespace.shims;
	
	
	var _byUnicode = {};
	var _byLigature = {};
	var _byOldName = {};
	
	var build = function build() {
	  var lookup = function lookup(reducer) {
	    return reduce(styles$2, function (o, style, prefix) {
	      o[prefix] = reduce(style, reducer, {});
	      return o;
	    }, {});
	  };
	
	  _byUnicode = lookup(function (acc, icon, iconName) {
	    acc[icon[3]] = iconName;
	
	    return acc;
	  });
	
	  _byLigature = lookup(function (acc, icon, iconName) {
	    var ligatures = icon[2];
	
	    acc[iconName] = iconName;
	
	    ligatures.forEach(function (ligature) {
	      acc[ligature] = iconName;
	    });
	
	    return acc;
	  });
	
	  var hasRegular = 'far' in styles$2;
	
	  _byOldName = reduce(shims, function (acc, shim) {
	    var oldName = shim[0];
	    var prefix = shim[1];
	    var iconName = shim[2];
	
	    if (prefix === 'far' && !hasRegular) {
	      prefix = 'fas';
	    }
	
	    acc[oldName] = { prefix: prefix, iconName: iconName };
	
	    return acc;
	  }, {});
	};
	
	build();
	
	function byUnicode(prefix, unicode) {
	  return _byUnicode[prefix][unicode];
	}
	
	function byLigature(prefix, ligature) {
	  return _byLigature[prefix][ligature];
	}
	
	function byOldName(name) {
	  return _byOldName[name] || { prefix: null, iconName: null };
	}
	
	var styles$1 = namespace.styles;
	
	
	var emptyCanonicalIcon = function emptyCanonicalIcon() {
	  return { prefix: null, iconName: null, rest: [] };
	};
	
	function getCanonicalIcon(values) {
	  return values.reduce(function (acc, cls) {
	    var iconName = getIconName(config$1.familyPrefix, cls);
	
	    if (styles$1[cls]) {
	      acc.prefix = cls;
	    } else if (iconName) {
	      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
	
	      acc.iconName = shim.iconName || iconName;
	      acc.prefix = shim.prefix || acc.prefix;
	    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
	      acc.rest.push(cls);
	    }
	
	    return acc;
	  }, emptyCanonicalIcon());
	}
	
	function iconFromMapping(mapping, prefix, iconName) {
	  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
	    return {
	      prefix: prefix,
	      iconName: iconName,
	      icon: mapping[prefix][iconName]
	    };
	  }
	}
	
	function toHtml(abstractNodes) {
	  var tag = abstractNodes.tag,
	      _abstractNodes$attrib = abstractNodes.attributes,
	      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
	      _abstractNodes$childr = abstractNodes.children,
	      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;
	
	
	  if (typeof abstractNodes === 'string') {
	    return htmlEscape(abstractNodes);
	  } else {
	    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
	  }
	}
	
	var noop$1 = function noop() {};
	
	function isWatched(node) {
	  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
	
	  return typeof i2svg === 'string';
	}
	
	function getMutator() {
	  if (config$1.autoReplaceSvg === true) {
	    return mutators.replace;
	  }
	
	  var mutator = mutators[config$1.autoReplaceSvg];
	
	  return mutator || mutators.replace;
	}
	
	var mutators = {
	  replace: function replace(mutation) {
	    var node = mutation[0];
	    var abstract = mutation[1];
	    var newOuterHTML = abstract.map(function (a) {
	      return toHtml(a);
	    }).join('\n');
	
	    if (node.parentNode && node.outerHTML) {
	      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
	    } else if (node.parentNode) {
	      var newNode = document.createElement('span');
	      node.parentNode.replaceChild(newNode, node);
	      newNode.outerHTML = newOuterHTML;
	    }
	  },
	  nest: function nest(mutation) {
	    var node = mutation[0];
	    var abstract = mutation[1];
	
	    // If we already have a replaced node we do not want to continue nesting within it.
	    // Short-circuit to the standard replacement
	    if (~classArray(node).indexOf(config$1.replacementClass)) {
	      return mutators.replace(mutation);
	    }
	
	    var forSvg = new RegExp(config$1.familyPrefix + '-.*');
	
	    delete abstract[0].attributes.style;
	
	    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
	      if (cls === config$1.replacementClass || cls.match(forSvg)) {
	        acc.toSvg.push(cls);
	      } else {
	        acc.toNode.push(cls);
	      }
	
	      return acc;
	    }, { toNode: [], toSvg: [] });
	
	    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
	
	    var newInnerHTML = abstract.map(function (a) {
	      return toHtml(a);
	    }).join('\n');
	    node.setAttribute('class', splitClasses.toNode.join(' '));
	    node.setAttribute(DATA_FA_I2SVG, '');
	    node.innerHTML = newInnerHTML;
	  }
	};
	
	function perform(mutations, callback) {
	  var callbackFunction = typeof callback === 'function' ? callback : noop$1;
	
	  if (mutations.length === 0) {
	    callbackFunction();
	  } else {
	    var frame = WINDOW.requestAnimationFrame || function (op) {
	      return op();
	    };
	
	    frame(function () {
	      var mutator = getMutator();
	      var mark = perf.begin('mutate');
	
	      mutations.map(mutator);
	
	      mark();
	
	      callbackFunction();
	    });
	  }
	}
	
	var disabled = false;
	
	function disableObservation(operation) {
	  disabled = true;
	  operation();
	  disabled = false;
	}
	
	var mo = null;
	
	function observe(options) {
	  if (!MUTATION_OBSERVER) return;
	
	  var treeCallback = options.treeCallback,
	      nodeCallback = options.nodeCallback,
	      pseudoElementsCallback = options.pseudoElementsCallback;
	
	
	  mo = new MUTATION_OBSERVER(function (objects) {
	    if (disabled) return;
	
	    toArray(objects).forEach(function (mutationRecord) {
	      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
	        if (config$1.searchPseudoElements) {
	          pseudoElementsCallback(mutationRecord.target);
	        }
	
	        treeCallback(mutationRecord.target);
	      }
	
	      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
	        pseudoElementsCallback(mutationRecord.target.parentNode);
	      }
	
	      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
	        if (mutationRecord.attributeName === 'class') {
	          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
	              prefix = _getCanonicalIcon.prefix,
	              iconName = _getCanonicalIcon.iconName;
	
	          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
	          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
	        } else {
	          nodeCallback(mutationRecord.target);
	        }
	      }
	    });
	  });
	
	  if (!IS_DOM) return;
	
	  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
	    childList: true, attributes: true, characterData: true, subtree: true
	  });
	}
	
	function disconnect() {
	  if (!mo) return;
	
	  mo.disconnect();
	}
	
	var styleParser = function (node) {
	  var style = node.getAttribute('style');
	
	  var val = [];
	
	  if (style) {
	    val = style.split(';').reduce(function (acc, style) {
	      var styles = style.split(':');
	      var prop = styles[0];
	      var value = styles.slice(1);
	
	      if (prop && value.length > 0) {
	        acc[prop] = value.join(':').trim();
	      }
	
	      return acc;
	    }, {});
	  }
	
	  return val;
	};
	
	function toHex(unicode) {
	  var result = '';
	
	  for (var i = 0; i < unicode.length; i++) {
	    var hex = unicode.charCodeAt(i).toString(16);
	    result += ('000' + hex).slice(-4);
	  }
	
	  return result;
	}
	
	var classParser = function (node) {
	  var existingPrefix = node.getAttribute('data-prefix');
	  var existingIconName = node.getAttribute('data-icon');
	  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
	
	  var val = getCanonicalIcon(classArray(node));
	
	  if (existingPrefix && existingIconName) {
	    val.prefix = existingPrefix;
	    val.iconName = existingIconName;
	  }
	
	  if (val.prefix && innerText.length > 1) {
	    val.iconName = byLigature(val.prefix, node.innerText);
	  } else if (val.prefix && innerText.length === 1) {
	    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
	  }
	
	  return val;
	};
	
	var parseTransformString = function parseTransformString(transformString) {
	  var transform = {
	    size: 16,
	    x: 0,
	    y: 0,
	    flipX: false,
	    flipY: false,
	    rotate: 0
	  };
	
	  if (!transformString) {
	    return transform;
	  } else {
	    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
	      var parts = n.toLowerCase().split('-');
	      var first = parts[0];
	      var rest = parts.slice(1).join('-');
	
	      if (first && rest === 'h') {
	        acc.flipX = true;
	        return acc;
	      }
	
	      if (first && rest === 'v') {
	        acc.flipY = true;
	        return acc;
	      }
	
	      rest = parseFloat(rest);
	
	      if (isNaN(rest)) {
	        return acc;
	      }
	
	      switch (first) {
	        case 'grow':
	          acc.size = acc.size + rest;
	          break;
	        case 'shrink':
	          acc.size = acc.size - rest;
	          break;
	        case 'left':
	          acc.x = acc.x - rest;
	          break;
	        case 'right':
	          acc.x = acc.x + rest;
	          break;
	        case 'up':
	          acc.y = acc.y - rest;
	          break;
	        case 'down':
	          acc.y = acc.y + rest;
	          break;
	        case 'rotate':
	          acc.rotate = acc.rotate + rest;
	          break;
	      }
	
	      return acc;
	    }, transform);
	  }
	};
	
	var transformParser = function (node) {
	  return parseTransformString(node.getAttribute('data-fa-transform'));
	};
	
	var symbolParser = function (node) {
	  var symbol = node.getAttribute('data-fa-symbol');
	
	  return symbol === null ? false : symbol === '' ? true : symbol;
	};
	
	var attributesParser = function (node) {
	  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
	    if (acc.name !== 'class' && acc.name !== 'style') {
	      acc[attr.name] = attr.value;
	    }
	    return acc;
	  }, {});
	
	  var title = node.getAttribute('title');
	
	  if (config$1.autoA11y) {
	    if (title) {
	      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
	    } else {
	      extraAttributes['aria-hidden'] = 'true';
	    }
	  }
	
	  return extraAttributes;
	};
	
	var maskParser = function (node) {
	  var mask = node.getAttribute('data-fa-mask');
	
	  if (!mask) {
	    return emptyCanonicalIcon();
	  } else {
	    return getCanonicalIcon(mask.split(' ').map(function (i) {
	      return i.trim();
	    }));
	  }
	};
	
	function parseMeta(node) {
	  var _classParser = classParser(node),
	      iconName = _classParser.iconName,
	      prefix = _classParser.prefix,
	      extraClasses = _classParser.rest;
	
	  var extraStyles = styleParser(node);
	  var transform = transformParser(node);
	  var symbol = symbolParser(node);
	  var extraAttributes = attributesParser(node);
	  var mask = maskParser(node);
	
	  return {
	    iconName: iconName,
	    title: node.getAttribute('title'),
	    prefix: prefix,
	    transform: transform,
	    symbol: symbol,
	    mask: mask,
	    extra: {
	      classes: extraClasses,
	      styles: extraStyles,
	      attributes: extraAttributes
	    }
	  };
	}
	
	function MissingIcon(error) {
	  this.name = 'MissingIcon';
	  this.message = error || 'Icon unavailable';
	  this.stack = new Error().stack;
	}
	
	MissingIcon.prototype = Object.create(Error.prototype);
	MissingIcon.prototype.constructor = MissingIcon;
	
	var FILL = { fill: 'currentColor' };
	var ANIMATION_BASE = {
	  attributeType: 'XML',
	  repeatCount: 'indefinite',
	  dur: '2s'
	};
	var RING = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
	  })
	};
	var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
	  attributeName: 'opacity'
	});
	var DOT = {
	  tag: 'circle',
	  attributes: _extends({}, FILL, {
	    cx: '256',
	    cy: '364',
	    r: '28'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
	};
	var QUESTION = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    opacity: '1',
	    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
	};
	var EXCLAMATION = {
	  tag: 'path',
	  attributes: _extends({}, FILL, {
	    opacity: '0',
	    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
	  }),
	  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
	};
	
	var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };
	
	var styles = namespace.styles;
	
	var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
	var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
	var STYLE_TO_PREFIX = {
	  'Solid': 'fas',
	  'Regular': 'far',
	  'Light': 'fal',
	  'Brands': 'fab'
	};
	
	function findIcon(iconName, prefix) {
	  var val = {
	    found: false,
	    width: 512,
	    height: 512,
	    icon: missing
	  };
	
	  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
	    var icon = styles[prefix][iconName];
	    var width = icon[0];
	    var height = icon[1];
	    var vectorData = icon.slice(4);
	
	    val = {
	      found: true,
	      width: width,
	      height: height,
	      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
	    };
	  } else if (iconName && prefix && !config$1.showMissingIcons) {
	    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
	  }
	
	  return val;
	}
	
	function generateSvgReplacementMutation(node, nodeMeta) {
	  var iconName = nodeMeta.iconName,
	      title = nodeMeta.title,
	      prefix = nodeMeta.prefix,
	      transform = nodeMeta.transform,
	      symbol = nodeMeta.symbol,
	      mask = nodeMeta.mask,
	      extra = nodeMeta.extra;
	
	
	  return [node, makeInlineSvgAbstract({
	    icons: {
	      main: findIcon(iconName, prefix),
	      mask: findIcon(mask.iconName, mask.prefix)
	    },
	    prefix: prefix,
	    iconName: iconName,
	    transform: transform,
	    symbol: symbol,
	    mask: mask,
	    title: title,
	    extra: extra,
	    watchable: true
	  })];
	}
	
	function generateLayersText(node, nodeMeta) {
	  var title = nodeMeta.title,
	      transform = nodeMeta.transform,
	      extra = nodeMeta.extra;
	
	
	  var width = null;
	  var height = null;
	
	  if (IS_IE) {
	    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
	    var boundingClientRect = node.getBoundingClientRect();
	    width = boundingClientRect.width / computedFontSize;
	    height = boundingClientRect.height / computedFontSize;
	  }
	
	  if (config$1.autoA11y && !title) {
	    extra.attributes['aria-hidden'] = 'true';
	  }
	
	  return [node, makeLayersTextAbstract({
	    content: node.innerHTML,
	    width: width,
	    height: height,
	    transform: transform,
	    title: title,
	    extra: extra,
	    watchable: true
	  })];
	}
	
	function generateMutation(node) {
	  var nodeMeta = parseMeta(node);
	
	  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
	    return generateLayersText(node, nodeMeta);
	  } else {
	    return generateSvgReplacementMutation(node, nodeMeta);
	  }
	}
	
	function remove(node) {
	  if (typeof node.remove === 'function') {
	    node.remove();
	  } else if (node && node.parentNode) {
	    node.parentNode.removeChild(node);
	  }
	}
	
	function searchPseudoElements(root) {
	  if (!IS_DOM) return;
	
	  var end = perf.begin('searchPseudoElements');
	
	  disableObservation(function () {
	    toArray(root.querySelectorAll('*')).forEach(function (node) {
	      [':before', ':after'].forEach(function (pos) {
	        var styles = WINDOW.getComputedStyle(node, pos);
	        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
	        var children = toArray(node.children);
	        var pseudoElement = children.filter(function (c) {
	          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
	        })[0];
	
	        if (pseudoElement) {
	          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
	            remove(pseudoElement.nextSibling);
	          }
	          remove(pseudoElement);
	          pseudoElement = null;
	        }
	
	        if (fontFamily && !pseudoElement) {
	          var content = styles.getPropertyValue('content');
	          var i = DOCUMENT.createElement('i');
	          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
	          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
	          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
	          if (pos === ':before') {
	            node.insertBefore(i, node.firstChild);
	          } else {
	            node.appendChild(i);
	          }
	        }
	      });
	    });
	  });
	
	  end();
	}
	
	function onTree(root) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  if (!IS_DOM) return;
	
	  var htmlClassList = DOCUMENT.documentElement.classList;
	  var hclAdd = function hclAdd(suffix) {
	    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
	  };
	  var hclRemove = function hclRemove(suffix) {
	    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
	  };
	  var prefixes = Object.keys(styles);
	  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
	    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
	  })).join(', ');
	
	  if (prefixesDomQuery.length === 0) {
	    return;
	  }
	
	  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));
	
	  if (candidates.length > 0) {
	    hclAdd('pending');
	    hclRemove('complete');
	  } else {
	    return;
	  }
	
	  var mark = perf.begin('onTree');
	
	  var mutations = candidates.reduce(function (acc, node) {
	    try {
	      var mutation = generateMutation(node);
	
	      if (mutation) {
	        acc.push(mutation);
	      }
	    } catch (e) {
	      if (!PRODUCTION) {
	        if (e instanceof MissingIcon) {
	          console.error(e);
	        }
	      }
	    }
	
	    return acc;
	  }, []);
	
	  mark();
	
	  perform(mutations, function () {
	    hclAdd('active');
	    hclAdd('complete');
	    hclRemove('pending');
	
	    if (typeof callback === 'function') callback();
	  });
	}
	
	function onNode(node) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  var mutation = generateMutation(node);
	
	  if (mutation) {
	    perform([mutation], callback);
	  }
	}
	
	var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";
	
	var css = function () {
	  var dfp = DEFAULT_FAMILY_PREFIX;
	  var drc = DEFAULT_REPLACEMENT_CLASS;
	  var fp = config$1.familyPrefix;
	  var rc = config$1.replacementClass;
	  var s = baseStyles;
	
	  if (fp !== dfp || rc !== drc) {
	    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
	    var rPatt = new RegExp('\\.' + drc, 'g');
	
	    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
	  }
	
	  return s;
	};
	
	function define(prefix, icons) {
	  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
	    var icon = icons[iconName];
	    var expanded = !!icon.icon;
	
	    if (expanded) {
	      acc[icon.iconName] = icon.icon;
	    } else {
	      acc[iconName] = icon;
	    }
	    return acc;
	  }, {});
	
	  if (typeof namespace.hooks.addPack === 'function') {
	    namespace.hooks.addPack(prefix, normalized);
	  } else {
	    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
	  }
	
	  /**
	   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
	   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
	   * for `fas` so we'll easy the upgrade process for our users by automatically defining
	   * this as well.
	   */
	  if (prefix === 'fas') {
	    define('fa', icons);
	  }
	}
	
	var Library = function () {
	  function Library() {
	    classCallCheck(this, Library);
	
	    this.definitions = {};
	  }
	
	  createClass(Library, [{
	    key: 'add',
	    value: function add() {
	      var _this = this;
	
	      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
	        definitions[_key] = arguments[_key];
	      }
	
	      var additions = definitions.reduce(this._pullDefinitions, {});
	
	      Object.keys(additions).forEach(function (key) {
	        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
	        define(key, additions[key]);
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.definitions = {};
	    }
	  }, {
	    key: '_pullDefinitions',
	    value: function _pullDefinitions(additions, definition) {
	      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;
	
	      Object.keys(normalized).map(function (key) {
	        var _normalized$key = normalized[key],
	            prefix = _normalized$key.prefix,
	            iconName = _normalized$key.iconName,
	            icon = _normalized$key.icon;
	
	
	        if (!additions[prefix]) additions[prefix] = {};
	
	        additions[prefix][iconName] = icon;
	      });
	
	      return additions;
	    }
	  }]);
	  return Library;
	}();
	
	function prepIcon(icon) {
	  var width = icon[0];
	  var height = icon[1];
	  var vectorData = icon.slice(4);
	
	  return {
	    found: true,
	    width: width,
	    height: height,
	    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
	  };
	}
	
	var _cssInserted = false;
	
	function ensureCss() {
	  if (!config$1.autoAddCss) {
	    return;
	  }
	
	  if (!_cssInserted) {
	    insertCss(css());
	  }
	
	  _cssInserted = true;
	}
	
	function apiObject(val, abstractCreator) {
	  Object.defineProperty(val, 'abstract', {
	    get: abstractCreator
	  });
	
	  Object.defineProperty(val, 'html', {
	    get: function get() {
	      return val.abstract.map(function (a) {
	        return toHtml(a);
	      });
	    }
	  });
	
	  Object.defineProperty(val, 'node', {
	    get: function get() {
	      if (!IS_DOM) return;
	
	      var container = DOCUMENT.createElement('div');
	      container.innerHTML = val.html;
	      return container.children;
	    }
	  });
	
	  return val;
	}
	
	function findIconDefinition(params) {
	  var _params$prefix = params.prefix,
	      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
	      iconName = params.iconName;
	
	
	  if (!iconName) return;
	
	  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
	}
	
	function resolveIcons(next) {
	  return function (maybeIconDefinition) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
	
	    var mask = params.mask;
	
	
	    if (mask) {
	      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
	    }
	
	    return next(iconDefinition, _extends({}, params, { mask: mask }));
	  };
	}
	
	var library = new Library();
	
	var noAuto = function noAuto() {
	  auto(false);
	  disconnect();
	};
	
	var dom = {
	  i2svg: function i2svg() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    if (IS_DOM) {
	      ensureCss();
	
	      var _params$node = params.node,
	          node = _params$node === undefined ? DOCUMENT : _params$node,
	          _params$callback = params.callback,
	          callback = _params$callback === undefined ? function () {} : _params$callback;
	
	
	      if (config$1.searchPseudoElements) {
	        searchPseudoElements(node);
	      }
	
	      onTree(node, callback);
	    }
	  },
	
	  css: css,
	
	  insertCss: function insertCss$$1() {
	    insertCss(css());
	  }
	};
	
	var parse = {
	  transform: function transform(transformString) {
	    return parseTransformString(transformString);
	  }
	};
	
	var icon = resolveIcons(function (iconDefinition) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$transform = params.transform,
	      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
	      _params$symbol = params.symbol,
	      symbol = _params$symbol === undefined ? false : _params$symbol,
	      _params$mask = params.mask,
	      mask = _params$mask === undefined ? null : _params$mask,
	      _params$title = params.title,
	      title = _params$title === undefined ? null : _params$title,
	      _params$classes = params.classes,
	      classes = _params$classes === undefined ? [] : _params$classes,
	      _params$attributes = params.attributes,
	      attributes = _params$attributes === undefined ? {} : _params$attributes,
	      _params$styles = params.styles,
	      styles = _params$styles === undefined ? {} : _params$styles;
	
	
	  if (!iconDefinition) return;
	
	  var prefix = iconDefinition.prefix,
	      iconName = iconDefinition.iconName,
	      icon = iconDefinition.icon;
	
	
	  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
	    ensureCss();
	
	    if (config$1.autoA11y) {
	      if (title) {
	        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
	      } else {
	        attributes['aria-hidden'] = 'true';
	      }
	    }
	
	    return makeInlineSvgAbstract({
	      icons: {
	        main: prepIcon(icon),
	        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
	      },
	      prefix: prefix,
	      iconName: iconName,
	      transform: _extends({}, meaninglessTransform, transform),
	      symbol: symbol,
	      title: title,
	      extra: {
	        attributes: attributes,
	        styles: styles,
	        classes: classes
	      }
	    });
	  });
	});
	
	var text = function text(content) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$transform2 = params.transform,
	      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
	      _params$title2 = params.title,
	      title = _params$title2 === undefined ? null : _params$title2,
	      _params$classes2 = params.classes,
	      classes = _params$classes2 === undefined ? [] : _params$classes2,
	      _params$attributes2 = params.attributes,
	      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
	      _params$styles2 = params.styles,
	      styles = _params$styles2 === undefined ? {} : _params$styles2;
	
	
	  return apiObject({ type: 'text', content: content }, function () {
	    ensureCss();
	
	    return makeLayersTextAbstract({
	      content: content,
	      transform: _extends({}, meaninglessTransform, transform),
	      title: title,
	      extra: {
	        attributes: attributes,
	        styles: styles,
	        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
	      }
	    });
	  });
	};
	
	var layer = function layer(assembler) {
	  return apiObject({ type: 'layer' }, function () {
	    ensureCss();
	
	    var children = [];
	
	    assembler(function (args) {
	      Array.isArray(args) ? args.map(function (a) {
	        children = children.concat(a.abstract);
	      }) : children = children.concat(args.abstract);
	    });
	
	    return [{
	      tag: 'span',
	      attributes: { class: config$1.familyPrefix + '-layers' },
	      children: children
	    }];
	  });
	};
	
	var api$1 = {
	  noAuto: noAuto,
	  dom: dom,
	  library: library,
	  parse: parse,
	  findIconDefinition: findIconDefinition,
	  icon: icon,
	  text: text,
	  layer: layer
	};
	
	var autoReplace = function autoReplace() {
	  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
	};
	
	function bootstrap() {
	  if (IS_BROWSER) {
	    if (!WINDOW.FontAwesome) {
	      WINDOW.FontAwesome = api$1;
	    }
	
	    domready(function () {
	      if (Object.keys(namespace.styles).length > 0) {
	        autoReplace();
	      }
	
	      if (config$1.observeMutations && typeof MutationObserver === 'function') {
	        observe({
	          treeCallback: onTree,
	          nodeCallback: onNode,
	          pseudoElementsCallback: searchPseudoElements
	        });
	      }
	    });
	  }
	
	  namespace.hooks = _extends({}, namespace.hooks, {
	
	    addPack: function addPack(prefix, icons) {
	      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);
	
	      build();
	      autoReplace();
	    },
	
	    addShims: function addShims(shims) {
	      var _namespace$shims;
	
	      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));
	
	      build();
	      autoReplace();
	    }
	  });
	}
	
	Object.defineProperty(api$1, 'config', {
	  get: function get() {
	    return config$1;
	  },
	
	  set: function set(newConfig) {
	    update(newConfig);
	  }
	});
	
	if (IS_DOM) bunker(bootstrap);
	
	var config = api$1.config;
	
	exports.config = config;
	exports['default'] = api$1;
	exports.icon = icon;
	exports.noAuto = noAuto;
	exports.layer = layer;
	exports.text = text;
	exports.library = library;
	exports.dom = dom;
	exports.parse = parse;
	exports.findIconDefinition = findIconDefinition;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(357),
	    listCacheDelete = __webpack_require__(358),
	    listCacheGet = __webpack_require__(359),
	    listCacheHas = __webpack_require__(360),
	    listCacheSet = __webpack_require__(361);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(143);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(97),
	    getRawTag = __webpack_require__(344),
	    objectToString = __webpack_require__(370);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(354);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var MoveDirection;
	(function (MoveDirection) {
	    MoveDirection["bottom"] = "bottom";
	    MoveDirection["bottomLeft"] = "bottom-left";
	    MoveDirection["bottomRight"] = "bottom-right";
	    MoveDirection["left"] = "left";
	    MoveDirection["none"] = "none";
	    MoveDirection["right"] = "right";
	    MoveDirection["top"] = "top";
	    MoveDirection["topLeft"] = "top-left";
	    MoveDirection["topRight"] = "top-right";
	})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OutMode;
	(function (OutMode) {
	    OutMode["bounce"] = "bounce";
	    OutMode["bounceHorizontal"] = "bounce-horizontal";
	    OutMode["bounceVertical"] = "bounce-vertical";
	    OutMode["out"] = "out";
	    OutMode["destroy"] = "destroy";
	})(OutMode = exports.OutMode || (exports.OutMode = {}));


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskType;
	(function (PolygonMaskType) {
	    PolygonMaskType["inline"] = "inline";
	    PolygonMaskType["inside"] = "inside";
	    PolygonMaskType["outside"] = "outside";
	    PolygonMaskType["none"] = "none";
	})(PolygonMaskType = exports.PolygonMaskType || (exports.PolygonMaskType = {}));


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RotateDirection;
	(function (RotateDirection) {
	    RotateDirection["clockwise"] = "clockwise";
	    RotateDirection["counterClockwise"] = "counter-clockwise";
	    RotateDirection["random"] = "random";
	})(RotateDirection = exports.RotateDirection || (exports.RotateDirection = {}));


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Plugins = (function () {
	    function Plugins() {
	    }
	    Plugins.getPlugin = function (plugin) {
	        return this.plugins.filter(function (t) { return t.id === plugin; })[0];
	    };
	    Plugins.addPlugin = function (plugin) {
	        if (!this.getPlugin(plugin.id)) {
	            this.plugins.push(plugin);
	        }
	    };
	    Plugins.getAvailablePlugins = function (container) {
	        var res = {};
	        var availablePlugins = this.plugins.filter(function (t) { return t.needsPlugin(container); });
	        for (var _i = 0, availablePlugins_1 = availablePlugins; _i < availablePlugins_1.length; _i++) {
	            var plugin = availablePlugins_1[_i];
	            res[plugin.id] = plugin.getPlugin(container);
	        }
	        return res;
	    };
	    Plugins.getPreset = function (preset) {
	        return this.presets[preset];
	    };
	    Plugins.addPreset = function (presetKey, options) {
	        if (!this.getPreset(presetKey)) {
	            this.presets[presetKey] = options;
	        }
	    };
	    Plugins.addShapeDrawer = function (type, drawer) {
	        if (!this.drawers[type]) {
	            this.drawers[type] = drawer;
	        }
	    };
	    Plugins.getShapeDrawer = function (type) {
	        return this.drawers[type];
	    };
	    Plugins.getSupportedShapes = function () {
	        return Object.keys(this.drawers);
	    };
	    Plugins.plugins = [];
	    Plugins.presets = {};
	    Plugins.drawers = {};
	    return Plugins;
	}());
	exports.Plugins = Plugins;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(40), __webpack_require__(3), __webpack_require__(1)) :
		typeof define === 'function' && define.amd ? define(['@fortawesome/fontawesome', 'prop-types', 'react'], factory) :
		(global['react-fontawesome'] = factory(global.FontAwesome,global.PropTypes,global.React));
	}(this, (function (fontawesome,PropTypes,React) { 'use strict';
	
	fontawesome = fontawesome && fontawesome.hasOwnProperty('default') ? fontawesome['default'] : fontawesome;
	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
	React = React && React.hasOwnProperty('default') ? React['default'] : React;
	
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	
	
	
	
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var humps = createCommonjsModule(function (module) {
	// =========
	// = humps =
	// =========
	// Underscore-to-camelCase converter (and vice versa)
	// for strings and object keys
	
	// humps is copyright © 2012+ Dom Christie
	// Released under the MIT license.
	
	
	(function(global) {
	
	  var _processKeys = function(convert, obj, options) {
	    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
	      return obj;
	    }
	
	    var output,
	        i = 0,
	        l = 0;
	
	    if(_isArray(obj)) {
	      output = [];
	      for(l=obj.length; i<l; i++) {
	        output.push(_processKeys(convert, obj[i], options));
	      }
	    }
	    else {
	      output = {};
	      for(var key in obj) {
	        if(Object.prototype.hasOwnProperty.call(obj, key)) {
	          output[convert(key, options)] = _processKeys(convert, obj[key], options);
	        }
	      }
	    }
	    return output;
	  };
	
	  // String conversion methods
	
	  var separateWords = function(string, options) {
	    options = options || {};
	    var separator = options.separator || '_';
	    var split = options.split || /(?=[A-Z])/;
	
	    return string.split(split).join(separator);
	  };
	
	  var camelize = function(string) {
	    if (_isNumerical(string)) {
	      return string;
	    }
	    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
	      return chr ? chr.toUpperCase() : '';
	    });
	    // Ensure 1st char is always lowercase
	    return string.substr(0, 1).toLowerCase() + string.substr(1);
	  };
	
	  var pascalize = function(string) {
	    var camelized = camelize(string);
	    // Ensure 1st char is always uppercase
	    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
	  };
	
	  var decamelize = function(string, options) {
	    return separateWords(string, options).toLowerCase();
	  };
	
	  // Utilities
	  // Taken from Underscore.js
	
	  var toString = Object.prototype.toString;
	
	  var _isFunction = function(obj) {
	    return typeof(obj) === 'function';
	  };
	  var _isObject = function(obj) {
	    return obj === Object(obj);
	  };
	  var _isArray = function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };
	  var _isDate = function(obj) {
	    return toString.call(obj) == '[object Date]';
	  };
	  var _isRegExp = function(obj) {
	    return toString.call(obj) == '[object RegExp]';
	  };
	  var _isBoolean = function(obj) {
	    return toString.call(obj) == '[object Boolean]';
	  };
	
	  // Performant way to determine if obj coerces to a number
	  var _isNumerical = function(obj) {
	    obj = obj - 0;
	    return obj === obj;
	  };
	
	  // Sets up function which handles processing keys
	  // allowing the convert function to be modified by a callback
	  var _processor = function(convert, options) {
	    var callback = options && 'process' in options ? options.process : options;
	
	    if(typeof(callback) !== 'function') {
	      return convert;
	    }
	
	    return function(string, options) {
	      return callback(string, convert, options);
	    }
	  };
	
	  var humps = {
	    camelize: camelize,
	    decamelize: decamelize,
	    pascalize: pascalize,
	    depascalize: decamelize,
	    camelizeKeys: function(object, options) {
	      return _processKeys(_processor(camelize, options), object);
	    },
	    decamelizeKeys: function(object, options) {
	      return _processKeys(_processor(decamelize, options), object, options);
	    },
	    pascalizeKeys: function(object, options) {
	      return _processKeys(_processor(pascalize, options), object);
	    },
	    depascalizeKeys: function () {
	      return this.decamelizeKeys.apply(this, arguments);
	    }
	  };
	
	  if (false) {
	    undefined(humps);
	  } else if ('object' !== 'undefined' && module.exports) {
	    module.exports = humps;
	  } else {
	    global.humps = humps;
	  }
	
	})(commonjsGlobal);
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }
	
	  function AsyncGenerator(gen) {
	    var front, back;
	
	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };
	
	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }
	
	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;
	
	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }
	
	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;
	
	        case "throw":
	          front.reject(value);
	          break;
	
	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }
	
	      front = front.next;
	
	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }
	
	    this._invoke = send;
	
	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }
	
	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }
	
	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };
	
	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };
	
	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };
	
	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();
	
	
	
	
	
	
	
	
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	function capitalize(val) {
	  return val.charAt(0).toUpperCase() + val.slice(1);
	}
	
	function styleToObject(style) {
	  return style.split(';').map(function (s) {
	    return s.trim();
	  }).filter(function (s) {
	    return s;
	  }).reduce(function (acc, pair) {
	    var i = pair.indexOf(':');
	    var prop = humps.camelize(pair.slice(0, i));
	    var value = pair.slice(i + 1).trim();
	
	    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
	
	    return acc;
	  }, {});
	}
	
	function convert(createElement, element) {
	  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  var children = (element.children || []).map(convert.bind(null, createElement));
	
	  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
	    var val = element.attributes[key];
	
	    switch (key) {
	      case 'class':
	        acc.attrs['className'] = val;
	        delete element.attributes['class'];
	        break;
	      case 'style':
	        acc.attrs['style'] = styleToObject(val);
	        break;
	      default:
	        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
	          acc.attrs[key.toLowerCase()] = val;
	        } else {
	          acc.attrs[humps.camelize(key)] = val;
	        }
	    }
	
	    return acc;
	  }, { attrs: {} });
	
	  var _extraProps$style = extraProps.style,
	      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
	      remaining = objectWithoutProperties(extraProps, ['style']);
	
	
	  mixins.attrs['style'] = _extends({}, mixins.attrs['style'], existingStyle);
	
	  return createElement.apply(undefined, [element.tag, _extends({}, mixins.attrs, remaining)].concat(toConsumableArray(children)));
	}
	
	var PRODUCTION = false;
	
	try {
	  PRODUCTION = ("production") === 'production';
	} catch (e) {}
	
	var log = function () {
	  if (!PRODUCTION && console && typeof console.error === 'function') {
	    var _console;
	
	    (_console = console).error.apply(_console, arguments);
	  }
	};
	
	function objectWithKey(key, value) {
	  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
	}
	
	function classList(props) {
	  var _classes;
	
	  var classes = (_classes = {
	    'fa-spin': props.spin,
	    'fa-pulse': props.pulse,
	    'fa-fw': props.fixedWidth,
	    'fa-border': props.border,
	    'fa-li': props.listItem,
	    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
	    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
	  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);
	
	  return Object.keys(classes).map(function (key) {
	    return classes[key] ? key : null;
	  }).filter(function (key) {
	    return key;
	  });
	}
	
	function normalizeIconArgs(icon) {
	  if (icon === null) {
	    return null;
	  }
	
	  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
	    return icon;
	  }
	
	  if (Array.isArray(icon) && icon.length === 2) {
	    return { prefix: icon[0], iconName: icon[1] };
	  }
	
	  if (typeof icon === 'string') {
	    return { prefix: 'fas', iconName: icon };
	  }
	}
	
	function FontAwesomeIcon$1(props) {
	  var iconArgs = props.icon,
	      maskArgs = props.mask,
	      symbol = props.symbol,
	      className = props.className;
	
	
	  var icon = normalizeIconArgs(iconArgs);
	  var classes = objectWithKey('classes', [].concat(toConsumableArray(classList(props)), toConsumableArray(className.split(' '))));
	  var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesome.parse.transform(props.transform) : props.transform);
	  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
	
	  var renderedIcon = fontawesome.icon(icon, _extends({}, classes, transform, mask, {
	    symbol: symbol
	  }));
	
	  if (!renderedIcon) {
	    log('Could not find icon', icon);
	    return null;
	  }
	
	  var abstract = renderedIcon.abstract;
	
	  var convertCurry = convert.bind(null, React.createElement);
	  var extraProps = {};
	
	  Object.keys(props).forEach(function (key) {
	    if (!FontAwesomeIcon$1.defaultProps.hasOwnProperty(key)) extraProps[key] = props[key];
	  });
	
	  return convertCurry(abstract[0], extraProps);
	}
	
	FontAwesomeIcon$1.displayName = 'FontAwesomeIcon';
	
	FontAwesomeIcon$1.propTypes = {
	  border: PropTypes.bool,
	
	  className: PropTypes.string,
	
	  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
	
	  fixedWidth: PropTypes.bool,
	
	  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
	
	  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
	
	  listItem: PropTypes.bool,
	
	  pull: PropTypes.oneOf(['right', 'left']),
	
	  pulse: PropTypes.bool,
	
	  name: PropTypes.string,
	
	  rotation: PropTypes.oneOf([90, 180, 270]),
	
	  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
	
	  spin: PropTypes.bool,
	
	  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	
	  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	};
	
	FontAwesomeIcon$1.defaultProps = {
	  border: false,
	  className: '',
	  mask: null,
	  fixedWidth: false,
	  flip: null,
	  icon: null,
	  listItem: false,
	  pull: null,
	  pulse: false,
	  name: '',
	  rotation: null,
	  size: null,
	  spin: false,
	  symbol: false,
	  transform: null
	};
	
	fontawesome.noAuto();
	
	return FontAwesomeIcon$1;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;


/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    root = __webpack_require__(8);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports) {

	//
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	  if (ret !== void 0) {
	    return !!ret;
	  }
	
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	  // Test for A's keys different from B.
	  for (var idx = 0; idx < keysA.length; idx++) {
	    var key = keysA[idx];
	
	    if (!bHasOwnProperty(key)) {
	      return false;
	    }
	
	    var valueA = objA[key];
	    var valueB = objB[key];
	
	    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	    if (ret === false || (ret === void 0 && valueA !== valueB)) {
	      return false;
	    }
	  }
	
	  return true;
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ShapeType_1 = __webpack_require__(31);
	var Updater_1 = __webpack_require__(459);
	var Utils_1 = __webpack_require__(2);
	var PolygonMaskType_1 = __webpack_require__(62);
	var RotateDirection_1 = __webpack_require__(63);
	var ColorUtils_1 = __webpack_require__(15);
	var Particles_1 = __webpack_require__(177);
	var SizeAnimationStatus_1 = __webpack_require__(170);
	var OpacityAnimationStatus_1 = __webpack_require__(167);
	var Shape_1 = __webpack_require__(178);
	var StartValueType_1 = __webpack_require__(172);
	var Plugins_1 = __webpack_require__(64);
	var Particle = (function () {
	    function Particle(container, position, overrideOptions) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
	        this.container = container;
	        this.fill = true;
	        this.close = true;
	        this.links = [];
	        this.lastNoiseTime = 0;
	        this.destroyed = false;
	        var options = container.options;
	        var particlesOptions = new Particles_1.Particles();
	        particlesOptions.load(options.particles);
	        if ((overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) !== undefined) {
	            var shapeType = (_a = overrideOptions.shape.type) !== null && _a !== void 0 ? _a : particlesOptions.shape.type;
	            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
	            var shapeOptions = new Shape_1.Shape();
	            shapeOptions.load(overrideOptions.shape);
	            if (this.shape !== undefined) {
	                var shapeData = shapeOptions.options[this.shape];
	                if (shapeData !== undefined) {
	                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
	                        Utils_1.Utils.itemFromArray(shapeData) :
	                        shapeData);
	                    this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
	                    this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
	                }
	            }
	        }
	        else {
	            var shapeType = particlesOptions.shape.type;
	            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
	            var shapeData = particlesOptions.shape.options[this.shape];
	            if (shapeData) {
	                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
	                    Utils_1.Utils.itemFromArray(shapeData) :
	                    shapeData);
	                this.fill = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.fill) !== null && _g !== void 0 ? _g : this.fill;
	                this.close = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.close) !== null && _j !== void 0 ? _j : this.close;
	            }
	        }
	        if (overrideOptions !== undefined) {
	            particlesOptions.load(overrideOptions);
	        }
	        this.particlesOptions = particlesOptions;
	        var noiseDelay = this.particlesOptions.move.noise.delay;
	        this.noiseDelay = (noiseDelay.random.enable ?
	            Utils_1.Utils.randomInRange(noiseDelay.random.minimumValue, noiseDelay.value) :
	            noiseDelay.value) * 1000;
	        container.retina.initParticle(this);
	        var color = this.particlesOptions.color;
	        var sizeValue = ((_k = this.sizeValue) !== null && _k !== void 0 ? _k : container.retina.sizeValue);
	        var randomSize = typeof this.particlesOptions.size.random === "boolean" ?
	            this.particlesOptions.size.random :
	            this.particlesOptions.size.random.enable;
	        this.size = {
	            value: randomSize && this.randomMinimumSize !== undefined ?
	                Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue) :
	                sizeValue,
	        };
	        this.direction = this.particlesOptions.move.direction;
	        this.bubble = {};
	        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
	        if (this.particlesOptions.rotate.direction == RotateDirection_1.RotateDirection.random) {
	            var index = Math.floor(Math.random() * 2);
	            if (index > 0) {
	                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
	            }
	            else {
	                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
	            }
	        }
	        else {
	            this.rotateDirection = this.particlesOptions.rotate.direction;
	        }
	        if (this.particlesOptions.size.animation.enable) {
	            switch (this.particlesOptions.size.animation.startValue) {
	                case StartValueType_1.StartValueType.min:
	                    if (!randomSize) {
	                        var pxRatio = container.retina.pixelRatio;
	                        this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
	                    }
	                    break;
	            }
	            this.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
	            this.size.velocity = ((_l = this.sizeAnimationSpeed) !== null && _l !== void 0 ? _l : container.retina.sizeAnimationSpeed) / 100;
	            if (!this.particlesOptions.size.animation.sync) {
	                this.size.velocity = this.size.velocity * Math.random();
	            }
	        }
	        if (this.particlesOptions.rotate.animation.enable) {
	            if (!this.particlesOptions.rotate.animation.sync) {
	                this.angle = Math.random() * 360;
	            }
	        }
	        this.position = this.calcPosition(this.container, position);
	        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
	            this.initialPosition = {
	                x: this.position.x,
	                y: this.position.y,
	            };
	        }
	        this.offset = {
	            x: 0,
	            y: 0,
	        };
	        if (this.particlesOptions.collisions.enable) {
	            this.checkOverlap(position);
	        }
	        if (color instanceof Array) {
	            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
	        }
	        else {
	            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
	        }
	        var randomOpacity = this.particlesOptions.opacity.random;
	        var opacityValue = this.particlesOptions.opacity.value;
	        this.opacity = {
	            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
	        };
	        if (this.particlesOptions.opacity.animation.enable) {
	            this.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
	            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
	            if (!this.particlesOptions.opacity.animation.sync) {
	                this.opacity.velocity *= Math.random();
	            }
	        }
	        this.initialVelocity = this.calculateVelocity();
	        this.velocity = {
	            horizontal: this.initialVelocity.horizontal,
	            vertical: this.initialVelocity.vertical,
	        };
	        var drawer = container.drawers[this.shape];
	        if (!drawer) {
	            drawer = Plugins_1.Plugins.getShapeDrawer(this.shape);
	            container.drawers[this.shape] = drawer;
	        }
	        if (this.shape === ShapeType_1.ShapeType.image || this.shape === ShapeType_1.ShapeType.images) {
	            var shape = this.particlesOptions.shape;
	            var imageDrawer = drawer;
	            var imagesOptions = shape.options[this.shape];
	            var images = imageDrawer.getImages(container).images;
	            var index = Utils_1.Utils.arrayRandomIndex(images);
	            var image_1 = images[index];
	            var optionsImage = (imagesOptions instanceof Array ?
	                imagesOptions.filter(function (t) { return t.src === image_1.source; })[0] :
	                imagesOptions);
	            this.image = {
	                data: image_1,
	                ratio: optionsImage.width / optionsImage.height,
	                replaceColor: (_m = optionsImage.replaceColor) !== null && _m !== void 0 ? _m : optionsImage.replace_color,
	                source: optionsImage.src,
	            };
	            if (!this.image.ratio) {
	                this.image.ratio = 1;
	            }
	            this.fill = (_o = optionsImage.fill) !== null && _o !== void 0 ? _o : this.fill;
	            this.close = (_p = optionsImage.close) !== null && _p !== void 0 ? _p : this.close;
	        }
	        this.stroke = this.particlesOptions.stroke instanceof Array ?
	            Utils_1.Utils.itemFromArray(this.particlesOptions.stroke) :
	            this.particlesOptions.stroke;
	        this.strokeColor = typeof this.stroke.color === "string" ?
	            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
	            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
	        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
	            ColorUtils_1.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
	            ColorUtils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
	        this.updater = new Updater_1.Updater(this.container, this);
	    }
	    Particle.prototype.update = function (index, delta) {
	        this.links = [];
	        this.updater.update(delta);
	    };
	    Particle.prototype.draw = function (delta) {
	        this.container.canvas.drawParticle(this, delta);
	    };
	    Particle.prototype.isOverlapping = function () {
	        var container = this.container;
	        var p1 = this;
	        var collisionFound = false;
	        var iterations = 0;
	        var pos1 = p1.getPosition();
	        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p1; }); _i < _a.length; _i++) {
	            var p2 = _a[_i];
	            iterations++;
	            var pos2 = p2.getPosition();
	            var dist = Utils_1.Utils.getDistance(pos1, pos2);
	            if (dist <= p1.size.value + p2.size.value) {
	                collisionFound = true;
	                break;
	            }
	        }
	        return {
	            collisionFound: collisionFound,
	            iterations: iterations,
	        };
	    };
	    Particle.prototype.checkOverlap = function (position) {
	        var container = this.container;
	        var p = this;
	        var overlapResult = p.isOverlapping();
	        if (overlapResult.iterations >= container.particles.count) {
	            container.particles.remove(this);
	        }
	        else if (overlapResult.collisionFound) {
	            p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
	            p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
	            p.checkOverlap();
	        }
	    };
	    Particle.prototype.startInfection = function (stage) {
	        var container = this.container;
	        var options = container.options;
	        var stages = options.infection.stages;
	        var stagesCount = stages.length;
	        if (stage > stagesCount || stage < 0) {
	            return;
	        }
	        this.infectionDelay = 0;
	        this.infectionDelayStage = stage;
	    };
	    Particle.prototype.updateInfectionStage = function (stage) {
	        var container = this.container;
	        var options = container.options;
	        var stagesCount = options.infection.stages.length;
	        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
	            return;
	        }
	        if (this.infectionTimeout !== undefined) {
	            window.clearTimeout(this.infectionTimeout);
	        }
	        this.infectionStage = stage;
	        this.infectionTime = 0;
	    };
	    Particle.prototype.updateInfection = function (delta) {
	        var container = this.container;
	        var options = container.options;
	        var infection = options.infection;
	        var stages = options.infection.stages;
	        var stagesCount = stages.length;
	        if (this.infectionDelay !== undefined && this.infectionDelayStage !== undefined) {
	            var stage = this.infectionDelayStage;
	            if (stage > stagesCount || stage < 0) {
	                return;
	            }
	            if (this.infectionDelay > infection.delay * 1000) {
	                this.infectionStage = stage;
	                this.infectionTime = 0;
	                delete this.infectionDelay;
	                delete this.infectionDelayStage;
	            }
	            else {
	                this.infectionDelay += delta;
	            }
	        }
	        else {
	            delete this.infectionDelay;
	            delete this.infectionDelayStage;
	        }
	        if (this.infectionStage !== undefined && this.infectionTime !== undefined) {
	            var infectionStage = stages[this.infectionStage];
	            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
	                if (this.infectionTime > infectionStage.duration * 1000) {
	                    this.nextInfectionStage();
	                }
	                else {
	                    this.infectionTime += delta;
	                }
	            }
	            else {
	                this.infectionTime += delta;
	            }
	        }
	        else {
	            delete this.infectionStage;
	            delete this.infectionTime;
	        }
	    };
	    Particle.prototype.getPosition = function () {
	        return {
	            x: this.position.x + this.offset.x,
	            y: this.position.y + this.offset.y,
	        };
	    };
	    Particle.prototype.destroy = function () {
	        this.destroyed = true;
	    };
	    Particle.prototype.nextInfectionStage = function () {
	        var container = this.container;
	        var options = container.options;
	        var stagesCount = options.infection.stages.length;
	        if (stagesCount <= 0 || this.infectionStage === undefined) {
	            return;
	        }
	        this.infectionTime = 0;
	        if (stagesCount <= ++this.infectionStage) {
	            if (options.infection.cure) {
	                delete this.infectionStage;
	                delete this.infectionTime;
	                return;
	            }
	            else {
	                this.infectionStage = 0;
	                this.infectionTime = 0;
	            }
	        }
	    };
	    Particle.prototype.calcPosition = function (container, position) {
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position) : undefined;
	            if (pluginPos !== undefined) {
	                return pluginPos;
	            }
	        }
	        var pos = { x: 0, y: 0 };
	        pos.x = position ? position.x : Math.random() * container.canvas.size.width;
	        pos.y = position ? position.y : Math.random() * container.canvas.size.height;
	        if (pos.x > container.canvas.size.width - this.size.value * 2) {
	            pos.x -= this.size.value;
	        }
	        else if (pos.x < this.size.value * 2) {
	            pos.x += this.size.value;
	        }
	        if (pos.y > container.canvas.size.height - this.size.value * 2) {
	            pos.y -= this.size.value;
	        }
	        else if (pos.y < this.size.value * 2) {
	            pos.y += this.size.value;
	        }
	        return pos;
	    };
	    Particle.prototype.calculateVelocity = function () {
	        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
	        var res = {
	            horizontal: 0,
	            vertical: 0,
	        };
	        if (this.particlesOptions.move.straight) {
	            res.horizontal = baseVelocity.x;
	            res.vertical = baseVelocity.y;
	            if (this.particlesOptions.move.random) {
	                res.horizontal *= Math.random();
	                res.vertical *= Math.random();
	            }
	        }
	        else {
	            res.horizontal = baseVelocity.x + Math.random() - 0.5;
	            res.vertical = baseVelocity.y + Math.random() - 0.5;
	        }
	        return res;
	    };
	    return Particle;
	}());
	exports.Particle = Particle;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonDrawerBase = (function () {
	    function PolygonDrawerBase() {
	    }
	    PolygonDrawerBase.prototype.draw = function (context, particle, radius, _opacity) {
	        var start = this.getCenter(particle, radius);
	        var side = this.getSidesData(particle, radius);
	        var sideCount = side.count.numerator * side.count.denominator;
	        var decimalSides = side.count.numerator / side.count.denominator;
	        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
	        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
	        if (!context) {
	            return;
	        }
	        context.beginPath();
	        context.translate(start.x, start.y);
	        context.moveTo(0, 0);
	        for (var i = 0; i < sideCount; i++) {
	            context.lineTo(side.length, 0);
	            context.translate(side.length, 0);
	            context.rotate(interiorAngle);
	        }
	    };
	    return PolygonDrawerBase;
	}());
	exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InteractivityDetect;
	(function (InteractivityDetect) {
	    InteractivityDetect["canvas"] = "canvas";
	    InteractivityDetect["parent"] = "parent";
	    InteractivityDetect["window"] = "window";
	})(InteractivityDetect = exports.InteractivityDetect || (exports.InteractivityDetect = {}));


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DivMode;
	(function (DivMode) {
	    DivMode["repulse"] = "repulse";
	})(DivMode = exports.DivMode || (exports.DivMode = {}));


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskInlineArrangement;
	(function (PolygonMaskInlineArrangement) {
	    PolygonMaskInlineArrangement["equidistant"] = "equidistant";
	    PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
	    PolygonMaskInlineArrangement["perPoint"] = "per-point";
	    PolygonMaskInlineArrangement["randomLength"] = "random-length";
	    PolygonMaskInlineArrangement["randomPoint"] = "random-point";
	})(PolygonMaskInlineArrangement = exports.PolygonMaskInlineArrangement || (exports.PolygonMaskInlineArrangement = {}));


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ShapeBase = (function () {
	    function ShapeBase() {
	        this.fill = true;
	        this.close = true;
	    }
	    ShapeBase.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.fill !== undefined) {
	                this.fill = data.fill;
	            }
	            if (data.particles !== undefined) {
	                this.particles = data.particles;
	            }
	        }
	    };
	    return ShapeBase;
	}());
	exports.ShapeBase = ShapeBase;


/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(362),
	    mapCacheDelete = __webpack_require__(363),
	    mapCacheGet = __webpack_require__(364),
	    mapCacheHas = __webpack_require__(365),
	    mapCacheSet = __webpack_require__(366);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(322),
	    arraySome = __webpack_require__(329),
	    cacheHas = __webpack_require__(339);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(8),
	    stubFalse = __webpack_require__(385);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(181)(module)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(55),
	    isObject = __webpack_require__(147);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(335),
	    baseUnary = __webpack_require__(338),
	    nodeUtil = __webpack_require__(369);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _helpers = __webpack_require__(419);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Scrollchor = function (_React$Component) {
	  _inherits(Scrollchor, _React$Component);
	
	  function Scrollchor(props) {
	    _classCallCheck(this, Scrollchor);
	
	    var _this = _possibleConstructorReturn(this, (Scrollchor.__proto__ || Object.getPrototypeOf(Scrollchor)).call(this, props));
	
	    _this._handleClick = function (event) {
	      _this.state.beforeAnimate(event);
	      event && event.preventDefault();
	      (0, _helpers.animateScroll)(_this.state.to, _this.state.animate).then(function (id) {
	        if (id) {
	          _this.state.disableHistory || (0, _helpers.updateHistory)(id);
	          _this.state.afterAnimate(event);
	        }
	      });
	    };
	
	    _this.state = Scrollchor._stateHelper(props);
	    _this.simulateClick = _this._handleClick;
	    return _this;
	  }
	
	  _createClass(Scrollchor, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.setState(Scrollchor._stateHelper(props));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          to = _props.to,
	          animate = _props.animate,
	          beforeAnimate = _props.beforeAnimate,
	          afterAnimate = _props.afterAnimate,
	          disableHistory = _props.disableHistory,
	          props = _objectWithoutProperties(_props, ['to', 'animate', 'beforeAnimate', 'afterAnimate', 'disableHistory']); // eslint-disable-line no-unused-vars
	
	      return !this.props.children ? null : _react2.default.createElement('a', _extends({}, props, { href: '#' + this.state.to, onClick: this._handleClick }));
	    }
	  }], [{
	    key: '_stateHelper',
	    value: function _stateHelper(props) {
	      var _ref = props.animate || {},
	          _ref$offset = _ref.offset,
	          offset = _ref$offset === undefined ? 0 : _ref$offset,
	          _ref$duration = _ref.duration,
	          duration = _ref$duration === undefined ? 400 : _ref$duration,
	          _ref$easing = _ref.easing,
	          easing = _ref$easing === undefined ? easeOutQuad : _ref$easing;
	
	      return {
	        to: props.to && props.to.replace(/^#/, '') || '',
	        animate: { offset: offset, duration: duration, easing: easing },
	        beforeAnimate: props.beforeAnimate || function () {},
	        afterAnimate: props.afterAnimate || function () {},
	        disableHistory: props.disableHistory
	      };
	    }
	  }, {
	    key: 'getDerivedStateFromProps',
	    value: function getDerivedStateFromProps(props) {
	      return Scrollchor._stateHelper(props);
	    }
	  }]);
	
	  return Scrollchor;
	}(_react2.default.Component);
	
	// Default easing function
	// jQuery easing 'swing'
	
	
	Scrollchor.propTypes = {
	  to: _propTypes2.default.string.isRequired,
	  animate: _propTypes2.default.shape({
	    offset: _propTypes2.default.number,
	    duration: _propTypes2.default.number,
	    easing: _propTypes2.default.func
	  }),
	  beforeAnimate: _propTypes2.default.func,
	  afterAnimate: _propTypes2.default.func,
	  disableHistory: _propTypes2.default.bool,
	  children: _propTypes2.default.node
	};
	exports.default = Scrollchor;
	function easeOutQuad(x, t, b, c, d) {
	  return -c * (t /= d) * (t - 2) + b;
	}
	
	// Setup for React version 16.3.x and beyond
	var reSemver = /^v?((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?(?:\+([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?$/; // eslint-disable-line no-useless-escape
	
	var _reSemver$exec = reSemver.exec(_react2.default.version),
	    _reSemver$exec2 = _slicedToArray(_reSemver$exec, 4),
	    major = _reSemver$exec2[2],
	    minor = _reSemver$exec2[3];
	
	major >= 16 && minor >= 3 && delete Scrollchor.prototype.componentWillReceiveProps;

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Canvas_1 = __webpack_require__(438);
	var EventListeners_1 = __webpack_require__(529);
	var Particles_1 = __webpack_require__(460);
	var Retina_1 = __webpack_require__(461);
	var FrameManager_1 = __webpack_require__(439);
	var Options_1 = __webpack_require__(176);
	var Plugins_1 = __webpack_require__(64);
	var SimplexNoise_1 = __webpack_require__(532);
	var Container = (function () {
	    function Container(id, params) {
	        var presets = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            presets[_i - 2] = arguments[_i];
	        }
	        this.started = false;
	        this.destroyed = false;
	        this.id = id;
	        this.paused = true;
	        this.sourceOptions = params;
	        this.lastFrameTime = 0;
	        this.pageHidden = false;
	        this.retina = new Retina_1.Retina(this);
	        this.canvas = new Canvas_1.Canvas(this);
	        this.particles = new Particles_1.Particles(this);
	        this.drawer = new FrameManager_1.FrameManager(this);
	        this.interactivity = {
	            mouse: {},
	        };
	        this.bubble = {};
	        this.repulse = { particles: [] };
	        this.plugins = {};
	        this.drawers = {};
	        this.density = 1;
	        this.options = new Options_1.Options();
	        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
	            var preset = presets_1[_a];
	            this.options.load(Plugins_1.Plugins.getPreset(preset));
	        }
	        for (var _b = 0, _c = Plugins_1.Plugins.getSupportedShapes(); _b < _c.length; _b++) {
	            var type = _c[_b];
	            this.drawers[type] = Plugins_1.Plugins.getShapeDrawer(type);
	        }
	        if (this.sourceOptions) {
	            this.options.load(this.sourceOptions);
	        }
	        this.simplex = new SimplexNoise_1.SimplexNoise();
	        this.eventListeners = new EventListeners_1.EventListeners(this);
	    }
	    Container.requestFrame = function (callback) {
	        return window.customRequestAnimationFrame(callback);
	    };
	    Container.cancelAnimation = function (handle) {
	        window.cancelAnimationFrame(handle);
	    };
	    Container.prototype.play = function (force) {
	        var needsUpdate = this.paused || force;
	        if (this.paused) {
	            this.paused = false;
	        }
	        if (needsUpdate) {
	            for (var id in this.plugins) {
	                var plugin = this.plugins[id];
	                if (plugin.play) {
	                    plugin.play();
	                }
	            }
	            this.lastFrameTime = performance.now();
	        }
	        this.draw();
	    };
	    Container.prototype.pause = function () {
	        if (this.drawAnimationFrame !== undefined) {
	            Container.cancelAnimation(this.drawAnimationFrame);
	            delete this.drawAnimationFrame;
	        }
	        if (!this.paused) {
	            for (var id in this.plugins) {
	                var plugin = this.plugins[id];
	                if (plugin.pause) {
	                    plugin.pause();
	                }
	            }
	            if (!this.pageHidden) {
	                this.paused = true;
	            }
	        }
	    };
	    Container.prototype.draw = function () {
	        var _this = this;
	        this.drawAnimationFrame = Container.requestFrame(function (t) { return _this.drawer.nextFrame(t); });
	    };
	    Container.prototype.getAnimationStatus = function () {
	        return !this.paused;
	    };
	    Container.prototype.densityAutoParticles = function () {
	        this.initDensityFactor();
	        var numberOptions = this.options.particles.number;
	        var optParticlesNumber = numberOptions.value;
	        var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
	        var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
	        var particlesCount = this.particles.count;
	        if (particlesCount < particlesNumber) {
	            this.particles.push(Math.abs(particlesNumber - particlesCount));
	        }
	        else if (particlesCount > particlesNumber) {
	            this.particles.removeQuantity(particlesCount - particlesNumber);
	        }
	    };
	    Container.prototype.initDensityFactor = function () {
	        var densityOptions = this.options.particles.number.density;
	        if (!this.canvas.element || !densityOptions.enable) {
	            return;
	        }
	        var canvas = this.canvas.element;
	        var pxRatio = this.retina.pixelRatio;
	        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
	    };
	    Container.prototype.destroy = function () {
	        this.stop();
	        this.retina.reset();
	        this.canvas.destroy();
	        delete this.interactivity;
	        delete this.options;
	        delete this.retina;
	        delete this.canvas;
	        delete this.particles;
	        delete this.bubble;
	        delete this.repulse;
	        delete this.drawer;
	        delete this.eventListeners;
	        for (var type in this.drawers) {
	            var drawer = this.drawers[type];
	            if (drawer.destroy !== undefined) {
	                drawer.destroy(this);
	            }
	        }
	        this.drawers = {};
	        this.destroyed = true;
	    };
	    Container.prototype.exportImg = function (callback) {
	        this.exportImage(callback);
	    };
	    Container.prototype.exportImage = function (callback, type, quality) {
	        var _a;
	        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
	    };
	    Container.prototype.exportConfiguration = function () {
	        return JSON.stringify(this.options, undefined, 2);
	    };
	    Container.prototype.refresh = function () {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.stop();
	                        return [4, this.start()];
	                    case 1:
	                        _a.sent();
	                        return [2];
	                }
	            });
	        });
	    };
	    Container.prototype.stop = function () {
	        if (!this.started) {
	            return;
	        }
	        this.started = false;
	        this.eventListeners.removeListeners();
	        this.pause();
	        this.particles.clear();
	        this.retina.reset();
	        this.canvas.clear();
	        for (var id in this.plugins) {
	            var plugin = this.plugins[id];
	            if (plugin.stop !== undefined) {
	                plugin.stop();
	            }
	        }
	        this.plugins = {};
	        delete this.particles.lineLinkedColor;
	    };
	    Container.prototype.start = function () {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var availablePlugins, id, _a, _b, _i, id, plugin, _c, _d, _e, type, drawer;
	            return tslib_1.__generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0:
	                        if (this.started) {
	                            return [2];
	                        }
	                        availablePlugins = Plugins_1.Plugins.getAvailablePlugins(this);
	                        for (id in availablePlugins) {
	                            this.plugins[id] = availablePlugins[id];
	                        }
	                        this.started = true;
	                        this.eventListeners.addListeners();
	                        _a = [];
	                        for (_b in this.plugins)
	                            _a.push(_b);
	                        _i = 0;
	                        _f.label = 1;
	                    case 1:
	                        if (!(_i < _a.length)) return [3, 5];
	                        id = _a[_i];
	                        plugin = this.plugins[id];
	                        if (!(plugin.startAsync !== undefined)) return [3, 3];
	                        return [4, plugin.startAsync()];
	                    case 2:
	                        _f.sent();
	                        return [3, 4];
	                    case 3:
	                        if (plugin.start !== undefined) {
	                            plugin.start();
	                        }
	                        _f.label = 4;
	                    case 4:
	                        _i++;
	                        return [3, 1];
	                    case 5:
	                        _c = [];
	                        for (_d in this.drawers)
	                            _c.push(_d);
	                        _e = 0;
	                        _f.label = 6;
	                    case 6:
	                        if (!(_e < _c.length)) return [3, 9];
	                        type = _c[_e];
	                        drawer = this.drawers[type];
	                        if (!(drawer.init !== undefined)) return [3, 8];
	                        return [4, drawer.init(this)];
	                    case 7:
	                        _f.sent();
	                        _f.label = 8;
	                    case 8:
	                        _e++;
	                        return [3, 6];
	                    case 9:
	                        this.init();
	                        this.play();
	                        return [2];
	                }
	            });
	        });
	    };
	    Container.prototype.init = function () {
	        this.retina.init();
	        this.canvas.init();
	        this.particles.init();
	        this.densityAutoParticles();
	        for (var id in this.plugins) {
	            var plugin = this.plugins[id];
	            if (plugin.init !== undefined) {
	                plugin.init();
	            }
	        }
	    };
	    return Container;
	}());
	exports.Container = Container;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CollisionMode;
	(function (CollisionMode) {
	    CollisionMode["bounce"] = "bounce";
	})(CollisionMode = exports.CollisionMode || (exports.CollisionMode = {}));


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DestroyType;
	(function (DestroyType) {
	    DestroyType["none"] = "none";
	    DestroyType["max"] = "max";
	    DestroyType["min"] = "min";
	})(DestroyType = exports.DestroyType || (exports.DestroyType = {}));


/***/ }),
/* 167 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OpacityAnimationStatus;
	(function (OpacityAnimationStatus) {
	    OpacityAnimationStatus[OpacityAnimationStatus["increasing"] = 0] = "increasing";
	    OpacityAnimationStatus[OpacityAnimationStatus["decreasing"] = 1] = "decreasing";
	})(OpacityAnimationStatus = exports.OpacityAnimationStatus || (exports.OpacityAnimationStatus = {}));


/***/ }),
/* 168 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskMoveType;
	(function (PolygonMaskMoveType) {
	    PolygonMaskMoveType["path"] = "path";
	    PolygonMaskMoveType["radius"] = "radius";
	})(PolygonMaskMoveType = exports.PolygonMaskMoveType || (exports.PolygonMaskMoveType = {}));


/***/ }),
/* 169 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ProcessBubbleType;
	(function (ProcessBubbleType) {
	    ProcessBubbleType["color"] = "color";
	    ProcessBubbleType["opacity"] = "opacity";
	    ProcessBubbleType["size"] = "size";
	})(ProcessBubbleType = exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));


/***/ }),
/* 170 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SizeAnimationStatus;
	(function (SizeAnimationStatus) {
	    SizeAnimationStatus[SizeAnimationStatus["increasing"] = 0] = "increasing";
	    SizeAnimationStatus[SizeAnimationStatus["decreasing"] = 1] = "decreasing";
	})(SizeAnimationStatus = exports.SizeAnimationStatus || (exports.SizeAnimationStatus = {}));


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SizeMode;
	(function (SizeMode) {
	    SizeMode["precise"] = "precise";
	    SizeMode["percent"] = "percent";
	})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var StartValueType;
	(function (StartValueType) {
	    StartValueType["max"] = "max";
	    StartValueType["min"] = "min";
	})(StartValueType = exports.StartValueType || (exports.StartValueType = {}));


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AbsorberSize_1 = __webpack_require__(463);
	var OptionsColor_1 = __webpack_require__(5);
	var Absorber = (function () {
	    function Absorber() {
	        this.color = new OptionsColor_1.OptionsColor();
	        this.color.value = "#000000";
	        this.opacity = 1;
	        this.size = new AbsorberSize_1.AbsorberSize();
	    }
	    Absorber.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	            if (data.position !== undefined) {
	                this.position = {
	                    x: data.position.x,
	                    y: data.position.y,
	                };
	            }
	            if (data.size !== undefined) {
	                this.size.load(data.size);
	            }
	        }
	    };
	    return Absorber;
	}());
	exports.Absorber = Absorber;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var MoveDirection_1 = __webpack_require__(60);
	var EmitterRate_1 = __webpack_require__(468);
	var EmitterLife_1 = __webpack_require__(467);
	var Utils_1 = __webpack_require__(2);
	var EmitterSize_1 = __webpack_require__(175);
	var Emitter = (function () {
	    function Emitter() {
	        this.direction = MoveDirection_1.MoveDirection.none;
	        this.life = new EmitterLife_1.EmitterLife();
	        this.rate = new EmitterRate_1.EmitterRate();
	    }
	    Emitter.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.size !== undefined) {
	                if (this.size === undefined) {
	                    this.size = new EmitterSize_1.EmitterSize();
	                }
	                this.size.load(data.size);
	            }
	            if (data.direction !== undefined) {
	                this.direction = data.direction;
	            }
	            this.life.load(data.life);
	            if (data.particles !== undefined) {
	                this.particles = Utils_1.Utils.deepExtend({}, data.particles);
	            }
	            this.rate.load(data.rate);
	            if (data.position !== undefined) {
	                this.position = {
	                    x: data.position.x,
	                    y: data.position.y,
	                };
	            }
	        }
	    };
	    return Emitter;
	}());
	exports.Emitter = Emitter;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SizeMode_1 = __webpack_require__(171);
	var EmitterSize = (function () {
	    function EmitterSize() {
	        this.mode = SizeMode_1.SizeMode.percent;
	        this.height = 0;
	        this.width = 0;
	    }
	    EmitterSize.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.mode !== undefined) {
	                this.mode = data.mode;
	            }
	            if (data.height !== undefined) {
	                this.height = data.height;
	            }
	            if (data.width !== undefined) {
	                this.width = data.width;
	            }
	        }
	    };
	    return EmitterSize;
	}());
	exports.EmitterSize = EmitterSize;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Interactivity_1 = __webpack_require__(476);
	var Particles_1 = __webpack_require__(177);
	var PolygonMask_1 = __webpack_require__(518);
	var BackgroundMask_1 = __webpack_require__(465);
	var Background_1 = __webpack_require__(464);
	var Emitter_1 = __webpack_require__(174);
	var Absorber_1 = __webpack_require__(173);
	var Infection_1 = __webpack_require__(469);
	var Plugins_1 = __webpack_require__(64);
	var Options = (function () {
	    function Options() {
	        this.absorbers = [];
	        this.background = new Background_1.Background();
	        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
	        this.detectRetina = false;
	        this.emitters = [];
	        this.fpsLimit = 30;
	        this.infection = new Infection_1.Infection();
	        this.interactivity = new Interactivity_1.Interactivity();
	        this.particles = new Particles_1.Particles();
	        this.pauseOnBlur = true;
	        this.polygon = new PolygonMask_1.PolygonMask();
	    }
	    Object.defineProperty(Options.prototype, "fps_limit", {
	        get: function () {
	            return this.fpsLimit;
	        },
	        set: function (value) {
	            this.fpsLimit = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Options.prototype, "retina_detect", {
	        get: function () {
	            return this.detectRetina;
	        },
	        set: function (value) {
	            this.detectRetina = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Options.prototype.load = function (data) {
	        var _a, _b;
	        if (data !== undefined) {
	            if (data.preset !== undefined) {
	                if (data.preset instanceof Array) {
	                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
	                        var preset = _c[_i];
	                        this.importPreset(preset);
	                    }
	                }
	                else {
	                    this.importPreset(data.preset);
	                }
	            }
	            if (data.background !== undefined) {
	                this.background.load(data.background);
	            }
	            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
	            if (detectRetina !== undefined) {
	                this.detectRetina = detectRetina;
	            }
	            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
	            if (fpsLimit !== undefined) {
	                this.fpsLimit = fpsLimit;
	            }
	            if (data.pauseOnBlur !== undefined) {
	                this.pauseOnBlur = data.pauseOnBlur;
	            }
	            this.particles.load(data.particles);
	            this.infection.load(data.infection);
	            this.interactivity.load(data.interactivity);
	            this.polygon.load(data.polygon);
	            this.backgroundMask.load(data.backgroundMask);
	            if (data.emitters !== undefined) {
	                if (data.emitters instanceof Array) {
	                    this.emitters = data.emitters.map(function (s) {
	                        var tmp = new Emitter_1.Emitter();
	                        tmp.load(s);
	                        return tmp;
	                    });
	                }
	                else {
	                    if (this.emitters instanceof Array) {
	                        this.emitters = new Emitter_1.Emitter();
	                    }
	                    this.emitters.load(data.emitters);
	                }
	            }
	            if (data.absorbers !== undefined) {
	                if (data.absorbers instanceof Array) {
	                    this.absorbers = data.absorbers.map(function (s) {
	                        var tmp = new Absorber_1.Absorber();
	                        tmp.load(s);
	                        return tmp;
	                    });
	                }
	                else {
	                    if (this.absorbers instanceof Array) {
	                        this.absorbers = new Absorber_1.Absorber();
	                    }
	                    this.absorbers.load(data.absorbers);
	                }
	            }
	        }
	    };
	    Options.prototype.importPreset = function (preset) {
	        var presetOptions = Plugins_1.Plugins.getPreset(preset);
	        if (presetOptions !== undefined) {
	            this.load(presetOptions);
	        }
	    };
	    return Options;
	}());
	exports.Options = Options;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var LineLinked_1 = __webpack_require__(490);
	var Move_1 = __webpack_require__(492);
	var ParticlesNumber_1 = __webpack_require__(501);
	var Opacity_1 = __webpack_require__(498);
	var Shape_1 = __webpack_require__(178);
	var Size_1 = __webpack_require__(508);
	var Rotate_1 = __webpack_require__(502);
	var Shadow_1 = __webpack_require__(504);
	var Stroke_1 = __webpack_require__(511);
	var Collisions_1 = __webpack_require__(488);
	var Twinkle_1 = __webpack_require__(513);
	var Particles = (function () {
	    function Particles() {
	        this.collisions = new Collisions_1.Collisions();
	        this.color = new OptionsColor_1.OptionsColor();
	        this.lineLinked = new LineLinked_1.LineLinked();
	        this.move = new Move_1.Move();
	        this.number = new ParticlesNumber_1.ParticlesNumber();
	        this.opacity = new Opacity_1.Opacity();
	        this.rotate = new Rotate_1.Rotate();
	        this.shadow = new Shadow_1.Shadow();
	        this.shape = new Shape_1.Shape();
	        this.size = new Size_1.Size();
	        this.stroke = new Stroke_1.Stroke();
	        this.twinkle = new Twinkle_1.Twinkle();
	    }
	    Object.defineProperty(Particles.prototype, "line_linked", {
	        get: function () {
	            return this.lineLinked;
	        },
	        set: function (value) {
	            this.lineLinked = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Particles.prototype.load = function (data) {
	        var _a, _b, _c, _d, _e, _f;
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                if (data.color instanceof Array) {
	                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
	                }
	                else {
	                    if (this.color instanceof Array) {
	                        this.color = new OptionsColor_1.OptionsColor();
	                    }
	                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	                }
	            }
	            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
	            if (lineLinked !== undefined) {
	                this.lineLinked.load(lineLinked);
	            }
	            this.move.load(data.move);
	            this.number.load(data.number);
	            this.opacity.load(data.opacity);
	            this.rotate.load(data.rotate);
	            this.shape.load(data.shape);
	            this.size.load(data.size);
	            this.shadow.load(data.shadow);
	            this.twinkle.load(data.twinkle);
	            var collisions = (_c = (_b = data.move) === null || _b === void 0 ? void 0 : _b.collisions) !== null && _c !== void 0 ? _c : (_d = data.move) === null || _d === void 0 ? void 0 : _d.bounce;
	            if (collisions !== undefined) {
	                this.collisions.enable = collisions;
	            }
	            this.collisions.load(data.collisions);
	            var strokeToLoad = (_e = data.stroke) !== null && _e !== void 0 ? _e : (_f = data.shape) === null || _f === void 0 ? void 0 : _f.stroke;
	            if (strokeToLoad !== undefined) {
	                if (strokeToLoad instanceof Array) {
	                    this.stroke = strokeToLoad.map(function (s) {
	                        var tmp = new Stroke_1.Stroke();
	                        tmp.load(s);
	                        return tmp;
	                    });
	                }
	                else {
	                    if (this.stroke instanceof Array) {
	                        this.stroke = new Stroke_1.Stroke();
	                    }
	                    this.stroke.load(strokeToLoad);
	                }
	            }
	        }
	    };
	    return Particles;
	}());
	exports.Particles = Particles;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ShapeType_1 = __webpack_require__(31);
	var ImageShape_1 = __webpack_require__(506);
	var PolygonShape_1 = __webpack_require__(507);
	var CharacterShape_1 = __webpack_require__(505);
	var Utils_1 = __webpack_require__(2);
	var Shape = (function () {
	    function Shape() {
	        this.options = {};
	        this.character = new CharacterShape_1.CharacterShape();
	        this.image = new ImageShape_1.ImageShape();
	        this.polygon = new PolygonShape_1.PolygonShape();
	        this.type = ShapeType_1.ShapeType.circle;
	    }
	    Object.defineProperty(Shape.prototype, "image", {
	        get: function () {
	            var _a;
	            return ((_a = this.options[ShapeType_1.ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.images]);
	        },
	        set: function (value) {
	            this.options[ShapeType_1.ShapeType.image] = value;
	            this.options[ShapeType_1.ShapeType.images] = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "custom", {
	        get: function () {
	            return this.options;
	        },
	        set: function (value) {
	            this.options = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "images", {
	        get: function () {
	            return this.image instanceof Array ? this.image : [this.image];
	        },
	        set: function (value) {
	            this.image = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "stroke", {
	        get: function () {
	            return [];
	        },
	        set: function (_value) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "character", {
	        get: function () {
	            var _a;
	            return ((_a = this.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.char]);
	        },
	        set: function (value) {
	            this.options[ShapeType_1.ShapeType.character] = value;
	            this.options[ShapeType_1.ShapeType.char] = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "polygon", {
	        get: function () {
	            var _a;
	            return ((_a = this.options[ShapeType_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.star]);
	        },
	        set: function (value) {
	            this.options[ShapeType_1.ShapeType.polygon] = value;
	            this.options[ShapeType_1.ShapeType.star] = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Shape.prototype.load = function (data) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
	        if (data !== undefined) {
	            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
	            if (options !== undefined) {
	                for (var shape in options) {
	                    var item = options[shape];
	                    if (item !== undefined) {
	                        this.options[shape] = Utils_1.Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
	                    }
	                }
	            }
	            if (data.character !== undefined) {
	                var item = data.character;
	                if (item !== undefined) {
	                    if (item instanceof Array) {
	                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_c = this.options[ShapeType_1.ShapeType.character]) !== null && _c !== void 0 ? _c : [], item);
	                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_d = this.options[ShapeType_1.ShapeType.char]) !== null && _d !== void 0 ? _d : [], item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend([], item);
	                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend([], item);
	                        }
	                    }
	                    else {
	                        if (this.options[ShapeType_1.ShapeType.character] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend({}, item);
	                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend({}, item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.character] = Utils_1.Utils.deepExtend((_e = this.options[ShapeType_1.ShapeType.character]) !== null && _e !== void 0 ? _e : [], item);
	                            this.options[ShapeType_1.ShapeType.char] = Utils_1.Utils.deepExtend((_f = this.options[ShapeType_1.ShapeType.char]) !== null && _f !== void 0 ? _f : [], item);
	                        }
	                    }
	                }
	            }
	            if (data.polygon !== undefined) {
	                var item = data.polygon;
	                if (item !== undefined) {
	                    if (item instanceof Array) {
	                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_g = this.options[ShapeType_1.ShapeType.polygon]) !== null && _g !== void 0 ? _g : [], item);
	                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_h = this.options[ShapeType_1.ShapeType.star]) !== null && _h !== void 0 ? _h : [], item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend([], item);
	                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend([], item);
	                        }
	                    }
	                    else {
	                        if (this.options[ShapeType_1.ShapeType.polygon] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend({}, item);
	                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend({}, item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.polygon] = Utils_1.Utils.deepExtend((_j = this.options[ShapeType_1.ShapeType.polygon]) !== null && _j !== void 0 ? _j : [], item);
	                            this.options[ShapeType_1.ShapeType.star] = Utils_1.Utils.deepExtend((_k = this.options[ShapeType_1.ShapeType.star]) !== null && _k !== void 0 ? _k : [], item);
	                        }
	                    }
	                }
	            }
	            if (data.image !== undefined) {
	                var item = data.image;
	                if (item !== undefined) {
	                    if (item instanceof Array) {
	                        if (this.options[ShapeType_1.ShapeType.image] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend((_l = this.options[ShapeType_1.ShapeType.image]) !== null && _l !== void 0 ? _l : [], item);
	                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend((_m = this.options[ShapeType_1.ShapeType.images]) !== null && _m !== void 0 ? _m : [], item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend([], item);
	                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend([], item);
	                        }
	                    }
	                    else {
	                        if (this.options[ShapeType_1.ShapeType.image] instanceof Array) {
	                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend({}, item);
	                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend({}, item);
	                        }
	                        else {
	                            this.options[ShapeType_1.ShapeType.image] = Utils_1.Utils.deepExtend((_o = this.options[ShapeType_1.ShapeType.image]) !== null && _o !== void 0 ? _o : [], item);
	                            this.options[ShapeType_1.ShapeType.images] = Utils_1.Utils.deepExtend((_p = this.options[ShapeType_1.ShapeType.images]) !== null && _p !== void 0 ? _p : [], item);
	                        }
	                    }
	                }
	            }
	            if (data.type !== undefined) {
	                this.type = data.type;
	            }
	        }
	    };
	    return Shape;
	}());
	exports.Shape = Shape;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Range = (function () {
	    function Range(x, y) {
	        this.position = {
	            x: x,
	            y: y,
	        };
	    }
	    return Range;
	}());
	exports.Range = Range;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Range_1 = __webpack_require__(179);
	var Rectangle = (function (_super) {
	    tslib_1.__extends(Rectangle, _super);
	    function Rectangle(x, y, width, height) {
	        var _this = _super.call(this, x, y) || this;
	        _this.size = {
	            height: height,
	            width: width,
	        };
	        return _this;
	    }
	    Rectangle.prototype.contains = function (point) {
	        return (point.x >= this.position.x - this.size.width &&
	            point.x < this.position.x + this.size.width &&
	            point.y >= this.position.y - this.size.height &&
	            point.y < this.position.y + this.size.height);
	    };
	    Rectangle.prototype.intersects = function (range) {
	        var rect = range;
	        var circle = range;
	        var w = this.size.width;
	        var h = this.size.height;
	        var pos1 = this.position;
	        var pos2 = range.position;
	        if (circle.radius !== undefined) {
	            return circle.intersects(this);
	        }
	        else if (rect.size !== undefined) {
	            var size2 = rect.size;
	            var w2 = size2.width;
	            var h2 = size2.height;
	            return pos2.x - w2 < pos1.x + w &&
	                pos2.x + w2 > pos1.x - w &&
	                pos2.y - h2 < pos1.y + h &&
	                pos2.y + h2 > pos1.y - h;
	        }
	        return false;
	    };
	    return Rectangle;
	}(Range_1.Range));
	exports.Rectangle = Rectangle;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var memoize = _interopDefault(__webpack_require__(183));
	
	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
	
	var index = memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);
	
	exports.default = index;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}
	
	exports.default = memoize;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function stylis_min (W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
	
	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;
	
	            default:
	              f += e.charAt(l);
	          }
	
	          g = 59;
	        }
	
	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;
	
	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;
	
	                case 125:
	                  k--;
	                  break;
	
	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }
	
	                              break;
	
	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }
	
	                          }
	                        }
	
	                        l = u;
	                      }
	
	                  }
	
	                  break;
	
	                case 91:
	                  g++;
	
	                case 40:
	                  g++;
	
	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {
	                  }
	
	              }
	
	              if (0 === k) break;
	              l++;
	            }
	
	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
	
	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);
	
	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;
	
	                  default:
	                    r = O;
	                }
	
	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);
	
	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;
	
	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;
	
	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;
	
	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }
	
	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;
	
	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;
	
	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }
	
	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }
	
	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;
	
	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }
	
	        default:
	          z++;
	          y = e.charAt(l);
	
	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;
	
	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;
	
	            case 0:
	              y = '\\0';
	              break;
	
	            case 12:
	              y = '\\f';
	              break;
	
	            case 11:
	              y = '\\v';
	              break;
	
	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;
	
	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
	
	                case 8:
	                  111 === K && (E = K);
	              }
	              break;
	
	            case 58:
	              0 === n + b + m && (u = l);
	              break;
	
	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;
	
	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;
	
	            case 91:
	              0 === n + b + v && m++;
	              break;
	
	            case 93:
	              0 === n + b + v && m--;
	              break;
	
	            case 41:
	              0 === n + b + m && v--;
	              break;
	
	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;
	
	                  default:
	                    q = 1;
	                }
	                v++;
	              }
	
	              break;
	
	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;
	
	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;
	
	                    case 220:
	                      t = l, b = 42;
	                  }
	
	                  break;
	
	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }
	
	          0 === b && (f += y);
	      }
	
	      K = x;
	      x = g;
	      l++;
	    }
	
	    t = p.length;
	
	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';
	
	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);
	
	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;
	
	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }
	
	        E = 0;
	      }
	    }
	
	    return G + p + F;
	  }
	
	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	        m = d.length;
	
	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;
	
	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }
	
	        break;
	
	      default:
	        var v = b = 0;
	
	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }
	
	    }
	
	    return c;
	  }
	
	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));
	
	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());
	
	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());
	
	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }
	
	    return d + c;
	  }
	
	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;
	
	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }
	
	    if (0 === w || 2 === w && !L(a, 1)) return a;
	
	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
	
	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
	
	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
	
	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;
	
	      case 969:
	      case 942:
	        return '-webkit-' + a + a;
	
	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;
	
	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
	
	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;
	
	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
	
	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
	
	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;
	
	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;
	
	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
	
	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
	
	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;
	
	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;
	
	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;
	
	          case 220:
	            b = a.replace(G, 'lr');
	            break;
	
	          default:
	            return a;
	        }
	
	        return '-webkit-' + a + '-ms-' + b + a;
	
	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;
	
	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
	
	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;
	
	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;
	
	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }
	
	        return a + ';';
	
	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
	
	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
	
	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;
	
	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
	
	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;
	
	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }
	
	    return a;
	  }
	
	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }
	
	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }
	
	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;
	
	        default:
	          x = w;
	      }
	    }
	
	    if (x !== c) return x;
	  }
	
	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;
	
	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }
	
	    return T;
	  }
	
	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }
	
	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];
	
	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }
	
	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }
	
	  var ca = /^\0+/g,
	      N = /[\0\r\f]/g,
	      aa = /: */g,
	      ka = /zoo|gra/,
	      ma = /([,: ])(transform)/g,
	      ia = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      fa = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ha = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      da = /\(\s*(.*)\s*\)/g,
	      oa = /([\s\S]*?);/g,
	      ba = /-self|flex-/g,
	      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      la = /stretch|:\s*\w+\-(?:conte|avail)/,
	      ja = /([^-])(image-set\()/,
	      z = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      A = 0,
	      R = null,
	      Y = 0,
	      V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}
	
	exports.default = stylis_min;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};
	
	exports.default = unitlessKeys;


/***/ }),
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_React$PureComponent) {
	  _inherits(About, _React$PureComponent);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  About.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "about-container" },
	      _react2.default.createElement(
	        "div",
	        { className: "terminal" },
	        _react2.default.createElement(
	          "div",
	          { className: "terminal-header" },
	          _react2.default.createElement("div", { className: "header-button red" }),
	          _react2.default.createElement("div", { className: "header-button yellow" }),
	          _react2.default.createElement("div", { className: "header-button green" })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "terminal-window" },
	          _react2.default.createElement(Statements, { statements: this.props.statements })
	        )
	      )
	    );
	  };
	
	  return About;
	}(_react2.default.PureComponent);
	
	var Statements = function (_React$PureComponent2) {
	  _inherits(Statements, _React$PureComponent2);
	
	  function Statements() {
	    _classCallCheck(this, Statements);
	
	    return _possibleConstructorReturn(this, _React$PureComponent2.apply(this, arguments));
	  }
	
	  Statements.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      this.props.statements.map(function (statement, index) {
	        return _react2.default.createElement(Statement, { statement: statement, key: index });
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: "statement" },
	        _react2.default.createElement(
	          "div",
	          { className: "input-statement" },
	          _react2.default.createElement(
	            "span",
	            null,
	            "\xA0"
	          )
	        )
	      )
	    );
	  };
	
	  return Statements;
	}(_react2.default.PureComponent);
	
	var Statement = function (_React$PureComponent3) {
	  _inherits(Statement, _React$PureComponent3);
	
	  function Statement() {
	    _classCallCheck(this, Statement);
	
	    return _possibleConstructorReturn(this, _React$PureComponent3.apply(this, arguments));
	  }
	
	  Statement.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "statement" },
	      _react2.default.createElement(
	        "div",
	        { className: "input-statement" },
	        this.props.statement.input
	      ),
	      _react2.default.createElement("div", {
	        className: "return-statement",
	        dangerouslySetInnerHTML: { __html: this.props.statement.return }
	      })
	    );
	  };
	
	  return Statement;
	}(_react2.default.PureComponent);
	
	exports.default = About;
	module.exports = exports["default"];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContactLinks = function (_React$PureComponent) {
	  _inherits(ContactLinks, _React$PureComponent);
	
	  function ContactLinks() {
	    _classCallCheck(this, ContactLinks);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  ContactLinks.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "contact-links" },
	      _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement(
	          "a",
	          {
	            rel: "noopener",
	            target: "_blank",
	            href: "https://www.linkedin.com/in/dhaval-singh-502b79161/"
	          },
	          "LinkedIn"
	        )
	      ),
	      _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement(
	          "a",
	          { rel: "noopener", target: "_blank", href: "mailto:dhavalsingh19@gmail.com" },
	          "dhavalsingh19@gmail.com"
	        )
	      ),
	      _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement(
	          "a",
	          { rel: "noopener", target: "_blank", href: "https://github.com/dhavalsingh-eGov" },
	          "github"
	        )
	      )
	    );
	  };
	
	  return ContactLinks;
	}(_react2.default.PureComponent);
	
	exports.default = ContactLinks;
	module.exports = exports["default"];

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_React$PureComponent) {
	  _inherits(Footer, _React$PureComponent);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  Footer.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "footer" },
	      _react2.default.createElement(
	        "span",
	        null,
	        "Made by Dhaval Singh \xA9 ",
	        new Date().getFullYear()
	      )
	    );
	  };
	
	  return Footer;
	}(_react2.default.PureComponent);
	
	exports.default = Footer;
	module.exports = exports["default"];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Typewriter = __webpack_require__(203);
	
	var _Typewriter2 = _interopRequireDefault(_Typewriter);
	
	var _reactScrollchor = __webpack_require__(161);
	
	var _reactScrollchor2 = _interopRequireDefault(_reactScrollchor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hero = function (_React$PureComponent) {
	  _inherits(Hero, _React$PureComponent);
	
	  function Hero(props) {
	    _classCallCheck(this, Hero);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.call(this, props));
	  }
	
	  Hero.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'hero-container' },
	      _react2.default.createElement(_Typewriter2.default, { className: 'hero-title', text: 'Dhaval Singh' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'hero-description' },
	        'I am an intern at eGoverment Foundation as a software engineer.',
	        _react2.default.createElement('br', null),
	        'Check out my',
	        ' ',
	        _react2.default.createElement(
	          _reactScrollchor2.default,
	          { to: '#projects' },
	          'projects'
	        ),
	        ' below.'
	      )
	    );
	  };
	
	  return Hero;
	}(_react2.default.PureComponent);
	
	exports.default = Hero;
	module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactScrollchor = __webpack_require__(161);
	
	var _reactScrollchor2 = _interopRequireDefault(_reactScrollchor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navbar = function (_React$PureComponent) {
	  _inherits(Navbar, _React$PureComponent);
	
	  function Navbar() {
	    _classCallCheck(this, Navbar);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  Navbar.prototype.componentDidMount = function componentDidMount() {
	    this.refs.navbar.addEventListener('click', function (e) {
	      if (e.target.innerText === 'Projects') {
	        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
	      } else if (e.target.innerText === 'Contact') {
	        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	      } else if (e.target.innerText === 'About') {
	        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
	      }
	    });
	  };
	
	  Navbar.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'navbar-container' },
	      _react2.default.createElement(
	        'nav',
	        { className: 'navbar', ref: 'navbar' },
	        _react2.default.createElement(
	          _reactScrollchor2.default,
	          { to: '#projects' },
	          'Projects'
	        ),
	        _react2.default.createElement(
	          _reactScrollchor2.default,
	          { to: '#contact' },
	          'Contact'
	        ),
	        _react2.default.createElement(
	          _reactScrollchor2.default,
	          { to: '#about' },
	          'About'
	        )
	      )
	    );
	  };
	
	  return Navbar;
	}(_react2.default.PureComponent);
	
	exports.default = Navbar;
	module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(65);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProjectSkill = function (_React$PureComponent) {
	  _inherits(ProjectSkill, _React$PureComponent);
	
	  function ProjectSkill() {
	    _classCallCheck(this, ProjectSkill);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  ProjectSkill.prototype.render = function render() {
	    return _react2.default.createElement(
	      'span',
	      { className: 'project-skill' },
	      this.props.skill
	    );
	  };
	
	  return ProjectSkill;
	}(_react2.default.PureComponent);
	
	var ProjectSkills = function (_React$PureComponent2) {
	  _inherits(ProjectSkills, _React$PureComponent2);
	
	  function ProjectSkills() {
	    _classCallCheck(this, ProjectSkills);
	
	    return _possibleConstructorReturn(this, _React$PureComponent2.apply(this, arguments));
	  }
	
	  ProjectSkills.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'project-skills' },
	      this.props.skills.map(function (skill, index) {
	        return _react2.default.createElement(ProjectSkill, { skill: skill, key: index });
	      })
	    );
	  };
	
	  return ProjectSkills;
	}(_react2.default.PureComponent);
	
	var ProjectLinks = function (_React$PureComponent3) {
	  _inherits(ProjectLinks, _React$PureComponent3);
	
	  function ProjectLinks() {
	    _classCallCheck(this, ProjectLinks);
	
	    return _possibleConstructorReturn(this, _React$PureComponent3.apply(this, arguments));
	  }
	
	  ProjectLinks.prototype.render = function render() {
	    var _props$links = this.props.links,
	        github = _props$links.github,
	        preview = _props$links.preview,
	        shouldHideGit = _props$links.shouldHideGit,
	        shouldHidePrev = _props$links.shouldHidePrev;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'project-links' },
	      _react2.default.createElement(
	        'a',
	        {
	          href: preview,
	          rel: 'noopener',
	          target: '_blank',
	          className: shouldHidePrev ? 'hiddenLink' : 'project-link'
	        },
	        'Live Demo ',
	        _react2.default.createElement(_reactFontawesome2.default, { icon: 'external-link-alt' })
	      ),
	      _react2.default.createElement(
	        'a',
	        {
	          href: github,
	          rel: 'noopener',
	          target: '_blank',
	          className: shouldHideGit ? 'hiddenLink' : 'project-link secondary'
	        },
	        _react2.default.createElement(_reactFontawesome2.default, { icon: ['fab', 'github'] }),
	        ' View Source'
	      )
	    );
	  };
	
	  return ProjectLinks;
	}(_react2.default.PureComponent);
	
	var ProjectCard = function (_React$PureComponent4) {
	  _inherits(ProjectCard, _React$PureComponent4);
	
	  function ProjectCard() {
	    _classCallCheck(this, ProjectCard);
	
	    return _possibleConstructorReturn(this, _React$PureComponent4.apply(this, arguments));
	  }
	
	  ProjectCard.prototype.render = function render() {
	    var _props = this.props,
	        image = _props.image,
	        title = _props.title,
	        duration = _props.duration,
	        description = _props.description,
	        skills = _props.skills,
	        links = _props.links;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'project-card' },
	      _react2.default.createElement('img', { className: 'project-image', src: image }),
	      _react2.default.createElement('div', { className: 'project-background' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'project-content' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          title
	        ),
	        _react2.default.createElement(
	          'h6',
	          null,
	          duration
	        ),
	        _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: description } }),
	        _react2.default.createElement(ProjectSkills, { skills: skills }),
	        _react2.default.createElement(ProjectLinks, { links: links })
	      )
	    );
	  };
	
	  return ProjectCard;
	}(_react2.default.PureComponent);
	
	var Projects = function (_React$PureComponent5) {
	  _inherits(Projects, _React$PureComponent5);
	
	  function Projects() {
	    _classCallCheck(this, Projects);
	
	    return _possibleConstructorReturn(this, _React$PureComponent5.apply(this, arguments));
	  }
	
	  Projects.prototype.render = function render() {
	    var projects = this.props.projects;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'projects-container' },
	      projects.map(function (proj) {
	        return _react2.default.createElement(ProjectCard, {
	          title: proj.title,
	          duration: proj.duration,
	          description: proj.description,
	          skills: proj.skills,
	          links: proj.links,
	          image: proj.image,
	          key: proj.title
	        });
	      })
	    );
	  };
	
	  return Projects;
	}(_react2.default.PureComponent);
	
	exports.default = Projects;
	module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Typewriter = function (_React$Component) {
	  _inherits(Typewriter, _React$Component);
	
	  function Typewriter(props) {
	    _classCallCheck(this, Typewriter);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      text: ''
	    };
	    return _this;
	  }
	
	  Typewriter.prototype.clicketyClack = function clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay) {
	    var _this2 = this;
	
	    var str = '';
	    var typeSpeed = 0;
	    var self = this;
	
	    text.split('').forEach(function (c) {
	      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
	      setTimeout(function () {
	        str += c;
	        _this2.setState({ text: str });
	      }, initDelay + typeSpeed);
	    });
	  };
	
	  Typewriter.prototype.componentDidMount = function componentDidMount() {
	    this.clicketyClack(this.props.text, this.props.minTypeSpeed, this.props.maxTypeSpeed, this.props.initDelay);
	  };
	
	  Typewriter.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: this.props.className },
	      this.state.text,
	      _react2.default.createElement(
	        'span',
	        null,
	        '\xA0'
	      )
	    );
	  };
	
	  return Typewriter;
	}(_react2.default.Component);
	
	Typewriter.defaultProps = {
	  text: 'Give me something to type!',
	  minTypeSpeed: 50,
	  maxTypeSpeed: 90,
	  initDelay: 700
	};
	
	exports.default = Typewriter;
	module.exports = exports['default'];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  width: 100%;\n  height: 10vh;\n  z-index: -1;\n  top: 0;\n  left:0;  \n'], ['\n  position: fixed;\n  width: 100%;\n  height: 10vh;\n  z-index: -1;\n  top: 0;\n  left:0;  \n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(433);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactParticlesJs = __webpack_require__(401);
	
	var _reactParticlesJs2 = _interopRequireDefault(_reactParticlesJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var HeaderWrapper = _styledComponents2.default.div(_templateObject);
	
	var Header = function Header(_ref) {
	  var siteTitle = _ref.siteTitle;
	  return _react2.default.createElement(
	    HeaderWrapper,
	    null,
	    _react2.default.createElement(_reactParticlesJs2.default, {
	      width: '100%',
	      height: '100vh',
	      params: {
	        "particles": {
	          "number": {
	            "value": 80,
	            "density": {
	              "enable": true,
	              "value_area": 800
	            }
	          },
	          "color": {
	            "value": "#ffffff"
	          },
	          "shape": {
	            "type": "circle",
	            "stroke": {
	              "width": 0,
	              "color": "#000000"
	            },
	            "polygon": {
	              "nb_sides": 5
	            },
	            "image": {
	              "src": "img/github.svg",
	              "width": 100,
	              "height": 100
	            }
	          },
	          "opacity": {
	            "value": 0.5,
	            "random": false,
	            "anim": {
	              "enable": false,
	              "speed": 1,
	              "opacity_min": 0.1,
	              "sync": false
	            }
	          },
	          "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	              "enable": false,
	              "speed": 40,
	              "size_min": 0.1,
	              "sync": false
	            }
	          },
	          "line_linked": {
	            "enable": true,
	            "distance": 150,
	            "color": "#ffffff",
	            "opacity": 0.4,
	            "width": 1
	          },
	          "move": {
	            "enable": true,
	            "speed": 6,
	            "direction": "none",
	            "random": false,
	            "straight": false,
	            "out_mode": "out",
	            "bounce": false,
	            "attract": {
	              "enable": false,
	              "rotateX": 600,
	              "rotateY": 1200
	            }
	          }
	        },
	        "interactivity": {
	          "detect_on": "canvas",
	          "events": {
	            "onhover": {
	              "enable": true,
	              "mode": "repulse"
	            },
	            "onclick": {
	              "enable": true,
	              "mode": "push"
	            },
	            "resize": true
	          },
	          "modes": {
	            "grab": {
	              "distance": 400,
	              "line_linked": {
	                "opacity": 1
	              }
	            },
	            "bubble": {
	              "distance": 400,
	              "size": 40,
	              "duration": 2,
	              "opacity": 8,
	              "speed": 3
	            },
	            "repulse": {
	              "distance": 200,
	              "duration": 0.4
	            },
	            "push": {
	              "particles_nb": 4
	            },
	            "remove": {
	              "particles_nb": 2
	            }
	          }
	        } },
	      style: {
	        "backgroundColor": "#252527",
	        "position": "relative",
	        "width": "100%",
	        "height": "10vh"
	      }
	    })
	  );
	};
	exports.default = Header;
	module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = [{
	  input: 'Dhaval.currentLocation',
	  return: '"Bangalore, India"'
	}, {
	  input: 'Dhaval.resume',
	  return: '"<a rel="noopener" href="/Dhaval_singh.pdf" target="_blank">DhavalSingh.pdf</a>"'
	}, {
	  input: 'Dhaval.education',
	  return: '"M.Sc. Physics and B.E. Electronics And Instrumentation from Bits Pilani K.K Birla Goa campus"'
	}, {
	  input: 'Dhaval.skills',
	  return: '["Java", "JavaScript", "Python", "React", "C++", "HTML", "CSS", "git"]'
	}, {
	  input: 'Dhaval.interests',
	  return: '["Football", "Esports", "cooking", "Movies"]'
	}];
	module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _travlr = __webpack_require__(539);
	
	var _travlr2 = _interopRequireDefault(_travlr);
	
	var _digit = __webpack_require__(536);
	
	var _digit2 = _interopRequireDefault(_digit);
	
	var _blog = __webpack_require__(535);
	
	var _blog2 = _interopRequireDefault(_blog);
	
	var _neutron = __webpack_require__(537);
	
	var _neutron2 = _interopRequireDefault(_neutron);
	
	var _portfolio = __webpack_require__(538);
	
	var _portfolio2 = _interopRequireDefault(_portfolio);
	
	var _webiste = __webpack_require__(540);
	
	var _webiste2 = _interopRequireDefault(_webiste);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// image can be any size. just make sure it is close to a 1:1 ratio - a square.
	
	exports.default = [{
	  title: 'Frontend Developer(Internship) at eGoverments Foundation',
	  duration: 'Jan - ongoing 2019',
	  description: 'Worked on Developing a configuration based in-house UI Framework on top of React which enables the screen development using JSON specifications on fly.',
	  skills: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS'],
	  image: _travlr2.default,
	  links: {
	    github: '',
	    preview: '',
	    shouldHideGit: true,
	    shouldHidePrev: true
	  }
	}, {
	  title: 'Backend Developer(Internship) at eGoverments Foundation',
	  duration: 'Aug - Dec 2019',
	  description: 'DIGIT is a comprehensive, state of the art Open-source, interoperable and scalable civic tech solution platform. Collaborated in a cross-functional Platform team by upgrading and maintaing core web applications on the DIGIT platform.',
	  skills: ['Microservices', 'Java Spring Boot Framework', 'Restful Web Services', 'PostgreSQL'],
	  image: _digit2.default,
	  links: {
	    github: '',
	    preview: '',
	    shouldHideGit: true,
	    shouldHidePrev: true
	  }
	}, {
	  title: 'Portfolio',
	  duration: '',
	  description: 'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
	  skills: ['HTML5', 'CSS', 'Sass', 'JavaScript', 'ReactJS'],
	  image: _portfolio2.default,
	  links: {
	    github: 'https://github.com/dhavalsingh-eGov/dhavalsingh-eGov.github.io',
	    preview: 'https://dhavalsingh-egov.github.io/',
	    shouldHideGit: false,
	    shouldHidePrev: false
	  }
	}, {
	  title: 'Personal Website',
	  duration: '',
	  description: 'I created my personal responsive webiste with space inavaders game integrated.',
	  skills: ['HTML5', 'CSS', 'JavaScript', 'Jquery'],
	  image: _webiste2.default,
	  links: {
	    github: 'https://github.com/dhavalsingh-eGov/personalsite',
	    preview: 'https://dhavalsingh-egov.github.io/personalsite/',
	    shouldHideGit: false,
	    shouldHidePrev: false
	  }
	}, {
	  title: 'Use of computational Physics in determining Neutron stars as potential gravitational wave emitters',
	  duration: 'Aug 2018 - April 2019',
	  description: 'RNS Code was used to solve the Tolman-Oppenheimer-Volkoff (TOV) equations and further used to construct models of non-rotating, relativistic, compact stars usingtabulated equations of state which are supplied by the user.',
	  skills: ['C++', 'Python', 'Matlab'],
	  image: _neutron2.default,
	  links: {
	    github: '',
	    preview: '',
	    shouldHideGit: true,
	    shouldHidePrev: true
	  }
	}, {
	  title: 'Handshake Vigilante',
	  duration: ' ',
	  description: 'My Blog based on Movie and Tv shows',
	  skills: ['Wordpress'],
	  image: _blog2.default,
	  links: {
	    github: 'https://handshakevigilante.wordpress.com/',
	    preview: 'https://handshakevigilante.wordpress.com/',
	    shouldHideGit: true,
	    shouldHidePrev: false
	  }
	}];
	module.exports = exports['default'];

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Navbar = __webpack_require__(201);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Hero = __webpack_require__(200);
	
	var _Hero2 = _interopRequireDefault(_Hero);
	
	var _About = __webpack_require__(197);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Projects = __webpack_require__(202);
	
	var _Projects2 = _interopRequireDefault(_Projects);
	
	var _ContactLinks = __webpack_require__(198);
	
	var _ContactLinks2 = _interopRequireDefault(_ContactLinks);
	
	var _Footer = __webpack_require__(199);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _particleback = __webpack_require__(204);
	
	var _particleback2 = _interopRequireDefault(_particleback);
	
	var _projects = __webpack_require__(206);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var _aboutMe = __webpack_require__(205);
	
	var _aboutMe2 = _interopRequireDefault(_aboutMe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$PureComponent) {
	  _inherits(Home, _React$PureComponent);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
	  }
	
	  Home.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'home-container' },
	      _react2.default.createElement(_Navbar2.default, null),
	      _react2.default.createElement(_Hero2.default, null),
	      _react2.default.createElement(_About2.default, { statements: _aboutMe2.default }),
	      _react2.default.createElement(
	        'h2',
	        { id: 'projects', className: 'section-title' },
	        'Projects'
	      ),
	      _react2.default.createElement(_Projects2.default, { projects: _projects2.default }),
	      _react2.default.createElement('div', { className: 'background' }),
	      _react2.default.createElement(
	        'h2',
	        { id: 'contact', className: 'section-title' },
	        'Contact me!'
	      ),
	      _react2.default.createElement(_ContactLinks2.default, null),
	      _react2.default.createElement(_Footer2.default, null),
	      _react2.default.createElement(_particleback2.default, null)
	    );
	  };
	
	  return Home;
	}(_react2.default.PureComponent);
	
	exports.default = Home;
	module.exports = exports['default'];

/***/ }),
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    root = __webpack_require__(8);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(348),
	    hashDelete = __webpack_require__(349),
	    hashGet = __webpack_require__(350),
	    hashHas = __webpack_require__(351),
	    hashSet = __webpack_require__(352);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    root = __webpack_require__(8);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    root = __webpack_require__(8);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(139),
	    setCacheAdd = __webpack_require__(372),
	    setCacheHas = __webpack_require__(373);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(53),
	    stackClear = __webpack_require__(375),
	    stackDelete = __webpack_require__(376),
	    stackGet = __webpack_require__(377),
	    stackHas = __webpack_require__(378),
	    stackSet = __webpack_require__(379);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(28),
	    root = __webpack_require__(8);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 326 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(337),
	    isArguments = __webpack_require__(380),
	    isArray = __webpack_require__(98),
	    isBuffer = __webpack_require__(144),
	    isIndex = __webpack_require__(353),
	    isTypedArray = __webpack_require__(148);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 328 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 329 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(328),
	    isArray = __webpack_require__(98);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(55),
	    isObjectLike = __webpack_require__(58);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(333),
	    isObjectLike = __webpack_require__(58);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(323),
	    equalArrays = __webpack_require__(140),
	    equalByTag = __webpack_require__(341),
	    equalObjects = __webpack_require__(342),
	    getTag = __webpack_require__(346),
	    isArray = __webpack_require__(98),
	    isBuffer = __webpack_require__(144),
	    isTypedArray = __webpack_require__(148);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(145),
	    isMasked = __webpack_require__(355),
	    isObject = __webpack_require__(147),
	    toSource = __webpack_require__(142);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(55),
	    isLength = __webpack_require__(146),
	    isObjectLike = __webpack_require__(58);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(356),
	    nativeKeys = __webpack_require__(368);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 337 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 338 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 339 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(97),
	    Uint8Array = __webpack_require__(324),
	    eq = __webpack_require__(143),
	    equalArrays = __webpack_require__(140),
	    mapToArray = __webpack_require__(367),
	    setToArray = __webpack_require__(374);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(343);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(330),
	    getSymbols = __webpack_require__(345),
	    keys = __webpack_require__(383);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(97);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(326),
	    stubArray = __webpack_require__(384);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(318),
	    Map = __webpack_require__(96),
	    Promise = __webpack_require__(320),
	    Set = __webpack_require__(321),
	    WeakMap = __webpack_require__(325),
	    baseGetTag = __webpack_require__(55),
	    toSource = __webpack_require__(142);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 347 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 349 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 353 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 354 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(340);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 356 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 357 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(54);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(54);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(54);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(54);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(319),
	    ListCache = __webpack_require__(53),
	    Map = __webpack_require__(96);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(56);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(56);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(56);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(56);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 367 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(371);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(141);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(181)(module)))

/***/ }),
/* 370 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 371 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 372 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 373 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 374 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(53);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 376 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 377 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 378 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(53),
	    Map = __webpack_require__(96),
	    MapCache = __webpack_require__(139);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(331),
	    isObjectLike = __webpack_require__(58);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(145),
	    isLength = __webpack_require__(146);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(332);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(327),
	    baseKeys = __webpack_require__(336),
	    isArrayLike = __webpack_require__(381);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 384 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 385 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),
/* 392 */,
/* 393 */,
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(391)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(398);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=__webpack_require__(1)},function(e,t){e.exports=__webpack_require__(31)},function(e,t){e.exports=__webpack_require__(62)},function(e,t){e.exports=__webpack_require__(108)},function(e,t){e.exports=__webpack_require__(168)},function(e,t){e.exports=__webpack_require__(30)},function(e,t){e.exports=__webpack_require__(9)},function(e,t){e.exports=__webpack_require__(106)},function(e,t){e.exports=__webpack_require__(61)},function(e,t){e.exports=__webpack_require__(60)},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(11));t.Particles=i.default,n(r(7)),n(r(9)),n(r(8)),n(r(3)),n(r(4)),n(r(2)),n(r(17)),n(r(18)),n(r(1)),n(r(6)),n(r(19)),n(r(5)),t.default=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=p(r(0)),y=r(0),v=f(r(12)),b=r(13),h=r(14),m=r(15),_=r(16),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,r,n,p,f=(t=y,function(){var e,r=c(t);if(u()){var n=c(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=f.call(this,e)).state={canvas:void 0,library:void 0},t.loadCanvas=t.loadCanvas.bind(a(t)),t}return r=y,(n=[{key:"buildParticlesLibrary",value:function(e,t){try{if(void 0===window)return null}catch(e){return null}var r=new m.Options;r.load(h.defaultParams),r.load(t),_.tsParticles.dom();var n=new b.Container(e,r);return this.props.particlesRef&&(this.props.particlesRef.current=n),n}},{key:"refresh",value:function(e){var t=this,r=this.state.canvas;r&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.id,e.params)},(function(){t.loadCanvas(r)})))}},{key:"destroy",value:function(){this.state.library&&this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},(function(){var r=t.state.library;r&&(r.canvas.loadCanvas(e),r.start())}))}},{key:"shouldComponentUpdate",value:function(e){return!v.default(e,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),i(c(y.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.id,this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height,n=e.className,o=e.canvasClassName,i=e.id;return d.createElement("div",{className:n,id:i},d.createElement("canvas",{ref:this.loadCanvas,className:o,style:Object.assign(Object.assign({},this.props.style),{width:t,height:r})}))}}])&&o(r.prototype,n),p&&o(r,p),y}(y.Component);t.default=g,g.defaultProps={width:"100%",height:"100%",params:h.defaultParams,style:{},id:"tsparticles"}},function(e,t){e.exports=__webpack_require__(382)},function(e,t){e.exports=__webpack_require__(436)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(3),s=r(4),a=r(5),u=r(6),c=r(7),l=r(8),p=r(9);t.defaultParams={particles:{number:{value:40,max:-1,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:n.ShapeType.circle,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:p.MoveDirection.none,random:!1,straight:!1,out_mode:l.OutMode.bounce,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detectsOn:c.InteractivityDetect.canvas,events:{onHover:{enable:!1,mode:a.HoverMode.grab},onClick:{enable:!1,mode:u.ClickMode.repulse},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:o.PolygonMaskType.inline,inline:{arrangement:i.PolygonMaskInlineArrangement.onePerPoint},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:s.PolygonMaskMoveType.path},url:""}}},function(e,t){e.exports=__webpack_require__(437)},function(e,t){e.exports=__webpack_require__(533)},function(e,t){e.exports=__webpack_require__(169)},function(e,t){e.exports=__webpack_require__(63)},function(e,t){e.exports=__webpack_require__(107)}]));

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	const ReactParticles = __webpack_require__(400);
	for (let key in ReactParticles) {
	    ReactParticles.default[key] = ReactParticles[key];
	}
	module.exports = ReactParticles.default;

/***/ }),
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animateScroll = undefined;
	exports.updateHistory = updateHistory;
	
	var _requestanimationframeTimer = __webpack_require__(424);
	
	var animateScroll = exports.animateScroll = function () {
	  var timeoutId = void 0;
	  var resolvePrevious = void 0;
	
	  return function animateScroll(id, animate) {
	    return new Promise(function (resolve, reject) {
	      var element = id ? document.getElementById(id) : document.body;
	
	      if (!element) {
	        return reject('Cannot find element: #' + id);
	      }
	
	      var offset = animate.offset,
	          duration = animate.duration,
	          easing = animate.easing;
	
	      var start = getScrollTop();
	      var to = getOffsetTop(element) + offset;
	      var change = to - start;
	
	      function animateFn() {
	        var elapsedTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	        var increment = 20;
	        var elapsed = elapsedTime + increment;
	        var position = easing(null, elapsed, start, change, duration);
	        setScrollTop(position);
	        if (elapsed < duration) {
	          timeoutId = (0, _requestanimationframeTimer.setTimeout)(function () {
	            animateFn(elapsed);
	          }, increment);
	        } else {
	          timeoutId = undefined;
	          return resolve(id);
	        }
	      }
	
	      if (timeoutId) {
	        (0, _requestanimationframeTimer.clearTimeout)(timeoutId);
	        resolvePrevious();
	      }
	      resolvePrevious = resolve;
	      animateFn();
	    });
	  };
	}();
	
	function updateHistory(id) {
	  id = '#' + id;
	  if (history.pushState) {
	    history.pushState(null, null, id);
	  } else {
	    location.hash = id;
	  }
	}
	
	function getScrollTop() {
	  // like jQuery -> $('html, body').scrollTop
	  return document.documentElement.scrollTop || document.body.scrollTop;
	}
	
	function setScrollTop(position) {
	  document.documentElement.scrollTop = document.body.scrollTop = position;
	}
	
	function getOffsetTop(element) {
	  var _element$getBoundingC = element.getBoundingClientRect(),
	      top = _element$getBoundingC.top;
	
	  return top + getScrollTop();
	}

/***/ }),
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(425).default;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _raf = __webpack_require__(394);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var MODE_TIMEOUT = 0;
	var MODE_INTERVAL = 1;
	var fnStacks = new Map();
	var runArray = new Set();
	var rafStarted = false;
	var startId = 0;
	
	function getTimeStamp() {
	  return new Date().getTime();
	}
	
	function executeFn(value) {
	  var fn = value.fn,
	      args = value.args;
	
	  fn.apply(undefined, _toConsumableArray(args));
	}
	
	function runFunction() {
	  if (runArray.size === 0) return;
	  runArray.forEach(executeFn);
	  runArray.clear();
	}
	
	var checkTick = function checkTick(currentTimeTick) {
	  return function (value, id) {
	    var nextTick = value.nextTick,
	        ms = value.ms,
	        mode = value.mode;
	
	    if (currentTimeTick - nextTick >= 0) {
	      runArray.add(value);
	      if (mode === MODE_TIMEOUT) {
	        fnStacks.delete(id);
	      } else {
	        fnStacks.set(id, Object.assign({}, value, {
	          nextTick: nextTick + ms
	        }));
	      }
	    }
	  };
	};
	
	function loop() {
	  var currentTimeTick = getTimeStamp();
	  fnStacks.forEach(checkTick(currentTimeTick));
	  runFunction();
	  if (fnStacks.size === 0) {
	    rafStarted = false;
	    return;
	  }
	  (0, _raf2.default)(loop);
	}
	
	function addId(_ref) {
	  var fn = _ref.fn,
	      _ref$ms = _ref.ms,
	      ms = _ref$ms === undefined ? 0 : _ref$ms,
	      args = _ref.args,
	      mode = _ref.mode;
	
	  if (!fn) return null;
	  var currentId = startId;
	  fnStacks.set(currentId, {
	    fn: fn,
	    ms: ms,
	    nextTick: getTimeStamp() + ms,
	    args: args,
	    mode: mode
	  });
	  if (!rafStarted) {
	    rafStarted = true;
	    (0, _raf2.default)(loop);
	  }
	  startId += 1;
	  return currentId;
	}
	
	function removeId(id) {
	  if (fnStacks.has(id)) {
	    fnStacks.delete(id);
	  }
	  if (fnStacks.size === 0) {
	    rafStarted = false;
	  }
	}
	
	exports.default = {
	  setTimeout: function setTimeout(fn) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return addId({ fn: fn, ms: ms, args: args, mode: MODE_TIMEOUT });
	  },
	  clearTimeout: removeId,
	  setInterval: function setInterval(fn) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      args[_key2 - 2] = arguments[_key2];
	    }
	
	    var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return addId({ fn: fn, ms: ms, args: args, mode: MODE_INTERVAL });
	  },
	  clearInterval: removeId
	};

/***/ }),
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var reactIs = __webpack_require__(399);
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var shallowequal = _interopDefault(__webpack_require__(103));
	var Stylis = _interopDefault(__webpack_require__(184));
	var unitless = _interopDefault(__webpack_require__(185));
	var validAttr = _interopDefault(__webpack_require__(182));
	var hoist = _interopDefault(__webpack_require__(94));
	
	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  return _extends.apply(this, arguments);
	}
	
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	// 
	var interleave = (function (strings, interpolations) {
	  var result = [strings[0]];
	
	  for (var i = 0, len = interpolations.length; i < len; i += 1) {
	    result.push(interpolations[i], strings[i + 1]);
	  }
	
	  return result;
	});
	
	// 
	var isPlainObject = (function (x) {
	  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !reactIs.typeOf(x);
	});
	
	// 
	var EMPTY_ARRAY = Object.freeze([]);
	var EMPTY_OBJECT = Object.freeze({});
	
	// 
	function isFunction(test) {
	  return typeof test === 'function';
	}
	
	// 
	function getComponentName(target) {
	  return ( false ? typeof target === 'string' && target : false) || // $FlowFixMe
	  target.displayName || // $FlowFixMe
	  target.name || 'Component';
	}
	
	// 
	function isStatelessFunction(test) {
	  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
	}
	
	// 
	function isStyledComponent(target) {
	  return target && typeof target.styledComponentId === 'string';
	}
	
	// 
	var SC_ATTR = typeof process !== 'undefined' && (({"NODE_ENV":"production","PUBLIC_DIR":"/home/dhaval/website/public"}).REACT_APP_SC_ATTR || ({"NODE_ENV":"production","PUBLIC_DIR":"/home/dhaval/website/public"}).SC_ATTR) || 'data-styled';
	var SC_ATTR_ACTIVE = 'active';
	var SC_ATTR_VERSION = 'data-styled-version';
	var SC_VERSION = "5.1.0";
	var SPLITTER = '/*!sc*/\n';
	var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
	var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (({"NODE_ENV":"production","PUBLIC_DIR":"/home/dhaval/website/public"}).REACT_APP_SC_DISABLE_SPEEDY || ({"NODE_ENV":"production","PUBLIC_DIR":"/home/dhaval/website/public"}).SC_DISABLE_SPEEDY) || ("production") !== 'production'; // Shared empty execution context when generating static styles
	
	var STATIC_EXECUTION_CONTEXT = {};
	
	// 
	
	/* eslint-disable camelcase, no-undef */
	var getNonce = function getNonce() {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	};
	
	var errorMap = {
	  "1": "Cannot create styled-component for component: %s.\n\n",
	  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
	  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
	  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
	  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
	  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
	  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
	  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
	  "9": "Missing document `<head>`\n\n",
	  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
	  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
	  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
	  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
	  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
	  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
	  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
	  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
	};
	
	// 
	var ERRORS =  false ? errorMap : {};
	/**
	 * super basic version of sprintf
	 */
	
	function format() {
	  var a = arguments.length <= 0 ? undefined : arguments[0];
	  var b = [];
	
	  for (var c = 1, len = arguments.length; c < len; c += 1) {
	    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
	  }
	
	  b.forEach(function (d) {
	    a = a.replace(/%[a-z]/, d);
	  });
	  return a;
	}
	/**
	 * Create an error file out of errors.md for development and a simple web link to the full errors
	 * in production mode.
	 */
	
	
	function throwStyledComponentsError(code) {
	  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  if (true) {
	    throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(', ') : ''));
	  } else {
	    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
	  }
	}
	
	// 
	var ELEMENT_TYPE = 1;
	/* Node.ELEMENT_TYPE */
	
	/** Find last style element if any inside target */
	
	var findLastStyleTag = function findLastStyleTag(target) {
	  var childNodes = target.childNodes;
	
	  for (var i = childNodes.length; i >= 0; i--) {
	    var child = childNodes[i];
	
	    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
	      return child;
	    }
	  }
	
	  return undefined;
	};
	/** Create a style element inside `target` or <head> after the last */
	
	
	var makeStyleTag = function makeStyleTag(target) {
	  var head = document.head;
	  var parent = target || head;
	  var style = document.createElement('style');
	  var prevStyle = findLastStyleTag(parent);
	  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
	  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
	  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
	  var nonce = getNonce();
	  if (nonce) style.setAttribute('nonce', nonce);
	  parent.insertBefore(style, nextSibling);
	  return style;
	};
	/** Get the CSSStyleSheet instance for a given style element */
	
	var getSheet = function getSheet(tag) {
	  if (tag.sheet) {
	    return tag.sheet;
	  } // Avoid Firefox quirk where the style element might not have a sheet property
	
	
	  var _document = document,
	      styleSheets = _document.styleSheets;
	
	  for (var i = 0, l = styleSheets.length; i < l; i++) {
	    var sheet = styleSheets[i];
	
	    if (sheet.ownerNode === tag) {
	      return sheet;
	    }
	  }
	
	  throwStyledComponentsError(17);
	  return undefined;
	};
	
	// 
	/** Create a CSSStyleSheet-like tag depending on the environment */
	
	var makeTag = function makeTag(_ref) {
	  var isServer = _ref.isServer,
	      useCSSOMInjection = _ref.useCSSOMInjection,
	      target = _ref.target;
	
	  if (isServer) {
	    return new VirtualTag(target);
	  } else if (useCSSOMInjection) {
	    return new CSSOMTag(target);
	  } else {
	    return new TextTag(target);
	  }
	};
	var CSSOMTag = /*#__PURE__*/function () {
	  function CSSOMTag(target) {
	    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets
	
	    element.appendChild(document.createTextNode(''));
	    this.sheet = getSheet(element);
	    this.length = 0;
	  }
	
	  var _proto = CSSOMTag.prototype;
	
	  _proto.insertRule = function insertRule(index, rule) {
	    try {
	      this.sheet.insertRule(rule, index);
	      this.length++;
	      return true;
	    } catch (_error) {
	      return false;
	    }
	  };
	
	  _proto.deleteRule = function deleteRule(index) {
	    this.sheet.deleteRule(index);
	    this.length--;
	  };
	
	  _proto.getRule = function getRule(index) {
	    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules
	
	    if (rule !== undefined && typeof rule.cssText === 'string') {
	      return rule.cssText;
	    } else {
	      return '';
	    }
	  };
	
	  return CSSOMTag;
	}();
	/** A Tag that emulates the CSSStyleSheet API but uses text nodes */
	
	var TextTag = /*#__PURE__*/function () {
	  function TextTag(target) {
	    var element = this.element = makeStyleTag(target);
	    this.nodes = element.childNodes;
	    this.length = 0;
	  }
	
	  var _proto2 = TextTag.prototype;
	
	  _proto2.insertRule = function insertRule(index, rule) {
	    if (index <= this.length && index >= 0) {
	      var node = document.createTextNode(rule);
	      var refNode = this.nodes[index];
	      this.element.insertBefore(node, refNode || null);
	      this.length++;
	      return true;
	    } else {
	      return false;
	    }
	  };
	
	  _proto2.deleteRule = function deleteRule(index) {
	    this.element.removeChild(this.nodes[index]);
	    this.length--;
	  };
	
	  _proto2.getRule = function getRule(index) {
	    if (index < this.length) {
	      return this.nodes[index].textContent;
	    } else {
	      return '';
	    }
	  };
	
	  return TextTag;
	}();
	/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */
	
	var VirtualTag = /*#__PURE__*/function () {
	  function VirtualTag(_target) {
	    this.rules = [];
	    this.length = 0;
	  }
	
	  var _proto3 = VirtualTag.prototype;
	
	  _proto3.insertRule = function insertRule(index, rule) {
	    if (index <= this.length) {
	      this.rules.splice(index, 0, rule);
	      this.length++;
	      return true;
	    } else {
	      return false;
	    }
	  };
	
	  _proto3.deleteRule = function deleteRule(index) {
	    this.rules.splice(index, 1);
	    this.length--;
	  };
	
	  _proto3.getRule = function getRule(index) {
	    if (index < this.length) {
	      return this.rules[index];
	    } else {
	      return '';
	    }
	  };
	
	  return VirtualTag;
	}();
	
	// 
	/** Create a GroupedTag with an underlying Tag implementation */
	
	var makeGroupedTag = function makeGroupedTag(tag) {
	  return new DefaultGroupedTag(tag);
	};
	var BASE_SIZE = 1 << 9;
	
	var DefaultGroupedTag = /*#__PURE__*/function () {
	  function DefaultGroupedTag(tag) {
	    this.groupSizes = new Uint32Array(BASE_SIZE);
	    this.length = BASE_SIZE;
	    this.tag = tag;
	  }
	
	  var _proto = DefaultGroupedTag.prototype;
	
	  _proto.indexOfGroup = function indexOfGroup(group) {
	    var index = 0;
	
	    for (var i = 0; i < group; i++) {
	      index += this.groupSizes[i];
	    }
	
	    return index;
	  };
	
	  _proto.insertRules = function insertRules(group, rules) {
	    if (group >= this.groupSizes.length) {
	      var oldBuffer = this.groupSizes;
	      var oldSize = oldBuffer.length;
	      var newSize = oldSize;
	
	      while (group >= newSize) {
	        newSize <<= 1;
	
	        if (newSize < 0) {
	          throwStyledComponentsError(16, "" + group);
	        }
	      }
	
	      this.groupSizes = new Uint32Array(newSize);
	      this.groupSizes.set(oldBuffer);
	      this.length = newSize;
	
	      for (var i = oldSize; i < newSize; i++) {
	        this.groupSizes[i] = 0;
	      }
	    }
	
	    var ruleIndex = this.indexOfGroup(group + 1);
	
	    for (var _i = 0, l = rules.length; _i < l; _i++) {
	      if (this.tag.insertRule(ruleIndex, rules[_i])) {
	        this.groupSizes[group]++;
	        ruleIndex++;
	      }
	    }
	  };
	
	  _proto.clearGroup = function clearGroup(group) {
	    if (group < this.length) {
	      var length = this.groupSizes[group];
	      var startIndex = this.indexOfGroup(group);
	      var endIndex = startIndex + length;
	      this.groupSizes[group] = 0;
	
	      for (var i = startIndex; i < endIndex; i++) {
	        this.tag.deleteRule(startIndex);
	      }
	    }
	  };
	
	  _proto.getGroup = function getGroup(group) {
	    var css = '';
	
	    if (group >= this.length || this.groupSizes[group] === 0) {
	      return css;
	    }
	
	    var length = this.groupSizes[group];
	    var startIndex = this.indexOfGroup(group);
	    var endIndex = startIndex + length;
	
	    for (var i = startIndex; i < endIndex; i++) {
	      css += "" + this.tag.getRule(i) + SPLITTER;
	    }
	
	    return css;
	  };
	
	  return DefaultGroupedTag;
	}();
	
	// 
	var MAX_SMI = 1 << 31 - 1;
	var groupIDRegister = new Map();
	var reverseRegister = new Map();
	var nextFreeGroup = 1;
	var getGroupForId = function getGroupForId(id) {
	  if (groupIDRegister.has(id)) {
	    return groupIDRegister.get(id);
	  }
	
	  var group = nextFreeGroup++;
	
	  if (false) {
	    throwStyledComponentsError(16, "" + group);
	  }
	
	  groupIDRegister.set(id, group);
	  reverseRegister.set(group, id);
	  return group;
	};
	var getIdForGroup = function getIdForGroup(group) {
	  return reverseRegister.get(group);
	};
	var setGroupForId = function setGroupForId(id, group) {
	  if (group >= nextFreeGroup) {
	    nextFreeGroup = group + 1;
	  }
	
	  groupIDRegister.set(id, group);
	  reverseRegister.set(group, id);
	};
	
	// 
	var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
	var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
	var outputSheet = function outputSheet(sheet) {
	  var tag = sheet.getTag();
	  var length = tag.length;
	  var css = '';
	
	  for (var group = 0; group < length; group++) {
	    var id = getIdForGroup(group);
	    if (id === undefined) continue;
	    var names = sheet.names.get(id);
	    var rules = tag.getGroup(group);
	    if (names === undefined || rules.length === 0) continue;
	    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
	    var content = '';
	
	    if (names !== undefined) {
	      names.forEach(function (name) {
	        if (name.length > 0) {
	          content += name + ",";
	        }
	      });
	    } // NOTE: It's easier to collect rules and have the marker
	    // after the actual rules to simplify the rehydration
	
	
	    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
	  }
	
	  return css;
	};
	
	var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
	  var names = content.split(',');
	  var name;
	
	  for (var i = 0, l = names.length; i < l; i++) {
	    // eslint-disable-next-line
	    if (name = names[i]) {
	      sheet.registerName(id, name);
	    }
	  }
	};
	
	var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
	  var parts = style.innerHTML.split(SPLITTER);
	  var rules = [];
	
	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].trim();
	    if (!part) continue;
	    var marker = part.match(MARKER_RE);
	
	    if (marker) {
	      var group = parseInt(marker[1], 10) | 0;
	      var id = marker[2];
	
	      if (group !== 0) {
	        // Rehydrate componentId to group index mapping
	        setGroupForId(id, group); // Rehydrate names and rules
	        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}
	
	        rehydrateNamesFromContent(sheet, id, marker[3]);
	        sheet.getTag().insertRules(group, rules);
	      }
	
	      rules.length = 0;
	    } else {
	      rules.push(part);
	    }
	  }
	};
	
	var rehydrateSheet = function rehydrateSheet(sheet) {
	  var nodes = document.querySelectorAll(SELECTOR);
	
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	
	    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
	      rehydrateSheetFromTag(sheet, node);
	
	      if (node.parentNode) {
	        node.parentNode.removeChild(node);
	      }
	    }
	  }
	};
	
	var SHOULD_REHYDRATE = IS_BROWSER;
	var defaultOptions = {
	  isServer: !IS_BROWSER,
	  useCSSOMInjection: !DISABLE_SPEEDY
	};
	/** Contains the main stylesheet logic for stringification and caching */
	
	var StyleSheet = /*#__PURE__*/function () {
	  /** Register a group ID to give it an index */
	  StyleSheet.registerId = function registerId(id) {
	    return getGroupForId(id);
	  };
	
	  function StyleSheet(options, globalStyles, names) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }
	
	    if (globalStyles === void 0) {
	      globalStyles = {};
	    }
	
	    this.options = _extends({}, defaultOptions, {}, options);
	    this.gs = globalStyles;
	    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first
	
	    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
	      SHOULD_REHYDRATE = false;
	      rehydrateSheet(this);
	    }
	  }
	
	  var _proto = StyleSheet.prototype;
	
	  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
	    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
	  };
	
	  _proto.allocateGSInstance = function allocateGSInstance(id) {
	    return this.gs[id] = (this.gs[id] || 0) + 1;
	  }
	  /** Lazily initialises a GroupedTag for when it's actually needed */
	  ;
	
	  _proto.getTag = function getTag() {
	    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
	  }
	  /** Check whether a name is known for caching */
	  ;
	
	  _proto.hasNameForId = function hasNameForId(id, name) {
	    return this.names.has(id) && this.names.get(id).has(name);
	  }
	  /** Mark a group's name as known for caching */
	  ;
	
	  _proto.registerName = function registerName(id, name) {
	    getGroupForId(id);
	
	    if (!this.names.has(id)) {
	      var groupNames = new Set();
	      groupNames.add(name);
	      this.names.set(id, groupNames);
	    } else {
	      this.names.get(id).add(name);
	    }
	  }
	  /** Insert new rules which also marks the name as known */
	  ;
	
	  _proto.insertRules = function insertRules(id, name, rules) {
	    this.registerName(id, name);
	    this.getTag().insertRules(getGroupForId(id), rules);
	  }
	  /** Clears all cached names for a given group ID */
	  ;
	
	  _proto.clearNames = function clearNames(id) {
	    if (this.names.has(id)) {
	      this.names.get(id).clear();
	    }
	  }
	  /** Clears all rules for a given group ID */
	  ;
	
	  _proto.clearRules = function clearRules(id) {
	    this.getTag().clearGroup(getGroupForId(id));
	    this.clearNames(id);
	  }
	  /** Clears the entire tag which deletes all rules but not its names */
	  ;
	
	  _proto.clearTag = function clearTag() {
	    // NOTE: This does not clear the names, since it's only used during SSR
	    // so that we can continuously output only new rules
	    this.tag = undefined;
	  }
	  /** Outputs the current sheet as a CSS string with markers for SSR */
	  ;
	
	  _proto.toString = function toString() {
	    return outputSheet(this);
	  };
	
	  return StyleSheet;
	}();
	
	// 
	
	/* eslint-disable */
	var SEED = 5381; // When we have separate strings it's useful to run a progressive
	// version of djb2 where we pretend that we're still looping over
	// the same string
	
	var phash = function phash(h, x) {
	  var i = x.length;
	
	  while (i) {
	    h = h * 33 ^ x.charCodeAt(--i);
	  }
	
	  return h;
	}; // This is a djb2 hashing function
	
	var hash = function hash(x) {
	  return phash(SEED, x);
	};
	
	/**
	 * MIT License
	 *
	 * Copyright (c) 2016 Sultan Tarimo
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"),
	 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
	 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	/* eslint-disable */
	function insertRulePlugin (insertRule) {
	  var delimiter = '/*|*/';
	  var needle = delimiter + "}";
	
	  function toSheet(block) {
	    if (block) {
	      try {
	        insertRule(block + "}");
	      } catch (e) {}
	    }
	  }
	
	  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
	    switch (context) {
	      // property
	      case 1:
	        // @import
	        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
	        break;
	      // selector
	
	      case 2:
	        if (ns === 0) return content + delimiter;
	        break;
	      // at-rule
	
	      case 3:
	        switch (ns) {
	          // @font-face, @page
	          case 102:
	          case 112:
	            return insertRule(selectors[0] + content), '';
	
	          default:
	            return content + (at === 0 ? delimiter : '');
	        }
	
	      case -2:
	        content.split(needle).forEach(toSheet);
	    }
	  };
	}
	
	var COMMENT_REGEX = /^\s*\/\/.*$/gm;
	function createStylisInstance(_temp) {
	  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
	      _ref$options = _ref.options,
	      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
	      _ref$plugins = _ref.plugins,
	      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;
	
	  var stylis = new Stylis(options); // Wrap `insertRulePlugin to build a list of rules,
	  // and then make our own plugin to return the rules. This
	  // makes it easier to hook into the existing SSR architecture
	
	  var parsingRules = []; // eslint-disable-next-line consistent-return
	
	  var returnRulesPlugin = function returnRulesPlugin(context) {
	    if (context === -2) {
	      var parsedRules = parsingRules;
	      parsingRules = [];
	      return parsedRules;
	    }
	  };
	
	  var parseRulesPlugin = insertRulePlugin(function (rule) {
	    parsingRules.push(rule);
	  });
	
	  var _componentId;
	
	  var _selector;
	
	  var _selectorRegexp;
	
	  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
	    if ( // the first self-ref is always untouched
	    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
	    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
	    string.slice(offset - _selector.length, offset) !== _selector) {
	      return "." + _componentId;
	    }
	
	    return match;
	  };
	  /**
	   * When writing a style like
	   *
	   * & + & {
	   *   color: red;
	   * }
	   *
	   * The second ampersand should be a reference to the static component class. stylis
	   * has no knowledge of static class so we have to intelligently replace the base selector.
	   *
	   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
	   * "2" means this plugin is taking effect at the very end after all other processing is complete
	   */
	
	
	  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
	    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
	      // eslint-disable-next-line no-param-reassign
	      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
	    }
	  };
	
	  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));
	
	  function stringifyRules(css, selector, prefix, componentId) {
	    if (componentId === void 0) {
	      componentId = '&';
	    }
	
	    var flatCSS = css.replace(COMMENT_REGEX, '');
	    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
	    // but since JS is single=threaded, we can rely on that to ensure
	    // these properties stay in sync with the current stylis run
	
	    _componentId = componentId;
	    _selector = selector;
	    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
	    return stylis(prefix || !selector ? '' : selector, cssStr);
	  }
	
	  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
	    if (!plugin.name) {
	      throwStyledComponentsError(15);
	    }
	
	    return phash(acc, plugin.name);
	  }, SEED).toString() : '';
	  return stringifyRules;
	}
	
	// 
	var StyleSheetContext = React__default.createContext();
	var StyleSheetConsumer = StyleSheetContext.Consumer;
	var StylisContext = React__default.createContext();
	var StylisConsumer = StylisContext.Consumer;
	var masterSheet = new StyleSheet();
	var masterStylis = createStylisInstance();
	function useStyleSheet() {
	  return React.useContext(StyleSheetContext) || masterSheet;
	}
	function useStylis() {
	  return React.useContext(StylisContext) || masterStylis;
	}
	function StyleSheetManager(props) {
	  var _useState = React.useState(props.stylisPlugins),
	      plugins = _useState[0],
	      setPlugins = _useState[1];
	
	  var contextStyleSheet = useStyleSheet();
	  var styleSheet = React.useMemo(function () {
	    var sheet = contextStyleSheet;
	
	    if (props.sheet) {
	      // eslint-disable-next-line prefer-destructuring
	      sheet = props.sheet;
	    } else if (props.target) {
	      sheet = sheet.reconstructWithOptions({
	        target: props.target
	      });
	    }
	
	    if (props.disableCSSOMInjection) {
	      sheet = sheet.reconstructWithOptions({
	        useCSSOMInjection: false
	      });
	    }
	
	    return sheet;
	  }, [props.disableCSSOMInjection, props.sheet, props.target]);
	  var stylis = React.useMemo(function () {
	    return createStylisInstance({
	      options: {
	        prefix: !props.disableVendorPrefixes
	      },
	      plugins: plugins
	    });
	  }, [props.disableVendorPrefixes, plugins]);
	  React.useEffect(function () {
	    if (!shallowequal(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
	  }, [props.stylisPlugins]);
	  return /*#__PURE__*/React__default.createElement(StyleSheetContext.Provider, {
	    value: styleSheet
	  }, /*#__PURE__*/React__default.createElement(StylisContext.Provider, {
	    value: stylis
	  },  false ? React__default.Children.only(props.children) : props.children));
	}
	
	// 
	
	var Keyframes = /*#__PURE__*/function () {
	  function Keyframes(name, stringifyArgs) {
	    var _this = this;
	
	    this.inject = function (styleSheet) {
	      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
	        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
	      }
	    };
	
	    this.toString = function () {
	      return throwStyledComponentsError(12, String(_this.name));
	    };
	
	    this.name = name;
	    this.id = "sc-keyframes-" + name;
	    this.stringifyArgs = stringifyArgs;
	  }
	
	  var _proto = Keyframes.prototype;
	
	  _proto.getName = function getName() {
	    return this.name;
	  };
	
	  return Keyframes;
	}();
	
	// 
	
	/**
	 * inlined version of
	 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
	 */
	var uppercasePattern = /([A-Z])/g;
	var msPattern = /^ms-/;
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	
	function hyphenateStyleName(string) {
	  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
	}
	
	// 
	
	function addUnitIfNeeded(name, value) {
	  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
	  // $FlowFixMe
	  if (value == null || typeof value === 'boolean' || value === '') {
	    return '';
	  }
	
	  if (typeof value === 'number' && value !== 0 && !(name in unitless)) {
	    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
	  }
	
	  return String(value).trim();
	}
	
	// 
	/**
	 * It's falsish not falsy because 0 is allowed.
	 */
	
	var isFalsish = function isFalsish(chunk) {
	  return chunk === undefined || chunk === null || chunk === false || chunk === '';
	};
	
	var objToCssArray = function objToCssArray(obj, prevKey) {
	  var rules = [];
	  var keys = Object.keys(obj);
	  keys.forEach(function (key) {
	    if (!isFalsish(obj[key])) {
	      if (isPlainObject(obj[key])) {
	        rules.push.apply(rules, objToCssArray(obj[key], key));
	        return rules;
	      } else if (isFunction(obj[key])) {
	        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
	        return rules;
	      }
	
	      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
	    }
	
	    return rules;
	  });
	  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
	};
	function flatten(chunk, executionContext, styleSheet) {
	  if (Array.isArray(chunk)) {
	    var ruleSet = [];
	
	    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
	      result = flatten(chunk[i], executionContext, styleSheet);
	      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
	    }
	
	    return ruleSet;
	  }
	
	  if (isFalsish(chunk)) {
	    return '';
	  }
	  /* Handle other components */
	
	
	  if (isStyledComponent(chunk)) {
	    return "." + chunk.styledComponentId;
	  }
	  /* Either execute or defer the function */
	
	
	  if (isFunction(chunk)) {
	    if (isStatelessFunction(chunk) && executionContext) {
	      var _result = chunk(executionContext);
	
	      if (false) {
	        // eslint-disable-next-line no-console
	        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
	      }
	
	      return flatten(_result, executionContext, styleSheet);
	    } else return chunk;
	  }
	
	  if (chunk instanceof Keyframes) {
	    if (styleSheet) {
	      chunk.inject(styleSheet);
	      return chunk.getName();
	    } else return chunk;
	  }
	  /* Handle objects */
	
	
	  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
	}
	
	// 
	function css(styles) {
	  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  if (isFunction(styles) || isPlainObject(styles)) {
	    // $FlowFixMe
	    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
	  }
	
	  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
	    // $FlowFixMe
	    return styles;
	  } // $FlowFixMe
	
	
	  return flatten(interleave(styles, interpolations));
	}
	
	function constructWithOptions(componentConstructor, tag, options) {
	  if (options === void 0) {
	    options = EMPTY_OBJECT;
	  }
	
	  if (!reactIs.isValidElementType(tag)) {
	    return throwStyledComponentsError(1, String(tag));
	  }
	  /* This is callable directly as a template function */
	  // $FlowFixMe: Not typed to avoid destructuring arguments
	
	
	  var templateFunction = function templateFunction() {
	    return componentConstructor(tag, options, css.apply(void 0, arguments));
	  };
	  /* If config methods are called, wrap up a new template function and merge options */
	
	
	  templateFunction.withConfig = function (config) {
	    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
	  };
	  /* Modify/inject new props at runtime */
	
	
	  templateFunction.attrs = function (attrs) {
	    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
	    }));
	  };
	
	  return templateFunction;
	}
	
	/* eslint-disable */
	
	/**
	  mixin-deep; https://github.com/jonschlinkert/mixin-deep
	  Inlined such that it will be consistently transpiled to an IE-compatible syntax.
	
	  The MIT License (MIT)
	
	  Copyright (c) 2014-present, Jon Schlinkert.
	
	  Permission is hereby granted, free of charge, to any person obtaining a copy
	  of this software and associated documentation files (the "Software"), to deal
	  in the Software without restriction, including without limitation the rights
	  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	  copies of the Software, and to permit persons to whom the Software is
	  furnished to do so, subject to the following conditions:
	
	  The above copyright notice and this permission notice shall be included in
	  all copies or substantial portions of the Software.
	
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	  THE SOFTWARE.
	*/
	var isObject = function isObject(val) {
	  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
	};
	
	var isValidKey = function isValidKey(key) {
	  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
	};
	
	function mixin(target, val, key) {
	  var obj = target[key];
	
	  if (isObject(val) && isObject(obj)) {
	    mixinDeep(obj, val);
	  } else {
	    target[key] = val;
	  }
	}
	
	function mixinDeep(target) {
	  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    rest[_key - 1] = arguments[_key];
	  }
	
	  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
	    var obj = _rest[_i];
	
	    if (isObject(obj)) {
	      for (var key in obj) {
	        if (isValidKey(key)) {
	          mixin(target, obj[key], key);
	        }
	      }
	    }
	  }
	
	  return target;
	}
	
	// 
	
	/* eslint-disable no-bitwise */
	var AD_REPLACER_R = /(a)(d)/gi;
	/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
	 * counterparts */
	
	var charsLength = 52;
	/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
	
	var getAlphabeticChar = function getAlphabeticChar(code) {
	  return String.fromCharCode(code + (code > 25 ? 39 : 97));
	};
	/* input a number, usually a hash and convert it to base-52 */
	
	
	function generateAlphabeticName(code) {
	  var name = '';
	  var x;
	  /* get a char and divide by alphabet-length */
	
	  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
	    name = getAlphabeticChar(x % charsLength) + name;
	  }
	
	  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
	}
	
	// 
	function isStaticRules(rules) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];
	
	    if (isFunction(rule) && !isStyledComponent(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled component
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// 
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	
	var ComponentStyle = /*#__PURE__*/function () {
	  function ComponentStyle(rules, componentId) {
	    this.rules = rules;
	    this.staticRulesId = '';
	    this.isStatic = ("production") === 'production' && isStaticRules(rules);
	    this.componentId = componentId;
	    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
	    // for this component's styles compared to others
	
	    StyleSheet.registerId(componentId);
	  }
	  /*
	   * Flattens a rule set into valid CSS
	   * Hashes it, wraps the whole chunk in a .hash1234 {}
	   * Returns the hash to be injected on render()
	   * */
	
	
	  var _proto = ComponentStyle.prototype;
	
	  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
	    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use
	
	    if (this.isStatic && !stylis.hash) {
	      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
	        return this.staticRulesId;
	      }
	
	      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
	      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);
	
	      if (!styleSheet.hasNameForId(componentId, name)) {
	        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
	        styleSheet.insertRules(componentId, name, cssStaticFormatted);
	      }
	
	      this.staticRulesId = name;
	      return name;
	    } else {
	      var length = this.rules.length;
	      var dynamicHash = phash(this.baseHash, stylis.hash);
	      var css = '';
	
	      for (var i = 0; i < length; i++) {
	        var partRule = this.rules[i];
	
	        if (typeof partRule === 'string') {
	          css += partRule;
	          if (false) dynamicHash = phash(dynamicHash, partRule + i);
	        } else {
	          var partChunk = flatten(partRule, executionContext, styleSheet);
	          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
	          dynamicHash = phash(dynamicHash, partString + i);
	          css += partString;
	        }
	      }
	
	      var _name = generateAlphabeticName(dynamicHash >>> 0);
	
	      if (!styleSheet.hasNameForId(componentId, _name)) {
	        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
	        styleSheet.insertRules(componentId, _name, cssFormatted);
	      }
	
	      return _name;
	    }
	  };
	
	  return ComponentStyle;
	}();
	
	// 
	var LIMIT = 200;
	var createWarnTooManyClasses = (function (displayName, componentId) {
	  var generatedClasses = {};
	  var warningSeen = false;
	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	
	        /* eslint-disable no-console, prefer-template */
	        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
	        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	});
	
	// 
	var invalidHookCallRe = /invalid hook call/i;
	var seen = new Set();
	var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
	  if (false) {
	    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
	    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';
	
	    try {
	      // We purposefully call `useRef` outside of a component and expect it to throw
	      // If it doesn't, then we're inside another component.
	      // eslint-disable-next-line react-hooks/rules-of-hooks
	      React.useRef();
	
	      if (!seen.has(message)) {
	        // eslint-disable-next-line no-console
	        console.warn(message);
	        seen.add(message);
	      }
	    } catch (error) {
	      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
	      // be called outside of a React component.
	      if (invalidHookCallRe.test(error.message)) {
	        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
	        seen["delete"](message);
	      }
	    }
	  }
	};
	
	// 
	var determineTheme = (function (props, providedTheme, defaultProps) {
	  if (defaultProps === void 0) {
	    defaultProps = EMPTY_OBJECT;
	  }
	
	  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
	});
	
	// 
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
	var dashesAtEnds = /(^-|-$)/g;
	/**
	 * TODO: Explore using CSS.escape when it becomes more available
	 * in evergreen browsers.
	 */
	
	function escape(str) {
	  return str // Replace all possible CSS selectors
	  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
	  .replace(dashesAtEnds, '');
	}
	
	// 
	function isTag(target) {
	  return typeof target === 'string' && ( false ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
	}
	
	// 
	function generateDisplayName(target) {
	  // $FlowFixMe
	  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
	}
	
	// 
	var generateComponentId = (function (str) {
	  return generateAlphabeticName(hash(str) >>> 0);
	});
	
	/**
	 * Convenience function for joining strings to form className chains
	 */
	function joinStrings(a, b) {
	  return a && b ? a + " " + b : a || b;
	}
	
	var ThemeContext = React__default.createContext();
	var ThemeConsumer = ThemeContext.Consumer;
	
	function mergeTheme(theme, outerTheme) {
	  if (!theme) {
	    return throwStyledComponentsError(14);
	  }
	
	  if (isFunction(theme)) {
	    var mergedTheme = theme(outerTheme);
	
	    if (false) {
	      return throwStyledComponentsError(7);
	    }
	
	    return mergedTheme;
	  }
	
	  if (Array.isArray(theme) || typeof theme !== 'object') {
	    return throwStyledComponentsError(8);
	  }
	
	  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
	}
	/**
	 * Provide a theme to an entire react component tree via context
	 */
	
	
	function ThemeProvider(props) {
	  var outerTheme = React.useContext(ThemeContext);
	  var themeContext = React.useMemo(function () {
	    return mergeTheme(props.theme, outerTheme);
	  }, [props.theme, outerTheme]);
	
	  if (!props.children) {
	    return null;
	  }
	
	  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
	    value: themeContext
	  }, props.children);
	}
	
	/* global $Call */
	
	var identifiers = {};
	/* We depend on components having unique IDs */
	
	function generateId(displayName, parentComponentId) {
	  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds
	
	  identifiers[name] = (identifiers[name] || 0) + 1;
	  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
	  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
	}
	
	function useResolvedAttrs(theme, props, attrs) {
	  if (theme === void 0) {
	    theme = EMPTY_OBJECT;
	  }
	
	  // NOTE: can't memoize this
	  // returns [context, resolvedAttrs]
	  // where resolvedAttrs is only the things injected by the attrs themselves
	  var context = _extends({}, props, {
	    theme: theme
	  });
	
	  var resolvedAttrs = {};
	  attrs.forEach(function (attrDef) {
	    var resolvedAttrDef = attrDef;
	    var key;
	
	    if (isFunction(resolvedAttrDef)) {
	      resolvedAttrDef = resolvedAttrDef(context);
	    }
	    /* eslint-disable guard-for-in */
	
	
	    for (key in resolvedAttrDef) {
	      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
	    }
	    /* eslint-enable guard-for-in */
	
	  });
	  return [context, resolvedAttrs];
	}
	
	function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
	  var styleSheet = useStyleSheet();
	  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
	  // and shouldn't be increasing the number of class names
	
	  var isStatic = componentStyle.isStatic && !hasAttrs;
	  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
	  React.useDebugValue(className);
	
	  if (false) {
	    warnTooManyClasses(className);
	  }
	
	  return className;
	}
	
	function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
	  var componentAttrs = forwardedComponent.attrs,
	      componentStyle = forwardedComponent.componentStyle,
	      defaultProps = forwardedComponent.defaultProps,
	      foldedComponentIds = forwardedComponent.foldedComponentIds,
	      shouldForwardProp = forwardedComponent.shouldForwardProp,
	      styledComponentId = forwardedComponent.styledComponentId,
	      target = forwardedComponent.target;
	  React.useDebugValue(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
	  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
	  // should be an immutable value, but behave for now.
	
	  var theme = determineTheme(props, React.useContext(ThemeContext), defaultProps);
	
	  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
	      context = _useResolvedAttrs[0],
	      attrs = _useResolvedAttrs[1];
	
	  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  false ? forwardedComponent.warnTooManyClasses : undefined);
	  var refToForward = forwardedRef;
	  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
	  var isTargetTag = isTag(elementToBeCreated);
	  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
	  var propFilterFn = shouldForwardProp || isTargetTag && validAttr;
	  var propsForElement = {}; // eslint-disable-next-line guard-for-in
	
	  for (var key in computedProps) {
	    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
	      propsForElement.as = computedProps[key];
	    } else if (!propFilterFn || propFilterFn(key, validAttr)) {
	      // Don't pass through non HTML tags through to HTML elements
	      propsForElement[key] = computedProps[key];
	    }
	  }
	
	  if (props.style && attrs.style !== props.style) {
	    propsForElement.style = _extends({}, props.style, {}, attrs.style);
	  }
	
	  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
	  propsForElement.ref = refToForward;
	  return React.createElement(elementToBeCreated, propsForElement);
	}
	
	function createStyledComponent(target, options, rules) {
	  var isTargetStyledComp = isStyledComponent(target);
	  var isCompositeComponent = !isTag(target);
	  var _options$displayName = options.displayName,
	      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
	      _options$componentId = options.componentId,
	      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	      _options$attrs = options.attrs,
	      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
	  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)
	
	  var finalAttrs = // $FlowFixMe
	  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring
	
	  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe
	
	  if (isTargetStyledComp && target.shouldForwardProp) {
	    if (shouldForwardProp) {
	      // compose nested shouldForwardProp calls
	      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
	        return (// $FlowFixMe
	          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
	        );
	      };
	    } else {
	      // eslint-disable-next-line prefer-destructuring
	      shouldForwardProp = target.shouldForwardProp;
	    }
	  }
	
	  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
	  // $FlowFixMe
	  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
	  /**
	   * forwardRef creates a new interim component, which we'll take advantage of
	   * instead of extending ParentComponent to create _another_ interim class
	   */
	
	  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks
	
	  var forwardRef = function forwardRef(props, ref) {
	    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
	  };
	
	  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties
	
	  WrappedStyledComponent = React__default.forwardRef(forwardRef);
	  WrappedStyledComponent.attrs = finalAttrs;
	  WrappedStyledComponent.componentStyle = componentStyle;
	  WrappedStyledComponent.displayName = displayName;
	  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
	  // purposes; this is especially important with usage of the css prop
	
	  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
	  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
	  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles
	
	  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
	  target.target : target; // $FlowFixMe
	
	  WrappedStyledComponent.withComponent = function withComponent(tag) {
	    var previousComponentId = options.componentId,
	        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);
	
	    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));
	
	    var newOptions = _extends({}, optionsToCopy, {
	      attrs: finalAttrs,
	      componentId: newComponentId
	    });
	
	    return createStyledComponent(tag, newOptions, rules);
	  }; // $FlowFixMe
	
	
	  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
	    get: function get() {
	      return this._foldedDefaultProps;
	    },
	    set: function set(obj) {
	      // $FlowFixMe
	      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
	    }
	  });
	
	  if (false) {
	    checkDynamicCreation(displayName, styledComponentId);
	    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
	  } // $FlowFixMe
	
	
	  WrappedStyledComponent.toString = function () {
	    return "." + WrappedStyledComponent.styledComponentId;
	  };
	
	  if (isCompositeComponent) {
	    hoist(WrappedStyledComponent, target, {
	      // all SC-specific things should not be hoisted
	      attrs: true,
	      componentStyle: true,
	      displayName: true,
	      foldedComponentIds: true,
	      shouldForwardProp: true,
	      self: true,
	      styledComponentId: true,
	      target: true,
	      withComponent: true
	    });
	  }
	
	  return WrappedStyledComponent;
	}
	
	// 
	// Thanks to ReactDOMFactories for this handy list!
	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	
	// 
	
	var styled = function styled(tag) {
	  return constructWithOptions(createStyledComponent, tag);
	}; // Shorthands for all valid HTML Elements
	
	
	domElements.forEach(function (domElement) {
	  styled[domElement] = styled(domElement);
	});
	
	// 
	
	var GlobalStyle = /*#__PURE__*/function () {
	  function GlobalStyle(rules, componentId) {
	    this.rules = rules;
	    this.componentId = componentId;
	    this.isStatic = isStaticRules(rules);
	  }
	
	  var _proto = GlobalStyle.prototype;
	
	  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
	    var flatCSS = flatten(this.rules, executionContext, styleSheet);
	    var css = stylis(flatCSS.join(''), '');
	    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change
	
	    styleSheet.insertRules(id, id, css);
	  };
	
	  _proto.removeStyles = function removeStyles(instance, styleSheet) {
	    styleSheet.clearRules(this.componentId + instance);
	  };
	
	  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
	    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones
	
	    this.removeStyles(instance, styleSheet);
	    this.createStyles(instance, executionContext, styleSheet, stylis);
	  };
	
	  return GlobalStyle;
	}();
	
	function createGlobalStyle(strings) {
	  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  var rules = css.apply(void 0, [strings].concat(interpolations));
	  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
	  var globalStyle = new GlobalStyle(rules, styledComponentId);
	
	  if (false) {
	    checkDynamicCreation(styledComponentId);
	  }
	
	  function GlobalStyleComponent(props) {
	    var styleSheet = useStyleSheet();
	    var stylis = useStylis();
	    var theme = React.useContext(ThemeContext);
	    var instanceRef = React.useRef(null);
	
	    if (instanceRef.current === null) {
	      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
	    }
	
	    var instance = instanceRef.current;
	
	    if (false) {
	      // eslint-disable-next-line no-console
	      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
	    }
	
	    if (false) {
	      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
	    }
	
	    if (globalStyle.isStatic) {
	      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
	    } else {
	      var context = _extends({}, props, {
	        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
	      });
	
	      globalStyle.renderStyles(instance, context, styleSheet, stylis);
	    }
	
	    React.useEffect(function () {
	      return function () {
	        return globalStyle.removeStyles(instance, styleSheet);
	      };
	    }, EMPTY_ARRAY);
	    return null;
	  } // $FlowFixMe
	
	
	  return React__default.memo(GlobalStyleComponent);
	}
	
	// 
	function keyframes(strings) {
	  /* Warning if you've used keyframes on React Native */
	  if (false) {
	    // eslint-disable-next-line no-console
	    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
	  }
	
	  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
	  var name = generateComponentId(rules);
	  return new Keyframes(name, [rules, name, '@keyframes']);
	}
	
	var ServerStyleSheet = /*#__PURE__*/function () {
	  function ServerStyleSheet() {
	    var _this = this;
	
	    this._emitSheetCSS = function () {
	      var css = _this.instance.toString();
	
	      var nonce = getNonce();
	      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
	      var htmlAttr = attrs.filter(Boolean).join(' ');
	      return "<style " + htmlAttr + ">" + css + "</style>";
	    };
	
	    this.getStyleTags = function () {
	      if (_this.sealed) {
	        return throwStyledComponentsError(2);
	      }
	
	      return _this._emitSheetCSS();
	    };
	
	    this.getStyleElement = function () {
	      var _props;
	
	      if (_this.sealed) {
	        return throwStyledComponentsError(2);
	      }
	
	      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
	        __html: _this.instance.toString()
	      }, _props);
	      var nonce = getNonce();
	
	      if (nonce) {
	        props.nonce = nonce;
	      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat
	
	
	      return [/*#__PURE__*/React__default.createElement("style", _extends({}, props, {
	        key: "sc-0-0"
	      }))];
	    };
	
	    this.seal = function () {
	      _this.sealed = true;
	    };
	
	    this.instance = new StyleSheet({
	      isServer: true
	    });
	    this.sealed = false;
	  }
	
	  var _proto = ServerStyleSheet.prototype;
	
	  _proto.collectStyles = function collectStyles(children) {
	    if (this.sealed) {
	      return throwStyledComponentsError(2);
	    }
	
	    return /*#__PURE__*/React__default.createElement(StyleSheetManager, {
	      sheet: this.instance
	    }, children);
	  };
	
	  // eslint-disable-next-line consistent-return
	  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
	    {
	      return throwStyledComponentsError(3);
	    }
	  };
	
	  return ServerStyleSheet;
	}();
	
	// export default <Config: { theme?: any }, Instance>(
	//  Component: AbstractComponent<Config, Instance>
	// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
	//
	// but the old build system tooling doesn't support the syntax
	
	var withTheme = (function (Component) {
	  // $FlowFixMe This should be React.forwardRef<Config, Instance>
	  var WithTheme = React__default.forwardRef(function (props, ref) {
	    var theme = React.useContext(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable
	
	    var defaultProps = Component.defaultProps;
	    var themeProp = determineTheme(props, theme, defaultProps);
	
	    if (false) {
	      // eslint-disable-next-line no-console
	      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
	    }
	
	    return /*#__PURE__*/React__default.createElement(Component, _extends({}, props, {
	      theme: themeProp,
	      ref: ref
	    }));
	  });
	  hoist(WithTheme, Component);
	  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
	  return WithTheme;
	});
	
	// 
	
	var useTheme = function useTheme() {
	  return React.useContext(ThemeContext);
	};
	
	// 
	var __PRIVATE__ = {
	  StyleSheet: StyleSheet,
	  masterSheet: masterSheet
	};
	
	// 
	/* Define bundle version for export */
	
	var version = "5.1.0";
	/* Warning if you've imported this file on React Native */
	
	if (false) {
	  // eslint-disable-next-line no-console
	  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
	}
	/* Warning if there are several instances of styled-components */
	
	
	if (false) {
	  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;
	
	  if (window['__styled-components-init__'] === 1) {
	    // eslint-disable-next-line no-console
	    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
	  }
	
	  window['__styled-components-init__'] += 1;
	}
	
	exports.ServerStyleSheet = ServerStyleSheet;
	exports.StyleSheetConsumer = StyleSheetConsumer;
	exports.StyleSheetContext = StyleSheetContext;
	exports.StyleSheetManager = StyleSheetManager;
	exports.ThemeConsumer = ThemeConsumer;
	exports.ThemeContext = ThemeContext;
	exports.ThemeProvider = ThemeProvider;
	exports.__PRIVATE__ = __PRIVATE__;
	exports.createGlobalStyle = createGlobalStyle;
	exports.css = css;
	exports.default = styled;
	exports.isStyledComponent = isStyledComponent;
	exports.keyframes = keyframes;
	exports.useTheme = useTheme;
	exports.version = version;
	exports.withTheme = withTheme;
	//# sourceMappingURL=styled-components.browser.cjs.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),
/* 434 */,
/* 435 */,
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Container_1 = __webpack_require__(164);
	exports.Container = Container_1.Container;


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Options_1 = __webpack_require__(176);
	exports.Options = Options_1.Options;


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Constants_1 = __webpack_require__(10);
	var CanvasUtils_1 = __webpack_require__(528);
	var ColorUtils_1 = __webpack_require__(15);
	var Canvas = (function () {
	    function Canvas(container) {
	        this.container = container;
	        this.size = {
	            height: 0,
	            width: 0,
	        };
	        this.context = null;
	        this.generatedCanvas = false;
	    }
	    Canvas.prototype.init = function () {
	        this.resize();
	        var container = this.container;
	        var options = container.options;
	        var cover = options.backgroundMask.cover;
	        var color = cover.color;
	        var trail = options.particles.move.trail;
	        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(color);
	        this.trailFillColor = ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
	        this.paint();
	    };
	    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
	        var _a;
	        if (!canvas.className) {
	            canvas.className = Constants_1.Constants.canvasClass;
	        }
	        if (this.generatedCanvas) {
	            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
	        }
	        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
	        this.element = canvas;
	        this.size.height = canvas.offsetHeight;
	        this.size.width = canvas.offsetWidth;
	        this.context = this.element.getContext("2d");
	        this.container.retina.init();
	        this.initBackground();
	    };
	    Canvas.prototype.destroy = function () {
	        var _a;
	        if (this.generatedCanvas) {
	            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
	        }
	        if (this.context) {
	            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
	        }
	    };
	    Canvas.prototype.resize = function () {
	        if (this.element) {
	            this.element.width = this.size.width;
	            this.element.height = this.size.height;
	        }
	    };
	    Canvas.prototype.paint = function () {
	        var container = this.container;
	        var options = container.options;
	        if (this.context) {
	            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
	                this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
	            }
	            else {
	                this.paintBase();
	            }
	        }
	    };
	    Canvas.prototype.clear = function () {
	        var container = this.container;
	        var options = container.options;
	        var trail = options.particles.move.trail;
	        if (options.backgroundMask.enable) {
	            this.paint();
	        }
	        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
	            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
	        }
	        else if (this.context) {
	            CanvasUtils_1.CanvasUtils.clear(this.context, this.size);
	        }
	    };
	    Canvas.prototype.isPointInPath = function (path, point) {
	        var _a, _b;
	        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
	    };
	    Canvas.prototype.drawLinkedLine = function (p1, link) {
	        var _a;
	        var container = this.container;
	        var options = container.options;
	        var p2 = link.destination;
	        var opacity = link.opacity;
	        var pos1 = p1.getPosition();
	        var pos2 = p2.getPosition();
	        var ctx = this.context;
	        if (!ctx) {
	            return;
	        }
	        var colorLine;
	        var twinkle = p1.particlesOptions.twinkle.lines;
	        if (twinkle.enable) {
	            var twinkleFreq = twinkle.frequency;
	            var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
	            var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
	            var twinkling = Math.random() < twinkleFreq;
	            if (twinkling && twinkleRgb !== undefined) {
	                colorLine = twinkleRgb;
	                opacity = twinkle.opacity;
	            }
	        }
	        if (!colorLine) {
	            if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
	                colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
	            }
	            else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
	                var sourceColor = p1.color;
	                var destColor = p2.color;
	                colorLine = ColorUtils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
	            }
	            else {
	                colorLine = container.particles.lineLinkedColor;
	            }
	        }
	        var width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
	        CanvasUtils_1.CanvasUtils.drawLinkedLine(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
	    };
	    Canvas.prototype.drawConnectLine = function (p1, p2) {
	        var _a;
	        var lineStyle = this.lineStyle(p1, p2);
	        if (!lineStyle) {
	            return;
	        }
	        var ctx = this.context;
	        if (!ctx) {
	            return;
	        }
	        var pos1 = p1.getPosition();
	        var pos2 = p2.getPosition();
	        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, pos1, pos2);
	    };
	    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
	        var _a;
	        var container = this.container;
	        var optColor = particle.particlesOptions.lineLinked.color;
	        var lineColor = container.particles.grabLineColor ||
	            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
	        if (lineColor == Constants_1.Constants.randomColorValue) {
	            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
	        }
	        container.particles.grabLineColor = lineColor;
	        var ctx = container.canvas.context;
	        if (!ctx) {
	            return;
	        }
	        var colorLine;
	        if (container.particles.grabLineColor === Constants_1.Constants.randomColorValue) {
	            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
	        }
	        else {
	            colorLine = container.particles.grabLineColor;
	        }
	        if (colorLine === undefined) {
	            return;
	        }
	        var beginPos = particle.getPosition();
	        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
	    };
	    Canvas.prototype.drawParticle = function (particle, delta) {
	        var _a, _b, _c;
	        var container = this.container;
	        var options = container.options;
	        var twinkle = particle.particlesOptions.twinkle.particles;
	        var twinkleFreq = twinkle.frequency;
	        var twinkleColor = typeof twinkle.color === "string" ? { value: twinkle.color } : twinkle.color;
	        var twinkleRgb = twinkleColor !== undefined ? ColorUtils_1.ColorUtils.colorToRgb(twinkleColor) : undefined;
	        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
	        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
	        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
	        var infectionStage = particle.infectionStage;
	        var infection = options.infection;
	        var infectionStages = infection.stages;
	        var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
	        var infectionRgb = infectionColor ? ColorUtils_1.ColorUtils.colorToRgb(infectionColor) : undefined;
	        var color = twinkling && twinkleRgb !== undefined ?
	            twinkleRgb : (_c = infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : particle.bubble.color) !== null && _c !== void 0 ? _c : particle.color;
	        var colorValue = color !== undefined ? ColorUtils_1.ColorUtils.getStyleFromColor(color, opacity) : undefined;
	        if (!this.context || !colorValue) {
	            return;
	        }
	        this.context.save();
	        for (var _i = 0, _d = particle.links; _i < _d.length; _i++) {
	            var link = _d[_i];
	            this.drawLinkedLine(particle, link);
	        }
	        this.context.restore();
	        CanvasUtils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
	    };
	    Canvas.prototype.drawPlugin = function (plugin, delta) {
	        if (!this.context) {
	            return;
	        }
	        CanvasUtils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
	    };
	    Canvas.prototype.paintBase = function (baseColor) {
	        if (this.context) {
	            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
	        }
	    };
	    Canvas.prototype.lineStyle = function (p1, p2) {
	        var container = this.container;
	        var options = container.options;
	        var connectOptions = options.interactivity.modes.connect;
	        if (p1.color && p2.color) {
	            if (this.context) {
	                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.lineLinked.opacity);
	            }
	        }
	    };
	    Canvas.prototype.initBackground = function () {
	        var container = this.container;
	        var options = container.options;
	        var background = options.background;
	        var element = this.element;
	        if (!element) {
	            return;
	        }
	        var elementStyle = element.style;
	        if (background.color) {
	            var color = ColorUtils_1.ColorUtils.colorToRgb(background.color);
	            if (color) {
	                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
	            }
	        }
	        if (background.image) {
	            elementStyle.backgroundImage = background.image;
	        }
	        if (background.position) {
	            elementStyle.backgroundPosition = background.position;
	        }
	        if (background.repeat) {
	            elementStyle.backgroundRepeat = background.repeat;
	        }
	        if (background.size) {
	            elementStyle.backgroundSize = background.size;
	        }
	    };
	    return Canvas;
	}());
	exports.Canvas = Canvas;


/***/ }),
/* 439 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var FrameManager = (function () {
	    function FrameManager(container) {
	        this.container = container;
	    }
	    FrameManager.prototype.nextFrame = function (timestamp) {
	        var container = this.container;
	        var options = container.options;
	        var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;
	        if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + (1000 / fpsLimit)) {
	            container.draw();
	            return;
	        }
	        var delta = timestamp - container.lastFrameTime;
	        container.lastFrameTime = timestamp;
	        container.particles.draw(delta);
	        if (options.particles.move.enable && container.getAnimationStatus()) {
	            container.draw();
	        }
	    };
	    return FrameManager;
	}());
	exports.FrameManager = FrameManager;


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Container_1 = __webpack_require__(164);
	var Constants_1 = __webpack_require__(10);
	var Utils_1 = __webpack_require__(2);
	var tsParticlesDom = [];
	var Loader = (function () {
	    function Loader() {
	    }
	    Loader.dom = function () {
	        if (!tsParticlesDom) {
	            tsParticlesDom = [];
	        }
	        return tsParticlesDom;
	    };
	    Loader.domItem = function (index) {
	        var dom = Loader.dom();
	        var item = dom[index];
	        if (item && !item.destroyed) {
	            return item;
	        }
	        dom.splice(index, 1);
	    };
	    Loader.loadFromArray = function (tagId, params, index) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
	            });
	        });
	    };
	    Loader.setFromArray = function (id, domContainer, params, index) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
	            });
	        });
	    };
	    Loader.load = function (tagId, params) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var domContainer;
	            return tslib_1.__generator(this, function (_a) {
	                domContainer = document.getElementById(tagId);
	                if (!domContainer) {
	                    return [2];
	                }
	                return [2, this.set(tagId, domContainer, params)];
	            });
	        });
	    };
	    Loader.set = function (id, domContainer, params) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        dom = Loader.dom();
	                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
	                        if (oldIndex >= 0) {
	                            old = this.domItem(oldIndex);
	                            if (old && !old.destroyed) {
	                                old.destroy();
	                                dom.splice(oldIndex, 1);
	                            }
	                        }
	                        if (domContainer.tagName === "canvas") {
	                            canvasEl = domContainer;
	                            generatedCanvas = false;
	                        }
	                        else {
	                            existingCanvases = domContainer.getElementsByTagName("canvas");
	                            if (existingCanvases.length) {
	                                canvasEl = existingCanvases[0];
	                                if (!canvasEl.className) {
	                                    canvasEl.className = Constants_1.Constants.canvasClass;
	                                }
	                                generatedCanvas = false;
	                            }
	                            else {
	                                generatedCanvas = true;
	                                canvasEl = document.createElement("canvas");
	                                canvasEl.className = Constants_1.Constants.canvasClass;
	                                canvasEl.style.width = "100%";
	                                canvasEl.style.height = "100%";
	                                domContainer.appendChild(canvasEl);
	                            }
	                        }
	                        newItem = new Container_1.Container(id, params);
	                        if (oldIndex >= 0) {
	                            dom.splice(oldIndex, 0, newItem);
	                        }
	                        else {
	                            dom.push(newItem);
	                        }
	                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
	                        return [4, newItem.start()];
	                    case 1:
	                        _a.sent();
	                        return [2, newItem];
	                }
	            });
	        });
	    };
	    Loader.loadJSON = function (tagId, jsonUrl) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var response, params;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, fetch(jsonUrl)];
	                    case 1:
	                        response = _a.sent();
	                        if (!response.ok) return [3, 3];
	                        return [4, response.json()];
	                    case 2:
	                        params = _a.sent();
	                        if (params instanceof Array) {
	                            return [2, Loader.loadFromArray(tagId, params)];
	                        }
	                        else {
	                            return [2, Loader.load(tagId, params)];
	                        }
	                        return [3, 4];
	                    case 3:
	                        console.error("Error tsParticles - fetch status: " + response.status);
	                        console.error("Error tsParticles - File config not found");
	                        _a.label = 4;
	                    case 4: return [2];
	                }
	            });
	        });
	    };
	    ;
	    Loader.setJSON = function (id, domContainer, jsonUrl) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var response, params;
	            return tslib_1.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, fetch(jsonUrl)];
	                    case 1:
	                        response = _a.sent();
	                        if (!response.ok) return [3, 3];
	                        return [4, response.json()];
	                    case 2:
	                        params = _a.sent();
	                        if (params instanceof Array) {
	                            return [2, Loader.setFromArray(id, domContainer, params)];
	                        }
	                        else {
	                            return [2, Loader.set(id, domContainer, params)];
	                        }
	                        return [3, 4];
	                    case 3:
	                        console.error("Error tsParticles - fetch status: " + response.status);
	                        console.error("Error tsParticles - File config not found");
	                        _a.label = 4;
	                    case 4: return [2];
	                }
	            });
	        });
	    };
	    ;
	    Loader.setOnClickHandler = function (callback) {
	        var dom = Loader.dom();
	        if (dom.length === 0) {
	            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
	        }
	        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
	            var domItem = dom_1[_i];
	            var el = domItem.interactivity.element;
	            if (el) {
	                el.addEventListener("click", callback);
	            }
	        }
	    };
	    return Loader;
	}());
	exports.Loader = Loader;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ProcessBubbleType_1 = __webpack_require__(169);
	var Utils_1 = __webpack_require__(2);
	var HoverMode_1 = __webpack_require__(30);
	var ClickMode_1 = __webpack_require__(9);
	var Constants_1 = __webpack_require__(10);
	var ColorUtils_1 = __webpack_require__(15);
	var Circle_1 = __webpack_require__(14);
	var Bubbler = (function () {
	    function Bubbler() {
	    }
	    Bubbler.reset = function (particle) {
	        delete particle.bubble.opacity;
	        delete particle.bubble.radius;
	        delete particle.bubble.color;
	    };
	    Bubbler.bubble = function (container, _delta) {
	        var options = container.options;
	        var events = options.interactivity.events;
	        var onHover = events.onHover;
	        var onClick = events.onClick;
	        var hoverEnabled = onHover.enable;
	        var hoverMode = onHover.mode;
	        var clickEnabled = onClick.enable;
	        var clickMode = onClick.mode;
	        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
	            this.hoverBubble(container);
	        }
	        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
	            this.clickBubble(container);
	        }
	    };
	    Bubbler.process = function (container, particle, distMouse, timeSpent, data) {
	        var bubbleParam = data.bubbleObj.optValue;
	        if (bubbleParam === undefined) {
	            return;
	        }
	        var options = container.options;
	        var bubbleDuration = options.interactivity.modes.bubble.duration;
	        var bubbleDistance = container.retina.bubbleModeDistance;
	        var particlesParam = data.particlesObj.optValue;
	        var pObjBubble = data.bubbleObj.value;
	        var pObj = data.particlesObj.value || 0;
	        var type = data.type;
	        if (bubbleParam !== particlesParam) {
	            if (!container.bubble.durationEnd) {
	                if (distMouse <= bubbleDistance) {
	                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
	                    if (obj !== bubbleParam) {
	                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
	                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
	                            particle.bubble.radius = value;
	                        }
	                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
	                            particle.bubble.opacity = value;
	                        }
	                    }
	                }
	                else {
	                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
	                        delete particle.bubble.radius;
	                    }
	                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
	                        delete particle.bubble.opacity;
	                    }
	                }
	            }
	            else if (pObjBubble) {
	                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
	                    delete particle.bubble.radius;
	                }
	                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
	                    delete particle.bubble.opacity;
	                }
	            }
	        }
	    };
	    Bubbler.clickBubble = function (container) {
	        var _a;
	        var options = container.options;
	        var mouseClickPos = container.interactivity.mouse.clickPosition;
	        if (mouseClickPos === undefined) {
	            return;
	        }
	        var distance = container.retina.bubbleModeDistance;
	        var query = container.particles.quadTree.query(new Circle_1.Circle(mouseClickPos.x, mouseClickPos.y, distance));
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var particle = query_1[_i];
	            var pos = particle.getPosition();
	            var distMouse = Utils_1.Utils.getDistance(pos, mouseClickPos);
	            var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
	            if (container.bubble.clicking) {
	                if (timeSpent > options.interactivity.modes.bubble.duration) {
	                    container.bubble.durationEnd = true;
	                }
	                if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
	                    container.bubble.clicking = false;
	                    container.bubble.durationEnd = false;
	                }
	                var sizeData = {
	                    bubbleObj: {
	                        optValue: container.retina.bubbleModeSize,
	                        value: particle.bubble.radius,
	                    },
	                    particlesObj: {
	                        optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
	                        value: particle.size.value,
	                    },
	                    type: ProcessBubbleType_1.ProcessBubbleType.size,
	                };
	                this.process(container, particle, distMouse, timeSpent, sizeData);
	                var opacityData = {
	                    bubbleObj: {
	                        optValue: options.interactivity.modes.bubble.opacity,
	                        value: particle.bubble.opacity,
	                    },
	                    particlesObj: {
	                        optValue: particle.particlesOptions.opacity.value,
	                        value: particle.opacity.value,
	                    },
	                    type: ProcessBubbleType_1.ProcessBubbleType.opacity,
	                };
	                this.process(container, particle, distMouse, timeSpent, opacityData);
	                if (!container.bubble.durationEnd) {
	                    if (distMouse <= container.retina.bubbleModeDistance) {
	                        this.hoverBubbleColor(container, particle);
	                    }
	                    else {
	                        delete particle.bubble.color;
	                    }
	                }
	                else {
	                    delete particle.bubble.color;
	                }
	            }
	        }
	    };
	    Bubbler.hoverBubble = function (container) {
	        var mousePos = container.interactivity.mouse.position;
	        if (mousePos === undefined) {
	            return;
	        }
	        var distance = container.retina.bubbleModeDistance;
	        var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
	        for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
	            var particle = query_2[_i];
	            var pos = particle.getPosition();
	            var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
	            var ratio = 1 - distance_1 / container.retina.bubbleModeDistance;
	            if (distance_1 <= container.retina.bubbleModeDistance) {
	                if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
	                    this.hoverBubbleSize(container, particle, ratio);
	                    this.hoverBubbleOpacity(container, particle, ratio);
	                    this.hoverBubbleColor(container, particle);
	                }
	            }
	            else {
	                this.reset(particle);
	            }
	            if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
	                this.reset(particle);
	            }
	        }
	    };
	    Bubbler.hoverBubbleSize = function (container, particle, ratio) {
	        var _a;
	        var modeSize = container.retina.bubbleModeSize;
	        if (modeSize === undefined) {
	            return;
	        }
	        var optSize = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
	        var pSize = particle.size.value;
	        var size = this.calculateBubbleValue(pSize, modeSize, optSize, ratio);
	        if (size !== undefined) {
	            particle.bubble.radius = size;
	        }
	    };
	    Bubbler.hoverBubbleOpacity = function (container, particle, ratio) {
	        var options = container.options;
	        var modeOpacity = options.interactivity.modes.bubble.opacity;
	        if (modeOpacity === undefined) {
	            return;
	        }
	        var optOpacity = particle.particlesOptions.opacity.value;
	        var pOpacity = particle.opacity.value;
	        var opacity = this.calculateBubbleValue(pOpacity, modeOpacity, optOpacity, ratio);
	        if (opacity !== undefined) {
	            particle.bubble.opacity = opacity;
	        }
	    };
	    Bubbler.calculateBubbleValue = function (particleValue, modeValue, optionsValue, ratio) {
	        if (modeValue > optionsValue) {
	            var size = particleValue + (modeValue - optionsValue) * ratio;
	            return Utils_1.Utils.clamp(size, particleValue, modeValue);
	        }
	        else if (modeValue < optionsValue) {
	            var size = particleValue - (optionsValue - modeValue) * ratio;
	            return Utils_1.Utils.clamp(size, modeValue, particleValue);
	        }
	    };
	    Bubbler.hoverBubbleColor = function (container, particle) {
	        var options = container.options;
	        if (particle.bubble.color === undefined) {
	            var modeColor = options.interactivity.modes.bubble.color;
	            if (modeColor === undefined) {
	                return;
	            }
	            particle.bubble.color = ColorUtils_1.ColorUtils.colorToRgb(modeColor instanceof Array ?
	                Utils_1.Utils.itemFromArray(modeColor) :
	                modeColor);
	        }
	    };
	    return Bubbler;
	}());
	exports.Bubbler = Bubbler;


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Circle_1 = __webpack_require__(14);
	var Connector = (function () {
	    function Connector() {
	    }
	    Connector.connect = function (container, _delta) {
	        var options = container.options;
	        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
	            var mousePos = container.interactivity.mouse.position;
	            if (!mousePos) {
	                return;
	            }
	            var distance = Math.abs(container.retina.connectModeRadius);
	            var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
	            var i = 0;
	            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	                var p1 = query_1[_i];
	                var pos1 = p1.getPosition();
	                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
	                    var p2 = _b[_a];
	                    var pos2 = p2.getPosition();
	                    var distMax = Math.abs(container.retina.connectModeDistance);
	                    var xDiff = Math.abs(pos1.x - pos2.x);
	                    var yDiff = Math.abs(pos1.y - pos2.y);
	                    if (xDiff < distMax && yDiff < distMax) {
	                        container.canvas.drawConnectLine(p1, p2);
	                    }
	                }
	                ++i;
	            }
	        }
	    };
	    return Connector;
	}());
	exports.Connector = Connector;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Constants_1 = __webpack_require__(10);
	var Utils_1 = __webpack_require__(2);
	var Circle_1 = __webpack_require__(14);
	var Grabber = (function () {
	    function Grabber() {
	    }
	    Grabber.grab = function (container, _delta) {
	        var options = container.options;
	        var interactivity = options.interactivity;
	        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
	            var mousePos = container.interactivity.mouse.position;
	            if (mousePos === undefined) {
	                return;
	            }
	            var distance = container.retina.grabModeDistance;
	            var query = container.particles.quadTree.query(new Circle_1.Circle(mousePos.x, mousePos.y, distance));
	            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	                var particle = query_1[_i];
	                var pos = particle.getPosition();
	                var distance_1 = Utils_1.Utils.getDistance(pos, mousePos);
	                if (distance_1 <= container.retina.grabModeDistance) {
	                    var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
	                    var grabDistance = container.retina.grabModeDistance;
	                    var opacityLine = lineOpacity - (distance_1 * lineOpacity) / grabDistance;
	                    if (opacityLine > 0) {
	                        container.canvas.drawGrabLine(particle, opacityLine, mousePos);
	                    }
	                }
	            }
	        }
	    };
	    return Grabber;
	}());
	exports.Grabber = Grabber;


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClickMode_1 = __webpack_require__(9);
	var HoverMode_1 = __webpack_require__(30);
	var OutMode_1 = __webpack_require__(61);
	var Utils_1 = __webpack_require__(2);
	var DivMode_1 = __webpack_require__(107);
	var Constants_1 = __webpack_require__(10);
	var Circle_1 = __webpack_require__(14);
	var Repulser = (function () {
	    function Repulser() {
	    }
	    Repulser.repulse = function (container, _delta) {
	        var options = container.options;
	        var interactivity = options.interactivity;
	        var hoverEnabled = interactivity.events.onHover.enable;
	        var clickEnabled = interactivity.events.onClick.enable;
	        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
	        var hoverMode = interactivity.events.onHover.mode;
	        var clickMode = interactivity.events.onClick.mode;
	        var divMode = interactivity.events.onDiv.mode;
	        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
	            this.hoverRepulse(container);
	        }
	        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
	            this.clickRepulse(container);
	        }
	        else if (interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
	            this.divRepulse(container);
	        }
	    };
	    Repulser.divRepulse = function (container) {
	        var options = container.options;
	        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
	        if (!elem) {
	            return;
	        }
	        var pos = {
	            x: (elem.offsetLeft + elem.offsetWidth / 2),
	            y: (elem.offsetTop + elem.offsetHeight / 2),
	        };
	        var divWidth = elem.offsetWidth / 2;
	        if (container.retina.isRetina) {
	            pos.x *= container.retina.pixelRatio;
	            pos.y *= container.retina.pixelRatio;
	            divWidth *= container.retina.pixelRatio;
	        }
	        var repulseRadius = divWidth;
	        this.processRepulse(container, pos, repulseRadius);
	    };
	    Repulser.hoverRepulse = function (container) {
	        var mousePos = container.interactivity.mouse.position;
	        if (!mousePos) {
	            return;
	        }
	        var repulseRadius = container.retina.repulseModeDistance;
	        this.processRepulse(container, mousePos, repulseRadius);
	    };
	    Repulser.processRepulse = function (container, position, repulseRadius) {
	        var query = container.particles.quadTree.query(new Circle_1.Circle(position.x, position.y, repulseRadius));
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var particle = query_1[_i];
	            var dx = particle.position.x - position.x;
	            var dy = particle.position.y - position.y;
	            var dist = Math.sqrt(dx * dx + dy * dy);
	            var normVec = {
	                x: dx / dist,
	                y: dy / dist,
	            };
	            var velocity = container.options.interactivity.modes.repulse.speed * 100;
	            var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(dist / repulseRadius, 2)) * velocity, 0, 50);
	            var outMode = particle.particlesOptions.move.outMode;
	            var sizeValue = particle.size.value;
	            var pos = {
	                x: particle.position.x + normVec.x * repulseFactor,
	                y: particle.position.y + normVec.y * repulseFactor,
	            };
	            if (outMode === OutMode_1.OutMode.bounce ||
	                outMode === OutMode_1.OutMode.bounceVertical ||
	                outMode === OutMode_1.OutMode.bounceHorizontal) {
	                var isInside = {
	                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
	                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
	                };
	                if (outMode === OutMode_1.OutMode.bounceVertical || isInside.horizontal) {
	                    particle.position.x = pos.x;
	                }
	                if (outMode === OutMode_1.OutMode.bounceHorizontal || isInside.vertical) {
	                    particle.position.y = pos.y;
	                }
	            }
	            else {
	                particle.position.x = pos.x;
	                particle.position.y = pos.y;
	            }
	        }
	    };
	    Repulser.clickRepulse = function (container) {
	        if (!container.repulse.finish) {
	            if (!container.repulse.count) {
	                container.repulse.count = 0;
	            }
	            container.repulse.count++;
	            if (container.repulse.count === container.particles.count) {
	                container.repulse.finish = true;
	            }
	        }
	        if (container.repulse.clicking) {
	            var repulseDistance = container.retina.repulseModeDistance;
	            var repulseRadius = Math.pow(repulseDistance / 6, 3);
	            var mouseClickPos = container.interactivity.mouse.clickPosition;
	            if (mouseClickPos === undefined) {
	                return;
	            }
	            var range = new Circle_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
	            var query = container.particles.quadTree.query(range);
	            for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
	                var particle = query_2[_i];
	                if ((particle === null || particle === void 0 ? void 0 : particle.position) === undefined) {
	                    continue;
	                }
	                var dx = mouseClickPos.x - particle.position.x;
	                var dy = mouseClickPos.y - particle.position.y;
	                var d = dx * dx + dy * dy;
	                var velocity = container.options.interactivity.modes.repulse.speed;
	                var force = -repulseRadius * velocity / d;
	                if (d <= repulseRadius) {
	                    container.repulse.particles.push(particle);
	                    this.processClickRepulse(container, particle, dx, dy, force);
	                }
	            }
	        }
	        else if (container.repulse.clicking === false) {
	            for (var _a = 0, _b = container.repulse.particles; _a < _b.length; _a++) {
	                var particle = _b[_a];
	                particle.velocity.horizontal = particle.initialVelocity.horizontal;
	                particle.velocity.vertical = particle.initialVelocity.vertical;
	            }
	            container.repulse.particles = [];
	        }
	    };
	    Repulser.processClickRepulse = function (container, particle, dx, dy, force) {
	        var options = container.options;
	        var f = Math.atan2(dy, dx);
	        particle.velocity.horizontal = force * Math.cos(f);
	        particle.velocity.vertical = force * Math.sin(f);
	        var outMode = options.particles.move.outMode;
	        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal || outMode === OutMode_1.OutMode.bounceVertical) {
	            var pos = {
	                x: particle.position.x + particle.velocity.horizontal,
	                y: particle.position.y + particle.velocity.vertical,
	            };
	            if (outMode !== OutMode_1.OutMode.bounceVertical) {
	                if (pos.x + particle.size.value > container.canvas.size.width ||
	                    pos.x - particle.size.value < 0) {
	                    particle.velocity.horizontal = -particle.velocity.horizontal;
	                }
	            }
	            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
	                if (pos.y + particle.size.value > container.canvas.size.height ||
	                    pos.y - particle.size.value < 0) {
	                    particle.velocity.vertical = -particle.velocity.vertical;
	                }
	            }
	        }
	    };
	    return Repulser;
	}());
	exports.Repulser = Repulser;


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Circle_1 = __webpack_require__(14);
	var Attractor = (function () {
	    function Attractor() {
	    }
	    Attractor.attract = function (p1, container, _delta) {
	        var _a;
	        var options = container.options;
	        var distance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
	        var pos1 = p1.getPosition();
	        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, distance));
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var p2 = query_1[_i];
	            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
	                continue;
	            }
	            var pos2 = p2.getPosition();
	            var dx = pos1.x - pos2.x;
	            var dy = pos1.y - pos2.y;
	            var rotate = options.particles.move.attract.rotate;
	            var ax = dx / (rotate.x * 1000);
	            var ay = dy / (rotate.y * 1000);
	            p1.velocity.horizontal -= ax;
	            p1.velocity.vertical -= ay;
	            p2.velocity.horizontal += ax;
	            p2.velocity.vertical += ay;
	        }
	    };
	    return Attractor;
	}());
	exports.Attractor = Attractor;


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Utils_1 = __webpack_require__(2);
	var CollisionMode_1 = __webpack_require__(165);
	var Circle_1 = __webpack_require__(14);
	var Collider = (function () {
	    function Collider() {
	    }
	    Collider.collide = function (p1, container, _delta) {
	        var pos1 = p1.getPosition();
	        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, p1.size.value * 2));
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var p2 = query_1[_i];
	            if (p1 === p2 || !p2.particlesOptions.collisions.enable ||
	                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
	                continue;
	            }
	            var pos2 = p2.getPosition();
	            var dist = Utils_1.Utils.getDistance(pos1, pos2);
	            var defaultSize = container.retina.sizeValue;
	            var radius1 = this.getRadius(p1, defaultSize);
	            var radius2 = this.getRadius(p2, defaultSize);
	            var distP = radius1 + radius2;
	            if (dist <= distP) {
	                this.resolveCollision(p1, p2);
	            }
	        }
	    };
	    Collider.getRadius = function (particle, fallback) {
	        return particle.bubble.radius || particle.size.value || fallback;
	    };
	    Collider.resolveCollision = function (p1, p2) {
	        var pos1 = p1.getPosition();
	        var pos2 = p2.getPosition();
	        switch (p1.particlesOptions.collisions.mode) {
	            case CollisionMode_1.CollisionMode.bounce:
	                var xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
	                var yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
	                var xDist = pos2.x - pos1.x;
	                var yDist = pos2.y - pos1.y;
	                if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
	                    var angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
	                    var m1 = p1.size.value;
	                    var m2 = p2.size.value;
	                    var u1 = this.rotate(p1.velocity, angle);
	                    var u2 = this.rotate(p2.velocity, angle);
	                    var v1 = {
	                        horizontal: u1.horizontal * (m1 - m2) / (m1 + m2) + u2.horizontal * 2 * m2 / (m1 + m2),
	                        vertical: u1.vertical,
	                    };
	                    var v2 = {
	                        horizontal: u2.horizontal * (m1 - m2) / (m1 + m2) + u1.horizontal * 2 * m2 / (m1 + m2),
	                        vertical: u2.vertical,
	                    };
	                    var vFinal1 = this.rotate(v1, -angle);
	                    var vFinal2 = this.rotate(v2, -angle);
	                    p1.velocity.horizontal = vFinal1.horizontal;
	                    p1.velocity.vertical = vFinal1.vertical;
	                    p2.velocity.horizontal = vFinal2.horizontal;
	                    p2.velocity.vertical = vFinal2.vertical;
	                }
	        }
	    };
	    Collider.rotate = function (velocity, angle) {
	        return {
	            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
	            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
	        };
	    };
	    return Collider;
	}());
	exports.Collider = Collider;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Circle_1 = __webpack_require__(14);
	var Infecter = (function () {
	    function Infecter() {
	    }
	    Infecter.infect = function (p1, container, delta) {
	        var _a, _b;
	        p1.updateInfection(delta);
	        if (p1.infectionStage === undefined) {
	            return;
	        }
	        var options = container.options;
	        var infectionOptions = options.infection;
	        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
	            return;
	        }
	        var infectionStage1 = infectionOptions.stages[p1.infectionStage];
	        var pxRatio = container.retina.pixelRatio;
	        var radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
	        var pos = p1.getPosition();
	        var infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : p1.infectionStage;
	        var query = container.particles.quadTree.query(new Circle_1.Circle(pos.x, pos.y, radius))
	            .filter(function (t) { return t.infectionStage === undefined || t.infectionStage !== p1.infectionStage; });
	        var infections = infectionStage1.rate;
	        var neighbors = query.length;
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var p2 = query_1[_i];
	            if (Math.random() < infections / neighbors) {
	                if (p2.infectionStage === undefined) {
	                    p2.startInfection(infectedStage1);
	                }
	                else if (p2.infectionStage < p1.infectionStage) {
	                    p2.updateInfectionStage(infectedStage1);
	                }
	                else if (p2.infectionStage > p1.infectionStage) {
	                    var infectionStage2 = infectionOptions.stages[p2.infectionStage];
	                    var infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : p2.infectionStage;
	                    p1.updateInfectionStage(infectedStage2);
	                }
	            }
	        }
	    };
	    return Infecter;
	}());
	exports.Infecter = Infecter;


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Linker_1 = __webpack_require__(449);
	var Attractor_1 = __webpack_require__(445);
	var Collider_1 = __webpack_require__(446);
	var Infecter_1 = __webpack_require__(447);
	var InteractionManager = (function () {
	    function InteractionManager() {
	    }
	    InteractionManager.interact = function (p1, container, delta) {
	        if (p1.particlesOptions.lineLinked.enable) {
	            Linker_1.Linker.link(p1, container, delta);
	        }
	        if (p1.particlesOptions.move.attract.enable) {
	            Attractor_1.Attractor.attract(p1, container, delta);
	        }
	        if (p1.particlesOptions.collisions.enable) {
	            Collider_1.Collider.collide(p1, container, delta);
	        }
	        if (container.options.infection.enable) {
	            Infecter_1.Infecter.infect(p1, container, delta);
	        }
	    };
	    return InteractionManager;
	}());
	exports.InteractionManager = InteractionManager;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ColorUtils_1 = __webpack_require__(15);
	var Constants_1 = __webpack_require__(10);
	var Utils_1 = __webpack_require__(2);
	var Circle_1 = __webpack_require__(14);
	var Linker = (function () {
	    function Linker() {
	    }
	    Linker.link = function (p1, container, _delta) {
	        var _a;
	        var optOpacity = p1.particlesOptions.lineLinked.opacity;
	        var optDistance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
	        var pos1 = p1.getPosition();
	        var query = container.particles.quadTree.query(new Circle_1.Circle(pos1.x, pos1.y, optDistance));
	        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
	            var p2 = query_1[_i];
	            if (p1 === p2 || !p2.particlesOptions.lineLinked.enable) {
	                continue;
	            }
	            var pos2 = p2.getPosition();
	            var distance = Utils_1.Utils.getDistance(pos1, pos2);
	            var opacityLine = optOpacity - (distance * optOpacity) / optDistance;
	            if (opacityLine > 0) {
	                if (!container.particles.lineLinkedColor) {
	                    var optColor = p1.particlesOptions.lineLinked.color;
	                    var color = typeof optColor === "string" ? optColor : optColor.value;
	                    if (color === Constants_1.Constants.randomColorValue) {
	                        if (p1.particlesOptions.lineLinked.consent) {
	                            container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
	                        }
	                        else if (p1.particlesOptions.lineLinked.blink) {
	                            container.particles.lineLinkedColor = Constants_1.Constants.randomColorValue;
	                        }
	                        else {
	                            container.particles.lineLinkedColor = Constants_1.Constants.midColorValue;
	                        }
	                    }
	                    else {
	                        container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.colorToRgb({ value: color });
	                    }
	                }
	                if (p2.links.map(function (t) { return t.destination; }).indexOf(p1) == -1 &&
	                    p1.links.map(function (t) { return t.destination; }).indexOf(p2) == -1) {
	                    p1.links.push({
	                        destination: p2,
	                        opacity: opacityLine,
	                    });
	                }
	            }
	        }
	    };
	    return Linker;
	}());
	exports.Linker = Linker;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Utils_1 = __webpack_require__(2);
	var HoverMode_1 = __webpack_require__(30);
	var Mover = (function () {
	    function Mover(container, particle) {
	        this.container = container;
	        this.particle = particle;
	    }
	    Mover.calcNoiseValue = function (input, size, noiseValue) {
	        return Math.floor(input / size) / noiseValue.value + noiseValue.offset;
	    };
	    Mover.prototype.move = function (delta) {
	        var _a;
	        var container = this.container;
	        var options = container.options;
	        var particle = this.particle;
	        var particlesOptions = particle.particlesOptions;
	        if (particlesOptions.move.enable) {
	            var slowFactor = this.getProximitySpeedFactor();
	            var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
	            var baseSpeed = (_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed;
	            var moveSpeed = baseSpeed / 2 * slowFactor * deltaFactor;
	            var noiseOptions = particlesOptions.move.noise;
	            var noiseEnabled = noiseOptions.enable;
	            if (noiseEnabled) {
	                if (particle.lastNoiseTime > particle.noiseDelay) {
	                    var position = particle.position;
	                    var noiseFactor = noiseOptions.factor;
	                    var simplex = container.simplex;
	                    var noise = {
	                        angle: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.horizontal), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.horizontal), container.particles.noiseZ),
	                        length: simplex.noise3D(Mover.calcNoiseValue(position.x, particle.size.value, noiseFactor.vertical), Mover.calcNoiseValue(position.y, particle.size.value, noiseFactor.vertical), container.particles.noiseZ),
	                    };
	                    particle.velocity.horizontal += Math.cos(noise.angle) * noise.length;
	                    particle.velocity.horizontal = Utils_1.Utils.clamp(particle.velocity.horizontal, -1, 1);
	                    particle.velocity.vertical += Math.sin(noise.angle) * noise.length;
	                    particle.velocity.vertical = Utils_1.Utils.clamp(particle.velocity.vertical, -1, 1);
	                    particle.lastNoiseTime -= particle.noiseDelay;
	                }
	                else {
	                    particle.lastNoiseTime += delta;
	                }
	            }
	            particle.position.x += particle.velocity.horizontal * moveSpeed;
	            particle.position.y += particle.velocity.vertical * moveSpeed;
	            if (particlesOptions.move.vibrate) {
	                particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
	                particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
	            }
	        }
	        this.moveParallax(delta);
	    };
	    Mover.prototype.moveParallax = function (_delta) {
	        var container = this.container;
	        var options = container.options;
	        if (!options.interactivity.events.onHover.parallax.enable) {
	            return;
	        }
	        var particle = this.particle;
	        var parallaxForce = options.interactivity.events.onHover.parallax.force;
	        var mousePos = container.interactivity.mouse.position;
	        if (!mousePos) {
	            return;
	        }
	        var windowDimension = {
	            height: window.innerHeight / 2,
	            width: window.innerWidth / 2,
	        };
	        var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
	        var tmp = {
	            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
	            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
	        };
	        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
	        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
	    };
	    Mover.prototype.getProximitySpeedFactor = function () {
	        var container = this.container;
	        var options = container.options;
	        var particle = this.particle;
	        var active = Utils_1.Utils.isInArray(HoverMode_1.HoverMode.slow, options.interactivity.events.onHover.mode);
	        if (!active) {
	            return 1;
	        }
	        var mousePos = this.container.interactivity.mouse.position;
	        if (!mousePos) {
	            return 1;
	        }
	        var particlePos = particle.getPosition();
	        var dist = Utils_1.Utils.getDistance(mousePos, particlePos);
	        var radius = container.retina.slowModeRadius;
	        if (dist > radius) {
	            return 1;
	        }
	        var proximityFactor = (dist / radius) || 0;
	        var slowFactor = options.interactivity.modes.slow.factor;
	        return proximityFactor / slowFactor;
	    };
	    return Mover;
	}());
	exports.Mover = Mover;


/***/ }),
/* 451 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CircleDrawer = (function () {
	    function CircleDrawer() {
	    }
	    CircleDrawer.prototype.draw = function (context, particle, radius, _opacity) {
	        context.arc(0, 0, radius, 0, Math.PI * 2, false);
	    };
	    return CircleDrawer;
	}());
	exports.CircleDrawer = CircleDrawer;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Utils_1 = __webpack_require__(2);
	var ShapeType_1 = __webpack_require__(31);
	var ImageDrawer = (function () {
	    function ImageDrawer() {
	        this.images = [];
	    }
	    ImageDrawer.prototype.getImages = function (container) {
	        var containerImages = this.images.filter(function (t) { return t.id == container.id; });
	        if (!containerImages.length) {
	            this.images.push({
	                id: container.id,
	                images: [],
	            });
	            return this.getImages(container);
	        }
	        else {
	            return containerImages[0];
	        }
	    };
	    ImageDrawer.prototype.addImage = function (container, image) {
	        var containerImages = this.getImages(container);
	        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
	    };
	    ImageDrawer.prototype.init = function (container) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var options, imageOptions, _i, imageOptions_1, optionsImage;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        options = container.options;
	                        imageOptions = (_a = options.particles.shape.options[ShapeType_1.ShapeType.images]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType_1.ShapeType.image];
	                        if (!(imageOptions instanceof Array)) return [3, 5];
	                        _i = 0, imageOptions_1 = imageOptions;
	                        _b.label = 1;
	                    case 1:
	                        if (!(_i < imageOptions_1.length)) return [3, 4];
	                        optionsImage = imageOptions_1[_i];
	                        return [4, this.loadImageShape(container, optionsImage)];
	                    case 2:
	                        _b.sent();
	                        _b.label = 3;
	                    case 3:
	                        _i++;
	                        return [3, 1];
	                    case 4: return [3, 7];
	                    case 5: return [4, this.loadImageShape(container, imageOptions)];
	                    case 6:
	                        _b.sent();
	                        _b.label = 7;
	                    case 7: return [2];
	                }
	            });
	        });
	    };
	    ImageDrawer.prototype.destroy = function () {
	        this.images = [];
	    };
	    ImageDrawer.prototype.loadImageShape = function (container, imageShape) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var image, _a;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        _b.trys.push([0, 2, , 3]);
	                        return [4, Utils_1.Utils.loadImage(imageShape.src)];
	                    case 1:
	                        image = _b.sent();
	                        this.addImage(container, image);
	                        return [3, 3];
	                    case 2:
	                        _a = _b.sent();
	                        console.log("tsParticles error - " + imageShape.src + " not found");
	                        return [3, 3];
	                    case 3: return [2];
	                }
	            });
	        });
	    };
	    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
	        var _a, _b;
	        if (!context) {
	            return;
	        }
	        var image = particle.image;
	        var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
	        if (!element) {
	            return;
	        }
	        var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
	        var pos = {
	            x: -radius,
	            y: -radius,
	        };
	        context.globalAlpha = opacity;
	        context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
	        context.globalAlpha = 1;
	    };
	    return ImageDrawer;
	}());
	exports.ImageDrawer = ImageDrawer;


/***/ }),
/* 453 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var LineDrawer = (function () {
	    function LineDrawer() {
	    }
	    LineDrawer.prototype.draw = function (context, particle, radius, _opacity) {
	        context.moveTo(0, -radius / 2);
	        context.lineTo(0, radius / 2);
	    };
	    return LineDrawer;
	}());
	exports.LineDrawer = LineDrawer;


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var PolygonDrawerBase_1 = __webpack_require__(105);
	var PolygonDrawer = (function (_super) {
	    tslib_1.__extends(PolygonDrawer, _super);
	    function PolygonDrawer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PolygonDrawer.prototype.getSidesData = function (particle, radius) {
	        var _a, _b;
	        var polygon = particle.shapeData;
	        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
	        return {
	            count: {
	                denominator: 1,
	                numerator: sides,
	            },
	            length: radius * 2.66 / (sides / 3),
	        };
	    };
	    PolygonDrawer.prototype.getCenter = function (particle, radius) {
	        var _a, _b;
	        var polygon = particle.shapeData;
	        var sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
	        return {
	            x: -radius / (sides / 3.5),
	            y: -radius / (2.66 / 3.5),
	        };
	    };
	    return PolygonDrawer;
	}(PolygonDrawerBase_1.PolygonDrawerBase));
	exports.PolygonDrawer = PolygonDrawer;


/***/ }),
/* 455 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SquareDrawer = (function () {
	    function SquareDrawer() {
	    }
	    SquareDrawer.prototype.draw = function (context, particle, radius, _opacity) {
	        context.rect(-radius, -radius, radius * 2, radius * 2);
	    };
	    return SquareDrawer;
	}());
	exports.SquareDrawer = SquareDrawer;


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var PolygonDrawerBase_1 = __webpack_require__(105);
	var StarDrawer = (function (_super) {
	    tslib_1.__extends(StarDrawer, _super);
	    function StarDrawer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    StarDrawer.prototype.getSidesData = function (particle, radius) {
	        var _a;
	        var polygon = particle.shapeData;
	        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
	        return {
	            count: {
	                denominator: 2,
	                numerator: sides,
	            },
	            length: radius * 2 * 2.66 / (sides / 3),
	        };
	    };
	    StarDrawer.prototype.getCenter = function (particle, radius) {
	        var _a;
	        var polygon = particle.shapeData;
	        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
	        return {
	            x: -radius * 2 / (sides / 4),
	            y: -radius / (2 * 2.66 / 3.5),
	        };
	    };
	    return StarDrawer;
	}(PolygonDrawerBase_1.PolygonDrawerBase));
	exports.StarDrawer = StarDrawer;


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Utils_1 = __webpack_require__(2);
	var ShapeType_1 = __webpack_require__(31);
	var TextDrawer = (function () {
	    function TextDrawer() {
	    }
	    TextDrawer.prototype.init = function (container) {
	        var _a, _b;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var options, shapeOptions, _i, shapeOptions_1, character, character;
	            return tslib_1.__generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        options = container.options;
	                        if (!(Utils_1.Utils.isInArray(ShapeType_1.ShapeType.char, options.particles.shape.type) ||
	                            Utils_1.Utils.isInArray(ShapeType_1.ShapeType.character, options.particles.shape.type))) return [3, 7];
	                        shapeOptions = (_a = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType_1.ShapeType.char];
	                        if (!(shapeOptions instanceof Array)) return [3, 5];
	                        _i = 0, shapeOptions_1 = shapeOptions;
	                        _c.label = 1;
	                    case 1:
	                        if (!(_i < shapeOptions_1.length)) return [3, 4];
	                        character = shapeOptions_1[_i];
	                        return [4, Utils_1.Utils.loadFont(character)];
	                    case 2:
	                        _c.sent();
	                        _c.label = 3;
	                    case 3:
	                        _i++;
	                        return [3, 1];
	                    case 4: return [3, 7];
	                    case 5:
	                        character = (_b = options.particles.shape.options[ShapeType_1.ShapeType.character]) !== null && _b !== void 0 ? _b : options.particles.shape.options[ShapeType_1.ShapeType.char];
	                        if (!(character !== undefined)) return [3, 7];
	                        return [4, Utils_1.Utils.loadFont(character)];
	                    case 6:
	                        _c.sent();
	                        _c.label = 7;
	                    case 7: return [2];
	                }
	            });
	        });
	    };
	    TextDrawer.prototype.draw = function (context, particle, radius, _opacity) {
	        var character = particle.shapeData;
	        if (character === undefined) {
	            return;
	        }
	        var textData = character.value;
	        if (textData === undefined) {
	            return;
	        }
	        var textParticle = particle;
	        if (textParticle.text === undefined) {
	            if (textData instanceof Array) {
	                textParticle.text = Utils_1.Utils.itemFromArray(textData, particle.randomIndexData);
	            }
	            else {
	                textParticle.text = textData;
	            }
	        }
	        var text = textParticle.text;
	        var style = character.style;
	        var weight = character.weight;
	        var size = Math.round(radius) * 2;
	        var font = character.font;
	        var fill = particle.fill;
	        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
	        var pos = {
	            x: -radius / 2,
	            y: radius / 2,
	        };
	        if (fill) {
	            context.fillText(text, pos.x, pos.y);
	        }
	        else {
	            context.strokeText(text, pos.x, pos.y);
	        }
	    };
	    return TextDrawer;
	}());
	exports.TextDrawer = TextDrawer;


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var PolygonDrawerBase_1 = __webpack_require__(105);
	var TriangleDrawer = (function (_super) {
	    tslib_1.__extends(TriangleDrawer, _super);
	    function TriangleDrawer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
	        return {
	            count: {
	                denominator: 2,
	                numerator: 3,
	            },
	            length: radius * 2,
	        };
	    };
	    TriangleDrawer.prototype.getCenter = function (particle, radius) {
	        return {
	            x: -radius,
	            y: radius / 1.66,
	        };
	    };
	    return TriangleDrawer;
	}(PolygonDrawerBase_1.PolygonDrawerBase));
	exports.TriangleDrawer = TriangleDrawer;


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OutMode_1 = __webpack_require__(61);
	var Utils_1 = __webpack_require__(2);
	var Mover_1 = __webpack_require__(450);
	var RotateDirection_1 = __webpack_require__(63);
	var SizeAnimationStatus_1 = __webpack_require__(170);
	var OpacityAnimationStatus_1 = __webpack_require__(167);
	var Updater = (function () {
	    function Updater(container, particle) {
	        this.container = container;
	        this.particle = particle;
	        this.mover = new Mover_1.Mover(container, particle);
	    }
	    Updater.checkBounds = function (coordinate, radius, size, velocity, outside) {
	        if ((coordinate + radius > size && velocity > 0) ||
	            (coordinate - radius < 0 && velocity < 0)) {
	            outside();
	        }
	    };
	    Updater.prototype.update = function (delta) {
	        this.mover.move(delta);
	        this.updateOpacity(delta);
	        this.updateSize(delta);
	        this.updateAngle(delta);
	        this.fixOutOfCanvasPosition(delta);
	        this.updateOutMode(delta);
	    };
	    Updater.prototype.updateOpacity = function (delta) {
	        var container = this.container;
	        var options = container.options;
	        var particle = this.particle;
	        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
	        if (particle.particlesOptions.opacity.animation.enable) {
	            switch (particle.opacity.status) {
	                case OpacityAnimationStatus_1.OpacityAnimationStatus.increasing:
	                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
	                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing;
	                    }
	                    else {
	                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
	                    }
	                    break;
	                case OpacityAnimationStatus_1.OpacityAnimationStatus.decreasing:
	                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
	                        particle.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
	                    }
	                    else {
	                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
	                    }
	                    break;
	            }
	            if (particle.opacity.value < 0) {
	                particle.opacity.value = 0;
	            }
	        }
	    };
	    Updater.prototype.updateSize = function (delta) {
	        var _a;
	        var container = this.container;
	        var options = container.options;
	        var particle = this.particle;
	        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
	        if (particle.particlesOptions.size.animation.enable) {
	            switch (particle.size.status) {
	                case SizeAnimationStatus_1.SizeAnimationStatus.increasing:
	                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
	                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.decreasing;
	                    }
	                    else {
	                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
	                    }
	                    break;
	                case SizeAnimationStatus_1.SizeAnimationStatus.decreasing:
	                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
	                        particle.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
	                    }
	                    else {
	                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
	                    }
	            }
	            if (particle.size.value < 0) {
	                particle.size.value = 0;
	            }
	        }
	    };
	    Updater.prototype.updateAngle = function (delta) {
	        var container = this.container;
	        var options = container.options;
	        var particle = this.particle;
	        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
	        if (particle.particlesOptions.rotate.animation.enable) {
	            switch (particle.rotateDirection) {
	                case RotateDirection_1.RotateDirection.clockwise:
	                    particle.angle += particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
	                    if (particle.angle > 360) {
	                        particle.angle -= 360;
	                    }
	                    break;
	                case RotateDirection_1.RotateDirection.counterClockwise:
	                default:
	                    particle.angle -= particle.particlesOptions.rotate.animation.speed * Math.PI / 18 * deltaFactor;
	                    if (particle.angle < 0) {
	                        particle.angle += 360;
	                    }
	                    break;
	            }
	        }
	    };
	    Updater.prototype.fixOutOfCanvasPosition = function (_delta) {
	        var container = this.container;
	        var particle = this.particle;
	        var outMode = particle.particlesOptions.move.outMode;
	        var canvasSize = container.canvas.size;
	        var newPos;
	        if (outMode === OutMode_1.OutMode.bounce) {
	            newPos = {
	                bottom: canvasSize.height,
	                left: particle.size.value,
	                right: canvasSize.width,
	                top: particle.size.value,
	            };
	        }
	        else if (outMode === OutMode_1.OutMode.bounceHorizontal) {
	            newPos = {
	                bottom: canvasSize.height + particle.size.value - particle.offset.y,
	                left: particle.size.value,
	                right: canvasSize.width,
	                top: -particle.size.value - particle.offset.y,
	            };
	        }
	        else if (outMode === OutMode_1.OutMode.bounceVertical) {
	            newPos = {
	                bottom: canvasSize.height,
	                left: -particle.size.value - particle.offset.x,
	                right: canvasSize.width + particle.size.value + particle.offset.x,
	                top: particle.size.value,
	            };
	        }
	        else {
	            newPos = {
	                bottom: canvasSize.height + particle.size.value - particle.offset.y,
	                left: -particle.size.value - particle.offset.x,
	                right: canvasSize.width + particle.size.value + particle.offset.x,
	                top: -particle.size.value - particle.offset.y,
	            };
	        }
	        if (outMode === OutMode_1.OutMode.destroy) {
	            var sizeValue = particle.size.value;
	            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
	                container.particles.remove(particle);
	            }
	        }
	        else {
	            var sizeValue = particle.size.value;
	            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
	            if (nextBounds.left > canvasSize.width - particle.offset.x) {
	                particle.position.x = newPos.left;
	                particle.position.y = Math.random() * canvasSize.height;
	            }
	            else if (nextBounds.right < -particle.offset.x) {
	                particle.position.x = newPos.right;
	                particle.position.y = Math.random() * canvasSize.height;
	            }
	            if (nextBounds.top > canvasSize.height - particle.offset.y) {
	                particle.position.x = Math.random() * canvasSize.width;
	                particle.position.y = newPos.top;
	            }
	            else if (nextBounds.bottom < -particle.offset.y) {
	                particle.position.x = Math.random() * canvasSize.width;
	                particle.position.y = newPos.bottom;
	            }
	        }
	    };
	    Updater.prototype.updateOutMode = function (delta) {
	        var particle = this.particle;
	        switch (particle.particlesOptions.move.outMode) {
	            case OutMode_1.OutMode.bounce:
	            case OutMode_1.OutMode.bounceVertical:
	            case OutMode_1.OutMode.bounceHorizontal:
	                this.updateBounce(delta);
	                break;
	        }
	    };
	    Updater.prototype.updateBounce = function (delta) {
	        var container = this.container;
	        var particle = this.particle;
	        var handled = false;
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            if (plugin.particleBounce !== undefined) {
	                handled = plugin.particleBounce(particle, delta);
	            }
	            if (handled) {
	                break;
	            }
	        }
	        if (!handled) {
	            var outMode = particle.particlesOptions.move.outMode;
	            var pos = particle.getPosition();
	            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal) {
	                var size = particle.size.value;
	                var velocity = particle.velocity.horizontal;
	                Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, function () {
	                    particle.velocity.horizontal *= -1;
	                });
	            }
	            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical) {
	                var size = particle.size.value;
	                var velocity = particle.velocity.vertical;
	                Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, function () {
	                    particle.velocity.vertical *= -1;
	                });
	            }
	        }
	    };
	    return Updater;
	}());
	exports.Updater = Updater;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Particle_1 = __webpack_require__(104);
	var InteractionManager_1 = __webpack_require__(448);
	var Utils_1 = __webpack_require__(2);
	var HoverMode_1 = __webpack_require__(30);
	var Grabber_1 = __webpack_require__(443);
	var ClickMode_1 = __webpack_require__(9);
	var Repulser_1 = __webpack_require__(444);
	var DivMode_1 = __webpack_require__(107);
	var Bubbler_1 = __webpack_require__(441);
	var Connector_1 = __webpack_require__(442);
	var QuadTree_1 = __webpack_require__(531);
	var DestroyType_1 = __webpack_require__(166);
	var Point_1 = __webpack_require__(530);
	var Rectangle_1 = __webpack_require__(180);
	var Particles = (function () {
	    function Particles(container) {
	        this.container = container;
	        this.array = [];
	        this.interactionsEnabled = false;
	        var canvasSize = this.container.canvas.size;
	        this.noiseZ = 0;
	        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
	    }
	    Object.defineProperty(Particles.prototype, "count", {
	        get: function () {
	            return this.array.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Particles.prototype.init = function () {
	        var container = this.container;
	        var options = container.options;
	        var handled = false;
	        this.noiseZ = 0;
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            if (plugin.particlesInitialization !== undefined) {
	                handled = plugin.particlesInitialization();
	            }
	            if (handled) {
	                break;
	            }
	        }
	        if (!handled) {
	            for (var i = this.count; i < options.particles.number.value; i++) {
	                this.addParticle(new Particle_1.Particle(container));
	            }
	        }
	        this.interactionsEnabled = options.particles.lineLinked.enable ||
	            options.particles.move.attract.enable ||
	            options.particles.collisions.enable ||
	            options.infection.enable;
	        if (options.infection.enable) {
	            for (var i = 0; i < options.infection.infections; i++) {
	                var notInfected = this.array.filter(function (p) { return p.infectionStage === undefined; });
	                var infected = Utils_1.Utils.itemFromArray(notInfected);
	                infected.startInfection(0);
	            }
	        }
	    };
	    Particles.prototype.redraw = function () {
	        this.clear();
	        this.init();
	        this.draw(0);
	    };
	    Particles.prototype.removeAt = function (index, quantity) {
	        if (index >= 0 && index <= this.count) {
	            for (var _i = 0, _a = this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1); _i < _a.length; _i++) {
	                var particle = _a[_i];
	                particle.destroy();
	            }
	        }
	    };
	    Particles.prototype.remove = function (particle) {
	        this.removeAt(this.array.indexOf(particle));
	    };
	    Particles.prototype.update = function (delta) {
	        var container = this.container;
	        var options = container.options;
	        var particlesToDelete = [];
	        for (var i = 0; i < this.count; i++) {
	            var particle = this.array[i];
	            Bubbler_1.Bubbler.reset(particle);
	            for (var id in container.plugins) {
	                var plugin = container.plugins[id];
	                if (particle.destroyed) {
	                    break;
	                }
	                if (plugin.particleUpdate) {
	                    plugin.particleUpdate(particle, delta);
	                }
	            }
	            if (!particle.destroyed) {
	                var sizeOpt = particle.particlesOptions.size;
	                var sizeAnim = sizeOpt.animation;
	                if (sizeAnim.enable) {
	                    switch (sizeAnim.destroy) {
	                        case DestroyType_1.DestroyType.max:
	                            if (particle.size.value >= sizeOpt.value * container.retina.pixelRatio) {
	                                particle.destroyed = true;
	                            }
	                            break;
	                        case DestroyType_1.DestroyType.min:
	                            if (particle.size.value <= sizeAnim.minimumValue * container.retina.pixelRatio) {
	                                particle.destroyed = true;
	                            }
	                            break;
	                    }
	                }
	            }
	            if (particle.destroyed) {
	                particlesToDelete.push(particle);
	                continue;
	            }
	            particle.update(i, delta);
	            var pos = particle.getPosition();
	            container.particles.quadTree.insert(new Point_1.Point(pos.x, pos.y, particle));
	        }
	        for (var _i = 0, particlesToDelete_1 = particlesToDelete; _i < particlesToDelete_1.length; _i++) {
	            var particle = particlesToDelete_1[_i];
	            this.remove(particle);
	        }
	        if (container.options.interactivity.events.onDiv.enable ||
	            (container.options.interactivity.events.onHover.enable && container.interactivity.mouse.position) ||
	            (container.options.interactivity.events.onClick.enable && container.interactivity.mouse.clickPosition)) {
	            var hoverMode = options.interactivity.events.onHover.mode;
	            var clickMode = options.interactivity.events.onClick.mode;
	            var divMode = options.interactivity.events.onDiv.mode;
	            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
	                Grabber_1.Grabber.grab(container, delta);
	            }
	            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) ||
	                Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode) ||
	                Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
	                Repulser_1.Repulser.repulse(container, delta);
	            }
	            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
	                Bubbler_1.Bubbler.bubble(container, delta);
	            }
	            if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, hoverMode)) {
	                Connector_1.Connector.connect(container, delta);
	            }
	        }
	        for (var _a = 0, _b = this.array; _a < _b.length; _a++) {
	            var particle = _b[_a];
	            if (this.interactionsEnabled) {
	                InteractionManager_1.InteractionManager.interact(particle, container, delta);
	            }
	        }
	    };
	    Particles.prototype.draw = function (delta) {
	        var container = this.container;
	        container.canvas.clear();
	        var canvasSize = this.container.canvas.size;
	        this.quadTree = new QuadTree_1.QuadTree(new Rectangle_1.Rectangle(0, 0, canvasSize.width, canvasSize.height), 4);
	        this.update(delta);
	        this.noiseZ += 0.0004;
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            container.canvas.drawPlugin(plugin, delta);
	        }
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var p = _a[_i];
	            p.draw(delta);
	        }
	    };
	    Particles.prototype.clear = function () {
	        this.array = [];
	    };
	    Particles.prototype.push = function (nb, mousePosition) {
	        var _a;
	        var container = this.container;
	        var options = container.options;
	        var limit = options.particles.number.limit * container.density;
	        this.pushing = true;
	        if (limit > 0) {
	            var countToRemove = this.count + nb - limit;
	            if (countToRemove > 0) {
	                this.removeQuantity(countToRemove);
	            }
	        }
	        var pos;
	        if (mousePosition) {
	            pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : { x: 0, y: 0 };
	        }
	        for (var i = 0; i < nb; i++) {
	            this.addParticle(new Particle_1.Particle(container, pos));
	        }
	        if (!options.particles.move.enable) {
	            this.container.play();
	        }
	        this.pushing = false;
	    };
	    Particles.prototype.addParticle = function (particle) {
	        this.array.push(particle);
	    };
	    Particles.prototype.removeQuantity = function (quantity) {
	        var container = this.container;
	        var options = container.options;
	        this.removeAt(0, quantity);
	        if (!options.particles.move.enable) {
	            this.container.play();
	        }
	    };
	    return Particles;
	}());
	exports.Particles = Particles;


/***/ }),
/* 461 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Retina = (function () {
	    function Retina(container) {
	        this.container = container;
	        this.isRetina = false;
	        this.bubbleModeDistance = 0;
	        this.bubbleModeSize = 0;
	        this.connectModeDistance = 0;
	        this.connectModeRadius = 0;
	        this.grabModeDistance = 0;
	        this.repulseModeDistance = 0;
	        this.slowModeRadius = 0;
	        this.lineLinkedDistance = 0;
	        this.lineLinkedWidth = 0;
	        this.moveSpeed = 0;
	        this.sizeValue = 0;
	        this.sizeAnimationSpeed = 0;
	        this.polygonMaskMoveRadius = 0;
	        this.pixelRatio = 1;
	    }
	    Retina.prototype.init = function () {
	        var _a;
	        var container = this.container;
	        var options = container.options;
	        if (options.detectRetina && window.devicePixelRatio > 1) {
	            this.pixelRatio = window.devicePixelRatio;
	            this.isRetina = true;
	        }
	        else {
	            this.pixelRatio = 1;
	            this.isRetina = false;
	        }
	        var ratio = this.pixelRatio;
	        if (container.canvas.element) {
	            var element = container.canvas.element;
	            container.canvas.size.width = element.offsetWidth * ratio;
	            container.canvas.size.height = element.offsetHeight * ratio;
	        }
	        var particles = options.particles;
	        this.lineLinkedDistance = particles.lineLinked.distance * ratio;
	        this.lineLinkedWidth = particles.lineLinked.width * ratio;
	        this.moveSpeed = particles.move.speed * ratio;
	        this.sizeValue = particles.size.value * ratio;
	        this.sizeAnimationSpeed = particles.size.animation.speed * ratio;
	        var interactivity = options.interactivity;
	        this.connectModeDistance = interactivity.modes.connect.distance * ratio;
	        this.connectModeRadius = interactivity.modes.connect.radius * ratio;
	        this.grabModeDistance = interactivity.modes.grab.distance * ratio;
	        this.repulseModeDistance = interactivity.modes.repulse.distance * ratio;
	        this.slowModeRadius = interactivity.modes.slow.radius * ratio;
	        this.bubbleModeDistance = interactivity.modes.bubble.distance * ratio;
	        this.bubbleModeSize = (_a = interactivity.modes.bubble.size) !== null && _a !== void 0 ? _a : this.sizeValue * ratio;
	        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
	    };
	    Retina.prototype.initParticle = function (particle) {
	        var particlesOptions = particle.particlesOptions;
	        var ratio = this.pixelRatio;
	        particle.lineLinkedDistance = particlesOptions.lineLinked.distance * ratio;
	        particle.lineLinkedWidth = particlesOptions.lineLinked.width * ratio;
	        particle.moveSpeed = particlesOptions.move.speed * ratio;
	        particle.sizeValue = particlesOptions.size.value * ratio;
	        if (typeof particlesOptions.size.random !== "boolean") {
	            particle.randomMinimumSize = particlesOptions.size.random.minimumValue;
	        }
	        particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
	    };
	    Retina.prototype.reset = function () {
	    };
	    return Retina;
	}());
	exports.Retina = Retina;


/***/ }),
/* 462 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AbsorberRandomSize = (function () {
	    function AbsorberRandomSize() {
	        this.enable = false;
	        this.minimumValue = 1;
	    }
	    AbsorberRandomSize.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.minimumValue !== undefined) {
	                this.minimumValue = data.minimumValue;
	            }
	        }
	    };
	    return AbsorberRandomSize;
	}());
	exports.AbsorberRandomSize = AbsorberRandomSize;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AbsorberRandomSize_1 = __webpack_require__(462);
	var AbsorberSize = (function () {
	    function AbsorberSize() {
	        this.density = 5;
	        this.random = new AbsorberRandomSize_1.AbsorberRandomSize();
	        this.value = 50;
	    }
	    AbsorberSize.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.density !== undefined) {
	                this.density = data.density;
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	            if (data.random !== undefined) {
	                if (typeof data.random === "boolean") {
	                    this.random.load({ enable: data.random });
	                }
	                else {
	                    this.random.load(data.random);
	                }
	            }
	            if (data.limit !== undefined) {
	                this.limit = data.limit;
	            }
	        }
	    };
	    return AbsorberSize;
	}());
	exports.AbsorberSize = AbsorberSize;


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var Background = (function () {
	    function Background() {
	    }
	    Background.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            }
	            if (data.image !== undefined) {
	                this.image = data.image;
	            }
	            if (data.position !== undefined) {
	                this.position = data.position;
	            }
	            if (data.repeat !== undefined) {
	                this.repeat = data.repeat;
	            }
	            if (data.size !== undefined) {
	                this.size = data.size;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return Background;
	}());
	exports.Background = Background;


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var BackgroundMaskCover_1 = __webpack_require__(466);
	var BackgroundMask = (function () {
	    function BackgroundMask() {
	        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
	        this.enable = false;
	    }
	    BackgroundMask.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.cover !== undefined) {
	                var cover = data.cover;
	                var color = (typeof data.cover === "string" ? { color: data.cover } : data.cover);
	                this.cover.load(cover.color !== undefined ? cover : { color: color });
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	        }
	    };
	    return BackgroundMask;
	}());
	exports.BackgroundMask = BackgroundMask;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var BackgroundMaskCover = (function () {
	    function BackgroundMaskCover() {
	        this.color = new OptionsColor_1.OptionsColor();
	        this.opacity = 1;
	    }
	    BackgroundMaskCover.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return BackgroundMaskCover;
	}());
	exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),
/* 467 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var EmitterLife = (function () {
	    function EmitterLife() {
	    }
	    EmitterLife.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.count !== undefined) {
	                this.count = data.count;
	            }
	            if (data.delay !== undefined) {
	                this.delay = data.delay;
	            }
	            if (data.duration !== undefined) {
	                this.duration = data.duration;
	            }
	        }
	    };
	    return EmitterLife;
	}());
	exports.EmitterLife = EmitterLife;


/***/ }),
/* 468 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var EmitterRate = (function () {
	    function EmitterRate() {
	        this.quantity = 1;
	        this.delay = 0.1;
	    }
	    EmitterRate.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.quantity !== undefined) {
	                this.quantity = data.quantity;
	            }
	            if (data.delay !== undefined) {
	                this.delay = data.delay;
	            }
	        }
	    };
	    return EmitterRate;
	}());
	exports.EmitterRate = EmitterRate;


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InfectionStage_1 = __webpack_require__(470);
	var Infection = (function () {
	    function Infection() {
	        this.cure = false;
	        this.delay = 0;
	        this.enable = false;
	        this.infections = 0;
	        this.stages = [];
	    }
	    Infection.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.cure !== undefined) {
	                this.cure = data.cure;
	            }
	            if (data.delay !== undefined) {
	                this.delay = data.delay;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.infections !== undefined) {
	                this.infections = data.infections;
	            }
	            if (data.stages !== undefined) {
	                this.stages = data.stages.map(function (t) {
	                    var s = new InfectionStage_1.InfectionStage();
	                    s.load(t);
	                    return s;
	                });
	            }
	        }
	    };
	    return Infection;
	}());
	exports.Infection = Infection;


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var InfectionStage = (function () {
	    function InfectionStage() {
	        this.color = new OptionsColor_1.OptionsColor();
	        this.color.value = "#ff0000";
	        this.radius = 0;
	        this.rate = 1;
	    }
	    InfectionStage.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            }
	            this.duration = data.duration;
	            this.infectedStage = data.infectedStage;
	            if (data.radius !== undefined) {
	                this.radius = data.radius;
	            }
	            if (data.rate !== undefined) {
	                this.rate = data.rate;
	            }
	        }
	    };
	    return InfectionStage;
	}());
	exports.InfectionStage = InfectionStage;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClickEvent = (function () {
	    function ClickEvent() {
	        this.enable = false;
	        this.mode = [];
	    }
	    ClickEvent.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.mode !== undefined) {
	                this.mode = data.mode;
	            }
	        }
	    };
	    return ClickEvent;
	}());
	exports.ClickEvent = ClickEvent;


/***/ }),
/* 472 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DivEvent = (function () {
	    function DivEvent() {
	        this.elementId = "";
	        this.enable = false;
	        this.mode = [];
	    }
	    Object.defineProperty(DivEvent.prototype, "el", {
	        get: function () {
	            return this.elementId;
	        },
	        set: function (value) {
	            this.elementId = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DivEvent.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            var elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
	            if (elementId !== undefined) {
	                this.elementId = elementId;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.mode !== undefined) {
	                this.mode = data.mode;
	            }
	        }
	    };
	    return DivEvent;
	}());
	exports.DivEvent = DivEvent;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClickEvent_1 = __webpack_require__(471);
	var DivEvent_1 = __webpack_require__(472);
	var HoverEvent_1 = __webpack_require__(474);
	var Events = (function () {
	    function Events() {
	        this.onClick = new ClickEvent_1.ClickEvent();
	        this.onDiv = new DivEvent_1.DivEvent();
	        this.onHover = new HoverEvent_1.HoverEvent();
	        this.resize = true;
	    }
	    Object.defineProperty(Events.prototype, "onclick", {
	        get: function () {
	            return this.onClick;
	        },
	        set: function (value) {
	            this.onClick = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Events.prototype, "ondiv", {
	        get: function () {
	            return this.onDiv;
	        },
	        set: function (value) {
	            this.onDiv = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Events.prototype, "onhover", {
	        get: function () {
	            return this.onHover;
	        },
	        set: function (value) {
	            this.onHover = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Events.prototype.load = function (data) {
	        var _a, _b, _c;
	        if (data !== undefined) {
	            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
	            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
	            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
	            if (data.resize !== undefined) {
	                this.resize = data.resize;
	            }
	        }
	    };
	    return Events;
	}());
	exports.Events = Events;


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Parallax_1 = __webpack_require__(475);
	var HoverEvent = (function () {
	    function HoverEvent() {
	        this.enable = false;
	        this.mode = [];
	        this.parallax = new Parallax_1.Parallax();
	    }
	    HoverEvent.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.mode !== undefined) {
	                this.mode = data.mode;
	            }
	            this.parallax.load(data.parallax);
	        }
	    };
	    return HoverEvent;
	}());
	exports.HoverEvent = HoverEvent;


/***/ }),
/* 475 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Parallax = (function () {
	    function Parallax() {
	        this.enable = false;
	        this.force = 2;
	        this.smooth = 10;
	    }
	    Parallax.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.force !== undefined) {
	                this.force = data.force;
	            }
	            if (data.smooth !== undefined) {
	                this.smooth = data.smooth;
	            }
	        }
	    };
	    return Parallax;
	}());
	exports.Parallax = Parallax;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InteractivityDetect_1 = __webpack_require__(106);
	var Events_1 = __webpack_require__(473);
	var Modes_1 = __webpack_require__(482);
	var HoverMode_1 = __webpack_require__(30);
	var Interactivity = (function () {
	    function Interactivity() {
	        this.detectsOn = InteractivityDetect_1.InteractivityDetect.canvas;
	        this.events = new Events_1.Events();
	        this.modes = new Modes_1.Modes();
	    }
	    Object.defineProperty(Interactivity.prototype, "detect_on", {
	        get: function () {
	            return this.detectsOn;
	        },
	        set: function (value) {
	            this.detectsOn = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Interactivity.prototype.load = function (data) {
	        var _a, _b, _c;
	        if (data !== undefined) {
	            var detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
	            if (detectsOn !== undefined) {
	                this.detectsOn = detectsOn;
	            }
	            this.events.load(data.events);
	            this.modes.load(data.modes);
	            if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
	                if (this.events.onHover.mode instanceof Array) {
	                    if (this.events.onHover.mode.indexOf(HoverMode_1.HoverMode.slow) < 0) {
	                        this.events.onHover.mode.push(HoverMode_1.HoverMode.slow);
	                    }
	                }
	                else if (this.events.onHover.mode !== HoverMode_1.HoverMode.slow) {
	                    this.events.onHover.mode = [this.events.onHover.mode, HoverMode_1.HoverMode.slow];
	                }
	            }
	        }
	    };
	    return Interactivity;
	}());
	exports.Interactivity = Interactivity;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var Bubble = (function () {
	    function Bubble() {
	        this.distance = 200;
	        this.duration = 0.4;
	    }
	    Bubble.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.distance !== undefined) {
	                this.distance = data.distance;
	            }
	            if (data.duration !== undefined) {
	                this.duration = data.duration;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	            if (data.color !== undefined) {
	                if (data.color instanceof Array) {
	                    this.color = data.color.map(function (s) { return OptionsColor_1.OptionsColor.create(undefined, s); });
	                }
	                else {
	                    if (this.color instanceof Array) {
	                        this.color = new OptionsColor_1.OptionsColor();
	                    }
	                    this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	                }
	            }
	            if (data.size !== undefined) {
	                this.size = data.size;
	            }
	        }
	    };
	    return Bubble;
	}());
	exports.Bubble = Bubble;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ConnectLineLinked_1 = __webpack_require__(479);
	var Connect = (function () {
	    function Connect() {
	        this.distance = 80;
	        this.lineLinked = new ConnectLineLinked_1.ConnectLineLinked();
	        this.radius = 60;
	    }
	    Object.defineProperty(Connect.prototype, "line_linked", {
	        get: function () {
	            return this.lineLinked;
	        },
	        set: function (value) {
	            this.lineLinked = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Connect.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.distance !== undefined) {
	                this.distance = data.distance;
	            }
	            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
	            if (data.radius !== undefined) {
	                this.radius = data.radius;
	            }
	        }
	    };
	    return Connect;
	}());
	exports.Connect = Connect;


/***/ }),
/* 479 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ConnectLineLinked = (function () {
	    function ConnectLineLinked() {
	        this.opacity = 0.5;
	    }
	    ConnectLineLinked.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return ConnectLineLinked;
	}());
	exports.ConnectLineLinked = ConnectLineLinked;


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GrabLineLinked_1 = __webpack_require__(481);
	var Grab = (function () {
	    function Grab() {
	        this.distance = 100;
	        this.lineLinked = new GrabLineLinked_1.GrabLineLinked();
	    }
	    Object.defineProperty(Grab.prototype, "line_linked", {
	        get: function () {
	            return this.lineLinked;
	        },
	        set: function (value) {
	            this.lineLinked = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Grab.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.distance !== undefined) {
	                this.distance = data.distance;
	            }
	            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
	        }
	    };
	    return Grab;
	}());
	exports.Grab = Grab;


/***/ }),
/* 481 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GrabLineLinked = (function () {
	    function GrabLineLinked() {
	        this.opacity = 1;
	    }
	    GrabLineLinked.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return GrabLineLinked;
	}());
	exports.GrabLineLinked = GrabLineLinked;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Bubble_1 = __webpack_require__(477);
	var Connect_1 = __webpack_require__(478);
	var Grab_1 = __webpack_require__(480);
	var Remove_1 = __webpack_require__(484);
	var Push_1 = __webpack_require__(483);
	var Repulse_1 = __webpack_require__(485);
	var Slow_1 = __webpack_require__(486);
	var Emitter_1 = __webpack_require__(174);
	var Absorber_1 = __webpack_require__(173);
	var Modes = (function () {
	    function Modes() {
	        this.absorbers = [];
	        this.bubble = new Bubble_1.Bubble();
	        this.connect = new Connect_1.Connect();
	        this.emitters = [];
	        this.grab = new Grab_1.Grab();
	        this.push = new Push_1.Push();
	        this.remove = new Remove_1.Remove();
	        this.repulse = new Repulse_1.Repulse();
	        this.slow = new Slow_1.Slow();
	    }
	    Modes.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.bubble.load(data.bubble);
	            this.connect.load(data.connect);
	            this.grab.load(data.grab);
	            this.push.load(data.push);
	            this.remove.load(data.remove);
	            this.repulse.load(data.repulse);
	            this.slow.load(data.slow);
	            if (data.emitters !== undefined) {
	                if (data.emitters instanceof Array) {
	                    this.emitters = data.emitters.map(function (s) {
	                        var tmp = new Emitter_1.Emitter();
	                        tmp.load(s);
	                        return tmp;
	                    });
	                }
	                else {
	                    if (this.emitters instanceof Array) {
	                        this.emitters = new Emitter_1.Emitter();
	                    }
	                    this.emitters.load(data.emitters);
	                }
	            }
	            if (data.absorbers !== undefined) {
	                if (data.absorbers instanceof Array) {
	                    this.absorbers = data.absorbers.map(function (s) {
	                        var tmp = new Absorber_1.Absorber();
	                        tmp.load(s);
	                        return tmp;
	                    });
	                }
	                else {
	                    if (this.absorbers instanceof Array) {
	                        this.absorbers = new Absorber_1.Absorber();
	                    }
	                    this.absorbers.load(data.absorbers);
	                }
	            }
	        }
	    };
	    return Modes;
	}());
	exports.Modes = Modes;


/***/ }),
/* 483 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Push = (function () {
	    function Push() {
	        this.quantity = 4;
	    }
	    Object.defineProperty(Push.prototype, "particles_nb", {
	        get: function () {
	            return this.quantity;
	        },
	        set: function (value) {
	            this.quantity = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Push.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
	            if (quantity !== undefined) {
	                this.quantity = quantity;
	            }
	        }
	    };
	    return Push;
	}());
	exports.Push = Push;


/***/ }),
/* 484 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Remove = (function () {
	    function Remove() {
	        this.quantity = 2;
	    }
	    Object.defineProperty(Remove.prototype, "particles_nb", {
	        get: function () {
	            return this.quantity;
	        },
	        set: function (value) {
	            this.quantity = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Remove.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            var quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
	            if (quantity !== undefined) {
	                this.quantity = quantity;
	            }
	        }
	    };
	    return Remove;
	}());
	exports.Remove = Remove;


/***/ }),
/* 485 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Repulse = (function () {
	    function Repulse() {
	        this.distance = 200;
	        this.duration = 0.4;
	        this.speed = 1;
	    }
	    Repulse.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.distance !== undefined) {
	                this.distance = data.distance;
	            }
	            if (data.duration !== undefined) {
	                this.duration = data.duration;
	            }
	            if (data.speed !== undefined) {
	                this.speed = data.speed;
	            }
	        }
	    };
	    return Repulse;
	}());
	exports.Repulse = Repulse;


/***/ }),
/* 486 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Slow = (function () {
	    function Slow() {
	        this.factor = 3;
	        this.radius = 200;
	    }
	    Object.defineProperty(Slow.prototype, "active", {
	        get: function () {
	            return false;
	        },
	        set: function (_value) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Slow.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.factor !== undefined) {
	                this.factor = data.factor;
	            }
	            if (data.radius !== undefined) {
	                this.radius = data.radius;
	            }
	        }
	    };
	    return Slow;
	}());
	exports.Slow = Slow;


/***/ }),
/* 487 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Attract = (function () {
	    function Attract() {
	        this.enable = false;
	        this.rotate = {
	            x: 3000,
	            y: 3000,
	        };
	    }
	    Object.defineProperty(Attract.prototype, "rotateX", {
	        get: function () {
	            return this.rotate.x;
	        },
	        set: function (value) {
	            this.rotate.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Attract.prototype, "rotateY", {
	        get: function () {
	            return this.rotate.y;
	        },
	        set: function (value) {
	            this.rotate.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Attract.prototype.load = function (data) {
	        var _a, _b, _c, _d;
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            var rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
	            if (rotateX !== undefined) {
	                this.rotate.x = rotateX;
	            }
	            var rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
	            if (rotateY !== undefined) {
	                this.rotate.y = rotateY;
	            }
	        }
	    };
	    return Attract;
	}());
	exports.Attract = Attract;


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CollisionMode_1 = __webpack_require__(165);
	var Collisions = (function () {
	    function Collisions() {
	        this.enable = false;
	        this.mode = CollisionMode_1.CollisionMode.bounce;
	    }
	    Collisions.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.mode !== undefined) {
	                this.mode = data.mode;
	            }
	        }
	    };
	    return Collisions;
	}());
	exports.Collisions = Collisions;


/***/ }),
/* 489 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Density = (function () {
	    function Density() {
	        this.enable = false;
	        this.area = 800;
	        this.factor = 1000;
	    }
	    Object.defineProperty(Density.prototype, "value_area", {
	        get: function () {
	            return this.area;
	        },
	        set: function (value) {
	            this.area = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Density.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            var area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
	            if (area !== undefined) {
	                this.area = area;
	            }
	            if (data.factor !== undefined) {
	                this.factor = data.factor;
	            }
	        }
	    };
	    return Density;
	}());
	exports.Density = Density;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var LineLinkedShadow_1 = __webpack_require__(491);
	var OptionsColor_1 = __webpack_require__(5);
	var LineLinked = (function () {
	    function LineLinked() {
	        this.blink = false;
	        this.color = new OptionsColor_1.OptionsColor();
	        this.consent = false;
	        this.distance = 100;
	        this.enable = false;
	        this.opacity = 1;
	        this.shadow = new LineLinkedShadow_1.LineLinkedShadow();
	        this.width = 1;
	    }
	    LineLinked.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.blink !== undefined) {
	                this.blink = data.blink;
	            }
	            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            if (data.consent !== undefined) {
	                this.consent = data.consent;
	            }
	            if (data.distance !== undefined) {
	                this.distance = data.distance;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	            this.shadow.load(data.shadow);
	            if (data.width !== undefined) {
	                this.width = data.width;
	            }
	        }
	    };
	    return LineLinked;
	}());
	exports.LineLinked = LineLinked;


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var LineLinkedShadow = (function () {
	    function LineLinkedShadow() {
	        this.blur = 5;
	        this.color = new OptionsColor_1.OptionsColor();
	        this.enable = false;
	        this.color.value = "lime";
	    }
	    LineLinkedShadow.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.blur !== undefined) {
	                this.blur = data.blur;
	            }
	            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	        }
	    };
	    return LineLinkedShadow;
	}());
	exports.LineLinkedShadow = LineLinkedShadow;


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Attract_1 = __webpack_require__(487);
	var MoveDirection_1 = __webpack_require__(60);
	var OutMode_1 = __webpack_require__(61);
	var Trail_1 = __webpack_require__(512);
	var Noise_1 = __webpack_require__(493);
	var Move = (function () {
	    function Move() {
	        this.attract = new Attract_1.Attract();
	        this.direction = MoveDirection_1.MoveDirection.none;
	        this.enable = false;
	        this.noise = new Noise_1.Noise();
	        this.outMode = OutMode_1.OutMode.out;
	        this.random = false;
	        this.speed = 2;
	        this.straight = false;
	        this.trail = new Trail_1.Trail();
	        this.vibrate = false;
	    }
	    Object.defineProperty(Move.prototype, "collisions", {
	        get: function () {
	            return false;
	        },
	        set: function (value) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Move.prototype, "bounce", {
	        get: function () {
	            return this.collisions;
	        },
	        set: function (value) {
	            this.collisions = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Move.prototype, "out_mode", {
	        get: function () {
	            return this.outMode;
	        },
	        set: function (value) {
	            this.outMode = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Move.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            this.attract.load(data.attract);
	            if (data.direction !== undefined) {
	                this.direction = data.direction;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            this.noise.load(data.noise);
	            var outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
	            if (outMode !== undefined) {
	                this.outMode = outMode;
	            }
	            if (data.random !== undefined) {
	                this.random = data.random;
	            }
	            if (data.speed !== undefined) {
	                this.speed = data.speed;
	            }
	            if (data.straight !== undefined) {
	                this.straight = data.straight;
	            }
	            this.trail.load(data.trail);
	            if (data.vibrate !== undefined) {
	                this.vibrate = data.vibrate;
	            }
	        }
	    };
	    return Move;
	}());
	exports.Move = Move;


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NoiseDelay_1 = __webpack_require__(494);
	var NoiseFactor_1 = __webpack_require__(495);
	var Noise = (function () {
	    function Noise() {
	        this.delay = new NoiseDelay_1.NoiseDelay();
	        this.enable = false;
	        this.factor = new NoiseFactor_1.NoiseFactor();
	    }
	    Noise.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.delay.load(data.delay);
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            this.factor.load(data.factor);
	        }
	    };
	    return Noise;
	}());
	exports.Noise = Noise;


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NoiseRandom_1 = __webpack_require__(496);
	var NoiseDelay = (function () {
	    function NoiseDelay() {
	        this.random = new NoiseRandom_1.NoiseRandom();
	        this.value = 0;
	    }
	    NoiseDelay.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    return NoiseDelay;
	}());
	exports.NoiseDelay = NoiseDelay;


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NoiseValue_1 = __webpack_require__(497);
	var NoiseFactor = (function () {
	    function NoiseFactor() {
	        this.horizontal = new NoiseValue_1.NoiseValue();
	        this.horizontal.value = 50;
	        this.horizontal.offset = 0;
	        this.vertical = new NoiseValue_1.NoiseValue();
	        this.vertical.value = 10;
	        this.vertical.offset = 40000;
	    }
	    NoiseFactor.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.horizontal.load(data.horizontal);
	            this.vertical.load(data.vertical);
	        }
	    };
	    return NoiseFactor;
	}());
	exports.NoiseFactor = NoiseFactor;


/***/ }),
/* 496 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NoiseRandom = (function () {
	    function NoiseRandom() {
	        this.enable = false;
	        this.minimumValue = 0;
	    }
	    NoiseRandom.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.minimumValue !== undefined) {
	                this.minimumValue = data.minimumValue;
	            }
	        }
	    };
	    return NoiseRandom;
	}());
	exports.NoiseRandom = NoiseRandom;


/***/ }),
/* 497 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NoiseValue = (function () {
	    function NoiseValue() {
	        this.value = 1;
	        this.offset = 0;
	    }
	    NoiseValue.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.value !== undefined) {
	                this.value = data.value === 0 ? this.value : data.value;
	            }
	            if (data.offset !== undefined) {
	                this.offset = data.offset;
	            }
	        }
	    };
	    return NoiseValue;
	}());
	exports.NoiseValue = NoiseValue;


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OpacityAnimation_1 = __webpack_require__(499);
	var OpacityRandom_1 = __webpack_require__(500);
	var Opacity = (function () {
	    function Opacity() {
	        this.animation = new OpacityAnimation_1.OpacityAnimation();
	        this.random = new OpacityRandom_1.OpacityRandom();
	        this.value = 1;
	    }
	    Object.defineProperty(Opacity.prototype, "anim", {
	        get: function () {
	            return this.animation;
	        },
	        set: function (value) {
	            this.animation = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Opacity.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
	            if (data.random !== undefined) {
	                if (typeof data.random === "boolean") {
	                    this.random.enable = data.random;
	                }
	                else {
	                    this.random.load(data.random);
	                }
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    return Opacity;
	}());
	exports.Opacity = Opacity;


/***/ }),
/* 499 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OpacityAnimation = (function () {
	    function OpacityAnimation() {
	        this.enable = false;
	        this.minimumValue = 0;
	        this.speed = 2;
	        this.sync = false;
	    }
	    Object.defineProperty(OpacityAnimation.prototype, "opacity_min", {
	        get: function () {
	            return this.minimumValue;
	        },
	        set: function (value) {
	            this.minimumValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpacityAnimation.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
	            if (minimumValue !== undefined) {
	                this.minimumValue = minimumValue;
	            }
	            if (data.speed !== undefined) {
	                this.speed = data.speed;
	            }
	            if (data.sync !== undefined) {
	                this.sync = data.sync;
	            }
	        }
	    };
	    return OpacityAnimation;
	}());
	exports.OpacityAnimation = OpacityAnimation;


/***/ }),
/* 500 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OpacityRandom = (function () {
	    function OpacityRandom() {
	        this.enable = false;
	        this.minimumValue = 1;
	    }
	    OpacityRandom.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.minimumValue !== undefined) {
	                this.minimumValue = data.minimumValue;
	            }
	        }
	    };
	    return OpacityRandom;
	}());
	exports.OpacityRandom = OpacityRandom;


/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Density_1 = __webpack_require__(489);
	var ParticlesNumber = (function () {
	    function ParticlesNumber() {
	        this.density = new Density_1.Density();
	        this.limit = 0;
	        this.value = 100;
	    }
	    Object.defineProperty(ParticlesNumber.prototype, "max", {
	        get: function () {
	            return this.limit;
	        },
	        set: function (value) {
	            this.limit = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ParticlesNumber.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            this.density.load(data.density);
	            var limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
	            if (limit !== undefined) {
	                this.limit = limit;
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    return ParticlesNumber;
	}());
	exports.ParticlesNumber = ParticlesNumber;


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RotateAnimation_1 = __webpack_require__(503);
	var RotateDirection_1 = __webpack_require__(63);
	var Rotate = (function () {
	    function Rotate() {
	        this.animation = new RotateAnimation_1.RotateAnimation();
	        this.direction = RotateDirection_1.RotateDirection.clockwise;
	        this.random = false;
	        this.value = 0;
	    }
	    Rotate.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.animation.load(data.animation);
	            if (data.random !== undefined) {
	                this.random = data.random;
	            }
	            if (data.direction !== undefined) {
	                this.direction = data.direction;
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    return Rotate;
	}());
	exports.Rotate = Rotate;


/***/ }),
/* 503 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RotateAnimation = (function () {
	    function RotateAnimation() {
	        this.enable = false;
	        this.speed = 0;
	        this.sync = false;
	    }
	    RotateAnimation.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.speed !== undefined) {
	                this.speed = data.speed;
	            }
	            if (data.sync !== undefined) {
	                this.sync = data.sync;
	            }
	        }
	    };
	    return RotateAnimation;
	}());
	exports.RotateAnimation = RotateAnimation;


/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var Shadow = (function () {
	    function Shadow() {
	        this.blur = 0;
	        this.color = new OptionsColor_1.OptionsColor();
	        this.enable = false;
	        this.offset = {
	            x: 0,
	            y: 0,
	        };
	        this.color.value = "#000000";
	    }
	    Shadow.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.blur !== undefined) {
	                this.blur = data.blur;
	            }
	            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.offset !== undefined) {
	                if (data.offset.x !== undefined) {
	                    this.offset.x = data.offset.x;
	                }
	                if (data.offset.y !== undefined) {
	                    this.offset.y = data.offset.y;
	                }
	            }
	        }
	    };
	    return Shadow;
	}());
	exports.Shadow = Shadow;


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var ShapeBase_1 = __webpack_require__(109);
	var CharacterShape = (function (_super) {
	    tslib_1.__extends(CharacterShape, _super);
	    function CharacterShape() {
	        var _this = _super.call(this) || this;
	        _this.font = "Verdana";
	        _this.style = "";
	        _this.value = "*";
	        _this.weight = "400";
	        return _this;
	    }
	    CharacterShape.prototype.load = function (data) {
	        _super.prototype.load.call(this, data);
	        if (data !== undefined) {
	            if (data.font !== undefined) {
	                this.font = data.font;
	            }
	            if (data.style !== undefined) {
	                this.style = data.style;
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	            if (data.weight !== undefined) {
	                this.weight = data.weight;
	            }
	        }
	    };
	    return CharacterShape;
	}(ShapeBase_1.ShapeBase));
	exports.CharacterShape = CharacterShape;


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var ShapeBase_1 = __webpack_require__(109);
	var ImageShape = (function (_super) {
	    tslib_1.__extends(ImageShape, _super);
	    function ImageShape() {
	        var _this = _super.call(this) || this;
	        _this.height = 100;
	        _this.replaceColor = true;
	        _this.src = "";
	        _this.width = 100;
	        return _this;
	    }
	    Object.defineProperty(ImageShape.prototype, "replace_color", {
	        get: function () {
	            return this.replaceColor;
	        },
	        set: function (value) {
	            this.replaceColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ImageShape.prototype.load = function (data) {
	        var _a;
	        _super.prototype.load.call(this, data);
	        if (data !== undefined) {
	            if (data.height !== undefined) {
	                this.height = data.height;
	            }
	            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
	            if (replaceColor !== undefined) {
	                this.replaceColor = replaceColor;
	            }
	            if (data.src !== undefined) {
	                this.src = data.src;
	            }
	            if (data.width !== undefined) {
	                this.width = data.width;
	            }
	        }
	    };
	    return ImageShape;
	}(ShapeBase_1.ShapeBase));
	exports.ImageShape = ImageShape;


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var ShapeBase_1 = __webpack_require__(109);
	var PolygonShape = (function (_super) {
	    tslib_1.__extends(PolygonShape, _super);
	    function PolygonShape() {
	        var _this = _super.call(this) || this;
	        _this.sides = 5;
	        return _this;
	    }
	    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
	        get: function () {
	            return this.sides;
	        },
	        set: function (value) {
	            this.sides = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PolygonShape.prototype.load = function (data) {
	        var _a;
	        _super.prototype.load.call(this, data);
	        if (data !== undefined) {
	            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
	            if (sides !== undefined) {
	                this.sides = sides;
	            }
	        }
	    };
	    return PolygonShape;
	}(ShapeBase_1.ShapeBase));
	exports.PolygonShape = PolygonShape;


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SizeAnimation_1 = __webpack_require__(509);
	var SizeRandom_1 = __webpack_require__(510);
	var Size = (function () {
	    function Size() {
	        this.animation = new SizeAnimation_1.SizeAnimation();
	        this.random = new SizeRandom_1.SizeRandom();
	        this.value = 3;
	    }
	    Object.defineProperty(Size.prototype, "anim", {
	        get: function () {
	            return this.animation;
	        },
	        set: function (value) {
	            this.animation = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Size.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
	            if (animation !== undefined) {
	                this.animation.load(animation);
	            }
	            if (data.random !== undefined) {
	                if (typeof data.random === "boolean") {
	                    this.random.enable = data.random;
	                }
	                else {
	                    this.random.load(data.random);
	                }
	            }
	            if (data.value !== undefined) {
	                this.value = data.value;
	            }
	        }
	    };
	    return Size;
	}());
	exports.Size = Size;


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var StartValueType_1 = __webpack_require__(172);
	var DestroyType_1 = __webpack_require__(166);
	var SizeAnimation = (function () {
	    function SizeAnimation() {
	        this.destroy = DestroyType_1.DestroyType.none;
	        this.enable = false;
	        this.minimumValue = 0;
	        this.speed = 5;
	        this.startValue = StartValueType_1.StartValueType.max;
	        this.sync = false;
	    }
	    Object.defineProperty(SizeAnimation.prototype, "size_min", {
	        get: function () {
	            return this.minimumValue;
	        },
	        set: function (value) {
	            this.minimumValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SizeAnimation.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.destroy !== undefined) {
	                this.destroy = data.destroy;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            var minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
	            if (minimumValue !== undefined) {
	                this.minimumValue = minimumValue;
	            }
	            if (data.speed !== undefined) {
	                this.speed = data.speed;
	            }
	            if (data.startValue !== undefined) {
	                this.startValue = data.startValue;
	            }
	            if (data.sync !== undefined) {
	                this.sync = data.sync;
	            }
	        }
	    };
	    return SizeAnimation;
	}());
	exports.SizeAnimation = SizeAnimation;


/***/ }),
/* 510 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SizeRandom = (function () {
	    function SizeRandom() {
	        this.enable = false;
	        this.minimumValue = 1;
	    }
	    SizeRandom.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.minimumValue !== undefined) {
	                this.minimumValue = data.minimumValue;
	            }
	        }
	    };
	    return SizeRandom;
	}());
	exports.SizeRandom = SizeRandom;


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var Stroke = (function () {
	    function Stroke() {
	        this.color = new OptionsColor_1.OptionsColor();
	        this.width = 0;
	        this.opacity = 1;
	        this.color.value = "#ff0000";
	    }
	    Stroke.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            if (data.width !== undefined) {
	                this.width = data.width;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return Stroke;
	}());
	exports.Stroke = Stroke;


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var Trail = (function () {
	    function Trail() {
	        this.enable = false;
	        this.length = 10;
	        this.fillColor = new OptionsColor_1.OptionsColor();
	        this.fillColor.value = "#000000";
	    }
	    Trail.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            this.fillColor = OptionsColor_1.OptionsColor.create(this.fillColor, data.fillColor);
	            if (data.length !== undefined) {
	                this.length = data.length;
	            }
	        }
	    };
	    return Trail;
	}());
	exports.Trail = Trail;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var TwinkleValues_1 = __webpack_require__(514);
	var Twinkle = (function () {
	    function Twinkle() {
	        this.lines = new TwinkleValues_1.TwinkleValues();
	        this.particles = new TwinkleValues_1.TwinkleValues();
	    }
	    Twinkle.prototype.load = function (data) {
	        if (data !== undefined) {
	            this.lines.load(data.lines);
	            this.particles.load(data.particles);
	        }
	    };
	    return Twinkle;
	}());
	exports.Twinkle = Twinkle;


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var TwinkleValues = (function () {
	    function TwinkleValues() {
	        this.enable = false;
	        this.frequency = 0.05;
	        this.opacity = 1;
	    }
	    TwinkleValues.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.color !== undefined) {
	                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            if (data.frequency !== undefined) {
	                this.frequency = data.frequency;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	        }
	    };
	    return TwinkleValues;
	}());
	exports.TwinkleValues = TwinkleValues;


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskDrawStroke_1 = __webpack_require__(519);
	var OptionsColor_1 = __webpack_require__(5);
	var Draw = (function () {
	    function Draw() {
	        this.enable = false;
	        this.stroke = new PolygonMaskDrawStroke_1.PolygonMaskDrawStroke();
	    }
	    Object.defineProperty(Draw.prototype, "lineWidth", {
	        get: function () {
	            return this.stroke.width;
	        },
	        set: function (value) {
	            this.stroke.width = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Draw.prototype, "lineColor", {
	        get: function () {
	            return this.stroke.color;
	        },
	        set: function (value) {
	            this.stroke.color = OptionsColor_1.OptionsColor.create(this.stroke.color, value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Draw.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            var stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
	                color: data.lineColor,
	                width: data.lineWidth,
	            };
	            this.stroke.load(stroke);
	        }
	    };
	    return Draw;
	}());
	exports.Draw = Draw;


/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskMoveType_1 = __webpack_require__(168);
	var Move = (function () {
	    function Move() {
	        this.radius = 10;
	        this.type = PolygonMaskMoveType_1.PolygonMaskMoveType.path;
	    }
	    Move.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.radius !== undefined) {
	                this.radius = data.radius;
	            }
	            if (data.type !== undefined) {
	                this.type = data.type;
	            }
	        }
	    };
	    return Move;
	}());
	exports.Move = Move;


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskInlineArrangement_1 = __webpack_require__(108);
	var PolygonInline = (function () {
	    function PolygonInline() {
	        this.arrangement = PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint;
	    }
	    PolygonInline.prototype.load = function (data) {
	        if (data !== undefined) {
	            if (data.arrangement !== undefined) {
	                this.arrangement = data.arrangement;
	            }
	        }
	    };
	    return PolygonInline;
	}());
	exports.PolygonInline = PolygonInline;


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMaskType_1 = __webpack_require__(62);
	var Draw_1 = __webpack_require__(515);
	var Move_1 = __webpack_require__(516);
	var PolygonInline_1 = __webpack_require__(517);
	var PolygonMask = (function () {
	    function PolygonMask() {
	        this.draw = new Draw_1.Draw();
	        this.enable = false;
	        this.inline = new PolygonInline_1.PolygonInline();
	        this.move = new Move_1.Move();
	        this.scale = 1;
	        this.type = PolygonMaskType_1.PolygonMaskType.none;
	        this.url = "";
	    }
	    Object.defineProperty(PolygonMask.prototype, "inlineArrangement", {
	        get: function () {
	            return this.inline.arrangement;
	        },
	        set: function (value) {
	            this.inline.arrangement = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PolygonMask.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            this.draw.load(data.draw);
	            var inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
	                arrangement: data.inlineArrangement,
	            };
	            if (inline !== undefined) {
	                this.inline.load(inline);
	            }
	            this.move.load(data.move);
	            if (data.scale !== undefined) {
	                this.scale = data.scale;
	            }
	            if (data.type !== undefined) {
	                this.type = data.type;
	            }
	            if (data.enable !== undefined) {
	                this.enable = data.enable;
	            }
	            else {
	                this.enable = this.type !== PolygonMaskType_1.PolygonMaskType.none;
	            }
	            if (data.url !== undefined) {
	                this.url = data.url;
	            }
	            if (data.position !== undefined) {
	                this.position = {
	                    x: data.position.x,
	                    y: data.position.y,
	                };
	            }
	        }
	    };
	    return PolygonMask;
	}());
	exports.PolygonMask = PolygonMask;


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OptionsColor_1 = __webpack_require__(5);
	var ColorUtils_1 = __webpack_require__(15);
	var PolygonMaskDrawStroke = (function () {
	    function PolygonMaskDrawStroke() {
	        this.color = new OptionsColor_1.OptionsColor();
	        this.width = 0.5;
	        this.opacity = 1;
	    }
	    PolygonMaskDrawStroke.prototype.load = function (data) {
	        var _a;
	        if (data !== undefined) {
	            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
	            if (typeof this.color.value === "string") {
	                this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
	            }
	            if (data.opacity !== undefined) {
	                this.opacity = data.opacity;
	            }
	            if (data.width !== undefined) {
	                this.width = data.width;
	            }
	        }
	    };
	    return PolygonMaskDrawStroke;
	}());
	exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ColorUtils_1 = __webpack_require__(15);
	var Utils_1 = __webpack_require__(2);
	var Absorber = (function () {
	    function Absorber(absorbers, options, position) {
	        var _a, _b;
	        this.absorbers = absorbers;
	        this.container = absorbers.container;
	        this.initialPosition = position;
	        this.options = options;
	        var container = this.container;
	        var size = options.size.value * container.retina.pixelRatio;
	        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
	        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
	        if (random) {
	            size = Utils_1.Utils.randomInRange(minSize, size);
	        }
	        this.opacity = this.options.opacity;
	        this.size = size * container.retina.pixelRatio;
	        this.mass = this.size * options.size.density;
	        var limit = options.size.limit;
	        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
	        var color = typeof options.color === "string" ? { value: options.color } : options.color;
	        this.color = (_a = ColorUtils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
	            b: 0,
	            g: 0,
	            r: 0,
	        };
	        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
	    }
	    Absorber.prototype.attract = function (particle, _delta) {
	        var pos = particle.getPosition();
	        var dx = this.position.x - pos.x;
	        var dy = this.position.y - pos.y;
	        var distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
	        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
	        var acceleration = this.mass / Math.pow(distance, 2);
	        if (distance < this.size + particle.size.value) {
	            var sizeFactor = particle.size.value * 0.033;
	            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
	                particle.destroyed = true;
	            }
	            else {
	                particle.size.value -= sizeFactor;
	                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
	                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
	            }
	            if (this.limit === undefined || this.size < this.limit) {
	                this.size += sizeFactor;
	            }
	            this.mass += sizeFactor * this.options.size.density;
	        }
	        else {
	            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
	            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
	        }
	    };
	    Absorber.prototype.resize = function () {
	        var initialPosition = this.initialPosition;
	        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
	            initialPosition :
	            this.calcPosition();
	    };
	    Absorber.prototype.draw = function (context) {
	        context.translate(this.position.x, this.position.y);
	        context.beginPath();
	        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
	        context.closePath();
	        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromColor(this.color, this.opacity);
	        context.fill();
	    };
	    Absorber.prototype.calcPosition = function () {
	        var _a;
	        var container = this.container;
	        var percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
	            x: Math.random() * 100,
	            y: Math.random() * 100,
	        };
	        return {
	            x: percentPosition.x / 100 * container.canvas.size.width,
	            y: percentPosition.y / 100 * container.canvas.size.height,
	        };
	    };
	    return Absorber;
	}());
	exports.Absorber = Absorber;


/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Absorber_1 = __webpack_require__(520);
	var ClickMode_1 = __webpack_require__(9);
	var Utils_1 = __webpack_require__(2);
	var Absorbers = (function () {
	    function Absorbers(container) {
	        this.container = container;
	        this.array = [];
	    }
	    Absorbers.prototype.init = function () {
	        var container = this.container;
	        var options = container.options;
	        if (options.absorbers instanceof Array) {
	            for (var _i = 0, _a = options.absorbers; _i < _a.length; _i++) {
	                var absorberOptions = _a[_i];
	                var absorber = new Absorber_1.Absorber(this, absorberOptions);
	                this.addAbsorber(absorber);
	            }
	        }
	        else {
	            var absorberOptions = options.absorbers;
	            var absorber = new Absorber_1.Absorber(this, absorberOptions);
	            this.addAbsorber(absorber);
	        }
	    };
	    Absorbers.prototype.particleUpdate = function (particle, delta) {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var absorber = _a[_i];
	            absorber.attract(particle, delta);
	            if (particle.destroyed) {
	                break;
	            }
	        }
	    };
	    Absorbers.prototype.draw = function (context) {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var absorber = _a[_i];
	            context.save();
	            absorber.draw(context);
	            context.restore();
	        }
	    };
	    Absorbers.prototype.stop = function () {
	        this.array = [];
	    };
	    Absorbers.prototype.resize = function () {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var absorber = _a[_i];
	            absorber.resize();
	        }
	    };
	    Absorbers.prototype.handleClickMode = function (mode) {
	        var container = this.container;
	        var options = container.options;
	        if (mode === ClickMode_1.ClickMode.absorber) {
	            var absorbersModeOptions = void 0;
	            var modeAbsorbers = options.interactivity.modes.absorbers;
	            if (modeAbsorbers instanceof Array) {
	                if (modeAbsorbers.length > 0) {
	                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
	                }
	            }
	            else {
	                absorbersModeOptions = modeAbsorbers;
	            }
	            var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (options.absorbers instanceof Array ?
	                Utils_1.Utils.itemFromArray(options.absorbers) :
	                options.absorbers);
	            var aPosition = container.interactivity.mouse.clickPosition;
	            var absorber = new Absorber_1.Absorber(this, absorbersOptions, aPosition);
	            this.addAbsorber(absorber);
	        }
	    };
	    Absorbers.prototype.addAbsorber = function (absorber) {
	        this.array.push(absorber);
	    };
	    Absorbers.prototype.removeAbsorber = function (absorber) {
	        var index = this.array.indexOf(absorber);
	        if (index >= 0) {
	            this.array.splice(index, 1);
	        }
	    };
	    return Absorbers;
	}());
	exports.Absorbers = Absorbers;


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Absorbers_1 = __webpack_require__(521);
	var Utils_1 = __webpack_require__(2);
	var ClickMode_1 = __webpack_require__(9);
	var AbsorbersPlugin = (function () {
	    function AbsorbersPlugin() {
	        this.id = "absorbers";
	    }
	    AbsorbersPlugin.prototype.getPlugin = function (container) {
	        return new Absorbers_1.Absorbers(container);
	    };
	    AbsorbersPlugin.prototype.needsPlugin = function (container) {
	        var options = container.options;
	        var absorbers = options.absorbers;
	        var loadAbsorbers = false;
	        if (absorbers instanceof Array) {
	            if (absorbers.length) {
	                loadAbsorbers = true;
	            }
	        }
	        else if (absorbers !== undefined) {
	            loadAbsorbers = true;
	        }
	        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
	            loadAbsorbers = true;
	        }
	        return loadAbsorbers;
	    };
	    return AbsorbersPlugin;
	}());
	exports.AbsorbersPlugin = AbsorbersPlugin;


/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Particle_1 = __webpack_require__(104);
	var Utils_1 = __webpack_require__(2);
	var SizeMode_1 = __webpack_require__(171);
	var EmitterSize_1 = __webpack_require__(175);
	var Emitter = (function () {
	    function Emitter(emitters, emitterOptions, position) {
	        var _a, _b, _c;
	        this.emitters = emitters;
	        this.container = emitters.container;
	        this.initialPosition = position;
	        this.emitterOptions = Utils_1.Utils.deepExtend({}, emitterOptions);
	        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
	        var particlesOptions = Utils_1.Utils.deepExtend({}, this.emitterOptions.particles);
	        if (particlesOptions === undefined) {
	            particlesOptions = {};
	        }
	        if (particlesOptions.move === undefined) {
	            particlesOptions.move = {};
	        }
	        if (particlesOptions.move.direction === undefined) {
	            particlesOptions.move.direction = this.emitterOptions.direction;
	        }
	        this.particlesOptions = particlesOptions;
	        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : (function () {
	            var size = new EmitterSize_1.EmitterSize();
	            size.load({
	                height: 0,
	                width: 0,
	                mode: SizeMode_1.SizeMode.percent,
	            });
	            return size;
	        })();
	        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
	        this.play();
	    }
	    Emitter.prototype.play = function () {
	        var _this = this;
	        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
	            if (this.startInterval === undefined) {
	                this.startInterval = window.setInterval(function () {
	                    _this.emit();
	                }, 1000 * this.emitterOptions.rate.delay);
	            }
	            if (this.lifeCount > 0) {
	                this.prepareToDie();
	            }
	        }
	    };
	    Emitter.prototype.pause = function () {
	        var interval = this.startInterval;
	        if (interval !== undefined) {
	            clearInterval(interval);
	            delete this.startInterval;
	        }
	    };
	    Emitter.prototype.resize = function () {
	        var initialPosition = this.initialPosition;
	        this.position = initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size) ?
	            initialPosition :
	            this.calcPosition();
	    };
	    Emitter.prototype.prepareToDie = function () {
	        var _this = this;
	        var _a;
	        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
	            window.setTimeout(function () {
	                var _a;
	                _this.pause();
	                _this.lifeCount--;
	                if (_this.lifeCount > 0) {
	                    _this.position = _this.calcPosition();
	                    window.setTimeout(function () {
	                        _this.play();
	                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
	                }
	                else {
	                    _this.destroy();
	                }
	            }, this.emitterOptions.life.duration * 1000);
	        }
	    };
	    Emitter.prototype.destroy = function () {
	        this.emitters.removeEmitter(this);
	    };
	    Emitter.prototype.calcPosition = function () {
	        var _a;
	        var container = this.container;
	        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
	            x: Math.random() * 100,
	            y: Math.random() * 100,
	        };
	        return {
	            x: percentPosition.x / 100 * container.canvas.size.width,
	            y: percentPosition.y / 100 * container.canvas.size.height,
	        };
	    };
	    Emitter.prototype.emit = function () {
	        var container = this.container;
	        var position = this.position;
	        var offset = {
	            x: this.size.mode === SizeMode_1.SizeMode.percent ?
	                container.canvas.size.width * this.size.width / 100 :
	                this.size.width,
	            y: this.size.mode === SizeMode_1.SizeMode.percent ?
	                container.canvas.size.height * this.size.height / 100 :
	                this.size.height,
	        };
	        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
	            var particle = new Particle_1.Particle(container, {
	                x: position.x + offset.x * (Math.random() - 0.5),
	                y: position.y + offset.y * (Math.random() - 0.5),
	            }, this.particlesOptions);
	            container.particles.addParticle(particle);
	        }
	    };
	    return Emitter;
	}());
	exports.Emitter = Emitter;


/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Emitter_1 = __webpack_require__(523);
	var ClickMode_1 = __webpack_require__(9);
	var Utils_1 = __webpack_require__(2);
	var Emitters = (function () {
	    function Emitters(container) {
	        this.container = container;
	        this.array = [];
	    }
	    Emitters.prototype.init = function () {
	        var container = this.container;
	        var options = container.options;
	        if (options.emitters instanceof Array) {
	            for (var _i = 0, _a = options.emitters; _i < _a.length; _i++) {
	                var emitterOptions = _a[_i];
	                var emitter = new Emitter_1.Emitter(this, emitterOptions);
	                this.addEmitter(emitter);
	            }
	        }
	        else {
	            var emitterOptions = options.emitters;
	            var emitter = new Emitter_1.Emitter(this, emitterOptions);
	            this.addEmitter(emitter);
	        }
	    };
	    Emitters.prototype.play = function () {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var emitter = _a[_i];
	            emitter.play();
	        }
	    };
	    Emitters.prototype.pause = function () {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var emitter = _a[_i];
	            emitter.pause();
	        }
	    };
	    Emitters.prototype.stop = function () {
	        this.array = [];
	    };
	    Emitters.prototype.handleClickMode = function (mode) {
	        var container = this.container;
	        var options = container.options;
	        if (mode === ClickMode_1.ClickMode.emitter) {
	            var emitterModeOptions = void 0;
	            var modeEmitters = options.interactivity.modes.emitters;
	            if (modeEmitters instanceof Array) {
	                if (modeEmitters.length > 0) {
	                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
	                }
	            }
	            else {
	                emitterModeOptions = modeEmitters;
	            }
	            var emitterOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (options.emitters instanceof Array ?
	                Utils_1.Utils.itemFromArray(options.emitters) :
	                options.emitters);
	            var ePosition = container.interactivity.mouse.clickPosition;
	            var emitter = new Emitter_1.Emitter(this, Utils_1.Utils.deepExtend({}, emitterOptions), ePosition);
	            this.addEmitter(emitter);
	        }
	    };
	    Emitters.prototype.resize = function () {
	        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
	            var emitter = _a[_i];
	            emitter.resize();
	        }
	    };
	    Emitters.prototype.addEmitter = function (emitter) {
	        this.array.push(emitter);
	    };
	    Emitters.prototype.removeEmitter = function (emitter) {
	        var index = this.array.indexOf(emitter);
	        if (index >= 0) {
	            this.array.splice(index, 1);
	        }
	    };
	    return Emitters;
	}());
	exports.Emitters = Emitters;


/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Utils_1 = __webpack_require__(2);
	var ClickMode_1 = __webpack_require__(9);
	var Emitters_1 = __webpack_require__(524);
	var EmittersPlugin = (function () {
	    function EmittersPlugin() {
	        this.id = "emitters";
	    }
	    EmittersPlugin.prototype.getPlugin = function (container) {
	        return new Emitters_1.Emitters(container);
	    };
	    EmittersPlugin.prototype.needsPlugin = function (container) {
	        var options = container.options;
	        var emitters = options.emitters;
	        var loadEmitters = false;
	        if (emitters instanceof Array) {
	            if (emitters.length) {
	                loadEmitters = true;
	            }
	        }
	        else if (emitters !== undefined) {
	            loadEmitters = true;
	        }
	        else if (Utils_1.Utils.isInArray(ClickMode_1.ClickMode.absorber, options.interactivity.events.onClick.mode)) {
	            loadEmitters = true;
	        }
	        return loadEmitters;
	    };
	    return EmittersPlugin;
	}());
	exports.EmittersPlugin = EmittersPlugin;


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var PolygonMaskType_1 = __webpack_require__(62);
	var Particle_1 = __webpack_require__(104);
	var PolygonMaskInlineArrangement_1 = __webpack_require__(108);
	var Utils_1 = __webpack_require__(2);
	var Constants_1 = __webpack_require__(10);
	var ColorUtils_1 = __webpack_require__(15);
	var PolygonMask = (function () {
	    function PolygonMask(container) {
	        this.container = container;
	        this.dimension = {
	            height: 0,
	            width: 0,
	        };
	        this.paths = [];
	        this.path2DSupported = window.hasOwnProperty("Path2D");
	    }
	    PolygonMask.polygonBounce = function (particle) {
	        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
	        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
	    };
	    PolygonMask.drawPolygonMask = function (context, rawData, stroke) {
	        var color = typeof stroke.color === "string" ?
	            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
	            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
	        if (color) {
	            context.beginPath();
	            context.moveTo(rawData[0].x, rawData[0].y);
	            for (var i = 1; i < rawData.length; i++) {
	                context.lineTo(rawData[i].x, rawData[i].y);
	            }
	            context.closePath();
	            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color);
	            context.lineWidth = stroke.width;
	            context.stroke();
	        }
	    };
	    PolygonMask.drawPolygonMaskPath = function (context, path, stroke, position) {
	        context.translate(position.x, position.y);
	        var color = typeof stroke.color === "string" ?
	            ColorUtils_1.ColorUtils.stringToRgb(stroke.color) :
	            ColorUtils_1.ColorUtils.colorToRgb(stroke.color);
	        if (color) {
	            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(color, stroke.opacity);
	            context.lineWidth = stroke.width;
	            context.stroke(path);
	        }
	    };
	    PolygonMask.prototype.checkInsidePolygon = function (position) {
	        var container = this.container;
	        var options = container.options;
	        if (!options.polygon.enable ||
	            options.polygon.type === PolygonMaskType_1.PolygonMaskType.none ||
	            options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
	            return true;
	        }
	        if (!this.raw) {
	            throw new Error(Constants_1.Constants.noPolygonFound);
	        }
	        var x = position ? position.x : Math.random() * container.canvas.size.width;
	        var y = position ? position.y : Math.random() * container.canvas.size.height;
	        var inside = false;
	        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
	            var xi = this.raw[i].x;
	            var yi = this.raw[i].y;
	            var xj = this.raw[j].x;
	            var yj = this.raw[j].y;
	            var intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
	            if (intersect) {
	                inside = !inside;
	            }
	        }
	        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inside) {
	            return inside;
	        }
	        else if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.outside) {
	            return !inside;
	        }
	        return false;
	    };
	    PolygonMask.prototype.resize = function () {
	        var _this = this;
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none) {
	            if (this.redrawTimeout) {
	                clearTimeout(this.redrawTimeout);
	            }
	            this.redrawTimeout = window.setTimeout(function () {
	                _this.parseSvgPathToPolygon().then(function (data) {
	                    _this.raw = data;
	                    _this.createPath2D();
	                    container.particles.redraw();
	                });
	            }, 250);
	        }
	    };
	    PolygonMask.prototype.startAsync = function () {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var container, options, _a;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        container = this.container;
	                        options = container.options;
	                        if (!(options.polygon.enable && options.polygon.url)) return [3, 2];
	                        _a = this;
	                        return [4, this.parseSvgPathToPolygon(options.polygon.url)];
	                    case 1:
	                        _a.raw = _b.sent();
	                        this.createPath2D();
	                        _b.label = 2;
	                    case 2: return [2];
	                }
	            });
	        });
	    };
	    PolygonMask.prototype.stop = function () {
	        delete this.raw;
	        this.paths = [];
	        delete this.svg;
	    };
	    PolygonMask.prototype.randomPointInPolygon = function () {
	        var container = this.container;
	        var options = container.options;
	        var position;
	        if (options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
	            switch (options.polygon.inline.arrangement) {
	                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomPoint:
	                    position = this.getRandomPointOnPolygonPath();
	                    break;
	                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.randomLength:
	                    position = this.getRandomPointOnPolygonPathByLength();
	                    break;
	                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.equidistant:
	                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
	                    break;
	                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint:
	                case PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint:
	                default:
	                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
	            }
	        }
	        else {
	            position = {
	                x: Math.random() * container.canvas.size.width,
	                y: Math.random() * container.canvas.size.height,
	            };
	        }
	        if (this.checkInsidePolygon(position)) {
	            return position;
	        }
	        else {
	            return this.randomPointInPolygon();
	        }
	    };
	    PolygonMask.prototype.particlesInitialization = function () {
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline &&
	            (options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.onePerPoint ||
	                options.polygon.inline.arrangement === PolygonMaskInlineArrangement_1.PolygonMaskInlineArrangement.perPoint)) {
	            this.drawPointsOnPolygonPath();
	            return true;
	        }
	        return false;
	    };
	    PolygonMask.prototype.particlePosition = function (position) {
	        var _a, _b;
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
	            var pos = { x: 0, y: 0 };
	            if (position) {
	                pos.x = position.x;
	                pos.y = position.y;
	            }
	            else {
	                var randomPoint = this.randomPointInPolygon();
	                pos.x = randomPoint.x;
	                pos.y = randomPoint.y;
	            }
	            return pos;
	        }
	    };
	    PolygonMask.prototype.particleBounce = function (particle, _delta) {
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
	            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
	            if (!this.checkInsidePolygon(particle.position)) {
	                PolygonMask.polygonBounce(particle);
	                return true;
	            }
	        }
	        else if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
	            if (particle.initialPosition) {
	                var dist = Utils_1.Utils.getDistance(particle.initialPosition, particle.position);
	                if (dist > container.retina.polygonMaskMoveRadius) {
	                    PolygonMask.polygonBounce(particle);
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	    PolygonMask.prototype.clickPositionValid = function (position) {
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
	            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
	            if (this.checkInsidePolygon(position)) {
	                return true;
	            }
	        }
	        return false;
	    };
	    PolygonMask.prototype.parseSvgPathToPolygon = function (svgUrl) {
	        var _a;
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            var container, options, url, req, xml, parser, doc, svgPaths, i, path, pxRatio, scale, position, polygonRaw, _i, _b, path, len, p, i, segment, absSeg, relSeg;
	            return tslib_1.__generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        container = this.container;
	                        options = container.options;
	                        url = svgUrl || options.polygon.url;
	                        if (!(!this.paths.length || !this.svg)) return [3, 4];
	                        return [4, fetch(url)];
	                    case 1:
	                        req = _c.sent();
	                        if (!req.ok) return [3, 3];
	                        return [4, req.text()];
	                    case 2:
	                        xml = _c.sent();
	                        parser = new DOMParser();
	                        doc = parser.parseFromString(xml, "image/svg+xml");
	                        this.svg = doc.getElementsByTagName("svg")[0];
	                        svgPaths = doc.getElementsByTagName("path");
	                        for (i = 0; i < svgPaths.length; i++) {
	                            path = svgPaths.item(i);
	                            if (path) {
	                                this.paths.push({
	                                    element: path,
	                                    length: path.getTotalLength(),
	                                });
	                            }
	                        }
	                        return [3, 4];
	                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
	                    case 4:
	                        pxRatio = container.retina.pixelRatio;
	                        scale = options.polygon.scale / pxRatio;
	                        this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
	                        this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
	                        position = (_a = options.polygon.position) !== null && _a !== void 0 ? _a : {
	                            x: 50,
	                            y: 50,
	                        };
	                        this.offset = {
	                            x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
	                            y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2,
	                        };
	                        polygonRaw = [];
	                        for (_i = 0, _b = this.paths; _i < _b.length; _i++) {
	                            path = _b[_i];
	                            len = path.element.pathSegList.numberOfItems;
	                            p = {
	                                x: 0,
	                                y: 0,
	                            };
	                            for (i = 0; i < len; i++) {
	                                segment = path.element.pathSegList.getItem(i);
	                                switch (segment.pathSegType) {
	                                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
	                                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
	                                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
	                                        absSeg = segment;
	                                        p.x = absSeg.x;
	                                        p.y = absSeg.y;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
	                                        p.x = segment.x;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
	                                        p.y = segment.y;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
	                                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
	                                    case window.SVGPathSeg.PATHSEG_ARC_REL:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
	                                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
	                                        relSeg = segment;
	                                        p.x += relSeg.x;
	                                        p.y += relSeg.y;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
	                                        p.x += segment.x;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
	                                        p.y += segment.y;
	                                        break;
	                                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
	                                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
	                                        continue;
	                                }
	                                polygonRaw.push({
	                                    x: p.x * scale + this.offset.x,
	                                    y: p.y * scale + this.offset.y,
	                                });
	                            }
	                        }
	                        return [2, polygonRaw];
	                }
	            });
	        });
	    };
	    PolygonMask.prototype.draw = function (context) {
	        var container = this.container;
	        var options = container.options;
	        if (options.polygon.enable && options.polygon.draw.enable) {
	            var container_1 = this.container;
	            var options_1 = container_1.options;
	            var polygonDraw = options_1.polygon.draw;
	            var rawData = this.raw;
	            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
	                var path = _a[_i];
	                var path2d = path.path2d;
	                var path2dSupported = this.path2DSupported;
	                if (context) {
	                    if (path2dSupported && path2d && this.offset) {
	                        PolygonMask.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
	                    }
	                    else if (rawData) {
	                        PolygonMask.drawPolygonMask(context, rawData, polygonDraw.stroke);
	                    }
	                }
	            }
	        }
	    };
	    PolygonMask.prototype.drawPointsOnPolygonPath = function () {
	        var container = this.container;
	        if (this.raw) {
	            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
	                var item = _a[_i];
	                var position = {
	                    x: item.x,
	                    y: item.y,
	                };
	                container.particles.addParticle(new Particle_1.Particle(container, position));
	            }
	        }
	    };
	    PolygonMask.prototype.getRandomPointOnPolygonPath = function () {
	        if (!this.raw || !this.raw.length)
	            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
	        var coords = Utils_1.Utils.itemFromArray(this.raw);
	        return {
	            x: coords.x,
	            y: coords.y,
	        };
	    };
	    PolygonMask.prototype.getRandomPointOnPolygonPathByLength = function () {
	        var _a, _b;
	        var container = this.container;
	        var options = container.options;
	        if (!this.raw || !this.raw.length || !this.paths.length)
	            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
	        var path = Utils_1.Utils.itemFromArray(this.paths);
	        var distance = Math.floor(Math.random() * path.length) + 1;
	        var point = path.element.getPointAtLength(distance);
	        return {
	            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
	            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
	        };
	    };
	    PolygonMask.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
	        var _a, _b, _c, _d, _e, _f;
	        var container = this.container;
	        var options = container.options;
	        if (!this.raw || !this.raw.length || !this.paths.length)
	            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
	        var offset = 0;
	        var point;
	        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
	        var distance = totalLength / options.particles.number.value;
	        for (var _i = 0, _g = this.paths; _i < _g.length; _i++) {
	            var path = _g[_i];
	            var pathDistance = distance * index - offset;
	            if (pathDistance <= path.length) {
	                point = path.element.getPointAtLength(pathDistance);
	                break;
	            }
	            else {
	                offset += path.length;
	            }
	        }
	        return {
	            x: ((_a = point === null || point === void 0 ? void 0 : point.x) !== null && _a !== void 0 ? _a : 0) * options.polygon.scale + ((_c = (_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0),
	            y: ((_d = point === null || point === void 0 ? void 0 : point.y) !== null && _d !== void 0 ? _d : 0) * options.polygon.scale + ((_f = (_e = this.offset) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0),
	        };
	    };
	    PolygonMask.prototype.getPointOnPolygonPathByIndex = function (index) {
	        if (!this.raw || !this.raw.length)
	            throw new Error(Constants_1.Constants.noPolygonDataLoaded);
	        var coords = this.raw[index % this.raw.length];
	        return {
	            x: coords.x,
	            y: coords.y,
	        };
	    };
	    PolygonMask.prototype.createPath2D = function () {
	        var _a;
	        if (!this.path2DSupported) {
	            return;
	        }
	        var _loop_1 = function (path) {
	            var pathData = (_a = path.element) === null || _a === void 0 ? void 0 : _a.getAttribute("d");
	            if (pathData) {
	                var path2d = new Path2D(pathData);
	                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
	                var finalPath = new Path2D();
	                var transform = matrix.scale(this_1.container.options.polygon.scale);
	                if (finalPath.addPath) {
	                    finalPath.addPath(path2d, transform);
	                    path.path2d = finalPath;
	                }
	                else {
	                    delete path.path2d;
	                }
	            }
	            else {
	                delete path.path2d;
	            }
	            if (!path.path2d && this_1.raw) {
	                path.path2d = new Path2D();
	                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
	                this_1.raw.forEach(function (pos, i) {
	                    var _a;
	                    if (i > 0) {
	                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
	                    }
	                });
	                path.path2d.closePath();
	            }
	        };
	        var this_1 = this;
	        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
	            var path = _b[_i];
	            _loop_1(path);
	        }
	    };
	    return PolygonMask;
	}());
	exports.PolygonMask = PolygonMask;


/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PolygonMask_1 = __webpack_require__(526);
	var PolygonMaskPlugin = (function () {
	    function PolygonMaskPlugin() {
	        this.id = "polygonMask";
	    }
	    PolygonMaskPlugin.prototype.getPlugin = function (container) {
	        return new PolygonMask_1.PolygonMask(container);
	    };
	    PolygonMaskPlugin.prototype.needsPlugin = function (container) {
	        var options = container.options;
	        return options.polygon.enable;
	    };
	    return PolygonMaskPlugin;
	}());
	exports.PolygonMaskPlugin = PolygonMaskPlugin;


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ColorUtils_1 = __webpack_require__(15);
	var CanvasUtils = (function () {
	    function CanvasUtils() {
	    }
	    CanvasUtils.paintBase = function (context, dimension, baseColor) {
	        context.save();
	        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
	        context.fillRect(0, 0, dimension.width, dimension.height);
	        context.restore();
	    };
	    CanvasUtils.clear = function (context, dimension) {
	        context.clearRect(0, 0, dimension.width, dimension.height);
	    };
	    CanvasUtils.drawLinkedLine = function (context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
	        context.beginPath();
	        context.moveTo(begin.x, begin.y);
	        context.lineTo(end.x, end.y);
	        context.closePath();
	        context.lineWidth = width;
	        if (backgroundMask) {
	            context.globalCompositeOperation = 'destination-out';
	        }
	        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
	        if (shadow.enable) {
	            var shadowColor = typeof shadow.color === "string" ?
	                ColorUtils_1.ColorUtils.stringToRgb(shadow.color) :
	                ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
	            if (shadowColor) {
	                context.shadowBlur = shadow.blur;
	                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
	            }
	        }
	        context.stroke();
	    };
	    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
	        context.save();
	        context.beginPath();
	        context.moveTo(begin.x, begin.y);
	        context.lineTo(end.x, end.y);
	        context.closePath();
	        context.lineWidth = width;
	        context.strokeStyle = lineStyle;
	        context.stroke();
	        context.restore();
	    };
	    CanvasUtils.gradient = function (context, p1, p2, opacity) {
	        var gradStop = Math.floor(p2.size.value / p1.size.value);
	        if (!p1.color || !p2.color) {
	            return;
	        }
	        var sourcePos = p1.getPosition();
	        var destPos = p2.getPosition();
	        var midRgb = ColorUtils_1.ColorUtils.mix(p1.color, p2.color, p1.size.value, p2.size.value);
	        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
	        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromColor(p1.color, opacity));
	        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromColor(midRgb, opacity));
	        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromColor(p2.color, opacity));
	        return grad;
	    };
	    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
	        context.save();
	        context.beginPath();
	        context.moveTo(begin.x, begin.y);
	        context.lineTo(end.x, end.y);
	        context.closePath();
	        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(colorLine, opacity);
	        context.lineWidth = width;
	        context.stroke();
	        context.restore();
	    };
	    CanvasUtils.drawParticle = function (container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
	        var pos = particle.getPosition();
	        context.save();
	        context.translate(pos.x, pos.y);
	        context.beginPath();
	        if (particle.angle !== 0) {
	            context.rotate(particle.angle * Math.PI / 180);
	        }
	        if (backgroundMask) {
	            context.globalCompositeOperation = "destination-out";
	        }
	        var shadowColor = particle.shadowColor;
	        if (shadow.enable && shadowColor) {
	            context.shadowBlur = shadow.blur;
	            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromColor(shadowColor);
	            context.shadowOffsetX = shadow.offset.x;
	            context.shadowOffsetY = shadow.offset.y;
	        }
	        context.fillStyle = colorValue;
	        var stroke = particle.stroke;
	        if (stroke.width > 0 && particle.strokeColor) {
	            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
	            context.lineWidth = stroke.width;
	        }
	        this.drawShape(container, context, particle, radius, opacity, delta);
	        if (particle.close) {
	            context.closePath();
	        }
	        if (stroke.width > 0 && particle.strokeColor) {
	            context.stroke();
	        }
	        if (particle.fill) {
	            context.fill();
	        }
	        context.restore();
	        context.save();
	        context.translate(pos.x, pos.y);
	        if (particle.angle !== 0) {
	            context.rotate(particle.angle * Math.PI / 180);
	        }
	        if (backgroundMask) {
	            context.globalCompositeOperation = "destination-out";
	        }
	        this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
	        context.restore();
	    };
	    CanvasUtils.drawShape = function (container, context, particle, radius, opacity, delta) {
	        if (!particle.shape) {
	            return;
	        }
	        var drawer = container.drawers[particle.shape];
	        if (!drawer) {
	            return;
	        }
	        drawer.draw(context, particle, radius, opacity, delta);
	    };
	    CanvasUtils.drawShapeAfterEffect = function (container, context, particle, radius, opacity, delta) {
	        if (!particle.shape) {
	            return;
	        }
	        var drawer = container.drawers[particle.shape];
	        if (!drawer) {
	            return;
	        }
	        if (drawer.afterEffect !== undefined) {
	            drawer.afterEffect(context, particle, radius, opacity, delta);
	        }
	    };
	    CanvasUtils.drawPlugin = function (context, plugin, delta) {
	        context.save();
	        if (plugin.draw !== undefined) {
	            plugin.draw(context, delta);
	        }
	        context.restore();
	    };
	    return CanvasUtils;
	}());
	exports.CanvasUtils = CanvasUtils;


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClickMode_1 = __webpack_require__(9);
	var InteractivityDetect_1 = __webpack_require__(106);
	var Constants_1 = __webpack_require__(10);
	var EventListeners = (function () {
	    function EventListeners(container) {
	        var _this = this;
	        this.container = container;
	        this.canPush = true;
	        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
	        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
	        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
	        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
	        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
	        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
	        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
	        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
	        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
	        this.resizeHandler = function () { return _this.handleWindowResize(); };
	    }
	    EventListeners.manageListener = function (element, event, handler, add, options) {
	        if (add) {
	            var addOptions = { passive: true };
	            if (typeof options === "boolean") {
	                addOptions.capture = options;
	            }
	            else if (options !== undefined) {
	                addOptions = options;
	            }
	            EventListeners.addListener(element, event, handler, addOptions);
	        }
	        else {
	            EventListeners.removeListener(element, event, handler, options);
	        }
	    };
	    EventListeners.addListener = function (element, event, handler, options) {
	        element.addEventListener(event, handler, options);
	    };
	    EventListeners.removeListener = function (element, event, handler, options) {
	        element.removeEventListener(event, handler, options);
	    };
	    EventListeners.prototype.addListeners = function () {
	        this.manageListeners(true);
	    };
	    EventListeners.prototype.removeListeners = function () {
	        this.manageListeners(false);
	    };
	    EventListeners.prototype.manageListeners = function (add) {
	        var container = this.container;
	        var options = container.options;
	        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
	            container.interactivity.element = window;
	        }
	        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
	            container.interactivity.element = container.canvas.element.parentNode;
	        }
	        else {
	            container.interactivity.element = container.canvas.element;
	        }
	        var interactivityEl = container.interactivity.element;
	        if (interactivityEl && (options.interactivity.events.onHover.enable ||
	            options.interactivity.events.onClick.enable)) {
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
	            if (!options.interactivity.events.onClick.enable) {
	                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
	            }
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
	        }
	        if (options.interactivity.events.onClick.enable && interactivityEl) {
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
	            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
	        }
	        if (options.interactivity.events.resize) {
	            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
	        }
	        if (document) {
	            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
	        }
	    };
	    EventListeners.prototype.handleWindowResize = function () {
	        var container = this.container;
	        var options = container.options;
	        if (!container.canvas.element) {
	            return;
	        }
	        container.canvas.size.width = container.canvas.element.offsetWidth;
	        container.canvas.size.height = container.canvas.element.offsetHeight;
	        if (container.retina.isRetina) {
	            container.canvas.size.width *= container.retina.pixelRatio;
	            container.canvas.size.height *= container.retina.pixelRatio;
	        }
	        container.canvas.element.width = container.canvas.size.width;
	        container.canvas.element.height = container.canvas.size.height;
	        if (!options.particles.move.enable) {
	            container.particles.redraw();
	        }
	        container.densityAutoParticles();
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            if (plugin.resize !== undefined) {
	                plugin.resize();
	            }
	        }
	    };
	    EventListeners.prototype.handleVisibilityChange = function () {
	        var container = this.container;
	        var options = container.options;
	        if (!options.pauseOnBlur) {
	            return;
	        }
	        if (document === null || document === void 0 ? void 0 : document.hidden) {
	            container.pageHidden = true;
	            container.pause();
	        }
	        else {
	            container.pageHidden = false;
	            if (container.getAnimationStatus()) {
	                container.play(true);
	            }
	            else {
	                container.draw();
	            }
	        }
	    };
	    EventListeners.prototype.mouseTouchMove = function (e) {
	        var _a, _b, _c, _d;
	        var container = this.container;
	        var options = container.options;
	        var pos;
	        if (e.type.startsWith("mouse")) {
	            this.canPush = true;
	            var mouseEvent = e;
	            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
	                return;
	            }
	            if (container.interactivity.element === window) {
	                if (container.canvas.element) {
	                    var clientRect = container.canvas.element.getBoundingClientRect();
	                    pos = {
	                        x: mouseEvent.clientX - clientRect.left,
	                        y: mouseEvent.clientY - clientRect.top,
	                    };
	                }
	            }
	            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
	                var source = mouseEvent.target;
	                var target = mouseEvent.currentTarget;
	                if (source && target) {
	                    var sourceRect = source.getBoundingClientRect();
	                    var targetRect = target.getBoundingClientRect();
	                    pos = {
	                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
	                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
	                    };
	                }
	                else {
	                    pos = {
	                        x: mouseEvent.offsetX || mouseEvent.clientX,
	                        y: mouseEvent.offsetY || mouseEvent.clientY,
	                    };
	                }
	            }
	            else {
	                if (mouseEvent.target === container.canvas.element) {
	                    pos = {
	                        x: mouseEvent.offsetX || mouseEvent.clientX,
	                        y: mouseEvent.offsetY || mouseEvent.clientY,
	                    };
	                }
	            }
	        }
	        else {
	            this.canPush = e.type !== "touchmove";
	            var touchEvent = e;
	            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
	            var canvasRect = (_b = container.canvas.element) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
	            pos = {
	                x: lastTouch.clientX - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _c !== void 0 ? _c : 0),
	                y: lastTouch.clientY - ((_d = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _d !== void 0 ? _d : 0),
	            };
	        }
	        container.interactivity.mouse.position = pos;
	        if (container.retina.isRetina && container.interactivity.mouse.position) {
	            container.interactivity.mouse.position.x *= container.retina.pixelRatio;
	            container.interactivity.mouse.position.y *= container.retina.pixelRatio;
	        }
	        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
	    };
	    EventListeners.prototype.mouseTouchFinish = function () {
	        var container = this.container;
	        delete container.interactivity.mouse.position;
	        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
	    };
	    EventListeners.prototype.mouseTouchClick = function (e) {
	        var container = this.container;
	        var options = container.options;
	        var handled = false;
	        var mousePosition = container.interactivity.mouse.position;
	        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
	            return;
	        }
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            if (plugin.clickPositionValid !== undefined) {
	                handled = plugin.clickPositionValid(mousePosition);
	                if (handled) {
	                    break;
	                }
	            }
	        }
	        if (!handled) {
	            this.doMouseTouchClick(e);
	        }
	    };
	    EventListeners.prototype.doMouseTouchClick = function (e) {
	        var _this = this;
	        var container = this.container;
	        var options = container.options;
	        if (this.canPush) {
	            if (container.interactivity.mouse.position) {
	                container.interactivity.mouse.clickPosition = {
	                    x: container.interactivity.mouse.position.x,
	                    y: container.interactivity.mouse.position.y,
	                };
	            }
	            else {
	                return;
	            }
	            container.interactivity.mouse.clickTime = new Date().getTime();
	            if (options.interactivity.events.onClick.mode instanceof Array) {
	                for (var _i = 0, _a = options.interactivity.events.onClick.mode; _i < _a.length; _i++) {
	                    var mode = _a[_i];
	                    this.handleClickMode(mode);
	                }
	            }
	            else {
	                var mode = options.interactivity.events.onClick.mode;
	                this.handleClickMode(mode);
	            }
	        }
	        if (e.type === "touchend") {
	            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
	        }
	    };
	    EventListeners.prototype.handleClickMode = function (mode) {
	        var container = this.container;
	        var options = container.options;
	        var pushNb = options.interactivity.modes.push.quantity;
	        var removeNb = options.interactivity.modes.remove.quantity;
	        switch (mode) {
	            case ClickMode_1.ClickMode.push:
	                if (options.particles.move.enable) {
	                    container.particles.push(pushNb, container.interactivity.mouse);
	                }
	                else {
	                    if (options.interactivity.modes.push.quantity === 1) {
	                        container.particles.push(pushNb, container.interactivity.mouse);
	                    }
	                    else if (options.interactivity.modes.push.quantity > 1) {
	                        container.particles.push(pushNb);
	                    }
	                }
	                break;
	            case ClickMode_1.ClickMode.remove:
	                container.particles.removeQuantity(removeNb);
	                break;
	            case ClickMode_1.ClickMode.bubble:
	                container.bubble.clicking = true;
	                break;
	            case ClickMode_1.ClickMode.repulse:
	                container.repulse.clicking = true;
	                container.repulse.count = 0;
	                for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
	                    var particle = _a[_i];
	                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
	                    particle.velocity.vertical = particle.initialVelocity.vertical;
	                }
	                container.repulse.particles = [];
	                container.repulse.finish = false;
	                setTimeout(function () {
	                    if (!container.destroyed) {
	                        container.repulse.clicking = false;
	                    }
	                }, options.interactivity.modes.repulse.duration * 1000);
	                break;
	        }
	        for (var id in container.plugins) {
	            var plugin = container.plugins[id];
	            if (plugin.handleClickMode) {
	                plugin.handleClickMode(mode);
	            }
	        }
	    };
	    return EventListeners;
	}());
	exports.EventListeners = EventListeners;


/***/ }),
/* 530 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Point = (function () {
	    function Point(x, y, particle) {
	        this.position = {
	            x: x,
	            y: y,
	        };
	        this.particle = particle;
	    }
	    return Point;
	}());
	exports.Point = Point;


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Rectangle_1 = __webpack_require__(180);
	var QuadTree = (function () {
	    function QuadTree(rectangle, capacity) {
	        this.rectangle = rectangle;
	        this.capacity = capacity;
	        this.points = [];
	        this.divided = false;
	    }
	    QuadTree.prototype.subdivide = function () {
	        var x = this.rectangle.position.x;
	        var y = this.rectangle.position.y;
	        var w = this.rectangle.size.width;
	        var h = this.rectangle.size.height;
	        this.northEast = new QuadTree(new Rectangle_1.Rectangle(x, y, w / 2, h / 2), this.capacity);
	        this.northWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y, w / 2, h / 2), this.capacity);
	        this.southEast = new QuadTree(new Rectangle_1.Rectangle(x, y + h / 2, w / 2, h / 2), this.capacity);
	        this.southWest = new QuadTree(new Rectangle_1.Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), this.capacity);
	        this.divided = true;
	    };
	    QuadTree.prototype.insert = function (point) {
	        var _a, _b, _c, _d;
	        if (!this.rectangle.contains(point.position)) {
	            return false;
	        }
	        if (this.points.length < this.capacity) {
	            this.points.push(point);
	            return true;
	        }
	        else {
	            if (!this.divided) {
	                this.subdivide();
	            }
	        }
	        if ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) {
	            return true;
	        }
	        else if ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) {
	            return true;
	        }
	        else if ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) {
	            return true;
	        }
	        else if ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point)) {
	            return true;
	        }
	        return false;
	    };
	    QuadTree.prototype.query = function (range, found) {
	        var _a, _b, _c, _d;
	        var res = found !== null && found !== void 0 ? found : [];
	        if (!range.intersects(this.rectangle)) {
	            return [];
	        }
	        else {
	            for (var _i = 0, _e = this.points; _i < _e.length; _i++) {
	                var p = _e[_i];
	                if (range.contains(p.position)) {
	                    res.push(p.particle);
	                }
	            }
	            if (this.divided) {
	                (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
	                (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
	                (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
	                (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
	            }
	        }
	        return res;
	    };
	    return QuadTree;
	}());
	exports.QuadTree = QuadTree;


/***/ }),
/* 532 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var F3 = 1.0 / 3.0;
	var G3 = 1.0 / 6.0;
	var grad3 = new Float32Array([
	    1, 1, 0,
	    -1, 1, 0,
	    1, -1, 0,
	    -1, -1, 0,
	    1, 0, 1,
	    -1, 0, 1,
	    1, 0, -1,
	    -1, 0, -1,
	    0, 1, 1,
	    0, -1, 1,
	    0, 1, -1,
	    0, -1, -1,
	]);
	var buildPermutationTable = function (random) {
	    var p = new Uint8Array(256);
	    for (var i = 0; i < 256; i++) {
	        p[i] = i;
	    }
	    for (var i = 0; i < 255; i++) {
	        var r = i + ~~(random() * (256 - i));
	        var aux = p[i];
	        p[i] = p[r];
	        p[r] = aux;
	    }
	    return p;
	};
	var SimplexNoise = (function () {
	    function SimplexNoise(random) {
	        var randomFunc = random !== null && random !== void 0 ? random : Math.random;
	        this.p = buildPermutationTable(randomFunc);
	        this.perm = new Uint8Array(512);
	        this.permMod12 = new Uint8Array(512);
	        for (var i = 0; i < 512; i++) {
	            this.perm[i] = this.p[i & 255];
	            this.permMod12[i] = this.perm[i] % 12;
	        }
	    }
	    SimplexNoise.prototype.noise3D = function (xin, yin, zin) {
	        var permMod12 = this.permMod12;
	        var perm = this.perm;
	        var n0, n1, n2, n3;
	        var s = (xin + yin + zin) * F3;
	        var i = Math.floor(xin + s);
	        var j = Math.floor(yin + s);
	        var k = Math.floor(zin + s);
	        var t = (i + j + k) * G3;
	        var X0 = i - t;
	        var Y0 = j - t;
	        var Z0 = k - t;
	        var x0 = xin - X0;
	        var y0 = yin - Y0;
	        var z0 = zin - Z0;
	        var i1, j1, k1;
	        var i2, j2, k2;
	        if (x0 >= y0) {
	            if (y0 >= z0) {
	                i1 = 1;
	                j1 = 0;
	                k1 = 0;
	                i2 = 1;
	                j2 = 1;
	                k2 = 0;
	            }
	            else if (x0 >= z0) {
	                i1 = 1;
	                j1 = 0;
	                k1 = 0;
	                i2 = 1;
	                j2 = 0;
	                k2 = 1;
	            }
	            else {
	                i1 = 0;
	                j1 = 0;
	                k1 = 1;
	                i2 = 1;
	                j2 = 0;
	                k2 = 1;
	            }
	        }
	        else {
	            if (y0 < z0) {
	                i1 = 0;
	                j1 = 0;
	                k1 = 1;
	                i2 = 0;
	                j2 = 1;
	                k2 = 1;
	            }
	            else if (x0 < z0) {
	                i1 = 0;
	                j1 = 1;
	                k1 = 0;
	                i2 = 0;
	                j2 = 1;
	                k2 = 1;
	            }
	            else {
	                i1 = 0;
	                j1 = 1;
	                k1 = 0;
	                i2 = 1;
	                j2 = 1;
	                k2 = 0;
	            }
	        }
	        var x1 = x0 - i1 + G3;
	        var y1 = y0 - j1 + G3;
	        var z1 = z0 - k1 + G3;
	        var x2 = x0 - i2 + 2.0 * G3;
	        var y2 = y0 - j2 + 2.0 * G3;
	        var z2 = z0 - k2 + 2.0 * G3;
	        var x3 = x0 - 1.0 + 3.0 * G3;
	        var y3 = y0 - 1.0 + 3.0 * G3;
	        var z3 = z0 - 1.0 + 3.0 * G3;
	        var ii = i & 255;
	        var jj = j & 255;
	        var kk = k & 255;
	        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
	        if (t0 < 0) {
	            n0 = 0.0;
	        }
	        else {
	            var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
	            t0 *= t0;
	            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
	        }
	        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
	        if (t1 < 0) {
	            n1 = 0.0;
	        }
	        else {
	            var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
	            t1 *= t1;
	            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
	        }
	        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
	        if (t2 < 0) {
	            n2 = 0.0;
	        }
	        else {
	            var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
	            t2 *= t2;
	            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
	        }
	        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
	        if (t3 < 0) {
	            n3 = 0.0;
	        }
	        else {
	            var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
	            t3 *= t3;
	            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
	        }
	        return 32.0 * (n0 + n1 + n2 + n3);
	    };
	    return SimplexNoise;
	}());
	exports.SimplexNoise = SimplexNoise;


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AbsorbersPlugin_1 = __webpack_require__(522);
	var EmittersPlugin_1 = __webpack_require__(525);
	var PolygonMaskPlugin_1 = __webpack_require__(527);
	var index_slim_1 = __webpack_require__(534);
	exports.particlesJS = index_slim_1.particlesJS;
	exports.pJSDom = index_slim_1.pJSDom;
	exports.tsParticles = index_slim_1.tsParticles;
	index_slim_1.tsParticles.addPlugin(new AbsorbersPlugin_1.AbsorbersPlugin());
	index_slim_1.tsParticles.addPlugin(new EmittersPlugin_1.EmittersPlugin());
	index_slim_1.tsParticles.addPlugin(new PolygonMaskPlugin_1.PolygonMaskPlugin());


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(4);
	var Loader_1 = __webpack_require__(440);
	var ShapeType_1 = __webpack_require__(31);
	var LineDrawer_1 = __webpack_require__(453);
	var CircleDrawer_1 = __webpack_require__(451);
	var SquareDrawer_1 = __webpack_require__(455);
	var TriangleDrawer_1 = __webpack_require__(458);
	var StarDrawer_1 = __webpack_require__(456);
	var PolygonDrawer_1 = __webpack_require__(454);
	var TextDrawer_1 = __webpack_require__(457);
	var ImageDrawer_1 = __webpack_require__(452);
	var Plugins_1 = __webpack_require__(64);
	var Main = (function () {
	    function Main() {
	        this.initialized = false;
	        if (typeof window !== "undefined" && window) {
	            window.customRequestAnimationFrame = (function () {
	                return window.requestAnimationFrame ||
	                    window.webkitRequestAnimationFrame ||
	                    window.mozRequestAnimationFrame ||
	                    window.oRequestAnimationFrame ||
	                    window.msRequestAnimationFrame ||
	                    (function (callback) { return window.setTimeout(callback, 1000 / 60); });
	            })();
	            window.customCancelRequestAnimationFrame = (function () {
	                return window.cancelAnimationFrame ||
	                    window.webkitCancelRequestAnimationFrame ||
	                    window.mozCancelRequestAnimationFrame ||
	                    window.oCancelRequestAnimationFrame ||
	                    window.msCancelRequestAnimationFrame ||
	                    clearTimeout;
	            })();
	        }
	        var squareDrawer = new SquareDrawer_1.SquareDrawer();
	        var textDrawer = new TextDrawer_1.TextDrawer();
	        var imageDrawer = new ImageDrawer_1.ImageDrawer();
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.line, new LineDrawer_1.LineDrawer());
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.circle, new CircleDrawer_1.CircleDrawer());
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.edge, squareDrawer);
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.square, squareDrawer);
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.triangle, new TriangleDrawer_1.TriangleDrawer());
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.star, new StarDrawer_1.StarDrawer());
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.polygon, new PolygonDrawer_1.PolygonDrawer());
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.char, textDrawer);
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.character, textDrawer);
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.image, imageDrawer);
	        Plugins_1.Plugins.addShapeDrawer(ShapeType_1.ShapeType.images, imageDrawer);
	    }
	    Main.prototype.init = function () {
	        if (!this.initialized) {
	            this.initialized = true;
	        }
	    };
	    Main.prototype.loadFromArray = function (tagId, params, index) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2, Loader_1.Loader.loadFromArray(tagId, params, index)];
	            });
	        });
	    };
	    Main.prototype.load = function (tagId, params) {
	        return tslib_1.__awaiter(this, void 0, void 0, function () {
	            return tslib_1.__generator(this, function (_a) {
	                return [2, Loader_1.Loader.load(tagId, params)];
	            });
	        });
	    };
	    Main.prototype.loadJSON = function (tagId, pathConfigJson) {
	        return Loader_1.Loader.loadJSON(tagId, pathConfigJson);
	    };
	    Main.prototype.setOnClickHandler = function (callback) {
	        Loader_1.Loader.setOnClickHandler(callback);
	    };
	    Main.prototype.dom = function () {
	        return Loader_1.Loader.dom();
	    };
	    Main.prototype.domItem = function (index) {
	        return Loader_1.Loader.domItem(index);
	    };
	    Main.prototype.addShape = function (shape, drawer, init, afterEffect, destroy) {
	        var customDrawer;
	        if (typeof drawer === "function") {
	            customDrawer = {
	                afterEffect: afterEffect,
	                draw: drawer,
	                destroy: destroy,
	                init: init,
	            };
	        }
	        else {
	            customDrawer = drawer;
	        }
	        Plugins_1.Plugins.addShapeDrawer(shape, customDrawer);
	    };
	    Main.prototype.addPreset = function (preset, options) {
	        Plugins_1.Plugins.addPreset(preset, options);
	    };
	    Main.prototype.addPlugin = function (plugin) {
	        Plugins_1.Plugins.addPlugin(plugin);
	    };
	    return Main;
	}());
	var tsParticles = new Main();
	exports.tsParticles = tsParticles;
	var particlesJS = function (tagId, params) {
	    return tsParticles.load(tagId, params);
	};
	exports.particlesJS = particlesJS;
	particlesJS.load = function (tagId, pathConfigJson, callback) {
	    tsParticles.loadJSON(tagId, pathConfigJson).then(function (container) {
	        if (container) {
	            callback(container);
	        }
	    });
	};
	particlesJS.setOnClickHandler = function (callback) {
	    tsParticles.setOnClickHandler(callback);
	};
	var pJSDom = tsParticles.dom();
	exports.pJSDom = pJSDom;


/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/blog.fb3b9e5a.png";

/***/ }),
/* 536 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACFCAYAAADci6SBAAAfJklEQVR4nO2deXAUV57nJXfMRmzsH7sxEzNtBN7ZOWJ3YiJ2t6OB3tmI2Zjt6e2wkVSHJJAQEiAhEKY5ZGyQEALMDR4bsAFhwAcGUyUOgzGSQHSjA4EtBIgbZCEBQhwC3VdVZeXxvvtHZlZllbIOSQXdKf8+RKK68uV7Wfk+9XsvX76MAkEQhEGJ+mNngCAIYriQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCyGFxgDAEgAY2CMaV6UPI8Zg+d9xkTlNeU5JDDlQ/Ln1PWZkgZT/gFgkvftoeZTm78gnxlOukPdzlDTDpRmJLell+5w0x5pvvzLrZee9rVQ23tZ+4gwtMBkuUiQIEGECFVGIhhEiFBcxBhExrQa8hWQR1ry+yIkWVRMAiDpHKhDF5h/Gtq/Q0Wv0mjTkiRpROn7px1OXl4meqJ4lZU3mLgZY579HewzrzJvPzWMKzCmigbKIgKSoikGAKJyAKnRGbxiYgxMUuUEWXZKQgze15lGYIwpj6XhHZT+v+Z6v+jDSSvY80gRLAKLNKH2T7hRUSTzEiwPwbYbLK9EZDCswFShSFAPFAmSRjTqZyQmaUQkgTERktKElN9Thce8TUT119VHXlqxDSe/wQ/koRzoehVI+9f/8R8zryPZtt52Ar2mfe9lbD+QQEPljwT2cjGwwADGBDkicnN40dgA8ccN4OuWorfxMHrbe2VBMa285L8CE8GYBNHNo6u5AWJdAbhTb8FZ+q9wlv4LuNLfwFn6a7hL/hWuU7+BeHEhuhprwXOO4dnLk+fBB7MkSeA4Dn19fejv7w+5OBwOuN1u8DwPURRfSoXRS1OSJLjdbjgcDgiC8NIqZLjy8F9HL42RbF8tq9vtDivq8194nvd8T263O+KL+h381MVoXIEpvV6Cox1i3bsQj8XAeXAsXLa/gnD4L9B3aDwcTd+BCU6lCalUdkmOrLi+p+CvLIf4bQw42+tw2sbAZXsDjqKxcNrHwGUfB6d9HJz2GLhsYyAe/TnE72eAb7sLFqDfI2BeAxz4vb29KC4uxfLlK/C73y3AwoU5IZdFi97B0qV5+Ld/+wi7d+/F4cNHcflyHR48eICuri5wHOcR27D3rV9E0dXVhZKSEhQUrEROzmJ8+OFHuHTpEjiOG/Y2gm1bkiSIogiO4+BwONDb24vOzk50dHSgo6MD/f39GBgYAMdxPhVZLxId6ra7urpQXX0eq1atxoIFi7Bu3QZUVVXB5XLpRnr+4hJFEY2NjSgsLMSqVe9j5cqVL2XZsaMQNTU1cDgcP2mRGVhgAO8W0VOzEu6jY+GyjQFnj4HLJovMXTQGfMkvID4+AyaJSjNSicIEB/qurIPr6N/AaRsLly0GLttYn8VpGwuX/XW47OPk5/axcB+Kgas6E1zvE+WUgKaTP8jxo1e5HA4ndu4sRGLiZJjNVpjNVphMFp/H6qJ9rr4fH2+GyWSB1ZqIxMTJyM6ei02bNuHgQRuuXbuO7u6egB3MQ8HhcGDPnr1ITk7xydPMmRk4c+b3cLv5sNMKFsGoj51OFx4+bEZ19XkcOXIUn376KbZs2Yp169Z7lq1bt6GwcBeKig7h/PkLaGq6j56eXp+INND2g+XN4XBg376vYLUmIj7e7NnviYlJOHmyGC6XK2iajDE0Nz/C8uUrBn1n2n0XiSUuzoT09Bmorj4/4h8sI2Nogbme3oZwdJwsII1sXPYxcNnHgLONgVCdAcHZpZyBlEUjddaBP/YPsvDsg+WlLpw9Bk67kr7t53DZx0L4Zhy6rh+TKwo0fW4ssCz8f6UlScLVq9fx1luxsFgSQi5mszWsz8THm5GQkITMzCysXr0WNTU1GBgYCBgthJPfqqoqpKSkDtqeyWTBnDlz0dBwL/zvLIjAenp6cPnyZWzb9gnmzZuP9PQZHrlrxa19npg4GampacjOfhtr1qzFuXPn0NraOqxmNWMMdXV1mD59pmd/q39NJgtmz87G3bv1ns/6l0eNvk6cODns73Co37/ZbMWqVe+js7OTBGY4mAixbj6cB2UBcbYYOIqU6OngGDhtY8HZx0A4/t/hanukdpqBSQx8/U64bDHgDiqRVsBlHJy2MZ7mpcsWA6c9BsLV+WCiWz7r6SOFEFlWPsDzPPbv/xqxsfFBD1r/A1dbsUJVCJPJgoSEBGzduhX379+HJEkhK7F/Xhlj+PDDLQG3kZw8FadPl4UV6elJhDEGQRBw+/ZtrF+/wSfyUctptSaGtV9MJgveeisWs2fPxs2bN4fcRySKIo4cOaKbtvpaZWVlUBnyPI89ez7zCHakP0rBl0SYzVakpKSiufnRT7YZaViBMcbgKv21HG3ZYsDZxnllZI+B49AbcB58He5v/h7OzhZZYGBgghvS1bVwHYqB0x5aYGrz0alGdkUxEM5nQhL7vREVUyOx0HlWO4g//XQPTCbLsH+J/aMEvUqhVuwlS5aitvaSp0M6XERRxJo163Qrm9lsRXLyVJw48R14PnQzUi8q6u7uRnFxMbKz3w5LyuF8Jj7ejMzMLNy+fccj7XAQBAH79x8IKLC4OBMqKiqCCkwURRw/ftwj3VDf14giMLMssOXLV6CjgyIww8EYIF5dC842RumzioHDPgZOWwycthi4bOPA2WIgFE9EX9szeAelihAaD8CtrCcLMEAT0hYDl32sEoEpHfr2MRAu5UOSRE/zUQrSfPTNs/cMlfpLHe4B7N8nFm5FUNedNWs2/vCHs2FJTH1fEASsW7chYLopKan47ruTAQUW6AwdYwytra34+ONPkJIyNWTFDqfya9+bPDkZx44dhyiKYR9PgiDgwIGvB23PV2CVuuXSlvf+/ft4770lPv2U8fFmT2QZ6Mcg1Pfon1ZsbDymTUtHRUUlBEEIu5yjDcMKDEwC67kP1zd/C5efxGTpjIPb/pdgl3Mg8U5A018l9jSCPzEenC0GXJAIjLPFKE3HN+A6+AZc9jHgj/49hIcnlT4wAPCO2g+ZZU0Etnfv52EJzGSyIDU1DYsXv4f33luKnJzFyMiYBas1EZMmxQWtAP4VMSMjEzU1NUMQmIS1a9cH3EZKSipOniwessD6+vrw0UdbkZCQFFTG/v1faiXWikWvvOnpM3D58pUhncRQBeYvSzUP8fHmoALTnoX88cd72L59JxYvfg85OYvxzjvvIidnMdLSpnvyb7UmhhVxxsWZYLUmYv78hcjJWexJb9OmD1BTUxPw7OhPBcMKTB5wKkK8sQn8kf8Cl/11pVN+nCwl+1+BK/5ncI8r5LFiEOCRmMRBuPMx+KN/A9ehsd4zkQdjlA575WymfRxc9jHKsIox4IrGQjw/F5KjDerAV825gbCHiPE8j717B/eV+B/QKSmp2L17L+7cqcfz52148aIdz549x4MHzbh58zbKyyuxceNmZGZmITFxcsjIJD7ejFWr3kdbW5v+PvWrAKLoFZjekpw8NajA9NIXBAHHj38bML9a4SYnT8W8eb/Dpk0fYN++/Th69BiKig5jz57PkJ+/HJmZWUhKmuIjtISERGzfvgMOh1O3XIEquCAI+Prrr4OKRCswvf2mfd3hcOL58xdobfUuDQ33cODA15g+fUZY8rJaE7F582bcuXMHT58+xfPnz9Ha2orW1lb09fWFdXJitGNwgQHM+RzOW5+AK5sE99G/g6toHPjj/xPswkzwTyogCU7l8h8JqmIYk8BcbeDu7oGjNA7uI38NV5F81pErigFXNBYu+zi47W/AVRQDp/0NuL/7Zwh1KyF1NyhpDR9/gekdzCaTBd988w16e3uDnvXq6+tDQ0MD9u37CrNnZ4eM6BISkvDll18GTNNXYGJIgQVrQg76zhhDTU0tMjOzAkafZrMVSUlTkJ9fgNLS03j06BF6e3vBcZxnUKjD4UBXVxfu3LkDu/0Q3nnnXSQkJCE1NQ3bt29He3v7kCu1tgmplydtBDZcGJOHapSVlSEzc1ZQiSUkJGHHjkJ0d3eTqIJgWIHJTTa5+cYLbojd9yC2loN/dAZc61UwVxcYE5WhDsr4IDUCgxLu8zxc3U1grWUQmw5DaLLLS6MNYuNBSI0H4W6yQ2z+DmLbHTDeGdbZxlBoBRaovyM/v8BnkGKgBfCOn7p//wHmz1+om662skyZMgUdHR0hK0YkBKZN//nz58jJWRw0f8nJU/HFF/vw7FnroDOJepGP2+1GS0sLLl6sxY0btzzC/1MVmJrnL774IuhZ6IULc/DsWeugPjYSmS/GFRhTIjAo1zsyVVTKF+0ZuKpMicOYJxJTZQZFRnI6zPs59SDxpKW8BtGzjZEQSmC//e2bqKqqDthZ7LMb/A7wxsZGLFiwKGi/ktlsxWeffebTRxTorFokIjA1WiwrO6M7LMJiSYDVmgirNRGFhbvQ398fMCocyv4YCq9SYABQUVHhGeemt82PPtqKgQH9HzDCi2EFJjchVSGpiywjydPXpYqHaa6LlDzPoR4UUAWmjdSYzzagld8ID6JQArNaE/HDDxeHJTBJknD2bDnS0tKDNiWzs9/26QvT20YkBdbR0YF169YHPAtntSZi/fqNgyJDvXwFk9pwv59XKTDGGKqrz2Pq1GkBv/+dOwvhdDojUrbRjLEFBjWqAiSoI+JVi3mHOYiihB4nh/rHXXj4oh8OtyBHUUwCmOhNT4m4RMjr9HIu3Hnai6bWHvS7BG9kN5IruhFcYGoFr6mpDdhcVP8Gqtg9PT3YsmWrT/p6JwiuXLkStHJEsg/s9u07yM6eG1Bg2dlv4+HDZt0KG6jses//lAWmwhhDZWUVUlPTQgpMuw4JbDAGF5g6J5hvdCQqNmKMYYCXcOhqG/5p5xX8xabL+PnmS0jddxOXH3RCVGdV8ERvAhgYODeH43XN+KePa/DnG67g5x9cQey+27h6/SFEXsBI25DhCOzixUshK3Og9yRJwrVr13wuVfI/bZ+UNAUnTpzQndFCZaQC06ZZXh64ySSfWPgKPM+HLKd/2pGKUF6VwNQ8VlVVYdq0dN2hIHoC065LeDGswILBlP+e9bjw9reN+LP8akS/dw5RuRWIyitH1LJq/LeNNTj2fRME3tusZAzocbix5Ewz/v3KHxC99ByicssRnVuOqGXn8JcbruDgDw/gcipTrKhnN9VmZpgMJQIbUrk1lbitrQ1ZWXOCNlM///xLjzS066tEMgLbv//rgHlJS0tHbW3tsC4+D7WP9CI4PV5lBAYAVVVyBBaoD0xPYMRgRqXAJGVg6c6K+/hPq84jKu8sonPLEZ1biejcSllKy87hH7ddRf3Tfp/O/aLqRvzH1T8gKq9CXievEq/lViI6twJRuVX4rx9cwfmGNk/FkLT9YmH65lUIzOFwYNu2T4JeML5t28eeDnO9CCZSZyF5nsfGjZsDprNwYQ5aWlqGFV3oRWaB9gkJbPQx+gSm9GMJkohJe24gKrcKUbmViM6rRFSeIrBl8uPX8ivxcUWT5+DmXRx+vfsqopZVy+8r60TlleO1ZXI6r+Wfw+pTjd4TBNrKEWYFfBUC4zgOu3fvDTraf/36Dejo6Bi0rkqkmpB9fX1YsWJVwHQKClagvb19SGUNVO5gTU31uR4kMGMy+gQG2SP3Oxz4243fIyq3Aj/LPYeo3LOIzquSo6+8SkQvrUBUXiWsh+rRz8v9QK2dA/jP62oQlVclNxvzKvFaXoUsvbwKJY1KWGx30csJmimn4XPTkFC8LIHJZZfzJAgCPvvsi4DSsFgSsHbtOo84XmYE1tXVhby8/EFlVP+uXr122FPCMCafeX306BFKSkpx6NARHDt2DNeuXfOMo9N+NhAkMGMy6gSmDn143OHCP2z+Xom+ypW+rCq5aZhXiei8CkTlnUP64Xo4eXms2PO+Afzdenmd13IrlGZkpbJOubJUIdl2Gw5OnVsfyqVEf3yBaQUkb+PzQeOuXqXA1PT8BeZf1jVr1qKrq2vYAnv8+DHy8wt8rq2cNi0d3313EqLoO9aNIrDRxegTGJMvFRI4N+J21yFqWbXSfKxAdF4Ffqb0ZUXlVeBnuZU4cOEhJCafiRQ4N+K/vIXovGpEL5Mlp8ouOrfK83hj5SNIkjKWTLlCSRVZOLyqJuSuXbuDXq6yfv1GdHZ2+qyrJVIC6+3txfLlKwLKdNWq94ctMAAoLi5R9p26yBdg5+QsRm9v/6A86UECMyajTmCA1yP7aprxHwqqELVE7seKypOjsNfy5A79/7XjJnr7HJ67RUqQcPbGM/y7/GpE5crykpuN5Z71//Gjy7j1bGQX0oYayCoLrGZY21A/39/fjw8/3OK9XMWcCIvFCovZCos5CRZrPLZt+xgOR7/PeloidRbS7XZj/fqNAeWwdGkuXrx4MeT9qGKzFemKYPbs7IAXrvtDAjMmo05gTJmrHmDodDix8kwjXl/3A6KXVSN6qdz3Fb38An614xq+vd0FUdLcKxIMLjeP7X9oxLj1NYhedl4eerG0Eq/lV+EXW+vw5eVn4Pjw55nSI7xxYINH4geTmX9HdWtrq98wCissZq/IrJYkHDhwQHO9IeAJJxUieS3k3r2fB7xwfdYseQJCvQ73cAReVHSYBPYTZdQJzIvcxOt1OPHt7XYsPXIbSQduYubhu/jwdD1utHSB40UdQUjoH3DjVH0Hlh26hqT9NzGt6C42Fd/FlfsdcPIjv4FCKIFZrYkegXlKE2Kb2jJIkoQLFy74pW/1eTx58mScPn1GmbVU7SfybQdH8lKi06fLfKbQ8Z+A8OTJkz6DarVTYIcqu91+SFeOJLDRzygUGIM8C4W3Y52XRDgdbnQO8Oh28eA5AZLkFZZWXlAu1hYZg8vBoW2AR4eTV2Yy9d4kdySE1wdW4xOJhF16pfm4fv0GTeVQRuGbEzxRWEryTDQ01oFJDIAqoJcjMAC4desWsrLmBLyU6P3313hu0zaUZjNjDHb7Id156Elgo59RJzBPE5IxpXJqR8orWlObTOrYLZ0oTGJM9y7dge4+NJRKNxSBDbUyC4KAsrIzSEub7k3XrN2GFWZTIt7JWYL+gS6vuHWI5KVEPT09KChYMajM3okIk1BScmrQNNChyi9Jko/AtEIggY1+Rp/APKIR4Y2wvNdLqrLyzC4ByU9gygXgkoAB3oEXrna0ce0Y4J2aoRKDK1SkBGaxJGDSpDicPXt2yAKTJAlNTU2YP39B4LOP5gSY4q0oL/899GfXiPwwCgCemVgDnYk0m63IypqDc+fODWmOd0mS8NVX3ptxkMB+Wow6gXmGNCDACG11vIP6mnYaHXUIguDCuee1KLj+AWacz0HmhcXYdvNzNPY+gCAJkCBpWlveqC4SwygsFnlCw2XLlmvE4Bsh6QmN49y4efMWFixY6BuJmP3TtiA3dxkGBgYC70CFSDYhGWNobm7GvHnzg85VNnfuPFy5Uhf0hrna8jsG3Hh/zTKYTFZvWc2JsFgSSWA/AUafwIaBpiUJXuRw/P5J/PpMMn5R+iZ+WRyLCSWT8D9O/xb/92wKTj05C0HiPZPqDGcoRTjDKMxmK06fLoPT6RzUoa12ckuSBJ7n0dLSggMHDmLy5OSQc60nJCTh0qVLYeUzUmch1b+MMZSV/d4nn3qzMSQlTYHNZsOTJ0/AcRxEUfSUV10EQQDHcThfdR0m05swm9V9aZKbyWazj8BCfUckMGNCAgO8fVxgqH72A35zJgXjSyZhYkksJhbHY2JxPMaXxGF8yVtIPvc27nQ1eAKwlyUwiyUBaWnTcfCgDQ0NDejo6EBXVxdaW1vx8OFDXLt2HWfO/B47d+7CwoU5nulytPck9L9hSFLSFOzatStI9OVLpCMwxhhcLvmOTOqo+UDCMJutmDdvHj75ZDtOnDiJ2tpLuHixFrW1taitvYSKikp8+uluzJgxQ96PniEiiYrMvBFYON8RCcyYkMDgFZgg8VhUtwq/LJmECcWTMKF0EsaXxGJisfx8YnEsfnXKhC8bDyuzUMAze6snhAtjW/Jt1cK7L2RKSioWLlyEVavex+rVa7FsWT4WL34Pc+fOw7Rp6bqy0lY8bQUsKFiBBw8ehC3clyEwAGhtfY7Nmz8IWm5tmVJSUpGRMQtz5sxFdvbbyMqag/T0GbK0TVZ4Buiq65tlic+enY0XL16QwEYxJDAA6k0/urhexJVn4JfFcuQ1oWQSJpTEYULpm5hQEo+JxbGYUBKLpVc3wCmq0/1KQxaYfGPb4DNF+C+B7mAUqslosSQgLs6EgoKVaG5uHlLEGKlOfL0Bqu3t7VixYhXi481hSSxweS0wmxLkqwvMCfAM2NUILBxC3VaNBPanCQkMAJPkaKrD1Yk3y9MwvmQSJpTEYkKxGRNKYzGxJBYTTsZiQnEsJpTEYWndBjgFDt4hGcpwjTBRBRaOfNQKpD17F6zp5f88OXkq1q5dh2fPng25uSuKItasWTeiCCzQqHrGGFpbn+OTT3b43PA11H4Y9Lo5SWkyDi77kiW5PvPKB0MQBOzffyDgdrX3hYwEJLDIQAKDtgOfx+yLufhl8Vtyv1dpnNJ8jFWEFouJpZOw88f9kJioGX7hewnO4PR9KxDP89i37yvExZlCRhzDWdQ0srLm4MiRb9Da+nzIQzIAeYiC3NTTb54mJ09FaengsVvh7Af1cU9PL06fLsPy5QUwmcxh7wPfs6wWmM3eCDUxMQkLFizChQvfh11uURRx6NDhoNssL68Ie9+F2g+VlZVBBVZYuIsEFgYkMKgCk0V06kkF/vcpKyYUx2J86SRMLIlTmo5xGF8cB3NFFi533YL3Fm6hR+brnUGsrj4/aLbUochLr6KrUUx6+gzs3LkL9fX14DhuWCca1HyXl5fDah2cN5PJgrS0dDQ1NQ07bXURBAFtbW24cOEC8vMLkJw8NehNf/33gdlsxaRJcUhLm47Vq9egtLQUTU1NytUTvtIMlp+LFy8iJSVVd5sZGbNw/fr1YZVVb1uXLl1CRob+zW2t1kTs3/813G73iLc12iGBQZYQmDy4dUBwYNvdPfg/ZQn4VYkJE4rj5CZkcTz+39lUfHH/MFyCUyM97Riz8LfZ3d3jmWJGW1G1lTLYohVeUtIUTJuWhuzst7Fv31e4d++eR1zD3ydymZxOJ9auXYuEBN+zm5MnJ2Pfvv1hR1/BtqGlr28Ad+/W48SJk9iwYSPmzZuPjIxZmDkzE9Onz8T06TMxc2YGMjJmYe7ceVixYhX27v0MdXVX8fjxY/T39+umH86+6OnpwaZNm5GQkORT1qSkydi161NP2pHYrx0dHVi9eq1us3/27OyIyXK0QwKD34XQTEQ7142DD44hu3YpUqrnI+38fLxTtxZ/eFKFPn4A6gBYH3GFmA9Mr0P7yZOn2LGjEAsX5iAjYxYyM7OQkTEr6DJr1mzMn78Q7767BCtXrsKWLVtw+PBhXLx4EZ2dneB53mfcWCT2zdOnT1FYWIgFCxYhK2sOli7Nw7ffnsDAwMCwthOoc19FHeflcrnQ3d2N5uZm3L17Fzdu3MCNGzfQ0NCAR48eobu7G263GxzHBbwhyFCazowxtLS0oLBwFxYtegdZWXPw7rtLYLfb0d7ePiQZhsqLJEl4+PAhNm7chIyMWUhMnIyUlFTk5i5DWdkZuFwuElgYkMDgPQvpvTkuAy/yaHO1o6mvGc39Lejm+5Sb4apNTtFzj0hPNBZ0G/pn41wuF1paWlBfX4+7d+tRX/9j0KWh4R4ePnyIp0+foqenBwMDA5opcfSXke0b5snno0ctuHfvHtra2gZtczhp6q0frByB1gtV3nDyqF3f4XCgpeUx7t27h2fPWgdFsyNpkqvyAmRR9/T0oL6+HpcuXcbVq9fQ3t7u2bdEaEhgAKBcAC4qj8AE+aJtn3FeqrS8HffyBd6AfC/w4C3IYJUroiWJUHqBBBHsc8NNP9DzYOmHI79A2w0nT6HKFakIN1j+SGKhIYEBfs0/yfMSoLmER/M5z8Erqc1HuUM/VB/Yyz7gI5lmuE2uSG7fP61INYGHmp5ePl62TPzlSYQHCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrCQwAiCMCwkMIIgDAsJjCAIw0ICIwjCsJDACIIwLCQwgiAMCwmMIAjDQgIjCMKwkMAIgjAsJDCCIAwLCYwgCMNCAiMIwrD8f9FjweeirTSkAAAAAElFTkSuQmCC"

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/neutron.1f8e745f.jpg";

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/portfolio.dad074c5.png";

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/travlr.ff8681fb.jpg";

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/webiste.126a9455.png";

/***/ })
]);
//# sourceMappingURL=component---src-pages-index-js-b912b63a351accb3553f.js.map