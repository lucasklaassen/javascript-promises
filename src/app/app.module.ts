import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { PromisesComponent } from './promises/promises.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PromiseCallbacksComponent } from './promise-callbacks/promise-callbacks.component';
import { AsyncAwaitCallbacksComponent } from './async-await-callbacks/async-await-callbacks.component';
import { BreakingBadComponent } from './breaking-bad/breaking-bad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BreakingBadComponent,
    NavigationComponent,
    AsyncAwaitComponent,
    AsyncAwaitCallbacksComponent,
    PromisesComponent,
    PromiseCallbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
