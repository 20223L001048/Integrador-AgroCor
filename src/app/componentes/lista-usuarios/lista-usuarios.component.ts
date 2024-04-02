import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getAllUsers().subscribe(response => {
      this.usuarios = response;
    },
    error => {
      console.error(error);
    });
  }

  eliminar(usuario: any) {
    this.usuarioService.deleteUsers(usuario.id).subscribe(response => {
      if(response.deleted == true)
        this.usuarios.pop(usuario);
    });
  }
}
