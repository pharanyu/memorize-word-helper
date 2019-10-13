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

  selectedType = 'ShowWord';
  selectedGroups = [];
  startRandomFlag = false;

  constructor(
    private groupService: GroupService,
    private errorService: ErrorService,
    private wordsService: WordsService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(
      groups => {
        groups.forEach(group => this.selectedGroups.push({ name: group, selected: false }))
      },
      err => {
        this.errorService.putError(err.message);
      });
  }

  onStartRandom() {
    // Check if not select any group
    const checkSelectedGroup = this.selectedGroups.filter(i => i.selected === true);
    if (checkSelectedGroup.length !== 0) {
      console.log(checkSelectedGroup);
      this.startRandomFlag = true;
    } else {
      alert('Please select any group');
    }
  }
}
