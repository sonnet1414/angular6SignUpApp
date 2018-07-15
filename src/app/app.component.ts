import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) {
  }
  users: any;
  fetchdata() {
    this.http.get('http://35.196.19.4' +
      '4200/notes').subscribe((res) => {
      this.users = res;
    });
  }
}
