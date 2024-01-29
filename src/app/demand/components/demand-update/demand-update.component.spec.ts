import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandUpdateComponent } from './demand-update.component';

describe('DemandUpdateComponent', () => {
  let component: DemandUpdateComponent;
  let fixture: ComponentFixture<DemandUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
