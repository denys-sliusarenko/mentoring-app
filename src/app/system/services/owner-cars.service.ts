import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
import { Guid } from "guid-typescript";
import { IOwnerCar } from '../models/owner-cars-models/owner-car.model';
import { OwnerCarCreateModel } from '../models/owner-cars-models/owner-car-create.mode';

@Injectable({
  providedIn: 'root'
})
export class OwnerCarsService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getOwnerCars(IdOwner:string): Observable<IOwnerCar[]> {
    return this.get(`/api/ownercar/getOwnerCars/${IdOwner}`)
  }
  createOwnerCar(model: OwnerCarCreateModel): Observable<IOwnerCar> {
    return this.post('/api/ownercar/addCarOwner',model)
  }
}
