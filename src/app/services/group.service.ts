import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GROUPS } from './mock-groups';
import { WORDSDB } from './mock-wordsDB';
import { Word } from './word';
import { WordsService } from './words.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups: string[] = [];                            // store list of groups
  private activeGroup: string;                              // store current active group
  groupUpdated: EventEmitter<string> = new EventEmitter();  // store emitter for group changing

  constructor(private http: HttpClient) { }

  /** Get groups from Server */
  getGroups(): Observable<string[]> {
    WORDSDB.forEach(word => this.groups.push(word.group));  // read group name of each element in DB
    this.groups = [...new Set(this.groups)];                // remove duplicate group name
    return of(this.groups);                                     // return list of groups (no duplicate name)

  }

  /** Get current active group */
  getActiveGroup(): Observable<string> {
    return of(this.activeGroup);
  }

  /** Set current active group */
  setActiveGroup(group: string): void {
    this.activeGroup = group;
    this.groupUpdated.emit(this.activeGroup);  // sent current group to who subscribe
  }

}
