import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotkeyModule } from 'angular2-hotkeys';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { ContextMenuModule } from 'primeng/contextmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBgComponent } from './pages/info-bg/info-bg.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AudioPlayerComponent } from './pages/audio-player/audio-player.component';
import { BookmarksModule } from './modules/bookmarks/bookmarks.module';
import { TodosModule } from './modules/todos/todos.module';
import { NotesModule } from './modules/notes/notes.module';
import { SearchModule } from './modules/search/search.module';
import { SettingsModule } from './modules/settings/settings.module';
import { CommonsModule } from './modules/commons/commons.module';
import { AnilistModule } from './modules/anilist/anilist.module';
import { CtrlPComponent } from './pages/ctrl-p/ctrl-p.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBgComponent,
    TabsComponent,
    AudioPlayerComponent,
    CtrlPComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HotkeyModule.forRoot(),
    FontAwesomeModule,
    AutocompleteLibModule,
    // PRIME NG
    ContextMenuModule,
    BookmarksModule,
    TodosModule,
    NotesModule,
    SearchModule,
    SettingsModule,
    AnilistModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
