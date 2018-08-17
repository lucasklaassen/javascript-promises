import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { PromisesComponent } from './promises/promises.component';
import { PromisesCallbacksComponent } from './promises-callbacks/promises-callbacks.component';
import { AsyncAwaitCallbacksComponent } from './async-await-callbacks/async-await-callbacks.component';

const routes: Routes = [
  {
    path: '',
    component: PromisesComponent
  },
  {
    path: 'promises-callbacks',
    component: PromisesCallbacksComponent
  },
  {
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  {
    path: 'async-await-callbacks',
    component: AsyncAwaitCallbacksComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
