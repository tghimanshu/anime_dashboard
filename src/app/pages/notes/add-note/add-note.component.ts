import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  showValidationErrors!: Boolean;

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    const note = new Note(form.value.title, form.value.content);
    this.noteService.addNote(note);
    return this.router.navigateByUrl('/notes');
  }
}
