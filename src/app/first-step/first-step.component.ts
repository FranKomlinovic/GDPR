import {Component, OnInit} from '@angular/core';
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  constructor(public gdprComponent: GdprFormComponent) {
  }

  ngOnInit(): void {
  }

}
