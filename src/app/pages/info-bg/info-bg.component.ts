import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-bg',
  templateUrl: './info-bg.component.html',
  styleUrls: ['./info-bg.component.scss'],
})
export class InfoBgComponent implements OnInit {
  background: any;

  @Output() closeBGInfo: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.background = JSON.parse(localStorage.getItem('background')!);
  }

  onInfoClose() {
    this.closeBGInfo.emit();
  }
}
