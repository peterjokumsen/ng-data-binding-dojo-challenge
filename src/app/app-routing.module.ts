import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterComponent } from './part-a/counter/counter.component';
import { CountControllerComponent } from './part-b/count-controller/count-controller.component';
import { CountAdjustComponent } from './part-c/count-adjust/count-adjust.component';
import { CountDisplayComponent } from './part-c/count-display/count-display.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'part-a', component: CounterComponent },
  { path: 'part-b', component: CountControllerComponent },
  {
    path: 'part-c', children: [
      { path: '', redirectTo: 'adjust', pathMatch: 'prefix' },
      { path: 'adjust', component: CountAdjustComponent },
      { path: 'display', component: CountDisplayComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
