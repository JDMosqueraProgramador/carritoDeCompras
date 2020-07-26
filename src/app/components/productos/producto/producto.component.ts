import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '@interfaces/producto.interface';
import { CarritoService } from '@services/carrito.service';
import { ProductosService } from '@services/productos.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit{

    productoProximo: any = null;
    formAgregarAlCarrito: FormGroup;
    constructor(private productosService: ProductosService, private formBuild: FormBuilder, private carritoService: CarritoService) {
    }

    ngOnInit(){
        this.productosService.productosReturn().subscribe((products: Producto[]) => {
            this.productosService.productos = products.map(producto => {
                producto.colores = JSON.parse(producto.colores);
                producto.imgPath = JSON.parse(producto.imgPath);
                return producto;
            });
        });
        this.agregarAlCarritoForm();
        console.log(this.productosService.productos);
    }

    agregarCarito(event: any, prod: Producto){
        this.productoProximo = prod;
        console.log(event);
    }

    agregarAlCarritoForm(){
        this.formAgregarAlCarrito = this.formBuild.group({
            cantidad: ['', Validators.required],
            tallaPedir: ['', Validators.required]
        });
    }

    agregarAlCarritoFinal(){
        if(this.formAgregarAlCarrito.valid){
            this.productoProximo.cantidad = this.formAgregarAlCarrito.controls['cantidad'].value;
            this.productoProximo.talla = this.formAgregarAlCarrito.controls['tallaPedir'].value;
            this.carritoService.agregarAlCarrito(this.productoProximo);
            this.formAgregarAlCarrito.reset();
        }

    }

}

