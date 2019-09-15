import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountAdjustComponent } from './count-adjust/count-adjust.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { CounterService } from './counter.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CountDisplayComponent,
    CountAdjustComponent,
  ],
  providers: [
    CounterService,
  ]
})
export class PartCModule { }
