import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDeleteComponent } from './stock-delete.component';

describe('StockDeleteComponent', () => {
  let component: StockDeleteComponent;
  let fixture: ComponentFixture<StockDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
