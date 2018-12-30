import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppService } from './services/app.service';
import { Phone } from './models/Phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phone-catalog-app';

  @ViewChild('sidenav') sidenav: MatSidenav;

  mode = 'side';
  opened: boolean = true;
  
  constructor(
    private appService : AppService
  ) {}

  ngOnInit() {
    if (window.innerWidth < 800) {
      this.mode = 'over';
      this.opened = false;
    }
    if (window.innerWidth > 800) {
      this.mode = 'side';
      this.opened = true;
    }
  }

  getPhone() {
    return this.appService.getPhone();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event.target.innerWidth < 800) {
        this.mode = 'over';
        this.sidenav.close();
        this.opened = false;
      }
      if (event.target.innerWidth > 800) {
        this.mode = 'side';
        this.sidenav.open();
        this.opened = true;
      }
  }
}
