import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CarCreateModel } from '../../models/CarModels/car-create.model';
import { ICar } from '../../models/CarModels/car.models';
import { CarService } from '../../services/car.service';
import { ReportService } from '../../services/report.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmWindowComponent } from 'src/app/shared/components/modal-confirm-window/modal-confirm-window.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private reportService: ReportService) { }

  displayedColumns: string[] = ['id', 'brand', 'color', "delete"];
  cars: ICar[] = []
  clickedRows = new Set<ICar>();
  isCarsLoaded = false
  carCreateForm = new FormGroup({
    "color": new FormControl('', Validators.required),
    "brand": new FormControl('', Validators.required),
  });
  dataSource = new MatTableDataSource<ICar>();

  ngOnInit(): void {
    this.isCarsLoaded = false
    this.carService.getAllCars().subscribe((response: ICar[]) => {
      this.cars = response
      this.dataSource.data = this.cars
      this.isCarsLoaded = true
    })
  }

  getCarsReport() {
    this.reportService.getCarsTextReport()
  }

  saveNewCar() {
    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want save car ${this.carCreateForm.value.color} ${this.carCreateForm.value.brand}?` }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        const formData = this.carCreateForm.value
        var model = new CarCreateModel(formData.color, formData.brand)

        this.carService.createCar(model).subscribe(
          {
            next: (response: ICar) => {
              this.cars.push(response)
              this.dataSource.data = this.cars

              this.snackBar.open("Saved", "Ok", {
                duration: 5000
              });
              this.carCreateForm.reset()
            },
            error: (e) => console.error(e),
          }
        )
      }
    })
  }

  deleteCar(idCar: string, brand: string, color: string) {

    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want remove car ${color} ${brand}?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carService.deleteCar(idCar).subscribe(
          {
            next: () => {

              this.cars = this.cars.filter(item => item.id != idCar);

              this.dataSource.data = this.cars

              this.snackBar.open("Deleted", "Ok", {
                duration: 5000
              });
            },
            error: (e) => console.error(e),
          }
        )
      }
    })
  }
}
