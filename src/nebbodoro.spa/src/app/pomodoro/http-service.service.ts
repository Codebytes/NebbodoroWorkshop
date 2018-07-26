import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPomodoro } from '../models/Pomodoro';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpServiceService {
  constructor(private http: HttpClient) {
  }

  getPomodoros(email): Observable<IPomodoro[]> {
    var apiUrl = environment.apiUrl;
    return this.http.get<IPomodoro[]>(apiUrl + 'pomodoro?email=' + email);
  }

  postPomodoroDone(email): Observable<any> {
    var apiUrl = environment.apiUrl;
    var onPomorodoroDone = {
      email: email
    };
    return this.http.post(`${apiUrl}pomodoro/${email}/done`, '{}');
  }
}
