import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstStepComponent} from "./first-step/first-step.component";
import {LastStepComponent} from "./last-step/last-step.component";
import {GdprCategoryComponent} from "./gdpr-category/gdpr-category.component";
import {RevisionCategoryComponent} from "./revision-category/revision-category.component";
import {RevisionFirstStepComponent} from "./revision-first-step/revision-first-step.component";
import {RevisionLastStepComponent} from "./revision-last-step/revision-last-step.component";

const routes: Routes = [
  {path: 'first-step', component: FirstStepComponent},
  {path: 'revision-first-step', component: RevisionFirstStepComponent},
  {path: 'last-step', component: LastStepComponent},
  {path: 'revision-last-step', component: RevisionLastStepComponent},
  {path: 'category/:id', component: GdprCategoryComponent},
  {path: 'revision-category/:id', component: RevisionCategoryComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
