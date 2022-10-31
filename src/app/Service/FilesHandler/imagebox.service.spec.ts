import { TestBed } from '@angular/core/testing';

import { ImageboxService } from './imagebox.service';

describe('ImageboxService', () => {
  let service: ImageboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
