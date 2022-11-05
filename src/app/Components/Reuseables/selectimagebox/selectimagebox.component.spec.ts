import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectimageboxComponent } from './selectimagebox.component';

describe('SelectimageboxComponent', () => {
  let component: SelectimageboxComponent;
  let fixture: ComponentFixture<SelectimageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectimageboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectimageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
