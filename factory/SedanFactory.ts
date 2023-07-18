import Car from "../abstractClasses/car";
import CarFactory from "../abstractClasses/carFactory";
import Sedan from "../cars/sedan";

export default class SedanFactory extends CarFactory {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    private seats: number;

    constructor(brand: string, model: string, year: number, color: string, seats: number) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.seats = seats;
    }

    createCar(): Car {
        return new Sedan(this.brand, this.model, this.year, this.color, this.seats);
    }
}
