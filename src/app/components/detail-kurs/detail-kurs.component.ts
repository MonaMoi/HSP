import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { createAotUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})

export class DetailKursComponent implements OnInit {

  public courseID;
  public courseData;
  public isCollapsed : boolean = false;
  public myCourse;
  public getObject1;
  public storage;
  
  

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  
    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }  

  public enroll() {
    this.isCollapsed = !this.isCollapsed;
    for(const course of this.courseData){
      this.myCourse = [{"title":""+course.title+"","id":"" +course.nid+""}];
    }

    this.getObject1 = JSON.parse(localStorage.getItem('storeObj'));
    this.storage= this.myCourse
    if(this.getObject1 != null){
      this.storage = this.myCourse.concat(this.getObject1);
        
    }

    localStorage.setItem('storeObj', JSON.stringify(this.storage));
  }
}