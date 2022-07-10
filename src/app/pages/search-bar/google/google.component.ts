import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/shared/search.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
})
export class GoogleComponent implements OnInit {
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
      'https://www.google.com/search?q=' + this.searchForm.value.searchTerm;
  }
}
