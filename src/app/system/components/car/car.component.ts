import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CarCreateModel } from '../../models/CarModels/car-create.model';
import { ICar } from '../../models/CarModels/car.models';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService,
    private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'brand', 'color'];
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

  saveNewCar(){
    const formData = this.carCreateForm.value
    var model = new CarCreateModel(formData.color, formData.brand)

     this.carService.createCar(model).subscribe((response: ICar) => {
       this.cars.push(response)
       this.dataSource.data = this.cars

       this.snackBar.open("Saved", "Ok", {
         duration: 5000
       });

       this.carCreateForm.reset()
     }
    )
  }

}
