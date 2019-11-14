import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LOCAL_STORAGE } from '../providers/localstorage.provider';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCAL_STORAGE) private localStorage: Storage
  ) {}

  initTheme() {
    const theme = this.localStorage.getItem('theme');
    this.document.body.dataset.theme = theme || 'theme-default';
  }

  changeTheme(theme: string) {
    const body = this.document.body;

    body.dataset.theme = theme;

    this.localStorage.setItem('theme', theme);
  }
}
