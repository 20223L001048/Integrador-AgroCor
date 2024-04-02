import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './componentes/nuevo-empleado/nuevo-empleado.component';
import { ListaProveedoresComponent } from './componentes/lista-proveedores/lista-proveedores.component';
import { NuevoProveedorComponent } from './componentes/nuevo-proveedor/nuevo-proveedor.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { IndexComponent } from './componentes/index/index.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AuthService } from './servicios/auth/auth.service';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path:'inicio-sesion',
    component:InicioSesionComponent
  },
  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'inicio-sesion',
    component:InicioSesionComponent
  },
  {
    path:'lista-usuarios',
    component:ListaUsuariosComponent
  },
  {
    path:'crear-usuario',
    component:CrearUsuarioComponent
  },
  {  
    path:'editar-usuario/:id',
    component:CrearUsuarioComponent
  },
  {
  path:'nuevo-producto',
  component:NuevoProductoComponent
  },
  {
    path:'lista-productos',
    component:ListaProductosComponent
  },
  {  
    path:'editar-producto/:id',
    component:NuevoProductoComponent
  },
  {
    path:'lista-empleados',
    component:ListaEmpleadosComponent
  },
  {
    path:'nuevo-empleado',
    component:NuevoEmpleadoComponent
  },
  {
    path:'editar-empleado/:id',
    component:NuevoEmpleadoComponent
  },
  {
    path:'lista-proveedores',
    component:ListaProveedoresComponent
  },
  {
    path:'nuevo-proveedor',
    component:NuevoProveedorComponent
  },
  {
    path:'editar-proveedor/:id',
    component:NuevoProveedorComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'registro-usuario',
    component:RegistroUsuarioComponent  

  },
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'index',
    pathMatch:'full'
  }, 
  { path: 'menu', component: MenuComponent, canActivate: [AuthService], pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
