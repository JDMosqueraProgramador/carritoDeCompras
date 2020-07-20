import { Component, OnInit } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';
import { ProductosService } from '@services/productos.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit{

    productoProximo: any = null;
    constructor(private productosService: ProductosService) {
    }

    ngOnInit(){
        this.productosService.productosReturn().subscribe((products: Producto[]) => {
            this.productosService.productos = products.map(producto => {
                producto.colores = JSON.parse(producto.colores);
                producto.imgPath = JSON.parse(producto.imgPath);
                return producto;
            });
        });
        console.log(this.productosService.productos);
    }

    agregarCarito(event: any, prod: Producto){
        this.productoProximo = prod;
        console.log(event);
    }

}

