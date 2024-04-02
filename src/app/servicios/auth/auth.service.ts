import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  private readonly SESSION_KEY = 'isUserLoggedIn';
 
  constructor() { }

  // Método para iniciar sesión
  login(): void {
    localStorage.setItem(this.SESSION_KEY, 'true');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY); 
  }

  // Método para verificar el estado de la sesión
  isLoggedIn(): boolean {
    return localStorage.getItem(this.SESSION_KEY) === 'true';
  }
}
