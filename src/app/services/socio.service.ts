import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Socio } from '../models/socio';

@Injectable()
export class SocioService {
  socioList: AngularFireList<any>;
  selectedSocio: Socio = new Socio();

  constructor(private firebase: AngularFireDatabase) {}

  getSocios() {
    return (this.socioList = this.firebase.list('socios'));
  }

  insertSocio(socio: Socio) {
    this.socioList.push({
      nombre: socio.nombre,
      apellido1: socio.apellido1,
      apellido2: socio.apellido2,
      email: socio.email,
      telefono: socio.telefono,
      estado: true,
      cuota: {
        '2017': {
          abr: false,
          ago: false,
          dic: false,
          ene: false,
          feb: false,
          jul: false,
          jun: false,
          mar: false,
          may: false,
          nov: false,
          oct: false,
          sep: false
        },
        '2018': {
          abr: false,
          ago: false,
          dic: false,
          ene: false,
          feb: false,
          jul: false,
          jun: false,
          mar: false,
          may: false,
          nov: false,
          oct: false,
          sep: false
        },
        '2019': {
          abr: false,
          ago: false,
          dic: false,
          ene: false,
          feb: false,
          jul: false,
          jun: false,
          mar: false,
          may: false,
          nov: false,
          oct: false,
          sep: false
        }
      }
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

  searchSocio(filtro: string) {
    console.log('Búsqueda de Socios:');
    const ref = this.firebase.database.ref('socios/');

    ref.orderByChild('nombre').on('child_added', function(data) {
      // console.log(data.val().nombre);
    });

    ref
      .orderByChild('nombre')
      .equalTo('Lucas')
      .limitToFirst(3)
      .on('child_added', function(snapshot) {
        console.log(snapshot.val().apellido1);
      });
  }
}
