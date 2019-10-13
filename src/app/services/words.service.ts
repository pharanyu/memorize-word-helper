import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
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
    } else {
      return of([]);
    }
  }

  /** Get list words from req list group */
  getWordsFromListGroup(reqListGroup: string[]): Observable<Word[]> {
    if (reqListGroup) {
      return this.http.post<Word[]>(this.urlService.reqWordsOfListGroupUrl(), reqListGroup);
    } else {
      return of([]);
    }
  }

  /** Add new words */
  addWord(newWords: Word[]): Observable<string> {
    if (newWords) {
      return this.http.post<string>(this.urlService.reqGroupUrl(), newWords);
    } else {
      return of('');
    }
  }

  /** Delete words */
  deleteWord(dltWords: Word[]): Observable<string> {
    if (dltWords) {
      return this.http.post<string>(this.urlService.reqDeleteWordsUrl(), dltWords);
    } else {
      return of('');
    }
  }

  /** Rename group */
  renameGroup(oldName: string, newName: string): Observable<string> {
    if (oldName && newName) {
      return this.http.put<string>(
        this.urlService.reqRenameGroupUrl(oldName, newName),
        {}
      );
    } else {
      return of('');
    }
  }

  /** Add list of words & Rename group */
  addWordsDeltWordsRenameGroup(
    addWords: Word[],
    dltWords: Word[],
    oldName: string,
    newName: string
  ): void {
    forkJoin([this.addWord(addWords), this.deleteWord(dltWords), this.renameGroup(oldName, newName)])
      .subscribe(respList => {
        console.log(respList[0]);
        console.log(respList[1]);
        console.log(respList[2]);
        this.saveCompleteSignal.emit('Save complete');
      });
  }

}
