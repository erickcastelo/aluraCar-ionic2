import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { EscolhaPage } from '../pages/escolha/escolha';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		EscolhaPage
	],
	imports: [
		HttpModule,
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		EscolhaPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
