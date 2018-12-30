import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/Phone';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  phone : Phone;
  
  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
    this.phone = this.appService.getPhone();
  }

  onClickBack() {
    this.appService.setPhone(null);
  }
}
