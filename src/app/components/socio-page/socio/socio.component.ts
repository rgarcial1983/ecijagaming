import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { SocioService } from '../../../services/socio.service';
import { ToastrService} from 'ngx-toastr';

// Class
import { Socio } from '../../../models/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  constructor(
    private socioService: SocioService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.socioService.getSocios();
    this.resetForm();
  }

  onSubmit(socioForm: NgForm) {
    if (socioForm.value.$key == null) {
      this.socioService.insertSocio(socioForm.value);
      this.toastr.success('Socio registrado correctamente', 'Alta Socio');
    } else {
      this.socioService.updateSocio(socioForm.value);
      this.toastr.success('Socio actualizado correctamente', 'Actualización Socio');
    }

    this.resetForm(socioForm);
  }

  resetForm(socioForm?: NgForm) {
    if (socioForm != null) {
      socioForm.reset();
      this.socioService.selectedSocio = new Socio();
    }
  }
}
