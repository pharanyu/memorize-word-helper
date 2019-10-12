import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group.service';
import { ErrorService } from '../../services/error.service';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  groups: string[];

  constructor(
    private groupService: GroupService,
    private errorService: ErrorService,
    private wordsService: WordsService) { }

  ngOnInit() {
    this.groups = [];
    this.groupService.getGroups().subscribe(
      groups => {
        this.groups = groups;
      },
      err => {
        this.errorService.putError(err.message);
      });
  }

}
