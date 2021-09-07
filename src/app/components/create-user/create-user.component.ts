import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserService } from 'src/app/services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    bu: new FormControl('', [Validators.required]),
  });

  constructor(
    private createUserService: CreateUserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addNewUser() {
    const user = { ...this.createUserForm.value };
    user.bu = [user.bu];

    return this.createUserService.createNewUser(user).subscribe(() => {
      this.router.navigate(['list']);
    });
  }

}
