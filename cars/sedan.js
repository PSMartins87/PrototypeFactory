"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("../abstractClasses/car");
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(brand, model, year, color, seats) {
        var _this = _super.call(this, brand, model, year, color) || this;
        _this.seats = seats;
        return _this;
    }
    Sedan.prototype.clone = function () {
        return new Sedan(this.brand, this.model, this.year, this.color, this.seats);
    };
    Sedan.prototype.start = function () {
        console.log("Starting ".concat(this.color, " ").concat(this.year, " ").concat(this.brand, " ").concat(this.model, " Sedan with ").concat(this.seats, " seats"));
    };
    return Sedan;
}(car_1.default));
exports.default = Sedan;
