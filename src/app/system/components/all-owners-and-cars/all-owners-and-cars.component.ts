import { Component, OnInit } from '@angular/core';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { OwnerService } from '../../services/owner.service';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-all-owners-and-cars',
  templateUrl: './all-owners-and-cars.component.html',
  styleUrls: ['./all-owners-and-cars.component.scss']
})
export class AllOwnersAndCarsComponent implements OnInit {

  constructor(private ownerService: OwnerService,private reportService:ReportService) { }

  owners: IOwner[] = []
  isOwnersLoaded = false
  
  ngOnInit(): void {
       this.ownerService.getAllOwners().subscribe((response: IOwner[]) => {
       this.owners = response
       this.isOwnersLoaded = true
     })
  }
  getOwnerCarsTextReport(){
    this.reportService.getOwnerCarsTextReport();
  }
}
