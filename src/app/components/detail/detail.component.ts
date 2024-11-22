import { Component , Input} from '@angular/core';
import { Cv } from '../cv/cv.model';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  @Input() cv!: Cv | null;
}
