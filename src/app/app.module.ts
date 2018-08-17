import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { PromisesComponent } from './promises/promises.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PromisesCallbacksComponent } from './promises-callbacks/promises-callbacks.component';
import { AsyncAwaitCallbacksComponent } from './async-await-callbacks/async-await-callbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AsyncAwaitComponent,
    AsyncAwaitCallbacksComponent,
    PromisesComponent,
    PromisesCallbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
