import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {RevisionModel} from "../models/revision/revisionModel";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Location} from "@angular/common";

@Component({
  selector: 'app-revision-form',
  templateUrl: './revision-form.component.html',
  styleUrls: ['./revision-form.component.css']
})
export class RevisionFormComponent implements OnInit {

  items: MenuItem[];
  public request: RevisionModel;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private location: Location) {
  }

  ngOnInit(): void {
    this.ref.onClose.subscribe(() => this.location.replaceState(''));
    this.request = this.config.data;
    this.items = this.request.categories.map((val) => {
      return {
        label: val.categoryName,
        routerLink: 'revision-category/' + val.categoryId,
      };
    });
    this.items.unshift({
      label: 'Početak',
      routerLink: 'revision-first-step',
    });
    this.items.push({
      label: 'Kraj',
      routerLink: 'revision-last-step',
    });
  }

}
