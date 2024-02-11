import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advantagesDescription'
})
export class AdvantagesDescriptionPipe implements PipeTransform {

  transform(value: string, limit: number = 95): string {
    if (value.length> limit) {
      return value.slice(0, limit) + " ...";
    }
    return value;

  }

}
