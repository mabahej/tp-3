import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ColorChangerComponent } from './components/color-changer/color-changer.component';
import { FormsModule } from '@angular/forms';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex2childComponent } from './components/ex2child/ex2child.component';
import { CvComponent } from './components/cv/cv.component';
import { MinoWordComponent } from './components/mino-word/mino-word.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BusinessCardComponent,MinoWordComponent ,CvComponent, ColorChangerComponent,FormsModule,Ex2Component,Ex2childComponent], // Add it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tp';
  backgroundColor = '#ffffff'; // Default background color
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  // Method to update background color
  changeBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
}
