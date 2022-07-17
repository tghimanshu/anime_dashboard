import { Component, OnInit } from '@angular/core';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faA } from '@fortawesome/free-solid-svg-icons';
import { SettingsService, Tabs } from 'src/app/shared/settings.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs = [Tabs.bookmarks, Tabs.todos, Tabs.notes];
  Tabs = Tabs;
  faYoutube = faYoutube;
  faGoogle = faGoogle;
  faA = faA;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    // let data = localStorage.getItem('tabs');
    this.settingsService.settingsSubject.subscribe((settings) => {
      this.tabs = settings.tabs;
    });
  }
}
