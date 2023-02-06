import {Component, Input, OnInit} from '@angular/core';
import {RevisionModel} from "../models/revision/revisionModel";
import {DialogService} from "primeng/dynamicdialog";
import {RevisionDetailsComponent} from "../revision-details/revision-details.component";
import {RevisionFormComponent} from "../revision-form/revision-form.component";
import {BackendService} from "../backend.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {GdprViewComponent} from "../gdpr-view/gdpr-view.component";

@Component({
  selector: 'app-revision-info',
  templateUrl: './revision-info.component.html',
  styleUrls: ['./revision-info.component.css']
})
export class RevisionInfoComponent implements OnInit {

  @Input() model: RevisionModel;
  data: any;

  constructor(private gdprViewComponent: GdprViewComponent, private dialogService: DialogService, private backendService: BackendService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    let result = this.model.result;
    this.data = {
      labels: ["Potpuno Usklađeno", "U tijeku", "Nije usklađeno", "Nije primjenjivo"],
      datasets: [
        {
          data: [result.pu, result.ut, result.nu, result.np],
          backgroundColor: [
            "#009900",
            "#999900",
            "#990000",
            "#CCCCCC"
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

  details() {
    this.dialogService.open(RevisionDetailsComponent, {
      data: this.model,
      modal: true,
      style: {'width' : '90%', 'height': '80%'},
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true,
      header: "Detalji"
    });
  }

  edit() {
    let revisionModel = new RevisionModel();
    revisionModel.id = this.model.id;
    revisionModel.categories = this.model.categories;
    revisionModel.companyId = this.model.companyId;
    revisionModel.gdprManagerName = this.model.gdprManagerName;
    revisionModel.result = this.model.result;

    this.dialogService.open(RevisionFormComponent, {
      data: revisionModel,
      modal: true,
      style: {'max-width' : '90%'},
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true,
      header: "Ažuriraj reviziju"
    });
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
    this.gdprViewComponent.revisionSpinner = true;
    this.backendService.deleteRevision(this.model.id).subscribe(a => {
      this.messageService.add({
        severity: 'success',
        summary: 'Uspjeh',
        detail: a.message
      });
      this.gdprViewComponent.getRevisions();
    });
  }
}
