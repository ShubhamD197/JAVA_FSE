import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      courseId: [
        null,
        Validators.required
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ]

    });

  }

  /*
    enrollForm.value

    Returns only enabled form controls.

    If any control is disabled,
    it will NOT appear in the object.


    enrollForm.getRawValue()

    Returns all form controls,
    including disabled controls.
*/
  onSubmit() {

    console.log("Form Value");
    console.log(this.enrollForm.value);

    console.log("Raw Form Value");
    console.log(this.enrollForm.getRawValue());

  }
}
