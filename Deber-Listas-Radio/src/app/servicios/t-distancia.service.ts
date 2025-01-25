import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TDistanciaService {

  constructor() { }

  transformarMedida(valor: number, unidadEntrada: string, unidadSalida: string): string {
    const factores: { [unidad: string]: number } = {
      'KM': 1000,   
      'M': 1,       
      'Cm': 0.01,   
      'mm': 0.001   
    };


    const valorEnMetros = valor * factores[unidadEntrada];

    let valorTransformado = valorEnMetros / factores[unidadSalida] ;
    let valorTransformadoString = valorTransformado.toString();

    valorTransformadoString  = valorTransformado + ' ' + unidadSalida;
    return valorTransformadoString;
  }
}
