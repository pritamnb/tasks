import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  result: any;
  ValueOneSubscription: Subscription;
  ValueTwoSubscription: Subscription;
  resultSubscription: Subscription;
  valueOne: any;
  valueTwo: any;

  constructor(private mainService: MainService) {
    this.ValueOneSubscription = this.mainService
      .getValueOne()
      .subscribe(valueOne => {
        this.valueOne = valueOne;
        console.log(this.valueOne);
      });
    this.ValueTwoSubscription = this.mainService
      .getValueTwo()
      .subscribe(valueTwo => {
        this.valueTwo = valueTwo;
        console.log(this.valueTwo);
      });
    this.resultSubscription = this.mainService
      .getAddition()
      .subscribe(result => {
        console.log(result);
        this.result = result;
      });
  }

  ngOnInit() {}
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.ValueOneSubscription.unsubscribe();
    this.ValueTwoSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }
}
