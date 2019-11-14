import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  LOCAL_STORAGE,
  getLocalStorage
} from './providers/localstorage.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage, deps: [PLATFORM_ID] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
