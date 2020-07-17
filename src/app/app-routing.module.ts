import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviarComponent } from '@components/enviar/enviar.component';
import { TabsComponent } from '@components/tabs/tabs.component';
import { ErrorComponent } from '@components/error/error.component';
import { BannerComponent } from '@components/banner/banner.component';
import { ProductoComponent } from '@components/productos/producto/producto.component';
import { BuscadorComponent } from '@components/buscador/buscador.component';
import { DetallesComponent } from '@components/productos/detalles/detalles.component';
import { ProductosComponent } from '@components/productos/productos.component';
import { AdminComponent } from '@components/Admin/admin/admin.component';
import { AgregarProductoComponent } from '@components/Admin/agregar-producto/agregar-producto.component';
import { ProductosAdminComponent } from '@components/Admin/productos-admin/productos-admin.component';


const routes: Routes = [
    {path: '', component: BannerComponent},
    {path: 'enviar', component: EnviarComponent},
    {path: 'tabs', component: TabsComponent},
    {path: 'buscador', component: BuscadorComponent},
    {path: 'productos', component: ProductosComponent, children: [
        {path: '', component: ProductoComponent},
        {path: 'detalles/:ref', component: DetallesComponent}
    ]},

    // Administrador

    {path: 'admin', component: AdminComponent, children: [
        {path: 'productos', component: ProductosAdminComponent},
        {path: 'agregar-producto', component: AgregarProductoComponent}
        // {path: 'agregarProducto', component: AgregarProductoComponent}
    ]},


    {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
