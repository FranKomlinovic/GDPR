import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionCategoryModel} from "../models/questionCategoryModel";
import {GdprFormComponent} from "../gdpr-form/gdpr-form.component";

@Component({
  selector: 'app-gdpr-category',
  templateUrl: './gdpr-category.component.html',
  styleUrls: ['./gdpr-category.component.css']
})
export class GdprCategoryComponent implements OnInit {
  category: QuestionCategoryModel;

  constructor(
    private route: ActivatedRoute,
    public gdprComponent: GdprFormComponent
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let cat = this.gdprComponent.request.categories.find((a) => a.categoryId == params['id'])
      if (cat != undefined) {
        this.category = cat;
      }
      else {
       this.category = this.gdprComponent.request.categories[0]
      }
    });
  }

}
