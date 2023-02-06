import {Component, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";
import {MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {GdprViewComponent} from "../gdpr-view/gdpr-view.component";
import {ResultObjectModel} from "../models/gdpr/resultModel";

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrls: ['./last-step.component.css']
})
export class LastStepComponent implements OnInit {

  spinner: boolean;

  constructor(public gdprComponent: GdprFormComponent,
              private backendService: BackendService,
              private messageService: MessageService,
              public ref: DynamicDialogRef,
              public gdprViewComponent: GdprViewComponent) {
  }

  ngOnInit(): void {
    this.gdprComponent.request.calculateResult();
  }

  getName(): string {
    let gdprManagerName = this.gdprComponent.request.gdprManagerName;
    if (gdprManagerName == undefined) {
      return "Nije popunjeno";
    }
    return gdprManagerName;
  }

  getValue(result: ResultObjectModel): string {
    let s = result.id + ". " + result.name + ": ";
    if (result.result == undefined || Number.isNaN(result.result)) {
      return s + "Nije popunjeno";
    }
    return s + result.result + "%";
  }

  submit() {
    this.spinner = true;
    this.backendService
      .postGdpr(this.gdprComponent.request)
      .subscribe((a) => {
          this.messageService.add({severity: 'success', summary: 'Uspjeh', detail: a.message})
          this.ref.close();
          this.spinner = false;
          this.gdprViewComponent.getGdprs();
        }
      );
  }

}
