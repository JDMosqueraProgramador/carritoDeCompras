import { Injectable } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    protected rutaHttp = "http://localhost/Otros/angular/carritoDeComprasBackend/API/";
    productos: Producto[] = [];
    productoSeleccionado: Producto;
    constructor(private http: HttpClient) {}

    productosReturn(): Observable<Producto[]>{
        return this.http.get<Producto[]>(`${this.rutaHttp}productosJson.php`);
    }

    productoDelete(id: number): Observable<Producto[]>{
        return this.http.put<Producto[]>(`${this.rutaHttp}productosJson.php`, id);
    }
}
