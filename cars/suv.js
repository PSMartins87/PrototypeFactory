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
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(brand, model, year, color, offRoadAbility) {
        var _this = _super.call(this, brand, model, year, color) || this;
        _this.offRoadAbility = offRoadAbility;
        return _this;
    }
    SUV.prototype.clone = function () {
        return new SUV(this.brand, this.model, this.year, this.color, this.offRoadAbility);
    };
    SUV.prototype.start = function () {
        console.log("Starting ".concat(this.color, " ").concat(this.year, " ").concat(this.brand, " ").concat(this.model, " SUV with ").concat(this.offRoadAbility, " off-road ability"));
    };
    return SUV;
}(car_1.default));
exports.default = SUV;
