import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { OwnerCreateModel } from '../../models/OwnerModels/ownerCreate.model';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService,
    private snackBar: MatSnackBar) {
    this.ownerCreateForm = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
    });
  }
  private owners: IOwner[] = []

  displayedColumns: string[] = ['id', 'FirstName', 'LastName'];
  dataSource = new MatTableDataSource<IOwner>();
  clickedRows = new Set<IOwner>();
  isOwnersLoaded = false
  ownerCreateForm: FormGroup


  ngOnInit(): void {
    this.isOwnersLoaded = false
    this.ownerService.getAllOwners().subscribe((response: IOwner[]) => {
      this.owners = response
      this.dataSource.data = this.owners

      this.isOwnersLoaded = true
    })
  }

  public updateOwner() {

  }

  saveNewOwner() {
    const formData = this.ownerCreateForm.value
    var model = new OwnerCreateModel(formData.firstName, formData.lastName)

    this.ownerService.createOwner(model).subscribe((response: IOwner) => {
      this.owners.push(response)
      this.dataSource.data = this.owners

      this.snackBar.open("Saved", "Ok", {
        duration: 5000
      });

      this.ownerCreateForm.reset()
    }
    )
  }
}
