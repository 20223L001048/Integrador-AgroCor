import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit{
   titulo = 'Agregar proveedor';
  formProveedor: FormGroup;
  id: any | null;  

  constructor(public fb: FormBuilder,
              public proveedorService: ProveedorService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.formProveedor = this.fb.group({
      producto: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidop: ['', Validators.required],
      apellidom: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      empresa: ['', Validators.required]
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar proveedor';
      this.proveedorService.getProveers(this.id).subscribe(response => {
        //console.log(response.nombre);
        this.formProveedor.setValue({
          producto: response.producto,
          nombre: response.nombre,
          apellidop: response.apellidop,
          apellidom: response.apellidom,
          correo: response.correo,
          telefono: response.telefono,
          empresa: response.empresa,
          
          

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
    this.proveedorService.createProveers(this.formProveedor.value).subscribe(response => {
      this.router.navigate(['lista-proveedores']);
    },
      error => {
        console.error(error);
      }
    );
  }

  editar(id: any): void {
    const proveedor: any = {
      producto: this.formProveedor.value.producto,
      nombre: this.formProveedor.value.nombre,
      apellidop: this.formProveedor.value.apellidop,
      apellidom: this.formProveedor.value.apellidom,
      correo: this.formProveedor.value.correo,
      telefono: this.formProveedor.value.telefono,
      empresa: this.formProveedor.value.empresa

    };

    this.proveedorService.updateProveers(id, proveedor).subscribe(response => {
      this.router.navigate(['lista-proveedores']);
    },
      error => {
        console.error(error)
      }
    );
  }
  
}

