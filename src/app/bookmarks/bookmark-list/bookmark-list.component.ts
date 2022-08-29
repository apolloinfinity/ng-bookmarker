import { Component, Input, OnInit } from '@angular/core';
import { BookmarksStore } from '../bookmark.store';
import { Bookmark } from '../models/Bookmarks';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css'],
})
export class BookmarkListComponent implements OnInit {
  @Input() bookmarks: Bookmark[] | null = [];

  constructor(private store: BookmarksStore) {}

  ngOnInit(): void {}
}
