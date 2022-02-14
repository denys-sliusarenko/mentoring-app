import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPI } from 'src/app/shared/core/base-api';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseAPI {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getOwnersTextReport() {
    this.get('/api/reports/ownersTextReport').subscribe((response: any) => {
      this.saveReport(response);
    })
  }

  getCarsTextReport() {
    this.get('/api/reports/carsTextReport').subscribe((response: any) => {
      this.saveReport(response);;
    })
  }

  getOwnerCarsTextReport() {
    this.get('/api/reports/ownerCarsTextReport').subscribe((response: any) => {
      this.saveReport(response);
    })
  }

  private base64ToArrayBuffer(base64: string) {
    let binary_string = window.atob(base64);
    let len = binary_string.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  private saveReport(response: any) {
    var blob = this.base64ToArrayBuffer(response.blob)
    const file = new Blob([blob], { type: response.fileType });
    FileSaver.saveAs(file, response.fileName);
  }
}


