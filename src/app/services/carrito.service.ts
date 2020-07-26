import { Injectable } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {

    constructor() { }

    agregarAlCarrito(producto: Producto) {
        let productos: any[] = this.productosAgregados;
        productos.push(producto);
        localStorage.setItem("carritoProducts", JSON.stringify(productos));
    }

    get productosAgregados(): any[]{
        let productosServicio = JSON.parse(localStorage.getItem("carritoProducts"));
        if(productosServicio == null){
            return []
        }
        return productosServicio;
    }

    get totalPagar(): number {
        let total = 0;
        let productosStorage = this.productosAgregados;
        for (let productoStrorage of productosStorage) {
            total += productoStrorage.cantidad * productoStrorage.precio;
        }
        return total;
    }
}
