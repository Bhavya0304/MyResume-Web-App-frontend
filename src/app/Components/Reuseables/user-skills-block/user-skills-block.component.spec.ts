import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillsBlockComponent } from './user-skills-block.component';

describe('UserSkillsBlockComponent', () => {
  let component: UserSkillsBlockComponent;
  let fixture: ComponentFixture<UserSkillsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSkillsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
