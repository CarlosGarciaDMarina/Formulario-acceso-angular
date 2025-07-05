import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: [string, string][] = [
    ['carlos', 'carlos'],
    ['peko', 'peko']
  ];

  constructor() { }

  login(username: string, password: string):boolean {
    return this.users.some(([u, p]) => u === username && p === password);
  }
}
