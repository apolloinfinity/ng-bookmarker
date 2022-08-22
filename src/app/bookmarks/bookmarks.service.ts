import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Bookmark } from './models/Bookmarks';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  baseUrl: string = 'localhost:5050/api/bookmark';
  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getAllBookmarks(): Observable<Bookmark[]> {
    return this.http
      .get<Bookmark[]>(this.baseUrl)
      .pipe(tap((users) => console.log(users)));
  }

  getBookmark(id: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.baseUrl}/${id}`);
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(
      `${this.baseUrl}`,
      bookmark,
      this.httpOptions
    );
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.patch<Bookmark>(
      `${this.baseUrl}`,
      bookmark,
      this.httpOptions
    );
  }

  deleteBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.baseUrl}/${bookmark._id}`;
    return this.http.delete<Bookmark>(`${this.baseUrl}/${bookmark._id}`);
  }
}
