import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponent } from './contents/angular/angular.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './contents/two-way-data-binding/two-way-data-binding.component';
import { WarningAlertsComponent } from './contents/warning-alerts/warning-alerts.component';
import { SuccessAlertsComponent } from './contents/success-alerts/success-alerts.component';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    TwoWayDataBindingComponent,
    WarningAlertsComponent,
    SuccessAlertsComponent,
    ServerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
