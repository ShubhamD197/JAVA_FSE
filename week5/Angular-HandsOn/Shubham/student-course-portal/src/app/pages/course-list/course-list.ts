import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})

export class CourseList implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  private cdr = inject(ChangeDetectorRef);

  isLoading = true;

  ngOnInit(): void {
    console.log('ngOnInit called');

    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }


  selectedCourseId?: number;

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;
  }
}
