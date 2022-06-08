import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created',  inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});

