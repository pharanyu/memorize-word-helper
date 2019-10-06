import { Component, OnInit } from '@angular/core';

import { ErrorService } from './services/error.service';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  errMessage = '';

  constructor(private errService: ErrorService, private wordsService: WordsService) { }

  ngOnInit(): void {
    this.errService.reportError
      .subscribe((err: string) => this.errMessage = err);
    // this.wordsService.saveCompleteSignal
    //   .subscribe(_ => location.reload());
  }

}
