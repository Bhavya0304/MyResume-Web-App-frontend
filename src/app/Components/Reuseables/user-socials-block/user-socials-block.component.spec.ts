import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialsBlockComponent } from './user-socials-block.component';

describe('UserSocialsBlockComponent', () => {
  let component: UserSocialsBlockComponent;
  let fixture: ComponentFixture<UserSocialsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSocialsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
