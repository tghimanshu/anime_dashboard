import { Component, OnInit } from '@angular/core';
import { SettingsService, Tabs } from 'src/app/shared/settings.service';

@Component({
  selector: 'app-settings-tabs',
  templateUrl: './settings-tabs.component.html',
  styleUrls: ['./settings-tabs.component.scss'],
})
export class SettingsTabsComponent implements OnInit {
  sourceProducts: any[] = [
    Tabs.bookmarks,
    Tabs.todos,
    Tabs.notes,
    Tabs.youtube,
    Tabs.google,
    Tabs.anilist,
  ];

  targetProducts: any[] = [];

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.settingsSubject.subscribe((settings) => {
      this.targetProducts = settings.tabs;
      this.sourceProducts = this.sourceProducts.filter((data) => {
        return settings.tabs.includes(data) ? false : true;
      });
    });
    // let data = localStorage.getItem('tabs');
    // if (data) {
    //   this.targetProducts = data.split(',');
    //   this.sourceProducts = this.sourceProducts.filter((value) => {
    //     return !this.targetProducts.includes(value);
    //   });
    // }
  }

  updateList() {
    // localStorage.setItem('tabs', this.targetProducts.join(','));
    this.settingsService.updateTabsSettings(this.targetProducts);
  }
}
