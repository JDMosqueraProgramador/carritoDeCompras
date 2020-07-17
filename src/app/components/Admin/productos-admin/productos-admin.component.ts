import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { Producto } from '@interfaces/producto.interface';

@Component({
    templateUrl: './productos-admin.component.html',
    styleUrls: ['./productos-admin.component.scss']
})
export class ProductosAdminComponent implements OnInit {

    productos: Producto[] = [];
    constructor(private productosService: ProductosService) { }

    ngOnInit() {
        this.productosService.productosReturn().subscribe(productos => {
            this.productos = productos;
        });
        console.log(this.productos);
    }

}
