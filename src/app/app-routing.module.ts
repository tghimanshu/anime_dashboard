import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnilistAuthenticateComponent } from './pages/anilist/anilist-authenticate/anilist-authenticate.component';
import { AnilistSearchComponent } from './pages/anilist/anilist-search/anilist-search.component';
import { AnilistComponent } from './pages/anilist/anilist.component';
import { AddBookmarkComponent } from './pages/bookmarks/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './pages/bookmarks/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent } from './pages/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { NotesComponent } from './pages/notes/notes/notes.component';
import { GoogleComponent } from './pages/search-bar/google/google.component';
import { YoutubeComponent } from './pages/search-bar/youtube/youtube.component';
import { SettingsTabsComponent } from './pages/settings/settings-tabs/settings-tabs.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddTodoComponent } from './pages/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';
import { TodosComponent } from './pages/todos/todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }],
  },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  { path: 'youtube', component: YoutubeComponent, data: { tab: 4 } },
  { path: 'google', component: GoogleComponent, data: { tab: 5 } },
  {
    path: 'anilist',
    component: AnilistComponent,
    data: { tab: 6 },
    children: [
      { path: '', component: AnilistSearchComponent },
      { path: 'authenticate', component: AnilistAuthenticateComponent },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [{ path: 'tabs', component: SettingsTabsComponent }],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
