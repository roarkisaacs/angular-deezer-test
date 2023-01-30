import { Injectable, ErrorHandler } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private toastr: ToastrService) {}

  handleError(error: any): void {
    if (error.status === 403) {
      this.toastr.error('Access Forbidden', 'Error');
    } else {
      console.error(error);
    }
  }
}