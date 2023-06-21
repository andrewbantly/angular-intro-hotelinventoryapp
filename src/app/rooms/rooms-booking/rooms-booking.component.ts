import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  // id: number = 0;

  id$ = this.router.params.pipe(map((params) => params['roomId']));

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomId']
    // this.router.params.subscribe((params) => {
    //   console.log(params)
    //   this.id = params['roomId']
    // })
  }
}
