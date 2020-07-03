import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stockprices } from './stockprices';
import { StockpricesService } from './stockprices-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './stockprices-form.component.html',
  styleUrls: ['./stockprices-form.component.css']
})

export class StockpricesFormComponent {
 
  stockprices: Stockprices;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private stockpricesService: StockpricesService) {
    this.stockprices = new Stockprices();
  }
 
  onSubmit() {
    this.stockpricesService.save(this.stockprices).subscribe(result => this.gotoStockpricesList());
  }
 
  gotoStockpricesList() {
    this.router.navigate(['/stockprices']);
  }
}
