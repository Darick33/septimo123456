import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private navCtrl: NavController

  ) { }
  public irAInicio() {
    this.navCtrl.navigateRoot('/inicio');
  }
  public ListaDistancia() {
    this.navCtrl.navigateRoot('/distancia');
  }
  public ListaPeso() {
    this.navCtrl.navigateRoot('/peso');
  }
  public ListaTemperatura() {
    this.navCtrl.navigateRoot('/temperatura');
  }
}
