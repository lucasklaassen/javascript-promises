import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-callbacks',
  templateUrl: './promise-callbacks.component.html'
})
export class PromiseCallbacksComponent implements OnInit {
  title = 'Promise Callbacks';

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle() {
    this.fetchOrderAmountFromDatabase().then(firstResult => {
      this.title = firstResult.toString();
    }).catch((error) => {
      console.log(error);
      this.fetchTitleFromPrivateApi().then(secondResult => {
        this.title = secondResult;
        this.fetchCreatedAtFromPublicApi().then(lastResult => {
          this.title = this.title += ' ' + lastResult;
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  fetchOrderAmountFromDatabase(): Promise<number> {
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

  fetchTitleFromPrivateApi(): Promise<string> {
    // Fake API call
    return new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('private api has resolved');
        resolve('title from private api');
      }, 2000);
    });
  }

  fetchCreatedAtFromPublicApi(): Promise<string> {
    // Fake API call
    return new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('public api has resolved');
        resolve('2018/01/02');
      }, 2000);
    });
  }
}
