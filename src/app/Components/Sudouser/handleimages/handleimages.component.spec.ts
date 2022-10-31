import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleimagesComponent } from './handleimages.component';

describe('HandleimagesComponent', () => {
  let component: HandleimagesComponent;
  let fixture: ComponentFixture<HandleimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
