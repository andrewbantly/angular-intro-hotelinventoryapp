import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsComponent } from './rooms/rooms.component';
// import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
// import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  // to configure a route, you need two things: a path and component
  { path: 'employee', component: EmployeeComponent, 
  // canMatch: [loginGuard]
},
  // { path: 'rooms', component: RoomsComponent },
  // { path: 'rooms-add', component: RoomsAddComponent},
  // { path: 'rooms/:roomId', component: RoomsBookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m=>m.RoomsModule),  
  // canMatch: [loginGuard] 
},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), 
  //  canMatch: [loginGuard] 
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  // only configure forRoot once
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
