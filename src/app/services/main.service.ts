import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private variableOne = new Subject<any>();
  private variableTwo = new Subject<any>();
  result = new Subject<any>();

  constructor() {}
  sendValues(valOne, valTwo) {
    this.variableOne.next({ numberOne: valOne });
    this.variableTwo.next({ numberTwo: valTwo });
    this.result.next(valOne + valTwo);
    console.log(this.result);
  }
  clearValues() {
    this.variableOne.next();
    this.variableTwo.next();
  }
  getValueOne(): Observable<any> {
    return this.variableOne.asObservable();
  }
  getValueTwo(): Observable<any> {
    return this.variableTwo.asObservable();
  }
  getAddition() {
    return this.result.asObservable();
  }
}
