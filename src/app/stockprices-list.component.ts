
import { Component, OnInit } from '@angular/core';
import { Stockprices } from './stockprices';
import { StockpricesService } from './stockprices-service.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './stockprices-list.component.html',
  styleUrls: ['./stockprices-list.component.css']
})
export class StockpricesListComponent implements OnInit {
 
  stockpricess: Stockprices[];
 
  constructor(private stockpricesService: StockpricesService) {
  }
 
  ngOnInit() {
    this.stockpricesService.findAll().subscribe(data => {
      this.stockpricess = data;
    });
  }
}



