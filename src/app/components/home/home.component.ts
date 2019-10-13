import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public news;
  public topcourses;
  public getEnrolled;


  constructor(private http: HttpClient) {
    this.news = [];
    this.topcourses = [];
    this.getEnrolled = [];

  }

  ngOnInit() {

    this.getEnrolled = JSON.parse(localStorage.getItem('storeObj'));

    this.http.get('https://hochschulsport-koeln.de/json/news?_format=json')
      .subscribe((data) => {
        this.news = data;
      });

    this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json')
      .subscribe((data) => {
        this.topcourses = data;
      });

  }

}