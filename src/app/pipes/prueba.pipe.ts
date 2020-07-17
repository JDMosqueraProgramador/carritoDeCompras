import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prueba'
})
export class PruebaPipe implements PipeTransform {

    transform(value: number): number {
        return value * 2;
    }

}
