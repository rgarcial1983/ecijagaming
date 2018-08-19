import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Socio } from '../models/socio';


@Injectable()
export class SocioService {

  socioList: AngularFireList<any>;
  selectedSocio: Socio = new Socio();

  constructor(private firebase: AngularFireDatabase) { }

  getSocios() {
    return this.socioList = this.firebase.list('socios');
  }

  insertSocio(socio: Socio) {
    this.socioList.push({
      nombre: socio.nombre,
      apellido1: socio.apellido1,
      apellido2: socio.apellido2,
      email: socio.email,
      telefono: socio.telefono
    });
  }

  updateSocio(socio: Socio) {
    this.socioList.update(socio.$key, {
      nombre: socio.nombre,
      apellido1: socio.apellido1,
      apellido2: socio.apellido2,
      email: socio.email,
      telefono: socio.telefono
    });
  }

  deleteSocio($key: string) {
    this.socioList.remove($key);
  }
}
