import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TPesoService {

  constructor() { }

  transformarMedida(valor: number, unidadEntrada: string, unidadSalida: string): number {
    const factores: { [unidad: string]: number } = {
      'T': 1000,     
      'KG': 1,       
      'LB': 0.453592, 
      'G': 0.001    
    };

    const valorEnKg = valor * factores[unidadEntrada];

    const valorTransformado = valorEnKg / factores[unidadSalida];

    return valorTransformado;
  }
}
