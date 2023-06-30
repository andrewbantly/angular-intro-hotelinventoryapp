// DONT EVER CREATE A FRONT END FILTER, DO THIS ON YOUR BACK END. THIS IS JUST AN EXAMPLE


import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[], price: number): RoomList[] {
    return rooms.filter((room) => room.price > price);
  }

}
