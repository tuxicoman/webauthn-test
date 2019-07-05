import { TestBed } from '@angular/core/testing';

import { PublickeyCredentialsService } from './publickey-credentials.service';

describe('PublickeyCredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublickeyCredentialsService = TestBed.get(PublickeyCredentialsService);
    expect(service).toBeTruthy();
  });
});
