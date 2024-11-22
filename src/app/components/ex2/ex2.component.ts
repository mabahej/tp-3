import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Ex2childComponent } from '../ex2child/ex2child.component';
@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [CommonModule, Ex2childComponent],
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.css'
})
export class Ex2Component {
  backgroundColor: string = 'lightblue'; // Couleur par défaut du parent

  // Méthode pour changer la couleur du background
  onBackgroundChange(newColor: string): void {
    this.backgroundColor = newColor;
  }
}
