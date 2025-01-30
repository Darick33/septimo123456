import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../service/acceso.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.page.html',
  styleUrls: ['./actualizar-contacto.page.scss'],
  standalone: false,

})
export class ActualizarContactoPage implements OnInit {
  contacto: any = [];

  cod_contacto: string = "";
  text_nombre: string = "";
  text_apellido: string = "";
  text_telefono: string = "";
  text_correo: string = "";
  constructor(
    private servicio: AccesoService,
    private navCtrl: NavController
  ) {
    this.servicio.getSession("cod_contacto").then((res: any) => {
      this.cod_contacto = res;
      this.cargarDatos();
    });
  }

  cargarDatos() {
    let datos = {
      "accion": "datosContacto",
      "cod_contacto": this.cod_contacto,
    }
    this.servicio.postData(datos).subscribe((res: any) => {
      if (res.estado) {
        this.contacto = res.data;
        this.text_nombre = this.contacto.nombre;
        this.text_apellido = this.contacto.apellido;
        this.text_telefono = this.contacto.telefono;
        this.text_correo = this.contacto.correo;
      } else {
        this.servicio.showToast(res.mensaje, 3000);
      }
    })
  }
  ngOnInit() {
  }

}
