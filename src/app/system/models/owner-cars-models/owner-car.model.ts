import { Guid } from "guid-typescript";
import { ICar } from "../CarModels/car.models";

export interface IOwnerCar {
    id:string,
    car: ICar,
    registrationNumber: string
}
