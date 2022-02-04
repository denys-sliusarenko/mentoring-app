import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPI } from 'src/app/shared/core/base-api';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getAllUsers():Observable<IUser[]>{
    return this.get('/api/users')
  }
}
