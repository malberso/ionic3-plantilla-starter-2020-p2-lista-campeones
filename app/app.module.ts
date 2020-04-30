import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CampeonDetallePage } from '../pages/campeon-detalle/campeon-detalle';
import { CampeonesService } from './campeones.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampeonDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampeonDetallePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CampeonesService
  ]
})
export class AppModule {}