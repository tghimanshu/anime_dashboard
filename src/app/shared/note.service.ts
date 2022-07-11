import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];

  constructor() {
    this.loadState();
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note: Note = this.getNote(id) as Note;
    Object.assign(note, updatedFields);
    this.saveState();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex === -1) return;
    this.notes.splice(noteIndex, 1);
    this.saveState();
  }

  saveState() {
    console.log('data saved');
    let data: {
      notes: Note[];
      bookmarks: object[];
      todos: object[];
    } | null = JSON.parse(localStorage.getItem('data') as string);
    if (data) {
      data.notes = this.notes;
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
    return this.notes;
  }
  loadState() {
    try {
      let data: {
        notes: Note[];
        bookmarks: object[];
        todos: object[];
      } | null = JSON.parse(localStorage.getItem('data') as string);
      if (data) {
        this.notes = data.notes as Note[];
      }
    } catch (e) {
      console.log('Error Loading json form local storage');
      console.log(e);
    }
  }
}
