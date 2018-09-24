import { Component, OnInit } from '@angular/core';
import { BarclaysDate, Months } from './dateClass/barclays-date';
import { __, curryN } from 'ramda';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const originalStringify = JSON.stringify;
    let curryStringify = curryN(2, JSON.stringify);
    curryStringify = curryStringify(__, (key, value) => {
      if (value instanceof BarclaysDate) {
        return 'CADORNA';
      }

      return value;
    });

    // JSON.stringify = x => {
    //   console.warn((x instanceof BarclaysDate));
    //   if (x instanceof BarclaysDate) {
    //     return '{CADORNA}';
    //   } else {
    //     return originalStringify(x);
    //   }
    // };

    const date: BarclaysDate = BarclaysDate.getNewInstance(1978, Months.NOVEMBER, 9);

    const toJSON: any = {date: date};

    const stringToServer = curryStringify(toJSON); // JSON.stringify(toJSON);
    console.log(stringToServer);
    // console.group('custom parse');
    // console.log(stringToServer);
    // console.log(JSON.parse(stringToServer, (key, value) => {
    //   if (typeof value === 'string') {
    //     console.warn(value);
    //   }
    //   return value;
    // }));

    // console.log(JSON.stringify(toJSON));

    // console.groupEnd();
  }

}
