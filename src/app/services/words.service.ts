import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from 'events';

import { WORDSDB } from './mock-wordsDB';
import { Word } from './word';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  words: Word[] = []; // store list words of current group
  group: string;      // store current group

  constructor(private groupService: GroupService) { }

  /** Quary list words of current group from DataBase */
  getWordsFromActiveGroup(): Observable<Word[]> {
    // get current group from Service
    this.groupService.getActiveGroup().subscribe(group => {
      this.group = group;
    });
    console.log('reqGroup = ' + this.group); // debug
    if (this.group) { // check group not empty
      this.words = []; // clear current list words
      WORDSDB.forEach(eachWord => {
        if (eachWord.group === this.group) {
          this.words.push(eachWord); // push word which same as current group to list
        }
      });
    }
    return of(this.words);
  }

  /** Get list words from req group */
  getWords(reqGroup: string): Observable<Word[]> {
    if (reqGroup) { // Check req group is not empty
      this.words = [];  // clear current list words
      WORDSDB.forEach(eachWord => {
        if (eachWord.group === reqGroup) {
          this.words.push(eachWord); // push word which same as req group to list
        }
      });
    }
    return of(this.words);
  }

}
