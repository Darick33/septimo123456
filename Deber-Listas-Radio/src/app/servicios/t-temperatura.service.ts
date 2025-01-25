import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TTemperaturaService {

  constructor() { }

  transformarMedida(valor: number, unidadEntrada: string, unidadSalida: string): number {
    let resultado: number;

    switch (unidadEntrada) {
      case 'C': 
      case 'Ce':
        if (unidadSalida === 'F') {
          resultado = (valor * 9 / 5) + 32;
        } else if (unidadSalida === 'K') {
          resultado = valor + 273.15;
        } else if (unidadSalida === 'C' || unidadSalida === 'Ce') {
          resultado = valor; 
        } else {
          throw new Error('Unidad de salida no válida');
        }
        break;

      case 'F': 
        if (unidadSalida === 'C' || unidadSalida === 'Ce') {
          resultado = (valor - 32) * 5 / 9; 
        } else if (unidadSalida === 'K') {
          resultado = ((valor - 32) * 5 / 9) + 273.15; 
        } else if (unidadSalida === 'F') {
          resultado = valor; 
        } else {
          throw new Error('Unidad de salida no válida');
        }
        break;

      case 'K': 
        if (unidadSalida === 'C' || unidadSalida === 'Ce') {
          resultado = valor - 273.15;
        } else if (unidadSalida === 'F') {
          resultado = ((valor - 273.15) * 9 / 5) + 32; 
        } else if (unidadSalida === 'K') {
          resultado = valor; 
        } else {
          throw new Error('Unidad de salida no válida');
        }
        break;

      default:
        throw new Error('Unidad de entrada no válida');
    }

    return resultado;
  }
}
