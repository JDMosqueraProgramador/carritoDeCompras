import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TallasService } from '@services/tallas.service';
import { Talla } from '@interfaces/talla.interface';
import { Producto } from '@interfaces/producto.interface';


@Component({
    // selector: "agregar-producto-app",
    templateUrl: './agregar-producto.component.html',
    styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

    form1: FormGroup;
    selectCategoria: string;
    otraCategoria: string = "otra";

    fotosSubidas: SafeUrl[] = [];
    tallas: Talla[];
    tallasSelect: any[] = [];
    constructor(private formBuild: FormBuilder, private sanit: DomSanitizer, private tallasService: TallasService) { }

    ngOnInit() {
        this.tallasRecived();
        this.formOneValidate();

        this.form1.valueChanges.subscribe(data => {
            localStorage.setItem("dataInputs", JSON.stringify(data as Producto));
        });
    }

    // Services ---------------------------------------------

    tallasRecived() {
        this.tallasService.tallasCreateProducto().subscribe(tallas => {
            this.tallas = tallas;
        });
    }

    // Form #1, Información general --------------------------------

    formOneValidate() {
        this.form1 = this.formBuild.group({
            nombre: ['', Validators.required],
            genero: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: ['', Validators.required],
            categoria: ['', Validators.required]
        });

        console.log(this.form1.errors);

        // Control -> Para agregar nueva categoría
        this.form1.controls['categoria'].valueChanges.subscribe(val => {
            if (val == this.otraCategoria && !this.form1.contains['otraCate']) {
                this.form1.addControl("otraCate", this.formBuild.control('', [Validators.required]));
            } else {
                this.form1.removeControl("otraCate");
            }
        });

        // Local Storage Practice

        if(localStorage.getItem("dataInputs")){
            let confirmacion: boolean = confirm("¿Desea continuar con el producto que estaba agregando anteriormente?");

            if(confirmacion == true){
                let dataAnterior = JSON.parse(localStorage.getItem("dataInputs"));
                console.log(dataAnterior);
                for(let llave in dataAnterior){
                    this.form1.controls[llave].setValue(dataAnterior[llave]);
                }
            }else{
                localStorage.clear();
            }
        }
    }

    // Form #2, Fotos --------------------------------------------

    mostrarFotos(e: any) {
        var fotos = e.target.files;
        if (fotos.length > 0) {
            for (let foto of fotos) {
                if (this.verificarExtension(foto)) {
                    let fotoRuta = this.sanit.bypassSecurityTrustUrl(window.URL.createObjectURL(foto));
                    this.fotosSubidas.push(fotoRuta);
                }
            }
        }
    }

    verificarExtension(foto: File): boolean {
        let extensiones = ["image/png", "image/jpeg"];

        for (let extension of extensiones) {
            if (extension == foto.type) {
                return true;
            }
        }

        return false;

        // mireya123@

    }

    // Form #3, Tallas -----------------------------------------------------

    chekeado(ev){
        if(ev.target.checked){
            this.tallasSelect.push({id: ev.target.value, cantidad: 0});
        }else{
            for(let tallaSel in this.tallasSelect){
                if(this.tallasSelect[tallaSel].id == ev.target.value){
                    this.tallasSelect.splice(parseInt(tallaSel), 1);
                }
            }
        }
        // console.log(this.tallasSelect);
    }

    filterTallas(id: number){
        return this.tallasSelect.find(data =>{
            return data.id == id;
        });
    }

    unidadesDispoAdd(ev:any, id:number){
        for(let talla in this.tallasSelect){
            if(this.tallasSelect[talla].id == id){
                this.tallasSelect[talla].cantidad = ev.target.value;
            }
        }
    }

    cantidadInvalida():boolean{
        if(this.tallasSelect.length > 0){

            for(let talla in this.tallasSelect){
                if(this.tallasSelect[talla].cantidad < 1 || this.tallasSelect[talla] == ""){
                    return false;
                }
            }
            return true;

        }else{
            return false;
        }
    }

    enviarDatos(){
        let objectProduct : Producto = this.form1.value as Producto;
        objectProduct.tallas = this.tallasSelect;
        objectProduct.imgPath = this.fotosSubidas;
        console.log(objectProduct);
    }
}
