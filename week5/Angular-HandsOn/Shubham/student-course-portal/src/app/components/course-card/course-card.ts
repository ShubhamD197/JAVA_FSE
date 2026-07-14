import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
=======

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
>>>>>>> Stashed changes
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})

export class CourseCard implements OnChanges {

  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
    fee: number;
    startDate: Date;
    completion: number;
  };

  @Input()
  isEnrolled: boolean = false;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

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

}
