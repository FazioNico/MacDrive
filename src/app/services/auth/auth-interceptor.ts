import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const reqWithHeader = req.clone({
      headers: new HttpHeaders({
        'authorization': 'MY-TOKEN',
      })
    });
    return next.handle(reqWithHeader);
  }
}
