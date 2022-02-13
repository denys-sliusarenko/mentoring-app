import { Guid } from "guid-typescript";
import { ICar } from "../CarModels/car.models";

export interface IOwnerCar {
    car: ICar,
    registrationNumber: string
}
