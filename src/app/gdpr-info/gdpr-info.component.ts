import {Component, Input, OnInit} from '@angular/core';
import {GdprModel} from "../models/gdpr/gdprModel";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";
import {DialogService} from "primeng/dynamicdialog";
import {GdprDetailsComponent} from "../gdpr-details/gdpr-details.component";
import {BackendService} from "../backend.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {GdprViewComponent} from "../gdpr-view/gdpr-view.component";

@Component({
  selector: 'app-gdpr-info-view',
  templateUrl: './gdpr-info.component.html',
  styleUrls: ['./gdpr-info.component.css']
})
export class GdprInfoComponent implements OnInit {
  @Input() model: GdprModel;
  data: any;

  constructor(private gdprViewComponent: GdprViewComponent, public dialogService: DialogService, private backedService: BackendService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    let finalResult = this.model.result.finalResult;
    let remainder = 100 - finalResult;
    this.data = {
      labels: ['Usklađeno: ' + finalResult + '%'],
      datasets: [
        {
          data: [finalResult, remainder],
          backgroundColor: [
            "#009900",
            "#990000"
          ]
        }
      ]
    };
  }

  getCreatedAt(): string {
    return new Date(this.model.createdDate).toLocaleString("de-AT");
  }

  getLastUpdatedAt(): string {
    return new Date(this.model.updatedDate).toLocaleString("de-AT");
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Jeste li sigurni da želite obrisati?',
      accept: () => {
        this.delete();
      }
    });
  }

  delete() {
    this.backedService.deleteGdpr(this.model.id).subscribe(a => {
      this.messageService.add({
        severity: 'success',
        summary: 'Uspjeh',
        detail: a.message
      });
      this.gdprViewComponent.ngOnInit();
    });
  }

  details() {
    this.dialogService.open(GdprDetailsComponent, {
      data: this.model,
      header: "Detalji"
    });
  }

  edit() {
    let gdprModel = new GdprModel();
    gdprModel.id = this.model.id;
    gdprModel.categories = this.model.categories;
    gdprModel.companyId = this.model.companyId;
    gdprModel.gdprManagerName = this.model.gdprManagerName;
    gdprModel.result = this.model.result;

    this.dialogService.open(GdprFormComponent, {
      data: gdprModel,
      header: "Ažuriraj PIA"
    });
  }

}
