import { TestBed } from '@angular/core/testing';

import { PasswordCredentialsService } from './password-credentials.service';

describe('PasswordCredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordCredentialsService = TestBed.get(PasswordCredentialsService);
    expect(service).toBeTruthy();
  });
});
