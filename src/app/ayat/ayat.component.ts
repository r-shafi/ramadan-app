import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-ayat',
  templateUrl: './ayat.component.html',
  styleUrls: ['./ayat.component.css'],
})
export class AyatComponent implements OnInit {
  fetchedData;

  constructor(private fetchedAyat: FetchService) {
    setInterval(() => {
      fetchedAyat.getAyat().subscribe((data) => {
        this.fetchedData = data;
      });
    }, 30000);
  }

  ngOnInit(): void {
    this.showAyat();
  }

  showAyat(): void {
    this.fetchedAyat.getAyat().subscribe((data) => {
      this.fetchedData = data;
    });
  }
}
