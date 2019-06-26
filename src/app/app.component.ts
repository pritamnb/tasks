import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { MainService } from './services/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  additionForm: FormGroup;

  title = 'tasks';
  constructor(private fb: FormBuilder, private mainService: MainService) {
    this.additionForm = this.fb.group({
      valueOne: new FormControl(null, [Validators.required]),
      valueTwo: new FormControl(null, [Validators.required])
    });
  }
  submit() {
    // console.log(
    //   this.additionForm.value.valueOne +
    //     '  +  ' +
    //     this.additionForm.value.valueTwo
    // );
    this.mainService.sendValues(
      this.additionForm.value.valueOne,
      this.additionForm.value.valueTwo
    );
  }
}
