import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { BodyComponent } from './body/body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MachineComponent } from './machine/machine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatusbarComponent,
    BodyComponent,
    MachineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
