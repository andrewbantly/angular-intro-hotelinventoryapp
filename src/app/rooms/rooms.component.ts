import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { Room, RoomList } from "./rooms"
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = "Marriott Hotel";
  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15,
  }

  title = 'Room List'

  roomList: RoomList[] = [];

  
  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); 

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms Available";
  }

    totalBytes: number = 0;

  ngOnInit(): void {
    // console.log(this.headerComponent);
    // this.roomList = this.roomsService.getRooms()
    // console.log(this.roomsService.getRooms())
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    })
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body)
        }
      }

    })
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
      // roomNumber: '4',
      roomType: "Modern Room",
      amenities: "Massage chair",
      price: 1500,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('12-Jun-2023'),
      checkoutTime: new Date('21-Jun-2023'),
      rating: 4.9
    }

    this.roomList = [...this.roomList, room];

    // POST CALL
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3 ',
      roomType: "Modern Room",
      amenities: "Massage chair",
      price: 1500,
      photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
      checkinTime: new Date('12-Jun-2023'),
      checkoutTime: new Date('21-Jun-2023'),
      rating: 4.9
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data; 
    })
  }

}
