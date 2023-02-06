import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private herokuCorsByPass: string = "https://cors-anywhere.herokuapp.com/";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({url: `${this.herokuCorsByPass}${req.url}`});
    return next.handle(newRequest);
  }
}