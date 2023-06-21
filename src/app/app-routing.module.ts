import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  // to configure a route, you need two things: a path and component
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  }
];

@NgModule({
  // only configure forRoot once
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
