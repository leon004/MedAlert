import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicatorService {


  onGetData: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {}

  getData(message: Object) {
    this.onGetData.emit(message);
  }


}
