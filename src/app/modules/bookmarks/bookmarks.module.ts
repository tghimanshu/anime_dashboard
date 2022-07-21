import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';

import { AddBookmarkComponent } from 'src/app/pages/bookmarks/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from 'src/app/pages/bookmarks/bookmarks/bookmarks.component';
import { EditBookmarkComponent } from 'src/app/pages/bookmarks/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent } from 'src/app/pages/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { BookmarkTileComponent } from 'src/app/pages/bookmarks/bookmark-tile/bookmark-tile.component';

@NgModule({
  declarations: [
    AddBookmarkComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    ManageBookmarksComponent,
    BookmarkTileComponent,
  ],
  imports: [CommonModule, CommonsModule],
  exports: [
    CommonsModule,
    AddBookmarkComponent,
    BookmarksComponent,
    EditBookmarkComponent,
    ManageBookmarksComponent,
    BookmarkTileComponent,
  ],
})
export class BookmarksModule {}
