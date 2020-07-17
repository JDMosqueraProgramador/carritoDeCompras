import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'app/models/classes/usuario';
import { Login } from '@interfaces/login.interface';


@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    protected rutaHttp = 'http://localhost/Otros/angular/carritoDeComprasBackend/API/';
    constructor(private http: HttpClient) {}

    usuarios(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.rutaHttp + "userJson.php");
        // this.http.post
    }

    iniciarSesion(user: Login): Observable<any>{
        return this.http.post<any>(this.rutaHttp + "login.php", user);
    }
}
