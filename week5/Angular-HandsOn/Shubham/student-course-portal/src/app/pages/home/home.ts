import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit, OnDestroy{
  portalName = 'Student Course Portal';

  // [property] performs one-way binding from the component to the view,
  isPortalActive = true;

  message = '';

  onEnrollClick(){
    this.message = "Enrollment opened";
  }

  // while [(ngModel)] provides two-way binding between the component and the view.
  searchTerm = "";

  availableCourses = 0;

  ngOnInit(): void {
    this.availableCourses = 12;

    console.log(`Home component initialised: Total courses loaded ` + this.availableCourses);
  }

  ngOnDestroy(): void {
  console.log('HomeComponent destroyed');
}
}



