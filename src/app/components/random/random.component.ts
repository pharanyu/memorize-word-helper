import { Component, OnInit, EventEmitter } from '@angular/core';

import { GroupService } from '../../services/group.service';
import { ErrorService } from '../../services/error.service';
import { WordsService } from '../../services/words.service';
import { Word } from '../../services/word';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  selectedType = 'ShowWord';
  selectedGroups = [];
  startRandomFlag = false;
  startRandomSignal: EventEmitter<boolean> = new EventEmitter();
  selectedWords: Word[];
  currentWord: Word;
  major: string;
  minor: string;
  progressMax: number;
  progressCur: number;

  constructor(
    private groupService: GroupService,
    private errorService: ErrorService,
    private wordsService: WordsService) { }

  ngOnInit() {
    this.groupService.getGroups()
      .subscribe(groups => {
        groups.forEach(group => this.selectedGroups.push({ name: group, selected: false }));
      }, err => {
        this.errorService.putError(err.message);
      });

    this.startRandomSignal.subscribe((flag: boolean) => {
      if (flag === true) {
        this.progressMax = this.selectedWords.length;
        this.randomPopWord();
      }
      this.startRandomFlag = flag;
    });
  }

  onStartRandom() {
    // Check if not select any group
    const checkSelectedGroup = this.selectedGroups.filter(i => i.selected === true);
    if (checkSelectedGroup.length !== 0) {
      this.wordsService.getWordsFromListGroup(checkSelectedGroup.map(({ name }) => name))
        .subscribe(respWords => {
          this.selectedWords = respWords;
          this.startRandomSignal.emit(true);
        });
    } else {
      alert('Please select any group');
    }
  }

  randomPopWord(): void {
    if (this.selectedWords.length !== 0) {
      this.currentWord = this.selectedWords.splice(Math.floor(Math.random() * this.selectedWords.length), 1).pop();
      this.progressCur = this.progressMax - this.selectedWords.length;
      if (this.selectedType === 'ShowWord') {
        this.major = this.currentWord.word;
        this.minor = this.currentWord.mean;
      } else if (this.selectedType === 'ShowMean') {
        this.major = this.currentWord.mean;
        this.minor = this.currentWord.word;
      }
    } else {
      this.endRandom();
    }
  }

  endRandom(): void {
    this.major = undefined;
    this.minor = undefined;
    this.selectedWords = undefined;
    this.currentWord = undefined;
    this.progressMax = undefined;
    this.progressCur = undefined;
    this.startRandomSignal.emit(false);
  }

  calPercent(): number {
    return Math.floor((this.progressCur / this.progressMax) * 100);
  }

}
