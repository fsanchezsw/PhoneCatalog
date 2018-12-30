import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    {
      name: "Phones",
      icon: "call",
      path: "/phones"
    }
  ];
  
  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
  }

  onClickItem(link : any) {
    if(link.path = '/phones') this.appService.setPhone(null);
  }
}
