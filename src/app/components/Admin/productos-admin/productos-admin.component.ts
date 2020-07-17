import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { Producto } from '@interfaces/producto.interface';

@Component({
    templateUrl: './productos-admin.component.html',
    styleUrls: ['./productos-admin.component.scss']
})
export class ProductosAdminComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
