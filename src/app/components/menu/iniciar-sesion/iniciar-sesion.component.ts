import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '@services/usuarios.service';
import { Login } from '@interfaces/login.interface';
import { Usuario } from 'app/models/classes/usuario';

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

    usuarioNoExiste: Boolean = true;
    iniciarSesion: FormGroup;
    constructor(private formBuilder: FormBuilder, private userService: UsuariosService) { }

    ngOnInit() {
        this.formValidacion();
    }

    formValidacion(){
        this.iniciarSesion = this.formBuilder.group({
            correo: ['', Validators.compose([Validators.required, Validators.email])],
            contra: ['', Validators.required]
        });
    }

    prueba(){
        if(this.iniciarSesion.valid){

            this.userService.iniciarSesion(this.iniciarSesion.value as Login).subscribe((user:any) =>{
                this.usuarioNoExiste = user.Login == null ? true : false;
                if(user.Login == null){
                    this.usuarioNoExiste = true;
                }else{
                    this.usuarioNoExiste = false;
                    this.iniciarSesion.reset();
                }
                console.log(this.usuarioNoExiste);
            });
        }
    }
}
