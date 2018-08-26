import { Pipe, PipeTransform } from '@angular/core';
import { Socio } from '../models/socio';

@Pipe({
  name: 'buscarSocioPorNombre'
})
export class BuscarSocioPorNombrePipe implements PipeTransform {
  transform(socios: Socio[], filtro: string) {
    return socios.filter(socio => (
      socio.nombre.indexOf(filtro) !== -1
     || socio.apellido1.indexOf(filtro) !== -1
     || socio.apellido2.indexOf(filtro) !== -1));
  }

}
