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
var carFactory_1 = require("../abstractClasses/carFactory");
var sedan_1 = require("../cars/sedan");
var SedanFactory = /** @class */ (function (_super) {
    __extends(SedanFactory, _super);
    function SedanFactory(brand, model, year, color, seats) {
        var _this = _super.call(this) || this;
        _this.brand = brand;
        _this.model = model;
        _this.year = year;
        _this.color = color;
        _this.seats = seats;
        return _this;
    }
    SedanFactory.prototype.createCar = function () {
        return new sedan_1.default(this.brand, this.model, this.year, this.color, this.seats);
    };
    return SedanFactory;
}(carFactory_1.default));
exports.default = SedanFactory;
