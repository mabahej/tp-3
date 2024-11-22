import { Component } from '@angular/core';
import { Cv } from './cv.model';
import { ListeComponent } from '../liste/liste.component';
import { DetailComponent } from '../detail/detail.component';
@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  cvs: Cv[] = [
    {
      id: 1,
      name: 'Doe',
      firstname: 'John',
      age: 30,
      cin: '123456',
      job: 'Software Engineer',
      path: '',
    },
    {
      id: 2,
      name: 'Smith',
      firstname: 'Jane',
      age: 25,
      cin: '654321',
      job: 'Product Manager',
      path: 'assets/Bob_Happy.webp',
    },
  ];

  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
  

