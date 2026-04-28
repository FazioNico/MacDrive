import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, inject } from "@angular/core";
import { Router } from "@angular/router";

export class MyErrorHandler implements ErrorHandler {
  private readonly _router = inject(Router);

  handleError(error: Error) {
    // only handle HttpErrorResponse
    if (error instanceof HttpErrorResponse) {
      alert(`HTTP Error: ${error.status} - ${error.message}`);
    } else {
      alert(`Error: ${error.message}`);
    }
    this._router.navigate(['/order-page']);
  }
}
