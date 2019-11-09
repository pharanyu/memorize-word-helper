import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Word } from './word';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups: string[] = [];                            // store list of groups
  private activeGroup: string;                              // store current active group
  groupUpdated: EventEmitter<string> = new EventEmitter();  // store emitter for group changing

  constructor(
    private http: HttpClient,
    private urlService: UrlService) { }

  /** Get groups from Server */
  getGroups(): Observable<string[]> {
    return this.http.get<string[]>(this.urlService.reqGroupUrl());
  }

  /** Get current active group */
  getActiveGroup(): string {
    return this.activeGroup;
  }

  /** Set current active group */
  setActiveGroup(group: string): void {
    this.activeGroup = group;
    this.groupUpdated.emit(this.activeGroup);  // sent current group to who subscribe
  }

}
