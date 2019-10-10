import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})

export class DetailNewsComponent implements OnInit {

  public newsID;
  public newsEntryData;
  public newsData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {

    this.newsID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/news?_format=json')
    .subscribe((data) => {
      this.newsData = data;

      for(const newsentry of this.newsData){
        if(newsentry.nid == this.newsID){
          this.newsEntryData = newsentry;
        }  
      }
    });
  }
}