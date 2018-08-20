import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <ul>
    <li><a routerLink="/">Promises</a></li>
    <li><a routerLink="/promise-callbacks">Promise Callbacks</a></li>
    <li><a routerLink="/async-await">Async/Await</a></li>
    <li><a routerLink="/async-await-callbacks">Async/Await Callbacks</a></li>
    <li><a routerLink="/breaking-bad">Breaking Bad</a></li>
  </ul>
  `
})
export class NavigationComponent { }
