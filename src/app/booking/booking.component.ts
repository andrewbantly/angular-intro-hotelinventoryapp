import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { visitAll } from '@angular/compiler';

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
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset()

  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }, { validators: [Validators.required] }),
      guestEmail: new FormControl('', [Validators.required, Validators.email]),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address : this.fb.group( { 
        addressLine1: new FormControl('', { validators: [Validators.required] }),
        addressLine2: new FormControl(''),
        city: new FormControl('', { validators: [Validators.required] }),
        state: new FormControl('', { validators: [Validators.required] }),
        country: new FormControl('', { validators: [Validators.required] }),
        zipCode: new FormControl('', { validators: [Validators.required] }),
      }),
      guests: this.fb.array([]),
      guestCount: new FormControl(''),
      guestList: new FormControl(''),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
    })
  };

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: ['', { validators: [Validators.required] }], age: new FormControl('', { validators: [Validators.required] })})
    )
  }

  removeGuest(index:number) {
    console.log("remove guest", index+2)
    this.guests.removeAt(index)
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
