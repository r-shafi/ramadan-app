import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchSurahService {
  constructor(private Http: HttpClient) {}

  surahList() {
    return this.Http.get('http://api.alquran.cloud/v1/surah');
  }

  getSingleSurah(surah) {
    return this.Http.get(
      `http://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`
    );
  }
}
