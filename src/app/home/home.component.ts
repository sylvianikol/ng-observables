import { Component, OnDestroy, OnInit } from '@angular/core';
import { count } from 'console';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(
    //   count => { console.log(count); } 
    // );

    const customIntervalObservable = Observable.create(
      observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          ++count;
        }, 1000)

    });

    this.subscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
