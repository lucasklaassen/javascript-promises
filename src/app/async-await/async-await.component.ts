import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html'
})
export class AsyncAwaitComponent implements OnInit {
  title = 'Async/Await';

  ngOnInit() {
    this.changeTitle();
    this.failToChangeTitle();
  }

  async changeTitle() {
    this.title = <string>await this.successfulPromise();
  }

  async failToChangeTitle() {
    try {
      this.title = <string>await this.errorPromise();
    } catch (error) {
      console.error(error);
    }
  }

  async successfulPromise() {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve('promise has resolved');
      }, 5000);
    });
  }

  async errorPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject('promise has failed :(');
      }, 3000);
    });
  }
}
