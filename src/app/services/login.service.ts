import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token!: string | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
    }
  }

  isUserLogged() {
    return !!this.token;
  }

  loginOfUser(userInfoLogin: Login) {
    const endpointUrl = `${environment.apiUrl}/login`;

    return this.httpClient
      .post(endpointUrl, userInfoLogin).pipe(
        map(response => {
          this.token = 'fakeToken';
          localStorage.setItem('token', 'fakeToken');
          this.router.navigate(['list']);

          return response;
        }))
      ;
  }

  logout() {
    this.token = undefined;
    localStorage.removeItem('token');
  }
}
