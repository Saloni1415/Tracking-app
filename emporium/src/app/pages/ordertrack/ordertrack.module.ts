import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {AgmOverlays,AgmOverlay} from 'agm-overlays'
import { OrdertrackComponent } from './ordertrack.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MatCardModule} from '@angular/material/card'



export const routes = [
  { path: '', component: OrdertrackComponent, pathMatch: 'full' }
];

@NgModule({
  imports:      [
    SharedModule,
    CommonModule,
    FormsModule,
    AgmOverlays,
    MatCardModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
      
    })
  ],
  declarations: [ OrdertrackComponent],
  bootstrap:    [ OrdertrackComponent ]
})
export class OrdertrackModule { }
