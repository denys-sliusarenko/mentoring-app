import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { IOwnerCar } from '../../models/owner-cars-models/owner-car.model';
import { OwnerCarsService } from '../../services/owner-cars.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registry-cars-owner',
  templateUrl: './registry-cars-owner.component.html',
  styleUrls: ['./registry-cars-owner.component.scss']
})
export class RegistryCarsOwnerComponent implements OnInit {

  constructor(private ownerCarsService: OwnerCarsService) { }

  @Input() idUser = Guid.createEmpty()
  ownerCars: IOwnerCar[] = []
  isOwnerCarsLoaded = false
  displayedColumns: string[] = ['RegistrationNumber', 'Color', 'Brand'];
  dataSource = new MatTableDataSource<IOwnerCar>();

  ngOnInit(): void {
    this.isOwnerCarsLoaded = false
    this.ownerCarsService.getOwnerCars(this.idUser).subscribe((response: IOwnerCar[]) => {
      this.ownerCars = response
      this.dataSource.data = this.ownerCars
      this.isOwnerCarsLoaded = true
    })
  }

}
