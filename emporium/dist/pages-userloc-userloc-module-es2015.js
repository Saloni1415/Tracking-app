(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userloc-userloc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userloc/userloc.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userloc/userloc.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\">\n  <span *ngFor=\"let item of counts;let i = index\">\n    <span class=\"circle-desc\" [class.circle-desc-active]=\"orderStatus == item\">{{ item }}</span>\n    <span class=\"circles\" [class.active]=\"orderStatus == item\"></span>\n    <span class=\"bar\" *ngIf=\"(i != counts.length-1)\"></span>\n  </span>\n  </div>\n\n\n<br><br><br>\n    \n<div>\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n    <mat-card-header >\n      <img style=\"margin-left:-250px;\" width=40px; height= 40px; src=\"https://img.icons8.com/dusk/64/000000/checked-truck.png\">\n      <mat-card-title style=\"margin-left: 70px;\" ><b>Order Delivered</b></mat-card-title>\n      \n      \n    </mat-card-header>\n    <!-- <mat-card-content>\n      <p>\n      ibbzdisb\n      </p>\n    </mat-card-content> -->\n  </mat-card>\n</div>\n<br>\n<div>\n\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n    \n    <mat-card-header >\n      <img style=\"margin-left:-290px;\" width =50px; height= 50px; src=\"https://img.icons8.com/plasticine/100/000000/deliver-food.png\">\n      <mat-card-title style=\"margin-left: 70px;\">Order out for delivery</mat-card-title>\n      \n    </mat-card-header>\n  \n  </mat-card>\n</div>\n<br>\n<div>\n\n    <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n      \n      <mat-card-header >\n        <img style=\"margin-left:-290px;\" width =50px; height= 50px; src=\"https://img.icons8.com/plasticine/100/000000/deliver-food.png\">\n        <mat-card-title style=\"margin-left: 70px;\">Order shipped</mat-card-title>\n        \n      </mat-card-header>\n    \n    </mat-card>\n  </div>\n  <br>\n  <div>\n\n    <mat-card  [style.width.px]=500 [style.border]=\"'#000'\" >\n      \n      <mat-card-header >\n        <img style=\"margin-left:-290px;\" width =50px; height= 50px; src=\"https://img.icons8.com/plasticine/100/000000/deliver-food.png\">\n        <mat-card-title style=\"margin-left: 70px;\">Order Picked</mat-card-title>\n        \n      </mat-card-header>\n    \n    </mat-card>\n  </div>\n<br>\n<div>\n\n  <mat-card  [style.width.px]=500 [style.border]=\"'#000'\">\n    <mat-card-header >\n      <mat-card-title>Reached Seller's House</mat-card-title>\n      \n    </mat-card-header>\n\n  </mat-card>\n</div>\n<br><br><br>\n\n<h3 class=\"time\">ARRIVING IN <br><center><h2 style=\"color:white\"><b>3 days</b></h2></center> </h3>\n<div id=\"right\">\n<form (ngSubmit)=\"showMap()\">\n    <br>\n    <div style=\"margin-left: 1%;\">\n        <label style=\"margin-top: 15px; margin-left: 75%\" for=\"exampleForm2\">Client-name : </label>\n        <input type=\"text\" style=\"width: 20%;  margin-left: 75%; margin-bottom: 1%;\" #inputname  class=\"form-control\">\n        <button type=\"submit\" id=\"button\"  style=\"  margin-left: 75%\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" data-lat='21.03' data-lng='105.85'>Track order</button>\n        <h2 class=\"modal-title\" id=\"myModalLabel\"><b>Track Your Order</b></h2><span>Delivery Status : <span #deliverystatus> </span> </span> \n    </div>\n    <!-- <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\" style=\" height: 520px;\">\n            <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n             \n            </div>\n            <div class=\"modal-body\"> -->\n            \n            <div class=\"row\">\n                <div class=\"col-md-12 modal_body_map\">\n                <div class=\"location-map\" id=\"location-map\">\n                    <agm-map style=\"width: 100%; height: 380px; margin-left: 2%; margin-top: 0%;\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">  \n                        <agm-marker  [latitude]=\"lat\" [longitude]=\"lng\"  [animation]=\"'BOUNCE'\"  [iconUrl]=\"clientIcon\"></agm-marker>\n                        <agm-marker  [latitude]=\"driverLat\" [longitude]=\"driverLong\" [animation]=\"'DROP'\"  [iconUrl]=\"driverIcon\"></agm-marker>  \n                    </agm-map>\n                </div>\n                </div>\n            </div>\n            <!-- <div class=\"row\">\n                <div class=\"col-md-12 modal_body_end\">\n                \n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </div> -->\n</form>\n</div>");

/***/ }),

/***/ "./src/app/pages/userloc/userloc.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/userloc/userloc.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: Lato;\n}\n\na {\n  color: darkblue;\n}\n\n#right {\n  margin-left: 50%;\n  margin-top: -40%;\n}\n\n.time {\n  background-color: #689f38;\n  width: 108px;\n  height: 70px;\n  margin-left: 13.5%;\n}\n\n.wrapper {\n  width: 844px;\n  height: 130px;\n}\n\n.margin-area {\n  position: relative;\n  text-align: center;\n  font-family: \"Trebuchet\", sans-serif;\n  font-size: 14px;\n  margin: 0 20px;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  background: #000;\n  border-radius: 50%;\n  top: 10px;\n  color: #fff;\n  line-height: 30px;\n  z-index: 9999;\n}\n\n.dot.one {\n  left: 65px;\n  background: #689f38;\n}\n\n.dot.two {\n  left: 280px;\n  background: #689f38;\n}\n\n.dot.three {\n  left: 490px;\n  background: #bbb;\n  color: #000000;\n}\n\n.dot.four {\n  left: 700px;\n  background: #bbb;\n  color: #ffd800;\n}\n\n.progress-bar {\n  position: absolute;\n  height: 10px;\n  width: 25%;\n  top: 20px;\n  left: 10%;\n  background: #bbb;\n}\n\n.progress-bar.first {\n  background: #689f38;\n}\n\n.progress-bar.second {\n  left: 37%;\n}\n\n.progress-bar.third {\n  left: 64%;\n}\n\n.message {\n  position: absolute;\n  height: 60px;\n  width: 170px;\n  padding: 10px;\n  margin: 0;\n  left: -8px;\n  top: 0;\n  color: #000;\n}\n\n.message.message-1 {\n  top: 40px;\n  color: #000;\n}\n\n.message.message-2 {\n  left: 220px;\n  top: 40px;\n}\n\n.message.message-3 {\n  left: 420px;\n  top: 40px;\n  color: #000;\n}\n\n.status {\n  position: absolute;\n  width: 700px;\n  left: -600px;\n  text-align: center;\n  padding: 20px;\n  color: black;\n}\n\n.status.code {\n  top: 70px;\n}\n\na {\n  color: #689f38;\n  text-decoration: none;\n  font-weight: bold;\n}\n\na:hover, a:focus {\n  text-decoration: underline;\n}\n\nbody {\n  font-size: 1em;\n  height: 100%;\n}\n\nh3 {\n  font-family: Lato;\n  text-align: center;\n  color: #0080ff;\n}\n\n.circles {\n  height: 30px;\n  width: 30px;\n  background-color: #689f38;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.active {\n  background-color: #ffa500;\n}\n\n.circle-desc-active {\n  font-weight: bold;\n  margin-top: 11%;\n}\n\n.bar {\n  width: 15%;\n  height: 10px;\n  margin-bottom: 0.469em;\n  display: inline-block;\n  text-align: center;\n  margin: \"0 auto\";\n  left: 8%;\n  background: #bbb;\n  background: #689f38;\n}\n\n.container {\n  min-width: 320px;\n  margin: \"0px auto\";\n  text-align: center;\n}\n\n.circle-desc {\n  position: absolute;\n  top: 5em;\n  font-size: 1.125em;\n  width: auto;\n  max-width: 9.375em;\n  margin-left: -0.75em;\n  margin-top: 11%;\n}\n\n@media only screen and (max-width: 320px) {\n  body {\n    font-size: 20%;\n  }\n}\n\n/*extra small devices*/\n\n@media only screen and (max-width: 600px) {\n  body {\n    font-size: 40%;\n  }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n@media only screen and (min-width: 600px) {\n  body {\n    font-size: 60%;\n  }\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  body {\n    font-size: 80%;\n  }\n}\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 992px) {\n  body {\n    font-size: 100%;\n  }\n}\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  body {\n    font-size: 120%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcmxvYy9DOlxcVXNlcnNcXHNhbG9uaVxcRGVza3RvcFxcRmlyc3QtcHJvamVjdFxcZW1wb3JpdW0vc3JjXFxhcHBcXHBhZ2VzXFx1c2VybG9jXFx1c2VybG9jLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VybG9jL3VzZXJsb2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FETUU7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNISjs7QURLRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURHSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0ROOztBREdJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDRE47O0FER0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRE47O0FER0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRE47O0FESUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREVJO0VBQ0UsbUJBQUE7QUNBTjs7QURFSTtFQUNFLFNBQUE7QUNBTjs7QURFSTtFQUNFLFNBQUE7QUNBTjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRENJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUNDTjs7QURDSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDQ047O0FEQ0k7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDTjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FEQ0k7RUFDRSxTQUFBO0FDQ047O0FERUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREFJO0VBQ0UsMEJBQUE7QUNFTjs7QURHRTtFQUNFLGNBQUE7RUFDQyxZQUFBO0FDQUw7O0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNJLHlCQUFBO0FDQU47O0FER0U7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFJQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDRSxtQkFBQTtBQ0hOOztBRE1FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0hIOztBRE1FO0VBQ0c7SUFDRSxjQUFBO0VDSEw7QUFDRjs7QURNRSxzQkFBQTs7QUFDQTtFQUNHO0lBQ0UsY0FBQTtFQ0pMO0FBQ0Y7O0FET0Usb0VBQUE7O0FBQ0E7RUFDRztJQUNFLGNBQUE7RUNMTDtBQUNGOztBRFFFLHFEQUFBOztBQUNBO0VBQ0U7SUFDRyxjQUFBO0VDTkw7QUFDRjs7QURTRSxtREFBQTs7QUFDQTtFQUNFO0lBQ0csZUFBQTtFQ1BMO0FBQ0Y7O0FEVUUsb0VBQUE7O0FBQ0E7RUFDRztJQUNFLGVBQUE7RUNSTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcmxvYy91c2VybG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG4gIFxyXG4gICNyaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDAlO1xyXG4gIH1cclxuICBcclxuICAudGltZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzLjUlO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBcclxuICAgIHdpZHRoOiA4NDRweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgfVxyXG4gIC5tYXJnaW4tYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICAuZG90IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgJi5vbmUge1xyXG4gICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjg5ZjM4O1xyXG4gICAgfVxyXG4gICAgJi50d28ge1xyXG4gICAgICBsZWZ0OiAyODBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzY4OWYzODtcclxuICAgIH1cclxuICAgICYudGhyZWUge1xyXG4gICAgICBsZWZ0OiA0OTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAmLmZvdXIge1xyXG4gICAgICBsZWZ0OiA3MDBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgY29sb3I6ICNmZmQ4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQ6ICNiYmI7XHJcbiAgICAmLmZpcnN0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzY4OWYzODtcclxuICAgIH1cclxuICAgICYuc2Vjb25kIHtcclxuICAgICAgbGVmdDogMzclO1xyXG4gICAgfVxyXG4gICAgJi50aGlyZCB7XHJcbiAgICAgIGxlZnQ6IDY0JTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxlZnQ6IC04cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgICYubWVzc2FnZS0xIHtcclxuICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgICYubWVzc2FnZS0yIHtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgIH1cclxuICAgICYubWVzc2FnZS0zIHtcclxuICAgICAgbGVmdDogNDIwcHg7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgLnN0YXR1cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBsZWZ0OiAtNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgJi5jb2RlIHtcclxuICAgICAgdG9wOiA3MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiAjNjg5ZjM4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGJvZHl7XHJcbiAgICBmb250LXNpemU6MWVtO1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpcdCMwMDgwZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGVze1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2ODlmMzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYTUwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmNsZS1kZXNjLWFjdGl2ZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAxMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYXJ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowLjQ2OWVtO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46XCIwIGF1dG9cIjtcclxuICAgIGxlZnQ6IDglO1xyXG4gICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgICAgYmFja2dyb3VuZDogIzY4OWYzODtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1pbi13aWR0aDozMjBweDtcclxuICAgIG1hcmdpbjogXCIwcHggYXV0b1wiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2lyY2xlLWRlc2N7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOjUuMDAwZW07XHJcbiAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIG1heC13aWR0aDo5LjM3NWVtO1xyXG4gICBtYXJnaW4tbGVmdDotMC43NTBlbTtcclxuICAgbWFyZ2luLXRvcDogMTElO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgICBib2R5IHtcclxuICAgICAgIGZvbnQtc2l6ZToyMCVcclxuICAgIH1cclxuICB9IFxyXG4gIFxyXG4gIC8qZXh0cmEgc21hbGwgZGV2aWNlcyovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgYm9keSB7XHJcbiAgICAgICBmb250LXNpemU6NDAlXHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxuICAvKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgYm9keSB7XHJcbiAgICAgICBmb250LXNpemU6NjAlXHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxuICAvKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgIGZvbnQtc2l6ZTo4MCVcclxuICAgIH1cclxuICB9IFxyXG4gIFxyXG4gIC8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgIGZvbnQtc2l6ZToxMDAlXHJcbiAgICB9XHJcbiAgfSBcclxuICBcclxuICAvKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgIGJvZHkge1xyXG4gICAgICAgZm9udC1zaXplOjEyMCVcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG5hIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4jcmlnaHQge1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNDAlO1xufVxuXG4udGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlmMzg7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tbGVmdDogMTMuNSU7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDg0NHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4ubWFyZ2luLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5kb3Qge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4uZG90Lm9uZSB7XG4gIGxlZnQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICM2ODlmMzg7XG59XG4uZG90LnR3byB7XG4gIGxlZnQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiAjNjg5ZjM4O1xufVxuLmRvdC50aHJlZSB7XG4gIGxlZnQ6IDQ5MHB4O1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kb3QuZm91ciB7XG4gIGxlZnQ6IDcwMHB4O1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBjb2xvcjogI2ZmZDgwMDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjUlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogI2JiYjtcbn1cbi5wcm9ncmVzcy1iYXIuZmlyc3Qge1xuICBiYWNrZ3JvdW5kOiAjNjg5ZjM4O1xufVxuLnByb2dyZXNzLWJhci5zZWNvbmQge1xuICBsZWZ0OiAzNyU7XG59XG4ucHJvZ3Jlc3MtYmFyLnRoaXJkIHtcbiAgbGVmdDogNjQlO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTcwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgbGVmdDogLThweDtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5tZXNzYWdlLm1lc3NhZ2UtMSB7XG4gIHRvcDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWVzc2FnZS5tZXNzYWdlLTIge1xuICBsZWZ0OiAyMjBweDtcbiAgdG9wOiA0MHB4O1xufVxuLm1lc3NhZ2UubWVzc2FnZS0zIHtcbiAgbGVmdDogNDIwcHg7XG4gIHRvcDogNDBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MDBweDtcbiAgbGVmdDogLTYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zdGF0dXMuY29kZSB7XG4gIHRvcDogNzBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNjg5ZjM4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYTpob3ZlciwgYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogTGF0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwODBmZjtcbn1cblxuLmNpcmNsZXMge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XG59XG5cbi5jaXJjbGUtZGVzYy1hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTElO1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjQ2OWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBcIjAgYXV0b1wiO1xuICBsZWZ0OiA4JTtcbiAgYmFja2dyb3VuZDogI2JiYjtcbiAgYmFja2dyb3VuZDogIzY4OWYzODtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogXCIwcHggYXV0b1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaXJjbGUtZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1ZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogOS4zNzVlbTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjc1ZW07XG4gIG1hcmdpbi10b3A6IDExJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDIwJTtcbiAgfVxufVxuLypleHRyYSBzbWFsbCBkZXZpY2VzKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiA0MCU7XG4gIH1cbn1cbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDYwJTtcbiAgfVxufVxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG59XG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgfVxufVxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/userloc/userloc.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/userloc/userloc.component.ts ***!
  \****************************************************/
/*! exports provided: UserlocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlocComponent", function() { return UserlocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UserlocComponent = class UserlocComponent {
    constructor() {
        this.frames = 100;
        this.deltaLat = 0;
        this.deltaLng = 0;
        this.i = 0;
        this.name = 'Progress Bar';
        //Demo purpose only, Data might come from Api calls/service
        this.counts = ["reached seller house", "Order Picked", "Shipped",
            "Out for Delivery", "Delivered"];
        this.orderStatus = "";
        this.clientIcon = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
        this.driverIcon = "http://maps.google.com/mapfiles/kml/pal2/icon39.png";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]('http://localhost:3000/');
    }
    get() {
        //this.distanceMatrixApi();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                }
            });
        }
    }
    distanceMatrixApi() {
        let service = new google.maps.DistanceMatrixService();
        let origin1 = new google.maps.LatLng(55.930385, -3.118425);
        var destinationB = new google.maps.LatLng(50.087692, 14.421150);
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationB],
            travelMode: google.maps.TravelMode.DRIVING,
            drivingOptions: {
                departureTime: new Date(Date.now() + 10),
                trafficModel: google.maps.TrafficModel.OPTIMISTIC
            },
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false,
            region: 'Dehradun'
        }, (res, status) => {
            alert(status);
            console.log(res.rows[0].elements[0].distance);
        });
    }
    moveMarker() {
        {
            this.prevLocationLat = this.prevLocationLat + this.deltaLat;
            this.prevLocationLong = this.prevLocationLong + this.deltaLng;
            this.driverLat = this.prevLocationLat;
            this.driverLong = this.prevLocationLong;
            if (this.i <= 100) {
                (this.i)++;
                setTimeout(() => { this.moveMarker(); }, 10);
            }
        }
    }
    animate(driverLocation) {
        this.i = 0;
        this.deltaLat = (driverLocation.lat - this.prevLocationLat) / 100;
        this.deltaLng = (driverLocation.long - this.prevLocationLong) / 100;
        this.moveMarker();
    }
    updateStatus() {
    }
    showMap() {
        let runOnce = true;
        let client_name = this.clientinput.nativeElement.value;
        if (client_name != null)
            this.socket.emit("postClientName", client_name);
        this.socket.on('status-' + client_name, data => {
            this.status = data;
            this.deliveryStatus.nativeElement.textContent = this.status;
        });
        this.socket.on("update-" + client_name, (driver) => {
            if (runOnce) {
                this.driverLat = driver.location.lat;
                this.driverLong = driver.location.long;
                runOnce = false;
                this.status = driver.status;
                this.deliveryStatus.nativeElement.textContent = this.status;
                this.orderStatus = this.status;
                // alert(this.orderStatus);
                this.prevLocationLat = driver.location.lat;
                this.prevLocationLong = driver.location.long;
            }
            else {
                this.animate(driver.location);
            }
        });
    }
    ngOnInit() {
        this.get();
        this.agmMap.triggerResize(true);
        this.zoom = 14;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], { static: true }),
    __metadata("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"])
], UserlocComponent.prototype, "agmMap", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('track'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], UserlocComponent.prototype, "trackButton", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputname'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], UserlocComponent.prototype, "clientinput", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('deliverystatus'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], UserlocComponent.prototype, "deliveryStatus", void 0);
UserlocComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-userloc',
        template: __importDefault(__webpack_require__(/*! raw-loader!./userloc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userloc/userloc.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./userloc.component.scss */ "./src/app/pages/userloc/userloc.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], UserlocComponent);



/***/ }),

/***/ "./src/app/pages/userloc/userloc.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/userloc/userloc.module.ts ***!
  \*************************************************/
/*! exports provided: routes, UserlocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlocModule", function() { return UserlocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _userloc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userloc.component */ "./src/app/pages/userloc/userloc.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-overlays */ "./node_modules/agm-overlays/__ivy_ngcc__/fesm2015/agm-overlays.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const routes = [
    { path: '', component: _userloc_component__WEBPACK_IMPORTED_MODULE_2__["UserlocComponent"], pathMatch: 'full' }
];
let UserlocModule = class UserlocModule {
};
UserlocModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_userloc_component__WEBPACK_IMPORTED_MODULE_2__["UserlocComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            agm_overlays__WEBPACK_IMPORTED_MODULE_8__["AgmOverlays"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"]
        ]
    })
], UserlocModule);



/***/ })

}]);
//# sourceMappingURL=pages-userloc-userloc-module-es2015.js.map