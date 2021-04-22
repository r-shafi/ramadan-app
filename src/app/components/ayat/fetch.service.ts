import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getAyat() {
    return this.http.get(
      `https://api.alquran.cloud/ayah/${Math.round(
        Math.random() * 6236
      )}/bn.bengali`
    );
  }
}
