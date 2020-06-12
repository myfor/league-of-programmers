import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { BlogsManagerRoutingModule } from './blogs-manager-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    SharedModule,
    BlogsManagerRoutingModule
  ]
})
export class BlogsManagerModule { }
