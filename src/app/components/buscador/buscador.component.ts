import { Component, OnInit, HostListener } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';
import { ProductosService } from '@services/productos.service';



@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

    cumple = new Date(2003, 1, 5);
    numero: number = 12;

    constructor(private productosService: ProductosService) { }

    ngOnInit() {
        var productosCategory: Producto[] = [];
        this.productosService.productos.forEach(producto => {
            if (producto.categoria == "Camisas") {
                console.log(producto);
                productosCategory.push(producto);
            }
        });

        console.log(this.productosService.productos);
        console.log(productosCategory);

        console.log("Holi");
    }

    // @HostListener("mousemove", ['$event'])

    mover(event: MouseEvent){
        console.log(event.clientX);
    }

}
