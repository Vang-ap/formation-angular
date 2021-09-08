import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateUser } from 'src/models/update-user';
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

  getOneUser(username: string): Observable<User> {
    const endpointUrl = `${environment.apiUrl}/users/${username}`;

    return this.httpClient.get<User>(endpointUrl)
  }

  updateUser(updateInfoUser: UpdateUser) {
    const endpointUrl = `${environment.apiUrl}/users`;

    return this.httpClient.put<UpdateUser>(endpointUrl, updateInfoUser)
  }

  deleteOneUser(username: string) {
    const endpointUrl = `${environment.apiUrl}/users/${username}`;

    return this.httpClient.delete(endpointUrl);
  }
}
