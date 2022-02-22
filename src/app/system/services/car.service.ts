import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
import { Guid } from "guid-typescript";
import { ICar } from '../models/CarModels/car.models';
import { CarCreateModel } from '../models/CarModels/car-create.model';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getAllCars(): Observable<ICar[]> {
    return this.get('/api/cars')
  }

  createCar(model: CarCreateModel): Observable<ICar> {
    return this.post('/api/cars', model)
  }

  deleteCar(idCar: string) {
    return this.delete(`/api/cars/${idCar}`)
  }

}
