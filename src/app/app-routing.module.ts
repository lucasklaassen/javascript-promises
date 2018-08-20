import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { PromisesComponent } from './promises/promises.component';
import { PromiseCallbacksComponent } from './promise-callbacks/promise-callbacks.component';
import { AsyncAwaitCallbacksComponent } from './async-await-callbacks/async-await-callbacks.component';
import { BreakingBadComponent } from './breaking-bad/breaking-bad.component';

const routes: Routes = [
  {
    path: '',
    component: PromisesComponent
  },
  {
    path: 'breaking-bad',
    component: BreakingBadComponent
  },
  {
    path: 'promise-callbacks',
    component: PromiseCallbacksComponent
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
