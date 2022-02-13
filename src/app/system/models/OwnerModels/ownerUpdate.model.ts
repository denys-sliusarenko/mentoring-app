import { Guid } from "guid-typescript";

export class OwnerUpdateModel {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string) {
    }
}