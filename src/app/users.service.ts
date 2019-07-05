import { Injectable } from '@angular/core';

export class User {
  id: string;
  username: string;
  password?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: User[] = [
    {
      id: 'Kosv9fPtkDoh4Oz7Yq/pVgWHS8HhdlCto5cR0aBoVMw=',
      username: 'alice',
      password: '123456SuperSecure'
    }
  ];
  constructor() {}
}
