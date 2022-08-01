import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillchartsComponent } from './skillcharts.component';

describe('SkillchartsComponent', () => {
  let component: SkillchartsComponent;
  let fixture: ComponentFixture<SkillchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
