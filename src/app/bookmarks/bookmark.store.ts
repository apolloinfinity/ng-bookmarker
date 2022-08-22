import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Bookmark } from './models/Bookmarks';

type Status = 'idle' | 'loading' | 'loaded' | 'error';
interface BookmarkState {
  bookmarks: Bookmark[];
  status: Status;
}

@Injectable()
export class BookmarksStore extends ComponentStore<BookmarkState> {
  constructor() {
    super({ bookmarks: [], status: 'idle' });
  }
}
