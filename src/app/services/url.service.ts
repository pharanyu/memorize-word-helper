import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlConnectServer = `${window.location.origin}/api/words`;
  // 'https://memorize-word-helper.herokuapp.com/api/words'
  // 'http://localhost:3001/api/words'

  constructor() { }

  reqGroupUrl(): string {
    return this.urlConnectServer;
  }

  reqWordsOfGroupUrl(reqGroup: string): string {
    return `${this.urlConnectServer}/${reqGroup}`;
  }

  reqRenameGroupUrl(oldName: string, newName: string): string {
    return `${this.urlConnectServer}/renamegroup/${oldName}/${newName}`;
  }

  reqDeleteWordsUrl(): string {
    return `${this.urlConnectServer}/delete`;
  }
}
