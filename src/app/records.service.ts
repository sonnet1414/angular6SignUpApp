import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor( private http: HttpClient) {

  }
  getData() {
    return forkJoin(
      this.http.get('assets/data/personData.json')
    );
  }
}
