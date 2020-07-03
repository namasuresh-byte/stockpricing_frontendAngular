import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockpricesListComponent } from './stockprices-list.component';
import { StockpricesFormComponent } from './stockprices-form.component';

const routes: Routes = [
  { path: 'stockprices', component: StockpricesListComponent },
  { path: 'addstocks', component: StockpricesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

