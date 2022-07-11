import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [];

  constructor() {
    this.loadState();
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((b) => b.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark: Bookmark = this.getBookmark(id) as Bookmark;
    Object.assign(bookmark, updatedFields);
    this.saveState();
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex((b) => b.id === id);
    if (bookmarkIndex === -1) return -1;
    this.bookmarks.splice(bookmarkIndex, 1);
    return this.saveState();
  }

  saveState() {
    console.log('data saved');
    let data: {
      notes: object[];
      bookmarks: Bookmark[];
      todos: object[];
    } | null = JSON.parse(localStorage.getItem('data') as string);
    if (data) {
      data.bookmarks = this.bookmarks;
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      localStorage.setItem(
        'data',
        JSON.stringify({
          notes: [],
          bookmarks: [],
          todos: [],
        })
      );
    }
    return this.bookmarks;
  }
  loadState() {
    try {
      let data: {
        notes: object[];
        bookmarks: Bookmark[];
        todos: object[];
      } | null = JSON.parse(localStorage.getItem('data') as string);
      if (data) {
        this.bookmarks = data.bookmarks as Bookmark[];
      }
    } catch (e) {
      console.log('Error Loading json form local storage');
      console.log(e);
    }
  }
}
