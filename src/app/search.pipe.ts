import { Pipe, PipeTransform } from '@angular/core';
import { Music } from './music';


@Pipe({
 name: 'searchPipe'

})

export class SearchPipe implements PipeTransform {

 transform(items: Music[], searchText: string): any[] {
  if(!items) return [];
  if(!searchText) return items;

searchText = searchText.toLowerCase();

return items.filter( (it) => {
  let all:string = it.titre + it.interprete;
   return all.toLowerCase().includes(searchText);
  });
  }
}