import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount',
})
export class FormatAmountPipe implements PipeTransform {
  transform(value: string | number, divider = 100): number {
    return Number(value) / divider;
  }
}
