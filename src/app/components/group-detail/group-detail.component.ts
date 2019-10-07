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
  dltWords: Word[] = [];
  group: string; // current group name
  renameFrom: string; // if user rename group
  renameTo: string; // if user rename group
  editWord: Word;
  editIndex: number;
  editStyle: string;

  renameGroupFlag: boolean;
  addWordFlag: boolean;
  deleteWordFlag: boolean;

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
    this.deleteWordFlag = false;
  }

  addWordCancel(): void {
    this.addWordFlag = false;
    this.editIndex = undefined;
  }

  addWordOk(newWord: string, newMean: string): void {
    if (newWord && newMean) {
      const tmpWord: Word = { group: this.group, word: newWord, mean: newMean };
      this.newWords.push(tmpWord);
      if (this.editWord) {
        this.dltWords.push(this.editWord);
        const tmpIndex = this.words.findIndex(word => word === this.editWord);
        this.words[tmpIndex] = tmpWord;
        this.editWord = undefined;
      } else {
        this.words.push(tmpWord);
      }
      this.addWordFlag = false;
      this.editIndex = undefined;
    }
  }

  EditClick(word: Word, index: number) {
    if (this.deleteWordFlag !== true) {
      // For edit word
      this.editWord = word;
      this.editIndex = index;
      this.addWordFlag = true;
    } else {
      // For delete word
      this.dltWords.push(word);
      this.words.splice(index, 1);
      const findWord = this.newWords.find(i => i === word);
      if (findWord !== undefined) {
        this.newWords.splice(this.newWords.findIndex(i => i === findWord), 1);
        console.log(this.newWords);
      }
    }
  }

  DeleteWordClick(): void {
    this.deleteWordFlag = true;
    this.addWordFlag = false;
  }

  CancelDeleteWordClick(): void {
    this.deleteWordFlag = false;
  }

  onSave(): void {
    if (this.newWords.length !== 0 || this.renameTo || this.dltWords.length !== 0) {
      this.wordsService
        .addWordsDeltWordsRenameGroup(this.newWords, this.dltWords, this.renameFrom, this.renameTo);
    }
  }

}
