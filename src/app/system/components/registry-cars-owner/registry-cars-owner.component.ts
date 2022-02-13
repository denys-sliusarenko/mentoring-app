import { Component, Input, OnInit } from '@angular/core';
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

  ownerCars: IOwnerCar[] = []
  isOwnerCarsLoaded = false
  displayedColumns: string[] = ['index', 'RegistrationNumber', 'Color', 'Brand'];
  dataSource = new MatTableDataSource<IOwnerCar>();


  _idOwner: string = '';
  get idOwner(): string {
    return this._idOwner;
  }

  @Input() set idOwner(value: string) {
    this._idOwner = value;
    this.updateRegistryCars()
  }

  updateRegistryCars() {
    this.isOwnerCarsLoaded = false
    this.ownerCarsService.getOwnerCars(this.idOwner).subscribe((response: IOwnerCar[]) => {
      this.ownerCars = response
      this.dataSource.data = this.ownerCars
      this.isOwnerCarsLoaded = true
    })
  }

  ngOnInit(): void {

  }
  ngOnChanges() {
    this.updateRegistryCars()
  }

}
