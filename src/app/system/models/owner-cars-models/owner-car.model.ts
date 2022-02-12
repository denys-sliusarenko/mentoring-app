import { Guid } from "guid-typescript";
import { ICar } from "../CarModels/car.models";

export interface IOwnerCar {
    id: Guid,
    car: ICar,
    registrationNumber: string
}
