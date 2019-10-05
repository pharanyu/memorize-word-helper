import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WORDSDB } from './mock-wordsDB';
import { Word } from './word';
import { GroupService } from './group.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: Word[] = []; // store list words of current group
  group: string; // store current group
  public saveCompleteSignal: EventEmitter<string> = new EventEmitter(); // Foremit when save complete

  constructor(
    private groupService: GroupService,
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  /** Quary list words of current group from DataBase */
  getWordsFromActiveGroup(): Observable<Word[]> {
    // get current group from Service
    this.group = this.groupService.getActiveGroup();

    console.log('reqGroup = ' + this.group); // debug
    if (this.group) {
      // check group not empty
      this.words = []; // clear current list words
      return this.http.get<Word[]>(
        this.urlService.reqWordsOfGroupUrl(this.group)
      );
    }
  }

  /** Get list words from req group */
  getWords(reqGroup: string): Observable<Word[]> {
    if (reqGroup) {
      // Check req group is not empty
      this.words = []; // clear current list words
      return this.http.get<Word[]>(
        this.urlService.reqWordsOfGroupUrl(reqGroup)
      );
    }
  }

  /** Add new word */
  addWord(newWords: Word[]): Observable<string> {
    return this.http.post<string>(this.urlService.reqGroupUrl(), newWords);
  }

  /** Rename group */
  renameGroup(oldName: string, newName: string): Observable<string> {
    if (oldName && newName) {
      return this.http.put<string>(
        this.urlService.reqRenameGroupUrl(oldName, newName),
        {}
      );
    }
  }

  /** Add list of words & Rename group */
  addWordsAndRenameGroup(
    addWords: Word[],
    oldName: string,
    newName: string
  ): void {
    if (addWords !== undefined) {
      this.addWord(addWords).subscribe(_1 => {
        console.log(_1);
        if (oldName && newName) {
          this.renameGroup(oldName, newName).subscribe(_2 => {
            console.log(_2);
            this.saveCompleteSignal.emit('Save Complete');
          });
        } else {
          this.saveCompleteSignal.emit('Save Complete');
        }
      });
    }
  }

}
