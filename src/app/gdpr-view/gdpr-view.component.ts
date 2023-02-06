import {Component, OnInit} from '@angular/core';
import {GdprModel} from "../models/gdpr/gdprModel";
import {BackendService} from "../backend.service";
import {DialogService} from "primeng/dynamicdialog";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";
import {environment} from "../../environments/environment";
import {RevisionModel} from "../models/revision/revisionModel";
import {RevisionFormComponent} from "../revision-form/revision-form.component";

@Component({
  selector: 'app-gdpr-view',
  templateUrl: './gdpr-view.component.html',
  styleUrls: ['./gdpr-view.component.css'],
  providers: [DialogService]
})
export class GdprViewComponent implements OnInit {

  gdprSpinner: boolean;
  revisionSpinner: boolean;
  gdprModels: GdprModel[];
  revisionModels: RevisionModel[];
  display: boolean = false;

  constructor(private backendService: BackendService, public dialogService: DialogService) {
  }


  ngOnInit(): void {
    this.getGdprs();
    this.getRevisions();
  }

  getGdprs() {
    this.gdprSpinner = true;
    this.backendService.getGdprByCompanyId().subscribe(a => {
      this.gdprModels = a
      this.gdprSpinner = false;
    });
  }

  getRevisions() {
    this.revisionSpinner = true;
    this.backendService.getRevisionByCopmanyId().subscribe(a => {
      this.revisionModels = a
      this.revisionSpinner = false;
    });
  }

  showGdprDialog() {
    this.backendService.getQuestions()
      .subscribe((questions) => {
        let model = new GdprModel();
        model.companyId = environment.companyId;
        model.categories = questions;
        this.dialogService.open(GdprFormComponent, {
          data: model,
          modal: true,
          style: {'max-width': '90%'},
          contentStyle: {"overflow": "auto"},
          baseZIndex: 10000,
          maximizable: true,
          header: "Nova Lista Usklađenosti"
        });
      });
  }

  showRevisionDialog() {
    this.backendService.getRevisionQuestions()
      .subscribe((questions) => {
        let model = new RevisionModel();
        model.companyId = environment.companyId;
        model.categories = questions;
        this.dialogService.open(RevisionFormComponent, {
          data: model,
          modal: true,
          style: {'max-width' : '90%'},
          contentStyle: {"overflow": "auto"},
          baseZIndex: 10000,
          maximizable: true,
          header: "Nova revizija zahtjeva"
        });
      });
  }
}
