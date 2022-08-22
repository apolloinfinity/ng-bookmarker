import { Component, OnInit } from '@angular/core';
import { BookmarksStore } from './bookmark.store';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  providers: [BookmarksStore],
})
export class BookmarksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
