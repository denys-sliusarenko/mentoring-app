import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfirmWindowComponent } from 'src/app/shared/components/modal-confirm-window/modal-confirm-window.component';
import { RefDirective } from 'src/app/shared/directives/ref.directive';
import { ModalConfirmWindowModel } from 'src/app/shared/models/modal-confirm-window.model';
import { IOwner } from '../../models/OwnerModels/owner.model';
import { OwnerCreateModel } from '../../models/OwnerModels/ownerCreate.model';
import { OwnerService } from '../../services/owner.service';
import { ReportService } from '../../services/report.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService,
    private snackBar: MatSnackBar,
    private reportService: ReportService,
    public dialog: MatDialog) {
    this.ownerCreateForm = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
    });
  }
  private owners: IOwner[] = []

  displayedColumns: string[] = ['id', 'FirstName', 'LastName', "delete"];
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

  saveNewOwner() {

    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want save owner ${this.ownerCreateForm.value.firstName} ${this.ownerCreateForm.value.lastName}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        const formData = this.ownerCreateForm.value
        var model = new OwnerCreateModel(formData.firstName, formData.lastName)

        this.ownerService.createOwner(model).subscribe((response: IOwner) => {
          this.owners.push(response)
          this.dataSource.data = this.owners

          this.snackBar.open("Saved", "Ok", {
            duration: 5000
          });

          this.ownerCreateForm.reset()
        })
      }
    });

  }

  getOwnersReport() {
    this.reportService.getOwnersTextReport()
  }

  deleteOwner(idOwner: string, firstName: string, lastName: string) {
  
    const dialogRef = this.dialog.open(ModalConfirmWindowComponent, {
      data: { question: `Do you want remove owner ${firstName} ${lastName}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.deleteOwner(idOwner).subscribe(
          {
            next: () => {

              this.owners = this.owners.filter(item => item.id != idOwner);

              this.dataSource.data = this.owners

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
