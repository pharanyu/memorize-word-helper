import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlConnectServer = 'http://localhost:3001/api/words';

  constructor() { }

  CheckModeUrl(): void {
    if (isDevMode()) {
      this.urlConnectServer = 'http://localhost:3001/api/words';
    } else {
      this.urlConnectServer = `https://memorize-word-helper.herokuapp.com/api/words`;
    }
  }

  reqGroupUrl(): string {
    this.CheckModeUrl();
    return this.urlConnectServer;
  }

  reqWordsOfGroupUrl(reqGroup: string): string {
    this.CheckModeUrl();
    return `${this.urlConnectServer}/${reqGroup}`;
  }

  reqRenameGroupUrl(oldName: string, newName: string): string {
    this.CheckModeUrl();
    return `${this.urlConnectServer}/renamegroup/${oldName}/${newName}`;
  }

  reqDeleteWordsUrl(): string {
    this.CheckModeUrl();
    return `${this.urlConnectServer}/delete`;
  }
}
