import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: any;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getAllEmployes().subscribe(response => {
      this.empleados = response;
    },
    error => {
      console.error(error);
    });
  }

  eliminar(empleado: any) {
    this.empleadoService.deleteEmployes(empleado.id).subscribe(response => {
      if(response.deleted == true)
        this.empleados.pop(empleado);
    });
  }
}
