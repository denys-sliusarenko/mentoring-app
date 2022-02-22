import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  question: string;
}

@Component({
  selector: 'app-modal-confirm-window',
  templateUrl: './modal-confirm-window.component.html',
  styleUrls: ['./modal-confirm-window.component.scss']
})
export class ModalConfirmWindowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
