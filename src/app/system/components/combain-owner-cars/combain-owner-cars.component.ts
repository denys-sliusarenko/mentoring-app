import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ICar } from '../../models/CarModels/car.models';
import { OwnerCarCreateModel } from '../../models/owner-cars-models/owner-car-create.mode';
import { IOwnerCar } from '../../models/owner-cars-models/owner-car.model';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { CarService } from '../../services/car.service';
import { OwnerCarsService } from '../../services/owner-cars.service';
import { OwnerService } from '../../services/owner.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmWindowComponent } from 'src/app/shared/components/modal-confirm-window/modal-confirm-window.component';

@Component({
  selector: 'app-combain-owner-cars',
  templateUrl: './combain-owner-cars.component.html',
  styleUrls: ['./combain-owner-cars.component.scss']
})
export class CombainOwnerCarsComponent implements OnInit {

  constructor(private ownerService: OwnerService,
    public ownerCarService: OwnerCarsService,
    public dialog: MatDialog,
    private carService: CarService,
    private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['index', 'RegistrationNumber', 'Color', 'Brand', 'delete'];

  dataSource = new MatTableDataSource<IOwnerCar>();
  savedOrDeletedOwnerCar = false
  owners: IOwner[] = []
  ownerCars: IOwnerCar[] = []
  isOwnerCarsLoaded = false
  cars: ICar[] = []
  isOwnersLoaded = false
  isCarsLoaded = false
  selectedOwner: IOwner | undefined;

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
      this.isOwnerCarsLoaded = false
      this.ownerCarService.getOwnerCars(owner.id).subscribe((response: IOwnerCar[]) => {
        this.ownerCars = response
        this.dataSource.data = this.ownerCars
        this.isOwnerCarsLoaded = true
      })
    }
  }

  deleteOwnerCar(idOwnerCar: string) {

    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want remove car for owner?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.savedOrDeletedOwnerCar = true
        this.ownerCarService.deleteOwnerCar(idOwnerCar).subscribe(() => {
          this.snackBar.open("Deleted", "Ok", {
            duration: 5000
          });
          this.ownerCars = this.ownerCars.filter(item => item.id != idOwnerCar);

          this.dataSource.data = this.ownerCars
          this.ownerCarCreateForm.controls['carId'].reset()
          this.ownerCarCreateForm.controls['registrationNumber'].reset()
          this.savedOrDeletedOwnerCar = false
        }
        )
      }
    })
  }

  saveOwnerCar() {

    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want save car for owner?` }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.savedOrDeletedOwnerCar = true
        const formData = this.ownerCarCreateForm.value
        var model = new OwnerCarCreateModel(formData.carId, formData.ownerId, formData.registrationNumber)

        this.ownerCarService.createOwnerCar(model).subscribe((response: IOwnerCar) => {
          this.snackBar.open("Saved", "Ok", {
            duration: 5000
          });

          this.ownerCars.push(response)
          this.dataSource.data = this.ownerCars

          this.dataSource.data
          this.ownerCarCreateForm.controls['carId'].reset()
          this.ownerCarCreateForm.controls['registrationNumber'].reset()
          this.savedOrDeletedOwnerCar = false
        }
        )
      }
    })
  }
}
