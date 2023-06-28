import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  addBooking() {
    // console.log(this.bookingForm.value)
    console.log(this.bookingForm.getRawValue())
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: new FormControl(''),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl(''),
      address : this.fb.group( { 
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guests: this.fb.array([]),
      guestCount: new FormControl(''),
      guestList: new FormControl(''),
    })
  };

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('')})
    )
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''))
  }
}

// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: Guest[];
// }
