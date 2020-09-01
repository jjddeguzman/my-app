import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponent } from './contents/angular/angular.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './contents/two-way-data-binding/two-way-data-binding.component';
import { WarningAlertsComponent } from './contents/warning-alerts/warning-alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    TwoWayDataBindingComponent,
    WarningAlertsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
