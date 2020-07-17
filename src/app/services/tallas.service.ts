import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Talla } from '@interfaces/talla.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TallasService {

    protected rutaHttp = "http://localhost/Otros/angular/carritoDeComprasBackend/API/";
    constructor(private http: HttpClient) { }

    tallasCreateProducto() : Observable<Talla[]>{
        return this.http.get<Talla[]>(`${this.rutaHttp}tallasJson.php`);
    }
}
