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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksComponent implements OnInit {
  constructor(public store: BookmarksStore, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.loadBookmarks$();
  }

  // openDialog

  // receives emmitted values from child components
  // onDelete($event: Bookmark):void {
  //   this.store.de
  // }
}
