import {Component, OnInit} from '@angular/core';
import {RevisionCategoryModel} from "../models/revision/revisionCategoryModel";
import {ActivatedRoute} from "@angular/router";
import {RevisionFormComponent} from "../revision-form/revision-form.component";

@Component({
  selector: 'app-revision-category',
  templateUrl: './revision-category.component.html',
  styleUrls: ['./revision-category.component.css']
})
export class RevisionCategoryComponent implements OnInit {
  category: RevisionCategoryModel;

  constructor(private route: ActivatedRoute, private revisionComponent: RevisionFormComponent) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let cat = this.revisionComponent.request.categories.find((a) => a.categoryId == params['id'])
      if (cat != undefined) {
        this.category = cat;
      }
      else {
        this.category = this.revisionComponent.request.categories[0]
      }
    });
  }

}
