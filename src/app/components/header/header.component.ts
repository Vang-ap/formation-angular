import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsLogged = false;

  constructor(
    private dialog: MatDialog,
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.userIsLogged = this.loginService.isUserLogged();
  }

  openDialog() {
    this.dialog.open(RegisterComponent);
  }

  openModalLogin() {
    this.dialog.open(LoginComponent);
  }

  logout() {
    this.loginService.logout();
  }
}
