import { Component } from '@angular/core';
import { CourseCard } from "../../components/course-card/course-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard,CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})

export class CourseList {
  
  courses = [
  {
    id: 1,
    name: 'Angular',
    code: 'ANG101',
    credits: 4
  },
  {
    id: 2,
    name: 'Java',
    code: 'JAVA201',
    credits: 3
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'SPR301',
    credits: 4
  },
  {
    id: 4,
    name: 'Database Systems',
    code: 'DB401',
    credits: 3
  },
  {
    id: 5,
    name: 'Cloud Computing',
    code: 'CC501',
    credits: 4
  }
  ];

selectedCourseId?: number;

onEnroll(courseId: number) {
  console.log('Enrolling in course:', courseId);

  this.selectedCourseId = courseId;
}
}
