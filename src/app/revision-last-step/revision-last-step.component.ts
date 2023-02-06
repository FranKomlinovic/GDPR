import {Component, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";
import {MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {GdprViewComponent} from "../gdpr-view/gdpr-view.component";
import {RevisionFormComponent} from "../revision-form/revision-form.component";

@Component({
  selector: 'app-revision-last-step',
  templateUrl: './revision-last-step.component.html',
  styleUrls: ['./revision-last-step.component.css']
})
export class RevisionLastStepComponent implements OnInit {

  constructor(public revisionFormComponent: RevisionFormComponent,
              private backendService: BackendService,
              private messageService: MessageService,
              public ref: DynamicDialogRef,
              private gdprViewComponent: GdprViewComponent) {
  }

  ngOnInit(): void {
    this.revisionFormComponent.request.calculateResult();
  }

  submit() {
    this.gdprViewComponent.spinner = true;
    this.backendService
      .postRevision(this.revisionFormComponent.request)
      .subscribe((a) => {
          this.messageService.add({severity: 'success', summary: 'Uspjeh', detail: a.message})
          this.ref.close();
          this.gdprViewComponent.ngOnInit();
          this.gdprViewComponent.spinner = false;
        }
      );
  }

}
