import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducationBlockComponent } from './user-education-block.component';

describe('UserEducationBlockComponent', () => {
  let component: UserEducationBlockComponent;
  let fixture: ComponentFixture<UserEducationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEducationBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEducationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
