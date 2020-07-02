import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverpublishComponent } from './driverpublish.component';
import{ FormsModule} from '@angular/forms'
import {WebsocketService} from '../../websocket.service'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const routes = [
  { path: '', component: DriverpublishComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [DriverpublishComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[WebsocketService]
})
export class DriverpublishModule { }
