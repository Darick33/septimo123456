import { Component, OnInit } from '@angular/core';
import { TTemperaturaService } from '../servicios/t-temperatura.service'; // Importar el servicio

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
  standalone: false
})
export class TemperaturaPage implements OnInit {

  valorEntrada: number = 0;
  valorSalida: number = 0;

  checkCelsiusEntrada: boolean = false;
  checkFahrenheitEntrada: boolean = false;
  checkKelvinEntrada: boolean = false;

  checkCelsiusSalida: boolean = false;
  checkFahrenheitSalida: boolean = false;
  checkKelvinSalida: boolean = false;

  constructor(private tTemperaturaService: TTemperaturaService) { }

  ngOnInit() {}

  convertirUnidades() {
    let valorSalida = this.valorEntrada;
    
    let unidadesEntrada = this.obtenerUnidadEntrada();
    let unidadesSalida = this.obtenerUnidadSalida();

    if (unidadesEntrada && unidadesSalida) {
      valorSalida = this.tTemperaturaService.transformarMedida(valorSalida, unidadesEntrada, unidadesSalida);
      this.valorSalida = valorSalida;
    } else {
      alert("Por favor selecciona una unidad de entrada y salida válida.");
    }
  }

  obtenerUnidadEntrada(): string {
    if (this.checkCelsiusEntrada) return 'C';
    if (this.checkFahrenheitEntrada) return 'F';
    if (this.checkKelvinEntrada) return 'K';
    return ''; 
  }

  obtenerUnidadSalida(): string {
    if (this.checkCelsiusSalida) return 'C';
    if (this.checkFahrenheitSalida) return 'F';
    if (this.checkKelvinSalida) return 'K';
    return '';  
  }
}
