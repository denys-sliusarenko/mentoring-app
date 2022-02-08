import { Guid } from "guid-typescript";

export class OwnerUpdateModel {
    constructor(
        public id: Guid,
        public firstName: string,
        public lastName: string) {
    }
}