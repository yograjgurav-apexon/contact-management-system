import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'rxjs';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string): any {
    // return null;
    if (value.length === 0 || filteredString === null) {
      return value;
    } else {
      const users: string[] | null = [];
      for (const user of value) {
        if (
          user.username.toLowerCase().includes(filteredString.toLowerCase())
        ) {
          users.push(user);
        }
      }
      if (users.length === 0) {
        return value;
      } else {
        return users;
      }
    }
  }
}
