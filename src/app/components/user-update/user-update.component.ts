import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  updateForm!: FormGroup;


  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username');

    if (!username) {
      return;
    }

    this.userService.getOneUser(username).subscribe((data: User) => {
      this.updateForm = new FormGroup({
        firstname: new FormControl(data.firstname, [Validators.required]),
        lastname: new FormControl(data.lastname, [Validators.required]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        role: new FormControl(data.role, [Validators.required]),
        phone: new FormControl(data.phone, [Validators.required]),
        bu: new FormControl(data.bu, [Validators.required]),
      });
    })
  }

  sendUpdateUser() {
    return this.userService.updateUser(this.updateForm.value).subscribe(() => {
      this.router.navigate(['list']);
    });
  }

}
