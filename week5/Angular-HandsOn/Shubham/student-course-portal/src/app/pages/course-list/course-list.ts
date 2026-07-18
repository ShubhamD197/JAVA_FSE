import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})

export class CourseList implements OnInit {

  courses: Course[] = [];

  constructor(

    private courseService: CourseService,

    private router: Router,

    private route: ActivatedRoute

  ) { }

  searchTerm = '';

  private cdr = inject(ChangeDetectorRef);

  isLoading = true;

  ngOnInit(): void {
    console.log('ngOnInit called');

    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
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

  goToCourse(courseId: number) {

    this.router.navigate(

      ['courses', courseId]

    );

  }

  searchCourses() {

    this.router.navigate(

      ['courses'],

      {

        queryParams: {

          search: this.searchTerm

        }

      }

    );

  }
}
