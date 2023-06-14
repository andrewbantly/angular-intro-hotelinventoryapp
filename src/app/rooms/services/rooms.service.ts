import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Basic Room',
      amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
      price: 400,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('11-June-2023'),
      checkoutTime: new Date('21-June-2023'),
      rating: 4.5,
    }, {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
      price: 1000,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('11-June-2023'),
      checkoutTime: new Date('21-June-2023'),
      rating: 4.28,
    },{
      roomNumber: 3,
      roomType: 'Deluxe Suite',
      amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
      price: 1200,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('11-June-2023'),
      checkoutTime: new Date('21-June-2023'),
      rating: 3.13,
    }
  ];


  constructor() { 

    console.log("room service initialized...")
  }

  getRooms() {
    return this.roomList;
  }
}
