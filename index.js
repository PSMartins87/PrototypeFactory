"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SedanFactory_1 = require("./factory/SedanFactory");
var SuvFactory_1 = require("./factory/SuvFactory");
var sedans = new SedanFactory_1.default("Toyota", "Camry", 2022, "Red", 5);
var sedan = sedans.createCar();
var clonedSedan = sedan.clone();
sedan.start();
console.log("Original sedan brand:", sedan.getBrand());
console.log("Original sedan model:", sedan.getModel());
console.log("Original sedan year:", sedan.getYear());
console.log("Original sedan color:", sedan.getColor());
console.log();
clonedSedan.start();
console.log("Cloned sedan brand:", clonedSedan.getBrand());
console.log("Cloned sedan model:", clonedSedan.getModel());
console.log("Cloned sedan year:", clonedSedan.getYear());
console.log("Cloned sedan color:", clonedSedan.getColor());
var suvFactory = new SuvFactory_1.default("Jeep", "Wrangler", 2021, "Blue", "excellent");
var suv = suvFactory.createCar();
var clonedSUV = suv.clone();
console.log();
suv.start();
console.log("Original SUV brand:", suv.getBrand());
console.log("Original SUV model:", suv.getModel());
console.log("Original SUV year:", suv.getYear());
console.log("Original SUV color:", suv.getColor());
console.log();
clonedSUV.start();
console.log("Cloned SUV brand:", clonedSUV.getBrand());
console.log("Cloned SUV model:", clonedSUV.getModel());
console.log("Cloned SUV year:", clonedSUV.getYear());
console.log("Cloned SUV color:", clonedSUV.getColor());
