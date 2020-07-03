import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpricesListComponent } from './stockprices-list.component';

describe('StockpricesListComponent', () => {
  let component: StockpricesListComponent;
  let fixture: ComponentFixture<StockpricesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpricesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
