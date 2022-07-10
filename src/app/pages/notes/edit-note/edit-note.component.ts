import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note!: Note;
  showValidationErrors!: Boolean;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')!;
      this.note = this.noteService.getNote(idParam)!;
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    this.noteService.updateNote(this.note.id, form.value);
    return this.router.navigateByUrl('/notes');
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    return this.router.navigateByUrl('/notes');
  }
}
