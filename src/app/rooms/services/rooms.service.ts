import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
// import { environment } from 'src/environments/environment'; 
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
    // {
    //   roomNumber: 1,
    //   roomType: 'Basic Room',
    //   amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
    //   price: 400,
    //   photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
    //   checkinTime: new Date('11-June-2023'),
    //   checkoutTime: new Date('21-June-2023'),
    //   rating: 4.5,
    // }, {
    //   roomNumber: 2,
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
    //   price: 1000,
    //   photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
    //   checkinTime: new Date('11-June-2023'),
    //   checkoutTime: new Date('21-June-2023'),
    //   rating: 4.28,
    // },{
    //   roomNumber: 3,
    //   roomType: 'Deluxe Suite',
    //   amenities: 'Air Conditioning, Wi-fi, TV, Bath Tub, Kitchenette',
    //   price: 1200,
    //   photos: "https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg",
    //   checkinTime: new Date('11-June-2023'),
    //   checkoutTime: new Date('21-June-2023'),
    //   rating: 3.13,
    // }
  
  ];
  // headers = new HttpHeaders({'token': '192ks93k399sk381j48'});
  // ShareReplay RxJs Operator to cache the API data and avoid making multiple calls
  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    // headers: this.headers,
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {  
    // console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint)
    console.log("room service initialized...");
  }

  // GET
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  // POST
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  // UPDATE
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  // DELETE
  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });

    return this.http.request(request);
  }
}
