import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveUserComponent } from './inactive-user.component';

describe('InactiveUserComponent', () => {
  let component: InactiveUserComponent;
  let fixture: ComponentFixture<InactiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
