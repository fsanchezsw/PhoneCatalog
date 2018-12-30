import { Component, OnInit } from '@angular/core';
import { PhoneProvider } from 'src/app/providers/PhoneProvider';
import { Phone } from 'src/app/models/Phone';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones : Phone[] = [];

  columnsToDisplay = ['model', 'price', 'color', 'description'];

  constructor(
    private appService : AppService,
    private phoneProvider : PhoneProvider
  ) { }

  ngOnInit() {
    this.phoneProvider.all().subscribe(phones => {
      this.phones = phones;
      this.appService.setPhones(phones);
    });

    this.appService.setPhone(null);
  }

  onClickPhone(phone: Phone) {
    this.appService.setPhone(phone);
  }
}
