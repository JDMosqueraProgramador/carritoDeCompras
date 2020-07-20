import { Injectable } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {

    constructor() { }

    agregarAlCarrito(producto: Producto) {
        let productos: Producto[] = JSON.parse(localStorage.getItem("carritoProducts"));
        productos.push(producto);
        localStorage.setItem("carritoProducts", JSON.stringify(productos));
    }
}
