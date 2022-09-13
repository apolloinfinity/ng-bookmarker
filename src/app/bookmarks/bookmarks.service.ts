import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from './models/Bookmarks';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  baseUrl: string = 'http://localhost:5050/api/bookmark';
  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getAllBookmarks(): Observable<{ bookmarks: Bookmark[] }> {
    return this.http.get<{ bookmarks: Bookmark[] }>(this.baseUrl);
  }

  getBookmark(id: number): Observable<{ bookmark: Bookmark }> {
    return this.http.get<{ bookmark: Bookmark }>(`${this.baseUrl}/${id}`);
  }

  addBookmark(bookmark: Bookmark): Observable<{ bookmark: Bookmark }> {
    return this.http.post<{ bookmark: Bookmark }>(
      `${this.baseUrl}`,
      bookmark,
      this.httpOptions
    );
  }

  updateBookmark(bookmark: Bookmark): Observable<{ bookmark: Bookmark }> {
    return this.http.patch<{ bookmark: Bookmark }>(
      `${this.baseUrl}/${bookmark._id}`,
      bookmark,
      this.httpOptions
    );
  }

  deleteBookmark(id: string): Observable<{ bookmark: string }> {
    return this.http.delete<{ bookmark: string }>(`${this.baseUrl}/${id}`);
  }
}
