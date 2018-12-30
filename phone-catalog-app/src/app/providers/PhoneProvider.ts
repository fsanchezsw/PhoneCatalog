import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../models/Phone';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PhoneProvider {

    constructor(
        private httpClient: HttpClient
    ) { }

    all(): Observable<Phone[]> {
        return this.httpClient.get<Phone[]>(environment.serverUrl + '/phones');
    }
}