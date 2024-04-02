import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleado/empleado.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit{
  titulo = 'Agregar empleado';
  formEmpleado: FormGroup;
  id: any | null;  

  constructor(public fb: FormBuilder,
              public empleadoService: EmpleadoService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.formEmpleado = this.fb.group({
      apellidop: ['', Validators.required],
      apellidom: ['', Validators.required],
      nombre: ['', Validators.required],
      usuario: ['', Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar empleado';
      this.empleadoService.getEmployes(this.id).subscribe(response => {
        //console.log(response.nombre);
        this.formEmpleado.setValue({
          apellidop: response.apellidop,
          apellidom: response.apellidom,
          nombre: response.nombre,
          usuario: response.usuario
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
    this.empleadoService.createEmployes(this.formEmpleado.value).subscribe(response => {
      this.router.navigate(['lista-empleados']);
    },
      error => {
        console.error(error);
      }
    );
  }

  editar(id: any): void {
    const empleado: any = {
      apellidop: this.formEmpleado.value.apellidop,
      apellidom: this.formEmpleado.value.apellidom,
      nombre: this.formEmpleado.value.nombre,
      usuario: this.formEmpleado.value.usuario
    };

    this.empleadoService.updateEmployes(id, empleado).subscribe(response => {
      this.router.navigate(['lista-empleados']);
    },
      error => {
        console.error(error)
      }
    );
  }
}
