import {Component, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";
import {MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {GdprViewComponent} from "../gdpr-view/gdpr-view.component";

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrls: ['./last-step.component.css']
})
export class LastStepComponent implements OnInit {

  constructor(public gdprComponent: GdprFormComponent,
              private backendService: BackendService,
              private messageService: MessageService,
              public ref: DynamicDialogRef,
              private gdprViewComponent: GdprViewComponent) {
  }

  ngOnInit(): void {
    this.gdprComponent.request.calculateResult();
  }

  submit() {
    this.backendService
      .postGdpr(this.gdprComponent.request)
      .subscribe((a) => {
        this.messageService.add({severity:'success', summary:'Uspjeh', detail:a.message})
        this.ref.close();
        this.gdprViewComponent.ngOnInit();
      }

      );
  }

}
