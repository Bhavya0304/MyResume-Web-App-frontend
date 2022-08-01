import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifechartsComponent } from './lifecharts.component';

describe('LifechartsComponent', () => {
  let component: LifechartsComponent;
  let fixture: ComponentFixture<LifechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifechartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
