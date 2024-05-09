import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-funciones-basicas',
  standalone: true,
  imports: [],
  templateUrl: './funciones-basicas.component.html',
  styleUrl: './funciones-basicas.component.css'
})
export class FuncionesBasicasComponent {

  campo = "0";
  numero1 = "";
  numero2= "";
  estado = "";
  

  mostrar_campo(event:Event)
  {
    let valor_anterior = this.campo;
    this.campo = valor_anterior +(<HTMLInputElement>event.target).value;
   
  }

  operacion(event:Event)
  {
    this.numero1 = this.campo;
    this.campo = "0";
    this.estado = (<HTMLInputElement>event.target).name;
    

  }

  calcular(event:Event)
  {
    this.numero2 =this.campo;
    let iNumero1 = parseInt(this.numero1);
    let iNumero2 = parseInt(this.numero2);
    let resultado = 0;
  
    switch (this.estado) {

      case "suma":
        
        resultado = iNumero1+iNumero2;
        break;
        case "resta":
        resultado = iNumero1-iNumero2;
        break;
        case "multiplicacion":
        resultado = iNumero1*iNumero2;
        break;
        case "division":
        resultado = iNumero1/iNumero2;
        break;
    
      default:
        break;
    }

    this.campo = resultado.toString();
    
  }

  borrar(event:Event)
  {
    this.campo = "0";
    this.numero1= "";
    this.numero2 ="";
  }
   
}
