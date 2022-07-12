import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-tabs',
  templateUrl: './settings-tabs.component.html',
  styleUrls: ['./settings-tabs.component.scss'],
})
export class SettingsTabsComponent implements OnInit {
  sourceProducts: any[] = [
    'bookmarks',
    'todos',
    'notes',
    'youtube',
    'google',
    'anilist',
  ];

  targetProducts: any[] = [];

  constructor() {}

  ngOnInit() {
    let data = localStorage.getItem('tabs');
    if (data) {
      this.targetProducts = data.split(',');
      this.sourceProducts = this.sourceProducts.filter((value) => {
        return !this.targetProducts.includes(value);
      });
    }
  }

  updateList() {
    localStorage.setItem('tabs', this.targetProducts.join(','));
  }
}
