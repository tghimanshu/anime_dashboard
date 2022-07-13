import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi',
})
export class MultiPipe implements PipeTransform {
  transform(value: number | null | undefined): number {
    if (!value) {
      value = 0;
      return value;
    } else {
      return (value as number) * 1000;
    }
  }
}
