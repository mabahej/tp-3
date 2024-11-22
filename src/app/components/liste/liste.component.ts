import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Cv } from '../cv/cv.model';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule ,FullNamePipe],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  @Input() cvs!: Cv[]; // List of CVs passed from the parent.
  @Output() cvSelected = new EventEmitter<Cv>(); // EventEmitter to notify the parent when a CV is selected.

  selectCv(cv: Cv): void {
    this.cvSelected.emit(cv); // Emit the selected CV to the parent.
  }

}
