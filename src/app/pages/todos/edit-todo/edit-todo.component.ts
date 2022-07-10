import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo!: Todo;
  showValidationErrors!: boolean;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')!;
      this.todo = this.todoService.getTodo(idParam)!;
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return (this.showValidationErrors = true);
    this.todoService.updateTodo(this.todo.id, form.value);
    return this.router.navigateByUrl('/todos');
  }
}
