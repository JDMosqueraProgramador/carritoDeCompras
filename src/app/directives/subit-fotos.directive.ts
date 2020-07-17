import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appSubitFotos]'
})
export class SubitFotosDirective {


    constructor(private elRef: ElementRef) { }

    @HostListener("change") subirFotos() {
        let fotos = this.elRef.nativeElement.files;

    }



}
