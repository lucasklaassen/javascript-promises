import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breaking-bad',
  templateUrl: './breaking-bad.component.html'
})
export class BreakingBadComponent implements OnInit {
  quote = 'Loading...';
  author = 'Loading...';
  url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  // Example of how to create an API call using httpClient
  // this.httpClient.get<any>(this.url).toPromise().then(data => {
  //   console.log(data);
  // });

}
