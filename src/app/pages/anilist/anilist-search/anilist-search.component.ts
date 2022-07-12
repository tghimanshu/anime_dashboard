import { Component, OnInit } from '@angular/core';
import { AnilistService, AnimeEntry } from 'src/app/shared/anilist.service';

@Component({
  selector: 'app-anilist-search',
  templateUrl: './anilist-search.component.html',
  styleUrls: ['./anilist-search.component.scss'],
})
export class AnilistSearchComponent implements OnInit {
  list!: AnimeEntry[];
  constructor(private anilistService: AnilistService) {}

  ngOnInit(): void {
    this.anilistService.getWatchList().subscribe((data) => {
      this.list = data.data.MediaListCollection.lists[0].entries;
      console.log(new Date(1658046600 * 1000));
    });
  }
}
