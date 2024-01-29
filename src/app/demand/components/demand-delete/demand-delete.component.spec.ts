import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandDeleteComponent } from './demand-delete.component';

describe('DemandDeleteComponent', () => {
  let component: DemandDeleteComponent;
  let fixture: ComponentFixture<DemandDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
