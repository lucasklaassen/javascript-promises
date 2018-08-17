import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {
  title = 'Promises';
  successfulPromise: Promise<string>;
  errorPromise: Promise<string>;

  ngOnInit(): void {
    this.changeTitle();
    this.failToChangeTitle();
  }

  changeTitle() {
    // Create promise that resolves successfully
    this.successfulPromise = new Promise((resolve, _) => {
      setTimeout(() => {
        resolve('promise has resolved');
      }, 5000);
    });
    this.successfulPromise.then((result) => {
      this.title = result;
    });
  }

  failToChangeTitle() {
    // Create promise that fails and is rejected
    this.errorPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('promise has failed :(');
      }, 3000);
    });
    this.successfulPromise.then((result) => {
      // This should never hit
      this.title = result;
    }).catch((error) => {
      console.error(error);
    });
  }
}
