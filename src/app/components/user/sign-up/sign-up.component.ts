import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
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
