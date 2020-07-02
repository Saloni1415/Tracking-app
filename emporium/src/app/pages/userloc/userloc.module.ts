import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlocComponent } from './userloc.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import{MatCardModule} from '@angular/material/card'
import {AgmOverlays,AgmOverlay} from 'agm-overlays'

export const routes = [
  { path: '', component: UserlocComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [UserlocComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AgmOverlays,
    MatCardModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ]
})
export class UserlocModule { }
