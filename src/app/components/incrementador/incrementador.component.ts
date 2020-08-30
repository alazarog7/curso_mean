import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Output('valor') incrementadorEvent = new EventEmitter<number>();
  @Input('valor') progreso:number;
  @Input() btnClass: string = "btn-primary"

  constructor() { }

  ngOnInit(): void {
    this.btnClass  = `btn ${this.btnClass}`
  }
  

  cambiarlValor( valor: number){
    console.log(valor);
    let porcentaje = valor + this.progreso 
    if(porcentaje > 100 || porcentaje <0 ){
      return;
    } 
    this.progreso = this.progreso + valor;
    this.incrementadorEvent.emit(this.progreso);
  }

  onChange(valor:number){
    console.log(valor);
    if(valor > 100 || valor <0 ){
      this.cambiarlValor(this.progreso)
    }else{
      this.cambiarlValor(valor-this.progreso)
    } 
  }

}
