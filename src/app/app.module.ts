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
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    GdprViewComponent,
    GdprInfoComponent,
    GdprFormComponent,
    FirstStepComponent,
    LastStepComponent,
    GdprCategoryComponent,
    GdprDetailsComponent
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
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
