import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICar } from '../../models/CarModels/car.models';
import { OwnerCarCreateModel } from '../../models/owner-cars-models/owner-car-create.mode';
import { IOwnerCar } from '../../models/owner-cars-models/owner-car.model';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { CarService } from '../../services/car.service';
import { OwnerCarsService } from '../../services/owner-cars.service';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-add-owner-cars',
  templateUrl: './add-owner-cars.component.html',
  styleUrls: ['./add-owner-cars.component.scss']
})
export class AddOwnerCarsComponent implements OnInit {

  constructor(private ownerService: OwnerService,
    public ownerCarService: OwnerCarsService,
    private carService: CarService,
    private snackBar: MatSnackBar) { }
  owners: IOwner[] = []
  cars: ICar[] = []
  isOwnersLoaded = false
  isCarsLoaded = false
  selectedOwner: any;
  ownerCarCreateForm = new FormGroup({
    "carId": new FormControl('', Validators.required),
    "ownerId": new FormControl('', Validators.required),
    "registrationNumber": new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe((response: IOwner[]) => {
      this.owners = response
      this.isOwnersLoaded = true
    })

    this.isCarsLoaded = false
    this.carService.getAllCars().subscribe((response: ICar[]) => {
      this.cars = response
      this.isCarsLoaded = true
    })
  }
  changeSelectedOwner(event: any, owner: IOwner) {
    if (event.isUserInput) {
       this.selectedOwner = owner
    }
  }

  saveOwnerCar() {

    const formData = this.ownerCarCreateForm.value
    var model = new OwnerCarCreateModel(formData.carId, formData.ownerId, formData.registrationNumber)

    this.ownerCarService.createOwnerCar(model).subscribe((response: IOwnerCar) => {
      this.snackBar.open("Saved", "Ok", {
        duration: 5000
      });

      this.ownerCarCreateForm.reset()
    }
    )
  }
}
