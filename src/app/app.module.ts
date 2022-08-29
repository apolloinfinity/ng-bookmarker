import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './bookmarks/form/form.component';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { BookmarksStore } from './bookmarks/bookmark.store';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    FormComponent,
    BookmarkListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
