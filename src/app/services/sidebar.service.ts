import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo: 'Main', url: ''},
        {titulo: 'Progress', url: 'progress'},
        {titulo: 'Grafica1', url: 'grafica1'},
      ]
    }
  ];
  constructor() { }
}
