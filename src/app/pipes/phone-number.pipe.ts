import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/g, (match: string) => {
      return `${match.slice(0, 4)} (${match.slice(4, 6)}) ${match.slice(6, 9)}-${match.slice(9, 11)}-${match.slice(11, 13)}`;
    })
  }

}
