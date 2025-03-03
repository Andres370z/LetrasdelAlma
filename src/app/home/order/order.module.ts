import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgxSpinnerModule
  ]
})
export class OrderModule { }
