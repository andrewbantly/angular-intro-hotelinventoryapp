import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {
  
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnInit(): void {}
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
