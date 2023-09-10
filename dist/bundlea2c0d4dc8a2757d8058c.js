/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addIcon = document.getElementById('add-icon');
var formContainer = document.getElementById('form-container');
var blackout = document.getElementById('blackout');
var formDisplay = function formDisplay(e) {
  var target = e.target;
  if (target.matches('#add-icon')) {
    formContainer.classList.toggle('hide-form');
    addIcon.classList.toggle('hidden');
    blackout.classList.toggle('hidden');
  } else if (target.matches('#blackout')) {
    formContainer.classList.toggle('hide-form');
    target.classList.toggle('hidden');
    addIcon.classList.toggle('hidden');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDisplay);

/***/ }),

/***/ "./src/modules/handleDisplay.js":
/*!**************************************!*\
  !*** ./src/modules/handleDisplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleDisplay: () => (/* binding */ handleDisplay),
/* harmony export */   handleSubmit: () => (/* binding */ handleSubmit)
/* harmony export */ });
/* harmony import */ var _util_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.ts */ "./src/modules/util.ts");
/* harmony import */ var _util_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util_ts__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
var leaderboard = new (_util_ts__WEBPACK_IMPORTED_MODULE_0___default())(baseUrl, 'Tf159LB89JEGXiktCs8K');
var scoreContainer = document.getElementById('scores');
var status = document.getElementById('status');
var handleDisplay = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var scores, fragment;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return leaderboard.getScoresForGame();
        case 3:
          scores = _context.sent;
          fragment = document.createDocumentFragment();
          scores.forEach(function (item) {
            var newItem = document.createElement('li');
            newItem.className = 'score-list';
            newItem.innerHTML = "<p>".concat(item.user, "</p><p class='score-num'>").concat(item.score, "</p>");
            fragment.appendChild(newItem);
          });
          while (scoreContainer.firstChild) {
            scoreContainer.firstChild.remove();
          }
          scoreContainer.appendChild(fragment);
          if (scores.length > 0) {
            scoreContainer.classList.add('border');
          } else {
            scoreContainer.innerHTML = "<div class=\"empty-warning\">\n      <h2>No Recent Scores</h2><p>Add a new score</P>\n      </div>";
          }
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          status.textContent = "".concat(_context.t0, ": Check your Internet");
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function handleDisplay() {
    return _ref.apply(this, arguments);
  };
}();
var handleSubmit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var target, nameInput, scoreInput, name, score, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          target = e.target;
          if (!target.matches('#submit')) {
            _context2.next = 28;
            break;
          }
          e.preventDefault();
          status.classList.remove('hidden');
          status.textContent = 'Creating leaderboard score...';
          nameInput = document.getElementById('nameInut');
          scoreInput = document.getElementById('scoreInput');
          name = nameInput.value.trim();
          score = parseFloat(scoreInput.value);
          if (!(name && score)) {
            _context2.next = 26;
            break;
          }
          _context2.prev = 10;
          _context2.next = 13;
          return leaderboard.addScoreToGame(name, score);
        case 13:
          result = _context2.sent;
          handleDisplay();
          status.textContent = result;
          status.className = 'success';
          nameInput.value = '';
          scoreInput.value = '';
          _context2.next = 25;
          break;
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](10);
          status.className = 'error';
          status.textContent = "".concat(_context2.t0, ": Check your Internet");
        case 25:
          setTimeout(function () {
            status.className = 'hidden';
          }, 3000);
        case 26:
          _context2.next = 29;
          break;
        case 28:
          if (target.matches('#refresh')) {
            window.location = "".concat(window.location.href, "?refresh=").concat(Date.now());
          }
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 21]]);
  }));
  return function handleSubmit(_x) {
    return _ref2.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #333; }

body {
  font-size: 16px;
  width: 100%;
  height: 90vh;
  position: relative; }
  body #add-icon {
    position: absolute;
    right: 12px;
    bottom: 12px; }
  body li {
    list-style: none; }
  body form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%; }
    body form input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px; }
  body header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding: 12px 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 32px; }
    body header h1 {
      font-size: 1.1rem;
      font-weight: bold;
      color: #333;
      text-transform: uppercase;
      border-radius: 5px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
      letter-spacing: 16px; }
      body header h1 span {
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease; }
  body main {
    width: 100%;
    margin-top: 64px; }
    body main .l-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center; }
  @media screen and (max-width: 412px) {
    body {
      font-size: 14px; }
      body #headline {
        letter-spacing: 8px;
        font-size: 1rem; } }
  @media screen and (min-width: 768px) {
    body #add-icon {
      display: none; } }
  @media screen and (min-width: 992px) {
    body {
      font-size: 18px; }
      body #headline {
        letter-spacing: 24px;
        font-size: 1.5rem; } }
  @media screen and (min-width: 1200px) {
    body {
      font-size: 18px; }
      body #headline {
        letter-spacing: 32px;
        font-size: 1.7rem; } }

main {
  width: 100%;
  margin: 0 auto; }
  main #status {
    padding: 10px;
    background-color: #ffc107;
    color: #333;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
    text-align: center; }
    main #status.success {
      display: block;
      background-color: #28a745;
      color: #fff; }
    main #status.error {
      display: block;
      background-color: #dc3545;
      color: #fff; }
  main .btn {
    align-self: flex-end;
    background-color: #6c757d;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease; }
  main .form-container {
    background-color: #f7f7f7;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    z-index: 3; }
    main .form-container h2 {
      margin-bottom: 24px; }
  main .scores-container {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
    main .scores-container .sub-headline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px; }
    main .scores-container #scores {
      border: 1px solid #ccc;
      border-radius: 5px; }
      main .scores-container #scores li:nth-child(even) {
        background-color: #dddddd91; }
      main .scores-container #scores .score-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px; }
        main .scores-container #scores .score-list .score-num {
          font-weight: bold;
          padding: 5px 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease; }
  @media screen and (max-width: 768px) {
    main .form-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); }
    main .scores-container {
      width: 100%; } }
  @media screen and (min-width: 768px) {
    main {
      max-width: 90%;
      position: relative; }
      main .form-container {
        position: fixed;
        top: 64px;
        right: 5%; }
      main .scores-container {
        width: 412px; } }
  @media screen and (max-width: 768px) {
    main .hide-form {
      display: none; } }
  @media screen and (min-width: 992px) {
    main {
      max-width: 80%; }
      main .form-container {
        position: fixed;
        top: 64px;
        right: 10%; } }
  @media screen and (min-width: 1200px) {
    main {
      max-width: 70%; }
      main .form-container {
        position: fixed;
        top: 64px;
        right: 15%; } }

.header {
  font-size: 24px; }
  @media screen and (max-width: 768px) {
    .header {
      font-size: 20px; } }

#blackout {
  background-color: #212121;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 2;
  transition: opacity 0.5s ease; }

.hidden {
  display: none; }
`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAyCA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,WAZkB,EAAA;;AAepB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB,EAAA;EAJpB;IAOI,kBAAkB;IAClB,WAAW;IACX,YAAY,EAAA;EAThB;IAaI,gBAAgB,EAAA;EAbpB;IAiBI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW,EAAA;IApBf;MAuBM,aAAa;MACb,sBAAsB;MACtB,kBAAkB;MAClB,eAAe,EAAA;EA1BrB;IArCE,eAAe;IACf,MAmEqB;IAlErB,QAkEwB;IACtB,WAAW;IACX,kBAAkB;IAClB,wCAAwC;IACxC,mBAAmB,EAAA;IAnCvB;MAuCQ,iBAAY;MACZ,iBAAY;MAEd,WAzDc;MA0Dd,yBAAyB;MACzB,kBAAkB;MAClB,2CAA2C;MAC3C,sCAAsC;MACtC,oBAAoB,EAAA;MA/C1B;QA/BE,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;QAClB,wCAAwC;QACxC,2CAA2C;QAC3C,sCAAsC,EAAA;EA0BxC;IAwDI,WAAW;IACX,gBAAgB,EAAA;IAzDpB;MA4DM,WAAW;MACX,aAAa;MACb,sBAAsB;MACtB,uBAAuB,EAAA;EAI3B;IAnEF;MAoEI,eAAe,EAAA;MApEnB;QAuEM,mBAAmB;QACnB,eAAe,EAAA,EAChB;EAGH;IA5EF;MA8EM,aAAa,EAAA,EACd;EAGH;IAlFF;MAmFI,eAAe,EAAA;MAnFnB;QAsFM,oBAAoB;QACpB,iBAAiB,EAAA,EAClB;EAGH;IA3FF;MA4FI,eAAe,EAAA;MA5FnB;QA+FM,oBAAoB;QACpB,iBAAiB,EAAA,EAClB;;AAIL;EACE,WAAW;EACX,cAAc,EAAA;EAFhB;IAKI,aAAa;IACb,yBAAyB;IACzB,WA3HgB;IA4HhB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB,EAAA;IAXtB;MAcM,cAAc;MACd,yBAAyB;MACzB,WAAW,EAAA;IAhBjB;MAoBM,cAAc;MACd,yBAAyB;MACzB,WAAW,EAAA;EAtBjB;IA0BI,oBAAoB;IACpB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,sCAAsC,EAAA;EAlC1C;IAlJE,yBAAyB;IACzB,aAuLoB;IAtLpB,mBAAmB;IACnB,wCAAwC;IACxC,YAAY;IAqLV,UAAU,EAAA;IAvCd;MA0CM,mBAAmB,EAAA;EA1CzB;IA+CI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,wCAAwC,EAAA;IAlD5C;MAqDM,aAAa;MACb,mBAAmB;MACnB,8BAA8B;MAC9B,mBAAmB,EAAA;IAxDzB;MA4DM,sBAAsB;MACtB,kBAAkB,EAAA;MA7DxB;QAgEQ,2BAA2B,EAAA;MAhEnC;QAoEQ,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,iBAAiB,EAAA;QAvEzB;UA2EU,iBAAiB;UACjB,iBAAiB;UACjB,kBAAkB;UAClB,wCAAwC;UACxC,2CAA2C;UAC3C,sCAAsC,EAAA;EAM9C;IAtFF;MA3HE,eAAe;MACf,QAAQ;MACR,SAAS;MACT,gCAAgC,EAAA;IAwHlC;MA4FM,WAAW,EAAA,EACZ;EAIH;IAjGF;MAkGI,cAAc;MACd,kBAAkB,EAAA;MAnGtB;QA1IE,eAAe;QACf,SA+O0B;QA9O1B,SA8O8B,EAAA;MAtGhC;QA0GM,YA3NmB,EAAA,EA4NpB;EAGH;IA9GF;MAgHM,aAAa,EAAA,EACd;EAGH;IApHF;MAqHI,cAAc,EAAA;MArHlB;QA1IE,eAAe;QACf,SAgQ0B;QA/P1B,UA+P+B,EAAA,EAC5B;EAGH;IA3HF;MA4HI,cAAc,EAAA;MA5HlB;QA1IE,eAAe;QACf,SAuQ0B;QAtQ1B,UAsQ+B,EAAA,EAC5B;;AAIL;EACE,eAAe,EAAA;EAEf;IAHF;MAII,eAAe,EAAA,EAElB;;AAED;EACE,yBAAwB;EACxB,YAAW;EACX,WAAU;EACV,aAAY;EACZ,eAAe;EACf,MAAM;EACN,UAAU;EACV,6BAA6B,EAAA;;AAG/B;EACE,aAAa,EAAA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap\");\n\n@mixin form($pad) {\n  background-color: #f7f7f7;\n  padding: $pad;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  width: 300px;\n}\n\n@mixin position($top, $right) {\n  position: fixed;\n  top: $top;\n  right: $right;\n}\n\n@mixin board() {\n  font-weight: bold;\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n  transition: background-color 0.3s ease;\n}\n\n@mixin position-center() {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n$font-family: \"Poppins\", sans-serif;\n$primary-color: #333;\n$background-color: #f4f4f4;\n\n$breakpoint-mobile: 412px;\n$breakpoint-small: 768px;\n$breakpoint-medium: 992px;\n$breakpoint-large: 1200px;\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: $primary-color;\n}\n\nbody {\n  font-size: 16px;\n  width: 100%;\n  height: 90vh;\n  position: relative;\n\n  #add-icon {\n    position: absolute;\n    right: 12px;\n    bottom: 12px;\n  }\n  \n  li {\n    list-style: none;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    width: 100%; \n\n    input {\n      padding: 10px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n      font-size: 16px;\n    }\n  }\n\n  header {\n    @include position(0, 0);\n    width: 100%;\n    padding: 12px 24px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    margin-bottom: 32px;\n\n    h1 {\n      font: {\n        size: 1.1rem;\n        weight: bold;\n      }\n      color: $primary-color;\n      text-transform: uppercase;\n      border-radius: 5px;\n      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n      transition: background-color 0.3s ease;\n      letter-spacing: 16px;\n\n      span {\n        @include board();\n      }\n    }\n  }\n\n  main {\n    width: 100%;\n    margin-top: 64px;\n\n    .l-container {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n  }\n\n  @media screen and (max-width: $breakpoint-mobile) {\n    font-size: 14px;\n\n    #headline {\n      letter-spacing: 8px;\n      font-size: 1rem;\n    }\n  }\n\n  @media screen and (min-width: $breakpoint-small) {\n    #add-icon {\n      display: none;\n    }\n  }\n\n  @media screen and (min-width: $breakpoint-medium) {\n    font-size: 18px;\n\n    #headline {\n      letter-spacing: 24px;\n      font-size: 1.5rem;\n    }\n  }\n\n  @media screen and (min-width: $breakpoint-large) {\n    font-size: 18px;\n\n    #headline {\n      letter-spacing: 32px;\n      font-size: 1.7rem;\n    }\n  }\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n\n  #status {\n    padding: 10px;\n    background-color: #ffc107;\n    color: $primary-color;\n    border-radius: 5px;\n    font-size: 16px;\n    margin-top: 10px;\n    text-align: center;\n  \n    &.success {\n      display: block;\n      background-color: #28a745;\n      color: #fff;\n    }\n  \n    &.error {\n      display: block;\n      background-color: #dc3545;\n      color: #fff;\n    }\n  }\n  .btn {\n    align-self: flex-end;\n    background-color: #6c757d;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    font-size: 18px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n\n  .form-container {\n    @include form(12px);\n    z-index: 3;\n\n    h2 {\n      margin-bottom: 24px;\n    }\n  }\n\n  .scores-container {\n    background-color: #f7f7f7;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n    .sub-headline {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      margin-bottom: 20px;\n    }\n\n    #scores {\n      border: 1px solid #ccc;\n      border-radius: 5px;\n\n      li:nth-child(even) {\n        background-color: #dddddd91;\n      }\n\n      .score-list {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 8px 12px;\n\n\n        .score-num {\n          font-weight: bold;\n          padding: 5px 10px;\n          border-radius: 5px;\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n          transition: background-color 0.3s ease;\n        }\n      }      \n    }\n  }\n\n  @media screen and (max-width: $breakpoint-small) {\n    .form-container {\n      @include position-center();\n    }\n\n    .scores-container {\n      width: 100%;\n    }\n  }\n\n\n  @media screen and (min-width: $breakpoint-small) {\n    max-width: 90%;\n    position: relative;\n\n    .form-container {\n      @include position(64px, 5%); \n    }\n\n    .scores-container {\n      width: $breakpoint-mobile;\n    }\n  }\n\n  @media screen and (max-width: $breakpoint-small) {\n    .hide-form {\n      display: none;\n    }\n  }\n\n  @media screen and (min-width: $breakpoint-medium) {\n    max-width: 80%;\n    .form-container {\n      @include position(64px, 10%); \n    }\n  }\n\n  @media screen and (min-width: $breakpoint-large) {\n    max-width: 70%;\n    .form-container {\n      @include position(64px, 15%); \n    }\n  }\n}\n\n.header {\n  font-size: 24px;\n\n  @media screen and (max-width: $breakpoint-small) {\n    font-size: 20px;\n  }\n}\n\n#blackout {\n  background-color:#212121; \n  opacity:0.5; \n  width:100%; \n  height:100vh; \n  position: fixed; \n  top: 0;\n  z-index: 2;\n  transition: opacity 0.5s ease;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/util.ts":
/*!*****************************!*\
  !*** ./src/modules/util.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
class Leaderboard {
    constructor(baseUrl, gameId) {
        this.headers = {
            'Content-Type': 'application/json',
        };
        this.baseUrl = baseUrl;
        this._gameId = gameId;
    }
    createNewGame(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}games/`;
            const requestData = {
                name,
            };
            const response = yield fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                return `Failed to create game: ${response.statusText}`;
            }
            const data = yield response.json();
            return data.result;
        });
    }
    addScoreToGame(user, score) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}games/${this._gameId}/scores/`;
            const requestData = {
                user,
                score,
            };
            const response = yield fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                return `Failed to add score: ${response.statusText}`;
            }
            const data = yield response.json();
            return data.result;
        });
    }
    getScoresForGame() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._gameId)
                return [];
            const url = `${this.baseUrl}games/${this._gameId}/scores/`;
            const response = yield fetch(url);
            if (!response.ok) {
                return [`Failed to retrieve scores: ${response.statusText}`];
            }
            const data = yield response.json();
            return data.result;
        });
    }
    get gameId() {
        return this._gameId;
    }
    set gameId(newGameId) {
        this._gameId = newGameId;
    }
}
exports["default"] = Leaderboard;


/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f31305a7b0737d3a3ad.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_handleDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleDisplay.js */ "./src/modules/handleDisplay.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/modules/form.js");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/assets/plus.svg");




document.getElementById('add-icon').src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__;
var init = function init() {
  document.addEventListener('click', function (e) {
    (0,_modules_handleDisplay_js__WEBPACK_IMPORTED_MODULE_1__.handleSubmit)(e);
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
  });
  (0,_modules_handleDisplay_js__WEBPACK_IMPORTED_MODULE_1__.handleDisplay)();
};
window.addEventListener('DOMContentLoaded', init);
})();

/******/ })()
;
//# sourceMappingURL=bundlea2c0d4dc8a2757d8058c.js.map