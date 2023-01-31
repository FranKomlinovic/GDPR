import {Component, OnInit} from '@angular/core';
import {GdprModel} from "../models/gdprModel";
import {BackendService} from "../backend.service";
import {DialogService} from "primeng/dynamicdialog";
import {HttpClient} from "@angular/common/http";
import {QuestionCategoryModel} from "../models/questionCategoryModel";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-gdpr-view',
  templateUrl: './gdpr-view.component.html',
  styleUrls: ['./gdpr-view.component.css'],
  providers: [DialogService]
})
export class GdprViewComponent implements OnInit {

  gdprModels: GdprModel[];
  display: boolean = false;

  constructor(private backendService: BackendService, public dialogService: DialogService, public httpClient: HttpClient) {
  }


  ngOnInit(): void {
    this.backendService.getGdprById().subscribe(a => this.gdprModels = a);
  }

  showDialog() {
    this.httpClient
      .get<QuestionCategoryModel[]>('assets/questions.json')
      .subscribe((questions) => {
        let model = new GdprModel();
        model.companyId=environment.companyId;
        model.categories=questions;
        this.dialogService.open(GdprFormComponent, {
          data: model,
          header: "Novi PIA"
        });
      });
  }
}
