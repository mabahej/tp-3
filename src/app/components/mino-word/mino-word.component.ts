import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RainbowTextDirective } from './rainbow-text.directive'; // Import the directive
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mino-word',
  standalone: true,
  imports: [CommonModule,FormsModule, RainbowTextDirective], // Include RainbowTextDirective in imports
  templateUrl: './mino-word.component.html',
  styleUrls: ['./mino-word.component.css']
})
export class MinoWordComponent {
  typedText: string = '';  // Property for the typed text
  textColor: string = '';
  fontSize: number = 16;
  fontFamily: string = 'Arial';
  fonts: string[] = ['Arial', 'Verdana', 'Courier', 'Times New Roman'];
  paragraphStyles = {};

  // Method to update the paragraph style
  updateStyle() {
    this.paragraphStyles = {
      color: this.textColor || 'black',  // Default to black if no color is provided
      fontSize: `${this.fontSize}px`,
      fontFamily: this.fontFamily
    };
  }
}