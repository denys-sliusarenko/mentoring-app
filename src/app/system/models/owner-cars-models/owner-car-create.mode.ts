import { Guid } from "guid-typescript";

export class OwnerCarCreateModel {
    constructor(
        public carId: string,
        public ownerId: string,
        public registrationNumber:string) {
    }

}