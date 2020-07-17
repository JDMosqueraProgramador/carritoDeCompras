import { Component, OnInit } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';
import { ProductosService } from '@services/productos.service';

@Component({
    templateUrl: './view-productos.component.html',
    styleUrls: ['./view-productos.component.scss']
})
export class ViewProductosComponent implements OnInit {

    productos: Producto[] = [];
    constructor(private productosService: ProductosService) { }

    ngOnInit() {
        this.productosService.productosReturn().subscribe(productos => {
            this.productos = productos;
        });
        console.log(this.productos);
    }

}
