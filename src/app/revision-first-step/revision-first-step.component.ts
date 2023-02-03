import {Component, OnInit} from '@angular/core';
import {RevisionFormComponent} from "../revision-form/revision-form.component";

@Component({
  selector: 'app-revision-first-step',
  templateUrl: './revision-first-step.component.html',
  styleUrls: ['./revision-first-step.component.css']
})
export class RevisionFirstStepComponent implements OnInit {

  constructor(public revisionComponent: RevisionFormComponent) { }

  ngOnInit(): void {
  }

}
