import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublickeyCredentialsService {
  constructor() {}

  publicKey: PublicKeyCredentialCreationOptions;

  register(): Promise<PublicKeyCredential> {
    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const userID = 'Kosv9fPtkDoh4Oz7Yq/pVgWHS8HhdlCto5cR0aBoVMw=';
    const id = Uint8Array.from(window.atob(userID), c => c.charCodeAt(0));

    this.publicKey = {
      challenge,
      attestation: 'direct',
      rp: {
        id: undefined,
        name: 'Example Inc.'
      },

      user: {
        id,
        name: 'alice@example.com',
        displayName: 'Alice Liddell'
      },

      pubKeyCredParams: [
        { type: 'public-key', alg: -7 }, // "ES256" IANA COSE Algorithms registry
        { type: 'public-key', alg: -257 } // "RS256" IANA COSE Algorithms registry
      ]
    };

    return navigator.credentials.create({
      publicKey: this.publicKey
    }) as Promise<PublicKeyCredential>;
    // .then((newCredentialInfo: PublicKeyCredential) => {
    //   alert('SUCCESS');
    //   console.log('SUCCESS', newCredentialInfo);
    // })
    // .catch(error => {
    //   alert('Open your browser console!');
    //   console.log('FAIL', error);
    // });
  }
}
