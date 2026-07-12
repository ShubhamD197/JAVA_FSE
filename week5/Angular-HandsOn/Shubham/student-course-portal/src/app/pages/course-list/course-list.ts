import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})

export class CourseList implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  isLoading = true;

  ngOnInit(): void {
    console.log('ngOnInit called');

    setTimeout(() => {
      console.log('Timeout finished');
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB401',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC501',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  selectedCourseId?: number;

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;
  }
}
