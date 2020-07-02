import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MatCardModule} from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export const routes = [
  { path: '', component: CatalogComponent, pathMatch: 'full' }
];
@NgModule({
  
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatCardModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [ CatalogComponent],
  bootstrap:    [ CatalogComponent ]
})
export class CatalogModule { }
