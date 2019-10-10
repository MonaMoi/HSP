import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-overview-kurse',
  templateUrl: './overview-kurse.component.html',
  styleUrls: ['./overview-kurse.component.scss']
})
export class OverviewKurseComponent implements OnInit {
  public courseID;
  public courseData;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.courseData = [];
  }

  ngOnInit() {
    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }

}
