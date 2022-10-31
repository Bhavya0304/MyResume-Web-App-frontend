import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageboxComponent } from './imagebox.component';

describe('ImageboxComponent', () => {
  let component: ImageboxComponent;
  let fixture: ComponentFixture<ImageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
