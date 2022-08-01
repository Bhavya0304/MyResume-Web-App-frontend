import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpereinceComponent } from './expereince.component';

describe('ExpereinceComponent', () => {
  let component: ExpereinceComponent;
  let fixture: ComponentFixture<ExpereinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpereinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpereinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
