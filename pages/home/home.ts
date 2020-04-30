import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CampeonesService } from '../../app/campeones.service';
import { CampeonDetallePage } from '../campeon-detalle/campeon-detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private campeones: any[];

  constructor(public navCtrl: NavController, public campeonesSvc: CampeonesService, private alertCtrl: AlertController) {
    this.campeones = campeonesSvc.obtenerListaCampeones();
  }

  irADetalleCampeon( campeon: any ) {
    this.navCtrl.push(CampeonDetallePage, {'campeon': campeon } );
  }

  nuevoCampeon(){
    const prompt = this.alertCtrl.create({
      title: 'Nuevo Campeón',
      message: "Introduce los datos del nuevo campeón",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'desc_corta',
          placeholder: 'Descripción corta'
        },
        {
          name: 'desc_larga',
          placeholder: 'Descripción larga'
        },
        {
          name: 'url_imagen',
          placeholder: 'Imágen del campeón'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            //console.log(data.nombre);
            this.campeonesSvc.anyadirNuevoCampeon( data.nombre, data.desc_corta, data.desc_larga, data.url_imagen );
            this.campeones = this.campeonesSvc.obtenerListaCampeones();
          }
        }
      ]
    });
    prompt.present();
  }

  eliminarCampeon (campeon: any){
    this.campeonesSvc.eliminarCampeon( campeon );
    this.campeones = this.campeonesSvc.obtenerListaCampeones();
  }
}