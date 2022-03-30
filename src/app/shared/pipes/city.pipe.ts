import { Pipe, PipeTransform } from '@angular/core';
import { delay, map, Observable, of, startWith } from 'rxjs';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string | undefined): Observable<string> {
    return of('flight').pipe(
      delay(3_000),
      startWith('empty'),
      map(
        additionalStr => `${ value } ${ additionalStr } ✈`
      )
    );
  }
}
