import { Component, OnInit } from '@angular/core';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService) { }

  displayedColumns: string[] = ['id', 'FirstName', 'LastName'];
  owners: IOwner[] = []
  clickedRows = new Set<IOwner>();
  isOwnersLoaded = false

  ngOnInit(): void {
    this.isOwnersLoaded = false
    this.ownerService.getAllOwners().subscribe((response: IOwner[]) => {
      this.owners = response
      this.isOwnersLoaded = true
    })
  }

  public updateOwner(){

  }
}
