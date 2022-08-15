import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctrl-p',
  templateUrl: './ctrl-p.component.html',
  styleUrls: ['./ctrl-p.component.scss'],
})
export class CtrlPComponent implements OnInit, AfterViewInit {
  options = [
    {
      title: 'Open Notes',
      shortcut: 'n',
      command: () => this.route.navigate(['/notes']),
    },
    {
      title: 'Open Bookmarks',
      shortcut: 'b',
      command: () => this.route.navigate(['/bookmarks']),
    },
    {
      title: 'Open Todos',
      shortcut: 't',
      command: () => this.route.navigate(['/todos']),
    },
  ];
  @Output() disableCtrlP: EventEmitter<void> = new EventEmitter();

  @ViewChildren('textField') textField: any;
  constructor(private route: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // !this.textField.first.isFocused &&
    this.textField.first.focus();
    this.cdr.detectChanges();
  }

  selectedOption(value: any) {
    this.disableCtrlP.emit();
    value.command();
  }
}
