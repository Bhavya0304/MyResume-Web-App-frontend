import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceBlockComponent } from './user-experience-block.component';

describe('UserExperienceBlockComponent', () => {
  let component: UserExperienceBlockComponent;
  let fixture: ComponentFixture<UserExperienceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExperienceBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
