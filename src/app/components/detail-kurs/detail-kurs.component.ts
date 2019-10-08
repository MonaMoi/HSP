import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})
export class DetailKursComponent implements OnInit {

  public courseID;
  public courseData;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }

}
