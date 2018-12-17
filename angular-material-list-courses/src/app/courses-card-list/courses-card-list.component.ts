import { Component, OnInit, Input } from "@angular/core";
import { Course } from "../model/course";
import {COURSES} from "../model/db-data";

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
    beginnerCourses: Course[];
    advancedCourses: Course[];

  constructor() { }

  ngOnInit() {
    const tCourses:any = Object.values(COURSES);
    this.beginnerCourses = tCourses.filter(course => course.category === 'BEGINNER');
    this.advancedCourses = tCourses.filter(course => course.category === 'ADVANCED');
  }
}