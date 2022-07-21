import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { SettingsTabsComponent } from 'src/app/pages/settings/settings-tabs/settings-tabs.component';
import { SettingsGeneralComponent } from 'src/app/pages/settings/settings-general/settings-general.component';
import { SettingsBackgroundComponent } from 'src/app/pages/settings/settings-background/settings-background.component';
import { SettingsAnilistComponent } from 'src/app/pages/settings/settings-anilist/settings-anilist.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsTabsComponent,
    SettingsGeneralComponent,
    SettingsBackgroundComponent,
    SettingsAnilistComponent,
  ],
  imports: [CommonModule, CommonsModule, AppRoutingModule, PickListModule],
  exports: [
    AppRoutingModule,
    SettingsComponent,
    SettingsTabsComponent,
    SettingsGeneralComponent,
    SettingsBackgroundComponent,
    SettingsAnilistComponent,
  ],
})
export class SettingsModule {}
