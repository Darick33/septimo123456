import { Component, OnInit } from '@angular/core';
import { TPesoService } from '../servicios/t-peso.service';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
  standalone: false
})
export class PesoPage implements OnInit {
  valorEntrada: number = 0;
  unidadEntrada: string = ''; 
  unidadSalida: string = ''; 
  valorSalida: number = 0;

  constructor(private tPesoService: TPesoService) {}

  ngOnInit() {}

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
    this.valorSalida = this.tPesoService.transformarMedida(this.valorEntrada, this.unidadEntrada, this.unidadSalida);
    console.log(`Resultado de la conversión: ${this.valorSalida}`);
  }
}
