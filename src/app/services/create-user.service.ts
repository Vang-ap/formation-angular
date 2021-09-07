import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from 'src/models/new-user';


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  createNewUser(newUser: NewUser) {
    const endpointUrl = `${environment.apiUrl}/users`;

    return this.httpClient.post<NewUser>(endpointUrl, newUser);
  }
}
