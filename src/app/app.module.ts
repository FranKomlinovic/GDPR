import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GdprViewComponent} from './gdpr-view/gdpr-view.component';
import {ButtonModule} from "primeng/button";
import {GdprInfoComponent} from './gdpr-info/gdpr-info.component';
import {SkeletonModule} from "primeng/skeleton";
import {HttpClientModule} from "@angular/common/http";
import {ChartModule} from "primeng/chart";
import {DialogModule} from "primeng/dialog";
import {GdprFormComponent} from './gdpr-form/gdpr-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {TabMenuModule} from "primeng/tabmenu";
import {AppRoutingModule} from './app-routing.module';
import {FirstStepComponent} from './first-step/first-step.component';
import {LastStepComponent} from './last-step/last-step.component';
import {GdprCategoryComponent} from './gdpr-category/gdpr-category.component';
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {GdprDetailsComponent} from './gdpr-details/gdpr-details.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ConfirmationService, MessageService} from "primeng/api";
import {RevisionFormComponent} from './revision-form/revision-form.component';
import {RevisionInfoComponent} from './revision-info/revision-info.component';
import {RevisionDetailsComponent} from './revision-details/revision-details.component';
import {RevisionCategoryComponent} from './revision-category/revision-category.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {RevisionFirstStepComponent} from './revision-first-step/revision-first-step.component';
import {RevisionLastStepComponent} from './revision-last-step/revision-last-step.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DialogService} from "primeng/dynamicdialog";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  declarations: [
    AppComponent,
    GdprViewComponent,
    GdprInfoComponent,
    GdprFormComponent,
    FirstStepComponent,
    LastStepComponent,
    GdprCategoryComponent,
    GdprDetailsComponent,
    RevisionFormComponent,
    RevisionInfoComponent,
    RevisionDetailsComponent,
    RevisionCategoryComponent,
    RevisionFirstStepComponent,
    RevisionLastStepComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SkeletonModule,
    HttpClientModule,
    ChartModule,
    DialogModule,
    BrowserAnimationsModule,
    ToastModule,
    TabMenuModule,
    AppRoutingModule,
    TriStateCheckboxModule,
    SliderModule,
    FormsModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    TabViewModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
