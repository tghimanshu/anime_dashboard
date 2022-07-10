import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  keyword = 'title';
  results: any[] = [];
  searchForm = this.fb.group({
    searchTerm: [''],
  });

  constructor(private searchService: SearchService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  getSuggestions(text: string) {
    if (text.length % 3 === 0) {
      this.searchService.getVideos(text).subscribe((data) => {
        this.results = data;
        console.log(this.results);
      });
    }
  }

  searchYoutube() {
    console.log(this.searchForm.value.searchTerm);
    location.href =
      'https://www.youtube.com/results?search_query=' +
      this.searchForm.value.searchTerm;
  }
}
