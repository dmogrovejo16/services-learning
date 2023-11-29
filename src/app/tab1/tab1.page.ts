import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  alertButtons = ['Aceptar'];

  public alertInputs = [
    {
      placeholder: 'Nombre del torneo',
    },
    {
      placeholder: 'Nivel',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'date',
      placeholder: 'Fecha de inicio',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Descripcion',
    },
  constructor() {}

}
