import { Component } from '@angular/core';
import { Room, RoomList } from "./rooms"

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "Marriott Hotel";
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15,
  }

  roomList: RoomList[] = [{
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
  }]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
