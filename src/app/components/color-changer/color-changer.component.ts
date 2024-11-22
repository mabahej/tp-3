import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-changer',
  standalone: true, // Make it standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  defaultColor: string = 'yellow'; // Default color
  divColor: string = this.defaultColor;

  // Update the Div color
  updateColor(newColor: string): void {
    this.divColor = newColor;
  }

  // Reset to the default color
  resetColor(): void {
    this.divColor = this.defaultColor;
  }
}
