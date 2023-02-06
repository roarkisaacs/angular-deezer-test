import { Injectable, ErrorHandler, Inject, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector) {}

  handleError(error: any): void {
    if (error.status === 403) {
      this.toastrService.error('Access Forbidden', 'Error');
    } else {
      console.error(error);
    }
  }

  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }
}