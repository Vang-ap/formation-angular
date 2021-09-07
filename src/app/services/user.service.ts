import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    const endpointUrl = `${environment.apiUrl}/users`;

    return this.httpClient.get<User[]>(endpointUrl);
  }

  deleteOneUser(username: string) {
    const endpointUrl = `${environment.apiUrl}/users/${username}`;

    return this.httpClient.delete(endpointUrl);
  }
}
