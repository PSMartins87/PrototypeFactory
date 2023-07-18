import Car from "../abstractClasses/car";
import CarFactory from "../abstractClasses/carFactory";
import SUV from "../cars/suv";

export default class SUVFactory extends CarFactory {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    private offRoadAbility: string;

    constructor(brand: string, model: string, year: number, color: string, offRoadAbility: string) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.offRoadAbility = offRoadAbility;
    }

    createCar(): Car {
        return new SUV(this.brand, this.model, this.year, this.color, this.offRoadAbility);
    }
}