import Car from "./car";

export default abstract class CarFactory {
    abstract createCar(): Car;
}