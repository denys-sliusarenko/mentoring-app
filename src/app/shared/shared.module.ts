import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { RefDirective } from './directives/ref.directive';
import { ModalConfirmWindowComponent } from './components/modal-confirm-window/modal-confirm-window.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    LoaderComponent,
    NotFoundComponent,
    RefDirective,
    ModalConfirmWindowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    RefDirective,
    ReactiveFormsModule,
    LoaderComponent,
    ModalConfirmWindowComponent,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents:[ ModalConfirmWindowComponent]
})
export class SharedModule { }
