import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StockpricesListComponent } from './stockprices-list.component';
import { StockpricesFormComponent } from './stockprices-form.component';
import { StockpricesService } from './stockprices-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StockpricesListComponent,
    StockpricesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule	
  ],
  providers: [StockpricesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
