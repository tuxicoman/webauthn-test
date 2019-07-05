import { Component } from '@angular/core';
import { PasswordCredentialsService } from './password-credentials.service';
import { PublickeyCredentialsService } from './publickey-credentials.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pwdCred;
  constructor(
    private pwdService: PasswordCredentialsService,
    private pkService: PublickeyCredentialsService
  ) {}

  async store() {
    await this.pwdService
      .store({
        id: 'alqwice',
        password: 'VeryRandomPassword123456'
      })
      .then(cred => console.log(cred))
      .catch(err => console.log('ERROR', err));

    this.pwdCred = this.pwdService.get();
  }

  async register() {
    try {
      const cred = await this.pkService.register();
      console.log('REGISTER :', cred);
    } catch (error) {
      console.log('[ERROR] REGISTER :', error);
    }
  }
}
