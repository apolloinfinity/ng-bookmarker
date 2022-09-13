import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BookmarksStore } from './bookmark.store';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  providers: [BookmarksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksComponent implements OnInit {
  constructor(public store: BookmarksStore, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.loadBookmarks$();
  }
}
