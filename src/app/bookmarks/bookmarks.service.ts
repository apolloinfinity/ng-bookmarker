import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from './models/Bookmarks';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  baseUrl: string = 'http://localhost/api/bookmark';
  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  getAllBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.baseUrl);
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
      `${this.baseUrl}/${bookmark._id}`,
      bookmark,
      this.httpOptions
    );
  }

  deleteBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.baseUrl}/${bookmark._id}`;
    return this.http.delete<Bookmark>(`${this.baseUrl}/${bookmark._id}`);
  }
}
