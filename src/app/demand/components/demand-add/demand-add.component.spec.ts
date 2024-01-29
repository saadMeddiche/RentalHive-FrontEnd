import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandAddComponent } from './demand-add.component';

describe('DemandAddComponent', () => {
  let component: DemandAddComponent;
  let fixture: ComponentFixture<DemandAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
