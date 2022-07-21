import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from 'src/app/pages/search-bar/youtube/youtube.component';
import { GoogleComponent } from 'src/app/pages/search-bar/google/google.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [YoutubeComponent, GoogleComponent],
  imports: [CommonModule, CommonsModule],
  exports: [CommonsModule, YoutubeComponent, GoogleComponent],
})
export class SearchModule {}
