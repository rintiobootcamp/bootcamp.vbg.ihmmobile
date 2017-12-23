import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SePlaindrePage } from '../pages/sePlaindre/sePlaindre';
import { ApprecierPage } from '../pages/apprecier/apprecier';
import { AProposPage } from '../pages/apropos/aPropos';
import { VbgmapPage } from '../pages/vbgmap/vbgmap';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SePlaindrePage,
    ApprecierPage,
    AProposPage,
    VbgmapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SePlaindrePage,
    ApprecierPage,
    AProposPage,
    VbgmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
