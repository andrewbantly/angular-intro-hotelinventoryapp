import { Component } from '@angular/core';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

}

export class Booking {
  roomId: string;
  guestEmail: string;
  checkinDate: Date;
  checkoutDate: Date;
  bookingStatus: string;
  bookingAmount: number;
  bookingDate: Date;
  mobileNumber: string;
  guestName: string;
  guestAddress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestZipCode: string;
  guestCount: number;
  guestList: Guest[];
}
