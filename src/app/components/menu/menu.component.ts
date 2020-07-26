import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CarritoComponent } from './carrito/carrito.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements AfterViewInit {

    actualizarCarrito: boolean = false;

    @ViewChild(CarritoComponent, {static: false}) carrito: CarritoComponent;

    constructor() { }

    ngAfterViewInit(){
        // console.log(this.carrito);
    }

    actualizar(){
        this.carrito.productosAgregados = this.carrito.carritoService.productosAgregados;
        this.carrito.totalPagar = this.carrito.carritoService.totalPagar;
    }

}
