import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
<<<<<<< HEAD
import { ApiProvider } from '../providers/api/api';
=======
>>>>>>> fbff22dade2f1c505e8834bb9d941627308a7949

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> fbff22dade2f1c505e8834bb9d941627308a7949
  ]
})
export class AppModule {}
