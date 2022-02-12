import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
import { Guid } from "guid-typescript";
import { IOwnerCar } from '../models/owner-cars-models/owner-car.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerCarsService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getOwnerCars(IdOwner: Guid): Observable<IOwnerCar[]> {
    return this.get(`/api/ownercar/getOwnerCars/${IdOwner}`)
  }

}
