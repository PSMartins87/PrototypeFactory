"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
exports.default = Car;
