import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})

export class CourseCard implements OnChanges {

  @Input()
  course!: Course;

  @Input()
  isEnrolled_: boolean = false;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  constructor(
    private enrollmentService: EnrollmentService
  ) { }

  // Getters keep templates clean by keeping complex logic in the component class instead of the template
  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Previous Value: " + changes['course'].previousValue);
    console.log("Current Value: " + changes['course'].currentValue.name);
  }

  toggleEnrollment() {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

  }

  isEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }
}
