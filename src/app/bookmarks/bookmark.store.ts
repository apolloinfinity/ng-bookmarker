import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap, catchError, EMPTY, finalize, Observable } from 'rxjs';

import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './models/Bookmarks';

export enum Status {
  'idle',
  'loading',
  'loaded',
  'error',
}
interface BookmarkState {
  bookmarks: Bookmark[];
  status: Status;
}

@Injectable()
export class BookmarksStore extends ComponentStore<BookmarkState> {
  constructor(private bookmarkService: BookmarksService) {
    super({ bookmarks: [], status: Status.idle });
  }

  // selectors
  getBookmarks$ = this.select(({ bookmarks }) => bookmarks);
  // updaters
  setBookmarks = this.updater((state, bookmarks: Bookmark[]) => {
    return { ...state, bookmarks };
  });

  addBookmark = this.updater((state, bookmark: Bookmark) => {
    return {
      ...state,
      bookmarks: [...state.bookmarks, bookmark],
    };
  });

  updateBookmark = this.updater((state, updatedBookmark: Bookmark) => {
    return {
      ...state,
      bookmarks: state.bookmarks.map((bookmark: Bookmark) =>
        bookmark._id === updatedBookmark._id ? updatedBookmark : bookmark
      ),
    };
  });

  deleteBookmark = this.updater((state, deletedBookmark: Bookmark) => {
    return {
      ...state,
      bookmarks: state.bookmarks.filter(
        (bookmark: Bookmark) => bookmark._id !== deletedBookmark._id
      ),
    };
  });

  // Effects for API calls. Think of them as Thunks from RTK
  loadBookmarks$ = this.effect((origin$) => {
    return origin$.pipe(
      tap(() => this.setStatusLoading()),
      switchMap(() =>
        this.bookmarkService.getAllBookmarks().pipe(
          tap((bookmarks) => this.setBookmarks(bookmarks)),
          catchError(() => {
            alert('Error getting bookmarks from API');
            return EMPTY;
          }),
          finalize(() => this.setStatusLoaded())
        )
      )
    );
  });

  deleteBookmark$ = this.effect((payload$: Observable<Bookmark>) => {
    return payload$.pipe(
      switchMap((bookmark) =>
        this.bookmarkService.deleteBookmark(bookmark).pipe(
          tap((bookmark) => {
            this.deleteBookmark(bookmark);
            this.setStatusLoading();
          }),
          catchError(() => {
            alert('Error deleting bookmark from API');
            return EMPTY;
          }),
          finalize(() => this.setStatusLoaded())
        )
      )
    );
  });

  // Status changes
  setStatusLoading = this.updater((state) => ({
    ...state,
    status: Status.loading,
  }));

  setStatusLoaded = this.updater((state) => ({
    ...state,
    status: Status.loaded,
  }));

  setStatusError = this.updater((state) => ({
    ...state,
    status: Status.error,
  }));
}
