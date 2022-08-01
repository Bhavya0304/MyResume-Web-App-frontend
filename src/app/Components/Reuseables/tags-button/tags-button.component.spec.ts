import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsButtonComponent } from './tags-button.component';

describe('TagsButtonComponent', () => {
  let component: TagsButtonComponent;
  let fixture: ComponentFixture<TagsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
