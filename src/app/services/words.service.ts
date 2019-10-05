import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from 'events';
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
  group: string;      // store current group

  constructor(
    private groupService: GroupService,
    private http: HttpClient,
    private urlService: UrlService) { }

  /** Quary list words of current group from DataBase */
  getWordsFromActiveGroup(): Observable<Word[]> {
    // get current group from Service
    this.group = this.groupService.getActiveGroup();

    console.log('reqGroup = ' + this.group); // debug
    if (this.group) { // check group not empty
      this.words = []; // clear current list words
      return this.http.get<Word[]>(this.urlService.reqWordsOfGroupUrl(this.group));
    }
  }

  /** Get list words from req group */
  getWords(reqGroup: string): Observable<Word[]> {
    if (reqGroup) { // Check req group is not empty
      this.words = [];  // clear current list words
      return this.http.get<Word[]>(this.urlService.reqWordsOfGroupUrl(reqGroup));
    }
  }

}
