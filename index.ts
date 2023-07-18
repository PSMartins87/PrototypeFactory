import SedanFactory from "./factory/SedanFactory";
import SUVFactory from "./factory/SuvFactory";

const sedans = new SedanFactory("Toyota", "Camry", 2022, "Red", 5);
const sedan = sedans.createCar();
const clonedSedan = sedan.clone();

sedan.start();
console.log("Original sedan brand:", sedan.getBrand());
console.log("Original sedan model:", sedan.getModel());
console.log("Original sedan year:", sedan.getYear());
console.log("Original sedan color:", sedan.getColor());
console.log()
clonedSedan.start();
console.log("Cloned sedan brand:", clonedSedan.getBrand());
console.log("Cloned sedan model:", clonedSedan.getModel());
console.log("Cloned sedan year:", clonedSedan.getYear());
console.log("Cloned sedan color:", clonedSedan.getColor());

const suvFactory = new SUVFactory("Jeep", "Wrangler", 2021, "Blue", "excellent");
const suv = suvFactory.createCar();
const clonedSUV = suv.clone();
console.log()
suv.start();
console.log("Original SUV brand:", suv.getBrand());
console.log("Original SUV model:", suv.getModel());
console.log("Original SUV year:", suv.getYear());
console.log("Original SUV color:", suv.getColor());
console.log()
clonedSUV.start();
console.log("Cloned SUV brand:", clonedSUV.getBrand());
console.log("Cloned SUV model:", clonedSUV.getModel());
console.log("Cloned SUV year:", clonedSUV.getYear());
console.log("Cloned SUV color:", clonedSUV.getColor());