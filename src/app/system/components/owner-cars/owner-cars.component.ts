import { Component, OnInit } from '@angular/core';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner-cars',
  templateUrl: './owner-cars.component.html',
  styleUrls: ['./owner-cars.component.scss']
})
export class OwnerCarsComponent implements OnInit {

  constructor(private ownerService: OwnerService) { }
  
  owners: IOwner[] = []
  isOwnersLoaded = false

  ngOnInit(): void {

    this.ownerService.getAllOwners().subscribe((response: IOwner[]) => {
      this.owners = response
      this.isOwnersLoaded = true
    })
  }
}
