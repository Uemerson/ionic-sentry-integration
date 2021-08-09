import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Sentry from 'sentry-cordova';
import { SentryIonicErrorHandler } from './services/sentry-ionic-error-handler';

Sentry.init({
  dsn: 'Your Sentry DSN',
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: SentryIonicErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
