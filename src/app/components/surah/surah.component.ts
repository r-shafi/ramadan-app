import { Component, OnInit } from '@angular/core';
import { FetchSurahService } from './fetch-surah.service';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css'],
})
export class SurahComponent implements OnInit {
  blob;
  surahList;
  surah;

  constructor(private fetchSurah: FetchSurahService) {}

  ngOnInit(): void {
    this.fetchSurah.surahList().subscribe(
      (data) =>
        (this.surahList = data['data'].map((data) => ({
          name: data.englishName,
          number: data.number,
        })))
    );
  }

  getSurah(surahNumber) {
    this.fetchSurah.getSingleSurah(surahNumber).subscribe((data) => {
      this.surah = data['data'];
      console.log(data['data']);
    });
  }
}
