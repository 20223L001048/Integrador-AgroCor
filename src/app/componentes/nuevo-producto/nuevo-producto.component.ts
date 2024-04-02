import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  titulo = 'Agregar producto';
  formProducto: FormGroup;
  id: any | null;  

  constructor(public fb: FormBuilder,
              public productoService: ProductoService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.formProducto = this.fb.group({
      producto: ['', Validators.required],
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      presentacion: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
    //console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this.productoService.getProducts(this.id).subscribe(response => {
        //console.log(response.nombre);
        this.formProducto.setValue({
          producto: response.producto,
          codigo: response.codigo,
          marca: response.marca,
          presentacion: response.presentacion,
          categoria: response.categoria,
          precio: response.precio
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
    this.productoService.createProducts(this.formProducto.value).subscribe(response => {
      this.router.navigate(['lista-productos']);
    },
      error => {
        console.error(error);
      }
    );
  }

  editar(id: any): void {
    const producto: any = {
      producto: this.formProducto.value.producto,
      codigo: this.formProducto.value.codigo,
      marca: this.formProducto.value.marca,
      presentacion: this.formProducto.value.presentacion,
      categoria: this.formProducto.value.categoria,
      precio: this.formProducto.value.precio
    };

    this.productoService.updateProducts(id, producto).subscribe(response => {
      this.router.navigate(['lista-productos']);
    },
      error => {
        console.error(error)
      }
    );
  }
}
