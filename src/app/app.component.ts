import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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

  
  constructor(
    @Inject(LocalStorageToken) private localStorage: any, 
    private initService: InitService,
    private ConfigService: ConfigService,
    private router: Router
    ) {
      console.log(initService.config)
    }
    
    ngOnInit(): void {
      // this.router.events.subscribe((event) => {
      //   console.log(event)
      // })
      this.router.events.pipe(
        filter((event) => event instanceof NavigationStart)
      ).subscribe((event) => {
        console.log('Navigation started')
      })
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ).subscribe((event) => {
        console.log('Navigation Completed')
      })



      this.name.nativeElement.innerText = "Hilton Hotel";
      this.localStorage.setItem('name', 'Hilton Hotel');
    }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
