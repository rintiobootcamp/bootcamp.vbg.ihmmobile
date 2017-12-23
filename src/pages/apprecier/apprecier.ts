import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Platform, Page } from 'ionic-framework/ionic';

@Component({
  selector: 'page-apprecier',
  templateUrl: 'apprecier.html'
})
export class ApprecierPage {

  note: number;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.note = navParams.get('note');
  }
  noter() {
    //this.navCtrl.push();
    console.log(this.note);
  }
}
