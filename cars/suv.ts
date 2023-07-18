import Car from "../abstractClasses/car";

export default class SUV extends Car {
    private offRoadAbility: string;

    constructor(brand: string, model: string, year: number, color: string, offRoadAbility: string) {
        super(brand, model, year, color);
        this.offRoadAbility = offRoadAbility;
    }

    clone(): Car {
        return new SUV(this.brand, this.model, this.year, this.color, this.offRoadAbility);
    }

    start(): void {
        console.log(`Starting ${this.color} ${this.year} ${this.brand} ${this.model} SUV with ${this.offRoadAbility} off-road ability`);
    }
}
