import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Response} from './Response';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, Response{
  apiStatus: string;
  pong: string;
  data: string;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Response>('/api/status').subscribe((data: Response) => {
      this.apiStatus = data.data;
    });
    this.http.get<Response>('/api/ping').subscribe((data: Response) => {
      this.pong = data.data;
    });
  }
}
