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
  words: Word[] = []; // list of word from server
  newWords: Word[] = []; // list of new adding word
  group: string; // current group name
  renameFrom: string; // if user rename group
  renameTo: string; // if user rename group
  renameGroupFlag: boolean;
  addWordFlag: boolean;

  constructor(
    public wordsService: WordsService,
    public groupService: GroupService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    /** Get words in group when group is changed */
    this.groupService.groupUpdated.subscribe(update => {
      this.renameGroupFlag = false;
      this.addWordFlag = false;
      this.wordsService.getWords(update).subscribe(
        resWord => {
          this.words = resWord;
        },
        err => {
          this.errorService.putError(err.message);
        }
      );
      this.group = this.groupService.getActiveGroup();
    });

    /** Refresh when save to server complete */
    this.wordsService.saveCompleteSignal.subscribe(_ => location.reload());
  }

  renameGroup(): void {
    this.renameGroupFlag = true;
  }

  renameOK(newName: string): void {
    console.log(newName);
    if (newName) {
      this.renameFrom = this.group; // save name before change
      this.group = newName;
      this.renameTo = newName; // save for send to server if user save
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

  onSave(): void {
    if (this.newWords.length !== 0 || this.renameTo) {
      this.wordsService
        .addWordsAndRenameGroup(this.newWords, this.renameFrom, this.renameTo);
    }
  }

}
