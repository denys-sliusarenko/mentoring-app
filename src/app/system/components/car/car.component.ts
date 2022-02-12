import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICar } from '../../models/CarModels/car.models';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) { }

  displayedColumns: string[] = ['id', 'brand', 'color'];
  cars: ICar[] = []
  clickedRows = new Set<ICar>();
  isCarsLoaded = false
  carCreateForm = new FormGroup({
    "color": new FormControl('', Validators.required),
    "brand": new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.isCarsLoaded = false
    this.carService.getAllCars().subscribe((response: ICar[]) => {
      this.cars = response
      this.isCarsLoaded = true
    })
  }

  saveNewCar(){
    
  }

}
