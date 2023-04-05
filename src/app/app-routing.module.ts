import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModelComponent } from './components/car-model/car-model.component';
import { ModelDetailsComponent } from './components/car-model-details/car-model-details.component';
import { QuotePopupComponent } from './components/quote-popup/quote-popup.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'brand/:id', component: ModelComponent },
  { path: 'model/:id', component: ModelDetailsComponent},
  { path: 'quote', component: QuotePopupComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
