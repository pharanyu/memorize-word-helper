import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  reportError: EventEmitter<string> = new EventEmitter();

  constructor() { }

  putError(error: string): void {
    this.reportError.emit(error);
  }

}
