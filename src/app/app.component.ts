import { Component, OnInit } from '@angular/core';
import { BarclaysDate, Months } from './dateClass/barclays-date';
import { curry } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // JSON.stringify = x => 'CADORNA';
    const date: BarclaysDate = BarclaysDate.getNewInstance(1978, Months.NOVEMBER, 9);

    const toJSON: any = {date: date};

    const stringToServer = JSON.stringify(toJSON);
    console.group('custom parse');
    console.log(stringToServer);
    console.log(JSON.parse(stringToServer, (key, value) => {
      if (typeof value === 'string') {
        console.warn(value);
      }
      return value;
    }));
    console.groupEnd();
  }

}
