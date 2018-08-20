import { Component, OnInit } from '@angular/core';
// Servicios
import { SocioService } from '../../../services/socio.service';
import { ToastrService} from 'ngx-toastr';

// Clase
import { Socio } from '../../../models/socio';

@Component({
  selector: 'app-socio-list',
  templateUrl: './socio-list.component.html',
  styleUrls: ['./socio-list.component.css']
})
export class SocioListComponent implements OnInit {

  socioList: Socio[];

  constructor(
    private socioService: SocioService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.socioService.getSocios()
      .snapshotChanges()
      .subscribe(item => {
        this.socioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.socioList.push(x as Socio);
        });
    });
  }

  onEdit(socio: Socio) {
    this.socioService.selectedSocio = Object.assign({}, socio);
  }

  onDelete($key: string) {
    if (confirm('¿Está seguro de que quiere eliminar el registro?')) {
      this.socioService.deleteSocio($key);
      this.toastr.success('El socio se ha eliminado correctamente', 'Borrar Socio');
    }
  }

}
