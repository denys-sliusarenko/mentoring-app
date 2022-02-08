import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
import { Guid } from "guid-typescript";
import { IOwner } from '../models/OwnerModels/owner.model';
import { OwnerCreateModel } from '../models/OwnerModels/ownerCreate.model';
import { OwnerUpdateModel } from '../models/OwnerModels/ownerUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getAllOwners(): Observable<IOwner[]> {
    return this.get('/api/owners')
  }

  getOwner(Id: Guid): Observable<IOwner[]> {
    return this.get(`/api/owners/id=${Id}`)
  }


  createOwner(model: OwnerCreateModel): Observable<IOwner[]> {
    return this.post("/api/owners", model)
  }

  deleteOwner(Id: Guid): Observable<IOwner[]> {
    return this.delete(`/api/owners/id=${Id}`)
  }

  updateOwner(model: OwnerUpdateModel): Observable<IOwner[]> {
    return this.put("/api/owners", model)
  }

}
