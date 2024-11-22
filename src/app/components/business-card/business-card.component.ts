import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule],  // Import any necessary modules here
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  businessCard = {
    name: '',
    title: '',
    phone: '',
    email: '',
    quote: '',
    motto: '',
    followers: 0,
    following: 0,
    projects: 0,
    jobDescription: ''
  };
}
