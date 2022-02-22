import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
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

  getOwner(Id: string): Observable<IOwner[]> {
    return this.get(`/api/owners/id=${Id}`)
  }


  createOwner(model: OwnerCreateModel): Observable<IOwner> {
    return this.post("/api/owners", model)
  }

  deleteOwner(Id: string): Observable<IOwner[]> {
    return this.delete(`/api/owners/${Id}`)
  }

  updateOwner(model: OwnerUpdateModel): Observable<IOwner> {
    return this.put("/api/owners", model)
  }

}
