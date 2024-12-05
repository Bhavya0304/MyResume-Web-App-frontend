import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialsComponent } from './user-socials.component';

describe('UserSocialsComponent', () => {
  let component: UserSocialsComponent;
  let fixture: ComponentFixture<UserSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
