import { Component, OnInit } from '@angular/core';
import { FetchTimesService } from './fetch-times.service';
import date from 'date-and-time';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css'],
})
export class TimesComponent implements OnInit {
  today = date.format(new Date(), 'DD MMM YYYY');
  times: Object;

  constructor(private fetchTimes: FetchTimesService) {}

  ngOnInit(): void {
    this.retrieveTimes();
  }

  retrieveTimes() {
    this.fetchTimes.getTimes().subscribe((data) => {
      this.times = data;
      console.log(data);
    });
  }

  formatFazr(timeString) {
    const hm = timeString.split(' ')[0].split(':');
    let [hour, minute] = hm;
    if (minute < 12) {
      hour = Number(hour) - 1;
      minute = Number(minute) - 12 + 60;
      return `${hour}:${minute}`;
    }
    return `${hour}:${Number(minute) - 12}`;
  }

  formatMaghrib(timeString) {
    const hm = timeString.split(' ')[0].split(':');
    let [hour, minute] = hm;
    hour = Number(hour) - 12;
    return `${hour}:${minute}`;
  }

  formatDate(dateString) {
    const [date, month, year] = dateString.split('-');
    return `${date}, ${year} Hizri`;
  }
}
