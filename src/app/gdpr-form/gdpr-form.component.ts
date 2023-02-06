import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {GdprModel} from "../models/gdpr/gdprModel";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Location} from '@angular/common';
import {Router} from "@angular/router";


@Component({
  selector: 'app-gdpr-form',
  templateUrl: './gdpr-form.component.html',
  styleUrls: ['./gdpr-form.component.css']
})
export class GdprFormComponent implements OnInit {

  items: MenuItem[];
  public request: GdprModel;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef, private location: Location,
              private route: Router) {
  }


  ngOnInit(): void {
    this.route.navigate(['first-step'])

    this.ref.onClose.subscribe(() => this.location.replaceState(''));
    this.request = this.config.data;
    this.items = this.request.categories.map((val) => {
      return {
        label: val.categoryName,
        routerLink: 'category/' + val.categoryId,
      };
    });
    this.items.unshift({
      label: 'Početak',
      routerLink: 'first-step',
    });
    this.items.push({
      label: 'Kraj',
      routerLink: 'last-step',
    });
  }

}
