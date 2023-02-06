import {Component, OnInit} from '@angular/core';
import {RevisionModel} from "../models/revision/revisionModel";
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-revision-details',
  templateUrl: './revision-details.component.html',
  styleUrls: ['./revision-details.component.css']
})
export class RevisionDetailsComponent implements OnInit {
  public model: RevisionModel;
  categoryData: any;
  horizontalOptions: any;


  constructor(public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.model = this.config.data;

    console.log(this.model.result.resultByCategories.map(a => a.pu));
    this.categoryData = {
      labels: this.model.result.resultByCategories.map(a => a.name),
      datasets: [
        {
          label: 'Potpuno Usklađeno',
          backgroundColor: "#009900",
          data: this.model.result.resultByCategories.map(a => a.pu)
        },
        {
          label: 'U tijeku',
          backgroundColor: "#999900",
          data: this.model.result.resultByCategories.map(a => a.ut)
        },
        {
          label: 'Nije usklađeno',
          backgroundColor: "#990000",
          data: this.model.result.resultByCategories.map(a => a.nu)
        },
        {
          label: 'Nije primjenjivo',
          backgroundColor: "#CCCCCC",
          data: this.model.result.resultByCategories.map(a => a.np)
        }
      ]
    };
    this.horizontalOptions = {
      indexAxis: 'y',
    };
  }

}
