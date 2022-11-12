import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTagsBlockComponent } from './user-tags-block.component';

describe('UserTagsBlockComponent', () => {
  let component: UserTagsBlockComponent;
  let fixture: ComponentFixture<UserTagsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTagsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTagsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
