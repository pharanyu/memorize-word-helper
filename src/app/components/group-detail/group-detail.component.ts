import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

import { GroupService } from '../../services/group.service';
import { WordsService } from '../../services/words.service';
import { Word } from '../../services/word';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  words: Word[] = [];
  newWords: Word[] = [];
  group: string;
  renameGroupFlag: boolean;
  addWordFlag: boolean;

  constructor(
    public wordsService: WordsService,
    public groupService: GroupService,
    private errorService: ErrorService) { }

  ngOnInit() {
    /** Get words in group when group is changed */
    this.groupService.groupUpdated.subscribe(update => {
      this.renameGroupFlag = false;
      this.addWordFlag = false;
      this.wordsService.getWords(update)
        .subscribe(
          resWord => {
            this.words = resWord;
          },
          err => {
            this.errorService.putError(err.message);
          });
      this.group = this.groupService.getActiveGroup();
    });
  }

  renameGroup(): void {
    this.renameGroupFlag = true;
  }

  renameOK(newName: string): void {
    console.log(newName);
    if (newName) {
      this.group = newName;
      this.renameGroupFlag = false;
    }
  }

  renameCancel(): void {
    this.renameGroupFlag = false;
  }

  addWordClick(): void {
    this.addWordFlag = true;
  }

  addWordCancel(): void {
    this.addWordFlag = false;
  }

  addWordOk(newWord: string, newMean: string): void {
    if (newWord && newMean) {
      const tmpWord: Word = { group: this.group, word: newWord, mean: newMean };
      this.newWords.push(tmpWord);
      this.words.push(tmpWord);
      this.addWordFlag = false;
    }
  }

}
