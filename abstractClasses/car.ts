export default abstract class Car {
    protected brand: string;
    protected model: string;
    protected year: number;
    protected color: string;

    constructor(brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    abstract clone(): Car;

    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    getColor(): string {
        return this.color;
    }
    abstract start(): void;
}
