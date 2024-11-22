import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: true, // Make it standalone to use in standalone components
})
export class FullNamePipe implements PipeTransform {
  transform(firstname: string, lastname: string): string {
    return `${firstname} ${lastname.toUpperCase()}`.trim();
  }
}
