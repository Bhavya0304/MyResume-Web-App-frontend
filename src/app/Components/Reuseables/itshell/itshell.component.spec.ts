import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITShellComponent } from './itshell.component';

describe('ITShellComponent', () => {
  let component: ITShellComponent;
  let fixture: ComponentFixture<ITShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
