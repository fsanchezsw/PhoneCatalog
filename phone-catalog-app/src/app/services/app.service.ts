import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private state = {
    phones: [],
    selectedPhone: null
  };

  constructor() { }

  getPhones = () => {
    return this.state.phones;
  }

  getPhone = () => {
    return this.state.selectedPhone;
  }

  setPhones = (phones) => {
    this.state.phones = phones;
  }

  setPhone = (phone) => {
    this.state.selectedPhone = phone;
  };
}
