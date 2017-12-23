import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Platform, Page } from 'ionic-framework/ionic';

@Component({
  selector: 'page-aPropos',
  templateUrl: 'aPropos.html'
})
export class AProposPage {

  constructor(public navCtrl: NavController) {
    console.log("Page apropos");
  }
}