import { Component, OnInit } from '@angular/core';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faA } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs = ['bookmarks', 'todos', 'notes'];
  faYoutube = faYoutube;
  faGoogle = faGoogle;
  faA = faA;

  constructor() {}

  ngOnInit(): void {
    let data = localStorage.getItem('tabs');
    if (data) this.tabs = data.split(',');
  }
}
