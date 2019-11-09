import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.password === form.value.confirmPassword) {
      const createUser: User = {
        userName: form.value.userName,
        password: form.value.password
      };
      this.userService.postUser(createUser).subscribe(
        res => {
          this.showSuccessMessage = true;
          setTimeout(() => this.showSuccessMessage = false, 4000);
          this.resetForm(form);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessage = err.error.join('<br>');
          } else {
            this.serverErrorMessage = 'Sorry, Can\'t sign up cause something went wrong.';
          }
        }
      );
    } else {
      this.serverErrorMessage = 'Please confirm your password again';
    }
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      userName: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}
