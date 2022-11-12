import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnnerComponent } from './spinnner.component';

describe('SpinnnerComponent', () => {
  let component: SpinnnerComponent;
  let fixture: ComponentFixture<SpinnnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
