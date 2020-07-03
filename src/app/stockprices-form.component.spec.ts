import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpricesFormComponent } from './stockprices-form.component';

describe('StockpricesFormComponent', () => {
  let component: StockpricesFormComponent;
  let fixture: ComponentFixture<StockpricesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpricesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpricesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
