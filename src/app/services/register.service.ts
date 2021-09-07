
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from 'src/models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendsUserInfo(userInfo: Register) {
    const endpointUrl = `${environment.apiUrl}/users/register`;

    return this.httpClient.post<Register>(endpointUrl, userInfo);
  }

  // sendsUserInfo() {
  //   console.log('inscription réussit');
  // }
}
