import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <ul>
    <li><a routerLink="/">Promises</a></li>
    <li><a routerLink="/promises-callbacks">Promises Callbacks</a></li>
    <li><a routerLink="/async-await">Async/Await</a></li>
    <li><a routerLink="/async-await-callbacks">Async/Await Callbacks</a></li>
  </ul>
  `
})
export class NavigationComponent { }
