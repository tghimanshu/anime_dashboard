import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotkeyModule } from 'angular2-hotkeys';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { ContextMenuModule } from 'primeng/contextmenu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookmarkComponent } from './pages/bookmarks/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './pages/bookmarks/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent } from './pages/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { BookmarkTileComponent } from './pages/bookmarks/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { NoteCardComponent } from './pages/notes/note-card/note-card.component';
import { NotesComponent } from './pages/notes/notes/notes.component';
import { AddTodoComponent } from './pages/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { TodosComponent } from './pages/todos/todos/todos.component';
import { InfoBgComponent } from './pages/info-bg/info-bg.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubeComponent } from './pages/search-bar/youtube/youtube.component';
import { GoogleComponent } from './pages/search-bar/google/google.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnilistSearchComponent } from './pages/anilist/anilist-search/anilist-search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SettingsTabsComponent } from './pages/settings/settings-tabs/settings-tabs.component';
import { AnilistAuthenticateComponent } from './pages/anilist/anilist-authenticate/anilist-authenticate.component';
import { AnilistComponent } from './pages/anilist/anilist.component';

import { MultiPipe } from './shared/pipes.pipe';
import { SettingsGeneralComponent } from './pages/settings/settings-general/settings-general.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    ManageBookmarksComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    EditNoteComponent,
    NoteCardComponent,
    NotesComponent,
    AddTodoComponent,
    EditTodoComponent,
    TodoItemComponent,
    TodosComponent,
    InfoBgComponent,
    TabsComponent,
    YoutubeComponent,
    GoogleComponent,
    AnilistSearchComponent,
    SettingsComponent,
    SettingsTabsComponent,
    AnilistAuthenticateComponent,
    AnilistComponent,
    MultiPipe,
    SettingsGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    HotkeyModule.forRoot(),
    FontAwesomeModule,
    // PRIME NG
    ContextMenuModule,
    InputSwitchModule,
    PickListModule,
    ButtonModule,
    CardModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
