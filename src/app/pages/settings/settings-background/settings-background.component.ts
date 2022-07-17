import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  BackgroundSettings,
  SettingsService,
} from 'src/app/shared/settings.service';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-settings-background',
  templateUrl: './settings-background.component.html',
  styleUrls: ['./settings-background.component.scss'],
})
export class SettingsBackgroundComponent implements OnInit {
  subscription!: Subscription;
  background!: BackgroundSettings;
  categories!: {
    name: string;
    id: number;
    count: number;
  }[];

  constructor(
    private settingsService: SettingsService,
    private utitlyService: UtilityService
  ) {}

  ngOnInit(): void {
    this.subscription = this.settingsService.settingsSubject.subscribe(
      (settings) => {
        this.background = settings.background;
      }
    );
    this.utitlyService.getBackgroundCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateSettings() {
    let category = this.categories.filter(
      (data) =>
        data.id ===
        (this.background.category ? +this.background.category.id : 0)
    )[0];
    this.settingsService.updateBackgroundSettings({
      apiKey: this.background.apiKey,
      category: category,
    });
  }
}
