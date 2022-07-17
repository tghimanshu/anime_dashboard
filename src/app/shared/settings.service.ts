import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Settings {
  general: GeneralSettings;
  tabs: Tabs[];
  background: BackgroundSettings;
}
export enum Tabs {
  bookmarks = 'bookmarks',
  todos = 'todos',
  notes = 'notes',
  youtube = 'youtube',
  google = 'google',
  anilist = 'anilist',
}
export interface GeneralSettings {
  showTabs: boolean;
  showQuote: boolean;
  showInfoBtn: boolean;
  showReloadBtn: boolean;
}
export interface BackgroundSettings {
  apiKey: string;
  category?: {
    name: string;
    id: number;
    count: number;
  };
  sub_category?: {
    name: string;
    id: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public settings: Settings = {
    general: {
      showTabs: true,
      showQuote: true,
      showInfoBtn: true,
      showReloadBtn: true,
    },
    tabs: [Tabs.bookmarks, Tabs.todos, Tabs.notes],
    background: {
      apiKey: '0d52ba4842faf8b1e6fbff7313e786d5',
      category: {
        name: 'Anime',
        id: 3,
        count: 206869,
      },
    },
  };
  settingsSubject: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(
    this.settings
  );

  constructor() {}

  loadSettings() {
    let settings = localStorage.getItem('settings') as string;
    if (settings) {
      this.settings = JSON.parse(settings);
      this.settingsSubject.next(this.settings);
    }
  }

  saveSettings(updatedSettings: Partial<Settings>) {
    this.settings = {
      ...this.settings,
      ...updatedSettings,
    };
    this.settingsSubject.next(this.settings);
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  updateGeneralSettings(updatedSettings: Partial<GeneralSettings>) {
    let update: GeneralSettings = {
      ...this.settings.general,
      ...updatedSettings,
    };
    this.saveSettings({
      general: update,
    });
  }

  updateTabsSettings(updatedSettings: Tabs[]) {
    this.saveSettings({
      tabs: updatedSettings,
    });
  }

  updateBackgroundSettings(updatedSettings: Partial<BackgroundSettings>) {
    let update: BackgroundSettings = {
      ...this.settings.background,
      ...updatedSettings,
    };
    this.saveSettings({
      background: update,
    });
  }
}
