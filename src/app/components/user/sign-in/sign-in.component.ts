import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  serverErrorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  model = {
    userName: '',
    password: ''
  };

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/random');
    }
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/random');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    );
  }
}
