import { Component, OnInit } from '@angular/core';
import { TDistanciaService } from '../servicios/t-distancia.service';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.page.html',
  styleUrls: ['./distancia.page.scss'],
  standalone: false
})
export class DistanciaPage implements OnInit {
  valorEntrada: number = 0;
  unidadEntrada: string = ''; 
  unidadSalida: string = ''; 
  valorSalida: string = '';
  
  constructor(
    private tDistanciaService: TDistanciaService,
  ) { }
  
  ngOnInit() {
  }
  
  seleccionarUnidad(unidad: string, tipo: string) {
    if (tipo === 'entrada') {
      this.unidadEntrada = unidad;
      console.log(`Unidad de entrada seleccionada: ${unidad}`);
    } else if (tipo === 'salida') {
      this.unidadSalida = unidad;
      console.log(`Unidad de salida seleccionada: ${unidad}`);
    }

    if (this.unidadEntrada && this.unidadSalida) {
      this.convertirUnidades();
    }
  }
  convertirUnidades() {
    this.valorSalida = this.tDistanciaService.transformarMedida(this.valorEntrada, this.unidadEntrada, this.unidadSalida)
  }

}
