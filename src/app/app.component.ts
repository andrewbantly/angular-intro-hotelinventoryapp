import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  //<p>Angular is awesome</p>
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryheyapp';
  role = 'Users'

  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  constructor(
      @Inject(LocalStorageToken) private localStorage: any, 
      private initService: InitService,
      private ConfigService: ConfigService) {
    console.log(initService.config)
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
