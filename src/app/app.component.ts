import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SePlaindrePage } from '../pages/sePlaindre/sePlaindre';
import { ApprecierPage } from '../pages/apprecier/apprecier';
import { AProposPage } from '../pages/apropos/aPropos';
import { VbgmapPage } from '../pages/vbgmap/vbgmap';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Site officiel', component: HomePage, icon: 'globe' },
      { title: 'Se plaindre', component: SePlaindrePage, icon: 'megaphone' },
      { title: 'Apprécier', component: ApprecierPage, icon: 'thumbs-up' },
      { title: 'A propos', component: AProposPage, icon: 'information-circle' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  exitApp() {
    //this.platform.exitApp();
    console.log("Application quitté");
    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
        navigator['app'].exitApp();
      });
    });
  }
}
