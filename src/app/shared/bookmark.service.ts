import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService implements OnDestroy {
  bookmarks: Bookmark[] = [
    { id: '1', name: 'wiki', url: new URL('https://wikipedia.org') },
  ];
  storageListenSub: Subscription;

  constructor() {
    this.loadState();
    this.storageListenSub = fromEvent(window, 'storage').subscribe(
      (event: any) => {
        if (event.key === 'notes') {
          this.loadState();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
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
    localStorage.setItem('notes', JSON.stringify(this.bookmarks));
  }
  loadState() {
    try {
      // const bookmarksInStorage = JSON.parse(
      //   localStorage.getItem('notes')!,
      //   (key, value) => {
      //     if (key === 'url') return new URL(value);
      //     return value;
      //   }
      // );
      // if (!notesInStorage) return;
      // this.bookmarks.length = 0; //clear the notes without losing the reference
      // this.bookmarks.push(...bookmarksInStorage);
    } catch (e) {
      console.log('Error Loading json form local storage');
      console.log(e);
    }
  }
}
