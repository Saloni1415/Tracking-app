function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordertrack-ordertrack-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordertrack/ordertrack.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordertrack/ordertrack.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdertrackOrdertrackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br><br><br>\n<br><br>\n\n\n<div class=\"container\">\n  <span *ngFor=\"let item of counts;let i = index\">\n    <span class=\"circle-desc\" [class.circle-desc-active]=\"orderStatus == item\">{{ item }}</span>\n    <span class=\"circles\" [class.active]=\"orderStatus == item\"></span>\n    <span class=\"bar\" *ngIf=\"(i != counts.length-1)\"></span>\n  </span>\n  </div>\n\n\n\n\n  <div class=\"wrapper\">\n    <div class=\"margin-area\">\n      <div class=\"dot one\">1</div>\n      <div class=\"dot two\">2</div>\n      <div class=\"dot three\">3</div>\n      \n      <div class=\"progress-bar first\"></div>\n      <div class=\"progress-bar second\"></div>\n      \n      <div class=\"message message-1\">Shipped</div> \n      \n \n      <div class=\"message message-2\">Out for delivery</div>\n      <div class=\"message message-3\">Delivered</div>\n      \n    </div>\n    </div>\n    \n  \n    \n<div>\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n    <mat-card-header >\n      <img style=\"margin-left:-250px;\" width=40px; height= 40px; src=\"https://img.icons8.com/dusk/64/000000/checked-truck.png\">\n      <mat-card-title style=\"margin-left: 70px;\" ><b>Order Delivered</b></mat-card-title>\n      \n      \n    </mat-card-header>\n    <!-- <mat-card-content>\n      <p>\n      ibbzdisb\n      </p>\n    </mat-card-content> -->\n  </mat-card>\n</div>\n<br>\n<div>\n\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n    \n    <mat-card-header >\n      <img style=\"margin-left:-290px;\" width =50px; height= 50px; src=\"https://img.icons8.com/plasticine/100/000000/deliver-food.png\">\n      <mat-card-title style=\"margin-left: 70px;\">Order out for delivery</mat-card-title>\n      \n    </mat-card-header>\n  \n  </mat-card>\n</div>\n<br>\n<div>\n\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\">\n    <mat-card-header >\n      <mat-card-title>Order has been shipped</mat-card-title>\n      \n    </mat-card-header>\n\n  </mat-card>\n</div>\n<br><br><br>\n\n<h3 class=\"time\">ARRIVING IN <br><center><h2 style=\"color:white\"><b>3 days</b></h2></center> </h3>\n\n\n\n\n\n\n<form (ngSubmit)=\"showMap()\">\n    <br>\n    <div style=\"margin-left: 1%;\">\n        <label style=\"margin-bottom: 15px;\" for=\"exampleForm2\">C-name : </label>\n        <input type=\"text\" style=\"width: 20%;  margin-bottom: 1%;\" #inputname  class=\"form-control\">\n        <button type=\"submit\" id=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" data-lat='21.03' data-lng='105.85'>Track order</button>\n    </div>\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\" style=\" height: 520px;\">\n            <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h2 class=\"modal-title\" id=\"myModalLabel\"><b>Track Your Order</b></h2><span>Delivery Status : <span #deliverystatus> </span> </span>\n            </div>\n            <div class=\"modal-body\">\n            \n            <div class=\"row\">\n                <div class=\"col-md-12 modal_body_map\">\n                <div class=\"location-map\" id=\"location-map\">\n                    <agm-map style=\"width: 100%; height: 380px; margin-left: 2%; margin-top: 0%;\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">  \n                        <agm-marker  [latitude]=\"lat\" [longitude]=\"lng\"  [animation]=\"'BOUNCE'\"  [iconUrl]=\"clientIcon\"></agm-marker>\n                        <agm-marker  [latitude]=\"driverLat\" [longitude]=\"driverLong\" [animation]=\"'DROP'\"  [iconUrl]=\"driverIcon\"></agm-marker>  \n                    </agm-map>\n                </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 modal_body_end\">\n                \n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</form>\n\n\n\n\n\n<form (ngSubmit)=\"showMap()\">\n    <br>\n    <div style=\"margin-left: 1%;\">\n        <label style=\"margin-bottom: 15px;\" for=\"exampleForm2\">Client-name : </label>\n        <input type=\"text\" style=\"width: 20%;  margin-bottom: 1%;\" #inputname  class=\"form-control\">\n        <button type=\"submit\" id=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" data-lat='21.03' data-lng='105.85'>Track order</button>\n    </div>\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\" style=\" height: 520px;\">\n            <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h2 class=\"modal-title\" id=\"myModalLabel\"><b>Track Your Order</b></h2><span>Delivery Status : <span #deliverystatus> </span> </span>\n            </div>\n            <div class=\"modal-body\">\n            \n            <div class=\"row\">\n                <div class=\"col-md-12 modal_body_map\">\n                <div class=\"location-map\" id=\"location-map\">\n                    <agm-map style=\"width: 100%; height: 380px; margin-left: 2%; margin-top: 0%;\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">  \n                        <agm-marker  [latitude]=\"lat\" [longitude]=\"lng\"  [animation]=\"'BOUNCE'\"  [iconUrl]=\"clientIcon\"></agm-marker>\n                        <agm-marker  [latitude]=\"driverLat\" [longitude]=\"driverLong\" [animation]=\"'DROP'\"  [iconUrl]=\"driverIcon\"></agm-marker>  \n                    </agm-map>\n                </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 modal_body_end\">\n                \n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/observable/interval.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/observable/interval.js ***!
    \**********************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddObservableIntervalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"]; //# sourceMappingURL=interval.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/takeWhile.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/takeWhile.js ***!
    \*********************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorTakeWhileJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/takeWhile */
    "./node_modules/rxjs-compat/_esm2015/operator/takeWhile.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.takeWhile = _operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__["takeWhile"]; //# sourceMappingURL=takeWhile.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/takeWhile.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/takeWhile.js ***!
    \*****************************************************************/

  /*! exports provided: takeWhile */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorTakeWhileJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "takeWhile", function () {
      return takeWhile;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function takeWhile(predicate) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeWhile"])(predicate)(this);
    } //# sourceMappingURL=takeWhile.js.map

    /***/

  },

  /***/
  "./src/app/pages/ordertrack/ordertrack.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/ordertrack/ordertrack.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdertrackOrdertrackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Lato;\n}\n\na {\n  color: darkblue;\n}\n\n#right {\n  margin-left: 50%;\n  margin-top: -40%;\n}\n\n.time {\n  background-color: #689f38;\n  width: 108px;\n  height: 70px;\n  margin-left: 13.5%;\n}\n\n.wrapper {\n  width: 844px;\n  height: 130px;\n}\n\n.margin-area {\n  position: relative;\n  text-align: center;\n  font-family: \"Trebuchet\", sans-serif;\n  font-size: 14px;\n  margin: 0 20px;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  background: #000;\n  border-radius: 50%;\n  top: 10px;\n  color: #fff;\n  line-height: 30px;\n  z-index: 9999;\n}\n\n.dot.one {\n  left: 65px;\n  background: #689f38;\n}\n\n.dot.two {\n  left: 280px;\n  background: #689f38;\n}\n\n.dot.three {\n  left: 490px;\n  background: #bbb;\n  color: #000000;\n}\n\n.dot.four {\n  left: 700px;\n  background: #bbb;\n  color: #ffd800;\n}\n\n.progress-bar {\n  position: absolute;\n  height: 10px;\n  width: 25%;\n  top: 20px;\n  left: 10%;\n  background: #bbb;\n}\n\n.progress-bar.first {\n  background: #689f38;\n}\n\n.progress-bar.second {\n  left: 37%;\n}\n\n.progress-bar.third {\n  left: 64%;\n}\n\n.message {\n  position: absolute;\n  height: 60px;\n  width: 170px;\n  padding: 10px;\n  margin: 0;\n  left: -8px;\n  top: 0;\n  color: #000;\n}\n\n.message.message-1 {\n  top: 40px;\n  color: #000;\n}\n\n.message.message-2 {\n  left: 220px;\n  top: 40px;\n}\n\n.message.message-3 {\n  left: 420px;\n  top: 40px;\n  color: #000;\n}\n\n.status {\n  position: absolute;\n  width: 700px;\n  left: -600px;\n  text-align: center;\n  padding: 20px;\n  color: black;\n}\n\n.status.code {\n  top: 70px;\n}\n\na {\n  color: #689f38;\n  text-decoration: none;\n  font-weight: bold;\n}\n\na:hover, a:focus {\n  text-decoration: underline;\n}\n\nbody {\n  font-size: 1em;\n  height: 100%;\n}\n\nh3 {\n  font-family: Lato;\n  text-align: center;\n  color: #0080ff;\n}\n\n.circles {\n  height: 0.938em;\n  width: 0.938em;\n  border: 0.188em solid #000;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.active {\n  background-color: #ffa500;\n}\n\n.circle-desc-active {\n  font-weight: bold;\n}\n\n.bar {\n  width: 25%;\n  height: 10px;\n  margin-bottom: 0.469em;\n  border: 0.031em solid #000;\n  display: inline-block;\n  text-align: center;\n  margin: \"0 auto\";\n  left: 10%;\n  background: #bbb;\n  background: #689f38;\n}\n\n.container {\n  min-width: 320px;\n  margin: \"0px auto\";\n  text-align: center;\n}\n\n.circle-desc {\n  position: absolute;\n  top: 5em;\n  font-size: 1.125em;\n  width: auto;\n  max-width: 9.375em;\n  margin-left: -0.75em;\n}\n\n@media only screen and (max-width: 320px) {\n  body {\n    font-size: 20%;\n  }\n}\n\n/*extra small devices*/\n\n@media only screen and (max-width: 600px) {\n  body {\n    font-size: 40%;\n  }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n@media only screen and (min-width: 600px) {\n  body {\n    font-size: 60%;\n  }\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: 80%;\n  }\n}\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 992px) {\n  body {\n    font-size: 100%;\n  }\n}\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: 120%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJ0cmFjay9DOlxcVXNlcnNcXHNhbG9uaVxcRGVza3RvcFxcRmlyc3QtcHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHBhZ2VzXFxvcmRlcnRyYWNrXFxvcmRlcnRyYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnRyYWNrL29yZGVydHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FETUE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNGRjs7QURHRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDREo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREVFO0VBQ0UsbUJBQUE7QUNBSjs7QURFRTtFQUNFLFNBQUE7QUNBSjs7QURFRTtFQUNFLFNBQUE7QUNBSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRENFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUY7O0FEQ0U7RUFDRSxTQUFBO0FDQ0o7O0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREFFO0VBQ0UsMEJBQUE7QUNFSjs7QURHQTtFQUNFLGNBQUE7RUFDQyxZQUFBO0FDQUg7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDQSxpQkFBQTtBQ0FBOztBREdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBR0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0UsbUJBQUE7QUNGSjs7QURLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZEOztBREtBO0VBQ0c7SUFDRSxjQUFBO0VDRkg7QUFDRjs7QURLQSxzQkFBQTs7QUFDQTtFQUNHO0lBQ0UsY0FBQTtFQ0hIO0FBQ0Y7O0FETUEsb0VBQUE7O0FBQ0E7RUFDRztJQUNFLGNBQUE7RUNKSDtBQUNGOztBRE9BLHFEQUFBOztBQUNBO0VBQ0U7SUFDRyxjQUFBO0VDTEg7QUFDRjs7QURRQSxtREFBQTs7QUFDQTtFQUNFO0lBQ0csZUFBQTtFQ05IO0FBQ0Y7O0FEU0Esb0VBQUE7O0FBQ0E7RUFDRztJQUNFLGVBQUE7RUNQSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJ0cmFjay9vcmRlcnRyYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBkYXJrYmx1ZTtcclxufVxyXG5cclxuI3JpZ2h0e1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTQwJTtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlmMzg7XHJcbiAgd2lkdGg6IDEwOHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBtYXJnaW4tbGVmdDogMTMuNSU7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgXHJcbiAgd2lkdGg6IDg0NHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuLm1hcmdpbi1hcmVhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDAgMjBweDtcclxufVxyXG4uZG90IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRvcDogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gICYub25lIHtcclxuICAgIGxlZnQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjg5ZjM4O1xyXG4gIH1cclxuICAmLnR3byB7XHJcbiAgICBsZWZ0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQ6ICM2ODlmMzg7XHJcbiAgfVxyXG4gICYudGhyZWUge1xyXG4gICAgbGVmdDogNDkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gICYuZm91ciB7XHJcbiAgICBsZWZ0OiA3MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNiYmI7XHJcbiAgICBjb2xvcjogI2ZmZDgwMDtcclxuICB9XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHRvcDogMjBweDtcclxuICBsZWZ0OiAxMCU7XHJcbiAgYmFja2dyb3VuZDogI2JiYjtcclxuICAmLmZpcnN0IHtcclxuICAgIGJhY2tncm91bmQ6ICM2ODlmMzg7XHJcbiAgfVxyXG4gICYuc2Vjb25kIHtcclxuICAgIGxlZnQ6IDM3JTtcclxuICB9XHJcbiAgJi50aGlyZCB7XHJcbiAgICBsZWZ0OiA2NCU7XHJcbiAgfVxyXG59XHJcbi5tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBsZWZ0OiAtOHB4O1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzAwMDtcclxuICAmLm1lc3NhZ2UtMSB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgJi5tZXNzYWdlLTIge1xyXG4gICAgbGVmdDogMjIwcHg7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgfVxyXG4gICYubWVzc2FnZS0zIHtcclxuICAgIGxlZnQ6IDQyMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5zdGF0dXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbGVmdDogLTYwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAmLmNvZGUge1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gIH1cclxufVxyXG5hIHtcclxuICBjb2xvcjogIzY4OWYzODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ib2R5e1xyXG4gIGZvbnQtc2l6ZToxZW07XHJcbiAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjpcdCMwMDgwZmY7XHJcbn1cclxuXHJcbi5jaXJjbGVze1xyXG4gIGhlaWdodDogMC45MzhlbTtcclxuICB3aWR0aDogMC45MzhlbTtcclxuICBib3JkZXI6IDAuMTg4ZW0gc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZhNTAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWRlc2MtYWN0aXZle1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJhcntcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOjAuNDY5ZW07XHJcbiAgYm9yZGVyOiAwLjAzMWVtIHNvbGlkICMwMDA7XHJcbiAgXHJcbiAgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbjpcIjAgYXV0b1wiO1xyXG4gIGxlZnQ6IDEwJTtcclxuICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gICAgYmFja2dyb3VuZDogIzY4OWYzODtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtaW4td2lkdGg6MzIwcHg7XHJcbiAgbWFyZ2luOiBcIjBweCBhdXRvXCI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2lyY2xlLWRlc2N7XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0b3A6NS4wMDBlbTtcclxuIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuIHdpZHRoOiBhdXRvO1xyXG4gbWF4LXdpZHRoOjkuMzc1ZW07XHJcbiBtYXJnaW4tbGVmdDotMC43NTBlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgIGJvZHkge1xyXG4gICAgIGZvbnQtc2l6ZToyMCVcclxuICB9XHJcbn0gXHJcblxyXG4vKmV4dHJhIHNtYWxsIGRldmljZXMqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgYm9keSB7XHJcbiAgICAgZm9udC1zaXplOjQwJVxyXG4gIH1cclxufSBcclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgIGJvZHkge1xyXG4gICAgIGZvbnQtc2l6ZTo2MCVcclxuICB9XHJcbn0gXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHkge1xyXG4gICAgIGZvbnQtc2l6ZTo4MCVcclxuICB9XHJcbn0gXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICBib2R5IHtcclxuICAgICBmb250LXNpemU6MTAwJVxyXG4gIH1cclxufSBcclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICBib2R5IHtcclxuICAgICBmb250LXNpemU6MTIwJVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbmEge1xuICBjb2xvcjogZGFya2JsdWU7XG59XG5cbiNyaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IC00MCU7XG59XG5cbi50aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4OWYzODtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMy41JTtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogODQ0cHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5tYXJnaW4tYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5kb3Qub25lIHtcbiAgbGVmdDogNjVweDtcbiAgYmFja2dyb3VuZDogIzY4OWYzODtcbn1cbi5kb3QudHdvIHtcbiAgbGVmdDogMjgwcHg7XG4gIGJhY2tncm91bmQ6ICM2ODlmMzg7XG59XG4uZG90LnRocmVlIHtcbiAgbGVmdDogNDkwcHg7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRvdC5mb3VyIHtcbiAgbGVmdDogNzAwcHg7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIGNvbG9yOiAjZmZkODAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xufVxuLnByb2dyZXNzLWJhci5maXJzdCB7XG4gIGJhY2tncm91bmQ6ICM2ODlmMzg7XG59XG4ucHJvZ3Jlc3MtYmFyLnNlY29uZCB7XG4gIGxlZnQ6IDM3JTtcbn1cbi5wcm9ncmVzcy1iYXIudGhpcmQge1xuICBsZWZ0OiA2NCU7XG59XG5cbi5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBsZWZ0OiAtOHB4O1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1lc3NhZ2UubWVzc2FnZS0xIHtcbiAgdG9wOiA0MHB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5tZXNzYWdlLm1lc3NhZ2UtMiB7XG4gIGxlZnQ6IDIyMHB4O1xuICB0b3A6IDQwcHg7XG59XG4ubWVzc2FnZS5tZXNzYWdlLTMge1xuICBsZWZ0OiA0MjBweDtcbiAgdG9wOiA0MHB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwMHB4O1xuICBsZWZ0OiAtNjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnN0YXR1cy5jb2RlIHtcbiAgdG9wOiA3MHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICM2ODlmMzg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hOmhvdmVyLCBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDA4MGZmO1xufVxuXG4uY2lyY2xlcyB7XG4gIGhlaWdodDogMC45MzhlbTtcbiAgd2lkdGg6IDAuOTM4ZW07XG4gIGJvcmRlcjogMC4xODhlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XG59XG5cbi5jaXJjbGUtZGVzYy1hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJhciB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC40NjllbTtcbiAgYm9yZGVyOiAwLjAzMWVtIHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IFwiMCBhdXRvXCI7XG4gIGxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogI2JiYjtcbiAgYmFja2dyb3VuZDogIzY4OWYzODtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogXCIwcHggYXV0b1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXJjbGUtZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1ZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogOS4zNzVlbTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjc1ZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAyMCU7XG4gIH1cbn1cbi8qZXh0cmEgc21hbGwgZGV2aWNlcyovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogNDAlO1xuICB9XG59XG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gIH1cbn1cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxufVxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gIH1cbn1cbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/ordertrack/ordertrack.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/ordertrack/ordertrack.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrdertrackComponent */

  /***/
  function srcAppPagesOrdertrackOrdertrackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdertrackComponent", function () {
      return OrdertrackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/interval */
    "./node_modules/rxjs-compat/_esm2015/add/observable/interval.js");
    /* harmony import */


    var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/takeWhile */
    "./node_modules/rxjs-compat/_esm2015/add/operator/takeWhile.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrdertrackComponent = /*#__PURE__*/function () {
      function OrdertrackComponent(user) {
        _classCallCheck(this, OrdertrackComponent);

        this.user = user;
        this.frames = 100;
        this.deltaLat = 0;
        this.deltaLng = 0;
        this.i = 0;
        this.name = 'Progress Bar'; //Demo purpose only, Data might come from Api calls/service

        this.counts = ["Recieved", "In Progress", "Ready for Billing", "Billed", "Order Closed"];
        this.orderStatus = "Order Closed";
        this.clientIcon = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
        this.driverIcon = "http://maps.google.com/mapfiles/kml/pal2/icon39.png";
        this.link = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyA07KeDT_58GiLqRtkF29Lb3bfiDS3IXuo';
        this.iconloc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzzBFBm89uos6KJk-2kXKfKYlHT_jcq6x4_eaw_44PHVeDoDYd&usqp=CAU'; // scaledSize: {
        //     width: 40,
        //     height: 60
        // }

        this.iconh = 20; // google maps zoom level

        this.zoom = 16; // initial center position for the map

        this.currentPos = {
          lat: 50.082730,
          lng: 14.431697
        };
        this.points = []; // driversList: point[] = [];

        this.drivers = {
          lat: 50.083200,
          lng: 14.430987
        };
        this.tmpPoints = [{
          lat: 50.082911,
          lng: 14.431411
        }, {
          lat: 50.083644,
          lng: 14.430367
        }];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__["connect"]('http://localhost:3000/');
      }

      _createClass(OrdertrackComponent, [{
        key: "gettime",
        value: function gettime() {
          var time = this.user.gettime(this.link);
          alert(time['rows']['elements']['duration']['text']);
        }
      }, {
        key: "calculateDistance",
        value: function calculateDistance() {
          alert("in calc function..");
          var mexicoCity = new google.maps.LatLng(119.432608, -99.133209);
          var jacksonville = new google.maps.LatLng(40.730610, -73.935242);
          var distance = google.maps.geometry.spherical.computeDistanceBetween(mexicoCity, jacksonville);
          alert("the distance calc is:" + distance);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var i = 0;
          var obs = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].interval(500).takeWhile(function (v) {
            return i < _this.tmpPoints.length;
          }).subscribe(function () {
            var pos = _this.tmpPoints[i];

            _this.points.push(pos); // this.driversList.push(pos);


            _this.currentPos = pos;
            i++;
          });
          this.gettime(); // this.calculateDistance();
        }
      }, {
        key: "get",
        value: function get() {
          var _this2 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              if (position) {
                _this2.lat = position.coords.latitude;
                _this2.lng = position.coords.longitude;
              }
            });
          }
        }
      }, {
        key: "moveMarker",
        value: function moveMarker() {
          var _this3 = this;

          {
            this.prevLocationLat = this.prevLocationLat + this.deltaLat;
            this.prevLocationLong = this.prevLocationLong + this.deltaLng;
            this.driverLat = this.prevLocationLat;
            this.driverLong = this.prevLocationLong;

            if (this.i <= 100) {
              this.i++;
              setTimeout(function () {
                _this3.moveMarker();
              }, 10);
            }
          }
        }
      }, {
        key: "animate",
        value: function animate(driverLocation) {
          this.i = 0;
          this.deltaLat = (driverLocation.lat - this.prevLocationLat) / 100;
          this.deltaLng = (driverLocation["long"] - this.prevLocationLong) / 100;
          this.moveMarker();
        }
      }, {
        key: "showMap",
        value: function showMap() {
          var _this4 = this;

          var runOnce = true;
          var client_name = this.clientinput.nativeElement.value;
          if (client_name != null) this.socket.emit("postClientName", client_name);
          this.socket.on("locationUpdate-" + client_name, function (driverLocation) {
            if (runOnce) {
              _this4.driverLat = driverLocation.lat;
              _this4.driverLong = driverLocation["long"];
              runOnce = false;
              _this4.prevLocationLat = driverLocation.lat;
              _this4.prevLocationLong = driverLocation["long"];
            } else {
              _this4.animate(driverLocation);
            }
          });
        }
      }, {
        key: "mapClicked",
        value: function mapClicked() {}
      }]);

      return OrdertrackComponent;
    }();

    OrdertrackComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], {
      "static": true
    }), __metadata("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"])], OrdertrackComponent.prototype, "agmMap", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('track'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], OrdertrackComponent.prototype, "trackButton", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputname'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], OrdertrackComponent.prototype, "clientinput", void 0);

    OrdertrackComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-ordertrack',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./ordertrack.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordertrack/ordertrack.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./ordertrack.component.scss */
      "./src/app/pages/ordertrack/ordertrack.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], OrdertrackComponent);
    /***/
  },

  /***/
  "./src/app/pages/ordertrack/ordertrack.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ordertrack/ordertrack.module.ts ***!
    \*******************************************************/

  /*! exports provided: routes, OrdertrackModule */

  /***/
  function srcAppPagesOrdertrackOrdertrackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdertrackModule", function () {
      return OrdertrackModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var agm_overlays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! agm-overlays */
    "./node_modules/agm-overlays/__ivy_ngcc__/fesm2015/agm-overlays.js");
    /* harmony import */


    var _ordertrack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ordertrack.component */
    "./src/app/pages/ordertrack/ordertrack.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      component: _ordertrack_component__WEBPACK_IMPORTED_MODULE_7__["OrdertrackComponent"],
      pathMatch: 'full'
    }];

    var OrdertrackModule = function OrdertrackModule() {
      _classCallCheck(this, OrdertrackModule);
    };

    OrdertrackModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], agm_overlays__WEBPACK_IMPORTED_MODULE_6__["AgmOverlays"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
      })],
      declarations: [_ordertrack_component__WEBPACK_IMPORTED_MODULE_7__["OrdertrackComponent"]],
      bootstrap: [_ordertrack_component__WEBPACK_IMPORTED_MODULE_7__["OrdertrackComponent"]]
    })], OrdertrackModule);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "gettime",
        value: function gettime(link) {
          return this.http.get(link).toPromise();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=pages-ordertrack-ordertrack-module-es5.js.map