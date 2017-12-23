import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-sePlaindre',
  templateUrl: 'sePlaindre.html'
})
export class SePlaindrePage {
  public plainte: any;
  //public uploadfile: any;
  //public fileName: any = 'Ajouter un fichier';

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    public alertCtrl: AlertController) {

    this.plainte = navParams.get('plainte');
  }

  clear() {
    this.plainte = "";
  }

  sendPlainte() {
    console.log(this.plainte);
    //Confirmation d'envoie de la plainte
    let alert = this.alertCtrl.create({
      title: 'Succès',
      subTitle: 'Votre plainte a été envoyée avec succès. Nous esperons y donner une suite favorable. Merci',
      buttons: ['OK']
    });
    alert.present();
  }
  choseFile() {
    /*this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));*/

  }
}
