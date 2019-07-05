import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordCredentialsService {
  constructor() {}

  store(credentials: PasswordCredentialData): Promise<CredentialType> {
    return navigator.credentials.store(new PasswordCredential(credentials));
  }

  get(): Promise<CredentialType> {
    return navigator.credentials.get({ password: true });
  }
}
