import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ex2child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex2child.component.html',
  styleUrl: './ex2child.component.css'
})
export class Ex2childComponent {
  @Input() parentColor: string = ''; // Reçoit la couleur du parent
  @Output() changeBackgroundColor = new EventEmitter<string>(); // Émet l'événement au parent

  myFavoriteColor: string = ''; // Variable pour stocker la couleur favorite

  // Méthode pour émettre la couleur au parent
  changeParentBackground(): void {
    this.changeBackgroundColor.emit(this.myFavoriteColor);
  }

}
