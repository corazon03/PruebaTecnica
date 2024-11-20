import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface userData {
  email: string;
  password: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private readonly STORAGE_KEY = 'DB';
  
  isAuthenticated = false;
  userInfo: userData | null = null;

  constructor(private router: Router) {
    this.isAuthenticated = this.checkAuthenticated();

    if (this.isAuthenticated) router.navigate(["/home"])
  }

  register(email: string, password: string, nombre: string): string {
    const users = this.getUsers();
    if (users.some(user => user.email === email)) {
      return 'El correo ya está registrado.';
    }
    const newUser: userData = { email, password, nombre };
    users.push(newUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    this.isAuthenticated = true;
    return 'Usuario registrado con éxito.';
  }

  login(email: string, password: string): string {
    const users = this.getUsers();
    const user = users.find(user => user.email === email);
    if (user) {
      if (user.password === password) {
        this.userInfo = user;
        this.isAuthenticated = true;
        this.router.navigate(["/home"])
        return 'Login exitoso.';
      } else {
        return 'Contraseña incorrecta.';
      }
    } else {
      return 'El correo no está registrado.';
    }
  }

  logout(): void {
    this.userInfo = null;
    this.isAuthenticated = false;
  }

  private checkAuthenticated(): boolean {
    const users = this.getUsers();
    return users.length > 0 && this.userInfo !== null;
  }

  private getUsers(): userData[] {
    const users = localStorage.getItem(this.STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  }

}
