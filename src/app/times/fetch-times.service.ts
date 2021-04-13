import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchTimesService {
  API =
    'http://api.aladhan.com/v1/hijriCalendarByCity?city=Sylhet&country=Bangladesh';

  constructor(private http: HttpClient) {}

  getTimes() {
    return this.http.get(this.API);
  }
}
