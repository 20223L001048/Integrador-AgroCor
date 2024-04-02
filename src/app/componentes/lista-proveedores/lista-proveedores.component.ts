import { Component,OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  proveedores: any;

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.proveedorService.getAllProveers().subscribe(response => {
      this.proveedores = response;
    },
    error => {
      console.error(error);
    });
  }

  eliminar(proveedor: any) {
    this.proveedorService.deleteProveers(proveedor.id).subscribe(response => {
      if(response.deleted == true)
        this.proveedores.pop(proveedor);
    });
  }
}
