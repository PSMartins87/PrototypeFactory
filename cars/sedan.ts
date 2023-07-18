import Car from "../abstractClasses/car";

export default class Sedan extends Car {
    private seats: number;

    constructor(brand: string, model: string, year: number, color: string, seats: number) {
        super(brand, model, year, color);
        this.seats = seats;
    }

    clone(): Car {
        return new Sedan(this.brand, this.model, this.year, this.color, this.seats);
    }

    start(): void {
        console.log(`Starting ${this.color} ${this.year} ${this.brand} ${this.model} Sedan with ${this.seats} seats`);
    }
}