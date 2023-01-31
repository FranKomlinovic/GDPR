import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstStepComponent} from "./first-step/first-step.component";
import {LastStepComponent} from "./last-step/last-step.component";
import {GdprCategoryComponent} from "./gdpr-category/gdpr-category.component";

const routes: Routes = [
  {path: 'first-step', component: FirstStepComponent},
  {path: 'last-step', component: LastStepComponent},
  {path: 'category/:id', component: GdprCategoryComponent},


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
