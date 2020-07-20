import { Component, OnInit } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

    constructor() { }

    get productosAgregados(): any[] {
        return JSON.parse(localStorage.getItem("carritoProducts"));
    }

    get totalPagar(): number {
        let total = 0;
        let productosStorage = JSON.parse(localStorage.getItem("carritoProducts"));
        for (let productoStrorage of productosStorage) {
            total += productoStrorage.cantidad * productoStrorage.precio;
        }
        return total;

    }

    eliminarDelCarrito(id: number){
        debugger
        let productosStorage = JSON.parse(localStorage.getItem("carritoProducts"));
        console.log("Antes", productosStorage, id);

        for (let productoStrorage in productosStorage) {

            if(productosStorage[productoStrorage].id == id){
                productosStorage.splice(parseInt(productoStrorage), 1);
            }
        }
        console.log("Despues", productosStorage);
        localStorage.setItem("carritoProducts", JSON.stringify(productosStorage));
    }

    ngOnInit() {
    }
}
