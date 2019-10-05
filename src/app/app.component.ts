import { Component, OnInit } from '@angular/core';

import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  errMessage = '';

  constructor(private errService: ErrorService) { }

  ngOnInit(): void {
    this.errService.reportError
      .subscribe((err: string) => this.errMessage = err);
  }

}
