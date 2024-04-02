import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { NuevoProveedorComponent } from './componentes/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoEmpleadoComponent } from './componentes/nuevo-empleado/nuevo-empleado.component';
import { ListaProveedoresComponent } from './componentes/lista-proveedores/lista-proveedores.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ProductosComponent,
    InicioSesionComponent,
    FormularioComponent,
    AppComponent,
    InicioSesionComponent,
    ListaUsuariosComponent,
    CrearUsuarioComponent,
    MenuComponent,
    NuevoProductoComponent,
    ListaProductosComponent,
     NuevoProveedorComponent,
    NuevoEmpleadoComponent,
    ListaProveedoresComponent,
    ListaEmpleadosComponent,
    RegistroUsuarioComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }