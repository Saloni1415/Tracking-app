import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CataloggComponent } from './catalogg.component';
import { ProductComponent } from './product/prod.component';
import { ProdZoomComponent } from '../catalog/prod-zoom/prod-zoom.component';

export const routes = [
  { path: '', component: CataloggComponent, pathMatch: 'full' },
  { path: ':name', component: CataloggComponent },
  { path: ':id/:name', component: ProductComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule
  ],
  declarations: [
    CataloggComponent, 
    ProductComponent, 
    ProdZoomComponent
  ],
  entryComponents:[
    ProdZoomComponent
  ]
})
export class CataloggModule {  }
