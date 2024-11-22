import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'defaultImage',
  standalone: true, // Mark the pipe as standalone
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, defaultValue: string): string {
    return value && value.trim() ? value : defaultValue;
  }
}

