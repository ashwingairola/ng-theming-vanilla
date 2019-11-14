import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LOCAL_STORAGE } from '../providers/localstorage.provider';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCAL_STORAGE) localStorage: Storage
  ) {}

  changeTheme(theme: string) {
    const body = this.document.body;

    body.dataset.theme = theme;

    console.log(localStorage);
  }
}
