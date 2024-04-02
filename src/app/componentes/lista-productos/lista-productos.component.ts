import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(response => {
      this.productos = response;
    },
    error => {
      console.error(error);
    });
  }

  eliminar(producto: any) {
    this.productoService.deleteProducts(producto.id).subscribe(response => {
      if(response.deleted == true)
        this.productos.pop(producto);
    });
  }
}
