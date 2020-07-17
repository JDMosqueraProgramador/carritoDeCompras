import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@components/app/app.component';
import { MenuComponent } from '@components/menu/menu.component';
import { ProductoComponent } from '@components/productos/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { EnviarComponent } from './components/enviar/enviar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ErrorComponent } from './components/error/error.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

import { ProductosService } from '@services/productos.service';
import { UsuariosService } from '@services/usuarios.service';

import { PruebaPipe } from './pipes/prueba.pipe';
import { DetallesComponent } from './components/productos/detalles/detalles.component';
import { ProductosComponent } from './components/productos/productos.component';
import { IniciarSesionComponent } from './components/menu/iniciar-sesion/iniciar-sesion.component';
import { AgregarProductoComponent } from './components/Admin/agregar-producto/agregar-producto.component';
import { AdminComponent } from '@components/Admin/admin/admin.component';
import { ProductosAdminComponent } from '@components/Admin/productos-admin/productos-admin.component';
import { MenuProductosComponent } from './components/Admin/menu-productos/menu-productos.component';
import { SubitFotosDirective } from './directives/subit-fotos.directive';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ProductoComponent,
        BuscadorComponent,
        PruebaPipe,
        EnviarComponent,
        TabsComponent,
        ErrorComponent,
        BannerComponent,
        MenuLateralComponent,
        DetallesComponent,
        ProductosComponent,
        IniciarSesionComponent,
        AdminComponent,
        AgregarProductoComponent,
        ProductosAdminComponent,
        MenuProductosComponent,
        SubitFotosDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        ProductosService,
        UsuariosService
    ],
    bootstrap: [AppComponent],
    exports: [MenuComponent]
})

export class AppModule { }
