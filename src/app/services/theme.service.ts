import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeTheme(theme: string) {
    const body = this.document.body;

    body.dataset.theme = theme;
  }
}
