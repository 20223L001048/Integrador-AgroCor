import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service'; 

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  email: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Validar el correo electrónico y la contraseña
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^[a-zA-Z0-9]{11}$/;

    if (!emailPattern.test(this.email) || !passwordPattern.test(this.password)) {
      alert('Por favor, ingrese un correo electrónico válido y una contraseña de 11 caracteres.');
      this.showError = true; 
      return;
    }

    // Validar las credenciales del administrador
    const allowedDomains = ['gmail.com', 'hotmail.com', 'utcv.edu.mx']; 

    const [, domain] = this.email.split('@');
    if (!allowedDomains.includes(domain)) {
      alert('Solo se permiten correos electrónicos de los dominios permitidos.');
      this.showError = true; 
      return;
    }

    if (this.email === 'admin2024@gmail.com' && this.password === 'agrocor2024') {
      console.log('Acceso al panel de administrador');
      this.router.navigateByUrl('/menu');
    } else {
      // Permitir el acceso con cualquier credencial solo para la página de inicio
      console.log('Acceso a la página de inicio');
      this.router.navigateByUrl('/inicio');
    }
  }
}
