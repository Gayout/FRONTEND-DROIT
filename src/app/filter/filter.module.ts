import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FiltersComponent } from './filters.component';


@NgModule({
  declarations: [
    FiltersComponent,
  ],
  exports: [
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ]
})
export class FilterModule { }
