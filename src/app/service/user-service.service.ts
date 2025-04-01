import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userIdKey = 'userId'; // Chave para armazenar no SessionStorage

  setUserId(id: number) {
    sessionStorage.setItem(this.userIdKey, id.toString()); // Salva no SessionStorage
  }

  getUserId(): number | null {
    const storedId = sessionStorage.getItem(this.userIdKey);
    return storedId ? parseInt(storedId, 10) : null;
  }
  
  constructor() { }
}
