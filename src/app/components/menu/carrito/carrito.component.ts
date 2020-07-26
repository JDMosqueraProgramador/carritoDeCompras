import { Component } from '@angular/core';
import { CarritoService } from '@services/carrito.service';


@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

    constructor(public carritoService: CarritoService) { }
    productosAgregados = JSON.parse(localStorage.getItem("carritoProducts"));
    totalPagar = this.carritoService.totalPagar;

    eliminarDelCarrito(id: number){
        let productosStorage = this.carritoService.productosAgregados;
        console.log("Antes", productosStorage, id);

        for (let productoStrorage in productosStorage) {

            if(productosStorage[productoStrorage].id == id){
                productosStorage.splice(parseInt(productoStrorage), 1);
            }
        }
        console.log("Despues", productosStorage);
        localStorage.setItem("carritoProducts", JSON.stringify(productosStorage));
        this.productosAgregados = this.carritoService.productosAgregados;
    }

    cambiarCantidad(id: number, ev){
        for(let producto in this.productosAgregados){
            if(this.productosAgregados[producto].id == id){
                this.productosAgregados[producto].canidad = ev.target.value;
            }
        }
    }
}
