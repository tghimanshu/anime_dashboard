import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  GeneralSettings,
  SettingsService,
} from 'src/app/shared/settings.service';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss'],
})
export class SettingsGeneralComponent implements OnInit {
  generalSettings!: GeneralSettings;
  subscription!: Subscription;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.settingsService.settingsSubject.subscribe(
      (settings) => {
        this.generalSettings = settings.general;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateSettings() {
    this.settingsService.updateGeneralSettings({
      ...this.generalSettings,
    });
  }
}
