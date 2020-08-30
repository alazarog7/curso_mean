import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
 titulo: string[] = ["Ventas","Finanzas","Comercial","Almacenes"];
 data: number[][] = [[100,200,330],[100,200,330],[100,200,330],[100,200,330]];
 labels: string[][] = [['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
                       ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
                       ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
                       ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']];

 constructor() { }

 ngOnInit() {
 }

 // events
 

}
