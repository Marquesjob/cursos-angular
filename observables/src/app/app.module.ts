import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { PresenterComponent } from './presenter/presenter.component';
import { Presenter } from './presenter/presenter-presenter';

@NgModule({
  declarations: [
    AppComponent,
    PresenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UnsubscribeRxjsModule
  ],
  providers: [Presenter],
  bootstrap: [AppComponent],
})

export class AppModule { }
