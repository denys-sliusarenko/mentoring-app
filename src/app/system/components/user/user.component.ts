import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  public dataSource = new MatTableDataSource<IUser>();

  users:IUser[]=[]
  
  ngOnInit(): void {
     this.userService.getAllUsers().subscribe(response =>{
       this.users=response
       this.dataSource.data = response;

     })
  }

}
