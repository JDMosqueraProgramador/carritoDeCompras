import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '@interfaces/producto.interface';
import { viewClassName } from '@angular/compiler';

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
        console.log(this.id);
        this.producto = this.productosService.productos.find(producto => {
            return producto.id == this.id
        });

        this.numButtons = document.getElementsByTagName('button').length;

        console.log("Producto:", this.producto);
    }

    widthButtons(num: number): string{
        var qq = 100/ num;
        return `${qq} + %`;
    }
}
