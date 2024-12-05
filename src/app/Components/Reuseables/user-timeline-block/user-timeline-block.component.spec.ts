import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimelineBlockComponent } from './user-timeline-block.component';

describe('UserTimelineBlockComponent', () => {
  let component: UserTimelineBlockComponent;
  let fixture: ComponentFixture<UserTimelineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTimelineBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimelineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
