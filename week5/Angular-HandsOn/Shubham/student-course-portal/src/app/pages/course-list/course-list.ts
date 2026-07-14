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
    gradeStatus: 'passed',
    fee: 25000,
    startDate: new Date('2026-08-10'),
    completion: 0.85
  },
  {
    id: 2,
    name: 'Java',
    code: 'JAVA201',
    credits: 3,
    gradeStatus: 'failed',
    fee: 18000,
    startDate: new Date('2026-09-15'),
    completion: 0.45
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'SPR301',
    credits: 4,
    gradeStatus: 'pending',
    fee: 22000,
    startDate: new Date('2026-10-01'),
    completion: 0.60
  }
  ];

  selectedCourseId?: number;

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;
  }
}
