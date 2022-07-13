import { Component, OnInit } from '@angular/core';
import {
  AnilistService,
  CoverImage,
  Title,
} from 'src/app/shared/anilist.service';

interface Info {
  progress: number;
  title: Title;
  episodes: number;
  coverImage: CoverImage;
  timeUntilAiring: number;
  airingAt: number;
}

@Component({
  selector: 'app-anilist-search',
  templateUrl: './anilist-search.component.html',
  styleUrls: ['./anilist-search.component.scss'],
})
export class AnilistSearchComponent implements OnInit {
  keyword: string = 'title';
  list!: Info[];
  list2!: any[];
  constructor(private anilistService: AnilistService) {}

  ngOnInit(): void {
    this.anilistService.getWatchList().subscribe((data) => {
      this.list = data;
    });
  }
  getSuggestions(text: string) {
    if (text.length % 3 === 0) {
      this.anilistService.getSearchResult(text).subscribe((data) => {
        console.log(data);
        this.list2 = data.map((d: any) => ({
          ...d,
          title: d.title.english,
        }));
      });
    }
  }

  selectedItem(item: any) {
    let url = 'https://anilist.co/anime/' + item.id;
    location.href = url;
  }
}
