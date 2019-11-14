import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, InjectionToken, Inject } from '@angular/core';

export function getLocalStorage(platFormId: any): Storage | null {
  console.log(platFormId);
  if (isPlatformBrowser(platFormId)) {
    return window.localStorage;
  }

  if (isPlatformServer(platFormId)) {
    return null;
  }

  return null;
}

export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage');
