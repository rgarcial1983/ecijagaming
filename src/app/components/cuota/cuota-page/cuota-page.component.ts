import { Component, OnInit } from '@angular/core';

// Servicios
import { SocioService } from '../../../services/socio.service';
import { ToastrService } from 'ngx-toastr';

// Clase
import { Socio } from '../../../models/socio';

import * as $ from 'jquery';

@Component({
  selector: 'app-cuota-page',
  templateUrl: './cuota-page.component.html',
  styleUrls: ['./cuota-page.component.css']
})
export class CuotaPageComponent implements OnInit {

  // tslint:disable-next-line:prefer-const
  meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  mesesCompleto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  public socioList: Socio[];
  public filtro: string;

  constructor(
    public socioService: SocioService,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.socioService
      .getSocios()
      .snapshotChanges()
      .subscribe(item => {
        this.socioList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.socioList.push(x as Socio);
        });
      });
  }

  onClickMes(mes: any, idMes: any) {
    $('#dropDownMes').text(mes);
    $('#dropDownMes').val(idMes);
  }

  onSearchSocio(filtro: string) {
    console.log(filtro);
    // Declare variables
    let input, filter, table, tr;
    input = document.getElementById('filtro');
    filter = input.value.toUpperCase();
    table = document.getElementById('dtCuotas');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    this.buscarPorColumna(tr, filter, 0);
  }

  buscarPorColumna(tr, filter, x) {
    let td, i;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[x];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('dtCuotas');
    switching = true;
    // Set the sorting direction to ascending:
    dir = 'asc';
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        // tslint:disable-next-line:triple-equals
        if (switchcount == 0 && dir == 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }


}
