import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlConnectServer = 'http://localhost:3001/api/words';

  constructor() {}

  reqGroupUrl(): string {
    return this.urlConnectServer;
  }

  reqWordsOfGroupUrl(reqGroup: string): string {
    return `${this.urlConnectServer}/${reqGroup}`;
  }

  reqRenameGroupUrl(oldName: string, newName: string): string {
    return `${this.urlConnectServer}/renamegroup/${oldName}/${newName}`;
  }
}
