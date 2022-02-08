import { Guid } from "guid-typescript";

export interface IOwner {
    id: Guid,
    firstName: string,
    lastName: string
}