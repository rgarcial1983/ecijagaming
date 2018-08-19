import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { SocioService } from '../../../services/socio.service';

// Class
import { Socio } from '../../../models/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  constructor(
    private socioService: SocioService
  ) { }

  ngOnInit() {
    this.socioService.getSocios();
    this.resetForm();
  }

  onSubmit(socioForm: NgForm) {
    if (socioForm.value.$key == null) {
      this.socioService.insertSocio(socioForm.value);
    } else {
      this.socioService.updateSocio(socioForm.value);
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
