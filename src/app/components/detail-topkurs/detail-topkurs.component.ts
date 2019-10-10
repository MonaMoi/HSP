import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-topkurs',
  templateUrl: './detail-topkurs.component.html',
  styleUrls: ['./detail-topkurs.component.scss']
})
export class DetailTopkursComponent implements OnInit {

  public courseID;
  public courseData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.courseData = [];
  }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
    
    if(this.courseData == 0){
      this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
    }
  }
}