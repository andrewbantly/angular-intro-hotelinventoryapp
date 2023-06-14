import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Room, RoomList } from "./rooms"
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = "Marriott Hotel";
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15,
  }

  title = 'Room List'

  roomList: RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); 

  constructor(private roomsService: RoomsService) {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms Available";
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms()
    
  }

  ngDoCheck(): void {
    console.log('on changes is called')
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.first.title = "First Title";
    this.headerChildrenComponent.last.title = "Last Title";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Modern Room",
      amenities: "Massage chair",
      price: 1500,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('12-Jun-2023'),
      checkoutTime: new Date('21-Jun-2023'),
      rating: 4.9
    }

    this.roomList = [...this.roomList, room];
  }


}
