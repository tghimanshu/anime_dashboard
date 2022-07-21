import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { AnilistSearchComponent } from 'src/app/pages/anilist/anilist-search/anilist-search.component';
import { AnilistAuthenticateComponent } from 'src/app/pages/anilist/anilist-authenticate/anilist-authenticate.component';
import { AnilistComponent } from 'src/app/pages/anilist/anilist.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AnilistSearchComponent,
    AnilistAuthenticateComponent,
    AnilistComponent,
  ],
  imports: [CommonModule, CommonsModule, AutocompleteLibModule, TagModule],
  exports: [
    CommonsModule,
    AnilistSearchComponent,
    AnilistAuthenticateComponent,
    AnilistComponent,
  ],
})
export class AnilistModule {}
