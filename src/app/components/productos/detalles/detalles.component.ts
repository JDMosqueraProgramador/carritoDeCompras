import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '@interfaces/producto.interface';

@Component({
    templateUrl: './detalles.component.html',
    styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
    producto: Producto;
    numButtons: number;
    constructor(private productosService: ProductosService, private activRoute: ActivatedRoute) { }

    id = this.activRoute.snapshot.params.ref;

    ngOnInit() {

        this.productosService.productosReturn().subscribe(productosDelServicio => {
            this.productosService.productos = productosDelServicio;

            this.producto = this.productosService.productos.find(producto => {
                producto.imgPath = JSON.parse(producto.imgPath);
                return producto.id == this.id
            });
            this.numButtons = this.producto.imgPath.length;

        });

    }

    widthButtons(num: number): string {
        var qq = 100 / num;
        return `${qq}%`;
    }
}
