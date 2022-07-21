import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from 'src/app/pages/notes/add-note/add-note.component';
import { EditNoteComponent } from 'src/app/pages/notes/edit-note/edit-note.component';
import { NoteCardComponent } from 'src/app/pages/notes/note-card/note-card.component';
import { NotesComponent } from 'src/app/pages/notes/notes/notes.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [
    AddNoteComponent,
    EditNoteComponent,
    NoteCardComponent,
    NotesComponent,
  ],
  imports: [CommonModule, CommonsModule],
  exports: [
    CommonsModule,
    AddNoteComponent,
    EditNoteComponent,
    NoteCardComponent,
    NotesComponent,
  ],
})
export class NotesModule {}
