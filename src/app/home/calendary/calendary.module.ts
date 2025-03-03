import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendaryRoutingModule } from './calendary-routing.module';
import { CalendaryComponent } from './calendary.component';


@NgModule({
  declarations: [
    CalendaryComponent
  ],
  imports: [
    CommonModule,
    CalendaryRoutingModule
  ]
})
export class CalendaryModule { }
