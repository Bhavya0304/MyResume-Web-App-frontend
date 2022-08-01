import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsInfoComponent } from './tags-info.component';

describe('TagsInfoComponent', () => {
  let component: TagsInfoComponent;
  let fixture: ComponentFixture<TagsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
