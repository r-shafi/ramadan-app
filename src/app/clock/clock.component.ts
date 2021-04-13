import { Component, OnInit } from '@angular/core';
import date from 'date-and-time';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.updater();
  }

  now;

  updater = () => {
    setInterval(() => {
      this.now = date.format(new Date(), 'hh:mm:ss A');
    }, 1000);
  };
}
