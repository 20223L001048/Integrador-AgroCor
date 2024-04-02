import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  titulo = 'Agregar usuario';
  formUsuario: FormGroup;
  id: any | null;  

  constructor(public fb: FormBuilder,
              public usuarioService: UsuarioService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.formUsuario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar usuario';
      this.usuarioService.getUsser(this.id).subscribe(response => {
        //console.log(response.nombre);
        this.formUsuario.setValue({
          nombre: response.nombre,
          apellidos: response.apellidos,
          correo: response.correo,
          contrasenia: response.contrasenia
        });
      });
    }
  }

  agregarOEditar(): void {
    if(this.id === null) 
      this.agregar();
    else
      this.editar(this.id);
  }

  agregar(): void {
    this.usuarioService.createUsers(this.formUsuario.value).subscribe(response => {
      this.router.navigate(['lista-usuarios']);
    },
      error => {
        console.error(error);
      }
    );
  }

  editar(id: any): void {
    const usuario: any = {
      nombre: this.formUsuario.value.nombre,
      apellidos: this.formUsuario.value.apellidos,
      correo: this.formUsuario.value.correo,
      contrasenia: this.formUsuario.value.contrasenia
    };

    this.usuarioService.updateUsers(id, usuario).subscribe(response => {
      this.router.navigate(['lista-usuarios']);
    },
      error => {
        console.error(error)
      }
    );
  }
}