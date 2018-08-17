import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await-callbacks',
  templateUrl: './async-await-callbacks.component.html'
})
export class AsyncAwaitCallbacksComponent implements OnInit {
  title = 'Async Await Callbacks';

  ngOnInit(): void {
    this.changeTitle();
  }

  async changeTitle() {
    try {
      this.title += await this.fetchOrderAmountFromDatabase();
    } catch (error) {
      console.error(error);
      this.title = ' ' + await this.fetchTitleFromPrivateApi();
      this.title += ' ' + await this.fetchCreatedAtFromPublicApi();
    }
  }

  async fetchOrderAmountFromDatabase() {
    // Fake database call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return reject('failed to fetch from database');
      }, 2000);
      setTimeout(() => {
        resolve(100.00);
      }, 3000);
    });
  }

  async fetchTitleFromPrivateApi() {
    // Fake API call
    return new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('private api has resolved');
        resolve('title from private api');
      }, 2000);
    });
  }

  async fetchCreatedAtFromPublicApi() {
    // Fake API call
    return new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('public api has resolved');
        resolve('2018/01/02');
      }, 2000);
    });
  }
}
