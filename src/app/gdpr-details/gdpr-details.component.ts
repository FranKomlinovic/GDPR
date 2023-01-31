import {Component, OnInit} from '@angular/core';
import {GdprModel} from "../models/gdprModel";
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-gdpr-details',
  templateUrl: './gdpr-details.component.html',
  styleUrls: ['./gdpr-details.component.css']
})
export class GdprDetailsComponent implements OnInit {

  public model: GdprModel;
  categoryData: any;
  fieldData: any;
  horizontalOptions: any;

  constructor(public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.model = this.config.data;

    this.categoryData = {
      labels: this.model.result.resultByCategories.map(a => a.name),
      datasets: [
        {
          label: 'Područja',
          backgroundColor: '#005b9f',
          data: this.model.result.resultByCategories.map(a => a.result)
        },
      ]
    };

    this.fieldData = {
      labels: this.model.result.resultByFields.map(a => a.name),
      datasets: [
        {
          label: 'Stavke',
          backgroundColor: '#0C6B0D',
          data: this.model.result.resultByFields.map(a => a.result)
        },
      ]
    };

    this.horizontalOptions = {
      indexAxis: 'y',
    };
  }

}
