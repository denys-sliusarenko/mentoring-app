import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  displayedColumns: string[] = ['id', 'FirstName', 'LastName'];
  users: IUser[] = []
  clickedRows = new Set<IUser>();
  isUsersLoaded = false

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response:IUser[]) => {
      this.users = response
      this.isUsersLoaded = true
    })
  }

}
