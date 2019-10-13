import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlConnectServer = '/api/words';

  constructor() { }

  reqGroupUrl(): string {
    return this.urlConnectServer;
  }

  reqWordsOfGroupUrl(reqGroup: string): string {
    return `${this.urlConnectServer}/${reqGroup}`;
  }

  reqWordsOfListGroupUrl(): string {
    return `${this.urlConnectServer}/listgroup`;
  }

  reqRenameGroupUrl(oldName: string, newName: string): string {
    return `${this.urlConnectServer}/renamegroup/${oldName}/${newName}`;
  }

  reqDeleteWordsUrl(): string {
    return `${this.urlConnectServer}/delete`;
  }
}
