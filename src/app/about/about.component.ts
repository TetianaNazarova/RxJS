import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  from,
  BehaviorSubject, AsyncSubject, ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {fromPromise} from "rxjs/internal-compatibility";


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {

/*      const subject = new ReplaySubject();
      // const subject = new AsyncSubject();
      // const subject = new BehaviorSubject(0);
      // const subject = new Subject();

      const series$ = subject.asObservable();

      series$.subscribe(value => console.log('early subscription: ', value))

      subject.next(1);
      subject.next(2);
      subject.next(3);
      // subject.complete();

      setTimeout(() => {
        series$.subscribe(value => console.log('second subscription: ', value))
        subject.next(4);
      }, 3000);*/

    }


}














/*fromPromise();
from(document, 'keyup')*/
