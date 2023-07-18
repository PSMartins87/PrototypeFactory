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
var suv_1 = require("../cars/suv");
var SUVFactory = /** @class */ (function (_super) {
    __extends(SUVFactory, _super);
    function SUVFactory(brand, model, year, color, offRoadAbility) {
        var _this = _super.call(this) || this;
        _this.brand = brand;
        _this.model = model;
        _this.year = year;
        _this.color = color;
        _this.offRoadAbility = offRoadAbility;
        return _this;
    }
    SUVFactory.prototype.createCar = function () {
        return new suv_1.default(this.brand, this.model, this.year, this.color, this.offRoadAbility);
    };
    return SUVFactory;
}(carFactory_1.default));
exports.default = SUVFactory;
