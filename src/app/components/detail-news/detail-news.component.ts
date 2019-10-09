import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})

export class DetailNewsComponent implements OnInit {

  public news;

  constructor(private http: HttpClient) {
    this.news = [];
  }

  ngOnInit() {
    this.http.get('https://hochschulsport-koeln.de/json/news?_format=json')
    .subscribe((data) => {
      this.news = data;
    });
  }

}
